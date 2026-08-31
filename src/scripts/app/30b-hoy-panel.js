  /* ============== HOY — today at a glance (teacher edition only) ============== */
  // Profe's own day: the standing weekly routine, plus whatever is specific to
  // this week.
  //
  // PRIVACY — read before adding anything here.
  // This file ships to a PUBLIC site from a PUBLIC repo, and /profe/ is a URL
  // path, not a login. Nothing student-identifying belongs in this file: no
  // names, no initials, no IEP / 504 / AIEP / RIEP / placement / expulsion
  // meetings tied to a person. Committing one puts it in git history, where
  // deleting the line later does not remove it.
  //
  // Week-specific items — including every one of those meetings — go in through
  // the "Pegar el memo" box instead. Those are parsed in the browser and saved
  // to localStorage on Profe's own device. They are never committed, never
  // deployed, and never visible to anyone else.

  // The parts of the week that don't change. Safe to commit: no student is
  // identifiable in any of it.
  const HOY_ROUTINE = {
    every: [
      { t: '07:35', label: 'Staff arrival', note: 'Badge in at the cafe or front office' },
      { t: '08:05', label: 'Hallway duty', note: 'Until 8:15 — greeting and helping students' },
      { t: '11:40', label: 'CLD lesson', note: 'Until 12:00 — REQUIRED, handbook lesson every day this week' },
      { t: '15:05', label: 'Assigned duty coverage', note: 'Until 3:15' }
    ],
    // 0 = Sunday … 6 = Saturday
    byDay: {
      1: [{ t: '07:45', label: 'Staff Huddle', note: 'PAC' },
          { t: '08:00', label: 'Monday meetings', note: 'Formal Monday meetings and rotations' }],
      3: [],
      4: [],
      5: []
    },
    dress: {
      4: 'College shirt day',
      5: 'NCH gear + jeans'
    }
  };

  // Standing expectations off the weekly memo — policy, not people.
  const HOY_REQUIREMENTS = [
    'ONE grade per week is required',
    'Dress code: enforce and send to JJ after 8:30 AM — call first',
    'Technology: daily loaners through JJ — call first',
    'Tardies and violations: send to JJ',
    'Be in the hallways between EVERY bell',
    'NO passes in the first or last ten minutes of class, and none during CLD'
  ];

  const HOY_KEY = 'hoy.week.v1';
  const HOY_DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const HOY_MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  function hoyLoad() {
    try { return JSON.parse(localStorage.getItem(HOY_KEY) || 'null') || {}; }
    catch (e) { return {}; }
  }

  function hoySave(data) {
    try { localStorage.setItem(HOY_KEY, JSON.stringify(data)); } catch (e) { /* storage blocked */ }
  }

  // Turn "8:00 AM-9:00 AM: GLT Meetings (Room 036)" into {t:'08:00', label, note}.
  // Handles the shapes the weekly memo actually uses: a single time, a range,
  // and a "5:30/6:30 PM" double. Anything unparseable is kept as a plain line so
  // nothing pasted is silently dropped.
  function hoyParseLine(raw) {
    const line = raw.replace(/^\s*[•·\-*]\s*/, '').trim();
    if (!line) return null;
    const m = line.match(/^(\d{1,2})(?::(\d{2}))?\s*(?:\/\s*\d{1,2}(?::\d{2})?)?\s*(AM|PM)?\s*(?:[-–—]\s*\d{1,2}(?::\d{2})?\s*(?:AM|PM)?\s*)?[:.]\s*(.+)$/i);
    if (!m) return { t: '', label: line, note: '' };
    let h = parseInt(m[1], 10);
    const min = m[2] || '00';
    const mer = (m[3] || '').toUpperCase();
    if (mer === 'PM' && h !== 12) h += 12;
    if (mer === 'AM' && h === 12) h = 0;
    // No AM/PM given: school hours, so 1–7 means afternoon.
    if (!mer && h >= 1 && h <= 7) h += 12;
    // The memo sometimes writes a range with a second colon rather than a dash
    // ("1:00 PM: 2:00 PM: District Attend Meeting"), which leaves the end time
    // stuck on the front of the label. Strip it.
    const rest = m[4].trim().replace(/^\d{1,2}(?::\d{2})?\s*(?:AM|PM)?\s*[:.]\s*/i, '');
    const paren = rest.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
    return {
      t: String(h).padStart(2, '0') + ':' + min,
      label: paren ? paren[1].trim() : rest,
      note: paren ? paren[2].trim() : ''
    };
  }

  function hoyParseBlock(text) {
    return text.split('\n').map(hoyParseLine).filter(Boolean);
  }

  function hoyTimeLabel(t) {
    if (!t) return '';
    const [h, m] = t.split(':').map(Number);
    const mer = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + String(m).padStart(2, '0') + ' ' + mer;
  }

  // Standing routine for this weekday plus whatever Profe pasted for it.
  function hoyItemsFor(date) {
    const dow = date.getDay();
    const saved = hoyLoad();
    const key = 'd' + dow;
    const priv = (saved.days && saved.days[key]) || [];
    // The pasted memo repeats some of the standing routine (the Monday huddle,
    // say). Where it does, keep Profe's line and drop the built-in one so the
    // list doesn't show the same thing twice.
    const norm = t => t.toLowerCase().replace(/[^a-z0-9]/g, '');
    const dupe = r => priv.some(p => {
      if (p.t !== r.t) return false;
      const a = norm(p.label), b = norm(r.label);
      return a && b && (a.indexOf(b) === 0 || b.indexOf(a) === 0);
    });
    const items = HOY_ROUTINE.every
      .concat(HOY_ROUTINE.byDay[dow] || [])
      .filter(r => !dupe(r))
      .map(x => Object.assign({ own: false }, x))
      .concat(priv.map(x => Object.assign({ own: true }, x)));
    return items.sort((a, b) => (a.t || '99').localeCompare(b.t || '99'));
  }

  function renderHoy() {
    const el = document.getElementById('hoyPanel');
    if (!el) return;
    const now = new Date();
    const dow = now.getDay();
    const items = hoyItemsFor(now);
    const dress = HOY_ROUTINE.dress[dow];
    const saved = hoyLoad();
    const weekend = dow === 0 || dow === 6;

    const rows = items.length ? items.map(i => `
      <div class="hoy-row${i.own ? ' hoy-own' : ''}">
        <div class="hoy-time">${hoyTimeLabel(i.t) || '—'}</div>
        <div class="hoy-what">
          <div class="hoy-label">${i.label}</div>
          ${i.note ? `<div class="hoy-note">${i.note}</div>` : ''}
        </div>
      </div>`).join('') : '<p class="hoy-empty">Nothing scheduled — paste this week\'s memo to fill it in.</p>';

    el.innerHTML = `
      <div class="hoy-head">
        <div>
          <div class="hoy-kicker">Hoy · ${HOY_DAYS[dow]}</div>
          <h2 class="hoy-date">${now.getDate()} de ${HOY_MESES[now.getMonth()]}</h2>
        </div>
        <div class="hoy-actions">
          ${dress ? `<span class="hoy-dress">${dress}</span>` : ''}
          <button type="button" class="hoy-btn" id="hoyEditBtn">Pegar el memo</button>
        </div>
      </div>
      ${weekend ? '<p class="hoy-empty">Fin de semana — no school schedule today.</p>' : `
      <div class="hoy-list">${rows}</div>`}
      <details class="hoy-reqs">
        <summary>Weekly requirements</summary>
        <ul>${HOY_REQUIREMENTS.map(r => '<li>' + r + '</li>').join('')}</ul>
      </details>
      <div class="hoy-editor" id="hoyEditor" hidden>
        <p class="hoy-privacy">
          Paste a day's lines from the weekly memo email. This is parsed in your
          browser and saved <strong>on this device only</strong> — it is never
          sent anywhere, never committed to the site, and no one else can see it.
          Student names are safe here; they are not safe in the site's files.
        </p>
        <label class="hoy-field">
          <span>Day</span>
          <select id="hoyDay">
            ${[1, 2, 3, 4, 5].map(d => `<option value="${d}"${d === (weekend ? 1 : dow) ? ' selected' : ''}>${HOY_DAYS[d]}</option>`).join('')}
          </select>
        </label>
        <textarea id="hoyText" rows="9" spellcheck="false"
          placeholder="7:45 AM: Staff Huddle (PAC)&#10;8:00 AM-9:00 AM: GLT Meetings (Room 036)&#10;11:00 AM: IEP meeting"></textarea>
        <div class="hoy-editor-actions">
          <button type="button" class="hoy-btn" id="hoySaveBtn">Guardar</button>
          <button type="button" class="hoy-btn hoy-btn-quiet" id="hoyClearBtn">Borrar el día</button>
          <span class="hoy-saved" id="hoySaved">${saved.weekOf ? 'Saved ' + saved.weekOf : ''}</span>
        </div>
      </div>`;

    const editBtn = document.getElementById('hoyEditBtn');
    const editor = document.getElementById('hoyEditor');
    const daySel = document.getElementById('hoyDay');
    const text = document.getElementById('hoyText');

    function loadDayIntoBox() {
      const d = hoyLoad();
      const list = (d.days && d.days['d' + daySel.value]) || [];
      text.value = list.map(i => (i.t ? hoyTimeLabel(i.t) + ': ' : '') + i.label + (i.note ? ' (' + i.note + ')' : '')).join('\n');
    }

    editBtn.addEventListener('click', () => {
      editor.hidden = !editor.hidden;
      if (!editor.hidden) { loadDayIntoBox(); text.focus(); }
    });
    daySel.addEventListener('change', loadDayIntoBox);

    document.getElementById('hoySaveBtn').addEventListener('click', () => {
      const d = hoyLoad();
      d.days = d.days || {};
      d.days['d' + daySel.value] = hoyParseBlock(text.value);
      d.weekOf = new Date().toLocaleDateString();
      hoySave(d);
      renderHoy();
    });

    document.getElementById('hoyClearBtn').addEventListener('click', () => {
      const d = hoyLoad();
      if (d.days) delete d.days['d' + daySel.value];
      hoySave(d);
      renderHoy();
    });
  }
