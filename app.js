/**
 * GeoQuiz Explorer 🌍 | Institutional Geography Learning Platform
 * Core Engine v2.6 (Batch-Based Tagging & Clean Attempt Engine)
 */

'use strict';

const VALID_CONTINENTS = [
  'Whole World', 'Asia', 'Africa', 'Europe', 
  'North America', 'South America', 'Australia/Oceania', 'Antarctica'
];

const SEED_QUESTIONS = [
  {
    id: "GEO-AS-001",
    continent: "Asia",
    batch: "Batch 1",
    difficulty: "Easy",
    topic: "Mountain Ranges",
    question: "Which mountain range contains Mount Everest, the highest peak above sea level on Earth?",
    optionA: "The Andes",
    optionB: "The Himalayas",
    optionC: "The Urals",
    optionD: "The Alps",
    correctAnswer: "B",
    explanation: "The Himalayas host Mount Everest at 8,848.86 m on the border of Nepal and China.",
    source: "Survey of Nepal & China Geodetic Survey",
    status: "Published",
    createdAt: "2026-01-10T08:00:00.000Z"
  },
  {
    id: "GEO-AF-001",
    continent: "Africa",
    batch: "Batch 1",
    difficulty: "Easy",
    topic: "Hydrography",
    question: "Which river is widely recognized as the longest river in Africa?",
    optionA: "Congo River",
    optionB: "Zambezi River",
    optionC: "Nile River",
    optionD: "Niger River",
    correctAnswer: "C",
    explanation: "The Nile River flows northward through northeastern Africa into the Mediterranean Sea.",
    source: "UNESCO World Water Assessment",
    status: "Published",
    createdAt: "2026-01-10T08:15:00.000Z"
  },
  {
    id: "GEO-EU-001",
    continent: "Europe",
    batch: "Batch 1",
    difficulty: "Medium",
    topic: "Physical Geography",
    question: "Which strait connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco?",
    optionA: "Strait of Bosphorus",
    optionB: "Strait of Gibraltar",
    optionC: "Strait of Hormuz",
    optionD: "Strait of Malacca",
    correctAnswer: "B",
    explanation: "The Strait of Gibraltar is approximately 13 km wide at its narrowest point.",
    source: "International Hydrographic Organization",
    status: "Published",
    createdAt: "2026-01-10T08:30:00.000Z"
  },
  {
    id: "GEO-NA-001",
    continent: "North America",
    batch: "Batch 1",
    difficulty: "Medium",
    topic: "Lakes & Waterways",
    question: "Which of the Great Lakes is the largest freshwater lake in the world by surface area?",
    optionA: "Lake Michigan",
    optionB: "Lake Huron",
    optionC: "Lake Superior",
    optionD: "Lake Erie",
    correctAnswer: "C",
    explanation: "Lake Superior covers approximately 82,103 km² along the Canada–US border.",
    source: "USGS Water Science School",
    status: "Published",
    createdAt: "2026-01-10T08:45:00.000Z"
  },
  {
    id: "GEO-SA-001",
    continent: "South America",
    batch: "Batch 1",
    difficulty: "Hard",
    topic: "Geomorphology",
    question: "Which high-altitude plateau in the central Andes is the second-most extensive plateau on Earth after Tibet?",
    optionA: "Patagonian Desert",
    optionB: "The Altiplano",
    optionC: "The Mato Grosso",
    optionD: "Guiana Shield",
    correctAnswer: "B",
    explanation: "The Altiplano sits at an average elevation of 3,750 meters across Bolivia, Peru, and Chile.",
    source: "Geological Society of America",
    status: "Published",
    createdAt: "2026-01-10T09:00:00.000Z"
  },
  {
    id: "GEO-OC-001",
    continent: "Australia/Oceania",
    batch: "Batch 1",
    difficulty: "Easy",
    topic: "Marine Geography",
    question: "The Great Barrier Reef is located off the coast of which Australian state?",
    optionA: "Western Australia",
    optionB: "Queensland",
    optionC: "New South Wales",
    optionD: "Victoria",
    correctAnswer: "B",
    explanation: "The Great Barrier Reef stretches along the coast of Queensland in the Coral Sea.",
    source: "Great Barrier Reef Marine Park Authority",
    status: "Published",
    createdAt: "2026-01-10T09:15:00.000Z"
  },
  {
    id: "GEO-AN-001",
    continent: "Antarctica",
    batch: "Batch 1",
    difficulty: "Hard",
    topic: "Glaciology",
    question: "Which mountain range in Antarctica is completely buried beneath several kilometers of glacial ice?",
    optionA: "Transantarctic Mountains",
    optionB: "Gamburtsev Mountain Range",
    optionC: "Ellsworth Mountains",
    optionD: "Queen Maud Mountains",
    correctAnswer: "B",
    explanation: "The Gamburtsev Mountains were discovered in 1958 and rival the European Alps in size.",
    source: "British Antarctic Survey",
    status: "Published",
    createdAt: "2026-01-10T09:30:00.000Z"
  }
];

/* ==========================================================================
   STORAGE ENGINE ADAPTER (FIRESTORE + DEDUPLICATION)
   ========================================================================== */

class StorageAdapter {
  constructor() {
    this.useFirestore = false;
    this.db = null;
    this.KEY_QUESTIONS = 'geoquiz_questions_store_v2';
    this.KEY_ATTEMPTS = 'geoquiz_attempts_store_v2';
    this.init();
  }

  init() {
    if (window.firebase && window.firebase.firestore && window.firebase.apps && window.firebase.apps.length > 0) {
      try {
        this.db = window.firebase.firestore();
        this.useFirestore = true;
        console.log('[StorageAdapter] Firebase Firestore active backend.');
      } catch (e) {
        console.warn('[StorageAdapter] Firestore fallback active.', e);
        this.useFirestore = false;
      }
    }
  }

