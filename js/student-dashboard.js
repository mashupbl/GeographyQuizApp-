/**
 * GeoQuiz Explorer - Student Dashboard & Practice History Manager
 * 
 * Features:
 * - Shows strictly the registered student's own attempts (keyed by studentId)
 * - Filtering by Continent and Difficulty
 * - Overall Practice Statistics (Total attempts, average %, best %, total time)
 * - Latest and Best score per Continent/Difficulty combination
 * - Responsive SVG Visual Progress Chart showing improvement over time
 * - Full chronological attempt history table
 * - Question-by-question review of any past attempt from immutable snapshots
 * - Back button to return to quiz/selection
 */

const StudentDashboard = (function () {
  'use strict';

  const state = {
    allAttempts: [],
    filteredAttempts: [],
    selectedContinent: 'all',
    selectedDifficulty: 'all',
    activeAttemptDetail: null
  };

  const letters = ['A', 'B', 'C', 'D'];

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
   * Initialize Student Dashboard
   */
  function init() {
    setupFilterListeners();
    setupActionListeners();
  }

  /**
   * Open Student Dashboard for active student
   */
  async function open(student) {
    if (!student || !student.id) {
      alert('Please enter your Student ID on the first screen to view your dashboard.');
      return;
    }

    const nameEl = document.getElementById('sdash-student-name');
    const idEl = document.getElementById('sdash-student-id');
    if (nameEl) nameEl.textContent = student.name;
    if (idEl) idEl.textContent = student.id;

    // Load attempts for this student ID only
    try {
      const list = await Store.getStudentAttempts(student.id);
      // Sort oldest to newest for chronological numbering
      list.sort((a, b) => (a.completedAt || '').localeCompare(b.completedAt || ''));
      list.forEach((att, idx) => {
        att.attemptNumber = idx + 1;
      });
      state.allAttempts = list;
    } catch (e) {
      console.error('Failed to load student attempts:', e);
      state.allAttempts = [];
    }

    // Reset filters
    state.selectedContinent = 'all';
    state.selectedDifficulty = 'all';

    const contSelect = document.getElementById('sdash-filter-continent');
    const diffSelect = document.getElementById('sdash-filter-difficulty');
    if (contSelect) contSelect.value = 'all';
    if (diffSelect) diffSelect.value = 'all';

    render();

    if (window.GeoApp && window.GeoApp.showView) {
      window.GeoApp.showView(document.getElementById('view-student-dashboard'));
    }
  }

  /**
   * Filter and render dashboard elements
   */
  function render() {
    // 1. Filter attempts
    let list = [...state.allAttempts];

    if (state.selectedContinent !== 'all') {
      const c = state.selectedContinent.toLowerCase();
      list = list.filter(a => a.continent && a.continent.toLowerCase() === c);
    }

    if (state.selectedDifficulty !== 'all') {
      const d = state.selectedDifficulty.toLowerCase();
      list = list.filter(a => a.difficulty && a.difficulty.toLowerCase() === d);
    }

    state.filteredAttempts = list;

    // 2. Render summary stats
    renderOverallStats(list);

    // 3. Render latest and best per topic
    renderTopicBests(list);

    // 4. Render visual progress chart
    renderProgressChart(list);

    // 5. Render complete attempt history table
    renderAttemptsTable(list);

    // Clear detail section
    const detailBox = document.getElementById('sdash-attempt-detail-container');
    if (detailBox) detailBox.innerHTML = '';
  }

  /**
   * Render Overall Stats Cards
   */
  function renderOverallStats(list) {
    const total = list.length;
    let avg = 0;
    let best = 0;
    let totalSecs = 0;

    if (total > 0) {
      avg = Math.round(list.reduce((sum, a) => sum + (a.scorePercent || 0), 0) / total);
      best = Math.max(...list.map(a => a.scorePercent || 0));
      totalSecs = list.reduce((sum, a) => sum + (a.secondsElapsed || 0), 0);
    }

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setVal('sdash-stat-total', total);
    setVal('sdash-stat-avg', `${avg}%`);
    setVal('sdash-stat-best', `${best}%`);
    setVal('sdash-stat-time', formatDuration(totalSecs));
  }

  /**
   * Render Topic Bests Table (Latest & Best per Continent/Difficulty)
   */
  function renderTopicBests(list) {
    const container = document.getElementById('sdash-topic-bests-container');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = '';
      return;
    }

    // Group by Continent - Difficulty
    const groups = {};
    list.forEach(a => {
      const key = `${a.continent} — ${a.difficulty}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(a);
    });

    const rows = Object.entries(groups).map(([topicKey, attempts]) => {
      const count = attempts.length;
      const latest = attempts[attempts.length - 1];
      const bestScore = Math.max(...attempts.map(a => a.scorePercent || 0));

      return `
        <tr>
          <td><strong>${esc(topicKey)}</strong></td>
          <td>${count}</td>
          <td><span class="badge ${latest.scorePercent >= 80 ? 'badge-success' : 'badge-meta'}">${latest.scorePercent}%</span></td>
          <td><span class="badge badge-success">${bestScore}%</span></td>
        </tr>
      `;
    }).join('');

    container.innerHTML = `
      <div class="card" style="margin-bottom: 1.5rem; background-color: var(--bg-surface-elevated);">
        <h3 class="review-heading" style="margin-bottom: 0.75rem;">
          🏆 Latest &amp; Best Scores per Category
        </h3>
        <div class="table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Category (Continent &amp; Level)</th>
                <th>Attempts</th>
                <th>Latest Score</th>
                <th>Best Score</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  /**
   * Render Responsive SVG Progress Chart
   */
  function renderProgressChart(list) {
    const container = document.getElementById('sdash-chart-container');
    if (!container) return;

    if (list.length < 1) {
      container.innerHTML = '';
      return;
    }

    const W = 640;
    const H = 160;
    const padX = 40;
    const padY = 25;

    const count = list.length;
    const points = list.map((a, idx) => {
      const x = count === 1 ? W / 2 : padX + (idx * (W - 2 * padX)) / (count - 1);
      const score = Math.max(0, Math.min(100, a.scorePercent || 0));
      const y = (H - padY) - (score * (H - 2 * padY)) / 100;
      return { x, y, score, attNum: a.attemptNumber, date: formatDateTime(a.completedAt) };
    });

    const polylinePts = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

    const svg = `
      <div class="card" style="margin-bottom: 1.5rem;">
        <h3 class="review-heading" style="margin-bottom: 0.5rem;">
          📈 Practice Score Progression Over Time
        </h3>
        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 1rem;">
          Tracks accuracy percentage across your sequential attempts.
        </p>
        <div class="chart-wrapper" style="overflow-x: auto;">
          <svg viewBox="0 0 ${W} ${H}" class="progress-svg" style="width: 100%; max-width: ${W}px; height: auto;" role="img" aria-label="Student Score Progress Line Chart">
            <!-- Grid Lines -->
            <line x1="${padX}" y1="${padY}" x2="${W - padX}" y2="${padY}" stroke="#e2e8f0" stroke-dasharray="3,3" />
            <line x1="${padX}" y1="${H / 2}" x2="${W - padX}" y2="${H / 2}" stroke="#e2e8f0" stroke-dasharray="3,3" />
            <line x1="${padX}" y1="${H - padY}" x2="${W - padX}" y2="${H - padY}" stroke="#cbd5e1" stroke-width="1.5" />

            <!-- Labels -->
            <text x="${padX - 8}" y="${padY + 4}" font-size="10" fill="#64748b" text-anchor="end">100%</text>
            <text x="${padX - 8}" y="${H / 2 + 4}" font-size="10" fill="#64748b" text-anchor="end">50%</text>
            <text x="${padX - 8}" y="${H - padY + 4}" font-size="10" fill="#64748b" text-anchor="end">0%</text>

            <!-- Line graph -->
            ${count > 1 ? `<polyline fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${polylinePts}" />` : ''}

            <!-- Dots -->
            ${points.map(p => `
              <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" fill="#ffffff" stroke="var(--primary)" stroke-width="2.5">
                <title>Attempt #${p.attNum}: ${p.score}% (${p.date})</title>
              </circle>
              <text x="${p.x.toFixed(1)}" y="${(p.y - 8).toFixed(1)}" font-size="10" font-weight="600" fill="var(--primary)" text-anchor="middle">${p.score}%</text>
            `).join('')}
          </svg>
        </div>
      </div>
    `;

    container.innerHTML = svg;
  }

  /**
   * Render Complete Attempt History Table
   */
  function renderAttemptsTable(list) {
    const tbody = document.getElementById('sdash-attempts-tbody');
    const countEl = document.getElementById('sdash-table-count');
    if (!tbody) return;

    if (countEl) countEl.textContent = `${list.length} attempt(s)`;

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11" class="text-center" style="padding: 2.5rem; color: var(--text-muted);">
            No practice attempts recorded yet for this selection. Start a quiz to build your history!
          </td>
        </tr>
      `;
      return;
    }

    // Display most recent attempt first in the table
    const displayList = [...list].reverse();

    tbody.innerHTML = displayList.map(a => {
      const modeLabel = a.mode === 'exam' 
        ? '<span class="badge badge-exam">📝 Exam</span>' 
        : '<span class="badge badge-practice">💡 Practice</span>';

      const accuracyBadge = a.scorePercent >= 80 
        ? 'badge-success' 
        : (a.scorePercent >= 50 ? 'badge-warning' : 'badge-danger');

      return `
        <tr>
          <td><strong>#${a.attemptNumber}</strong></td>
          <td>${formatDateTime(a.completedAt)}</td>
          <td>${esc(a.continent)}</td>
          <td><span class="badge badge-diff diff-${(a.difficulty || '').toLowerCase()}">${esc(a.difficulty)}</span></td>
          <td>${modeLabel}</td>
          <td>${a.totalQuestions}</td>
          <td><span class="text-success">✓${a.correctCount}</span></td>
          <td><span class="text-danger">✗${a.incorrectCount}</span></td>
          <td>${a.correctCount}/${a.totalQuestions}</td>
          <td><span class="badge ${accuracyBadge}">${a.scorePercent}%</span></td>
          <td>${formatDuration(a.secondsElapsed)}</td>
          <td>
            <button type="button" class="btn btn-secondary btn-sm" data-sdash-review="${esc(a.id)}">
              Review
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  /**
   * Show Scorecard and Detailed Review for an attempt
   */
  function showAttemptReview(attemptId) {
    const a = state.allAttempts.find(x => x.id === attemptId);
    const container = document.getElementById('sdash-attempt-detail-container');
    if (!a || !container) return;

    const snaps = a.questionSnapshots || [];

    container.innerHTML = `
      <div class="card" style="margin-top: 1.5rem; border-top: 4px solid var(--primary);">
        <header class="card-header" style="margin-bottom: 1rem;">
          <h3 class="card-title">
            Scorecard: Attempt #${a.attemptNumber} — ${esc(a.continent)} (${esc(a.difficulty)})
          </h3>
          <p class="card-desc">
            ${a.mode === 'exam' ? 'Exam Mode' : 'Practice Mode'} • 
            Completed: ${formatDateTime(a.completedAt)} • 
            Score: <strong>${a.correctCount}/${a.totalQuestions} (${a.scorePercent}%)</strong> • 
            Duration: ${formatDuration(a.secondsElapsed)}
          </p>
        </header>

        <div class="review-section" style="margin-top: 1rem;">
          <h4 class="review-heading">Question-by-Question Snapshot</h4>
          ${snaps.length === 0 ? '<p class="text-muted">No individual question snapshot available for this attempt.</p>' : ''}
          ${snaps.map((q, idx) => {
            const isCorrect = q.isCorrect;
            const opts = q.options || [];

            return `
              <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
                <div class="review-q-title">
                  <span>${idx + 1}. ${esc(q.question)}</span>
                </div>
                <div class="review-answers-grid">
                  <div class="review-line">
                    <span class="review-label">Your Choice: </span>
                    <span style="font-weight: 600; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                      ${isCorrect ? '✅' : '❌'} (${letters[q.selectedIndex]}) ${esc(opts[q.selectedIndex] || 'N/A')}
                    </span>
                  </div>
                  ${!isCorrect ? `
                    <div class="review-line">
                      <span class="review-label">Correct Answer: </span>
                      <span style="font-weight: 600; color: var(--success);">
                        ✅ (${letters[q.correctIndex]}) ${esc(opts[q.correctIndex] || 'N/A')}
                      </span>
                    </div>
                  ` : ''}
                </div>
                <div class="review-explanation">
                  <strong>Geography Fact:</strong> ${esc(q.explanation || '')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <button type="button" class="btn btn-secondary" id="btn-sdash-close-detail" style="margin-top: 1rem;">
          Close Review ↑
        </button>
      </div>
    `;

    const btnClose = document.getElementById('btn-sdash-close-detail');
    if (btnClose) {
      btnClose.addEventListener('click', () => {
        container.innerHTML = '';
      });
    }

    container.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Setup Filter Listeners
   */
  function setupFilterListeners() {
    const selContinent = document.getElementById('sdash-filter-continent');
    const selDifficulty = document.getElementById('sdash-filter-difficulty');

    if (selContinent) {
      selContinent.addEventListener('change', (e) => {
        state.selectedContinent = e.target.value;
        render();
      });
    }

    if (selDifficulty) {
      selDifficulty.addEventListener('change', (e) => {
        state.selectedDifficulty = e.target.value;
        render();
      });
    }
  }

  /**
   * Setup Action Buttons
   */
  function setupActionListeners() {
    const tbody = document.getElementById('sdash-attempts-tbody');
    if (tbody) {
      tbody.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-sdash-review]');
        if (btn) {
          const attemptId = btn.getAttribute('data-sdash-review');
          showAttemptReview(attemptId);
        }
      });
    }

    const btnBack = document.getElementById('btn-sdash-back-to-quiz');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (window.GeoApp && window.GeoApp.showView) {
          window.GeoApp.showView(document.getElementById('view-selection'));
        }
      });
    }
  }

  return {
    init,
    open
  };
})();

if (typeof window !== 'undefined') {
  window.StudentDashboard = StudentDashboard;
}
