/**
 * GeoQuiz Explorer - Unified Storage Layer (Cloud Firestore + Local IndexedDB)
 * 
 * Architecture:
 * - Cloud Mode: If Firebase is configured, all questions, attempts, and students
 *   are stored in Cloud Firestore (enabling real-time multi-device sync across laptops/phones).
 * - Local Mode: If Firebase is not configured or offline, automatically falls back
 *   to browser IndexedDB (free, private, offline-capable).
 * - In-Memory Cache: Fast instantaneous reads for smooth quiz gameplay without network lag.
 */

const Store = (function () {
  'use strict';

  const DB_NAME = 'geoquiz-explorer-v2';
  const DB_VERSION = 1;
  const DEFAULT_ADMIN_PASSCODE = 'admin2026';

  let dbInstance = null; // IndexedDB
  let firestoreDb = null; // Firebase Firestore
  let storageMode = 'local'; // 'cloud' | 'local'
  let questionsCache = [];
  let isReadyPromise = null;

  function generateId(prefix = 'id') {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function isCloudMode() {
    return storageMode === 'cloud' && !!firestoreDb;
  }

  /**
   * Open IndexedDB database (Local storage engine)
   */
  function openIndexedDB() {
    if (dbInstance) return Promise.resolve(dbInstance);

    return new Promise((resolve) => {
      if (!window.indexedDB) {
        console.warn('IndexedDB not supported; using memory storage.');
        return resolve(null);
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains('questions')) {
          const qStore = db.createObjectStore('questions', { keyPath: 'id' });
          qStore.createIndex('continent', 'continent', { unique: false });
          qStore.createIndex('difficulty', 'difficulty', { unique: false });
          qStore.createIndex('topic', 'topic', { unique: false });
        }

        if (!db.objectStoreNames.contains('attempts')) {
          const aStore = db.createObjectStore('attempts', { keyPath: 'id' });
          aStore.createIndex('studentKey', 'studentKey', { unique: false });
          aStore.createIndex('completedAt', 'completedAt', { unique: false });
          aStore.createIndex('continent', 'continent', { unique: false });
          aStore.createIndex('difficulty', 'difficulty', { unique: false });
          aStore.createIndex('mode', 'mode', { unique: false });
        }

        if (!db.objectStoreNames.contains('students')) {
          db.createObjectStore('students', { keyPath: 'studentKey' });
        }

        if (!db.objectStoreNames.contains('config')) {
          db.createObjectStore('config', { keyPath: 'key' });
        }
      };

      request.onsuccess = (event) => {
        dbInstance = event.target.result;
        resolve(dbInstance);
      };

      request.onerror = (event) => {
        console.error('IndexedDB open error:', event.target.error);
        resolve(null);
      };
    });
  }

  /**
   * Initialize Store: Check Firebase first, then IndexedDB
   */
  function init() {
    if (!isReadyPromise) {
      isReadyPromise = (async () => {
        // 1. Initialize local IndexedDB engine
        await openIndexedDB();

        // 2. Check if Firebase Firestore is available
        if (typeof FirebaseManager !== 'undefined') {
          firestoreDb = FirebaseManager.init();
        }

        if (firestoreDb) {
          try {
            console.log('Testing Cloud Firestore connection...');
            if (typeof FirebaseManager !== 'undefined') {
              try {
                await FirebaseManager.ensureStudentAuth();
              } catch (authErr) {
                console.warn('ensureStudentAuth note:', authErr);
              }
            }
            storageMode = 'cloud';
            await initCloudStorage();
            console.log('Storage Mode: 🔥 Cloud Firestore Active');
            return;
          } catch (err) {
            console.warn('Cloud Firestore initialization failed, falling back to Local IndexedDB:', err);
            storageMode = 'local';
            firestoreDb = null;
          }
        }

        // 3. Fall back to Local IndexedDB
        storageMode = 'local';
        await initLocalStorage();
        console.log('Storage Mode: 💾 Local IndexedDB Active');
      })();
    }
    return isReadyPromise;
  }

  /**
   * Initialize Cloud Firestore Storage
   */
  async function initCloudStorage() {
    // Check config
    try {
      const cfgDoc = await firestoreDb.collection('config').doc('admin').get();
      if (!cfgDoc.exists) {
        const isAdmin = (typeof FirebaseManager !== 'undefined') ? await FirebaseManager.isCurrentAdminVerified() : false;
        if (isAdmin) {
          await firestoreDb.collection('config').doc('admin').set({ adminPasscode: DEFAULT_ADMIN_PASSCODE });
        }
      }
    } catch (e) {
      console.warn('Could not read admin config from Firestore:', e);
    }

    // Load questions from Firestore
    let snapshot;
    try {
      snapshot = await firestoreDb.collection('questions').get();
    } catch (e) {
      console.warn('Could not read questions from Firestore:', e);
      questionsCache = (window.SAMPLE_QUESTIONS || []).map(q => ({ ...q }));
      return;
    }

    if (snapshot.empty && window.SAMPLE_QUESTIONS && window.SAMPLE_QUESTIONS.length > 0) {
      const isAdmin = (typeof FirebaseManager !== 'undefined') ? await FirebaseManager.isCurrentAdminVerified() : false;
      if (isAdmin) {
        console.log(`Cloud Firestore questions collection is empty. Seeding with ${window.SAMPLE_QUESTIONS.length} sample questions...`);
        try {
          await saveQuestionsBulkCloud(window.SAMPLE_QUESTIONS);
        } catch (seedErr) {
          console.warn('Seed warning:', seedErr);
        }
      }
      questionsCache = (window.SAMPLE_QUESTIONS || []).map(q => ({ ...q }));
    } else {
      const cloudQuestions = [];
      snapshot.forEach(doc => cloudQuestions.push(doc.data()));
      questionsCache = cloudQuestions;
    }
  }

  /**
   * Initialize Local IndexedDB Storage
   */
  async function initLocalStorage() {
    const passcode = await getConfigLocal('adminPasscode');
    if (!passcode) {
      await setConfigLocal('adminPasscode', DEFAULT_ADMIN_PASSCODE);
    }

    const storedQuestions = await getAllFromStore('questions');
    if (storedQuestions.length === 0 && window.SAMPLE_QUESTIONS && window.SAMPLE_QUESTIONS.length > 0) {
      await saveQuestionsBulkLocal(window.SAMPLE_QUESTIONS);
      questionsCache = (window.SAMPLE_QUESTIONS || []).map(q => ({ ...q }));
    } else {
      questionsCache = storedQuestions;
    }
  }

  /**
   * Helpers for IndexedDB
   */
  function getAllFromStore(storeName) {
    return new Promise((resolve) => {
      if (!dbInstance) return resolve([]);
      try {
        const tx = dbInstance.transaction(storeName, 'readonly');
        const req = tx.objectStore(storeName).getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  }

  function getConfigLocal(key) {
    return new Promise((resolve) => {
      if (!dbInstance) {
        try { resolve(localStorage.getItem(`geoquiz_cfg_${key}`)); } catch (e) { resolve(null); }
        return;
      }
      try {
        const tx = dbInstance.transaction('config', 'readonly');
        const req = tx.objectStore('config').get(key);
        req.onsuccess = () => resolve(req.result ? req.result.value : null);
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  function setConfigLocal(key, value) {
    return new Promise((resolve) => {
      if (!dbInstance) {
        try { localStorage.setItem(`geoquiz_cfg_${key}`, value); } catch (e) {}
        return resolve();
      }
      try {
        const tx = dbInstance.transaction('config', 'readwrite');
        tx.objectStore('config').put({ key, value });
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch (e) {
        resolve();
      }
    });
  }

  function saveQuestionsBulkLocal(questions) {
    return new Promise((resolve, reject) => {
      if (!dbInstance) {
        questionsCache = [...questions];
        return resolve(questions.length);
      }
      try {
        const tx = dbInstance.transaction('questions', 'readwrite');
        const store = tx.objectStore('questions');
        questions.forEach(q => store.put(q));
        tx.oncomplete = () => resolve(questions.length);
        tx.onerror = () => reject(tx.error);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Save questions in Cloud Firestore in chunks of up to 450 (Firestore batch limit is 500)
   */
  async function saveQuestionsBulkCloud(questions) {
    const CHUNK_SIZE = 400;
    for (let i = 0; i < questions.length; i += CHUNK_SIZE) {
      const chunk = questions.slice(i, i + CHUNK_SIZE);
      const batch = firestoreDb.batch();
      chunk.forEach(q => {
        const docRef = firestoreDb.collection('questions').doc(q.id);
        batch.set(docRef, q);
      });
      await batch.commit();
    }
  }

  /**
   * Get Active Question Bank for quiz engine (synchronous via memory cache)
   */
  function getActiveQuestionBank(continent, difficulty) {
    return questionsCache.filter(q => {
      const matchCont = !continent || q.continent.toLowerCase() === continent.toLowerCase();
      const matchDiff = !difficulty || q.difficulty.toLowerCase() === difficulty.toLowerCase();
      const isPublished = q.status !== 'draft';
      return matchCont && matchDiff && isPublished;
    });
  }

  /**
   * Query questions with flexible filtering, search, and sorting
   */
  function queryQuestions(filters = {}) {
    let list = [...questionsCache];

    if (filters.continent && filters.continent !== 'all') {
      const target = filters.continent.toLowerCase();
      list = list.filter(q => q.continent && q.continent.toLowerCase() === target);
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      const target = filters.difficulty.toLowerCase();
      list = list.filter(q => q.difficulty && q.difficulty.toLowerCase() === target);
    }

    if (filters.topic && filters.topic !== 'all') {
      const target = filters.topic.toLowerCase();
      list = list.filter(q => q.topic && q.topic.toLowerCase() === target);
    }

    if (filters.search && filters.search.trim()) {
      const query = filters.search.trim().toLowerCase();
      list = list.filter(q => 
        (q.id && q.id.toLowerCase().includes(query)) ||
        (q.question && q.question.toLowerCase().includes(query)) ||
        (q.topic && q.topic.toLowerCase().includes(query))
      );
    }

    const sortField = filters.sortField || 'id';
    const sortAsc = filters.sortAsc !== false;

    list.sort((a, b) => {
      let valA = (a[sortField] || '').toString().toLowerCase();
      let valB = (b[sortField] || '').toString().toLowerCase();
      if (valA < valB) return sortAsc ? -1 : 1;
      if (valA > valB) return sortAsc ? 1 : -1;
      return 0;
    });

    return list;
  }

  function getAllTopics() {
    const set = new Set();
    questionsCache.forEach(q => {
      if (q.topic && q.topic.trim()) {
        set.add(q.topic.trim());
      }
    });
    return Array.from(set).sort();
  }

  /**
   * Save or update a single question
   */
  async function saveQuestion(question) {
    if (!question.id) {
      question.id = generateId('q');
    }
    if (!question.status) {
      question.status = 'published';
    }

    if (isCloudMode()) {
      await firestoreDb.collection('questions').doc(question.id).set(question);
    }

    // Always mirror to IndexedDB
    if (dbInstance) {
      try {
        const tx = dbInstance.transaction('questions', 'readwrite');
        tx.objectStore('questions').put(question);
      } catch (e) {}
    }

    // Update in-memory cache
    const idx = questionsCache.findIndex(q => q.id === question.id);
    if (idx >= 0) {
      questionsCache[idx] = { ...question };
    } else {
      questionsCache.push({ ...question });
    }

    return question;
  }

  /**
   * Delete a question
   */
  async function deleteQuestion(id) {
    if (isCloudMode()) {
      await firestoreDb.collection('questions').doc(id).delete();
    }

    if (dbInstance) {
      try {
        const tx = dbInstance.transaction('questions', 'readwrite');
        tx.objectStore('questions').delete(id);
      } catch (e) {}
    }

    questionsCache = questionsCache.filter(q => q.id !== id);
    return true;
  }

  /**
   * Reset question bank to sample defaults
   */
  async function resetQuestionsToDefault() {
    const samples = (window.SAMPLE_QUESTIONS || []).map(q => ({ ...q }));

    if (isCloudMode()) {
      // Clear Firestore questions
      const snap = await firestoreDb.collection('questions').get();
      const batch = firestoreDb.batch();
      snap.forEach(doc => batch.delete(doc.ref));
      await batch.commit();

      // Seed samples
      await saveQuestionsBulkCloud(samples);
    }

    if (dbInstance) {
      try {
        const tx = dbInstance.transaction('questions', 'readwrite');
        const store = tx.objectStore('questions');
        store.clear();
        samples.forEach(q => store.put(q));
      } catch (e) {}
    }

    questionsCache = samples;
    return questionsCache.length;
  }

  /**
   * Batch import questions with duplicate checking
   */
  async function importQuestionsBatch(incomingQuestions, duplicateAction = 'skip') {
    let addedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    const existingById = new Map();
    const existingByText = new Map();

    questionsCache.forEach(q => {
      if (q.id) existingById.set(q.id.toLowerCase(), q);
      if (q.question) existingByText.set(q.question.trim().toLowerCase(), q);
    });

    const toSave = [];

    for (const item of incomingQuestions) {
      const normId = item.id ? item.id.toLowerCase() : null;
      const normText = item.question ? item.question.trim().toLowerCase() : '';

      const matchById = normId ? existingById.get(normId) : null;
      const matchByText = normText ? existingByText.get(normText) : null;
      const isDuplicate = !!(matchById || matchByText);

      if (isDuplicate) {
        if (duplicateAction === 'overwrite') {
          const existing = matchById || matchByText;
          const merged = { ...existing, ...item };
          toSave.push(merged);
          updatedCount++;
        } else {
          skippedCount++;
        }
      } else {
        if (!item.id) {
          item.id = generateId('q');
        }
        toSave.push(item);
        existingById.set(item.id.toLowerCase(), item);
        existingByText.set(normText, item);
        addedCount++;
      }
    }

    if (toSave.length > 0) {
      if (isCloudMode()) {
        await saveQuestionsBulkCloud(toSave);
      }
      await saveQuestionsBulkLocal(toSave);

      // Refresh memory cache
      if (isCloudMode()) {
        const snap = await firestoreDb.collection('questions').get();
        const cloudQ = [];
        snap.forEach(doc => cloudQ.push(doc.data()));
        questionsCache = cloudQ;
      } else {
        questionsCache = await getAllFromStore('questions');
      }
    }

    return {
      added: addedCount,
      updated: updatedCount,
      skipped: skippedCount,
      totalBank: questionsCache.length
    };
  }

  /**
   * Save completed attempt with question snapshots
   */
  async function saveAttempt(attemptRecord) {
    if (!attemptRecord.id) {
      attemptRecord.id = generateId('att');
    }
    const studentKey = (attemptRecord.studentId || '').trim().toLowerCase();
    attemptRecord.studentKey = studentKey;

    const authUser = (typeof FirebaseManager !== 'undefined' && FirebaseManager.getAuth())
      ? FirebaseManager.getAuth().currentUser
      : null;

    if (authUser) {
      attemptRecord.studentUid = authUser.uid;
    } else {
      attemptRecord.studentUid = 'local_' + studentKey;
    }

    if (isCloudMode() && authUser) {
      try {
        // Save to Firestore (studentUid matches request.auth.uid)
        await firestoreDb.collection('attempts').doc(attemptRecord.id).set(attemptRecord);

        // Update student document in Firestore (/students/{studentUid})
        const stuDocRef = firestoreDb.collection('students').doc(authUser.uid);
        const stuDoc = await stuDocRef.get();
        if (stuDoc.exists) {
          await stuDocRef.update({
            name: attemptRecord.studentName,
            studentId: attemptRecord.studentId,
            lastActiveAt: attemptRecord.completedAt || new Date().toISOString(),
            attemptsCount: (stuDoc.data().attemptsCount || 0) + 1
          });
        } else {
          await stuDocRef.set({
            studentUid: authUser.uid,
            studentKey: studentKey,
            studentId: attemptRecord.studentId,
            name: attemptRecord.studentName,
            registeredAt: attemptRecord.completedAt || new Date().toISOString(),
            lastActiveAt: attemptRecord.completedAt || new Date().toISOString(),
            attemptsCount: 1
          });
        }
      } catch (err) {
        console.error('Firestore saveAttempt error:', err);
      }
    }

    // Always mirror to IndexedDB
    if (dbInstance) {
      try {
        const tx = dbInstance.transaction(['attempts', 'students'], 'readwrite');
        const attStore = tx.objectStore('attempts');
        const stuStore = tx.objectStore('students');

        attStore.add(attemptRecord);

        const stuReq = stuStore.get(studentKey);
        stuReq.onsuccess = () => {
          const stu = stuReq.result || {
            studentKey: studentKey,
            studentId: attemptRecord.studentId,
            name: attemptRecord.studentName,
            registeredAt: attemptRecord.completedAt || new Date().toISOString(),
            attemptsCount: 0
          };
          stu.name = attemptRecord.studentName;
          stu.lastActiveAt = attemptRecord.completedAt || new Date().toISOString();
          stu.attemptsCount = (stu.attemptsCount || 0) + 1;
          stuStore.put(stu);
        };
      } catch (e) {}
    }

    return attemptRecord.id;
  }

  /**
   * Save or register a student
   */
  async function saveStudent(studentProfile) {
    const studentKey = (studentProfile.studentId || '').trim().toLowerCase();
    if (!studentKey) return null;

    const authUser = (typeof FirebaseManager !== 'undefined' && FirebaseManager.getAuth())
      ? FirebaseManager.getAuth().currentUser
      : null;

    const record = {
      studentUid: authUser ? authUser.uid : 'local_' + studentKey,
      studentKey,
      studentId: studentProfile.studentId.trim(),
      name: studentProfile.name.trim(),
      registeredAt: studentProfile.registeredAt || new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      attemptsCount: studentProfile.attemptsCount || 0
    };

    if (isCloudMode() && authUser) {
      try {
        await firestoreDb.collection('students').doc(authUser.uid).set(record, { merge: true });
      } catch (e) {
        console.warn('Firestore saveStudent error:', e);
      }
    }

    if (dbInstance) {
      try {
        const tx = dbInstance.transaction('students', 'readwrite');
        tx.objectStore('students').put(record);
      } catch (e) {}
    }

    return record;
  }

  /**
   * Get all registered students
   */
  async function getAllStudents() {
    if (isCloudMode()) {
      try {
        const snap = await firestoreDb.collection('students').get();
        const list = [];
        snap.forEach(doc => list.push(doc.data()));
        return list.sort((a, b) => (b.lastActiveAt || '').localeCompare(a.lastActiveAt || ''));
      } catch (e) {
        console.warn('Firestore getAllStudents note (admin permissions required):', e.message);
      }
    }

    const students = await getAllFromStore('students');
    return students.sort((a, b) => (b.lastActiveAt || '').localeCompare(a.lastActiveAt || ''));
  }

  /**
   * Get student attempts (Student Privacy enforcement)
   */
  async function getStudentAttempts(studentId) {
    const studentKey = String(studentId || '').trim().toLowerCase();
    if (!studentKey) return [];

    const authUser = (typeof FirebaseManager !== 'undefined' && FirebaseManager.getAuth())
      ? FirebaseManager.getAuth().currentUser
      : null;

    if (isCloudMode() && authUser) {
      try {
        const isAdmin = (typeof FirebaseManager !== 'undefined') ? await FirebaseManager.isCurrentAdminVerified() : false;
        let snap;
        if (isAdmin) {
          // Admin can query any student's history by studentKey
          snap = await firestoreDb.collection('attempts')
            .where('studentKey', '==', studentKey)
            .get();
        } else {
          // Regular student query MUST be restricted to own studentUid to satisfy security rules
          snap = await firestoreDb.collection('attempts')
            .where('studentUid', '==', authUser.uid)
            .get();
        }
        const list = [];
        snap.forEach(doc => list.push(doc.data()));
        return list.sort((a, b) => (a.completedAt || '').localeCompare(b.completedAt || ''));
      } catch (e) {
        console.warn('Firestore getStudentAttempts error:', e);
      }
    }

    if (!dbInstance) return [];

    return new Promise((resolve) => {
      try {
        const tx = dbInstance.transaction('attempts', 'readonly');
        const index = tx.objectStore('attempts').index('studentKey');
        const req = index.getAll(studentKey);
        req.onsuccess = () => {
          const list = (req.result || []).sort((a, b) => 
            (a.completedAt || '').localeCompare(b.completedAt || '')
          );
          resolve(list);
        };
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  }

  /**
   * Get all attempts with filtering (For Admin Dashboard)
   */
  async function getAllAttempts(filters = {}) {
    let all = [];

    if (isCloudMode()) {
      try {
        const snap = await firestoreDb.collection('attempts').get();
        snap.forEach(doc => all.push(doc.data()));
      } catch (e) {
        console.warn('Firestore getAllAttempts note (admin permissions required):', e.message);
        all = await getAllFromStore('attempts');
      }
    } else {
      all = await getAllFromStore('attempts');
    }

    let list = all.sort((a, b) => (b.completedAt || '').localeCompare(a.completedAt || ''));

    if (filters.studentSearch && filters.studentSearch.trim()) {
      const q = filters.studentSearch.trim().toLowerCase();
      list = list.filter(a => 
        (a.studentId && a.studentId.toLowerCase().includes(q)) ||
        (a.studentName && a.studentName.toLowerCase().includes(q))
      );
    }

    if (filters.continent && filters.continent !== 'all') {
      const c = filters.continent.toLowerCase();
      list = list.filter(a => a.continent && a.continent.toLowerCase() === c);
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      const d = filters.difficulty.toLowerCase();
      list = list.filter(a => a.difficulty && a.difficulty.toLowerCase() === d);
    }

    if (filters.mode && filters.mode !== 'all') {
      const m = filters.mode.toLowerCase();
      list = list.filter(a => a.mode && a.mode.toLowerCase() === m);
    }

    if (filters.dateRange && filters.dateRange !== 'all') {
      const now = new Date();
      let cutoff = new Date(0);

      if (filters.dateRange === 'today') {
        cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      } else if (filters.dateRange === '7days') {
        cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      } else if (filters.dateRange === '30days') {
        cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      }

      list = list.filter(a => {
        if (!a.completedAt) return false;
        return new Date(a.completedAt) >= cutoff;
      });
    }

    return list;
  }

  /**
   * Admin Authentication
   */
  async function verifyAdminPasscode(inputPasscode) {
    if (isCloudMode()) {
      try {
        const doc = await firestoreDb.collection('config').doc('admin').get();
        if (doc.exists && doc.data().adminPasscode) {
          return inputPasscode === doc.data().adminPasscode;
        }
      } catch (e) {}
    }
    const current = await getConfigLocal('adminPasscode') || DEFAULT_ADMIN_PASSCODE;
    return inputPasscode === current;
  }

  async function setAdminPasscode(newPasscode) {
    if (!newPasscode || newPasscode.trim().length < 4) {
      throw new Error('Passcode must be at least 4 characters long.');
    }
    const clean = newPasscode.trim();
    if (isCloudMode()) {
      try {
        await firestoreDb.collection('config').doc('admin').set({ adminPasscode: clean }, { merge: true });
      } catch (e) {}
    }
    await setConfigLocal('adminPasscode', clean);
    return true;
  }

  /**
   * One-Click Sync Local Data to Cloud
   */
  async function syncLocalToCloud() {
    if (!isCloudMode()) {
      throw new Error('Firebase Firestore is not connected.');
    }

    const localQuestions = await getAllFromStore('questions');
    const localStudents = await getAllFromStore('students');
    const localAttempts = await getAllFromStore('attempts');

    if (localQuestions.length > 0) {
      await saveQuestionsBulkCloud(localQuestions);
    }

    for (const stu of localStudents) {
      await firestoreDb.collection('students').doc(stu.studentKey).set(stu, { merge: true });
    }

    for (const att of localAttempts) {
      await firestoreDb.collection('attempts').doc(att.id).set(att, { merge: true });
    }

    return {
      questions: localQuestions.length,
      students: localStudents.length,
      attempts: localAttempts.length
    };
  }

  return {
    init,
    generateId,
    getActiveQuestionBank,
    queryQuestions,
    getAllTopics,
    saveQuestion,
    deleteQuestion,
    resetQuestionsToDefault,
    importQuestionsBatch,
    saveAttempt,
    saveStudent,
    getAllStudents,
    getStudentAttempts,
    getAllAttempts,
    verifyAdminPasscode,
    setAdminPasscode,
    syncLocalToCloud,
    getCache: () => questionsCache,
    getStorageMode: () => storageMode,
    isCloudActive: () => isCloudMode()
  };
})();

if (typeof window !== 'undefined') {
  window.Store = Store;
}
