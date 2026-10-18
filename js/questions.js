/**
 * GeoQuiz Explorer - Active Question Bank Gateway
 * Backwards-compatible runtime bridge for Question Bank
 */
const QUESTION_BANK = (typeof window !== 'undefined' && window.SAMPLE_QUESTIONS) ? window.SAMPLE_QUESTIONS : [];

function getQuestions(continent, difficulty) {
  // If store is initialized and has questions, get from Store, otherwise fall back to QUESTION_BANK
  if (typeof Store !== 'undefined' && Store.getActiveQuestionBank) {
    return Store.getActiveQuestionBank(continent, difficulty);
  }
  return QUESTION_BANK.filter(q => {
    const matchesContinent = !continent || q.continent.toLowerCase() === continent.toLowerCase();
    const matchesDifficulty = !difficulty || q.difficulty.toLowerCase() === difficulty.toLowerCase();
    const isPublished = q.status === "published";
    return matchesContinent && matchesDifficulty && isPublished;
  });
}

if (typeof window !== 'undefined') {
  window.QUESTION_BANK = QUESTION_BANK;
  window.getQuestions = getQuestions;
}
