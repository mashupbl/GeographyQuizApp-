/**
 * GeoQuiz Explorer 🌍 | Institutional Geography Learning Platform
 * Core Application Engine & Data Controller
 */

'use strict';

/* ==========================================================================
   1. DATA MODELS & INITIAL SEED BANK
   ========================================================================== */

const VALID_CONTINENTS = [
  'Asia', 'Africa', 'Europe', 'North America', 
  'South America', 'Australia/Oceania', 'Antarctica'
];

const VALID_DIFFICULTIES = ['Easy', 'Medium', 'Hard'];
const VALID_ANSWERS = ['A', 'B', 'C', 'D'];

const INITIAL_SEED_QUESTIONS = [
  {
    id: "GEO-AS-001",
    continent: "Asia",
    difficulty: "Easy",
    topic: "Mountain Ranges",
    question: "Which mountain range contains Mount Everest, the highest peak above sea level on Earth?",
    optionA: "The Andes",
    optionB: "The Himalayas",
    optionC: "The Urals",
    optionD: "The Alps",
    correctAnswer: "B",
    explanation: "The Himalayas span five countries (India, Nepal, Bhutan, China, Pakistan) and host Everest at 8,848.86 m.",
    source: "Survey of Nepal & China Geodetic Survey",
    status: "Published",
    createdAt: "2026-01-10T08:00:00.000Z"
  },
  {
    id: "GEO-AF-001",
    continent: "Africa",
    difficulty: "Easy",
    topic: "Hydrography",
    question: "Which river is widely recognized as the longest river in Africa and one of the longest in the world?",
    optionA: "Congo River",
    optionB: "Zambezi River",
    optionC: "Nile River",
    optionD: "Niger River",
    correctAnswer: "C",
    explanation: "The Nile flows northward through 11 countries before discharging into the Mediterranean Sea.",
    source: "UNESCO World Water Assessment",
    status: "Published",
    createdAt: "2026-01-10T08:15:00.000Z"
  },
  {
    id: "GEO-EU-001",
    continent: "Europe",
    difficulty: "Medium",
    topic: "Physical Geography",
    question: "Which strait connects the Atlantic Ocean to the Mediterranean Sea and separates Spain from Morocco?",
    optionA: "Strait of Bosphorus",
    optionB: "Strait of Gibraltar",
    optionC: "Strait of Hormuz",
    optionD: "Strait of Malacca",
    correctAnswer: "B",
    explanation: "The Strait of Gibraltar is approximately 13 km wide at its narrowest point between Europe and Africa.",
    source: "International Hydrographic Organization",
    status: "Published",
    createdAt: "2026-01-10T08:30:00.000Z"
  },
  {
    id: "GEO-NA-001",
    continent: "North America",
    difficulty: "Medium",
    topic: "Lakes & Waterways",
    question: "Which of the Great Lakes is the largest freshwater lake in the world by surface area?",
    optionA: "Lake Michigan",
    optionB: "Lake Huron",
    optionC: "Lake Superior",
    optionD: "Lake Erie",
    correctAnswer: "C",
    explanation: "Lake Superior covers approximately 82,103 km² shared by Canada and the United States.",
    source: "USGS Water Science School",
    status: "Published",
    createdAt: "2026-01-10T08:45:00.000Z"
  },
  {
    id: "GEO-SA-001",
    continent: "South America",
    difficulty: "Hard",
    topic: "Geomorphology",
    question: "Which high-altitude plateau, situated in the central Andes, is the second-most extensive plateau on Earth after Tibet?",
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
    difficulty: "Easy",
    topic: "Marine Geography",
    question: "The Great Barrier Reef, the world's largest coral reef system, is located off the coast of which Australian state?",
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
    difficulty: "Hard",
    topic: "Glaciology",
    question: "Which subglacial mountain range in Antarctica is completely buried beneath several kilometers of ice?",
    optionA: "Transantarctic Mountains",
    optionB: "Gamburtsev Mountain Range",
    optionC: "Ellsworth Mountains",
    optionD: "Queen Maud Mountains",
    correctAnswer: "B",
    explanation: "The Gamburtsev Mountains were discovered in 1958 and rival the European Alps in size, yet remain entirely buried.",
    source: "British Antarctic Survey",
    status: "Published",
    createdAt: "2026-01-10T09:30:00.000Z"
  }
];

/* ==========================================================================
   2. DUAL-ENGINE STORAGE ADAPTER (FIRESTORE + LOCAL STORAGE FALLBACK)
   ========================================================================== */

class StorageAdapter {
  constructor() {
    this.useFirestore = false;
    this.db = null;
    this.KEY_QUESTIONS = 'geoquiz_questions_store_v1';
    this.KEY_ATTEMPTS = 'geoquiz_attempts_store_v1';
    this.init();
  }

  init() {
    // Check if Firestore SDK is loaded and initialized externally
    if (window.firebase && window.firebase.firestore && window.firebase.apps && window.firebase.apps.length > 0) {
      try {
        this.db = window.firebase.firestore();
        this.useFirestore = true;
        console.log('[StorageAdapter] Firebase Cloud Firestore initialized as active backend.');
      } catch (e) {
        console.warn('[StorageAdapter] Firestore init failed; engaging robust local engine.', e);
        this.useFirestore = false;
      }
    } else {
      console.log('[StorageAdapter] Standalone Dual-Engine active (Indexed/LocalStorage persistence).');
      this.ensureLocalSeed();
    }
  }