  async getAllQuestions() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('questions').get();
        if (!snap.empty) {
          return snap.docs.map(doc => {
            const data = doc.data();
            return { id: doc.id, batch: data.batch || 'Batch 1', ...data };
          });
        }
      } catch (err) {
        console.warn('[StorageAdapter] Firestore read failed; loading local storage.', err);
      }
    }
    const raw = localStorage.getItem(this.KEY_QUESTIONS);
    const list = raw ? JSON.parse(raw) : SEED_QUESTIONS;
    return list.map(q => ({ batch: q.batch || 'Batch 1', ...q }));
  }

  async clearAllQuestions() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('questions').get();
        const batch = this.db.batch();
        snap.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
      } catch (err) {
        console.error('[StorageAdapter] Failed to clear Firestore questions:', err);
      }
    }
    localStorage.removeItem(this.KEY_QUESTIONS);
    return true;
  }

  async saveBatchQuestions(questions, purgeExisting = false) {
    if (purgeExisting) {
      await this.clearAllQuestions();
    }

    const existing = purgeExisting ? [] : await this.getAllQuestions();
    const map = new Map(existing.map(q => [q.id, q]));

    for (const q of questions) {
      map.set(q.id, q);
    }
    const merged = Array.from(map.values());

    if (this.useFirestore) {
      try {
        const CHUNK_SIZE = 400;
        for (let i = 0; i < questions.length; i += CHUNK_SIZE) {
          const chunk = questions.slice(i, i + CHUNK_SIZE);
          const batch = this.db.batch();
          for (const item of chunk) {
            const ref = this.db.collection('questions').doc(item.id);
            batch.set(ref, item);
          }
          await batch.commit();
        }
      } catch (err) {
        console.error('[StorageAdapter] Firestore batch error:', err);
      }
    }

    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(merged));
    return { success: true, count: questions.length };
  }

  async saveQuestion(question) {
    if (this.useFirestore) {
      try {
        await this.db.collection('questions').doc(question.id).set(question);
      } catch (e) {
        console.warn(e);
      }
    }
    const list = await this.getAllQuestions();
    const idx = list.findIndex(q => q.id === question.id);
    if (idx >= 0) list[idx] = question;
    else list.push(question);
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(list));
    return question;
  }

  async deleteQuestion(id) {
    if (this.useFirestore) {
      try {
        await this.db.collection('questions').doc(id).delete();
      } catch (e) {
        console.error(e);
      }
    }
    const list = await this.getAllQuestions();
    const filtered = list.filter(q => q.id !== id);
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(filtered));
    return true;
  }

  async getAllAttempts() {
    let rawList = [];
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('attempts').orderBy('timestamp', 'desc').get();
        if (!snap.empty) {
          rawList = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }
      } catch (err) {
        console.warn('[StorageAdapter] Firestore attempts error, fallback to local.', err);
      }
    }

    if (rawList.length === 0) {
      const raw = localStorage.getItem(this.KEY_ATTEMPTS);
      rawList = raw ? JSON.parse(raw) : [];
    }

    return this._deduplicateAttempts(rawList);
  }

  _deduplicateAttempts(attempts) {
    if (!attempts || attempts.length === 0) return [];
    const sorted = [...attempts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const unique = [];

    for (const cur of sorted) {
      const curDateStr = cur.formattedDate || new Date(cur.timestamp).toLocaleDateString();
      const isDuplicate = unique.some(prev => {
        const prevDateStr = prev.formattedDate || new Date(prev.timestamp).toLocaleDateString();
        return (
          prev.studentId === cur.studentId &&
          prev.continent === cur.continent &&
          prev.correctCount === cur.correctCount &&
          prev.totalQuestions === cur.totalQuestions &&
          prevDateStr === curDateStr
        );
      });

      if (!isDuplicate) {
        unique.push(cur);
      }
    }
    return unique;
  }

  async saveAttempt(attempt) {
    if (this.useFirestore) {
      try {
        await this.db.collection('attempts').doc(attempt.id).set(attempt);
      } catch (e) {
        console.error(e);
      }
    }
    const list = await this.getAllAttempts();
    const updated = this._deduplicateAttempts([attempt, ...list]);
    localStorage.setItem(this.KEY_ATTEMPTS, JSON.stringify(updated));
    return attempt;
  }

  async purgeDuplicateAttempts() {
    if (this.useFirestore) {
      try {
        const snap = await this.db.collection('attempts').get();
        const seen = new Set();
        const batch = this.db.batch();
        let deleteCount = 0;

        snap.docs.forEach(doc => {
          const d = doc.data();
          const dDate = d.formattedDate || new Date(d.timestamp).toLocaleDateString();
          const key = `${d.studentId}_${d.continent}_${d.correctCount}_${d.totalQuestions}_${dDate}`;
          if (seen.has(key)) {
            batch.delete(doc.ref);
            deleteCount++;
          } else {
            seen.add(key);
          }
        });

        if (deleteCount > 0) {
          await batch.commit();
        }
      } catch (err) {
        console.error('Purge error:', err);
      }
    }
    localStorage.removeItem(this.KEY_ATTEMPTS);
    return true;
  }
}

/* ==========================================================================
   PERMISSIVE CSV INGESTION ENGINE WITH BATCH SUPPORT
   ========================================================================== */

class PermissiveCsvEngine {
  static parse(text) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let i = 0;

    if (text.charCodeAt(0) === 0xFEFF) text = text.substring(1);

