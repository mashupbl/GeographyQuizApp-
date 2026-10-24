/**
 * GeoQuiz Explorer 🌍 | Institutional Geography Learning Platform
 * Core Engine v3.0 (Flag Quiz, Interactive Seterra Map & Clean Attempt Engine)
 */

'use strict';

const VALID_CONTINENTS = [
  'Whole World', 'Asia', 'Africa', 'Europe', 
  'North America', 'South America', 'Australia/Oceania', 'Antarctica'
];

/* ==========================================================================
   FLAG MASTER REPOSITORY (CATEGORIZED BY CONTINENT)
   ========================================================================== */
const WORLD_FLAGS = [
  // South America
  { code: 'cl', name: 'Chile', continent: 'South America' },
  { code: 'ar', name: 'Argentina', continent: 'South America' },
  { code: 'br', name: 'Brazil', continent: 'South America' },
  { code: 'co', name: 'Colombia', continent: 'South America' },
  { code: 'pe', name: 'Peru', continent: 'South America' },
  { code: 've', name: 'Venezuela', continent: 'South America' },
  { code: 'ec', name: 'Ecuador', continent: 'South America' },
  { code: 'bo', name: 'Bolivia', continent: 'South America' },
  { code: 'py', name: 'Paraguay', continent: 'South America' },
  { code: 'uy', name: 'Uruguay', continent: 'South America' },

  // North America & Caribbean
  { code: 'us', name: 'United States', continent: 'North America' },
  { code: 'ca', name: 'Canada', continent: 'North America' },
  { code: 'mx', name: 'Mexico', continent: 'North America' },
  { code: 'cu', name: 'Cuba', continent: 'North America' },
  { code: 'cr', name: 'Costa Rica', continent: 'North America' },
  { code: 'pa', name: 'Panama', continent: 'North America' },
  { code: 'jm', name: 'Jamaica', continent: 'North America' },
  { code: 'gt', name: 'Guatemala', continent: 'North America' },

  // Europe
  { code: 'cz', name: 'Czech Republic', continent: 'Europe' },
  { code: 'fr', name: 'France', continent: 'Europe' },
  { code: 'de', name: 'Germany', continent: 'Europe' },
  { code: 'it', name: 'Italy', continent: 'Europe' },
  { code: 'es', name: 'Spain', continent: 'Europe' },
  { code: 'gb', name: 'United Kingdom', continent: 'Europe' },
  { code: 'nl', name: 'Netherlands', continent: 'Europe' },
  { code: 'se', name: 'Sweden', continent: 'Europe' },
  { code: 'no', name: 'Norway', continent: 'Europe' },
  { code: 'ch', name: 'Switzerland', continent: 'Europe' },
  { code: 'pt', name: 'Portugal', continent: 'Europe' },
  { code: 'gr', name: 'Greece', continent: 'Europe' },
  { code: 'pl', name: 'Poland', continent: 'Europe' },
  { code: 'at', name: 'Austria', continent: 'Europe' },
  { code: 'ie', name: 'Ireland', continent: 'Europe' },

  // Asia
  { code: 'jp', name: 'Japan', continent: 'Asia' },
  { code: 'cn', name: 'China', continent: 'Asia' },
  { code: 'in', name: 'India', continent: 'Asia' },
  { code: 'sa', name: 'Saudi Arabia', continent: 'Asia' },
  { code: 'ae', name: 'United Arab Emirates', continent: 'Asia' },
  { code: 'id', name: 'Indonesia', continent: 'Asia' },
  { code: 'kr', name: 'South Korea', continent: 'Asia' },
  { code: 'tr', name: 'Turkey', continent: 'Asia' },
  { code: 'my', name: 'Malaysia', continent: 'Asia' },
  { code: 'sg', name: 'Singapore', continent: 'Asia' },
  { code: 'th', name: 'Thailand', continent: 'Asia' },
  { code: 'qa', name: 'Qatar', continent: 'Asia' },

  // Africa
  { code: 'eg', name: 'Egypt', continent: 'Africa' },
  { code: 'za', name: 'South Africa', continent: 'Africa' },
  { code: 'ng', name: 'Nigeria', continent: 'Africa' },
  { code: 'ke', name: 'Kenya', continent: 'Africa' },
  { code: 'ma', name: 'Morocco', continent: 'Africa' },
  { code: 'dz', name: 'Algeria', continent: 'Africa' },
  { code: 'et', name: 'Ethiopia', continent: 'Africa' },
  { code: 'gh', name: 'Ghana', continent: 'Africa' },
  { code: 'sn', name: 'Senegal', continent: 'Africa' },
  { code: 'tz', name: 'Tanzania', continent: 'Africa' },

  // Australia / Oceania
  { code: 'au', name: 'Australia', continent: 'Australia/Oceania' },
  { code: 'nz', name: 'New Zealand', continent: 'Australia/Oceania' },
  { code: 'fj', name: 'Fiji', continent: 'Australia/Oceania' },
  { code: 'pg', name: 'Papua New Guinea', continent: 'Australia/Oceania' }
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
          prev.type === cur.type &&
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
          const key = `${d.studentId}_${d.type || 'qna'}_${d.continent}_${d.correctCount}_${d.totalQuestions}_${dDate}`;
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
   PERMISSIVE CSV INGESTION ENGINE
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
   MAIN APP CONTROLLER
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

    // Standard Q&A Session
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

    // Flag Quiz Session
    this.flagSession = {
      active: false,
      continent: 'Whole World',
      items: [],
      currentIndex: 0,
      score: 0,
      timerSec: 15,
      secondsRemaining: 15,
      timerInterval: null,
      answered: false,
      snapshots: []
    };

    // Map Pointing Session (Seterra Style)
    this.mapSession = {
      active: false,
      targets: [],
      currentTargetIndex: 0,
      attemptsOnCurrent: 0,
      totalCompleted: 0,
      correctPoints: 0,
      secondsElapsed: 0,
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
    // Portal Switcher
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

    // Sub navigation
    document.querySelectorAll('.sub-nav .sub-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const subview = e.target.dataset.subview;
        const parentPortal = e.target.closest('.portal-view');
        this.switchSubView(parentPortal, subview, e.target);
      });
    });

    // Auth
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

    // Custom Count Input
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

    // Filter Listeners
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

    // Standard Quiz Launch & Actions
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

    // Flag Quiz Launch & Next
    document.getElementById('flagSetupForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startFlagQuiz();
    });
    document.getElementById('btnNextFlag')?.addEventListener('click', () => this.handleNextFlag());

    // Map Pointing Launch & Controls
    document.getElementById('btnStartMapPointing')?.addEventListener('click', () => this.startMapPointing());
    document.getElementById('btnSkipMapTarget')?.addEventListener('click', () => this.skipMapTarget());
    document.getElementById('btnExitMapArena')?.addEventListener('click', () => this.exitMapPointing());

    // SVG Continent Click Handlers
    document.querySelectorAll('.continent-path').forEach(path => {
      path.addEventListener('click', (e) => {
        const clickedName = e.target.dataset.name;
        this.handleContinentClick(clickedName, e.target);
      });
    });

    // Admin Quick Launch buttons
    document.getElementById('btnAdminLaunchFlag')?.addEventListener('click', () => {
      this.switchPortal('student');
      this.switchSubView(document.getElementById('portalStudent'), 'flagSetup', document.querySelector('[data-subview="flagSetup"]'));
    });
    document.getElementById('btnAdminLaunchMap')?.addEventListener('click', () => {
      this.switchPortal('student');
      this.switchSubView(document.getElementById('portalStudent'), 'mapSetup', document.querySelector('[data-subview="mapSetup"]'));
    });

    // Retake / Results actions
    document.getElementById('btnRetakeQuiz')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'quizSetup', document.querySelector('[data-subview="quizSetup"]'));
    });
    document.getElementById('btnGoToDashboard')?.addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'studentDashboard', document.querySelector('[data-subview="studentDashboard"]'));
    });

    // Leaderboard Refresh & Purge
    document.getElementById('btnRefreshLeaderboard')?.addEventListener('click', async () => {
      await this.refreshData();
      this.renderLeaderboard();
      this.showToast('Leaderboard refreshed.', 'info');
    });

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
      this.showToast('Duplicate attempts removed!', 'success');
    });

    // Question Bank Filters & Pagination
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

    // CSV Modal Handlers
    document.getElementById('btnOpenCsvModal')?.addEventListener('click', () => {
      this.stagedCsvQuestions = [];
      document.getElementById('csvFileInput').value = '';
      document.getElementById('csvPreviewSection').classList.add('hidden');
      document.getElementById('btnConfirmImport').disabled = true;
      const purgeBtn = document.getElementById('btnPurgeAndImport');
      if (purgeBtn) purgeBtn.disabled = true;
      document.getElementById('csvImportModal').classList.remove('hidden');
    });
    document.getElementById('btnCloseCsvModal')?.addEventListener('click', () => document.getElementById('csvImportModal').classList.add('hidden'));
    document.getElementById('btnCancelCsvImport')?.addEventListener('click', () => document.getElementById('csvImportModal').classList.add('hidden'));
    document.getElementById('csvFileInput')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) this.processPermissiveCsv(file);
    });

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

  /* ==========================================================================
     FLAG QUIZ MODULE LOGIC (MATCHES IMAGE 1)
     ========================================================================== */
  startFlagQuiz() {
    if (!this.currentUser) {
      this.showToast('Please authenticate before launching the Flag Quiz.', 'error');
      this.openAuthModal();
      return;
    }

    const continent = document.getElementById('flagContinent').value;
    const countVal = document.getElementById('flagCount').value;
    const timerSec = parseInt(document.getElementById('flagTimerLimit').value, 10);

    let pool = WORLD_FLAGS.filter(f => (continent === 'Whole World' ? true : f.continent === continent));
    if (pool.length < 4) pool = WORLD_FLAGS; // fallback

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = countVal === 'all' ? shuffled.length : Math.min(parseInt(countVal, 10), shuffled.length);
    const selected = shuffled.slice(0, count);

    this.flagSession = {
      active: true,
      continent,
      items: selected,
      currentIndex: 0,
      score: 0,
      timerSec,
      secondsRemaining: timerSec,
      timerInterval: null,
      answered: false,
      snapshots: []
    };

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewFlagArena').classList.remove('hidden');

    document.getElementById('flagTotalCount').textContent = selected.length;
    document.getElementById('flagLiveScore').textContent = '0';

    this.renderCurrentFlag();
  }

  renderCurrentFlag() {
    const { items, currentIndex, timerSec } = this.flagSession;
    const current = items[currentIndex];

    this.flagSession.answered = false;
    document.getElementById('btnNextFlag').disabled = true;
    document.getElementById('flagCurrentIndex').textContent = currentIndex + 1;
    document.getElementById('flagTimesUpLabel').classList.remove('active');

    // Display flag image (CDN via flagcdn)
    const img = document.getElementById('flagDisplayImg');
    img.src = `https://flagcdn.com/w320/${current.code}.png`;

    // Generate 4 options (1 correct + 3 distinct distractors)
    const distractors = WORLD_FLAGS
      .filter(f => f.code !== current.code)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(f => f.name);

    const options = [current.name, ...distractors].sort(() => 0.5 - Math.random());

    const grid = document.getElementById('flagOptionsGrid');
    grid.innerHTML = '';

    options.forEach(optName => {
      const btn = document.createElement('button');
      btn.className = 'flag-option-btn';
      btn.textContent = optName;
      btn.addEventListener('click', () => this.handleFlagChoice(optName, current.name));
      grid.appendChild(btn);
    });

    // Start 15s Timer if configured
    if (timerSec > 0) {
      this.flagSession.secondsRemaining = timerSec;
      const badge = document.getElementById('flagTimerBadge');
      badge.textContent = timerSec;
      if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

      this.flagSession.timerInterval = setInterval(() => {
        this.flagSession.secondsRemaining--;
        badge.textContent = this.flagSession.secondsRemaining;

        if (this.flagSession.secondsRemaining <= 0) {
          clearInterval(this.flagSession.timerInterval);
          this.handleFlagTimeout(current.name);
        }
      }, 1000);
    } else {
      document.getElementById('flagTimerContainer').style.display = 'none';
    }
  }

  handleFlagChoice(chosenName, correctName) {
    if (this.flagSession.answered) return;
    this.flagSession.answered = true;
    if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

    const isCorrect = (chosenName === correctName);
    if (isCorrect) {
      this.flagSession.score++;
      document.getElementById('flagLiveScore').textContent = this.flagSession.score;
    }

    const currentItem = this.flagSession.items[this.flagSession.currentIndex];
    this.flagSession.snapshots.push({
      questionText: `Identify flag of ${currentItem.name}`,
      selectedAnswer: chosenName,
      correctAnswer: correctName,
      isCorrect
    });

    // Style buttons according to Image 1
    document.querySelectorAll('.flag-option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctName) {
        btn.classList.add('selected-correct');
      } else if (btn.textContent === chosenName && !isCorrect) {
        btn.classList.add('selected-incorrect');
      }
    });

    document.getElementById('btnNextFlag').disabled = false;
  }

  handleFlagTimeout(correctName) {
    if (this.flagSession.answered) return;
    this.flagSession.answered = true;
    document.getElementById('flagTimesUpLabel').classList.add('active');

    const currentItem = this.flagSession.items[this.flagSession.currentIndex];
    this.flagSession.snapshots.push({
      questionText: `Identify flag of ${currentItem.name}`,
      selectedAnswer: 'Timed Out',
      correctAnswer: correctName,
      isCorrect: false
    });

    document.querySelectorAll('.flag-option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctName) {
        btn.classList.add('revealed-correct');
      }
    });
    document.getElementById('btnNextFlag').disabled = false;
  }

  handleNextFlag() {
    if (this.flagSession.currentIndex < this.flagSession.items.length - 1) {
      this.flagSession.currentIndex++;
      this.renderCurrentFlag();
    } else {
      this.finalizeFlagQuiz();
    }
  }

  async finalizeFlagQuiz() {
    if (this.flagSession.timerInterval) clearInterval(this.flagSession.timerInterval);

    const total = this.flagSession.items.length;
    const correct = this.flagSession.score;
    const accuracyPct = Math.round((correct / total) * 100);

    const attempt = {
      id: `ATT-FLAG-${Date.now().toString(36)}`,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      type: '🚩 Flag Quiz',
      mode: 'Flag Challenge',
      continent: this.flagSession.continent,
      difficulty: 'Medium',
      totalQuestions: total,
      correctCount: correct,
      accuracyPct,
      durationSeconds: total * 15,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString(),
      formattedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      snapshots: this.flagSession.snapshots
    };

    await this.storage.saveAttempt(attempt);
    await this.refreshData();
    this.renderResultsScreen(attempt);
  }

  /* ==========================================================================
     MAP POINTING MODULE LOGIC (SETERRA STYLE - MATCHES IMAGE 2)
     ========================================================================== */
  startMapPointing() {
    if (!this.currentUser) {
      this.showToast('Please authenticate before launching Map Pointing.', 'error');
      this.openAuthModal();
      return;
    }

    const continents = [
      'Europe', 'Asia', 'Africa', 'North America', 
      'South America', 'Australia/Oceania', 'Antarctica'
    ];
    const targets = [...continents].sort(() => 0.5 - Math.random());

    this.mapSession = {
      active: true,
      targets,
      currentTargetIndex: 0,
      attemptsOnCurrent: 0,
      totalCompleted: 0,
      correctPoints: 0,
      secondsElapsed: 0,
      timerInterval: null
    };

    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewMapArena').classList.remove('hidden');

    // Reset SVG paths
    document.querySelectorAll('.continent-path').forEach(p => {
      p.className.baseVal = 'continent-path';
    });

    this.updateMapMissionBar();
    this.startMapTimer();
  }

  updateMapMissionBar() {
    const { targets, currentTargetIndex, totalCompleted, correctPoints } = this.mapSession;
    const target = targets[currentTargetIndex];

    document.getElementById('mapScoreRatio').textContent = `${totalCompleted} / ${targets.length}`;
    const pct = totalCompleted > 0 ? Math.round((correctPoints / totalCompleted) * 100) : 0;
    document.getElementById('mapAccuracyPct').textContent = `${pct}%`;
    document.getElementById('mapTargetName').textContent = target || 'Completed';
  }

  startMapTimer() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    this.mapSession.secondsElapsed = 0;

    this.mapSession.timerInterval = setInterval(() => {
      this.mapSession.secondsElapsed++;
      const m = Math.floor(this.mapSession.secondsElapsed / 60);
      const s = this.mapSession.secondsElapsed % 60;
      document.getElementById('mapTimerDisplay').textContent = 
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
  }

  handleContinentClick(clickedName, element) {
    if (!this.mapSession.active) return;
    const target = this.mapSession.targets[this.mapSession.currentTargetIndex];

    if (clickedName === target) {
      // Correct!
      element.classList.add('correct-hit');
      element.classList.remove('hint-flash');

      const pts = this.mapSession.attemptsOnCurrent === 0 ? 1 : 0.5;
      this.mapSession.correctPoints += pts;
      this.mapSession.totalCompleted++;

      this.showMapToast(`✅ Correct! You found ${target}`, 'success');
      this.advanceMapTarget();
    } else {
      // Wrong hit
      this.mapSession.attemptsOnCurrent++;
      element.classList.add('wrong-hit');
      setTimeout(() => element.classList.remove('wrong-hit'), 400);

      this.showMapToast(`That was ${clickedName}, try again!`, 'warning');

      // 3rd miss hint: pulse target landmass
      if (this.mapSession.attemptsOnCurrent >= 2) {
        const targetEl = document.querySelector(`.continent-path[data-name="${target}"]`);
        if (targetEl) targetEl.classList.add('hint-flash');
      }
    }
  }

  showMapToast(text, type = 'info') {
    const toast = document.getElementById('mapFeedbackToast');
    toast.textContent = text;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2200);
  }

  skipMapTarget() {
    if (!this.mapSession.active) return;
    this.mapSession.totalCompleted++;
    this.advanceMapTarget();
  }

  advanceMapTarget() {
    this.mapSession.attemptsOnCurrent = 0;
    this.mapSession.currentTargetIndex++;

    if (this.mapSession.currentTargetIndex < this.mapSession.targets.length) {
      this.updateMapMissionBar();
    } else {
      this.finalizeMapPointing();
    }
  }

  async finalizeMapPointing() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    this.mapSession.active = false;

    const total = this.mapSession.targets.length;
    const score = Math.round(this.mapSession.correctPoints);
    const accuracyPct = Math.round((this.mapSession.correctPoints / total) * 100);

    const attempt = {
      id: `ATT-MAP-${Date.now().toString(36)}`,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      userRole: this.currentUser.role,
      type: '🗺️ Map Pointing',
      mode: 'Continents Map Drill',
      continent: 'Whole World',
      difficulty: 'Easy',
      totalQuestions: total,
      correctCount: score,
      accuracyPct,
      durationSeconds: this.mapSession.secondsElapsed,
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString(),
      formattedTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      snapshots: []
    };

    await this.storage.saveAttempt(attempt);
    await this.refreshData();
    this.renderResultsScreen(attempt);
  }

  exitMapPointing() {
    if (this.mapSession.timerInterval) clearInterval(this.mapSession.timerInterval);
    this.mapSession.active = false;
    this.switchSubView(document.getElementById('portalStudent'), 'mapSetup', document.querySelector('[data-subview="mapSetup"]'));
  }

  /* ==========================================================================
     STANDARD Q&A QUIZ MODULE LOGIC
     ========================================================================== */
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
    const batchBadge = document.getElementById('qBatchBadge');
    if (batchBadge) batchBadge.textContent = `🏷️ ${q.batch || 'Batch 1'}`;

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
      type: '📝 Question Quiz',
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
    document.getElementById('resMode').textContent = att.type || (att.mode === 'exam' ? 'Exam' : 'Practice');
    document.getElementById('resContinent').textContent = att.continent;
    document.getElementById('resAccuracy').textContent = `${att.accuracyPct}%`;

    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;
    document.getElementById('resTime').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    const reviewContainer = document.getElementById('resultsReviewList');
    reviewContainer.innerHTML = '';

    (att.snapshots || []).forEach((snap, idx) => {
      const item = document.createElement('div');
      item.className = `review-item ${snap.isCorrect ? 'pass' : 'fail'}`;
      item.innerHTML = `
        <div class="review-header">
          <span>Question ${idx + 1} (${snap.continent || att.continent})</span>
          <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
        <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
        <div class="review-answers">
          <span>Your Answer: <strong>${this.escapeHtml(snap.selectedAnswer || 'Unanswered')}</strong></span>
          ${!snap.isCorrect ? `<span>Correct Key: <strong>${this.escapeHtml(snap.correctAnswer)}</strong></span>` : ''}
          ${snap.explanation ? `<div class="feedback-source">${this.escapeHtml(snap.explanation)}</div>` : ''}
        </div>
      `;
      reviewContainer.appendChild(item);
    });
  }

  /* ==========================================================================
     ADMIN & COMMON MODULE FUNCTIONS
     ========================================================================== */
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
        <td><span class="badge badge-primary">${att.type || 'Question Quiz'}</span></td>
        <td><span class="badge badge-secondary">${att.continent}</span></td>
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
      tbody.innerHTML = `<tr><td colspan="8" class="text-center">No quiz attempts recorded yet.</td></tr>`;
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
        <td><span class="badge badge-info">${att.type || 'Question Quiz'}</span></td>
        <td>${att.continent}</td>
        <td>${att.difficulty || 'Normal'}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${m}m ${s}s</td>
        <td><button class="btn btn-outline-sm btn-view-attempt" data-id="${att.id}">Review</button></td>
      `;
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
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-view-attempt').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openAttemptDetailModal(b.dataset.id);
      });
    });
  }

  openAttemptDetailModal(attemptId) {
    const att = this.attempts.find(a => a.id === attemptId);
    if (!att) return;

    document.getElementById('attemptDetailTitle').textContent = `Assessment Review — ${att.studentName} (${att.studentId})`;

    const summary = document.getElementById('attemptModalSummary');
    const m = Math.floor(att.durationSeconds / 60);
    const s = att.durationSeconds % 60;

    summary.innerHTML = `
      <div class="stat-box"><span class="stat-label">Date</span><span class="stat-val">${att.formattedDate}</span></div>
      <div class="stat-box"><span class="stat-label">Type</span><span class="stat-val">${att.type || 'Q&A'}</span></div>
      <div class="stat-box"><span class="stat-label">Scope</span><span class="stat-val">${att.continent}</span></div>
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
          <span>#${idx + 1}</span>
          <span class="badge ${snap.isCorrect ? 'badge-success' : 'badge-danger'}">${snap.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
        <div class="review-question">${this.escapeHtml(snap.questionText)}</div>
        <div class="review-answers">
          <span>Chosen: <strong>${this.escapeHtml(snap.selectedAnswer || 'Unanswered')}</strong></span>
          ${!snap.isCorrect ? `<span>Correct: <strong>${this.escapeHtml(snap.correctAnswer)}</strong></span>` : ''}
        </div>
      `;
      qList.appendChild(item);
    });

    document.getElementById('attemptDetailModal').classList.remove('hidden');
  }

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
        document.getElementById('csvValidCountBadge').textContent = `Total Questions Staged: ${parsed.length}`;
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
      this.showToast(`Clean Slate: Loaded ${res.count} fresh questions!`, 'success');
    } else {
      this.showToast(`Import Success: Added ${res.count} questions to bank!`, 'success');
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