  ensureLocalSeed() {
    if (!localStorage.getItem(this.KEY_QUESTIONS)) {
      localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(INITIAL_SEED_QUESTIONS));
    }
    if (!localStorage.getItem(this.KEY_ATTEMPTS)) {
      localStorage.setItem(this.KEY_ATTEMPTS, JSON.stringify([]));
    }
  }

  async getAllQuestions() {
    if (this.useFirestore) {
      const snap = await this.db.collection('questions').get();
      return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    const raw = localStorage.getItem(this.KEY_QUESTIONS);
    return raw ? JSON.parse(raw) : [];
  }

  async saveQuestion(question) {
    if (this.useFirestore) {
      await this.db.collection('questions').doc(question.id).set(question);
      return question;
    }
    const list = await this.getAllQuestions();
    const idx = list.findIndex(q => q.id === question.id);
    if (idx >= 0) {
      list[idx] = question;
    } else {
      list.push(question);
    }
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(list));
    return question;
  }

  async saveBatchQuestions(questions, duplicatePolicy = 'skip') {
    const existing = await this.getAllQuestions();
    const existingMap = new Map(existing.map(q => [q.id, q]));
    const existingTextSet = new Set(existing.map(q => q.question.trim().toLowerCase()));

    let importedCount = 0;
    let skippedCount = 0;
    let failedCount = 0;

    const toPersist = [...existing];

    for (const q of questions) {
      const isDup = existingMap.has(q.id) || existingTextSet.has(q.question.trim().toLowerCase());

      if (isDup) {
        if (duplicatePolicy === 'overwrite') {
          const idx = toPersist.findIndex(x => x.id === q.id || x.question.trim().toLowerCase() === q.question.trim().toLowerCase());
          if (idx >= 0) {
            toPersist[idx] = q;
            importedCount++;
          } else {
            toPersist.push(q);
            importedCount++;
          }
        } else {
          skippedCount++;
        }
      } else {
        toPersist.push(q);
        existingMap.set(q.id, q);
        existingTextSet.add(q.question.trim().toLowerCase());
        importedCount++;
      }
    }

    try {
      if (this.useFirestore) {
        // Firestore batch chunking (400 items per batch to stay strictly beneath 500 limit)
        const CHUNK_SIZE = 400;
        for (let i = 0; i < toPersist.length; i += CHUNK_SIZE) {
          const chunk = toPersist.slice(i, i + CHUNK_SIZE);
          const batch = this.db.batch();
          for (const item of chunk) {
            const ref = this.db.collection('questions').doc(item.id);
            batch.set(ref, item);
          }
          await batch.commit();
        }
      } else {
        localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(toPersist));
      }
      return { success: true, imported: importedCount, skipped: skippedCount, rejected: 0, failed: failedCount };
    } catch (err) {
      console.error('[StorageAdapter] Batch save error:', err);
      return { success: false, imported: 0, skipped: 0, rejected: 0, failed: questions.length, error: err.message };
    }
  }

  async deleteQuestion(id) {
    if (this.useFirestore) {
      await this.db.collection('questions').doc(id).delete();
      return true;
    }
    const list = await this.getAllQuestions();
    const filtered = list.filter(q => q.id !== id);
    localStorage.setItem(this.KEY_QUESTIONS, JSON.stringify(filtered));
    return true;
  }

  async getAllAttempts() {
    if (this.useFirestore) {
      const snap = await this.db.collection('attempts').orderBy('timestamp', 'desc').get();
      return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    const raw = localStorage.getItem(this.KEY_ATTEMPTS);
    return raw ? JSON.parse(raw) : [];
  }

  async saveAttempt(attempt) {
    if (this.useFirestore) {
      await this.db.collection('attempts').doc(attempt.id).set(attempt);
      return attempt;
    }
    const list = await this.getAllAttempts();
    list.unshift(attempt);
    localStorage.setItem(this.KEY_ATTEMPTS, JSON.stringify(list));
    return attempt;
  }
}

/* ==========================================================================
   3. RFC 4180 COMPLIANT CSV PARSER & EXPORTER
   ========================================================================== */

class CsvEngine {
  /**
   * Parse CSV string into 2D Array supporting RFC 4180 rules
   */
  static parse(text) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let i = 0;

    // Handle UTF-8 BOM
    if (text.charCodeAt(0) === 0xFEFF) {
      text = text.substring(1);
    }

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

