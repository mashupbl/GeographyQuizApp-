/* Storage layer: saves students and attempts in this browser (IndexedDB).
   saveAttempt resolves ONLY after the browser confirms the write. */
const Store = (function () {
  let dbPromise = null;
  function db() {
    if (!dbPromise) {
      dbPromise = new Promise((resolve, reject) => {
        if (!window.indexedDB) return reject(new Error('This browser does not support IndexedDB.'));
        const req = indexedDB.open('geoquiz-explorer', 1);
        req.onupgradeneeded = () => {
          const d = req.result;
          d.createObjectStore('attempts', { keyPath: 'id' }).createIndex('studentKey', 'studentKey');
          d.createObjectStore('students', { keyPath: 'studentKey' });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error('Could not open storage.'));
      });
      dbPromise.catch(() => { dbPromise = null; });
    }
    return dbPromise;
  }
  function newId() { return 'att-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); }
  function saveAttempt(a) {
    return db().then(d => new Promise((resolve, reject) => {
      const tx = d.transaction(['attempts', 'students'], 'readwrite');
      tx.objectStore('attempts').add(a); // add (not put): never overwrites an older attempt
      tx.objectStore('students').put({ studentKey: a.studentKey, studentId: a.studentId, name: a.studentName, lastSeen: a.completedAt });
      tx.oncomplete = () => resolve(a.id);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error('Write failed.'));
    }));
  }
  function getAttempts(studentId) {
    return db().then(d => new Promise((resolve, reject) => {
      const r = d.transaction('attempts').objectStore('attempts').index('studentKey').getAll(String(studentId).toLowerCase());
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    }));
  }
  return { saveAttempt, getAttempts, newId };
})();
