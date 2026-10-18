/**
 * Geography Quiz Application - Core Controller (Milestone 1)
 * 
 * Features:
 * - Student Profile & Unique ID registration
 * - Practice Mode (instant feedback) vs Exam Mode (end-of-quiz scoring)
 * - 7 Continent categories & 3 difficulty levels
 * - Answer locking to prevent changing choices
 * - Live session timer & progress tracking
 * - Detailed question review & performance summary
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
      difficulty: 'Easy'
    },
    quiz: {
      questions: [],
      currentIndex: 0,
      userAnswers: [],
      secondsElapsed: 0,
      timerInterval: null,
      isAnswerLocked: false
    }
  };

  // DOM Elements
  const elements = {
    // Header
    headerStudentBadge: document.getElementById('header-student-badge'),
    headerStudentName: document.getElementById('header-student-name'),
    headerModeBadge: document.getElementById('header-mode-badge'),
    headerModeText: document.getElementById('header-mode-text'),

    // Views
    viewRegistration: document.getElementById('view-registration'),
    viewSelection: document.getElementById('view-selection'),
    viewQuiz: document.getElementById('view-quiz'),
    viewResults: document.getElementById('view-results'),

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
    resultsReviewContainer: document.getElementById('results-review-container')
  };

  /**
   * Initialize App Listeners and State
   */
  function init() {
    setupModeSelectors();
    setupContinentSelectors();
    setupDifficultySelectors();
    setupFormListeners();
    setupNavigationListeners();
    ['btn-open-dashboard', 'btn-results-dashboard'].forEach(id =>
      document.getElementById(id).addEventListener('click', () => Dashboard.open()));

    // Initial count display
    updateAvailableQuestionsCount();
  }

  /**
   * Switch between UI views
   */
  function showView(targetView) {
    document.querySelectorAll('.view').forEach(view => {
      view.classList.remove('active');
    });
    targetView.classList.add('active');
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
   * Updates question counter on Selection screen
   */
  function updateAvailableQuestionsCount() {
    const matching = getQuestions(state.settings.continent, state.settings.difficulty);
    elements.selectionCountText.textContent = `${matching.length} questions for ${state.settings.continent} (${state.settings.difficulty})`;
    elements.btnStartQuiz.disabled = matching.length === 0;
  }

  /**
   * Update header badges for active student and selected mode
   */
  function updateHeaderBadges() {
    if (state.student.name) {
      elements.headerStudentName.textContent = state.student.name;
      elements.headerStudentBadge.style.display = 'inline-flex';
    } else {
      elements.headerStudentBadge.style.display = 'none';
    }

    elements.headerModeBadge.style.display = 'inline-flex';
    elements.headerModeText.textContent = state.settings.mode === 'practice' ? 'Practice Mode' : 'Exam Mode';
  }

  /**
   * Handle registration form submission
   */
  function setupFormListeners() {
    elements.formRegistration.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = elements.inputStudentName.value.trim();
      const id = elements.inputStudentId.value.trim();

      if (!name || !id) {
        alert('Please enter both your Full Name and Student ID.');
        return;
      }

      state.student.name = name;
      state.student.id = id;

      updateHeaderBadges();
      showView(elements.viewSelection);
    });
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
      showView(elements.viewSelection);
    });
  }

  /**
   * Start a new Quiz Session
   */
  function startQuizSession() {
    const pool = getQuestions(state.settings.continent, state.settings.difficulty);
    if (!pool || pool.length === 0) {
      alert('No questions found for this combination.');
      return;
    }

    // Clone array to avoid modifying source
    state.quiz.questions = [...pool];
    state.quiz.currentIndex = 0;
    state.quiz.userAnswers = [];
    state.quiz.isAnswerLocked = false;
    state.quiz.secondsElapsed = 0;
    state.quiz.startedAt = new Date();

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
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function updateTimerDisplay() {
    elements.quizTimerDisplay.textContent = formatTime(state.quiz.secondsElapsed);
  }

  /**
   * Render the current question to the screen
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
    elements.quizCardBadge.textContent = `${currentQ.continent.toUpperCase()} • ${currentQ.difficulty.toUpperCase()}`;
    elements.quizQuestionText.textContent = currentQ.question;

    // Update accessible progress bar
    const progressPercent = Math.round(((qNumber - 1) / totalQ) * 100);
    elements.quizProgressBar.style.width = `${progressPercent}%`;
    elements.quizProgressWrapper.setAttribute('aria-valuenow', progressPercent);

    // Clear feedback box
    elements.quizFeedbackBox.className = 'feedback-box';
    elements.quizFeedbackBox.style.display = 'none';

    // Disable Next button until an answer is clicked
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
   * Handle user clicking an option
   * Implements strict answer locking
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
        // Also highlight the true answer in green for learning
        allOptionBtns[currentQ.correctIndex].classList.add('is-correct');
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
    elements.quizFeedbackText.textContent = text;
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
   * Complete quiz and compile results
   */
  function finishQuiz() {
    stopTimer();
    state.quiz.completedAt = new Date();
    // Real elapsed time from start/finish timestamps (not the tick counter)
    state.quiz.secondsElapsed = Math.round((state.quiz.completedAt - state.quiz.startedAt) / 1000);

    // Finalize progress bar to 100%
    elements.quizProgressBar.style.width = '100%';
    elements.quizProgressWrapper.setAttribute('aria-valuenow', 100);

    const totalQuestions = state.quiz.questions.length;
    const correctCount = state.quiz.userAnswers.filter(a => a.isCorrect).length;
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

    showView(elements.viewResults);
    saveCurrentAttempt(correctCount, totalQuestions, accuracyPercent);
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
          <strong>Geography Fact:</strong> ${esc(q.explanation)}
        </div>
      `;

      elements.resultsReviewContainer.appendChild(reviewCard);
    });
  }

  /** Escape text before inserting into innerHTML */
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /** Save the finished attempt as a NEW record (with a question snapshot). */
  function saveCurrentAttempt(correct, total, percent) {
    const el = document.getElementById('results-save-status');
    el.className = 'save-status';
    el.textContent = 'Saving attempt…';
    const rec = {
      id: Store.newId(),
      studentId: state.student.id,
      studentKey: state.student.id.toLowerCase(),
      studentName: state.student.name,
      mode: state.settings.mode,
      continent: state.settings.continent,
      difficulty: state.settings.difficulty,
      startedAt: state.quiz.startedAt.toISOString(),
      completedAt: state.quiz.completedAt.toISOString(),
      seconds: state.quiz.secondsElapsed,
      total: total, correct: correct, incorrect: total - correct, percent: percent,
      questions: state.quiz.userAnswers.map(a => ({
        id: a.question.id, question: a.question.question, options: [...a.question.options],
        correctIndex: a.question.correctIndex, explanation: a.question.explanation,
        selectedIndex: a.selectedIndex, isCorrect: a.isCorrect
      }))
    };
    Store.saveAttempt(rec)
      .then(() => { el.textContent = '✅ Attempt saved in this browser.'; el.classList.add('ok'); })
      .catch(err => { el.textContent = '⚠️ This attempt was NOT saved: ' + err.message; el.classList.add('fail'); });
  }

  window.GeoApp = { showView: showView, getStudent: () => state.student, esc: esc };

  // Run on page load
  document.addEventListener('DOMContentLoaded', init);
})();
