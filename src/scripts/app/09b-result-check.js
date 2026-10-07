  /* ============== RESULT STAMP + CHECK CODE ============== */
  // Students screenshot only the score box, so every results screen opens with
  // a stamp: activity, settings, time, the student's name, the score, and a
  // short check code. The code is a keyed hash of name + score + time (+ the
  // activity), so an edited score, a friend's screenshot with the name changed,
  // or an old result no longer matches. Profe verifies codes at #/revisar
  // (full edition only). Not unbreakable — the key ships in this script — but
  // far more work than doing the activity.

  const RC_KEY = 'elp·nchs·revisar·7Q2K';
  const RC_EPOCH = Date.UTC(2026, 0, 1);
  const RC_TIME_SPAN = 1 << 20;          // minutes kept in the code (~2 years, then wraps)
  const RC_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // Crockford base32
  const RC_NAME_KEY = 'elpueblo_send_name';   // shared with Send to Profe (10b)

  function rcHash(str) {                  // cyrb53 — small, sync, 53-bit
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  // Loose matching: accents, case, spaces and punctuation never matter, so
  // Profe can type "ana perez" for "Ana Pérez" and "17 20" for "17/20".
  function rcNorm(s) {
    return String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]/g, '');
  }
  function rcDigits(s) { return String(s == null ? '' : s).replace(/[^0-9]/g, ''); }

  function rcSigA(name, score, minute) { return rcHash(RC_KEY + '|A|' + rcNorm(name) + '|' + rcDigits(score) + '|' + minute) % 32768; }
  function rcSigB(name, activity, minute) { return rcHash(RC_KEY + '|B|' + rcNorm(name) + '|' + rcNorm(activity) + '|' + minute) % 1024; }
  function rcMask(a, b) { return rcHash(RC_KEY + '|M|' + a + '|' + b) % RC_TIME_SPAN; }

  // 45 bits = 20 (time, masked) + 15 (name+score) + 10 (activity) → 9 chars.
  function rcMakeCode(name, score, activity, ms) {
    const minute = Math.floor((ms - RC_EPOCH) / 60000);
    const a = rcSigA(name, score, minute), b = rcSigB(name, activity, minute);
    const t = (((minute % RC_TIME_SPAN) + RC_TIME_SPAN) % RC_TIME_SPAN) ^ rcMask(a, b);
    let v = t * 33554432 + a * 1024 + b, out = '';
    for (let i = 0; i < 9; i++) { out = RC_ALPHABET[v % 32] + out; v = Math.floor(v / 32); }
    return out.slice(0, 3) + '-' + out.slice(3, 6) + '-' + out.slice(6);
  }

  // → null if the code is malformed/doesn't match, else { when, activityOk }
  // (activityOk is null when no activity was typed).
  function rcCheckCode(code, name, score, activity) {
    const clean = String(code || '').toUpperCase().replace(/[^0-9A-Z]/g, '')
      .replace(/O/g, '0').replace(/[IL]/g, '1').replace(/U/g, 'V');
    if (clean.length !== 9) return null;
    let v = 0;
    for (const ch of clean) {
      const d = RC_ALPHABET.indexOf(ch);
      if (d < 0) return null;
      v = v * 32 + d;
    }
    const b = v % 1024, a = Math.floor(v / 1024) % 32768, t = Math.floor(v / 33554432);
    const w = t ^ rcMask(a, b);
    // Latest minute with that remainder, allowing a day of student-clock drift.
    const limit = Math.floor((Date.now() - RC_EPOCH) / 60000) + 1440;
    let minute = limit - ((((limit - w) % RC_TIME_SPAN) + RC_TIME_SPAN) % RC_TIME_SPAN);
    if (rcSigA(name, score, minute) !== a) return null;
    const activityOk = rcNorm(activity) ? rcSigB(name, activity, minute) === b : null;
    return { when: new Date(RC_EPOCH + minute * 60000), activityOk };
  }

  function rcEsc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function rcGetName() {
    try { return (localStorage.getItem(RC_NAME_KEY) || '').trim(); } catch (e) { return ''; }
  }

  function rcStampInner(d) {
    const when = new Date(d.ms).toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    const meta = d.details.concat(when).map(rcEsc).join(' · ');
    const name = rcGetName();
    const id = name
      ? `<strong>${rcEsc(name)}</strong> <button type="button" class="rs-edit" onclick="rcChangeName()" title="Not you? Change the name">✎</button>` +
        (d.score ? ` · Score <strong>${rcEsc(d.score)}</strong>` : '') +
        ` · Check code <span class="rs-code">${rcMakeCode(name, d.score, d.activity, d.ms)}</span>`
      : `<label>Type your name to get your check code:</label> <input class="rs-name-input" maxlength="40" autocomplete="off" onkeydown="if(event.key==='Enter')rcSetName(this)"> <button type="button" class="rs-ok" onclick="rcSetName(this)">OK</button>`;
    return `<div class="rs-title">${rcEsc(d.title)}</div><div class="rs-meta">${meta}</div><div class="rs-id">${id}</div>` +
      `<button type="button" class="btn send-profe-btn" onclick="openSendProfe()">📤 Send to Profe</button>`;
  }

  // score: the result as shown on screen ("17/20", "0:42.3"); it is what the
  // check code locks in.
  function activityStampHtml(title, details, score) {
    const plain = s => {                  // strip tags + decode entities (inert template: nothing runs)
      const t = document.createElement('template');
      t.innerHTML = String(s == null ? '' : s);
      return t.content.textContent.replace(/\s+/g, ' ').trim();
    };
    const d = {
      title: plain(title),
      details: (details || []).map(plain).filter(Boolean),
      score: plain(score),
      ms: Date.now()
    };
    d.activity = d.title + ' ' + d.details.join(' ');
    // Latest result, for the Send to Profe picture/email (10b).
    LAST_RESULT = {
      title: d.title, details: d.details, score: d.score, activity: d.activity, ms: d.ms, at: new Date(d.ms),
      when: new Date(d.ms).toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
    };
    return `<div class="result-stamp" data-rc="${rcEsc(JSON.stringify(d))}">${rcStampInner(d)}</div>`;
  }

  function rcRefreshStamps() {
    document.querySelectorAll('.result-stamp[data-rc]').forEach(el => {
      try { el.innerHTML = rcStampInner(JSON.parse(el.dataset.rc)); } catch (e) {}
    });
  }
  function rcSetName(el) {
    const input = el.closest('.rs-id').querySelector('.rs-name-input');
    const name = (input && input.value || '').replace(/\s+/g, ' ').trim();
    if (!rcNorm(name)) { if (input) input.focus(); return; }
    try { localStorage.setItem(RC_NAME_KEY, name); } catch (e) {}
    rcRefreshStamps();
  }
  function rcChangeName() {
    try { localStorage.removeItem(RC_NAME_KEY); } catch (e) {}
    rcRefreshStamps();
    const input = document.querySelector('.result-stamp .rs-name-input');
    if (input) input.focus();
  }

  // Profe's checker page (#/revisar).
  function rcRunCheck() {
    const val = id => (document.getElementById(id) || {}).value || '';
    const out = document.getElementById('rc-result');
    if (!out) return;
    const name = val('rc-name'), score = val('rc-score'), code = val('rc-code'), activity = val('rc-activity');
    if (!rcNorm(name) || !rcDigits(score) || !rcNorm(code)) {
      out.className = 'rc-result';
      out.innerHTML = 'Fill in the name, score and check code.';
      return;
    }
    const r = rcCheckCode(code, name, score, activity);
    if (!r) {
      out.className = 'rc-result rc-bad';
      out.innerHTML = '❌ <strong>Doesn\'t match.</strong> The name or score was changed — or there\'s a typo. Double-check what you typed against the screenshot.';
      return;
    }
    const when = r.when.toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
    let html = `✅ <strong>Genuine.</strong> ${rcEsc(name)} · ${rcEsc(score)} · earned <strong>${rcEsc(when)}</strong>. Make sure the screenshot shows the same date and time.`;
    if (r.activityOk === true) html += '<br>✅ Activity and settings match too.';
    else if (r.activityOk === false) html += '<br>⚠️ Activity doesn\'t match what you typed — check the spelling, or the student may have changed the activity name or settings.';
    out.className = 'rc-result ' + (r.activityOk === false ? 'rc-warn' : 'rc-good');
    out.innerHTML = html;
  }
