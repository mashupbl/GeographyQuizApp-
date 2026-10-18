/**
 * GeoQuiz Explorer - Core Application Controller
 * 
 * Orchestrates:
 * - Student Profile & Persistent Session
 * - Practice Mode vs Exam Mode
 * - Expandable Question Bank integration via Store
 * - Strict Answer Locking & Real-Time Stopwatch
 * - Immutable Attempt Persistence with Question Snapshots
 * - Global View Management & Navigation
 */

(function () {
  'use strict';

  // Application State
  const state = {
    student: {
      name: '',
      id: ''
    },
    settings: {
      mode: 'practice', // 'practice' | 'exam'
      continent: 'Asia',
      difficulty: 'Easy',
      quizLength: 'all' // '10' | '20' | 'all'
    },
    quiz: {
      questions: [],
      currentIndex: 0,
      userAnswers: [],
      secondsElapsed: 0,
      startedAt: null,
      completedAt: null,
      timerInterval: null,
      isAnswerLocked: false
    }
  };

  // DOM Elements cache
  const elements = {
    // Header
    headerStudentBadge: document.getElementById('header-student-badge'),
    headerStudentName: document.getElementById('header-student-name'),
    headerModeBadge: document.getElementById('header-mode-badge'),
    headerModeText: document.getElementById('header-mode-text'),
    btnHeaderStudentDash: document.getElementById('btn-header-student-dash'),
    btnHeaderAdmin: document.getElementById('btn-header-admin'),

    // Views
    viewRegistration: document.getElementById('view-registration'),
    viewSelection: document.getElementById('view-selection'),
    viewQuiz: document.getElementById('view-quiz'),
    viewResults: document.getElementById('view-results'),
    viewStudentDashboard: document.getElementById('view-student-dashboard'),
    viewAdmin: document.getElementById('view-admin'),

    // Registration Form
    formRegistration: document.getElementById('form-registration'),
    inputStudentName: document.getElementById('input-student-name'),
    inputStudentId: document.getElementById('input-student-id'),
    modeOptPractice: document.getElementById('mode-opt-practice'),
    modeOptExam: document.getElementById('mode-opt-exam'),

    // Selection View
    continentChips: document.querySelectorAll('.continent-chip'),
    difficultyBtns: document.querySelectorAll('.difficulty-btn'),
    selectionCountText: document.getElementById('selection-count-text'),
    btnBackToReg: document.getElementById('btn-back-to-reg'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnSelectionToDashboard: document.getElementById('btn-selection-to-dashboard'),
    selectQuizLength: document.getElementById('select-quiz-length'),

    // Quiz View
    quizProgressText: document.getElementById('quiz-progress-text'),
    quizTopicText: document.getElementById('quiz-topic-text'),
    quizTimerDisplay: document.getElementById('quiz-timer-display'),
    quizProgressWrapper: document.getElementById('quiz-progress-wrapper'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),
    quizCardBadge: document.getElementById('quiz-card-badge'),
    quizQuestionText: document.getElementById('quiz-question-text'),
    quizOptionsContainer: document.getElementById('quiz-options-container'),
    quizFeedbackBox: document.getElementById('quiz-feedback-box'),
    quizFeedbackHeading: document.getElementById('quiz-feedback-heading'),
    quizFeedbackText: document.getElementById('quiz-feedback-text'),
    btnNextQuestion: document.getElementById('btn-next-question'),

    // Results View
    resultsScoreValue: document.getElementById('results-score-value'),
    resultsVerdict: document.getElementById('results-verdict'),
    statStudentName: document.getElementById('stat-student-name'),
    statStudentId: document.getElementById('stat-student-id'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statTime: document.getElementById('stat-time'),
    btnRetakeQuiz: document.getElementById('btn-retake-quiz'),
    btnNewQuiz: document.getElementById('btn-new-quiz'),
    btnResultsToDashboard: document.getElementById('btn-results-to-dashboard'),
    resultsSaveStatus: document.getElementById('results-save-status'),
    resultsReviewContainer: document.getElementById('results-review-container')
  };

  /**
   * Escape HTML utility
   */
  function esc(t) {
    if (t === null || t === undefined) return '';
    return String(t).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  /**
   * Initialize App Listeners and State
   */
  async function init() {
    // 1. Initialize persistent Store (seed questions, config, students)
    await Store.init();

    // 2. Initialize Sub-modules
    if (window.QuestionAdmin) window.QuestionAdmin.init();
    if (window.AdminDashboard) window.AdminDashboard.init();
    if (window.StudentDashboard) window.StudentDashboard.init();

    // 3. Setup core UI listeners
    setupModeSelectors();
    setupContinentSelectors();
    setupDifficultySelectors();
    setupQuizLengthSelector();
    setupFormListeners();
    setupNavigationListeners();
    setupHeaderButtons();

    // Initial count display
    updateAvailableQuestionsCount();
  }

  /**
   * Switch between UI views
   */
  function showView(targetView) {
    const allViews = [
      elements.viewRegistration,
      elements.viewSelection,
      elements.viewQuiz,
      elements.viewResults,
      elements.viewStudentDashboard,
      elements.viewAdmin
    ];

    allViews.forEach(view => {
      if (view) view.classList.remove('active');
    });

    if (targetView) {
      targetView.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Setup Practice vs Exam mode selector radios
   */
  function setupModeSelectors() {
    const radios = document.querySelectorAll('input[name="quiz-mode"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.settings.mode = e.target.value;
        if (state.settings.mode === 'practice') {
          elements.modeOptPractice.classList.add('selected');
          elements.modeOptExam.classList.remove('selected');
        } else {
          elements.modeOptExam.classList.add('selected');
          elements.modeOptPractice.classList.remove('selected');
        }
        updateHeaderBadges();
      });
    });
  }

  /**
   * Setup Continent Selector chips
   */
  function setupContinentSelectors() {
    elements.continentChips.forEach(chip => {
      chip.addEventListener('click', () => {
        elements.continentChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.settings.continent = chip.getAttribute('data-continent');
        updateAvailableQuestionsCount();
      });
    });
  }

  /**
   * Setup Difficulty selector buttons
   */
  function setupDifficultySelectors() {
    elements.difficultyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.difficultyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.settings.difficulty = btn.getAttribute('data-difficulty');
        updateAvailableQuestionsCount();
      });
    });
  }

  /**
   * Setup Quiz length selector (All vs 10 vs 20)
   */
  function setupQuizLengthSelector() {
    if (elements.selectQuizLength) {
      elements.selectQuizLength.addEventListener('change', (e) => {
        state.settings.quizLength = e.target.value;
      });
    }
  }

  /**
   * Updates question counter on Selection screen dynamically from Store
   */
  function updateAvailableQuestionsCount() {
    const matching = Store.getActiveQuestionBank(state.settings.continent, state.settings.difficulty);
    const count = matching.length;

    if (elements.selectionCountText) {
      elements.selectionCountText.textContent = `${count} questions available for ${state.settings.continent} (${state.settings.difficulty})`;
    }
    if (elements.btnStartQuiz) {
      elements.btnStartQuiz.disabled = count === 0;
    }
  }

  /**
   * Update header badges for active student and selected mode
   */
  function updateHeaderBadges() {
    if (state.student.name && state.student.id) {
      elements.headerStudentName.textContent = `${state.student.name} (${state.student.id})`;
      elements.headerStudentBadge.style.display = 'inline-flex';
      if (elements.btnHeaderStudentDash) {
        elements.btnHeaderStudentDash.style.display = 'inline-flex';
      }
    } else {
      elements.headerStudentBadge.style.display = 'none';
      if (elements.btnHeaderStudentDash) {
        elements.btnHeaderStudentDash.style.display = 'none';
      }
    }

    elements.headerModeBadge.style.display = 'inline-flex';
    elements.headerModeText.textContent = state.settings.mode === 'practice' ? 'Practice Mode' : 'Exam Mode';
  }

  /**
   * Handle registration form submission
   */
  function setupFormListeners() {
    elements.formRegistration.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = elements.inputStudentName.value.trim();
      const id = elements.inputStudentId.value.trim();

      if (!name || !id) {
        alert('Please enter both your Full Name and Student ID.');
        return;
      }

      state.student.name = name;
      state.student.id = id;

      // Register or update student in persistent store
      await Store.saveStudent({
        studentId: id,
        name: name
      });

      updateHeaderBadges();
      updateAvailableQuestionsCount();
      showView(elements.viewSelection);
    });
  }

  /**
   * Setup Header action buttons
   */
  function setupHeaderButtons() {
    // Header Student Badge -> opens Student Dashboard
    if (elements.headerStudentBadge) {
      elements.headerStudentBadge.addEventListener('click', () => {
        if (window.StudentDashboard && state.student.id) {
          window.StudentDashboard.open(state.student);
        }
      });
    }

    // Header "My Dashboard" button
    if (elements.btnHeaderStudentDash) {
      elements.btnHeaderStudentDash.addEventListener('click', () => {
        if (window.StudentDashboard && state.student.id) {
          window.StudentDashboard.open(state.student);
        }
      });
    }

    // Header Admin button
    if (elements.btnHeaderAdmin) {
      elements.btnHeaderAdmin.addEventListener('click', () => {
        if (window.AdminDashboard) {
          window.AdminDashboard.openAdminPortal();
        }
      });
    }
  }

  /**
   * Setup buttons for navigation
   */
  function setupNavigationListeners() {
    elements.btnBackToReg.addEventListener('click', () => {
      showView(elements.viewRegistration);
    });

    elements.btnStartQuiz.addEventListener('click', () => {
      startQuizSession();
    });

    elements.btnNextQuestion.addEventListener('click', () => {
      goToNextQuestion();
    });

    elements.btnRetakeQuiz.addEventListener('click', () => {
      startQuizSession();
    });

    elements.btnNewQuiz.addEventListener('click', () => {
      updateAvailableQuestionsCount();
      showView(elements.viewSelection);
    });

    if (elements.btnSelectionToDashboard) {
      elements.btnSelectionToDashboard.addEventListener('click', () => {
        if (window.StudentDashboard) {
          window.StudentDashboard.open(state.student);
        }
      });
    }

    if (elements.btnResultsToDashboard) {
      elements.btnResultsToDashboard.addEventListener('click', () => {
        if (window.StudentDashboard) {
          window.StudentDashboard.open(state.student);
        }
      });
    }
  }

  /**
   * Start a new Quiz Session
   */
  function startQuizSession() {
    const pool = Store.getActiveQuestionBank(state.settings.continent, state.settings.difficulty);
    if (!pool || pool.length === 0) {
      alert(`No questions currently available in the question bank for ${state.settings.continent} (${state.settings.difficulty}).`);
      return;
    }

    // Clone pool
    let chosenQuestions = [...pool];

    // Handle optional length limits
    if (state.settings.quizLength === '10' && chosenQuestions.length > 10) {
      chosenQuestions = chosenQuestions.slice(0, 10);
    } else if (state.settings.quizLength === '20' && chosenQuestions.length > 20) {
      chosenQuestions = chosenQuestions.slice(0, 20);
    }

    state.quiz.questions = chosenQuestions;
    state.quiz.currentIndex = 0;
    state.quiz.userAnswers = [];
    state.quiz.isAnswerLocked = false;
    state.quiz.secondsElapsed = 0;
    state.quiz.startedAt = new Date();
    state.quiz.completedAt = null;

    startTimer();
    renderCurrentQuestion();
    showView(elements.viewQuiz);
  }

  /**
   * Start live stopwatch timer
   */
  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    state.quiz.timerInterval = setInterval(() => {
      state.quiz.secondsElapsed++;
      updateTimerDisplay();
    }, 1000);
  }

  /**
   * Stop timer
   */
  function stopTimer() {
    if (state.quiz.timerInterval) {
      clearInterval(state.quiz.timerInterval);
      state.quiz.timerInterval = null;
    }
  }

  /**
   * Format seconds to MM:SS
   */
  function formatTime(totalSeconds) {
    const s = parseInt(totalSeconds, 10) || 0;
    const mins = Math.floor(s / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function updateTimerDisplay() {
    elements.quizTimerDisplay.textContent = formatTime(state.quiz.secondsElapsed);
  }

  /**
   * Render current question
   */
  function renderCurrentQuestion() {
    const currentQ = state.quiz.questions[state.quiz.currentIndex];
    const totalQ = state.quiz.questions.length;
    const qNumber = state.quiz.currentIndex + 1;

    // Reset lock
    state.quiz.isAnswerLocked = false;

    // Update progress metadata
    elements.quizProgressText.textContent = `Question ${qNumber} of ${totalQ}`;
    elements.quizTopicText.textContent = `${currentQ.continent} (${currentQ.difficulty})`;
    elements.quizCardBadge.textContent = `${currentQ.continent.toUpperCase()} • ${currentQ.difficulty.toUpperCase()} ${currentQ.topic ? '• ' + currentQ.topic.toUpperCase() : ''}`;
    elements.quizQuestionText.textContent = currentQ.question;

    // Update progress bar
    const progressPercent = Math.round(((qNumber - 1) / totalQ) * 100);
    elements.quizProgressBar.style.width = `${progressPercent}%`;
    elements.quizProgressWrapper.setAttribute('aria-valuenow', progressPercent);

    // Clear feedback box
    elements.quizFeedbackBox.className = 'feedback-box';
    elements.quizFeedbackBox.style.display = 'none';

    // Disable Next button until option clicked
    elements.btnNextQuestion.disabled = true;
    elements.btnNextQuestion.textContent = (qNumber === totalQ) 
      ? (state.settings.mode === 'practice' ? 'Finish Quiz 🏁' : 'Submit Exam 🏁')
      : 'Next Question →';

    // Populate Option Buttons (A, B, C, D)
    elements.quizOptionsContainer.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];

    currentQ.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.setAttribute('data-index', index);

      btn.innerHTML = `
        <span class="option-letter">${optionLetters[index]}</span>
        <span class="option-text">${esc(optText)}</span>
      `;

      btn.addEventListener('click', () => handleOptionSelected(index));
      elements.quizOptionsContainer.appendChild(btn);
    });
  }

  /**
   * Handle user clicking an option (Strict Answer Locking)
   */
  function handleOptionSelected(selectedIndex) {
    if (state.quiz.isAnswerLocked) {
      return; // Prevent clicking again once locked
    }

    // Lock all options immediately
    state.quiz.isAnswerLocked = true;
    const currentQ = state.quiz.questions[state.quiz.currentIndex];
    const isCorrect = selectedIndex === currentQ.correctIndex;

    // Record answer
    state.quiz.userAnswers.push({
      question: currentQ,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect
    });

    // Disable all option buttons
    const allOptionBtns = elements.quizOptionsContainer.querySelectorAll('.option-btn');
    allOptionBtns.forEach(btn => {
      btn.disabled = true;
    });

    const chosenBtn = allOptionBtns[selectedIndex];

    // Branch behavior according to Mode
    if (state.settings.mode === 'practice') {
      // PRACTICE MODE: Instant visual feedback and explanation
      if (isCorrect) {
        chosenBtn.classList.add('is-correct');
        showFeedback(true, 'Correct Answer! 🎉', currentQ.explanation);
      } else {
        chosenBtn.classList.add('is-incorrect');
        // Highlight correct answer in green for educational feedback
        if (allOptionBtns[currentQ.correctIndex]) {
          allOptionBtns[currentQ.correctIndex].classList.add('is-correct');
        }
        showFeedback(false, 'Not Quite! 💡', currentQ.explanation);
      }
    } else {
      // EXAM MODE: Neutral locked state; no feedback revealed
      chosenBtn.classList.add('selected-locked');
    }

    // Enable next button
    elements.btnNextQuestion.disabled = false;
    elements.btnNextQuestion.focus();
  }

  /**
   * Display feedback box in Practice Mode
   */
  function showFeedback(isCorrect, heading, text) {
    elements.quizFeedbackBox.className = `feedback-box active ${isCorrect ? 'correct' : 'incorrect'}`;
    elements.quizFeedbackHeading.innerHTML = `<span aria-hidden="true">${isCorrect ? '✅' : '❌'}</span> ${heading}`;
    elements.quizFeedbackText.textContent = text || 'Geography fact explanation.';
    elements.quizFeedbackBox.style.display = 'block';
  }

  /**
   * Advance to the next question or complete quiz
   */
  function goToNextQuestion() {
    state.quiz.currentIndex++;
    if (state.quiz.currentIndex < state.quiz.questions.length) {
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  }

  /**
   * Complete quiz, compile results, persist snapshot to IndexedDB
   */
  async function finishQuiz() {
    state.quiz.completedAt = new Date();
    stopTimer();

    // Wall clock accurate duration
    const wallSeconds = Math.max(1, Math.round((state.quiz.completedAt - state.quiz.startedAt) / 1000));
    state.quiz.secondsElapsed = wallSeconds;

    // Finalize progress bar
    elements.quizProgressBar.style.width = '100%';
    elements.quizProgressWrapper.setAttribute('aria-valuenow', 100);

    const totalQuestions = state.quiz.questions.length;
    const correctCount = state.quiz.userAnswers.filter(a => a.isCorrect).length;
    const incorrectCount = totalQuestions - correctCount;
    const accuracyPercent = Math.round((correctCount / totalQuestions) * 100);

    // Populate score display
    elements.resultsScoreValue.textContent = `${correctCount}/${totalQuestions}`;
    elements.statStudentName.textContent = state.student.name;
    elements.statStudentId.textContent = state.student.id;
    elements.statAccuracy.textContent = `${accuracyPercent}%`;
    elements.statTime.textContent = formatTime(state.quiz.secondsElapsed);

    // Assign performance verdict
    if (accuracyPercent === 100) {
      elements.resultsVerdict.textContent = 'Outstanding Mastery! 🌟';
    } else if (accuracyPercent >= 75) {
      elements.resultsVerdict.textContent = 'Great Job! 👏';
    } else if (accuracyPercent >= 50) {
      elements.resultsVerdict.textContent = 'Good Effort - Keep Practicing! 📚';
    } else {
      elements.resultsVerdict.textContent = 'Keep Exploring Geography! 🌍';
    }

    // Render detailed review of all questions
    renderDetailedReview();

    // Save Attempt snapshot to Persistent IndexedDB
    await persistAttemptRecord(correctCount, totalQuestions, incorrectCount, accuracyPercent);

    showView(elements.viewResults);
  }

  /**
   * Persist Attempt to Store with complete question snapshots
   */
  async function persistAttemptRecord(correct, total, incorrect, percent) {
    if (elements.resultsSaveStatus) {
      elements.resultsSaveStatus.className = 'save-status';
      elements.resultsSaveStatus.textContent = 'Saving attempt to browser storage...';
    }

    const questionSnapshots = state.quiz.userAnswers.map(ans => ({
      id: ans.question.id,
      question: ans.question.question,
      options: [...ans.question.options],
      correctIndex: ans.question.correctIndex,
      selectedIndex: ans.selectedIndex,
      isCorrect: ans.isCorrect,
      explanation: ans.question.explanation || '',
      topic: ans.question.topic || 'General Geography'
    }));

    const attemptRecord = {
      studentId: state.student.id,
      studentName: state.student.name,
      continent: state.settings.continent,
      difficulty: state.settings.difficulty,
      mode: state.settings.mode,
      startedAt: state.quiz.startedAt.toISOString(),
      completedAt: state.quiz.completedAt.toISOString(),
      secondsElapsed: state.quiz.secondsElapsed,
      totalQuestions: total,
      correctCount: correct,
      incorrectCount: incorrect,
      scorePercent: percent,
      questionSnapshots: questionSnapshots
    };

    try {
      await Store.saveAttempt(attemptRecord);
      if (elements.resultsSaveStatus) {
        elements.resultsSaveStatus.className = 'save-status ok';
        elements.resultsSaveStatus.textContent = '✅ Attempt saved successfully in local history.';
      }
    } catch (err) {
      console.error('Save attempt error:', err);
      if (elements.resultsSaveStatus) {
        elements.resultsSaveStatus.className = 'save-status fail';
        elements.resultsSaveStatus.textContent = `⚠️ Could not save attempt: ${err.message}`;
      }
    }
  }

  /**
   * Render question-by-question review on results page
   */
  function renderDetailedReview() {
    elements.resultsReviewContainer.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];

    state.quiz.userAnswers.forEach((record, idx) => {
      const q = record.question;
      const isCorrect = record.isCorrect;
      const selectedText = q.options[record.selectedIndex];
      const correctText = q.options[q.correctIndex];

      const reviewCard = document.createElement('div');
      reviewCard.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

      reviewCard.innerHTML = `
        <div class="review-q-title">
          <span>${idx + 1}. ${esc(q.question)}</span>
        </div>
        <div class="review-answers-grid">
          <div class="review-line">
            <span class="review-label">Your Answer: </span>
            <span style="font-weight:600; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
              ${isCorrect ? '✅' : '❌'} (${optionLetters[record.selectedIndex]}) ${esc(selectedText)}
            </span>
          </div>
          ${!isCorrect ? `
          <div class="review-line">
            <span class="review-label">Correct Answer: </span>
            <span style="font-weight:600; color: var(--success)">
              ✅ (${optionLetters[q.correctIndex]}) ${esc(correctText)}
            </span>
          </div>
          ` : ''}
        </div>
        <div class="review-explanation">
          <strong>Geography Fact:</strong> ${esc(q.explanation || 'No explanation provided.')}
        </div>
      `;

      elements.resultsReviewContainer.appendChild(reviewCard);
    });
  }

  // Export app API
  window.GeoApp = {
    showView,
    getStudent: () => state.student,
    esc
  };

  // Run on page load
  document.addEventListener('DOMContentLoaded', init);
})();
