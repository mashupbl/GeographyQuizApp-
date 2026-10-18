/**
 * GeoQuiz Explorer - CSV Import, Validation, and Export Manager
 * 
 * Complies with RFC-4180 CSV standard.
 * Features:
 * - Robust parsing with escaped quotes, embedded commas & newlines
 * - Strict schema validation & 4 distinct options check
 * - Duplicate ID and duplicate text detection (internal and against existing bank)
 * - Row-by-row error reporting with line numbers
 * - Downloadable sample CSV template
 * - Export active question bank to CSV
 */

const CsvManager = (function () {
  'use strict';

  const VALID_CONTINENTS = [
    'Asia',
    'Africa',
    'Europe',
    'North America',
    'South America',
    'Australia/Oceania',
    'Antarctica'
  ];

  const CONTINENT_ALIASES = {
    'asia': 'Asia',
    'africa': 'Africa',
    'europe': 'Europe',
    'north america': 'North America',
    'south america': 'South America',
    'australia': 'Australia/Oceania',
    'oceania': 'Australia/Oceania',
    'australia/oceania': 'Australia/Oceania',
    'australia & oceania': 'Australia/Oceania',
    'antarctica': 'Antarctica'
  };

  const VALID_DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

  /**
   * RFC-4180 CSV Parser
   * Parses CSV string into 2D array of rows and cells
   */
  function parseCSVToGrid(csvText) {
    if (!csvText) return [];
    // Strip UTF-8 BOM if present
    let text = csvText.replace(/^\uFEFF/, '');

    const rows = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          // Escaped quote: "" -> "
          currentCell += '"';
          i++;
        } else {
          // Toggle quote state
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        currentRow.push(currentCell.trim());
        currentCell = '';
      } else if ((char === '\r' || char === '\n') && !insideQuotes) {
        currentRow.push(currentCell.trim());
        currentCell = '';
        if (currentRow.length > 0 && currentRow.some(c => c !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
        if (char === '\r' && nextChar === '\n') {
          i++; // Skip \n in CRLF
        }
      } else {
        currentCell += char;
      }
    }

    if (currentCell || currentRow.length > 0) {
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c !== '')) {
        rows.push(currentRow);
      }
    }

    return rows;
  }

  /**
   * Normalize Header Keys
   */
  function normalizeHeader(h) {
    const clean = (h || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    if (clean === 'id' || clean === 'questionid') return 'id';
    if (clean === 'question' || clean === 'questiontext') return 'question';
    if (clean === 'optiona' || clean === 'a') return 'optionA';
    if (clean === 'optionb' || clean === 'b') return 'optionB';
    if (clean === 'optionc' || clean === 'c') return 'optionC';
    if (clean === 'optiond' || clean === 'd') return 'optionD';
    if (clean === 'correctanswer' || clean === 'correct' || clean === 'answer' || clean === 'correctoption') return 'correctAnswer';
    if (clean === 'continent') return 'continent';
    if (clean === 'difficulty') return 'difficulty';
    if (clean === 'topic' || clean === 'category') return 'topic';
    if (clean === 'explanation' || clean === 'fact' || clean === 'geographyfact') return 'explanation';
    return clean;
  }

  /**
   * Parse CSV string into validated question objects and error reports
   */
  function parseAndValidateCSV(csvText, existingBank = []) {
    const grid = parseCSVToGrid(csvText);
    if (grid.length < 2) {
      return {
        success: false,
        errorMessage: 'CSV file is empty or missing headers.',
        totalRows: 0,
        validQuestions: [],
        duplicateQuestions: [],
        invalidRows: [],
        summary: { total: 0, valid: 0, duplicates: 0, errors: 0 }
      };
    }

    const rawHeaders = grid[0];
    const headerMap = {};
    rawHeaders.forEach((h, idx) => {
      headerMap[normalizeHeader(h)] = idx;
    });

    // Required columns
    const requiredColumns = ['question', 'optionA', 'optionB', 'optionC', 'optionD', 'correctAnswer', 'continent', 'difficulty'];
    const missingColumns = requiredColumns.filter(c => headerMap[c] === undefined);
    if (missingColumns.length > 0) {
      return {
        success: false,
        errorMessage: `Missing required CSV column headers: ${missingColumns.join(', ')}`,
        totalRows: grid.length - 1,
        validQuestions: [],
        duplicateQuestions: [],
        invalidRows: [],
        summary: { total: grid.length - 1, valid: 0, duplicates: 0, errors: grid.length - 1 }
      };
    }

    // Existing bank indexes for duplicate detection
    const existingIds = new Set();
    const existingTexts = new Set();
    existingBank.forEach(q => {
      if (q.id) existingIds.add(q.id.trim().toLowerCase());
      if (q.question) existingTexts.add(q.question.trim().toLowerCase());
    });

    // Batch tracker for intra-CSV duplicate detection
    const batchIds = new Set();
    const batchTexts = new Set();

    const validQuestions = [];
    const duplicateQuestions = [];
    const invalidRows = [];

    const getCell = (row, field) => {
      const idx = headerMap[field];
      return idx !== undefined && idx < row.length ? row[idx].trim() : '';
    };

    // Process data rows
    for (let r = 1; r < grid.length; r++) {
      const row = grid[r];
      const rowNum = r + 1; // 1-indexed for spreadsheet row numbers
      const errors = [];
      const warnings = [];

      let rawId = getCell(row, 'id');
      const questionText = getCell(row, 'question');
      const optA = getCell(row, 'optionA');
      const optB = getCell(row, 'optionB');
      const optC = getCell(row, 'optionC');
      const optD = getCell(row, 'optionD');
      const rawAnswer = getCell(row, 'correctAnswer');
      const rawContinent = getCell(row, 'continent');
      const rawDifficulty = getCell(row, 'difficulty');
      const topic = getCell(row, 'topic') || 'General Geography';
      const explanation = getCell(row, 'explanation') || 'Geography concept explanation.';

      // 1. Validate Question Text
      if (!questionText) {
        errors.push('Question text is missing.');
      }

      // 2. Validate 4 Options
      if (!optA || !optB || !optC || !optD) {
        errors.push('All four options (Option A, B, C, D) must be provided.');
      } else {
        // Check for 4 distinct options
        const lowerOpts = [optA.toLowerCase(), optB.toLowerCase(), optC.toLowerCase(), optD.toLowerCase()];
        const uniqueOpts = new Set(lowerOpts);
        if (uniqueOpts.size < 4) {
          errors.push('The four options must be distinct from each other.');
        }
      }

      // 3. Validate Correct Answer
      let correctIndex = -1;
      const cleanAnswer = rawAnswer.toUpperCase().trim();
      if (cleanAnswer === 'A' || cleanAnswer === '1') correctIndex = 0;
      else if (cleanAnswer === 'B' || cleanAnswer === '2') correctIndex = 1;
      else if (cleanAnswer === 'C' || cleanAnswer === '3') correctIndex = 2;
      else if (cleanAnswer === 'D' || cleanAnswer === '4') correctIndex = 3;
      else if (cleanAnswer === optA.toUpperCase()) correctIndex = 0;
      else if (cleanAnswer === optB.toUpperCase()) correctIndex = 1;
      else if (cleanAnswer === optC.toUpperCase()) correctIndex = 2;
      else if (cleanAnswer === optD.toUpperCase()) correctIndex = 3;

      if (correctIndex === -1) {
        errors.push(`Invalid Correct Answer '${rawAnswer}'. Must be A, B, C, or D.`);
      }

      // 4. Validate Continent
      const normContKey = rawContinent.toLowerCase().trim();
      const mappedContinent = CONTINENT_ALIASES[normContKey];
      if (!mappedContinent) {
        errors.push(`Invalid Continent '${rawContinent}'. Must be one of: ${VALID_CONTINENTS.join(', ')}.`);
      }

      // 5. Validate Difficulty
      let mappedDifficulty = null;
      const normDiff = rawDifficulty.toLowerCase().trim();
      if (normDiff === 'easy') mappedDifficulty = 'Easy';
      else if (normDiff === 'medium' || normDiff === 'med') mappedDifficulty = 'Medium';
      else if (normDiff === 'hard') mappedDifficulty = 'Hard';

      if (!mappedDifficulty) {
        errors.push(`Invalid Difficulty '${rawDifficulty}'. Must be Easy, Medium, or Hard.`);
      }

      // Duplicate Detection
      let isDuplicate = false;
      let dupReason = '';

      if (rawId) {
        const idLower = rawId.toLowerCase();
        if (existingIds.has(idLower)) {
          isDuplicate = true;
          dupReason = `Question ID '${rawId}' already exists in question bank.`;
        } else if (batchIds.has(idLower)) {
          isDuplicate = true;
          dupReason = `Question ID '${rawId}' is duplicated within this CSV file.`;
        }
      }

      if (questionText) {
        const textLower = questionText.toLowerCase();
        if (existingTexts.has(textLower)) {
          isDuplicate = true;
          dupReason = dupReason ? `${dupReason} Text also exists in question bank.` : 'Question text already exists in question bank.';
        } else if (batchTexts.has(textLower)) {
          isDuplicate = true;
          dupReason = dupReason ? `${dupReason} Text also duplicated within this CSV file.` : 'Question text duplicated within this CSV file.';
        }
      }

      // Final classification
      if (errors.length > 0) {
        invalidRows.push({
          rowNum,
          id: rawId || `(Auto-gen Row ${rowNum})`,
          question: questionText || '(Empty Question)',
          continent: rawContinent || '-',
          difficulty: rawDifficulty || '-',
          errors,
          status: 'error'
        });
      } else {
        const questionObj = {
          id: rawId || `q-${(mappedContinent || 'geo').slice(0, 3).toLowerCase()}-${Date.now().toString(36)}-${r}`,
          continent: mappedContinent,
          difficulty: mappedDifficulty,
          topic: topic,
          question: questionText,
          options: [optA, optB, optC, optD],
          correctIndex: correctIndex,
          explanation: explanation,
          status: 'published'
        };

        if (isDuplicate) {
          duplicateQuestions.push({
            rowNum,
            questionObj,
            reason: dupReason,
            status: 'duplicate'
          });
        } else {
          validQuestions.push({
            rowNum,
            questionObj,
            status: 'valid'
          });
          // Track to prevent later rows from duplicating this one
          if (questionObj.id) batchIds.add(questionObj.id.toLowerCase());
          if (questionText) batchTexts.add(questionText.toLowerCase());
        }
      }
    }

    return {
      success: true,
      totalRows: grid.length - 1,
      validQuestions,
      duplicateQuestions,
      invalidRows,
      summary: {
        total: grid.length - 1,
        valid: validQuestions.length,
        duplicates: duplicateQuestions.length,
        errors: invalidRows.length
      }
    };
  }

  /**
   * Export questions to RFC-4180 CSV
   */
  function exportToCsvString(questions) {
    const headers = [
      'Question ID',
      'Question',
      'Option A',
      'Option B',
      'Option C',
      'Option D',
      'Correct Answer',
      'Continent',
      'Difficulty',
      'Topic',
      'Explanation'
    ];

    const escapeCell = (str) => {
      if (str === null || str === undefined) return '""';
      const text = String(str);
      if (text.includes('"') || text.includes(',') || text.includes('\n') || text.includes('\r')) {
        return `"${text.replace(/"/g, '""')}"`;
      }
      return `"${text}"`;
    };

    const letters = ['A', 'B', 'C', 'D'];
    const lines = [headers.map(escapeCell).join(',')];

    questions.forEach(q => {
      const opts = q.options || ['', '', '', ''];
      const correctLetter = (q.correctIndex >= 0 && q.correctIndex < 4) ? letters[q.correctIndex] : 'A';
      const row = [
        q.id || '',
        q.question || '',
        opts[0] || '',
        opts[1] || '',
        opts[2] || '',
        opts[3] || '',
        correctLetter,
        q.continent || '',
        q.difficulty || '',
        q.topic || 'General Geography',
        q.explanation || ''
      ];
      lines.push(row.map(escapeCell).join(','));
    });

    return lines.join('\r\n');
  }

  /**
   * Trigger file download in browser
   */
  function triggerDownload(content, filename, mimeType = 'text/csv;charset=utf-8;') {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Download sample CSV template
   */
  function downloadSampleTemplate() {
    const sampleRows = [
      {
        id: 'sample-asia-1',
        question: 'What is the highest mountain peak in Asia and the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Mount Fuji'],
        correctIndex: 0,
        continent: 'Asia',
        difficulty: 'Easy',
        topic: 'Mountains & Relief',
        explanation: 'Mount Everest in the Himalayas reaches 8,848.86 m above sea level.'
      },
      {
        id: 'sample-africa-1',
        question: 'What is the longest river in Africa and the world?',
        options: ['Congo River', 'Nile River', 'Niger River', 'Zambezi River'],
        correctIndex: 1,
        continent: 'Africa',
        difficulty: 'Easy',
        topic: 'Water Bodies',
        explanation: 'The Nile River flows approximately 6,650 kilometers through northeastern Africa.'
      },
      {
        id: 'sample-europe-1',
        question: 'Which country is known as the Land of a Thousand Lakes?',
        options: ['Sweden', 'Norway', 'Finland', 'Iceland'],
        correctIndex: 2,
        continent: 'Europe',
        difficulty: 'Medium',
        topic: 'Physical Geography',
        explanation: 'Finland contains over 187,000 lakes within its borders.'
      },
      {
        id: 'sample-na-1',
        question: 'What is the highest peak in North America?',
        options: ['Mount Logan', 'Denali', 'Mount Rainier', 'Mount Whitney'],
        correctIndex: 1,
        continent: 'North America',
        difficulty: 'Easy',
        topic: 'Mountains & Relief',
        explanation: 'Denali in Alaska rises to an elevation of 6,190 meters.'
      },
      {
        id: 'sample-sa-1',
        question: 'Which is the driest non-polar desert in the world?',
        options: ['Patagonian Desert', 'Sechura Desert', 'Atacama Desert', 'Monte Desert'],
        correctIndex: 2,
        continent: 'South America',
        difficulty: 'Hard',
        topic: 'Ecosystems & Climate',
        explanation: 'The Atacama Desert in Chile receives less than 1 mm of precipitation annually in some zones.'
      }
    ];

    const csv = exportToCsvString(sampleRows);
    triggerDownload(csv, 'geography_questions_template.csv');
  }

  return {
    parseAndValidateCSV,
    exportToCsvString,
    triggerDownload,
    downloadSampleTemplate,
    VALID_CONTINENTS,
    VALID_DIFFICULTIES
  };
})();

if (typeof window !== 'undefined') {
  window.CsvManager = CsvManager;
}