  /**
   * Convert array of question objects to CSV string
   */
  static stringify(questions) {
    const headers = [
      'id', 'continent', 'difficulty', 'topic', 'question',
      'optionA', 'optionB', 'optionC', 'optionD',
      'correctAnswer', 'explanation', 'source', 'status'
    ];

    const lines = [headers.join(',')];

    for (const q of questions) {
      const row = headers.map(header => {
        let val = q[header] || '';
        val = String(val).replace(/"/g, '""');
        if (val.search(/("|,|\n|\r)/g) >= 0) {
          val = `"${val}"`;
        }
        return val;
      });
      lines.push(row.join(','));
    }

    return lines.join('\r\n');
  }
}

/* ==========================================================================
   4. APPLICATION STATE & CONTROLLER
   ========================================================================== */

class GeoQuizApp {
  constructor() {
    this.storage = new StorageAdapter();
    this.currentUser = {
      name: 'Guest Student',
      id: 'GUEST-01',
      role: 'student'
    };

    // Global Dataset In-Memory Caches
    this.questions = [];
    this.attempts = [];

    // Question Bank View State & Pagination
    this.qbState = {
      page: 1,
      pageSize: 25,
      search: '',
      continent: 'All',
      difficulty: 'All',
      status: 'All'
    };

    // Staged CSV Import Cache
    this.stagedImport = {
      valid: [],
      duplicates: [],
      invalid: [],
      totalRows: 0
    };

    // Active Quiz Session State
    this.quizSession = {
      active: false,
      mode: 'practice',
      continent: 'All',
      difficulty: 'All',
      topic: 'All',
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // index => chosenKey
      startTime: null,
      timeLimitSeconds: 0,
      timerInterval: null,
      secondsRemaining: 0
    };

    this.init();
  }

  async init() {
    this.bindEvents();
    await this.refreshData();
    this.populateTopicDropdown();
    this.updateAvailabilityBadge();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.renderStudentDashboard();
  }

  async refreshData() {
    this.questions = await this.storage.getAllQuestions();
    this.attempts = await this.storage.getAllAttempts();
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  /* --------------------------------------------------------------------------
     EVENT BINDING & ROUTING
     -------------------------------------------------------------------------- */
  bindEvents() {
    // Navigation Tabs (Student vs Admin)
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const portal = e.target.dataset.portal;
        this.switchPortal(portal);
      });
    });

    // Sub Navigation Tabs
    document.querySelectorAll('.sub-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const subview = e.target.dataset.subview;
        const parentPortal = e.target.closest('.portal-view');
        this.switchSubView(parentPortal, subview, e.target);
      });
    });

    // Authentication Dialog Trigger
    document.getElementById('btnAuthAction').addEventListener('click', () => {
      document.getElementById('authModal').classList.remove('hidden');
    });
    document.getElementById('btnCloseAuthModal').addEventListener('click', () => {
      document.getElementById('authModal').classList.add('hidden');
    });
    document.getElementById('authForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAuthSubmit();
    });

    // Quiz Setup Form
    const setupForm = document.getElementById('quizSetupForm');
    ['setupContinent', 'setupDifficulty', 'setupTopic'].forEach(id => {
      document.getElementById(id).addEventListener('change', () => this.updateAvailabilityBadge());
    });
    setupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.startAssessment();
    });

    // Arena Navigation
    document.getElementById('btnNextQuestion').addEventListener('click', () => this.handleNextQuestion());
    document.getElementById('btnPrevQuestion').addEventListener('click', () => this.handlePrevQuestion());
    document.getElementById('btnSubmitExam').addEventListener('click', () => this.confirmSubmitExam());

    // Results Actions
    document.getElementById('btnRetakeQuiz').addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'quizSetup', document.querySelector('[data-subview="quizSetup"]'));
    });
    document.getElementById('btnGoToDashboard').addEventListener('click', () => {
      this.switchSubView(document.getElementById('portalStudent'), 'studentDashboard', document.querySelector('[data-subview="studentDashboard"]'));
    });

    // Question Bank Filters & Pagination
    document.getElementById('qbSearchInput').addEventListener('input', (e) => {
      this.qbState.search = e.target.value.trim().toLowerCase();
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterContinent').addEventListener('change', (e) => {
      this.qbState.continent = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterDifficulty').addEventListener('change', (e) => {
      this.qbState.difficulty = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbFilterStatus').addEventListener('change', (e) => {
      this.qbState.status = e.target.value;
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('qbPageSize').addEventListener('change', (e) => {
      this.qbState.pageSize = parseInt(e.target.value, 10);
      this.qbState.page = 1;
      this.renderQuestionBank();
    });
    document.getElementById('pgPrevBtn').addEventListener('click', () => {
      if (this.qbState.page > 1) {
        this.qbState.page--;
        this.renderQuestionBank();
      }
    });
    document.getElementById('pgNextBtn').addEventListener('click', () => {
      this.qbState.page++;
      this.renderQuestionBank();
    });
    document.getElementById('pgJumpBtn').addEventListener('click', () => {
      const target = parseInt(document.getElementById('pgJumpInput').value, 10);
      if (!isNaN(target) && target >= 1) {
        this.qbState.page = target;
        this.renderQuestionBank();
      }
    });

    // CSV Import Controls
    document.getElementById('btnOpenCsvModal').addEventListener('click', () => {
      this.resetCsvModal();
      document.getElementById('csvImportModal').classList.remove('hidden');
    });
    document.getElementById('btnCloseCsvModal').addEventListener('click', () => {
      document.getElementById('csvImportModal').classList.add('hidden');
    });
    document.getElementById('btnCancelCsvImport').addEventListener('click', () => {
      document.getElementById('csvImportModal').classList.add('hidden');
    });
    document.getElementById('btnDownloadTemplate').addEventListener('click', () => this.downloadTemplateCsv());
    document.getElementById('csvFileInput').addEventListener('change', (e) => this.handleCsvFileSelected(e));

    // Drag and Drop
    const dropZone = document.getElementById('csvDropZone');
    ['dragenter', 'dragover'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
    });
    ['dragleave', 'drop'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
      });
    });
    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        this.processCsvFile(files[0]);
      }
    });

    // CRITICAL: Confirm CSV Import Click Event
    document.getElementById('btnConfirmImport').addEventListener('click', () => this.executeCsvImport());

    // CSV Export
    document.getElementById('btnExportCsv').addEventListener('click', () => this.exportQuestionBankCsv());

    // Add / Edit Question Modal
    document.getElementById('btnOpenAddModal').addEventListener('click', () => this.openQuestionModal());
    document.getElementById('btnCloseQModal').addEventListener('click', () => {
      document.getElementById('questionModal').classList.add('hidden');
    });
    document.getElementById('btnCancelQModal').addEventListener('click', () => {
      document.getElementById('questionModal').classList.add('hidden');
    });
    document.getElementById('questionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveSingleQuestion();
    });
  }

  switchPortal(portalName) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.portal-view').forEach(p => p.classList.add('hidden'));

    if (portalName === 'student') {
      document.getElementById('btnNavStudent').classList.add('active');
      document.getElementById('portalStudent').classList.remove('hidden');
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

    tabElement.classList.add('active');
    const targetPaneId = 'subView' + subviewName.charAt(0).toUpperCase() + subviewName.slice(1);
    const targetPane = document.getElementById(targetPaneId);
    if (targetPane) {
      targetPane.classList.remove('hidden');
    }

    if (subviewName === 'studentDashboard') {
      this.renderStudentDashboard();
    } else if (subviewName === 'adminQuestionBank') {
      this.renderQuestionBank();
    } else if (subviewName === 'adminOverview') {
      this.renderAdminOverview();
    }
  }

  handleAuthSubmit() {
    const name = document.getElementById('authStudentName').value.trim();
    const id = document.getElementById('authStudentId').value.trim();
    const role = document.getElementById('authRole').value;

    if (!name || !id) {
      this.showToast('Please enter both student name and ID.', 'error');
      return;
    }

    this.currentUser = { name, id, role };
    document.getElementById('navUserName').textContent = name;
    document.getElementById('navUserRole').textContent = `${role === 'admin' ? 'Teacher' : 'Student'} ID: ${id}`;
    document.getElementById('navAvatar').textContent = name.charAt(0).toUpperCase();
    document.getElementById('studentDashName').textContent = name;
    document.getElementById('studentDashId').textContent = id;
    document.getElementById('authModal').classList.add('hidden');

    this.showToast(`Authenticated as ${name} (${role})`, 'success');
    this.renderStudentDashboard();
  }

  /* --------------------------------------------------------------------------
     5. CSV BULK IMPORTER IMPLEMENTATION (THE CRITICAL BUG FIX)
     -------------------------------------------------------------------------- */
  resetCsvModal() {
    this.stagedImport = { valid: [], duplicates: [], invalid: [], totalRows: 0 };
    document.getElementById('csvFileInput').value = '';
    document.getElementById('csvPreviewSection').classList.add('hidden');
    document.getElementById('btnConfirmImport').disabled = true;
    document.getElementById('csvErrorBox').classList.add('hidden');
    document.getElementById('csvErrorList').innerHTML = '';
  }

  downloadTemplateCsv() {
    const templateContent = [
      'id,continent,difficulty,topic,question,optionA,optionB,optionC,optionD,correctAnswer,explanation,source,status',
      'GEO-AS-101,Asia,Medium,Rivers,"Which river flows through Baghdad, Iraq?",Tigris,Euphrates,Jordan,Nile,A,"The Tigris river flows through Baghdad.","National Geographic",Published',
      'GEO-EU-102,Europe,Easy,Capitals,"What is the official capital city of Portugal?",Porto,Lisbon,Coimbra,Braga,B,"Lisbon is the historic capital of Portugal.","EU Geography Portal",Published'
    ].join('\r\n');

    const blob = new Blob([templateContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'GeoQuiz_Import_Template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  handleCsvFileSelected(e) {
    const file = e.target.files[0];
    if (file) {
      this.processCsvFile(file);
    }
  }

  processCsvFile(file) {
    if (!file.name.endsWith('.csv') && file.type !== 'text/csv') {
      this.showToast('Please select a valid .csv file.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target.result;
        this.parseAndValidateCsv(text, file.name);
      } catch (err) {
        console.error('CSV Read Failure:', err);
        this.showToast('Failed to parse file: ' + err.message, 'error');
      }
    };
    reader.readAsText(file, 'UTF-8');
  }

  parseAndValidateCsv(rawCsvText, filename) {
    const rows = CsvEngine.parse(rawCsvText);
    if (!rows || rows.length < 2) {
      this.showToast('CSV file is empty or missing data rows.', 'error');
      return;
    }

    const rawHeaders = rows[0].map(h => h.trim().toLowerCase());
    const headerMap = {};
    rawHeaders.forEach((h, index) => {
      // Map aliases for schema resilience
      if (h === 'id' || h === 'questionid') headerMap['id'] = index;
      else if (h === 'continent') headerMap['continent'] = index;
      else if (h === 'difficulty') headerMap['difficulty'] = index;
      else if (h === 'topic' || h === 'category') headerMap['topic'] = index;
      else if (h === 'question' || h === 'questiontext') headerMap['question'] = index;
      else if (h === 'optiona' || h === 'a') headerMap['optionA'] = index;
      else if (h === 'optionb' || h === 'b') headerMap['optionB'] = index;
      else if (h === 'optionc' || h === 'c') headerMap['optionC'] = index;
      else if (h === 'optiond' || h === 'd') headerMap['optionD'] = index;
      else if (h === 'correctanswer' || h === 'correct' || h === 'answer') headerMap['correctAnswer'] = index;
      else if (h === 'explanation') headerMap['explanation'] = index;
      else if (h === 'source') headerMap['source'] = index;
      else if (h === 'status') headerMap['status'] = index;
    });

    const requiredColumns = ['continent', 'difficulty', 'question', 'optionA', 'optionB', 'optionC', 'optionD', 'correctAnswer'];
    const missingCols = requiredColumns.filter(c => headerMap[c] === undefined);

    if (missingCols.length > 0) {
      this.showToast(`CSV missing required header columns: ${missingCols.join(', ')}`, 'error');
      return;
    }

    const existingIds = new Set(this.questions.map(q => q.id.toLowerCase()));
    const existingTexts = new Set(this.questions.map(q => q.question.trim().toLowerCase()));

    const validQuestions = [];
    const duplicateQuestions = [];
    const invalidRows = [];
    const errorDetails = [];

    // Parse each row
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      // Skip empty blank lines
      if (row.length === 1 && row[0].trim() === '') continue;

      const getVal = (colKey) => (headerMap[colKey] !== undefined && row[headerMap[colKey]] !== undefined)
        ? row[headerMap[colKey]].trim()
        : '';

      const continentRaw = getVal('continent');
      const difficultyRaw = getVal('difficulty');
      const questionText = getVal('question');
      const optA = getVal('optionA');
      const optB = getVal('optionB');
      const optC = getVal('optionC');
      const optD = getVal('optionD');
      const correctRaw = getVal('correctAnswer').toUpperCase();
      let id = getVal('id');
      const topic = getVal('topic') || 'General Geography';
      const explanation = getVal('explanation') || '';
      const source = getVal('source') || 'Institutional Question Bank';
      let status = getVal('status') || 'Published';

      // Validation Rules
      const rowErrors = [];

      // Validate Continent
      const matchedContinent = VALID_CONTINENTS.find(c => c.toLowerCase() === continentRaw.toLowerCase());
      if (!matchedContinent) {
        rowErrors.push(`Unrecognized continent "${continentRaw}"`);
      }

      // Validate Difficulty
      const matchedDifficulty = VALID_DIFFICULTIES.find(d => d.toLowerCase() === difficultyRaw.toLowerCase());
      if (!matchedDifficulty) {
        rowErrors.push(`Invalid difficulty "${difficultyRaw}". Expected Easy, Medium, or Hard.`);
      }

      // Validate Question Text & Options
      if (!questionText) rowErrors.push('Missing question text.');
      if (!optA || !optB || !optC || !optD) rowErrors.push('All four answer options (A, B, C, D) are required.');

      // Validate Correct Key
      if (!VALID_ANSWERS.includes(correctRaw)) {
        rowErrors.push(`Invalid correct key "${correctRaw}". Must be A, B, C, or D.`);
      }

      // ID Generation if omitted
      if (!id) {
        id = `GEO-${(matchedContinent || 'GL').substring(0, 2).toUpperCase()}-${Date.now().toString(36)}-${r}`;
      }

      if (rowErrors.length > 0) {
        invalidRows.push({ rowNumber: r + 1, errors: rowErrors, preview: questionText || 'Blank row' });
        errorDetails.push(`Row ${r + 1}: ${rowErrors.join(', ')}`);
        continue;
      }

      const questionObj = {
        id,
        continent: matchedContinent,
        difficulty: matchedDifficulty,
        topic,
        question: questionText,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctAnswer: correctRaw,
        explanation,
        source,
        status: ['Published', 'Draft', 'Archived'].includes(status) ? status : 'Published',
        createdAt: new Date().toISOString()
      };

      // Check Duplicates
      const isDuplicate = existingIds.has(id.toLowerCase()) || existingTexts.has(questionText.toLowerCase());

      if (isDuplicate) {
        duplicateQuestions.push(questionObj);
      } else {
        validQuestions.push(questionObj);
        existingIds.add(id.toLowerCase());
        existingTexts.add(questionText.toLowerCase());
      }
    }

    // Retain in component staged state
    this.stagedImport = {
      valid: validQuestions,
      duplicates: duplicateQuestions,
      invalid: invalidRows,
      totalRows: rows.length - 1
    };

    this.renderCsvPreview();
  }

  renderCsvPreview() {
    const { valid, duplicates, invalid, totalRows } = this.stagedImport;

    document.getElementById('csvPreviewSection').classList.remove('hidden');
    document.getElementById('csvTotalCountBadge').textContent = `Total Data Rows: ${totalRows}`;
    document.getElementById('csvValidCountBadge').textContent = `Valid New: ${valid.length}`;
    document.getElementById('csvDuplicateCountBadge').textContent = `Duplicates: ${duplicates.length}`;
    document.getElementById('csvInvalidCountBadge').textContent = `Rejected Errors: ${invalid.length}`;

    // Enable button if there is something to import
    const confirmBtn = document.getElementById('btnConfirmImport');
    confirmBtn.disabled = (valid.length === 0 && duplicates.length === 0);

    // Render Error List if any
    const errorBox = document.getElementById('csvErrorBox');
    const errorList = document.getElementById('csvErrorList');
    if (invalid.length > 0) {
      errorBox.classList.remove('hidden');
      errorList.innerHTML = invalid.map(inv => `<li><strong>Row ${inv.rowNumber}:</strong> ${inv.errors.join('; ')} (<em>${this.escapeHtml(inv.preview.substring(0, 40))}...</em>)</li>`).join('');
    } else {
      errorBox.classList.add('hidden');
      errorList.innerHTML = '';
    }

    // Render Sample Rows Table (up to 30 items)
    const previewTbody = document.getElementById('csvPreviewTableBody');
    previewTbody.innerHTML = '';

    const displayList = [
      ...valid.slice(0, 15).map(q => ({ ...q, _status: 'Valid New', _badge: 'badge-success' })),
      ...duplicates.slice(0, 10).map(q => ({ ...q, _status: 'Duplicate', _badge: 'badge-warning' })),
      ...invalid.slice(0, 5).map(inv => ({ id: '—', continent: '—', difficulty: '—', question: inv.preview, correctAnswer: '—', _status: 'Rejected', _badge: 'badge-danger' }))
    ];

    displayList.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><code>${this.escapeHtml(item.id)}</code></td>
        <td>${this.escapeHtml(item.continent)}</td>
        <td>${this.escapeHtml(item.difficulty)}</td>
        <td>${this.escapeHtml(item.question)}</td>
        <td><strong>${this.escapeHtml(item.correctAnswer)}</strong></td>
        <td><span class="badge ${item._badge}">${item._status}</span></td>
      `;
      previewTbody.appendChild(tr);
    });
  }

  /**
   * Complete transactional write of staged CSV questions
   */
  async executeCsvImport() {
    const confirmBtn = document.getElementById('btnConfirmImport');
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Committing Batch...';

    const policy = document.querySelector('input[name="dupPolicy"]:checked').value;
    const { valid, duplicates } = this.stagedImport;

    let targetBatch = [...valid];
    if (policy === 'overwrite') {
      targetBatch = [...valid, ...duplicates];
    }

    if (targetBatch.length === 0) {
      this.showToast('No questions selected for import under the chosen policy.', 'warning');
      confirmBtn.disabled = false;
      confirmBtn.textContent = 'Confirm & Commit Import';
      return;
    }

    const result = await this.storage.saveBatchQuestions(targetBatch, policy);

    if (result.success) {
      await this.refreshData();
      this.populateTopicDropdown();
      this.renderQuestionBank();
      this.renderAdminOverview();
      this.updateAvailabilityBadge();

      document.getElementById('csvImportModal').classList.add('hidden');
      this.showToast(`Import Success: ${result.imported} questions saved (${result.skipped} duplicates skipped).`, 'success');
    } else {
      this.showToast(`Import Failed: ${result.error || 'Database write rejected.'}`, 'error');
    }

    confirmBtn.disabled = false;
    confirmBtn.textContent = 'Confirm & Commit Import';
  }

  exportQuestionBankCsv() {
    if (this.questions.length === 0) {
      this.showToast('Question bank is empty; nothing to export.', 'warning');
      return;
    }

    const csvContent = CsvEngine.stringify(this.questions);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `GeoQuiz_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast(`Exported ${this.questions.length} questions to CSV.`, 'success');
  }

  /* --------------------------------------------------------------------------
     6. QUESTION BANK ADMIN & SCALABLE PAGINATION
     -------------------------------------------------------------------------- */
  renderQuestionBank() {
    const tbody = document.getElementById('qbTableBody');
    tbody.innerHTML = '';

    // Filter questions
    let filtered = this.questions.filter(q => {
      const matchSearch = !this.qbState.search || 
        q.id.toLowerCase().includes(this.qbState.search) ||
        q.question.toLowerCase().includes(this.qbState.search) ||
        q.topic.toLowerCase().includes(this.qbState.search);

      const matchContinent = this.qbState.continent === 'All' || q.continent === this.qbState.continent;
      const matchDifficulty = this.qbState.difficulty === 'All' || q.difficulty === this.qbState.difficulty;
      const matchStatus = this.qbState.status === 'All' || q.status === this.qbState.status;

      return matchSearch && matchContinent && matchDifficulty && matchStatus;
    });

    const totalMatching = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalMatching / this.qbState.pageSize));

    // Clamp current page
    if (this.qbState.page > totalPages) this.qbState.page = totalPages;
    if (this.qbState.page < 1) this.qbState.page = 1;

    const startIndex = (this.qbState.page - 1) * this.qbState.pageSize;
    const endIndex = Math.min(startIndex + this.qbState.pageSize, totalMatching);
    const pagedSlice = filtered.slice(startIndex, endIndex);

    // Update Pagination UI
    document.getElementById('pgStart').textContent = totalMatching > 0 ? startIndex + 1 : 0;
    document.getElementById('pgEnd').textContent = endIndex;
    document.getElementById('pgTotal').textContent = totalMatching;
    document.getElementById('pgCurrent').textContent = `Page ${this.qbState.page} of ${totalPages}`;
    document.getElementById('pgPrevBtn').disabled = this.qbState.page <= 1;
    document.getElementById('pgNextBtn').disabled = this.qbState.page >= totalPages;
    document.getElementById('pgJumpInput').max = totalPages;

    if (pagedSlice.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center" style="padding: 2rem;">No questions matching active filters.</td></tr>`;
      return;
    }

    pagedSlice.forEach(q => {
      const tr = document.createElement('tr');
      const statusBadge = q.status === 'Published' ? 'badge-success' : (q.status === 'Draft' ? 'badge-warning' : 'badge-danger');
      tr.innerHTML = `
        <td><code>${this.escapeHtml(q.id)}</code></td>
        <td>${this.escapeHtml(q.continent)}</td>
        <td><span class="badge ${q.difficulty === 'Easy' ? 'badge-success' : (q.difficulty === 'Medium' ? 'badge-secondary' : 'badge-warning')}">${q.difficulty}</span></td>
        <td>${this.escapeHtml(q.topic)}</td>
        <td>${this.escapeHtml(q.question)}</td>
        <td><strong>${this.escapeHtml(q.correctAnswer)}</strong></td>
        <td><span class="badge ${statusBadge}">${q.status}</span></td>
        <td>
          <button class="btn btn-outline-sm btn-edit" data-id="${q.id}">Edit</button>
          <button class="btn btn-outline-sm btn-del" data-id="${q.id}" style="color: var(--danger);">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Bind Edit & Delete buttons
    tbody.querySelectorAll('.btn-edit').forEach(btn => {
      btn.addEventListener('click', () => this.openEditQuestionModal(btn.dataset.id));
    });
    tbody.querySelectorAll('.btn-del').forEach(btn => {
      btn.addEventListener('click', () => this.confirmDeleteQuestion(btn.dataset.id));
    });
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
      source: source || 'Institutional Curriculum',
      explanation: explanation || '',
      updatedAt: new Date().toISOString()
    };

    await this.storage.saveQuestion(questionObj);
    await this.refreshData();
    this.populateTopicDropdown();
    this.renderQuestionBank();
    this.renderAdminOverview();
    this.updateAvailabilityBadge();

    document.getElementById('questionModal').classList.add('hidden');
    this.showToast(`Saved question ${id}`, 'success');
  }

  async confirmDeleteQuestion(id) {
    if (confirm(`Are you certain you wish to delete question ${id}? This action is irreversible.`)) {
      await this.storage.deleteQuestion(id);
      await this.refreshData();
      this.populateTopicDropdown();
      this.renderQuestionBank();
      this.renderAdminOverview();
      this.updateAvailabilityBadge();
      this.showToast(`Deleted question ${id}`, 'info');
    }
  }

  /* --------------------------------------------------------------------------
     7. QUIZ PRACTICE & TIMED EXAMINATION RUNTIME
     -------------------------------------------------------------------------- */
  populateTopicDropdown() {
    const topicSelect = document.getElementById('setupTopic');
    const topics = Array.from(new Set(this.questions.map(q => q.topic))).filter(Boolean).sort();
    
    topicSelect.innerHTML = '<option value="All">All Topics</option>';
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      topicSelect.appendChild(opt);
    });
  }

  getEligibleQuestions(continent, difficulty, topic) {
    return this.questions.filter(q => {
      const isPublished = q.status === 'Published';
      const matchCont = continent === 'All' || q.continent === continent;
      const matchDiff = difficulty === 'All' || q.difficulty === difficulty;
      const matchTopic = topic === 'All' || q.topic === topic;
      return isPublished && matchCont && matchDiff && matchTopic;
    });
  }

  updateAvailabilityBadge() {
    const continent = document.getElementById('setupContinent').value;
    const difficulty = document.getElementById('setupDifficulty').value;
    const topic = document.getElementById('setupTopic').value;

    const available = this.getEligibleQuestions(continent, difficulty, topic);
    const badge = document.getElementById('availabilityNotice');
    badge.textContent = `${available.length} published questions available matching criteria`;
    badge.className = available.length > 0 ? 'badge badge-info' : 'badge badge-danger';

    document.getElementById('btnStartQuiz').disabled = (available.length === 0);
  }

  startAssessment() {
    const continent = document.getElementById('setupContinent').value;
    const difficulty = document.getElementById('setupDifficulty').value;
    const topic = document.getElementById('setupTopic').value;
    const requestedCount = parseInt(document.getElementById('setupCount').value, 10);
    const mode = document.querySelector('input[name="assessmentMode"]:checked').value;

    let pool = this.getEligibleQuestions(continent, difficulty, topic);

    if (pool.length === 0) {
      this.showToast('No published questions available for this selection.', 'error');
      return;
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(requestedCount, shuffled.length));

    this.quizSession = {
      active: true,
      mode,
      continent,
      difficulty,
      topic,
      questions: selected,
      currentIndex: 0,
      userAnswers: {},
      startTime: new Date(),
      timeLimitSeconds: mode === 'exam' ? selected.length * 60 : 0, // 60s per question in Exam mode
      timerInterval: null,
      secondsRemaining: mode === 'exam' ? selected.length * 60 : 0
    };

    // Transition to Arena
    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizArena').classList.remove('hidden');

    // UI Badges
    document.getElementById('arenaModeBadge').textContent = mode === 'exam' ? 'Examination Mode' : 'Practice Mode';
    document.getElementById('arenaModeBadge').className = mode === 'exam' ? 'badge badge-danger' : 'badge badge-primary';
    document.getElementById('arenaContinentBadge').textContent = continent;
    document.getElementById('arenaDifficultyBadge').textContent = difficulty;
    document.getElementById('totalQCount').textContent = selected.length;

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

    const updateTimerDisplay = () => {
      const minutes = Math.floor(this.quizSession.secondsRemaining / 60);
      const seconds = this.quizSession.secondsRemaining % 60;
      document.getElementById('arenaTimer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (this.quizSession.secondsRemaining <= 0) {
        clearInterval(this.quizSession.timerInterval);
        this.showToast('Time expired! Submitting examination.', 'warning');
        this.finalizeAssessment(true);
      }
      this.quizSession.secondsRemaining--;
    };

    updateTimerDisplay();
    this.quizSession.timerInterval = setInterval(updateTimerDisplay, 1000);
  }

  renderCurrentQuestion() {
    const { questions, currentIndex, userAnswers, mode } = this.quizSession;
    const q = questions[currentIndex];

    document.getElementById('currentQIndex').textContent = currentIndex + 1;
    const pct = ((currentIndex + 1) / questions.length) * 100;
    document.getElementById('quizProgressBar').style.width = `${pct}%`;

    document.getElementById('qTopicTag').textContent = q.topic;
    document.getElementById('qIdTag').textContent = `ID: ${q.id}`;
    document.getElementById('qText').textContent = q.question;

    const optionsContainer = document.getElementById('qOptionsList');
    optionsContainer.innerHTML = '';

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

      // In practice mode, show correct/incorrect immediately if already answered
      if (mode === 'practice' && isAnswered) {
        btn.disabled = true;
        if (opt.key === q.correctAnswer) btn.classList.add('correct');
        else if (chosenKey === opt.key) btn.classList.add('incorrect');
      }

      btn.innerHTML = `
        <span class="opt-badge">${opt.key}</span>
        <span>${this.escapeHtml(opt.text)}</span>
      `;

      btn.addEventListener('click', () => this.handleOptionSelection(opt.key));
      optionsContainer.appendChild(btn);
    });

    // Feedback pane for practice mode
    const feedbackPane = document.getElementById('qFeedbackPane');
    if (mode === 'practice' && isAnswered) {
      feedbackPane.classList.remove('hidden');
      const isCorrect = chosenKey === q.correctAnswer;
      feedbackPane.className = `feedback-pane ${isCorrect ? 'correct' : 'incorrect'}`;
      document.getElementById('feedbackTitle').textContent = isCorrect ? '✅ Correct Answer!' : `❌ Incorrect (Correct: Option ${q.correctAnswer})`;
      document.getElementById('feedbackExplanation').textContent = q.explanation || 'No detailed explanation provided for this question.';
      document.getElementById('feedbackSource').textContent = q.source ? `Source: ${q.source}` : '';
    } else {
      feedbackPane.classList.add('hidden');
    }

    // Navigation buttons state
    document.getElementById('btnPrevQuestion').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('btnNextQuestion');
    const submitBtn = document.getElementById('btnSubmitExam');

    if (currentIndex === questions.length - 1) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
      submitBtn.textContent = mode === 'exam' ? 'Submit Final Examination' : 'Complete Practice';
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }
  }

  handleOptionSelection(key) {
    const { mode, currentIndex, userAnswers } = this.quizSession;

    // In practice mode, lock once chosen
    if (mode === 'practice' && userAnswers[currentIndex] !== undefined) return;

    userAnswers[currentIndex] = key;
    this.renderCurrentQuestion();
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
    const { questions, userAnswers, mode } = this.quizSession;
    const answeredCount = Object.keys(userAnswers).length;

    if (mode === 'exam' && answeredCount < questions.length) {
      const unanswered = questions.length - answeredCount;
      if (!confirm(`You have left ${unanswered} question(s) unanswered. Are you sure you wish to submit?`)) {
        return;
      }
    }
    this.finalizeAssessment(false);
  }

  async finalizeAssessment(isTimeout = false) {
    if (this.quizSession.timerInterval) clearInterval(this.quizSession.timerInterval);

    const { questions, userAnswers, mode, continent, difficulty, topic, startTime } = this.quizSession;
    const endTime = new Date();
    const durationSeconds = Math.round((endTime - startTime) / 1000);

    let correctCount = 0;
    const snapshots = questions.map((q, idx) => {
      const selected = userAnswers[idx] || null;
      const isCorrect = (selected === q.correctAnswer);
      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        questionText: q.question,
        continent: q.continent,
        difficulty: q.difficulty,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        isCorrect
      };
    });

    const accuracyPct = Math.round((correctCount / questions.length) * 100);

    const attemptRecord = {
      id: `ATT-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      studentId: this.currentUser.id,
      studentName: this.currentUser.name,
      mode,
      continent,
      difficulty,
      topic,
      totalQuestions: questions.length,
      correctCount,
      accuracyPct,
      durationSeconds,
      timestamp: new Date().toISOString(),
      status: isTimeout ? 'Completed (Timeout)' : 'Completed',
      snapshots
    };

    await this.storage.saveAttempt(attemptRecord);
    await this.refreshData();

    this.renderResultsScreen(attemptRecord);
  }

  renderResultsScreen(attempt) {
    document.querySelectorAll('.sub-view-pane').forEach(p => p.classList.add('hidden'));
    document.getElementById('subViewQuizResults').classList.remove('hidden');

    document.getElementById('resultsScorePct').textContent = `${attempt.accuracyPct}%`;
    document.getElementById('resultsFraction').textContent = `${attempt.correctCount} / ${attempt.totalQuestions}`;
    document.getElementById('resMode').textContent = attempt.mode === 'exam' ? 'Examination' : 'Practice';
    document.getElementById('resContinent').textContent = attempt.continent;
    document.getElementById('resAccuracy').textContent = `${attempt.accuracyPct}%`;

    const mins = Math.floor(attempt.durationSeconds / 60);
    const secs = attempt.durationSeconds % 60;
    document.getElementById('resTime').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // Itemized review
    const reviewContainer = document.getElementById('resultsReviewList');
    reviewContainer.innerHTML = '';

    attempt.snapshots.forEach((snap, idx) => {
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
          ${snap.explanation ? `<div class="feedback-source" style="margin-top:0.3rem;">${this.escapeHtml(snap.explanation)}</div>` : ''}
        </div>
      `;
      reviewContainer.appendChild(item);
    });
  }

  /* --------------------------------------------------------------------------
     8. DASHBOARD ANALYTICS & STUDENT METRICS
     -------------------------------------------------------------------------- */
  renderStudentDashboard() {
    const studentAttempts = this.attempts.filter(a => a.studentId === this.currentUser.id);

    const totalAttempts = studentAttempts.length;
    let totalQuestions = 0;
    let totalCorrect = 0;
    let bestScore = 0;
    let totalSeconds = 0;

    const continentStats = {};
    const difficultyStats = { Easy: { c: 0, t: 0 }, Medium: { c: 0, t: 0 }, Hard: { c: 0, t: 0 } };

    VALID_CONTINENTS.forEach(c => { continentStats[c] = { c: 0, t: 0 }; });

    studentAttempts.forEach(att => {
      totalQuestions += att.totalQuestions;
      totalCorrect += att.correctCount;
      totalSeconds += (att.durationSeconds || 0);
      if (att.accuracyPct > bestScore) bestScore = att.accuracyPct;

      if (att.snapshots) {
        att.snapshots.forEach(s => {
          if (continentStats[s.continent]) {
            continentStats[s.continent].t++;
            if (s.isCorrect) continentStats[s.continent].c++;
          }
          if (difficultyStats[s.difficulty]) {
            difficultyStats[s.difficulty].t++;
            if (s.isCorrect) difficultyStats[s.difficulty].c++;
          }
        });
      }
    });

    const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const totalMinutes = Math.round(totalSeconds / 60);

    document.getElementById('dashTotalAttempts').textContent = totalAttempts;
    document.getElementById('dashOverallAccuracy').textContent = `${overallAccuracy}%`;
    document.getElementById('dashBestScore').textContent = `${bestScore}%`;
    document.getElementById('dashTotalTime').textContent = `${totalMinutes}m`;

    // Continent Breakdown Bars
    const contContainer = document.getElementById('dashContinentProgress');
    contContainer.innerHTML = '';
    VALID_CONTINENTS.forEach(c => {
      const data = continentStats[c];
      const pct = data.t > 0 ? Math.round((data.c / data.t) * 100) : 0;
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <div class="breakdown-header">
          <span>${c}</span>
          <span>${pct}% (${data.c}/${data.t})</span>
        </div>
        <div class="breakdown-bar-bg">
          <div class="breakdown-bar-fill" style="width: ${pct}%"></div>
        </div>
      `;
      contContainer.appendChild(row);
    });

    // Difficulty Breakdown Bars
    const diffContainer = document.getElementById('dashDifficultyProgress');
    diffContainer.innerHTML = '';
    VALID_DIFFICULTIES.forEach(d => {
      const data = difficultyStats[d];
      const pct = data.t > 0 ? Math.round((data.c / data.t) * 100) : 0;
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <div class="breakdown-header">
          <span>${d}</span>
          <span>${pct}% (${data.c}/${data.t})</span>
        </div>
        <div class="breakdown-bar-bg">
          <div class="breakdown-bar-fill" style="width: ${pct}%"></div>
        </div>
      `;
      diffContainer.appendChild(row);
    });

    // Attempt History Table
    const tbody = document.getElementById('studentHistoryTableBody');
    tbody.innerHTML = '';

    if (studentAttempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="text-center">No quiz attempts recorded yet.</td></tr>`;
      return;
    }

    studentAttempts.forEach(att => {
      const tr = document.createElement('tr');
      const dateFormatted = new Date(att.timestamp).toLocaleString();
      const mins = Math.floor(att.durationSeconds / 60);
      const secs = att.durationSeconds % 60;
      tr.innerHTML = `
        <td>${dateFormatted}</td>
        <td><span class="badge ${att.mode === 'exam' ? 'badge-danger' : 'badge-primary'}">${att.mode}</span></td>
        <td>${this.escapeHtml(att.continent)}</td>
        <td>${this.escapeHtml(att.difficulty)}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${mins}m ${secs}s</td>
      `;
      tbody.appendChild(tr);
    });
  }

  renderAdminOverview() {
    const totalQ = this.questions.length;
    const publishedQ = this.questions.filter(q => q.status === 'Published').length;
    const distinctStudents = new Set(this.attempts.map(a => a.studentId)).size || 1;
    const totalAtt = this.attempts.length;

    document.getElementById('adminTotalQuestions').textContent = totalQ;
    document.getElementById('adminPublishedQuestions').textContent = publishedQ;
    document.getElementById('adminTotalStudents').textContent = distinctStudents;
    document.getElementById('adminTotalAttempts').textContent = totalAtt;

    // Render Admin Audit Table
    const tbody = document.getElementById('adminAttemptsTableBody');
    tbody.innerHTML = '';

    if (this.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center">No student attempt records located.</td></tr>`;
      return;
    }

    this.attempts.forEach(att => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><code>${this.escapeHtml(att.studentId)}</code></td>
        <td>${this.escapeHtml(att.studentName)}</td>
        <td><span class="badge ${att.mode === 'exam' ? 'badge-danger' : 'badge-primary'}">${att.mode}</span></td>
        <td>${this.escapeHtml(att.continent)}</td>
        <td>${att.correctCount} / ${att.totalQuestions}</td>
        <td><strong>${att.accuracyPct}%</strong></td>
        <td>${new Date(att.timestamp).toLocaleDateString()}</td>
        <td><span class="badge badge-success">${att.status}</span></td>
      `;
      tbody.appendChild(tr);
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

// Instantiate App on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.geoQuizApp = new GeoQuizApp();
});