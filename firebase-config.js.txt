// firebase-config.js
// Complete Firebase Credentials for GeoQuiz Explorer

const firebaseConfig = {
  apiKey: "AIzaSyBh2Ersn-bA7yfwa1z_KGsOF4aBsuUaW3s",
  authDomain: "geoquizexplorer-bc2ee.firebaseapp.com",
  projectId: "geoquizexplorer-bc2ee",
  storageBucket: "geoquizexplorer-bc2ee.firebasestorage.app",
  messagingSenderId: "1008212749060",
  appId: "1:1008212749060:web:17ac4f0986eddeeb07fe51",
  measurementId: "G-VQQEDL9PCD"
};

// Initialize Firebase SDK
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    console.log("[Firebase] Successfully connected to Cloud Firestore backend (geoquizexplorer-bc2ee).");
  } catch (err) {
    console.error("[Firebase] Initialization error:", err);
  }
}