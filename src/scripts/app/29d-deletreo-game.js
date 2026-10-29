  // ============================================================================
  // DELETREO — listen to a word spelled out letter by letter, type it exactly
  // ----------------------------------------------------------------------------
  // The voice says the word, spells it with Spanish letter names (be, ce, de,
  // hache, jota, eñe… "e con tilde"), then says it again. The student types it.
  // Graded on the letters, including ñ. Accent marks (á é í ó ú ü) don't count
  // either way; a right answer without them shows the accented spelling.
  // n for ñ is wrong, and gets its own message.
  //
  // Own flow (like the sílaba tónica games) because the shared engine ignores
  // accents. Letter names come from ABC_LETTERS (29-games.js).
  // ============================================================================

  const DELETREO_ROUNDS = 15;

  // Word bank: ~50 everyday words. Common enough that students know them,
  // and between them they cover the letters spellers trip on: silent h, ll,
  // rr, ñ, qu, j/g, b/v, z/c, plus a few accented words.
  const DELETREO_WORDS = [
    ['casa', 'house'], ['perro', 'dog'], ['gato', 'cat'], ['hola', 'hello'],
    ['gracias', 'thank you'], ['amigo', 'friend'], ['familia', 'family'], ['escuela', 'school'],
    ['agua', 'water'], ['comida', 'food'], ['libro', 'book'], ['mesa', 'table'],
    ['silla', 'chair'], ['puerta', 'door'], ['ventana', 'window'], ['hermano', 'brother'],
    ['madre', 'mother'], ['padre', 'father'], ['niño', 'child'], ['año', 'year'],
    ['mañana', 'tomorrow, morning'], ['noche', 'night'], ['día', 'day'], ['hoy', 'today'],
    ['ayer', 'yesterday'], ['calle', 'street'], ['llave', 'key'], ['pollo', 'chicken'],
    ['carro', 'car'], ['rojo', 'red'], ['verde', 'green'], ['azul', 'blue'],
    ['blanco', 'white'], ['grande', 'big'], ['pequeño', 'small'], ['bueno', 'good'],
    ['feliz', 'happy'], ['queso', 'cheese'], ['gente', 'people'], ['trabajo', 'work, job'],
    ['juego', 'game'], ['playa', 'beach'], ['ciudad', 'city'], ['zapato', 'shoe'],
    ['cabeza', 'head'], ['mano', 'hand'], ['corazón', 'heart'], ['música', 'music'],
    ['café', 'coffee'], ['tiempo', 'time, weather'], ['hora', 'hour'], ['cielo', 'sky']
  ];

  // A shuffled pile that games deal from in turn, so the whole bank comes up
  // before any word repeats, and no two games come in the same order. When the
  // pile runs out it is reshuffled, never starting the way the last pile did.
  let deletreoPile = [];
  let deletreoLastPile = null;
  function deletreoShuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  }
  function deletreoDeal(n) {
    const out = [];
    while (out.length < n) {
      if (!deletreoPile.length) {
        let next;
        do { next = deletreoShuffle(DELETREO_WORDS); }
        while (deletreoLastPile && next[0][0] === deletreoLastPile[0][0]);
        deletreoLastPile = next;
        deletreoPile = next.slice();
      }
      const w = deletreoPile.shift();
      // Across a reshuffle, don't let a word show up twice in one game.
      if (!out.some(o => o[0] === w[0])) out.push(w);
    }
    return out;
  }

  const DELETREO_ACCENT_NAME = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

  // One spoken chunk per letter: "ce", "a", "efe", "e con tilde", "u con diéresis".
  // spoken=true gives what the voice should say (G is fed as 'je' so TTS
  // says /xe/, not a hard-g 'gay'); otherwise the written letter names.
  function deletreoLetterNames(word, spoken) {
    const names = {};
    ABC_LETTERS.forEach(l => { names[l.L.toLowerCase()] = spoken && l.speak ? l.speak : l.name; });
    return Array.from(word.toLowerCase()).map(ch => {
      if (DELETREO_ACCENT_NAME[ch]) return DELETREO_ACCENT_NAME[ch] + ' con tilde';
      if (ch === 'ü') return 'u con diéresis';
      return names[ch] || ch;
    });
  }

  // Lowercase + trim + drop stray punctuation, but keep every accent and ñ.
  function deletreoNorm(s) {
    return String(s || '').normalize('NFC').toLowerCase().replace(/[.,;:!?¡¿"'\s]/g, '');
  }
  function deletreoBare(s) {
    return deletreoNorm(s).normalize('NFD').replace(/[́̈]/g, '').normalize('NFC');
  }

  let deletreoState = null;
  let deletreoSpeakId = 0; // bumps on every new playback so a stale queue stops

  function deletreoAlive(ds) {
    return ds && deletreoState === ds && location.hash.indexOf('#/game/deletreo') === 0;
  }

  function deletreoVoice() {
    return pickSpanishVoice(); // Latin American first, Peruvian if available
  }

  // Say the word, spell it, say it again. Each letter is its own utterance so
  // the pacing is even and the matching blank lights up as it is spoken.
  function deletreoPlay(mode) {
    const ds = deletreoState;
    if (!ds || !('speechSynthesis' in window)) return;
    const item = ds.items[ds.round];
    if (!item) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const myId = ++deletreoSpeakId;
    const pick = deletreoVoice();
    const slow = mode === 'slow';
    const say = (text, rate, onstart) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = pick.lang;
      u.rate = rate;
      if (pick.voice) u.voice = pick.voice;
      if (onstart) u.onstart = () => { if (myId === deletreoSpeakId) onstart(); };
      synth.speak(u);
    };
    const letters = deletreoLetterNames(item[0], true);
    const mark = i => {
      document.querySelectorAll('#deletreoBlanks span').forEach((b, k) => {
        b.style.borderBottomColor = k === i ? 'var(--ocre)' : '';
        b.style.opacity = k <= i ? '1' : '0.55';
      });
    };
    if (mode !== 'spell') say(item[0], 0.85, () => mark(-1));
    if (mode !== 'word') {
      letters.forEach((name, i) => say(name, slow ? 0.6 : 0.8, () => mark(i)));
      say(item[0], 0.85, () => mark(-1));
    }
  }

  function startDeletreoGame() {
    const container = document.getElementById('game-detail-content');
    if (!container) return;
    deletreoState = null;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    const best = getGameBestScore('deletreo');
    const noVoice = !('speechSynthesis' in window);
    container.innerHTML = `
      <div class="match-intro">
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">Deletreo · <em style="color:var(--rojo);font-style:italic;">escucha y escribe</em></h2>
        <p style="color:var(--ink-soft);font-size:15px;margin-bottom:6px;">
          Turn your sound on. You'll hear a word, then hear it <strong>spelled out letter by letter</strong> —
          <em>be, ce, hache, jota, eñe…</em> — then the word again. Type it exactly.
        </p>
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:20px;">
          Accent marks (á, é, í, ó, ú) won't count against you. <strong>The only one that does is the ñ</strong> —
          typing n instead of ñ is wrong. Use the <strong>ñ</strong> button if your keyboard doesn't have one. ${DELETREO_ROUNDS} rounds.${best > 0 ? ' Your best: ' + best + '/' + DELETREO_ROUNDS + '.' : ''}
          Need the letter names? <a href="#/abecedario" class="aviso-link">El abecedario</a>.
        </p>
        ${noVoice
          ? '<p style="color:var(--rojo);font-size:14px;">This browser can\'t speak, so this game won\'t work here. Try Chrome.</p>'
          : '<button class="btn primary" onclick="beginDeletreoGame()">Empezar</button>'}
      </div>`;
  }

  function beginDeletreoGame() {
    deletreoState = {
      items: deletreoDeal(DELETREO_ROUNDS),
      round: 0, score: 0, history: [], answered: false
    };
    renderDeletreoRound();
  }

  function renderDeletreoRound() {
    const ds = deletreoState;
    const container = document.getElementById('game-detail-content');
    if (!ds || !container) return;
    if (ds.round >= ds.items.length) { renderDeletreoResults(); return; }
    ds.answered = false;
    const word = ds.items[ds.round][0];
    const blanks = Array.from(word).map(() =>
      '<span style="display:inline-block;width:22px;margin:0 3px;border-bottom:3px solid var(--paper);opacity:0.55;height:30px;"></span>'
    ).join('');
    const tiny = 'border-color:var(--paper);color:var(--paper);';
    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">Round <strong>${ds.round + 1}</strong> / ${ds.items.length} · Score: <strong>${ds.score}</strong></div>
        <div class="game-prompt-label">Listen to the spelling, then type the word</div>
        <div id="deletreoBlanks" style="margin:18px 0 8px;" aria-label="${word.length} letters">${blanks}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:12px;opacity:0.7;margin-bottom:14px;">${word.length} letters</div>
        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px;">
          <button class="btn" style="${tiny}" onclick="deletreoPlay('all')">🔊 Play again</button>
          <button class="btn" style="${tiny}" onclick="deletreoPlay('slow')">🐢 Spell it slowly</button>
          <button class="btn" style="${tiny}" onclick="deletreoPlay('word')">🗣️ Just the word</button>
        </div>
        <div class="game-input-row">
          <input type="text" class="game-input" id="deletreoInput" autocomplete="off" autocapitalize="off" spellcheck="false"
                 placeholder="Escribe la palabra…" onkeypress="if(event.key==='Enter') submitDeletreo()">
        </div>
        <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:10px;">
          <button type="button" class="btn" style="${tiny}padding:6px 18px;font-size:20px;text-transform:none;letter-spacing:0;font-weight:600;"
                  onmousedown="event.preventDefault()" onclick="deletreoInsert('ñ')" title="Add ñ">ñ</button>
          ${['á', 'é', 'í', 'ó', 'ú', 'ü'].map(c =>
            `<button type="button" class="btn" style="${tiny}padding:6px 12px;font-size:16px;min-width:40px;text-transform:none;letter-spacing:0;opacity:0.8;"
                     onmousedown="event.preventDefault()" onclick="deletreoInsert('${c}')">${c}</button>`).join('')}
        </div>
        <div style="font-size:13px;opacity:0.8;margin-top:8px;">
          Accent marks won't count against you. <strong>Only the ñ does</strong> — n instead of ñ is wrong.
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:20px;">
          <button class="btn primary" style="border-color:var(--paper);background:var(--paper);color:var(--ink);" onclick="submitDeletreo()">Submit ↵</button>
          <button class="btn" style="${tiny}margin-left:8px;" onclick="submitDeletreo(true)">Skip</button>
        </div>
      </div>`;
    setTimeout(() => { const i = document.getElementById('deletreoInput'); if (i) i.focus(); }, 50);
    setTimeout(() => { if (deletreoAlive(ds) && !ds.answered) deletreoPlay('all'); }, 300);
  }

  // On-screen letter buttons. mousedown is cancelled on the button so the
  // input keeps its cursor; the letter goes where the student was typing.
  function deletreoInsert(ch) {
    const i = document.getElementById('deletreoInput');
    if (!i || i.disabled) return;
    const a = i.selectionStart != null ? i.selectionStart : i.value.length;
    const b = i.selectionEnd != null ? i.selectionEnd : i.value.length;
    i.value = i.value.slice(0, a) + ch + i.value.slice(b);
    i.focus();
    i.setSelectionRange(a + 1, a + 1);
  }

  function submitDeletreo(skip) {
    const ds = deletreoState;
    if (!ds || ds.answered) return;
    const input = document.getElementById('deletreoInput');
    if (!input) return;
    const raw = input.value.trim();
    if (!skip && !raw) return;
    ds.answered = true;
    if ('speechSynthesis' in window) { deletreoSpeakId++; window.speechSynthesis.cancel(); }
    const [word, gloss] = ds.items[ds.round];
    const ok = !skip && deletreoBare(raw) === deletreoBare(word);
    const exact = ok && deletreoNorm(raw) === deletreoNorm(word);
    const missedEnye = !skip && !ok && deletreoBare(raw).replace(/ñ/g, 'n') === deletreoBare(word).replace(/ñ/g, 'n');
    if (ok) ds.score++;
    input.disabled = true;
    input.classList.add(ok ? 'correct' : 'wrong');

    // Show the word in the blanks, letter by letter.
    const box = document.getElementById('deletreoBlanks');
    if (box) box.innerHTML = Array.from(word).map(ch =>
      '<span style="display:inline-block;min-width:22px;margin:0 3px;border-bottom:3px solid ' + (ok ? 'var(--verde)' : 'var(--ocre)') + ';font-size:28px;">' + escapeHtml(ch) + '</span>'
    ).join('');

    const fb = document.getElementById('gameFeedback');
    if (fb) {
      fb.className = 'game-feedback ' + (ok ? 'correct' : 'wrong');
      fb.innerHTML = ok
        ? (exact ? '✓ ¡Perfecto! ' : '✓ ¡Correcto! With its accents: ') + '<strong>' + escapeHtml(word) + '</strong> <span style="opacity:0.85;">— ' + escapeHtml(gloss) + '</span>'
        : missedEnye
          ? '✗ Almost — that needs an <strong>ñ</strong> (eñe), not an n: <strong>' + escapeHtml(word) + '</strong> <span style="opacity:0.85;">— ' + escapeHtml(gloss) + '</span>'
          : '✗ <strong>' + escapeHtml(word) + '</strong> <span style="opacity:0.85;">— ' + escapeHtml(gloss) + ' · ' + escapeHtml(deletreoLetterNames(word).join(', ')) + '</span>';
    }
    ds.history.push({ isCorrect: ok, prompt: '🔊 ' + gloss, userAnswer: skip ? '(skipped)' : raw, correctAnswer: word });
    setTimeout(() => { if (!deletreoAlive(ds)) return; ds.round++; renderDeletreoRound(); }, ok ? 1600 : 3600);
  }

  function renderDeletreoResults() {
    const ds = deletreoState;
    const container = document.getElementById('game-detail-content');
    if (!ds || !container) return;
    const total = ds.items.length;
    const score = ds.score;
    const baseTier = GAMES['deletreo'].maxReward;
    const pct = score / total;
    let reward = 0, verdict = '';
    if (score === total) { reward = baseTier; verdict = 'Perfect — flawless game'; }
    else if (pct >= 0.9) { reward = Math.floor(baseTier * 0.7); verdict = 'Excellent'; }
    else if (pct >= 0.7) { reward = Math.floor(baseTier * 0.5); verdict = 'Solid effort'; }
    else if (pct >= 0.5) { reward = Math.floor(baseTier * 0.25); verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try again — you need half of them to earn'; }

    const isNewBest = score > getGameBestScore('deletreo');
    if (isNewBest && reward > 0) awardCoins(reward, verdict + ' (' + score + '/' + total + ') — new best!');
    setGameBestScore('deletreo', score);
    saveState();

    const reviewHtml = ds.history.map(h => `
      <div style="display:grid;grid-template-columns:28px 1fr 1.4fr;gap:8px;padding:8px 0;border-bottom:1px dotted var(--line);align-items:center;text-align:left;font-size:14px;">
        <span>${h.isCorrect ? '✅' : '❌'}</span>
        <span style="color:var(--ink-soft);">${escapeHtml(h.prompt)}</span>
        <span>${h.isCorrect
          ? escapeHtml(h.correctAnswer)
          : '<s style="opacity:0.55;">' + escapeHtml(h.userAnswer || '—') + '</s> → <strong>' + escapeHtml(h.correctAnswer) + '</strong>'}</span>
      </div>`).join('');

    container.innerHTML = `
      <div class="game-results">
        ${activityStampHtml('Deletreo', ['listen and spell'], score + '/' + total)}
        <h3>${score}/${total} — <em>${verdict}</em></h3>
        ${isNewBest && reward > 0
          ? `<p style="color:var(--verde);font-weight:600;margin-bottom:16px;">+${reward} Lucas — new personal best!</p>`
          : `<p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">${reward > 0 ? 'Lucas are only awarded when you beat your best score (' + getGameBestScore('deletreo') + '/' + total + ').' : verdict}</p>`}
        <div style="margin:16px 0;">${reviewHtml}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;">
          <button class="btn primary" onclick="beginDeletreoGame()">Play again</button>
          <a href="#/abecedario" class="btn" style="text-decoration:none;">El abecedario</a>
          <a href="#/juegos" class="btn" style="text-decoration:none;">All games</a>
        </div>
      </div>`;
  }
