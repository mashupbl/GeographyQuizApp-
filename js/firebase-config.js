/**
 * GeoQuiz Explorer - Firebase Cloud Configuration & Authentication Manager
 * 
 * Manages:
 * - Cloud Firestore Database initialization
 * - Firebase Authentication for Students (Cryptographic Anonymous UID / Email)
 * - Verified Administrator Authentication & Role Checking (Custom Claims / Admin Document)
 * - Dynamic fallback to Local IndexedDB when Firebase is disconnected or offline
 */

const firebaseConfig = {
  apiKey: "AIzaSyBh2Ersn-bA7yfwa1z_KGsOF4aBsuUaW3s",
  authDomain: "geoquizexplorer-bc2ee.firebaseapp.com",
  projectId: "geoquizexplorer-bc2ee",
  storageBucket: "geoquizexplorer-bc2ee.firebasestorage.app",
  messagingSenderId: "1008212749060",
  appId: "1:1008212749060:web:17ac4f0986eddeeb07fe51",
  measurementId: "G-VQQEDL9PCD"
};

const DEFAULT_FIREBASE_CONFIG = firebaseConfig;

if (typeof window !== 'undefined') {
  window.firebaseConfig = firebaseConfig;
}

const FirebaseManager = (function () {
  'use strict';

  let firestoreDb = null;
  let firebaseAuth = null;
  let isInitialized = false;
  let activeConfig = null;

  /**
   * Load active configuration from localStorage or default
   */
  function getConfig() {
    try {
      const stored = localStorage.getItem('geoquiz_firebase_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.projectId) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read stored Firebase config:', e);
    }

    if (DEFAULT_FIREBASE_CONFIG.projectId && DEFAULT_FIREBASE_CONFIG.apiKey) {
      return DEFAULT_FIREBASE_CONFIG;
    }

    return null;
  }

  /**
   * Initialize Firebase SDK if config is available
   */
  function init() {
    if (isInitialized) return firestoreDb;

    const config = getConfig();
    activeConfig = config;

    if (!config || !config.projectId || !config.apiKey) {
      console.log('Firebase not configured. Running in Local IndexedDB mode.');
      return null;
    }

    if (typeof firebase === 'undefined') {
      console.warn('Firebase SDK not loaded. Check network connection or script tags.');
      return null;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }

      firestoreDb = firebase.firestore();

      if (typeof firebase.auth === 'function') {
        firebaseAuth = firebase.auth();
      }

      if (typeof firebase.analytics === 'function') {
        try { firebase.analytics(); } catch (e) {}
      }

      isInitialized = true;
      console.log(`🔥 Connected to Cloud Firestore project: ${config.projectId}`);
      return firestoreDb;
    } catch (err) {
      console.error('Failed to initialize Firebase:', err);
      firestoreDb = null;
      firebaseAuth = null;
      return null;
    }
  }

  /**
   * Ensure student has an authenticated Firebase Auth session.
   * Uses Anonymous Sign-In so students don't need credentials but have
   * a tamper-proof cryptographic request.auth.uid enforcing security rules.
   */
  async function ensureStudentAuth() {
    if (!firebaseAuth) return null;
    if (firebaseAuth.currentUser) {
      return firebaseAuth.currentUser;
    }
    try {
      const cred = await firebaseAuth.signInAnonymously();
      return cred.user;
    } catch (err) {
      console.warn('Firebase anonymous student auth note:', err.message);
      return null;
    }
  }

  /**
   * Sign In Administrator using Firebase Auth (Email & Password)
   */
  async function signInAdminWithCredentials(email, password) {
    if (!firebaseAuth) {
      throw new Error('Firebase Auth is not available. Please verify your connection.');
    }
    const cred = await firebaseAuth.signInWithEmailAndPassword(email.trim(), password);
    return cred.user;
  }

  /**
   * Sign Out Administrator
   */
  async function signOutUser() {
    if (firebaseAuth) {
      await firebaseAuth.signOut();
    }
  }

  /**
   * Check if current authenticated user has verified administrator privileges.
   * Checks both:
   * 1. Firebase Custom Claims: `request.auth.token.admin == true`
   * 2. Protected Firestore collection document `/admins/{uid}`
   */
  async function isCurrentAdminVerified() {
    if (!firebaseAuth || !firebaseAuth.currentUser) {
      return false;
    }

    const user = firebaseAuth.currentUser;

    // Check custom claims
    try {
      const tokenRes = await user.getIdTokenResult(true);
      if (tokenRes.claims && tokenRes.claims.admin === true) {
        return true;
      }
    } catch (e) {}

    // Check /admins/{uid} collection
    if (firestoreDb) {
      try {
        const doc = await firestoreDb.collection('admins').doc(user.uid).get();
        if (doc.exists) {
          return true;
        }
      } catch (e) {}
    }

    return false;
  }

  /**
   * Save configuration from the Admin UI
   */
  function saveConfig(newConfig) {
    if (!newConfig || !newConfig.projectId || !newConfig.apiKey) {
      throw new Error('Firebase configuration requires at least projectId and apiKey.');
    }
    localStorage.setItem('geoquiz_firebase_config', JSON.stringify(newConfig));
    activeConfig = newConfig;

    if (typeof firebase !== 'undefined') {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(newConfig);
          firestoreDb = firebase.firestore();
          if (typeof firebase.auth === 'function') {
            firebaseAuth = firebase.auth();
          }
          isInitialized = true;
        }
      } catch (e) {
        console.warn('Re-init warning:', e);
      }
    }
    return true;
  }

  /**
   * Disconnect Firebase (revert to local)
   */
  function clearConfig() {
    localStorage.removeItem('geoquiz_firebase_config');
    activeConfig = null;
    firestoreDb = null;
    firebaseAuth = null;
    isInitialized = false;
  }

  /**
   * Test connection to Firestore
   */
  async function testConnection() {
    const db = init();
    if (!db) {
      return { success: false, message: 'Firebase is not configured or SDK is unavailable.' };
    }
    try {
      const snap = await db.collection('questions').limit(1).get();
      const user = firebaseAuth ? firebaseAuth.currentUser : null;
      let userStatus = 'Not signed in';
      if (user) {
        const isAdmin = await isCurrentAdminVerified();
        userStatus = `Authenticated as: ${user.email || 'Anonymous'} (Admin Verified: ${isAdmin ? 'YES ✅' : 'NO ❌'})`;
      }
      return {
        success: true,
        message: `Successfully connected to Cloud Firestore (Project: ${activeConfig.projectId}).\n\nCurrent questions in cloud: ${snap.size >= 1 ? 'Found' : '0'}\nAuth state: ${userStatus}`
      };
    } catch (err) {
      return { success: false, message: `Firestore connection error: ${err.message}` };
    }
  }

  return {
    init,
    getConfig,
    saveConfig,
    clearConfig,
    testConnection,
    ensureStudentAuth,
    signInAdminWithCredentials,
    signOutUser,
    isCurrentAdminVerified,
    getDb: () => firestoreDb,
    getAuth: () => firebaseAuth,
    getCurrentUser: () => firebaseAuth ? firebaseAuth.currentUser : null,
    isConnected: () => !!firestoreDb,
    getProjectId: () => activeConfig ? activeConfig.projectId : null
  };
})();

if (typeof window !== 'undefined') {
  window.FirebaseManager = FirebaseManager;
}
