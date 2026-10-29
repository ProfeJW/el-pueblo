  // ============================================================================
  // DELETREO — listen to a word spelled out letter by letter, type it exactly
  // ----------------------------------------------------------------------------
  // The voice says the word, spells it with Spanish letter names (be, ce, de,
  // hache, jota, eñe… "e con tilde"), then says it again. The student types it.
  // Graded exactly: every letter, the ñ, and the accent marks have to be right —
  // that's the point of spelling. Letters right but an accent off gets told so.
  //
  // Own flow (like the sílaba tónica games) because the shared engine ignores
  // accents. Letter names come from ABC_LETTERS (29-games.js).
  // ============================================================================

  const DELETREO_ROUNDS = 15;

  // [word, gloss] — chosen for the letters that trip spellers up: silent h,
  // ll, rr, ñ, qu/gu, j vs g, b vs v, z vs c, ü, and accent marks.
  const DELETREO_WORDS = [
    ['casa', 'house'], ['perro', 'dog'], ['gato', 'cat'], ['hola', 'hello'],
    ['hermano', 'brother'], ['hijo', 'son'], ['huevo', 'egg'], ['ahora', 'now'],
    ['llave', 'key'], ['calle', 'street'], ['lluvia', 'rain'], ['pollo', 'chicken'],
    ['carro', 'car'], ['guitarra', 'guitar'], ['ratón', 'mouse'], ['niño', 'child'],
    ['año', 'year'], ['mañana', 'tomorrow, morning'], ['España', 'Spain'], ['señora', 'Mrs., lady'],
    ['pequeño', 'small'], ['queso', 'cheese'], ['quince', 'fifteen'], ['guerra', 'war'],
    ['juguete', 'toy'], ['jirafa', 'giraffe'], ['gente', 'people'], ['girasol', 'sunflower'],
    ['vaca', 'cow'], ['verde', 'green'], ['abuela', 'grandmother'], ['vivir', 'to live'],
    ['zapato', 'shoe'], ['cielo', 'sky'], ['azul', 'blue'], ['lápiz', 'pencil'],
    ['árbol', 'tree'], ['café', 'coffee'], ['también', 'also'], ['música', 'music'],
    ['teléfono', 'telephone'], ['sábado', 'Saturday'], ['miércoles', 'Wednesday'], ['inglés', 'English'],
    ['pingüino', 'penguin'], ['vergüenza', 'embarrassment'], ['examen', 'test'], ['México', 'Mexico'],
    ['taxi', 'taxi'], ['playa', 'beach'], ['ayer', 'yesterday'], ['joven', 'young'],
    ['canción', 'song'], ['corazón', 'heart'], ['avión', 'airplane'], ['fácil', 'easy'],
    ['difícil', 'difficult'], ['escuela', 'school'], ['ciudad', 'city'], ['reloj', 'watch, clock'],
    ['plátano', 'banana'], ['murciélago', 'bat'], ['bicicleta', 'bicycle'], ['ventana', 'window']
  ];

  const DELETREO_ACCENT_NAME = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

  // One spoken chunk per letter: "ce", "a", "efe", "e con tilde", "u con diéresis".
  function deletreoLetterNames(word) {
    const names = {};
    ABC_LETTERS.forEach(l => { names[l.L.toLowerCase()] = l.name; });
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
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    return voices.find(v => v.lang && v.lang.startsWith('es')) || null;
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
    const voice = deletreoVoice();
    const slow = mode === 'slow';
    const say = (text, rate, onstart) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      u.rate = rate;
      if (voice) u.voice = voice;
      if (onstart) u.onstart = () => { if (myId === deletreoSpeakId) onstart(); };
      synth.speak(u);
    };
    const letters = deletreoLetterNames(item[0]);
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
          Spelling counts: every letter, the <strong>ñ</strong>, and the accent marks. When you hear
          "<em>e con tilde</em>", type <strong>é</strong>. ${DELETREO_ROUNDS} rounds.${best > 0 ? ' Your best: ' + best + '/' + DELETREO_ROUNDS + '.' : ''}
          Need the letter names? <a href="#/abecedario" class="aviso-link">El abecedario</a>.
        </p>
        ${noVoice
          ? '<p style="color:var(--rojo);font-size:14px;">This browser can\'t speak, so this game won\'t work here. Try Chrome.</p>'
          : '<button class="btn primary" onclick="beginDeletreoGame()">Empezar</button>'}
      </div>`;
  }

  function beginDeletreoGame() {
    deletreoState = {
      items: DELETREO_WORDS.slice().sort(() => Math.random() - 0.5).slice(0, DELETREO_ROUNDS),
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
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:20px;">
          <button class="btn primary" style="border-color:var(--paper);background:var(--paper);color:var(--ink);" onclick="submitDeletreo()">Submit ↵</button>
          <button class="btn" style="${tiny}margin-left:8px;" onclick="submitDeletreo(true)">Skip</button>
        </div>
      </div>`;
    setTimeout(() => { const i = document.getElementById('deletreoInput'); if (i) i.focus(); }, 50);
    setTimeout(() => { if (deletreoAlive(ds) && !ds.answered) deletreoPlay('all'); }, 300);
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
    const ok = !skip && deletreoNorm(raw) === deletreoNorm(word);
    const accentOnly = !skip && !ok && deletreoBare(raw) === deletreoBare(word);
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
        ? '✓ ¡Perfecto! <strong>' + escapeHtml(word) + '</strong> <span style="opacity:0.85;">— ' + escapeHtml(gloss) + '</span>'
        : accentOnly
          ? '✗ Almost — the letters are right, but check the accent marks: <strong>' + escapeHtml(word) + '</strong> <span style="opacity:0.85;">— ' + escapeHtml(gloss) + '</span>'
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