    while (i < text.length) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (inQuotes) {
        if (char === '"') {
          if (nextChar === '"') {
            currentField += '"';
            i += 2;
            continue;
          } else {
            inQuotes = false;
            i++;
            continue;
          }
        } else {
          currentField += char;
          i++;
          continue;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
          i++;
          continue;
        } else if (char === ',') {
          currentRow.push(currentField);
          currentField = '';
          i++;
          continue;
        } else if (char === '\r') {
          if (nextChar === '\n') i++;
          currentRow.push(currentField);
          rows.push(currentRow);
          currentRow = [];
          currentField = '';
          i++;
          continue;
        } else if (char === '\n') {
          currentRow.push(currentField);
          rows.push(currentRow);
          currentRow = [];
          currentField = '';
          i++;
          continue;
        } else {
          currentField += char;
          i++;
          continue;
        }
      }
    }
    if (currentField.length > 0 || currentRow.length > 0) {
      currentRow.push(currentField);
      rows.push(currentRow);
    }
    return rows;
  }

  static ingestAllRows(rawRows, batchTag = 'Batch 2') {
    if (!rawRows || rawRows.length === 0) return [];

    let headerIndex = -1;
    const headerMap = {};

    for (let r = 0; r < Math.min(rawRows.length, 5); r++) {
      const row = rawRows[r].map(c => String(c).trim().toLowerCase());
      if (row.some(c => c.includes('question') || c.includes('continent') || c.includes('option'))) {
        headerIndex = r;
        row.forEach((colName, idx) => {
          if (colName.includes('id')) headerMap.id = idx;
          else if (colName.includes('batch')) headerMap.batch = idx;
          else if (colName.includes('continent') || colName.includes('scope')) headerMap.continent = idx;
          else if (colName.includes('diff')) headerMap.difficulty = idx;
          else if (colName.includes('topic') || colName.includes('cat')) headerMap.topic = idx;
          else if (colName.includes('question') || colName.includes('text')) headerMap.question = idx;
          else if (colName.includes('optiona') || colName === 'a') headerMap.optA = idx;
          else if (colName.includes('optionb') || colName === 'b') headerMap.optB = idx;
          else if (colName.includes('optionc') || colName === 'c') headerMap.optC = idx;
          else if (colName.includes('optiond') || colName === 'd') headerMap.optD = idx;
          else if (colName.includes('correct') || colName.includes('key') || colName.includes('ans')) headerMap.correct = idx;
          else if (colName.includes('exp')) headerMap.explanation = idx;
          else if (colName.includes('source')) headerMap.source = idx;
          else if (colName.includes('status')) headerMap.status = idx;
        });
        break;
      }
    }

    const startRow = headerIndex >= 0 ? headerIndex + 1 : 0;
    const result = [];

    for (let i = startRow; i < rawRows.length; i++) {
      const row = rawRows[i];
      if (!row || row.every(cell => String(cell).trim() === '')) continue;

      const getVal = (colKey, fallbackIdx) => {
        const pos = headerMap[colKey] !== undefined ? headerMap[colKey] : fallbackIdx;
        return (pos !== undefined && row[pos] !== undefined) ? String(row[pos]).trim() : '';
      };

      const qText = getVal('question', 4) || getVal('question', 0) || `Question ${i + 1}`;
      const optA = getVal('optA', 5) || getVal('optA', 1) || 'True';
      const optB = getVal('optB', 6) || getVal('optB', 2) || 'False';
      const optC = getVal('optC', 7) || getVal('optC', 3) || 'None of the above';
      const optD = getVal('optD', 8) || getVal('optD', 4) || 'All of the above';

      let correctKey = (getVal('correct', 9) || 'A').toUpperCase().charAt(0);
      if (!['A', 'B', 'C', 'D'].includes(correctKey)) correctKey = 'A';

      let continent = getVal('continent', 1);
      if (!VALID_CONTINENTS.some(c => c.toLowerCase() === continent.toLowerCase())) {
        continent = 'Whole World';
      }

      let difficulty = getVal('difficulty', 2);
      if (!['Easy', 'Medium', 'Hard'].some(d => d.toLowerCase() === difficulty.toLowerCase())) {
        difficulty = 'Medium';
      }

      const assignedBatch = getVal('batch') || batchTag || 'Batch 2';
      const id = getVal('id', 0) || `GEO-${assignedBatch.replace(/\s+/g, '')}-${Date.now().toString(36)}-${i}`;
      const topic = getVal('topic', 3) || 'General Geography';
      const explanation = getVal('explanation', 10) || '';
      const source = getVal('source', 11) || 'CSV Bulk Import';
      const status = getVal('status', 12) || 'Published';

      result.push({
        id,
        batch: assignedBatch,
        continent,
        difficulty,
        topic,
        question: qText,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctAnswer: correctKey,
        explanation,
        source,
        status: ['Published', 'Draft', 'Archived'].includes(status) ? status : 'Published',
        createdAt: new Date().toISOString()
      });
    }

    return result;
  }

  static stringify(questions) {
    const headers = [
      'id', 'batch', 'continent', 'difficulty', 'topic', 'question',
      'optionA', 'optionB', 'optionC', 'optionD',
      'correctAnswer', 'explanation', 'source', 'status'
    ];
    const lines = [headers.join(',')];
    for (const q of questions) {
      const row = headers.map(h => {
        let val = q[h] || '';
        val = String(val).replace(/"/g, '""');
        if (val.search(/("|,|\n|\r)/g) >= 0) val = `"${val}"`;
        return val;
      });
      lines.push(row.join(','));
    }
    return lines.join('\r\n');
  }
}

/* ==========================================================================
   APPLICATION CONTROLLER
   ========================================================================== */

class GeoQuizApp {
  constructor() {
    this.storage = new StorageAdapter();
    this.currentUser = null;

    this.questions = [];
    this.attempts = [];

    this.qbState = {
      page: 1,
      pageSize: 25,
      search: '',
      continent: 'All',
      batch: 'All',
      difficulty: 'All',
      status: 'All'
    };

    this.stagedCsvQuestions = [];

    this.quizSession = {
      active: false,
      sessionId: null,
      sessionFinalized: false,
      mode: 'practice',
      continent: 'Whole World',
      batch: 'All',
      difficulty: 'All',
      topic: 'All',
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      startTime: null,
      secondsRemaining: 0,
      timerInterval: null
    };

    this.init();
  }

  async init() {
    this.bindEvents();
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.checkSession();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.renderLeaderboard();
    this.updateAvailabilityBadge();
  }

  async refreshData() {
    this.questions = await this.storage.getAllQuestions();
    this.attempts = await this.storage.getAllAttempts();
  }

  showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  checkSession() {
    const raw = localStorage.getItem('geoquiz_session_user');
    if (raw) {
      this.currentUser = JSON.parse(raw);
      this.updateUserSessionUI();
    } else {
      this.openAuthModal();
    }
  }

  openAuthModal() {
    document.getElementById('authModal').classList.remove('hidden');
  }

  handleLoginSubmit() {
    const role = document.getElementById('authRole').value;
    const name = document.getElementById('authStudentName').value.trim();
    const id = document.getElementById('authStudentId').value.trim();
    const pwd = document.getElementById('authPassword').value.trim();

    if (!name || !id || !pwd) {
      this.showToast('Please provide your name, ID, and password.', 'error');
      return;
    }

    if (role === 'admin' && pwd !== 'admin123') {
      this.showToast('Invalid administrator password.', 'error');
      return;
    }

    this.currentUser = { name, id, role };
    localStorage.setItem('geoquiz_session_user', JSON.stringify(this.currentUser));

    this.updateUserSessionUI();
    document.getElementById('authModal').classList.add('hidden');
    this.showToast(`Authenticated as ${name} (${role === 'admin' ? 'Teacher/Admin' : 'Student'})`, 'success');

    if (role === 'admin') this.switchPortal('admin');
    else this.switchPortal('student');

    this.renderStudentDashboard();
    this.renderLeaderboard();
  }

  handleLogout() {
    this.currentUser = null;
    localStorage.removeItem('geoquiz_session_user');
    this.updateUserSessionUI();
    this.openAuthModal();
  }

  updateUserSessionUI() {
    const nameEl = document.getElementById('navUserName');
    const roleEl = document.getElementById('navUserRole');
    const avatarEl = document.getElementById('navAvatar');
    const btnAuth = document.getElementById('btnAuthAction');

    if (this.currentUser) {
      nameEl.textContent = this.currentUser.name;
      roleEl.textContent = `${this.currentUser.role === 'admin' ? 'Teacher/Admin' : 'Student'} (${this.currentUser.id})`;
      avatarEl.textContent = this.currentUser.name.charAt(0).toUpperCase();
      btnAuth.textContent = 'Sign Out';
    } else {
      nameEl.textContent = 'Not Signed In';
      roleEl.textContent = 'Please authenticate';
      avatarEl.textContent = '?';
      btnAuth.textContent = 'Sign In';
    }
  }

  populateBatchDropdowns() {
    const batches = Array.from(new Set(this.questions.map(q => q.batch || 'Batch 1'))).sort();
    
    // Quiz Setup Batch Dropdown
    const setupBatch = document.getElementById('setupBatch');
    if (setupBatch) {
      const prev = setupBatch.value;
      setupBatch.innerHTML = '<option value="All">All Questions (All Batches)</option>';
      batches.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = `🏷️ ${b}`;
        setupBatch.appendChild(opt);
      });
      if (batches.includes(prev)) setupBatch.value = prev;
    }

    // Admin Question Bank Filter Dropdown
    const qbFilterBatch = document.getElementById('qbFilterBatch');
    if (qbFilterBatch) {
      const prev = qbFilterBatch.value;
      qbFilterBatch.innerHTML = '<option value="All">All Batches</option>';
      batches.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = b;
        qbFilterBatch.appendChild(opt);
      });
      if (batches.includes(prev)) qbFilterBatch.value = prev;
    }
  }

  populateTopicDropdown() {
    const topicSelect = document.getElementById('setupTopic');
    if (!topicSelect) return;

    const selectedContinent = document.getElementById('setupContinent')?.value || 'Whole World';
    const selectedBatch = document.getElementById('setupBatch')?.value || 'All';

    const matchingQuestions = this.questions.filter(q => {
      const isPub = q.status === 'Published';
      const matchCont = (selectedContinent === 'Whole World' || selectedContinent === 'All') 
        ? true 
        : q.continent === selectedContinent;
      const matchBatch = (selectedBatch === 'All') ? true : (q.batch === selectedBatch);
      return isPub && matchCont && matchBatch;
    });

    const uniqueTopics = Array.from(
      new Set(matchingQuestions.map(q => q.topic).filter(Boolean))
    ).sort();

    const previousValue = topicSelect.value;
    topicSelect.innerHTML = '<option value="All">All Topics</option>';

    uniqueTopics.forEach(top => {
      const opt = document.createElement('option');
      opt.value = top;
      opt.textContent = top;
      topicSelect.appendChild(opt);
    });

    if (uniqueTopics.includes(previousValue)) {
      topicSelect.value = previousValue;
    } else {
      topicSelect.value = 'All';
    }
  }

  bindEvents() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const portal = e.target.dataset.portal;
        if (portal === 'admin' && (!this.currentUser || this.currentUser.role !== 'admin')) {
          this.showToast('Administrator privileges required. Sign in as Admin.', 'error');
          this.openAuthModal();
          return;
        }
        this.switchPortal(portal);
      });
    });

    document.querySelectorAll('.sub-nav .sub-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const subview = e.target.dataset.subview;
        const parentPortal = e.target.closest('.portal-view');
        this.switchSubView(parentPortal, subview, e.target);
      });
    });

    document.getElementById('btnAuthAction')?.addEventListener('click', () => {
      if (this.currentUser) this.handleLogout();
      else this.openAuthModal();
    });
    document.getElementById('btnCloseAuthModal')?.addEventListener('click', () => {
      if (!this.currentUser) this.showToast('Login is required to access the platform.', 'warning');
      else document.getElementById('authModal').classList.add('hidden');
    });
    document.getElementById('authForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLoginSubmit();
    });

    const countSelect = document.getElementById('setupCount');
    const customCountInput = document.getElementById('setupCustomCount');
    countSelect?.addEventListener('change', () => {
      if (countSelect.value === 'custom') {
        customCountInput.classList.remove('hidden');
        customCountInput.focus();
      } else {
        customCountInput.classList.add('hidden');
      }
      this.updateAvailabilityBadge();
    });
    customCountInput?.addEventListener('input', () => this.updateAvailabilityBadge());

    document.getElementById('setupContinent')?.addEventListener('change', () => {
      this.populateTopicDropdown();
      this.updateAvailabilityBadge();
    });

    document.getElementById('setupBatch')?.addEventListener('change', () => {
      this.populateTopicDropdown();
      this.updateAvailabilityBadge();
    });

    ['setupDifficulty', 'setupTopic'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.updateAvailabilityBadge());
    });

    document.getElementById('quizSetupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startAssessment();
    });

    document.getElementById('btnNextQuestion')?.addEventListener('click', () => this.handleNextQuestion());
    document.getElementById('btnPrevQuestion')?.addEventListener('click', () => this.handlePrevQuestion());
    document.getElementById('btnSubmitExam')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.confirmSubmitExam();
    });

    document.getElementById('btnRetakeQuiz')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'quizSetup', document.querySelector('[data-subview="quizSetup"]'));
    });
    document.getElementById('btnGoToDashboard')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'studentDashboard', document.querySelector('[data-subview="studentDashboard"]'));
    });

    document.getElementById('btnAdminTakeQuiz')?.addEventListener('click', () => {
      this.switchPortal('student');
      this.switchSubView(document.getElementById('portalStudent'), 'quizSetup', document.querySelector('[data-subview="quizSetup"]'));
    });

    document.getElementById('btnRefreshLeaderboard')?.addEventListener('click', async () => {
      await this.refreshData();
      this.renderLeaderboard();
      this.showToast('Leaderboard refreshed.', 'info');
    });

    // 1-Click Clean Duplicates in Admin Console
    document.getElementById('btnPurgeDuplicateAttempts')?.addEventListener('click', async () => {
      const btn = document.getElementById('btnPurgeDuplicateAttempts');
      btn.disabled = true;
      btn.textContent = 'Cleaning...';
      await this.storage.purgeDuplicateAttempts();
      await this.refreshData();
      this.renderAdminOverview();
      this.renderStudentDashboard();
      this.renderLeaderboard();
      btn.disabled = false;
      btn.textContent = '🧹 Clean Database Duplicates';
      this.showToast('Duplicate attempts successfully removed!', 'success');
    });

    document.getElementById('qbSearchInput')?.addEventListener('input', (e) => {
      this.qbState.search = e.target.value.trim().toLowerCase();
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterContinent')?.addEventListener('change', (e) => {
      this.qbState.continent = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterBatch')?.addEventListener('change', (e) => {
      this.qbState.batch = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterDifficulty')?.addEventListener('change', (e) => {
      this.qbState.difficulty = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterStatus')?.addEventListener('change', (e) => {
      this.qbState.status = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbPageSize')?.addEventListener('change', (e) => {
      this.qbState.pageSize = parseInt(e.target.value, 10);
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('pgPrevBtn')?.addEventListener('click', () => {
      if (this.qbState.page > 1) { this.qbState.page--; this.renderQuestionBank(); }
    });
    document.getElementById('pgNextBtn')?.addEventListener('click', () => {
      this.qbState.page++;
      this.renderQuestionBank();
    });
    document.getElementById('pgJumpBtn')?.addEventListener('click', () => {
      const target = parseInt(document.getElementById('pgJumpInput').value, 10);
      if (!isNaN(target) && target >= 1) {
        this.qbState.page = target;
        this.renderQuestionBank();
      }
    });

    document.getElementById('btnOpenCsvModal')?.addEventListener('click', () => {
      this.stagedCsvQuestions = [];
      document.getElementById('csvFileInput').value = '';
      document.getElementById('csvPreviewSection').classList.add('hidden');
      document.getElementById('btnConfirmImport').disabled = true;
      const purgeBtn = document.getElementById('btnPurgeAndImport');
      if (purgeBtn) purgeBtn.disabled = true;
      document.getElementById('csvImportModal').classList.remove('hidden');
    });
    document.getElementById('btnCloseCsvModal')?.addEventListener('click', () => {
      document.getElementById('csvImportModal').classList.add('hidden');
    });
    document.getElementById('btnCancelCsvImport')?.addEventListener('click', () => {
      document.getElementById('csvImportModal').classList.add('hidden');
    });
    document.getElementById('csvFileInput')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) this.processPermissiveCsv(file);
    });

    // Confirmation Handlers
    document.getElementById('btnConfirmImport')?.addEventListener('click', () => this.commitCsvImport(false));
    document.getElementById('btnPurgeAndImport')?.addEventListener('click', () => {
      if (confirm("WARNING: This will permanently delete ALL existing questions and replace them entirely with the new CSV. Proceed?")) {
        this.commitCsvImport(true);
      }
    });

    document.getElementById('btnExportCsv')?.addEventListener('click', () => this.exportQuestionBankCsv());
    document.getElementById('btnOpenAddModal')?.addEventListener('click', () => this.openQuestionModal());
    document.getElementById('btnCloseQModal')?.addEventListener('click', () => document.getElementById('questionModal').classList.add('hidden'));
    document.getElementById('btnCancelQModal')?.addEventListener('click', () => document.getElementById('questionModal').classList.add('hidden'));
    document.getElementById('questionForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveSingleQuestion();
    });

    document.getElementById('btnCloseAttemptModal')?.addEventListener('click', () => document.getElementById('attemptDetailModal').classList.add('hidden'));
    document.getElementById('btnCloseAttemptModalFooter')?.addEventListener('click', () => document.getElementById('attemptDetailModal').classList.add('hidden'));
  }

  switchPortal(portalName) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.portal-view').forEach(p => p.classList.add('hidden'));

    if (portalName === 'student') {
      document.getElementById('btnNavStudent').classList.add('active');
      document.getElementById('portalStudent').classList.remove('hidden');
      this.renderStudentDashboard();
      this.renderLeaderboard();
    } else {
      document.getElementById('btnNavAdmin').classList.add('active');
      document.getElementById('portalAdmin').classList.remove('hidden');
      this.renderAdminOverview();
      this.renderQuestionBank();
    }
  }

  switchSubView(parentPortal, subviewName, tabElement) {
    parentPortal.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    parentPortal.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));

    if (tabElement) tabElement.classList.add('active');
    const target = document.getElementById('subView' + subviewName.charAt(0).toUpperCase() + subviewName.slice(1));
    if (target) target.classList.remove('hidden');

    if (subviewName === 'leaderboard') this.renderLeaderboard();
    if (subviewName === 'studentDashboard') this.renderStudentDashboard();
    if (subviewName === 'adminOverview') this.renderAdminOverview();
    if (subviewName === 'adminQuestionBank') this.renderQuestionBank();
  }

  /* --------------------------------------------------------------------------
     CSV IMPORT WITH BATCH LABEL & PURGE OPTION
     -------------------------------------------------------------------------- */
  processPermissiveCsv(file) {
    const reader = new FileReader();
    const batchTag = document.getElementById('csvBatchTag')?.value.trim() || 'Batch 2';

    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const rawRows = PermissiveCsvEngine.parse(text);
        const parsed = PermissiveCsvEngine.ingestAllRows(rawRows, batchTag);

        if (parsed.length === 0) {
          this.showToast('No valid rows found in CSV file.', 'warning');
          return;
        }

        this.stagedCsvQuestions = parsed;
        document.getElementById('csvPreviewSection').classList.remove('hidden');
        document.getElementById('csvValidCountBadge').textContent = `Total Questions Staged for "${batchTag}": ${parsed.length}`;
        document.getElementById('btnConfirmImport').disabled = false;
        const purgeBtn = document.getElementById('btnPurgeAndImport');
        if (purgeBtn) purgeBtn.disabled = false;

        const tbody = document.getElementById('csvPreviewTableBody');
        tbody.innerHTML = '';
        parsed.slice(0, 15).forEach((item, idx) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><span class="badge badge-info">${item.continent}</span> <span class="badge badge-warning">🏷️ ${item.batch}</span></td>
            <td>${this.escapeHtml(item.question.substring(0, 50))}...</td>
            <td>${this.escapeHtml(item.optionA)}</td>
            <td>${this.escapeHtml(item.optionB)}</td>
            <td>${this.escapeHtml(item.optionC)}</td>
            <td>${this.escapeHtml(item.optionD)}</td>
            <td><strong>${item.correctAnswer}</strong></td>
          `;
          tbody.appendChild(tr);
        });
      } catch (err) {
        this.showToast('CSV parsing error: ' + err.message, 'error');
      }
    };
    reader.readAsText(file, 'UTF-8');
  }

  async commitCsvImport(purgeExisting = false) {
    if (this.stagedCsvQuestions.length === 0) return;
    const btn = purgeExisting ? document.getElementById('btnPurgeAndImport') : document.getElementById('btnConfirmImport');
    btn.disabled = true;
    btn.textContent = purgeExisting ? 'Purging & Saving...' : 'Saving 700+ Questions...';

    const res = await this.storage.saveBatchQuestions(this.stagedCsvQuestions, purgeExisting);
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.updateAvailabilityBadge();

    btn.disabled = false;
    btn.textContent = purgeExisting ? '🗑️ Delete All & Upload Fresh CSV' : '➕ Add to Existing Bank';
    document.getElementById('csvImportModal').classList.add('hidden');
    
    if (purgeExisting) {
      this.showToast(`Clean Slate Success: Deleted old questions and imported ${res.count} new questions!`, 'success');
    } else {
      this.showToast(`Import Success: Added ${res.count} questions to the bank!`, 'success');
    }
  }

  exportQuestionBankCsv() {
    if (this.questions.length === 0) {
      this.showToast('Question bank is empty.', 'warning');
      return;
    }
    const csv = PermissiveCsvEngine.stringify(this.questions);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `GeoQuiz_Bank_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    this.showToast(`Exported ${this.questions.length} questions.`, 'success');
  }

  renderQuestionBank() {
    const tbody = document.getElementById('qbTableBody');
    tbody.innerHTML = '';

    const filtered = this.questions.filter(q => {
      const matchSearch = !this.qbState.search ||
        q.id.toLowerCase().includes(this.qbState.search) ||
        (q.batch && q.batch.toLowerCase().includes(this.qbState.search)) ||
        q.question.toLowerCase().includes(this.qbState.search) ||
        q.topic.toLowerCase().includes(this.qbState.search);
      const matchCont = this.qbState.continent === 'All' || q.continent === this.qbState.continent;
      const matchBatch = this.qbState.batch === 'All' || (q.batch || 'Batch 1') === this.qbState.batch;
      const matchDiff = this.qbState.difficulty === 'All' || q.difficulty === this.qbState.difficulty;
      const matchStatus = this.qbState.status === 'All' || q.status === this.qbState.status;
      return matchSearch && matchCont && matchBatch && matchDiff && matchStatus;
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / this.qbState.pageSize));
    if (this.qbState.page > totalPages) this.qbState.page = totalPages;

    const start = (this.qbState.page - 1) * this.qbState.pageSize;
    const end = Math.min(start + this.qbState.pageSize, total);
    const slice = filtered.slice(start, end);

    document.getElementById('pgStart').textContent = total > 0 ? start + 1 : 0;
    document.getElementById('pgEnd').textContent = end;
    document.getElementById('pgTotal').textContent = total;
    document.getElementById('pgCurrent').textContent = `Page ${this.qbState.page} of ${totalPages}`;
    document.getElementById('pgPrevBtn').disabled = this.qbState.page <= 1;
    document.getElementById('pgNextBtn').disabled = this.qbState.page >= totalPages;
    document.getElementById('pgJumpInput').max = totalPages;

    if (slice.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding: 2rem;">No questions matching active filters.</td></tr>`;
      return;
    }

    slice.forEach(q => {
      const tr = document.createElement('tr');
      const badgeClass = q.status === 'Published' ? 'badge-success' : 'badge-warning';
      const batchLabel = q.batch || 'Batch 1';
      const isNewBatch = batchLabel !== 'Batch 1';

      tr.innerHTML = `
        <td><code>${this.escapeHtml(q.id)}</code></td>
        <td><span class="badge ${isNewBatch ? 'badge-warning' : 'badge-secondary'}">${isNewBatch ? '🆕 ' : ''}${this.escapeHtml(batchLabel)}</span></td>
        <td><span class="badge badge-info">${this.escapeHtml(q.continent)}</span></td>
        <td>${this.escapeHtml(q.difficulty)}</td>
        <td>${this.escapeHtml(q.topic)}</td>
        <td>${this.escapeHtml(q.question)}</td>
        <td><strong>${q.correctAnswer}</strong></td>
        <td><span class="badge ${badgeClass}">${q.status}</span></td>
        <td>
          <button class="btn btn-outline-sm btn-edit" data-id="${q.id}">Edit</button>
          <button class="btn btn-outline-sm btn-del" data-id="${q.id}" style="color:var(--danger)">Del</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-edit').forEach(b => b.addEventListener('click', () => this.openEditQuestionModal(b.dataset.id)));
    tbody.querySelectorAll('.btn-del').forEach(b => b.addEventListener('click', () => this.confirmDeleteQuestion(b.dataset.id)));
  }

  openQuestionModal() {
    document.getElementById('questionModalTitle').textContent = 'Add Geography Question';
    document.getElementById('questionForm').reset();
    document.getElementById('editQuestionId').value = '';
    document.getElementById('questionModal').classList.remove('hidden');
  }

  openEditQuestionModal(id) {
    const q = this.questions.find(item => item.id === id);
    if (!q) return;
    document.getElementById('questionModalTitle').textContent = `Edit Question (${id})`;
    document.getElementById('editQuestionId').value = q.id;
    document.getElementById('qfContinent').value = q.continent;
    document.getElementById('qfBatch').value = q.batch || 'Batch 1';
    document.getElementById('qfDifficulty').value = q.difficulty;
    document.getElementById('qfTopic').value = q.topic;
    document.getElementById('qfStatus').value = q.status;
    document.getElementById('qfText').value = q.question;
    document.getElementById('qfOptA').value = q.optionA;
    document.getElementById('qfOptB').value = q.optionB;
    document.getElementById('qfOptC').value = q.optionC;
    document.getElementById('qfOptD').value = q.optionD;
    document.getElementById('qfCorrect').value = q.correctAnswer;
    document.getElementById('qfSource').value = q.source || '';
    document.getElementById('qfExplanation').value = q.explanation || '';
    document.getElementById('questionModal').classList.remove('hidden');
  }

  async saveSingleQuestion() {
    const editId = document.getElementById('editQuestionId').value;
    const continent = document.getElementById('qfContinent').value;
    const batch = document.getElementById('qfBatch').value.trim() || 'Batch 1';
    const difficulty = document.getElementById('qfDifficulty').value;
    const topic = document.getElementById('qfTopic').value.trim();
    const status = document.getElementById('qfStatus').value;
    const questionText = document.getElementById('qfText').value.trim();
    const optA = document.getElementById('qfOptA').value.trim();
    const optB = document.getElementById('qfOptB').value.trim();
    const optC = document.getElementById('qfOptC').value.trim();
    const optD = document.getElementById('qfOptD').value.trim();
    const correctAnswer = document.getElementById('qfCorrect').value;
    const source = document.getElementById('qfSource').value.trim();
    const explanation = document.getElementById('qfExplanation').value.trim();

    const id = editId || `GEO-${continent.substring(0, 2).toUpperCase()}-${Date.now().toString(36)}`;

    const questionObj = {
      id,
      batch,
      continent,
      difficulty,
      topic,
      status,
      question: questionText,
      optionA: optA,
      optionB: optB,
      optionC: optC,
      optionD: optD,
      correctAnswer,
      source: source || 'Curriculum',
      explanation,
      createdAt: new Date().toISOString()
    };

    await this.storage.saveQuestion(questionObj);
    await this.refreshData();
    this.populateBatchDropdowns();
    this.populateTopicDropdown();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.updateAvailabilityBadge();

    document.getElementById('questionModal').classList.add('hidden');
    this.showToast(`Saved question ${id}`, 'success');
  }

  async confirmDeleteQuestion(id) {
    if (confirm(`Delete question ${id}? This action is irreversible.`)) {
      await this.storage.deleteQuestion(id);
      await this.refreshData();
      this.populateBatchDropdowns();
      this.populateTopicDropdown();
      this.renderQuestionBank();
      this.renderAdminOverview();
      this.updateAvailabilityBadge();
      this.showToast(`Deleted question ${id}`, 'info');
    }
  }

  getEligibleQuestions(continent, difficulty, topic, batch = 'All') {
    return this.questions.filter(q => {
      const isPub = q.status === 'Published';
      const matchCont = (continent === 'Whole World' || continent === 'All') ? true : q.continent === continent;
      const matchBatch = (batch === 'All') ? true : (q.batch === batch);
      const matchDiff = difficulty === 'All' || q.difficulty === difficulty;
      const matchTopic = topic === 'All' || q.topic === topic;
      return isPub && matchCont && matchBatch && matchDiff && matchTopic;
    });
  }

  updateAvailabilityBadge() {
    const cont = document.getElementById('setupContinent')?.value || 'Whole World';
    const batch = document.getElementById('setupBatch')?.value || 'All';
    const diff = document.getElementById('setupDifficulty')?.value || 'All';
    const top = document.getElementById('setupTopic')?.value || 'All';
    const pool = this.getEligibleQuestions(cont, diff, top, batch);

    const badge = document.getElementById('availabilityNotice');
    if (badge) {
      const batchTxt = batch === 'All' ? '' : ` [${batch}]`;
      badge.textContent = `${pool.length} published questions available in ${cont}${batchTxt}`;
      badge.className = pool.length > 0 ? 'badge badge-info' : 'badge badge-danger';
    }
    const btn = document.getElementById('btnStartQuiz');
    if (btn) btn.disabled = (pool.length === 0);
  }

  startAssessment() {
    if (!this.currentUser) {
      this.showToast('Authentication required before starting a quiz.', 'error');
      this.openAuthModal();
      return;
    }

    const continent = document.getElementById('setupContinent').value;
    const batch = document.getElementById('setupBatch').value;
    const difficulty = document.getElementById('setupDifficulty').value;
    const topic = document.getElementById('setupTopic').value;
    const countOption = document.getElementById('setupCount').value;
    const mode = document.querySelector('input[name="assessmentMode"]:checked').value;

    let pool = this.getEligibleQuestions(continent, difficulty, topic, batch);
    if (pool.length === 0) {
      this.showToast('No matching questions available for this selection.', 'error');
      return;
    }

    let targetCount = 10;
    if (countOption === 'all') {
      targetCount = pool.length;
    } else if (countOption === 'custom') {
      const customVal = parseInt(document.getElementById('setupCustomCount').value, 10);
      targetCount = (!isNaN(customVal) && customVal > 0) ? Math.min(customVal, pool.length) : pool.length;
    } else {
      targetCount = Math.min(parseInt(countOption, 10), pool.length);
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, targetCount);

    this.quizSession = {
      active: true,
      sessionId: `SES-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      sessionFinalized: false,
      mode,
      continent,
      batch,
      difficulty,
      topic,
      questions: selected,
      currentIndex: 0,
      userAnswers: {},
      startTime: new Date(),
      secondsRemaining: mode === 'exam' ? selected.length * 60 : 0,
      timerInterval: null
    };

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizArena').classList.remove('hidden');

    document.getElementById('arenaModeBadge').textContent = mode === 'exam' ? 'Exam Mode' : 'Practice Mode';
    document.getElementById('arenaModeBadge').className = mode === 'exam' ? 'badge badge-danger' : 'badge badge-primary';
    document.getElementById('arenaContinentBadge').textContent = continent;
    document.getElementById('arenaDifficultyBadge').textContent = difficulty;
    document.getElementById('totalQCount').textContent = selected.length;

    const submitBtn = document.getElementById('btnSubmitExam');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = mode === 'exam' ? 'Submit Final Exam' : 'Complete Practice';
    }

    if (mode === 'exam') {
      document.getElementById('arenaTimerWrapper').classList.remove('hidden');
      this.startTimer();
    } else {
      document.getElementById('arenaTimerWrapper').classList.add('hidden');
    }

    this.renderCurrentQuestion();
  }

  startTimer() {
    if (this.quizSession.timerInterval) clearInterval(this.quizSession.timerInterval);
    const updateTimer = () => {
      const m = Math.floor(this.quizSession.secondsRemaining / 60);
      const s = this.quizSession.secondsRemaining % 60;
      document.getElementById('arenaTimer').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      if (this.quizSession.secondsRemaining <= 0) {
        clearInterval(this.quizSession.timerInterval);
        this.showToast('Time expired! Submitting assessment.', 'warning');
        this.finalizeAssessment(true);
      }
      this.quizSession.secondsRemaining--;
    };
    updateTimer();
    this.quizSession.timerInterval = setInterval(updateTimer, 1000);
  }

  renderCurrentQuestion() {
    const { questions, currentIndex, userAnswers, mode } = this.quizSession;
    const q = questions[currentIndex];

    document.getElementById('currentQIndex').textContent = currentIndex + 1;
    const pct = ((currentIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${pct}%`;

    document.getElementById('qTopicTag').textContent = `${q.continent} • ${q.topic}`;
    
    // Display Batch tag on active question
    const batchBadge = document.getElementById('qBatchBadge');
    if (batchBadge) {
      batchBadge.textContent = `🏷️ ${q.batch || 'Batch 1'}`;
    }

    document.getElementById('qIdTag').textContent = `ID: ${q.id}`;
    document.getElementById('qText').textContent = q.question;

    const container = document.getElementById('qOptionsList');
    container.innerHTML = '';

    const options = [
      { key: 'A', text: q.optionA },
      { key: 'B', text: q.optionB },
      { key: 'C', text: q.optionC },
      { key: 'D', text: q.optionD }
    ];

    const chosenKey = userAnswers[currentIndex];
    const isAnswered = chosenKey !== undefined;

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (chosenKey === opt.key) btn.classList.add('selected');

      if (mode === 'practice' && isAnswered) {
        btn.disabled = true;
        if (opt.key === q.correctAnswer) btn.classList.add('correct');
        else if (chosenKey === opt.key) btn.classList.add('incorrect');
      }

      btn.innerHTML = `<span class="opt-badge">${opt.key}</span><span>${this.escapeHtml(opt.text)}</span>`;
      btn.addEventListener('click', () => {
        if (mode === 'practice' && userAnswers[currentIndex] !== undefined) return;
        userAnswers[currentIndex] = opt.key;
        this.renderCurrentQuestion();
      });
      container.appendChild(btn);
    });

    const fb = document.getElementById('qFeedbackPane');
    if (mode === 'practice' && isAnswered) {
      fb.classList.remove('hidden');
      const ok = chosenKey === q.correctAnswer;
      fb.className = `feedback-pane ${ok ? 'correct' : 'incorrect'}`;
      document.getElementById('feedbackTitle').textContent = ok ? '✅ Correct Answer!' : `❌ Incorrect (Correct: Option ${q.correctAnswer})`;
      document.getElementById('feedbackExplanation').textContent = q.explanation || 'No detailed explanation provided.';
      document.getElementById('feedbackSource').textContent = q.source ? `Source: ${q.source}` : '';
    } else {
      fb.classList.add('hidden');
    }

    document.getElementById('btnPrevQuestion').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('btnNextQuestion');
    const submitBtn = document.getElementById('btnSubmitExam');

    if (currentIndex === questions.length - 1) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
      submitBtn.textContent = mode === 'exam' ? 'Submit Final Exam' : 'Complete Practice';
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }

  handleNextQuestion() {
    if (this.quizSession.currentIndex < this.quizSession.questions.length - 1) {
      this.quizSession.currentIndex++;
      this.renderCurrentQuestion();
    }
  }

  handlePrevQuestion() {
    if (this.quizSession.currentIndex > 0) {
      this.quizSession.currentIndex--;
      this.renderCurrentQuestion();
    }
  }

  confirmSubmitExam() {
    if (this.quizSession.sessionFinalized) return;

    const { questions, userAnswers, mode } = this.quizSession;
    const answered = Object.keys(userAnswers).length;
    if (mode === 'exam' && answered < questions.length) {
      if (!confirm(`You left ${questions.length - answered} questions unanswered. Submit now?`)) return;
    }

    // Instantly lock button to prevent multiple submissions
    const submitBtn = document.getElementById('btnSubmitExam');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    this.finalizeAssessment(false);
  }

  async finalizeAssessment(isTimeout = false) {
    if (this.quizSession.timerInterval) clearInterval(this.quizSession.timerInterval);

    if (this.quizSession.sessionFinalized) return;
    this.quizSession.sessionFinalized = true;

    const { sessionId, questions, userAnswers, mode, continent, difficulty, topic, startTime } = this.quizSession;
    const now = new Date();
    const durationSeconds = Math.max(1, Math.round((now - startTime) / 1000));

    let correctCount = 0;
    const snapshots = questions.map((q, idx) => {
      const selected = userAnswers[idx] || null;
      const isCorrect = (selected === q.correctAnswer);
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        questionText: q.question,
        continent: q.continent,
        batch: q.batch || 'Batch 1',
        difficulty: q.difficulty,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || '',
        isCorrect
      };
    });

    const accuracyPct = Math.round((correctCount / questions.length) * 100);

    const attemptRecord = {
      id: `ATT-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 5)}`,
      sessionId,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      mode,
      continent,
      difficulty,
      topic,
      totalQuestions: questions.length,
      correctCount,
      accuracyPct,
      durationSeconds,
      timestamp: now.toISOString(),
      formattedTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      formattedDate: now.toLocaleDateString(),
      status: isTimeout ? 'Completed (Timeout)' : 'Completed',
      snapshots
    };

    await this.storage.saveAttempt(attemptRecord);
    await this.refreshData();

    this.renderResultsScreen(attemptRecord);
    this.renderLeaderboard();
  }

  renderResultsScreen(att) {
    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizResults').classList.remove('hidden');

    document.getElementById('resultsScorePct').textContent = `${att.accuracyPct}%`;
    document.getElementById('resultsFraction').textContent = `${att.correctCount} / ${att.totalQuestions}`;
    document.getElementById('resMode').textContent = att.mode === 'exam' ? 'Examination' : 'Practice';
    document.getElementById('resContinent').textContent = att.continent;
    document.getElementById('resAccuracy').textContent = `${att.accuracyPct}%`;

    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;
    document.getElementById('resTime').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    const reviewContainer = document.getElementById('resultsReviewList');
    reviewContainer.innerHTML = '';

    att.snapshots.forEach((snap, idx) => {
      const item = document.createElement('div');
      item.className = `review-item ${snap.isCorrect ? 'pass' : 'fail'}`;
      item.innerHTML = `
        <div class="review-header">
          <span>Question ${idx + 1} (${snap.continent} • ${snap.difficulty})</span>
          <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
        <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
        <div class="review-answers">
          <span>Your Answer: <strong>${snap.selectedAnswer ? `Option ${snap.selectedAnswer}` : 'Unanswered'}</strong></span>
          ${!snap.isCorrect ? `<span>Correct Key: <strong>Option ${snap.correctAnswer}</strong></span>` : ''}
          ${snap.explanation ? `<div class="feedback-source">${this.escapeHtml(snap.explanation)}</div>` : ''}
        </div>
      `;
      reviewContainer.appendChild(item);
    });
  }

  /* --------------------------------------------------------------------------
     HISTORY DRILL-DOWN & LEADERBOARD
     -------------------------------------------------------------------------- */
  openAttemptDetailModal(attemptId) {
    const att = this.attempts.find(a => a.id === attemptId);
    if (!att) return;

    document.getElementById('attemptDetailTitle').textContent = `Assessment Review — ${att.studentName} (${att.studentId})`;

    const summary = document.getElementById('attemptModalSummary');
    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;

    summary.innerHTML = `
      <div class="stat-box"><span class="stat-label">Date & Time</span><span class="stat-val">${att.formattedDate || new Date(att.timestamp).toLocaleDateString()} ${att.formattedTime || ''}</span></div>
      <div class="stat-box"><span class="stat-label">Scope</span><span class="stat-val">${att.continent}</span></div>
      <div class="stat-box"><span class="stat-label">Mode</span><span class="stat-val">${att.mode}</span></div>
      <div class="stat-box"><span class="stat-label">Score</span><span class="stat-val text-success">${att.correctCount} / ${att.totalQuestions} (${att.accuracyPct}%)</span></div>
      <div class="stat-box"><span class="stat-label">Duration</span><span class="stat-val">${m}m ${s}s</span></div>
    `;

    const qList = document.getElementById('attemptModalQuestionsList');
    qList.innerHTML = '';

    (att.snapshots || []).forEach((snap, idx) => {
      const item = document.createElement('div');
      item.className = `review-item ${snap.isCorrect ? 'pass' : 'fail'}`;
      item.innerHTML = `
        <div class="review-header">
          <span>#${idx + 1} (${snap.continent} • ${snap.difficulty})</span>
          <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
        <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
        <div class="review-answers">
          <span>Chosen: <strong>${snap.selectedAnswer ? `Option ${snap.selectedAnswer}` : 'Unanswered'}</strong></span>
          ${!snap.isCorrect ? `<span>Correct: <strong>Option ${snap.correctAnswer}</strong></span>` : ''}
          ${snap.explanation ? `<div class="feedback-source">${this.escapeHtml(snap.explanation)}</div>` : ''}
        </div>
      `;
      qList.appendChild(item);
    });

    document.getElementById('attemptDetailModal').classList.remove('hidden');
  }

  renderLeaderboard() {
    const tbody = document.getElementById('leaderboardTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (this.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center">No assessments recorded yet. Be the first to play!</td></tr>`;
      return;
    }

    const sorted = [...this.attempts].sort((a, b) => {
      if (b.accuracyPct !== a.accuracyPct) return b.accuracyPct - a.accuracyPct;
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      return (a.durationSeconds || 9999) - (b.durationSeconds || 9999);
    }).slice(0, 10);

    sorted.forEach((att, idx) => {
      const tr = document.createElement('tr');
      const rankIcon = idx === 0 ? '🥇 1' : (idx === 1 ? '🥈 2' : (idx === 2 ? '🥉 3' : `${idx + 1}`));
      const roleBadge = att.userRole === 'admin' ? '<span class="badge badge-warning">Teacher/Admin</span>' : '<span class="badge badge-info">Student</span>';
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;

      tr.innerHTML = `
        <td><strong class="rank-badge">${rankIcon}</strong></td>
        <td><strong>${this.escapeHtml(att.studentName)}</strong></td>
        <td>${roleBadge}</td>
        <td><span class="badge badge-secondary">${att.continent}</span></td>
        <td>${att.mode}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong class="text-success">${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td>${att.formattedDate || new Date(att.timestamp).toLocaleDateString()}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  renderStudentDashboard() {
    if (!this.currentUser) return;
    document.getElementById('studentDashName').textContent = this.currentUser.name;
    document.getElementById('studentDashId').textContent = this.currentUser.id;

    const myAttempts = this.attempts.filter(a => a.studentId === this.currentUser.id);
    document.getElementById('dashTotalAttempts').textContent = myAttempts.length;

    let totalQ = 0, totalC = 0, best = 0, totalSec = 0;
    myAttempts.forEach(a => {
      totalQ += a.totalQuestions;
      totalC += a.correctCount;
      totalSec += (a.durationSeconds || 0);
      if (a.accuracyPct > best) best = a.accuracyPct;
    });

    const overallAcc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
    document.getElementById('dashOverallAccuracy').textContent = `${overallAcc}%`;
    document.getElementById('dashBestScore').textContent = `${best}%`;
    document.getElementById('dashTotalTime').textContent = `${Math.round(totalSec / 60)}m`;

    const tbody = document.getElementById('studentHistoryTableBody');
    tbody.innerHTML = '';

    if (myAttempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center">No assessments taken yet.</td></tr>`;
      return;
    }

    myAttempts.forEach(att => {
      const tr = document.createElement('tr');
      const dateStr = att.formattedDate || new Date(att.timestamp).toLocaleDateString();
      const timeStr = att.formattedTime || new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;

      tr.innerHTML = `
        <td>${dateStr} <small class="text-muted">${timeStr}</small></td>
        <td><span class="badge ${att.mode === 'exam' ? 'badge-danger' : 'badge-primary'}">${att.mode}</span></td>
        <td>${att.continent}</td>
        <td>${att.difficulty}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td><button class="btn btn-outline-sm btn-view-attempt" data-id="${att.id}">Review</button></td>
      `;
      tr.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-view-attempt')) this.openAttemptDetailModal(att.id);
      });
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-view-attempt').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAttemptDetailModal(b.dataset.id);
      });
    });
  }

  renderAdminOverview() {
    document.getElementById('adminTotalQuestions').textContent = this.questions.length;
    document.getElementById('adminPublishedQuestions').textContent = this.questions.filter(q => q.status === 'Published').length;
    document.getElementById('adminTotalStudents').textContent = new Set(this.attempts.map(a => a.studentId)).size;
    document.getElementById('adminTotalAttempts').textContent = this.attempts.length;

    const tbody = document.getElementById('adminAttemptsTableBody');
    tbody.innerHTML = '';

    if (this.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="text-center">No attempts logged yet.</td></tr>`;
      return;
    }

    this.attempts.forEach(att => {
      const tr = document.createElement('tr');
      const dateStr = att.formattedDate || new Date(att.timestamp).toLocaleDateString();
      const timeStr = att.formattedTime || new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const m = Math.floor(att.durationSeconds / 60);
      const s = att.durationSeconds % 60;
      const roleBadge = att.userRole === 'admin' ? '<span class="badge badge-warning">Admin</span>' : '<span class="badge badge-info">Student</span>';

      tr.innerHTML = `
        <td>${dateStr} <small class="text-muted">${timeStr}</small></td>
        <td><code>${this.escapeHtml(att.studentId)}</code></td>
        <td><strong>${this.escapeHtml(att.studentName)}</strong></td>
        <td>${roleBadge}</td>
        <td>${att.continent}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td><button class="btn btn-outline-sm btn-view-attempt" data-id="${att.id}">Review</button></td>
      `;
      tr.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-view-attempt')) this.openAttemptDetailModal(att.id);
      });
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-view-attempt').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAttemptDetailModal(b.dataset.id);
      });
    });
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.geoQuizApp = new GeoQuizApp();
});