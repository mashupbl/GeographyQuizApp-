/* Student dashboard: shows ONLY the currently registered student's own attempts. */
const Dashboard = (function () {
  const $ = id => document.getElementById(id);
  const CONT = ['Asia','Africa','Europe','North America','South America','Australia/Oceania','Antarctica'];
  const DIFF = ['Easy','Medium','Hard'];
  const esc = s => GeoApp.esc(s);
  const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  const when = iso => new Date(iso).toLocaleString();
  let all = [];

  async function open() {
    const st = GeoApp.getStudent();
    $('dash-sub').textContent = st.name + ' (' + st.id + ')';
    try { all = await Store.getAttempts(st.id); }
    catch (e) { alert('Could not load your history: ' + e.message); return; }
    all.sort((a, b) => a.completedAt.localeCompare(b.completedAt));
    all.forEach((a, i) => { a.n = i + 1; });
    $('dash-continent').innerHTML = '<option value="">All continents</option>' + CONT.map(c => `<option>${c}</option>`).join('');
    $('dash-difficulty').innerHTML = '<option value="">All difficulties</option>' + DIFF.map(d => `<option>${d}</option>`).join('');
    $('dash-detail').innerHTML = '';
    render();
    GeoApp.showView($('view-dashboard'));
  }

  function render() {
    const c = $('dash-continent').value, d = $('dash-difficulty').value;
    const list = all.filter(a => (!c || a.continent === c) && (!d || a.difficulty === d));
    const n = list.length;
    const avg = n ? Math.round(list.reduce((s, a) => s + a.percent, 0) / n) : 0;
    const best = n ? Math.max(...list.map(a => a.percent)) : 0;
    const time = list.reduce((s, a) => s + a.seconds, 0);
    $('dash-stats').innerHTML = [['Attempts', n], ['Average', avg + '%'], ['Best', best + '%'], ['Total time', fmt(time)]]
      .map(([l, v]) => `<div class="stat-item"><div class="stat-label">${l}</div><div class="stat-val">${v}</div></div>`).join('');

    const groups = {};
    list.forEach(a => { (groups[a.continent + ' — ' + a.difficulty] = groups[a.continent + ' — ' + a.difficulty] || []).push(a); });
    $('dash-best').innerHTML = n ? '<h3 class="review-heading">Latest &amp; best per topic</h3><div class="table-wrap"><table class="dash-table"><tr><th>Topic</th><th>Attempts</th><th>Latest</th><th>Best</th></tr>' +
      Object.entries(groups).map(([k, g]) => `<tr><td>${esc(k)}</td><td>${g.length}</td><td>${g[g.length - 1].percent}%</td><td>${Math.max(...g.map(a => a.percent))}%</td></tr>`).join('') + '</table></div>' : '';

    const W = 600, H = 150, pts = list.map((a, i) => {
      const x = list.length === 1 ? W / 2 : 20 + i * (W - 40) / (list.length - 1);
      return [x, H - 20 - a.percent * (H - 40) / 100];
    });
    $('dash-chart').innerHTML = n ? '<h3 class="review-heading">Progress (score %)</h3><svg viewBox="0 0 600 150" style="width:100%;height:auto" role="img" aria-label="Score progress chart">' +
      '<line x1="20" y1="130" x2="580" y2="130" stroke="#cbd5e1"/><line x1="20" y1="20" x2="580" y2="20" stroke="#e2e8f0"/>' +
      '<text x="2" y="24" font-size="10" fill="#64748b">100</text><text x="2" y="134" font-size="10" fill="#64748b">0</text>' +
      `<polyline fill="none" stroke="#2563eb" stroke-width="2" points="${pts.map(p => p.join(',')).join(' ')}"/>` +
      pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#2563eb"/>`).join('') + '</svg>' : '';

    $('dash-rows').innerHTML = n ? list.slice().reverse().map(a =>
      `<tr><td>${a.n}</td><td>${esc(when(a.completedAt))}</td><td>${esc(a.continent)}</td><td>${a.difficulty}</td><td>${a.mode === 'exam' ? 'Exam' : 'Practice'}</td>` +
      `<td>${a.total}</td><td>${a.correct}</td><td>${a.incorrect}</td><td>${a.correct}/${a.total}</td><td>${a.percent}%</td><td>${fmt(a.seconds)}</td>` +
      `<td><button type="button" class="btn btn-secondary" data-attempt="${esc(a.id)}">View</button></td></tr>`).join('')
      : '<tr><td colspan="12">No attempts yet for this selection. Finish a quiz and it will appear here.</td></tr>';
  }

  function detail(id) {
    const a = all.find(x => x.id === id); if (!a) return;
    const L = ['A', 'B', 'C', 'D'];
    $('dash-detail').innerHTML = `<h3 class="review-heading">Attempt ${a.n}: ${esc(a.continent)} — ${a.difficulty} (${a.mode === 'exam' ? 'Exam' : 'Practice'})</h3>` +
      `<p class="card-desc">${esc(when(a.startedAt))} → ${esc(when(a.completedAt))} · ${a.correct}/${a.total} (${a.percent}%) · ${fmt(a.seconds)}</p>` +
      a.questions.map((q, i) => `<div class="review-item ${q.isCorrect ? 'review-correct' : 'review-incorrect'}"><div class="review-q-title">${i + 1}. ${esc(q.question)}</div>` +
        `<div class="review-line"><span class="review-label">Your answer: </span>${q.isCorrect ? '✅' : '❌'} (${L[q.selectedIndex]}) ${esc(q.options[q.selectedIndex])}</div>` +
        (q.isCorrect ? '' : `<div class="review-line"><span class="review-label">Correct: </span>(${L[q.correctIndex]}) ${esc(q.options[q.correctIndex])}</div>`) +
        `<div class="review-explanation">${esc(q.explanation)}</div></div>`).join('');
    $('dash-detail').scrollIntoView({ behavior: 'smooth' });
  }

  document.addEventListener('DOMContentLoaded', () => {
    $('dash-continent').addEventListener('change', render);
    $('dash-difficulty').addEventListener('change', render);
    $('dash-rows').addEventListener('click', e => { const b = e.target.closest('[data-attempt]'); if (b) detail(b.dataset.attempt); });
    $('btn-dash-back').addEventListener('click', () => GeoApp.showView($('view-selection')));
  });
  return { open };
})();
