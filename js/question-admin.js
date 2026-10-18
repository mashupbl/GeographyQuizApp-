/**
 * GeoQuiz Explorer - Question Bank Administration & Pagination Manager
 * 
 * Solves the navigation & pagination bottleneck:
 * - Pagination (25, 50, 100 per page) with Previous, Next, First, Last
 * - Reach any page up to the very last question and return cleanly
 * - Quick category shortcuts (e.g. Asia → Easy, Asia → Medium)
 * - Real-time search by ID or Question text
 * - Filters for Continent, Difficulty, and Topic
 * - Sorting by Question ID, Question text, Difficulty
 * - In-place editing and deletion with safety confirmations
 * - CSV import/export bridges
 */

const QuestionAdmin = (function () {
  'use strict';

  const state = {
    filters: {
      continent: 'all',
      difficulty: 'all',
      topic: 'all',
      search: '',
      sortField: 'id',
      sortAsc: true
    },
    pagination: {
      currentPage: 1,
      pageSize: 25,
      totalQuestions: 0,
      totalPages: 1
    },
    activeQuestions: [],
    editingQuestionId: null,
    pendingCsvImport: null
  };

  const letters = ['A', 'B', 'C', 'D'];

  function esc(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  /**
   * Initialize Question Admin view and event listeners
   */
  function init() {
    setupFilterListeners();
    setupPaginationListeners();
    setupActionListeners();
    setupModalListeners();
    setupCsvDropzone();
  }

  /**
   * Refresh and render question bank list
   */
  function refresh() {
    // 1. Update topic dropdown options dynamically
    updateTopicDropdown();

    // 2. Query questions via Store
    const allMatching = Store.queryQuestions(state.filters);
    state.activeQuestions = allMatching;
    state.pagination.totalQuestions = allMatching.length;
    state.pagination.totalPages = Math.max(1, Math.ceil(allMatching.length / state.pagination.pageSize));

    // Clamp current page
    if (state.pagination.currentPage > state.pagination.totalPages) {
      state.pagination.currentPage = state.pagination.totalPages;
    }
    if (state.pagination.currentPage < 1) {
      state.pagination.currentPage = 1;
    }

    // 3. Slice questions for current page
    const startIdx = (state.pagination.currentPage - 1) * state.pagination.pageSize;
    const endIdx = Math.min(startIdx + state.pagination.pageSize, allMatching.length);
    const pageQuestions = allMatching.slice(startIdx, endIdx);

    // 4. Render controls & question list
    renderHeaderStats();
    renderPaginationControls(startIdx, endIdx);
    renderQuestionList(pageQuestions, startIdx);
  }

  /**
   * Update topic dropdown with topics in question bank
   */
  function updateTopicDropdown() {
    const select = document.getElementById('qadmin-filter-topic');
    if (!select) return;

    const currentVal = state.filters.topic;
    const topics = Store.getAllTopics();

    select.innerHTML = '<option value="all">All Topics</option>' +
      topics.map(t => `<option value="${esc(t)}" ${t === currentVal ? 'selected' : ''}>${esc(t)}</option>`).join('');
  }

  /**
   * Render total counts and quick summary
   */
  function renderHeaderStats() {
    const totalCountEl = document.getElementById('qadmin-total-count');
    const filteredCountEl = document.getElementById('qadmin-filtered-count');
    const totalInBank = Store.getCache().length;

    if (totalCountEl) totalCountEl.textContent = totalInBank;
    if (filteredCountEl) {
      let desc = `${state.pagination.totalQuestions} questions`;
      if (state.filters.continent !== 'all' || state.filters.difficulty !== 'all') {
        const c = state.filters.continent !== 'all' ? state.filters.continent : 'All Continents';
        const d = state.filters.difficulty !== 'all' ? state.filters.difficulty : 'All Difficulties';
        desc += ` for ${c} (${d})`;
      }
      filteredCountEl.textContent = desc;
    }
  }

  /**
   * Render Pagination Controls
   */
  function renderPaginationControls(startIdx, endIdx) {
    const { currentPage, totalPages, totalQuestions } = state.pagination;

    const btnFirst = document.getElementById('qadmin-pg-first');
    const btnPrev = document.getElementById('qadmin-pg-prev');
    const btnNext = document.getElementById('qadmin-pg-next');
    const btnLast = document.getElementById('qadmin-pg-last');
    const pageInfo = document.getElementById('qadmin-pg-info');
    const pageJumpInput = document.getElementById('qadmin-pg-jump');

    if (btnFirst) btnFirst.disabled = currentPage <= 1;
    if (btnPrev) btnPrev.disabled = currentPage <= 1;
    if (btnNext) btnNext.disabled = currentPage >= totalPages;
    if (btnLast) btnLast.disabled = currentPage >= totalPages;

    if (pageInfo) {
      if (totalQuestions === 0) {
        pageInfo.textContent = 'No questions found';
      } else {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages} (${startIdx + 1}–${endIdx} of ${totalQuestions})`;
      }
    }

    if (pageJumpInput) {
      pageJumpInput.max = totalPages;
      pageJumpInput.value = currentPage;
    }
  }

  /**
   * Render Question List
   */
  function renderQuestionList(questions, startIdx) {
    const container = document.getElementById('qadmin-questions-container');
    if (!container) return;

    if (questions.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card">
          <span style="font-size: 2.5rem;">🔍</span>
          <h3>No Questions Found</h3>
          <p class="text-muted">No questions match your current search and filter criteria.</p>
          <button type="button" class="btn btn-secondary" id="btn-qadmin-reset-filters" style="margin-top: 0.75rem;">
            Clear Filters
          </button>
        </div>
      `;
      const btnClear = document.getElementById('btn-qadmin-reset-filters');
      if (btnClear) btnClear.addEventListener('click', resetFilters);
      return;
    }

    let html = '';
    questions.forEach((q, idx) => {
      const globalIdx = startIdx + idx + 1;
      const opts = q.options || ['', '', '', ''];

      html += `
        <article class="qadmin-card" data-qid="${esc(q.id)}">
          <div class="qadmin-card-header">
            <div class="qadmin-badges">
              <span class="badge badge-meta">#${globalIdx}</span>
              <span class="badge badge-id">ID: ${esc(q.id)}</span>
              <span class="badge badge-continent">${esc(q.continent)}</span>
              <span class="badge badge-diff diff-${(q.difficulty || '').toLowerCase()}">${esc(q.difficulty)}</span>
              ${q.topic ? `<span class="badge badge-topic">${esc(q.topic)}</span>` : ''}
            </div>
            <div class="qadmin-actions">
              <button type="button" class="btn-icon" data-action="edit" data-qid="${esc(q.id)}" title="Edit Question" aria-label="Edit Question">
                ✏️ Edit
              </button>
              <button type="button" class="btn-icon text-danger" data-action="delete" data-qid="${esc(q.id)}" title="Delete Question" aria-label="Delete Question">
                🗑️ Delete
              </button>
            </div>
          </div>

          <div class="qadmin-question-text">
            <strong>${esc(q.question)}</strong>
          </div>

          <div class="qadmin-options-grid">
            ${opts.map((opt, oIdx) => {
              const isCorrect = oIdx === q.correctIndex;
              return `
                <div class="qadmin-opt-item ${isCorrect ? 'is-correct' : ''}">
                  <span class="opt-indicator">${letters[oIdx]}</span>
                  <span class="opt-label">${esc(opt)}</span>
                  ${isCorrect ? '<span class="correct-tag">✓ Correct</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div class="qadmin-explanation">
            <span class="explanation-icon">💡</span>
            <span><strong>Explanation:</strong> ${esc(q.explanation || 'No explanation provided.')}</span>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  /**
   * Filter and Sort Event Listeners
   */
  function setupFilterListeners() {
    const selContinent = document.getElementById('qadmin-filter-continent');
    const selDifficulty = document.getElementById('qadmin-filter-difficulty');
    const selTopic = document.getElementById('qadmin-filter-topic');
    const inputSearch = document.getElementById('qadmin-search');
    const selSort = document.getElementById('qadmin-sort');
    const selPageSize = document.getElementById('qadmin-pagesize');

    if (selContinent) {
      selContinent.addEventListener('change', (e) => {
        state.filters.continent = e.target.value;
        state.pagination.currentPage = 1;
        updateQuickPills();
        refresh();
      });
    }

    if (selDifficulty) {
      selDifficulty.addEventListener('change', (e) => {
        state.filters.difficulty = e.target.value;
        state.pagination.currentPage = 1;
        updateQuickPills();
        refresh();
      });
    }

    if (selTopic) {
      selTopic.addEventListener('change', (e) => {
        state.filters.topic = e.target.value;
        state.pagination.currentPage = 1;
        refresh();
      });
    }

    if (inputSearch) {
      let debounceTimer = null;
      inputSearch.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          state.filters.search = e.target.value;
          state.pagination.currentPage = 1;
          refresh();
        }, 200);
      });
    }

    if (selSort) {
      selSort.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'id-asc') { state.filters.sortField = 'id'; state.filters.sortAsc = true; }
        else if (val === 'id-desc') { state.filters.sortField = 'id'; state.filters.sortAsc = false; }
        else if (val === 'text-asc') { state.filters.sortField = 'question'; state.filters.sortAsc = true; }
        else if (val === 'text-desc') { state.filters.sortField = 'question'; state.filters.sortAsc = false; }
        else if (val === 'diff-asc') { state.filters.sortField = 'difficulty'; state.filters.sortAsc = true; }
        refresh();
      });
    }

    if (selPageSize) {
      selPageSize.addEventListener('change', (e) => {
        state.pagination.pageSize = parseInt(e.target.value, 10) || 25;
        state.pagination.currentPage = 1;
        refresh();
      });
    }

    // Quick Category Shortcut Pills
    const quickPillContainer = document.getElementById('qadmin-quick-pills');
    if (quickPillContainer) {
      quickPillContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('[data-quick-cont]');
        if (!pill) return;

        const cont = pill.getAttribute('data-quick-cont');
        const diff = pill.getAttribute('data-quick-diff') || 'all';

        state.filters.continent = cont;
        state.filters.difficulty = diff;
        state.pagination.currentPage = 1;

        if (selContinent) selContinent.value = cont;
        if (selDifficulty) selDifficulty.value = diff;

        updateQuickPills();
        refresh();
      });
    }
  }

  function updateQuickPills() {
    const pills = document.querySelectorAll('.quick-pill');
    pills.forEach(p => {
      const c = p.getAttribute('data-quick-cont');
      const d = p.getAttribute('data-quick-diff') || 'all';
      if (c === state.filters.continent && d === state.filters.difficulty) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }

  function resetFilters() {
    state.filters.continent = 'all';
    state.filters.difficulty = 'all';
    state.filters.topic = 'all';
    state.filters.search = '';
    state.pagination.currentPage = 1;

    const selContinent = document.getElementById('qadmin-filter-continent');
    const selDifficulty = document.getElementById('qadmin-filter-difficulty');
    const selTopic = document.getElementById('qadmin-filter-topic');
    const inputSearch = document.getElementById('qadmin-search');

    if (selContinent) selContinent.value = 'all';
    if (selDifficulty) selDifficulty.value = 'all';
    if (selTopic) selTopic.value = 'all';
    if (inputSearch) inputSearch.value = '';

    updateQuickPills();
    refresh();
  }

  /**
   * Setup Pagination Button Listeners
   */
  function setupPaginationListeners() {
    const btnFirst = document.getElementById('qadmin-pg-first');
    const btnPrev = document.getElementById('qadmin-pg-prev');
    const btnNext = document.getElementById('qadmin-pg-next');
    const btnLast = document.getElementById('qadmin-pg-last');
    const pageJumpInput = document.getElementById('qadmin-pg-jump');

    if (btnFirst) {
      btnFirst.addEventListener('click', () => {
        if (state.pagination.currentPage > 1) {
          state.pagination.currentPage = 1;
          refresh();
          scrollToTop();
        }
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (state.pagination.currentPage > 1) {
          state.pagination.currentPage--;
          refresh();
          scrollToTop();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (state.pagination.currentPage < state.pagination.totalPages) {
          state.pagination.currentPage++;
          refresh();
          scrollToTop();
        }
      });
    }

    if (btnLast) {
      btnLast.addEventListener('click', () => {
        if (state.pagination.currentPage < state.pagination.totalPages) {
          state.pagination.currentPage = state.pagination.totalPages;
          refresh();
          scrollToTop();
        }
      });
    }

    if (pageJumpInput) {
      pageJumpInput.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val >= 1 && val <= state.pagination.totalPages) {
          state.pagination.currentPage = val;
          refresh();
          scrollToTop();
        } else {
          pageJumpInput.value = state.pagination.currentPage;
        }
      });
    }
  }

  function scrollToTop() {
    const listTop = document.getElementById('qadmin-list-top');
    if (listTop) {
      listTop.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Setup In-place Question Actions (Edit / Delete)
   */
  function setupActionListeners() {
    const container = document.getElementById('qadmin-questions-container');
    if (container) {
      container.addEventListener('click', async (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;

        const action = btn.getAttribute('data-action');
        const qid = btn.getAttribute('data-qid');

        if (action === 'delete') {
          handleDeleteQuestion(qid);
        } else if (action === 'edit') {
          handleOpenEditModal(qid);
        }
      });
    }

    // Top action buttons
    const btnAddSingle = document.getElementById('btn-qadmin-add-single');
    if (btnAddSingle) {
      btnAddSingle.addEventListener('click', () => handleOpenAddModal());
    }

    const btnExportCsv = document.getElementById('btn-qadmin-export-csv');
    if (btnExportCsv) {
      btnExportCsv.addEventListener('click', () => {
        const questions = state.activeQuestions.length > 0 ? state.activeQuestions : Store.getCache();
        const csvStr = CsvManager.exportToCsvString(questions);
        const filename = `geography_questions_export_${state.filters.continent}_${state.filters.difficulty}.csv`.toLowerCase().replace(/[^a-z0-9._-]/g, '_');
        CsvManager.triggerDownload(csvStr, filename);
      });
    }

    const btnSampleTemplate = document.getElementById('btn-qadmin-sample-csv');
    if (btnSampleTemplate) {
      btnSampleTemplate.addEventListener('click', () => {
        CsvManager.downloadSampleTemplate();
      });
    }

    const btnResetDefault = document.getElementById('btn-qadmin-reset-default');
    if (btnResetDefault) {
      btnResetDefault.addEventListener('click', async () => {
        const confirmed = confirm(
          'Are you sure you want to restore the Question Bank to the default sample questions?\n\n' +
          'Any questions not exported to CSV will be replaced with the standard sample set.'
        );
        if (confirmed) {
          const count = await Store.resetQuestionsToDefault();
          alert(`Question Bank restored to ${count} sample questions.`);
          refresh();
        }
      });
    }
  }

  /**
   * Delete a Question with confirmation
   */
  async function handleDeleteQuestion(qid) {
    const q = Store.getCache().find(x => x.id === qid);
    const label = q ? `"${q.question}"` : qid;

    if (!confirm(`Are you sure you want to delete this question?\n\n${label}`)) {
      return;
    }

    await Store.deleteQuestion(qid);
    refresh();
  }

  /**
   * Modal: Add or Edit Question
   */
  function handleOpenAddModal() {
    state.editingQuestionId = null;
    document.getElementById('modal-qeditor-title').textContent = 'Add New Geography Question';
    document.getElementById('input-edit-id').value = '';
    document.getElementById('input-edit-id').placeholder = '(Auto-generated ID)';
    document.getElementById('input-edit-continent').value = state.filters.continent !== 'all' ? state.filters.continent : 'Asia';
    document.getElementById('input-edit-difficulty').value = state.filters.difficulty !== 'all' ? state.filters.difficulty : 'Easy';
    document.getElementById('input-edit-topic').value = state.filters.topic !== 'all' ? state.filters.topic : 'General Geography';
    document.getElementById('input-edit-question').value = '';
    document.getElementById('input-edit-opt0').value = '';
    document.getElementById('input-edit-opt1').value = '';
    document.getElementById('input-edit-opt2').value = '';
    document.getElementById('input-edit-opt3').value = '';
    document.getElementById('input-edit-correct').value = '0';
    document.getElementById('input-edit-explanation').value = '';

    openModal('modal-qeditor');
  }

  function handleOpenEditModal(qid) {
    const q = Store.getCache().find(x => x.id === qid);
    if (!q) return;

    state.editingQuestionId = qid;
    document.getElementById('modal-qeditor-title').textContent = `Edit Question (${qid})`;
    document.getElementById('input-edit-id').value = q.id;
    document.getElementById('input-edit-continent').value = q.continent;
    document.getElementById('input-edit-difficulty').value = q.difficulty;
    document.getElementById('input-edit-topic').value = q.topic || 'General Geography';
    document.getElementById('input-edit-question').value = q.question;
    document.getElementById('input-edit-opt0').value = q.options[0] || '';
    document.getElementById('input-edit-opt1').value = q.options[1] || '';
    document.getElementById('input-edit-opt2').value = q.options[2] || '';
    document.getElementById('input-edit-opt3').value = q.options[3] || '';
    document.getElementById('input-edit-correct').value = String(q.correctIndex);
    document.getElementById('input-edit-explanation').value = q.explanation || '';

    openModal('modal-qeditor');
  }

  function setupModalListeners() {
    // Question Editor Form Submit
    const formEditor = document.getElementById('form-qeditor');
    if (formEditor) {
      formEditor.addEventListener('submit', async (e) => {
        e.preventDefault();

        const qText = document.getElementById('input-edit-question').value.trim();
        const opt0 = document.getElementById('input-edit-opt0').value.trim();
        const opt1 = document.getElementById('input-edit-opt1').value.trim();
        const opt2 = document.getElementById('input-edit-opt2').value.trim();
        const opt3 = document.getElementById('input-edit-opt3').value.trim();
        const cIdx = parseInt(document.getElementById('input-edit-correct').value, 10);
        const cont = document.getElementById('input-edit-continent').value;
        const diff = document.getElementById('input-edit-difficulty').value;
        const topic = document.getElementById('input-edit-topic').value.trim() || 'General Geography';
        const expl = document.getElementById('input-edit-explanation').value.trim();
        let qid = document.getElementById('input-edit-id').value.trim();

        if (!qText || !opt0 || !opt1 || !opt2 || !opt3) {
          alert('Please fill in the question text and all four options.');
          return;
        }

        // Distinct options check
        const uniqueOpts = new Set([opt0.toLowerCase(), opt1.toLowerCase(), opt2.toLowerCase(), opt3.toLowerCase()]);
        if (uniqueOpts.size < 4) {
          alert('All four options must be distinct.');
          return;
        }

        if (!qid) {
          qid = state.editingQuestionId || `q-${cont.slice(0, 3).toLowerCase()}-${Date.now().toString(36)}`;
        }

        const questionObj = {
          id: qid,
          continent: cont,
          difficulty: diff,
          topic: topic,
          question: qText,
          options: [opt0, opt1, opt2, opt3],
          correctIndex: cIdx,
          explanation: expl || 'Geography explanation.',
          status: 'published'
        };

        await Store.saveQuestion(questionObj);
        closeModal('modal-qeditor');
        refresh();
      });
    }

    // Modal Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close-modal');
        closeModal(modalId);
      });
    });

    // CSV Import Confirm / Cancel
    const btnConfirmImport = document.getElementById('btn-confirm-csv-import');
    if (btnConfirmImport) {
      btnConfirmImport.addEventListener('click', handleConfirmCsvImport);
    }

    const btnCancelImport = document.getElementById('btn-cancel-csv-import');
    if (btnCancelImport) {
      btnCancelImport.addEventListener('click', () => {
        state.pendingCsvImport = null;
        closeModal('modal-csv-preview');
      });
    }
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  }

  /**
   * Setup CSV Upload & Dropzone
   */
  function setupCsvDropzone() {
    const fileInput = document.getElementById('csv-file-input');
    const dropzone = document.getElementById('csv-dropzone');

    if (!fileInput || !dropzone) return;

    dropzone.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        processUploadedCsvFile(files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processUploadedCsvFile(e.target.files[0]);
        fileInput.value = ''; // Reset so the same file can be re-selected if needed
      }
    });
  }

  /**
   * Read and Validate uploaded CSV file
   */
  function processUploadedCsvFile(file) {
    if (!file.name.toLowerCase().endsWith('.csv')) {
      alert('Please upload a valid .csv file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvText = e.target.result;
      const existing = Store.getCache();
      const validation = CsvManager.parseAndValidateCSV(csvText, existing);

      if (!validation.success) {
        alert(`CSV Import Error:\n${validation.errorMessage}`);
        return;
      }

      state.pendingCsvImport = validation;
      renderCsvPreviewModal(validation, file.name);
      openModal('modal-csv-preview');
    };

    reader.onerror = () => {
      alert('Failed to read the selected file. Please try again.');
    };

    reader.readAsText(file);
  }

  /**
   * Render CSV Preview and Validation Report
   */
  function renderCsvPreviewModal(validation, fileName) {
    document.getElementById('csv-preview-filename').textContent = fileName;
    document.getElementById('csv-stat-total').textContent = validation.summary.total;
    document.getElementById('csv-stat-valid').textContent = validation.summary.valid;
    document.getElementById('csv-stat-duplicates').textContent = validation.summary.duplicates;
    document.getElementById('csv-stat-errors').textContent = validation.summary.errors;

    const errorContainer = document.getElementById('csv-errors-list');
    const tableBody = document.getElementById('csv-preview-rows');
    const btnConfirm = document.getElementById('btn-confirm-csv-import');

    // 1. Errors section
    if (validation.invalidRows.length > 0) {
      errorContainer.style.display = 'block';
      errorContainer.innerHTML = `
        <div class="alert alert-danger">
          <strong>⚠️ ${validation.invalidRows.length} row(s) failed validation and will be rejected:</strong>
          <ul style="margin: 0.5rem 0 0 1.25rem;">
            ${validation.invalidRows.slice(0, 15).map(err => `
              <li>Row ${err.rowNum}: ${esc(err.errors.join(' | '))} (Question: "${esc(err.question.slice(0, 50))}")</li>
            `).join('')}
            ${validation.invalidRows.length > 15 ? `<li>...and ${validation.invalidRows.length - 15} more rows with errors</li>` : ''}
          </ul>
        </div>
      `;
    } else {
      errorContainer.style.display = 'none';
      errorContainer.innerHTML = '';
    }

    // 2. Preview rows (showing first 30 rows)
    const combinedRows = [
      ...validation.validQuestions.map(v => ({ ...v, type: 'valid' })),
      ...validation.duplicateQuestions.map(d => ({ ...d, type: 'duplicate' })),
      ...validation.invalidRows.map(i => ({ ...i, type: 'error' }))
    ].sort((a, b) => a.rowNum - b.rowNum);

    tableBody.innerHTML = combinedRows.slice(0, 40).map(item => {
      if (item.type === 'valid') {
        const q = item.questionObj;
        return `
          <tr class="row-valid">
            <td>${item.rowNum}</td>
            <td><span class="badge badge-success">Valid</span></td>
            <td>${esc(q.id)}</td>
            <td>${esc(q.question)}</td>
            <td>${esc(q.continent)}</td>
            <td>${esc(q.difficulty)}</td>
            <td>Ready to import</td>
          </tr>
        `;
      } else if (item.type === 'duplicate') {
        const q = item.questionObj;
        return `
          <tr class="row-duplicate">
            <td>${item.rowNum}</td>
            <td><span class="badge badge-warning">Duplicate</span></td>
            <td>${esc(q.id)}</td>
            <td>${esc(q.question)}</td>
            <td>${esc(q.continent)}</td>
            <td>${esc(q.difficulty)}</td>
            <td><span class="text-warning">${esc(item.reason)}</span></td>
          </tr>
        `;
      } else {
        return `
          <tr class="row-error">
            <td>${item.rowNum}</td>
            <td><span class="badge badge-danger">Error</span></td>
            <td>${esc(item.id)}</td>
            <td>${esc(item.question)}</td>
            <td>${esc(item.continent)}</td>
            <td>${esc(item.difficulty)}</td>
            <td><span class="text-danger">${esc(item.errors.join('; '))}</span></td>
          </tr>
        `;
      }
    }).join('');

    const totalImportable = validation.validQuestions.length + validation.duplicateQuestions.length;
    btnConfirm.disabled = totalImportable === 0;
    btnConfirm.textContent = `Confirm Import (${validation.validQuestions.length} New Questions) →`;
  }

  /**
   * Confirm and Commit CSV Import
   */
  async function handleConfirmCsvImport() {
    if (!state.pendingCsvImport) return;

    const dupActionSelect = document.getElementById('csv-duplicate-action');
    const duplicateAction = dupActionSelect ? dupActionSelect.value : 'skip'; // 'skip' | 'overwrite'

    const importItems = [];
    state.pendingCsvImport.validQuestions.forEach(v => importItems.push(v.questionObj));

    if (duplicateAction === 'overwrite') {
      state.pendingCsvImport.duplicateQuestions.forEach(d => importItems.push(d.questionObj));
    }

    const result = await Store.importQuestionsBatch(importItems, duplicateAction);

    closeModal('modal-csv-preview');
    state.pendingCsvImport = null;

    alert(
      `CSV Import Complete!\n\n` +
      `• Added: ${result.added} new questions\n` +
      `• Updated (Duplicates): ${result.updated} questions\n` +
      `• Skipped: ${result.skipped} duplicate questions\n` +
      `• Current Total in Bank: ${result.totalBank} questions`
    );

    refresh();
  }

  return {
    init,
    refresh,
    resetFilters
  };
})();

if (typeof window !== 'undefined') {
  window.QuestionAdmin = QuestionAdmin;
}
