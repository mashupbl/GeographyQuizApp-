/**
 * GeoQuiz Explorer - Administrator Dashboard & Student Practice Monitoring
 * 
 * Features:
 * - Passcode-protected Administrator Portal with session state
 * - Total registered students, total attempts, practiced vs not practiced
 * - Filterable recent practice activity (search student, continent, difficulty, mode, date)
 * - Individual student profile drilldown with full chronological history
 * - Attempt scorecard inspect modal with immutable question snapshot
 * - Cloud Database (Firebase Firestore) configuration, testing & sync
 * - Real saved records; strict privacy enforcement
 */

const AdminDashboard = (function () {
  'use strict';

  const state = {
    isAuthenticated: false,
    activeTab: 'monitoring', // 'monitoring' | 'students' | 'questions' | 'cloud'
    filters: {
      studentSearch: '',
      continent: 'all',
      difficulty: 'all',
      mode: 'all',
      dateRange: 'all'
    },
    selectedStudent: null,
    attempts: [],
    students: []
  };

  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  function formatDuration(sec) {
    const s = parseInt(sec, 10) || 0;
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function formatDateTime(isoStr) {
    if (!isoStr) return '-';
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(undefined, { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }) + ' ' + d.toLocaleTimeString(undefined, { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } catch (e) {
      return isoStr;
    }
  }

  /**
   * Initialize Admin Module
   */
  function init() {
    if (sessionStorage.getItem('geoquiz_admin_logged_in') === 'true') {
      state.isAuthenticated = true;
    }

    setupAuthListeners();
    setupTabListeners();
    setupFilterListeners();
    setupTableActionListeners();
    setupCloudListeners();
    updateHeaderStorageStatus();
  }

  /**
   * Update header storage badge (Cloud vs Local)
   */
  function updateHeaderStorageStatus() {
    const el = document.getElementById('header-storage-status');
    if (!el) return;

    if (Store.isCloudActive()) {
      el.className = 'badge badge-success';
      el.innerHTML = '🔥 Cloud (Firebase)';
      el.title = 'Connected to Google Cloud Firestore database';
    } else {
      el.className = 'badge badge-meta';
      el.innerHTML = '💾 Local Mode';
      el.title = 'Running on local browser IndexedDB';
    }
  }

  /**
   * Check Auth status or open login modal
   */
  async function openAdminPortal(targetTab = 'monitoring') {
    if (!state.isAuthenticated) {
      const isCloud = Store.isCloudActive();
      const tabCloud = document.getElementById('tab-login-cloud');
      const tabLocal = document.getElementById('tab-login-local');
      const panelCloud = document.getElementById('form-admin-login-cloud');
      const panelLocal = document.getElementById('form-admin-login');

      if (isCloud && tabCloud && tabLocal && panelCloud && panelLocal) {
        tabCloud.classList.add('active');
        tabLocal.classList.remove('active');
        panelCloud.style.display = 'block';
        panelLocal.style.display = 'none';
      } else if (tabCloud && tabLocal && panelCloud && panelLocal) {
        tabLocal.classList.add('active');
        tabCloud.classList.remove('active');
        panelLocal.style.display = 'block';
        panelCloud.style.display = 'none';
      }

      const passInput = document.getElementById('input-admin-passcode');
      if (passInput) passInput.value = '';
      const loginErr = document.getElementById('admin-login-error');
      if (loginErr) loginErr.style.display = 'none';
      const cloudErr = document.getElementById('admin-cloud-login-error');
      if (cloudErr) cloudErr.style.display = 'none';

      openModal('modal-admin-login');
      return;
    }

    state.activeTab = targetTab;
    showAdminView();
    await refresh();
  }

  function showAdminView() {
    if (window.GeoApp && window.GeoApp.showView) {
      window.GeoApp.showView(document.getElementById('view-admin'));
    }
  }

  /**
   * Refresh all admin data
   */
  async function refresh() {
    if (!state.isAuthenticated) return;

    updateHeaderStorageStatus();
    state.students = await Store.getAllStudents();
    state.attempts = await Store.getAllAttempts(state.filters);

    renderMetrics();
    renderSubTab();
  }

  /**
   * Render Top Metrics Bar
   */
  function renderMetrics() {
    const totalStudents = state.students.length;
    const allAttempts = state.attempts;
    const totalAttemptsCount = allAttempts.length;

    const practicedCount = state.students.filter(s => (s.attemptsCount || 0) > 0).length;
    const notPracticedCount = totalStudents - practicedCount;

    let avgAcc = 0;
    let totalSecs = 0;
    if (totalAttemptsCount > 0) {
      const sumPercent = allAttempts.reduce((sum, a) => sum + (a.scorePercent || 0), 0);
      avgAcc = Math.round(sumPercent / totalAttemptsCount);
      totalSecs = allAttempts.reduce((sum, a) => sum + (a.secondsElapsed || 0), 0);
    }

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setVal('admin-metric-total-students', totalStudents);
    setVal('admin-metric-total-attempts', totalAttemptsCount);
    setVal('admin-metric-practiced-count', practicedCount);
    setVal('admin-metric-not-practiced-count', notPracticedCount);
    setVal('admin-metric-avg-score', `${avgAcc}%`);
    setVal('admin-metric-total-time', formatDuration(totalSecs));
  }

  /**
   * Render Active Sub-tab
   */
  function renderSubTab() {
    const tabMonitoring = document.getElementById('admin-tab-monitoring-content');
    const tabStudents = document.getElementById('admin-tab-students-content');
    const tabQuestions = document.getElementById('admin-tab-questions-content');
    const tabCloud = document.getElementById('admin-tab-cloud-content');

    const btnNavMonitoring = document.getElementById('admin-subtab-monitoring');
    const btnNavStudents = document.getElementById('admin-subtab-students');
    const btnNavQuestions = document.getElementById('admin-subtab-questions');
    const btnNavCloud = document.getElementById('admin-subtab-cloud');

    [btnNavMonitoring, btnNavStudents, btnNavQuestions, btnNavCloud].forEach(b => b && b.classList.remove('active'));
    [tabMonitoring, tabStudents, tabQuestions, tabCloud].forEach(t => t && (t.style.display = 'none'));

    if (state.activeTab === 'monitoring') {
      if (btnNavMonitoring) btnNavMonitoring.classList.add('active');
      if (tabMonitoring) tabMonitoring.style.display = 'block';
      renderRecentAttemptsTable();
    } else if (state.activeTab === 'students') {
      if (btnNavStudents) btnNavStudents.classList.add('active');
      if (tabStudents) tabStudents.style.display = 'block';
      renderStudentsDirectoryTable();
    } else if (state.activeTab === 'questions') {
      if (btnNavQuestions) btnNavQuestions.classList.add('active');
      if (tabQuestions) tabQuestions.style.display = 'block';
      if (window.QuestionAdmin) window.QuestionAdmin.refresh();
    } else if (state.activeTab === 'cloud') {
      if (btnNavCloud) btnNavCloud.classList.add('active');
      if (tabCloud) tabCloud.style.display = 'block';
      renderCloudPanel();
    }
  }

  /**
   * Render Recent Practice Activity Table
   */
  function renderRecentAttemptsTable() {
    const tbody = document.getElementById('admin-attempts-tbody');
    const countEl = document.getElementById('admin-attempts-count');
    if (!tbody) return;

    if (countEl) countEl.textContent = `${state.attempts.length} record(s) found`;

    if (state.attempts.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11" class="text-center" style="padding: 2rem; color: var(--text-muted);">
            No practice attempts match the selected criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = state.attempts.map(att => {
      const modeBadge = att.mode === 'exam' 
        ? '<span class="badge badge-exam">📝 Exam</span>' 
        : '<span class="badge badge-practice">💡 Practice</span>';

      const accuracyBadge = att.scorePercent >= 80 
        ? 'badge-success' 
        : (att.scorePercent >= 50 ? 'badge-warning' : 'badge-danger');

      return `
        <tr>
          <td>${esc(formatDateTime(att.completedAt))}</td>
          <td><strong>${esc(att.studentId)}</strong></td>
          <td>
            <a href="javascript:void(0)" class="student-link" data-view-student="${esc(att.studentId)}">
              ${esc(att.studentName)}
            </a>
          </td>
          <td>${modeBadge}</td>
          <td>${esc(att.continent)}</td>
          <td><span class="badge badge-diff diff-${(att.difficulty || '').toLowerCase()}">${esc(att.difficulty)}</span></td>
          <td>${att.totalQuestions} Qs</td>
          <td>
            <span class="text-success">✓${att.correctCount}</span> / 
            <span class="text-danger">✗${att.incorrectCount}</span>
          </td>
          <td>
            <span class="badge ${accuracyBadge}">${att.scorePercent}%</span>
          </td>
          <td>${formatDuration(att.secondsElapsed)}</td>
          <td>
            <button type="button" class="btn btn-secondary btn-sm" data-view-attempt="${esc(att.id)}">
              Inspect
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  /**
   * Render Students Directory Table
   */
  function renderStudentsDirectoryTable() {
    const tbody = document.getElementById('admin-students-tbody');
    const countEl = document.getElementById('admin-students-count');
    if (!tbody) return;

    let list = [...state.students];

    if (state.filters.studentSearch) {
      const q = state.filters.studentSearch.trim().toLowerCase();
      list = list.filter(s => 
        (s.studentId && s.studentId.toLowerCase().includes(q)) ||
        (s.name && s.name.toLowerCase().includes(q))
      );
    }

    if (countEl) countEl.textContent = `${list.length} student(s) registered`;

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center" style="padding: 2rem; color: var(--text-muted);">
            No registered students found.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(stu => {
      const attemptsCount = stu.attemptsCount || 0;
      const statusBadge = attemptsCount > 0 
        ? `<span class="badge badge-success">✓ Practiced (${attemptsCount})</span>`
        : '<span class="badge badge-warning">Not Yet Practiced</span>';

      return `
        <tr>
          <td><strong>${esc(stu.studentId)}</strong></td>
          <td>${esc(stu.name)}</td>
          <td>${statusBadge}</td>
          <td>${formatDateTime(stu.registeredAt)}</td>
          <td>${formatDateTime(stu.lastActiveAt)}</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm" data-view-student="${esc(stu.studentId)}">
              View History (${attemptsCount})
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  /**
   * Render Cloud Database Panel
   */
  /**
   * Render Cloud Database Panel
   */
  async function renderCloudPanel() {
    const statusEl = document.getElementById('fb-connection-status');
    const authCardEl = document.getElementById('fb-auth-status-card');
    const isCloud = Store.isCloudActive();

    if (statusEl) {
      if (isCloud) {
        statusEl.innerHTML = `
          <div class="alert alert-info" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <strong>🔥 Cloud Firestore is ACTIVE and Connected!</strong><br>
              <span style="font-size:0.82rem;">Connected Project ID: <code>${esc(FirebaseManager.getProjectId())}</code></span>
            </div>
            <button type="button" id="btn-fb-sync-local" class="btn btn-primary btn-sm">
              ⬆️ Upload Local Database to Cloud
            </button>
          </div>
        `;
        const btnSync = document.getElementById('btn-fb-sync-local');
        if (btnSync) btnSync.addEventListener('click', handleSyncLocalToCloud);
      } else {
        statusEl.innerHTML = `
          <div class="alert alert-info">
            <strong>💾 Currently Running in Local Mode (IndexedDB)</strong><br>
            <span style="font-size:0.82rem;">Questions and student attempts are stored safely in this browser. To enable real-time multi-device sync across different student and teacher devices, connect your free Firebase Firestore project below.</span>
          </div>
        `;
      }
    }

    if (authCardEl) {
      if (typeof FirebaseManager !== 'undefined' && FirebaseManager.getAuth()) {
        const user = FirebaseManager.getCurrentUser();
        const isAdm = await FirebaseManager.isCurrentAdminVerified();

        if (user) {
          authCardEl.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
              <div>
                <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Firebase Auth Identity &amp; Role</h4>
                <div style="font-size: 0.85rem; line-height: 1.6;">
                  <div><strong>Account:</strong> ${user.isAnonymous ? '👤 Anonymous Student Session' : `📧 ${esc(user.email)}`}</div>
                  <div><strong>Firebase Auth UID:</strong> <code style="user-select: all;">${esc(user.uid)}</code></div>
                  <div style="margin-top: 0.25rem;">
                    <strong>Firestore Access Role:</strong> 
                    ${isAdm 
                      ? '<span class="badge badge-success">Verified Administrator ✅ (Full Read/Write Access)</span>' 
                      : '<span class="badge badge-warning">Unverified / Student ⚠️ (Read-Only Practice Access)</span>'}
                  </div>
                </div>
                ${!isAdm ? `
                  <p class="form-hint" style="margin-top: 0.75rem; color: #b45309;">
                    ℹ️ To grant this account Administrator rights: Open <a href="https://console.firebase.google.com/" target="_blank" rel="noopener">Firebase Console</a> &rarr; Firestore Database &rarr; Start collection <code>admins</code> &rarr; Add document with Document ID: <code>${esc(user.uid)}</code>.
                  </p>
                ` : ''}
              </div>
              <div style="display: flex; gap: 0.5rem;">
                <button type="button" id="btn-cloud-sign-out" class="btn btn-secondary btn-sm">Sign Out User</button>
              </div>
            </div>
          `;
          const btnSignOut = document.getElementById('btn-cloud-sign-out');
          if (btnSignOut) {
            btnSignOut.addEventListener('click', async () => {
              await FirebaseManager.signOutUser();
              sessionStorage.removeItem('geoquiz_admin_logged_in');
              state.isAuthenticated = false;
              alert('Signed out from Firebase.');
              window.location.reload();
            });
          }
        } else {
          authCardEl.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
              <div>
                <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem;">Firebase Auth Identity</h4>
                <p class="card-desc">No Firebase administrator account is currently signed in.</p>
              </div>
              <button type="button" id="btn-cloud-sign-in-prompt" class="btn btn-primary btn-sm">Sign In as Admin 🔥</button>
            </div>
          `;
          const btnSignInPrompt = document.getElementById('btn-cloud-sign-in-prompt');
          if (btnSignInPrompt) {
            btnSignInPrompt.addEventListener('click', () => {
              openAdminPortal('cloud');
            });
          }
        }
      } else {
        authCardEl.innerHTML = '<p class="text-muted" style="font-size:0.85rem;">Firebase Auth SDK not active. Running in offline Local Mode.</p>';
      }
    }

    // Populate existing config into text areas/inputs if available
    const existing = FirebaseManager.getConfig();
    if (existing) {
      const jsonArea = document.getElementById('fb-config-json');
      if (jsonArea && !jsonArea.value) {
        jsonArea.value = JSON.stringify(existing, null, 2);
      }
    }
  }

  async function handleSyncLocalToCloud() {
    if (!confirm('This will upload all local questions, students, and quiz attempts from this browser into your Cloud Firestore database.\n\nProceed?')) {
      return;
    }
    try {
      const res = await Store.syncLocalToCloud();
      alert(`Sync Complete!\n\n• ${res.questions} questions uploaded\n• ${res.students} student profiles synced\n• ${res.attempts} attempt scorecards saved to Cloud.`);
      await refresh();
    } catch (err) {
      alert(`Sync failed: ${err.message}`);
    }
  }

  /**
   * Setup Cloud Settings Listeners
   */
  function setupCloudListeners() {
    const formConfig = document.getElementById('form-firebase-config');
    const btnTest = document.getElementById('btn-fb-test');
    const btnDisconnect = document.getElementById('btn-fb-disconnect');

    if (formConfig) {
      formConfig.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawJson = document.getElementById('fb-config-json').value.trim();
        let parsed = null;

        try {
          // If user pasted "const firebaseConfig = { ... };" or raw JSON
          let cleaned = rawJson;
          if (cleaned.includes('=')) {
            cleaned = cleaned.substring(cleaned.indexOf('=') + 1);
          }
          if (cleaned.endsWith(';')) {
            cleaned = cleaned.slice(0, -1);
          }
          // Fix unquoted keys if necessary
          cleaned = cleaned.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":');
          parsed = JSON.parse(cleaned);
        } catch (err) {
          alert('Could not parse Firebase configuration. Please ensure you paste valid JSON or copy the exact firebaseConfig object from the Firebase Console.');
          return;
        }

        if (!parsed.projectId || !parsed.apiKey) {
          alert('Configuration must include at least "projectId" and "apiKey".');
          return;
        }

        FirebaseManager.saveConfig(parsed);
        alert('Firebase configuration saved! The application will now reload to initialize Cloud Firestore.');
        window.location.reload();
      });
    }

    if (btnTest) {
      btnTest.addEventListener('click', async () => {
        btnTest.disabled = true;
        btnTest.textContent = 'Testing...';
        const res = await FirebaseManager.testConnection();
        btnTest.disabled = false;
        btnTest.textContent = 'Test Connection 🔍';
        alert(res.message);
      });
    }

    if (btnDisconnect) {
      btnDisconnect.addEventListener('click', () => {
        if (confirm('Disconnect Firebase and revert to local browser storage?')) {
          FirebaseManager.clearConfig();
          alert('Firebase configuration cleared. The page will now reload in Local IndexedDB mode.');
          window.location.reload();
        }
      });
    }
  }

  /**
   * Setup Auth Modal Listeners
   */
  function setupAuthListeners() {
    const tabCloud = document.getElementById('tab-login-cloud');
    const tabLocal = document.getElementById('tab-login-local');
    const formCloud = document.getElementById('form-admin-login-cloud');
    const formLocal = document.getElementById('form-admin-login');
    const btnLogout = document.getElementById('btn-admin-logout');
    const btnChangePasscode = document.getElementById('btn-admin-change-passcode');

    // Tab toggling inside login modal
    if (tabCloud && tabLocal && formCloud && formLocal) {
      tabCloud.addEventListener('click', () => {
        tabCloud.classList.add('active');
        tabLocal.classList.remove('active');
        formCloud.style.display = 'block';
        formLocal.style.display = 'none';
      });

      tabLocal.addEventListener('click', () => {
        tabLocal.classList.add('active');
        tabCloud.classList.remove('active');
        formLocal.style.display = 'block';
        formCloud.style.display = 'none';
      });
    }

    // Firebase Cloud Admin Login
    if (formCloud) {
      formCloud.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('input-admin-email');
        const passInput = document.getElementById('input-admin-password');
        const btnSubmit = document.getElementById('btn-submit-cloud-login');
        const errEl = document.getElementById('admin-cloud-login-error');

        const email = emailInput ? emailInput.value.trim() : '';
        const password = passInput ? passInput.value : '';

        if (!email || !password) return;

        errEl.style.display = 'none';
        if (btnSubmit) {
          btnSubmit.disabled = true;
          btnSubmit.textContent = 'Verifying...';
        }

        try {
          const user = await FirebaseManager.signInAdminWithCredentials(email, password);
          const isAdm = await FirebaseManager.isCurrentAdminVerified();

          if (!isAdm) {
            errEl.style.display = 'block';
            errEl.innerHTML = `Signed in as <strong>${esc(user.email)}</strong>, but this account is not yet verified as an Administrator in Firestore.<br><span style="font-size:0.8rem; margin-top:0.3rem; display:block;">Your Auth UID is <code>${esc(user.uid)}</code>. Add a document with this UID to the <code>admins</code> collection in the Firebase Console.</span>`;
            if (btnSubmit) {
              btnSubmit.disabled = false;
              btnSubmit.textContent = 'Sign In as Cloud Admin 🔥';
            }
            return;
          }

          state.isAuthenticated = true;
          sessionStorage.setItem('geoquiz_admin_logged_in', 'true');
          closeModal('modal-admin-login');
          showAdminView();
          await refresh();
        } catch (err) {
          errEl.style.display = 'block';
          errEl.textContent = `Firebase Sign-In Error: ${err.message}`;
        } finally {
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.textContent = 'Sign In as Cloud Admin 🔥';
          }
        }
      });
    }

    // Local Passcode fallback login
    if (formLocal) {
      formLocal.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('input-admin-passcode').value.trim();
        const errEl = document.getElementById('admin-login-error');

        const isValid = await Store.verifyAdminPasscode(input);
        if (isValid) {
          state.isAuthenticated = true;
          sessionStorage.setItem('geoquiz_admin_logged_in', 'true');
          closeModal('modal-admin-login');
          showAdminView();
          await refresh();
        } else {
          errEl.style.display = 'block';
          errEl.textContent = 'Incorrect administrator passcode. Please try again.';
        }
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener('click', async () => {
        state.isAuthenticated = false;
        sessionStorage.removeItem('geoquiz_admin_logged_in');
        if (typeof FirebaseManager !== 'undefined') {
          try {
            await FirebaseManager.signOutUser();
          } catch (e) {}
        }
        alert('You have logged out of the Administrator Portal.');
        if (window.GeoApp && window.GeoApp.showView) {
          window.GeoApp.showView(document.getElementById('view-selection'));
        }
      });
    }

    if (btnChangePasscode) {
      btnChangePasscode.addEventListener('click', async () => {
        const current = prompt('Enter current passcode:');
        if (!current) return;
        const valid = await Store.verifyAdminPasscode(current.trim());
        if (!valid) {
          alert('Incorrect current passcode.');
          return;
        }

        const newPass = prompt('Enter new passcode (at least 4 characters):');
        if (!newPass || newPass.trim().length < 4) {
          alert('Passcode must be at least 4 characters long.');
          return;
        }

        await Store.setAdminPasscode(newPass.trim());
        alert('Administrator passcode updated successfully.');
      });
    }
  }

  /**
   * Setup Tabs Navigation
   */
  function setupTabListeners() {
    const btnMonitoring = document.getElementById('admin-subtab-monitoring');
    const btnStudents = document.getElementById('admin-subtab-students');
    const btnQuestions = document.getElementById('admin-subtab-questions');
    const btnCloud = document.getElementById('admin-subtab-cloud');
    const btnBack = document.getElementById('btn-admin-back-to-quiz');

    if (btnMonitoring) {
      btnMonitoring.addEventListener('click', () => {
        state.activeTab = 'monitoring';
        renderSubTab();
      });
    }

    if (btnStudents) {
      btnStudents.addEventListener('click', () => {
        state.activeTab = 'students';
        renderSubTab();
      });
    }

    if (btnQuestions) {
      btnQuestions.addEventListener('click', () => {
        state.activeTab = 'questions';
        renderSubTab();
      });
    }

    if (btnCloud) {
      btnCloud.addEventListener('click', () => {
        state.activeTab = 'cloud';
        renderSubTab();
      });
    }

    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (window.GeoApp && window.GeoApp.showView) {
          window.GeoApp.showView(document.getElementById('view-selection'));
        }
      });
    }
  }

  /**
   * Setup Filter Bar Listeners
   */
  function setupFilterListeners() {
    const searchInput = document.getElementById('admin-filter-search');
    const contSelect = document.getElementById('admin-filter-continent');
    const diffSelect = document.getElementById('admin-filter-difficulty');
    const modeSelect = document.getElementById('admin-filter-mode');
    const dateSelect = document.getElementById('admin-filter-date');
    const btnClear = document.getElementById('btn-admin-clear-filters');

    if (searchInput) {
      let timer = null;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(async () => {
          state.filters.studentSearch = e.target.value;
          await refresh();
        }, 200);
      });
    }

    if (contSelect) {
      contSelect.addEventListener('change', async (e) => {
        state.filters.continent = e.target.value;
        await refresh();
      });
    }

    if (diffSelect) {
      diffSelect.addEventListener('change', async (e) => {
        state.filters.difficulty = e.target.value;
        await refresh();
      });
    }

    if (modeSelect) {
      modeSelect.addEventListener('change', async (e) => {
        state.filters.mode = e.target.value;
        await refresh();
      });
    }

    if (dateSelect) {
      dateSelect.addEventListener('change', async (e) => {
        state.filters.dateRange = e.target.value;
        await refresh();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', async () => {
        state.filters.studentSearch = '';
        state.filters.continent = 'all';
        state.filters.difficulty = 'all';
        state.filters.mode = 'all';
        state.filters.dateRange = 'all';

        if (searchInput) searchInput.value = '';
        if (contSelect) contSelect.value = 'all';
        if (diffSelect) diffSelect.value = 'all';
        if (modeSelect) modeSelect.value = 'all';
        if (dateSelect) dateSelect.value = 'all';

        await refresh();
      });
    }
  }

  /**
   * Setup Table Event Delegation
   */
  function setupTableActionListeners() {
    const viewAdmin = document.getElementById('view-admin');
    if (!viewAdmin) return;

    viewAdmin.addEventListener('click', async (e) => {
      const btnAttempt = e.target.closest('[data-view-attempt]');
      if (btnAttempt) {
        const attemptId = btnAttempt.getAttribute('data-view-attempt');
        showAttemptInspectionModal(attemptId);
        return;
      }

      const btnStudent = e.target.closest('[data-view-student]');
      if (btnStudent) {
        const studentId = btnStudent.getAttribute('data-view-student');
        showStudentHistoryModal(studentId);
        return;
      }
    });
  }

  async function showAttemptInspectionModal(attemptId) {
    const attempt = state.attempts.find(a => a.id === attemptId) || 
      (await Store.getAllAttempts()).find(a => a.id === attemptId);

    if (!attempt) {
      alert('Attempt record not found.');
      return;
    }

    document.getElementById('modal-attempt-title').textContent = 
      `Attempt Scorecard: ${attempt.studentName} (${attempt.studentId})`;

    document.getElementById('modal-attempt-meta').innerHTML = `
      <div class="score-stats" style="margin-bottom: 1.25rem;">
        <div class="stat-item">
          <div class="stat-label">Category</div>
          <div class="stat-val">${esc(attempt.continent)} (${esc(attempt.difficulty)})</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Mode</div>
          <div class="stat-val">${attempt.mode === 'exam' ? '📝 Exam' : '💡 Practice'}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Score</div>
          <div class="stat-val">${attempt.correctCount}/${attempt.totalQuestions} (${attempt.scorePercent}%)</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Time Taken</div>
          <div class="stat-val">${formatDuration(attempt.secondsElapsed)}</div>
        </div>
      </div>
      <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 1rem;">
        📅 Completed on: ${formatDateTime(attempt.completedAt)}
      </p>
    `;

    const letters = ['A', 'B', 'C', 'D'];
    const container = document.getElementById('modal-attempt-questions');

    if (!attempt.questionSnapshots || attempt.questionSnapshots.length === 0) {
      container.innerHTML = '<p class="text-muted">No individual question snapshot available for this attempt.</p>';
    } else {
      container.innerHTML = attempt.questionSnapshots.map((snap, idx) => {
        const isCorrect = snap.isCorrect;
        const opts = snap.options || [];

        return `
          <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
            <div class="review-q-title">
              <span>${idx + 1}. ${esc(snap.question)}</span>
            </div>
            <div class="review-answers-grid">
              <div class="review-line">
                <span class="review-label">Student Answer: </span>
                <span style="font-weight: 600; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                  ${isCorrect ? '✅' : '❌'} (${letters[snap.selectedIndex]}) ${esc(opts[snap.selectedIndex] || 'N/A')}
                </span>
              </div>
              ${!isCorrect ? `
                <div class="review-line">
                  <span class="review-label">Correct Answer: </span>
                  <span style="font-weight: 600; color: var(--success);">
                    ✅ (${letters[snap.correctIndex]}) ${esc(opts[snap.correctIndex] || 'N/A')}
                  </span>
                </div>
              ` : ''}
            </div>
            <div class="review-explanation">
              <strong>Geography Fact:</strong> ${esc(snap.explanation || '')}
            </div>
          </div>
        `;
      }).join('');
    }

    openModal('modal-attempt-inspect');
  }

  async function showStudentHistoryModal(studentId) {
    const student = state.students.find(s => s.studentId === studentId) || { studentId, name: studentId };
    const attempts = await Store.getStudentAttempts(studentId);

    document.getElementById('modal-student-name').textContent = student.name;
    document.getElementById('modal-student-id').textContent = student.studentId;

    const totalAttempts = attempts.length;
    let avg = 0;
    let best = 0;
    let totalTime = 0;

    if (totalAttempts > 0) {
      avg = Math.round(attempts.reduce((sum, a) => sum + (a.scorePercent || 0), 0) / totalAttempts);
      best = Math.max(...attempts.map(a => a.scorePercent || 0));
      totalTime = attempts.reduce((sum, a) => sum + (a.secondsElapsed || 0), 0);
    }

    document.getElementById('student-stat-attempts').textContent = totalAttempts;
    document.getElementById('student-stat-avg').textContent = `${avg}%`;
    document.getElementById('student-stat-best').textContent = `${best}%`;
    document.getElementById('student-stat-time').textContent = formatDuration(totalTime);

    const tbody = document.getElementById('student-attempts-tbody');
    if (totalAttempts === 0) {
      tbody.innerHTML = '<tr><td colspan="9" class="text-center" style="padding: 1.5rem; color: var(--text-muted);">No attempts recorded for this student yet.</td></tr>';
    } else {
      tbody.innerHTML = attempts.map((att, idx) => `
        <tr>
          <td>#${idx + 1}</td>
          <td>${formatDateTime(att.completedAt)}</td>
          <td>${esc(att.continent)}</td>
          <td>${esc(att.difficulty)}</td>
          <td>${att.mode === 'exam' ? '📝 Exam' : '💡 Practice'}</td>
          <td>${att.correctCount}/${att.totalQuestions}</td>
          <td><span class="badge ${att.scorePercent >= 80 ? 'badge-success' : (att.scorePercent >= 50 ? 'badge-warning' : 'badge-danger')}">${att.scorePercent}%</span></td>
          <td>${formatDuration(att.secondsElapsed)}</td>
          <td>
            <button type="button" class="btn btn-secondary btn-sm" data-view-attempt="${esc(att.id)}">
              View
            </button>
          </td>
        </tr>
      `).join('');
    }

    openModal('modal-student-drilldown');
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  }

  return {
    init,
    openAdminPortal,
    refresh
  };
})();

if (typeof window !== 'undefined') {
  window.AdminDashboard = AdminDashboard;
}
