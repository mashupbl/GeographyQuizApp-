# GeoQuiz Explorer 🌍

GeoQuiz Explorer is an interactive geography quiz and exam application featuring dual-mode persistence (Google Cloud Firestore + local browser IndexedDB), comprehensive administrator monitoring, student attempt history tracking, and CSV question-bank management with pagination.

---

## 🚀 Vercel Deployment Guide

GeoQuiz Explorer is a static frontend web application (HTML5, CSS3, vanilla JavaScript). It has no server-side build step and deploys instantly on Vercel.

### Method 1: Deploy via GitHub (Recommended)

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "GeoQuiz Explorer - Production ready with secure Firebase integration"
   git branch -M main
   git remote add origin https://github.com/<your-username>/GeographyQuizApp.git
   git push -u origin main
   ```

2. **Import into Vercel:**
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New...** &rarr; **Project**.
   - Select your `GeographyQuizApp` GitHub repository.
   - **Framework Preset**: Select `Other` (or leave default).
   - **Root Directory**: `./` (leave default).
   - Click **Deploy**.

Vercel will deploy the site in ~15 seconds and assign a live production URL (e.g., `https://geography-quiz-app.vercel.app`).

### Method 2: Deploy via Vercel CLI

If you have Node.js and the Vercel CLI installed:
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy directly from your local terminal.

---

## 🔥 Firebase Setup & Security Configuration

The app is pre-configured with project `geoquizexplorer-bc2ee`. To activate full cloud capabilities with strict security:

### 1. Publish Firestore Security Rules
1. Open the [Firebase Console](https://console.firebase.google.com/) and navigate to project `geoquizexplorer-bc2ee`.
2. Go to **Build &rarr; Firestore Database &rarr; Rules**.
3. Replace existing rules with the contents of `firestore.rules` and click **Publish**.

### 2. Enable Authentication Providers
1. Go to **Build &rarr; Authentication &rarr; Sign-in method**.
2. Enable **Email/Password**.
3. Enable **Anonymous** (allows students to practice without creating accounts while maintaining tamper-proof cryptographic session UIDs for security rule enforcement).

### 3. Designate Your Administrator Account
1. Go to **Authentication &rarr; Users** &rarr; click **Add user**.
2. Enter your administrator email and password.
3. Copy the generated **User UID**.
4. Go to **Firestore Database &rarr; Data** &rarr; click **Start collection**:
   - Collection ID: `admins`
   - Document ID: `<paste-your-admin-User-UID>`
   - Document fields: Leave empty (or add `role: "admin"`).
5. Click **Save**.
   > **Note:** Client-side writes to `/admins` are blocked by `firestore.rules` (`allow write: if false;`). Only entries created via the Firebase Console or Admin SDK are trusted, preventing privilege escalation.

---

## 💾 Dual-Mode Storage Architecture

- **🔥 Cloud Firestore Mode:** Active when connected to Firebase. Real-time sync across devices, student privacy enforcement, and administrator monitoring.
- **💾 Local IndexedDB Mode:** Automatically activated when offline or if Firebase is disconnected. Stores question bank, student profiles, and chronological attempt scorecards locally in the browser. Zero data loss when disconnected.

---

## 📋 Default Credentials & Access

- **Admin Portal Passcode (Local Fallback):** `admin2026`
- **Cloud Admin Sign-In:** Sign in with the Firebase email and password created in Step 3 above.
