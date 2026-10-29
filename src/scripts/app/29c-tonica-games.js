  // ============================================================================
  // SÍLABA TÓNICA — three games for the stress lesson (lesson id 'silaba-tonica')
  // ----------------------------------------------------------------------------
  //   tonica-id      ¿Dónde está el golpe?  Find the stressed syllable, name the
  //                  word type (aguda / llana / esdrújula / sobresdrújula), and
  //                  decide whether it needs a tilde.
  //   tonica-escucha Escucha el golpe. Hear a word, pick the stressed syllable or
  //                  which written word it was (papa / papá, término / terminó).
  //   tonica-voz     Lee en voz alta. Read a word aloud; the browser's speech
  //                  recognition listens, or a classmate checks you.
  //
  // These run their own flow (like the diálogo game) because the shared game
  // engine compares answers with accents and capitals stripped, and here the
  // accent IS the answer.
  //
  // Word data: syllables split by "-", the stressed one marked with "*".
  // ============================================================================

  const TONICA_WORDS = [
    // agudas
    ['ca-*fé', 'coffee'], ['pa-*pá', 'dad'], ['so-*fá', 'sofa'], ['ja-*bón', 'soap'],
    ['can-*ción', 'song'], ['a-*vión', 'airplane'], ['co-ra-*zón', 'heart'], ['ciu-*dad', 'city'],
    ['re-*loj', 'watch, clock'], ['pa-*red', 'wall'], ['ha-*blar', 'to speak'], ['es-pa-*ñol', 'Spanish'],
    ['a-*quí', 'here'], ['co-*mió', 'he/she ate'], ['fe-*liz', 'happy'], ['a-*mor', 'love'],
    ['pa-*pel', 'paper'], ['ra-*tón', 'mouse'], ['in-*glés', 'English'], ['des-*pués', 'after'],
    ['tam-*bién', 'also'], ['a-de-*más', 'besides'], ['ver-*dad', 'truth'], ['li-*món', 'lemon'],
    ['jar-*dín', 'garden'], ['sa-*lud', 'health'],
    // llanas
    ['*ca-sa', 'house'], ['*me-sa', 'table'], ['*li-bro', 'book'], ['za-*pa-tos', 'shoes'],
    ['*ha-blan', 'they speak'], ['ca-*mi-no', 'path'], ['es-*cue-la', 'school'], ['*ár-bol', 'tree'],
    ['*lá-piz', 'pencil'], ['*fá-cil', 'easy'], ['*dó-lar', 'dollar'], ['a-*zú-car', 'sugar'],
    ['*cés-ped', 'lawn'], ['*ú-til', 'useful'], ['*mó-vil', 'cell phone'], ['*cár-cel', 'jail'],
    ['a-*mi-go', 'friend'], ['ven-*ta-na', 'window'], ['*jo-ven', 'young'], ['e-*xa-men', 'test'],
    ['*bai-la', 'he/she dances'], ['Gon-*zá-lez', '(last name)'], ['Fer-*nán-dez', '(last name)'], ['*lu-nes', 'Monday'],
    // esdrújulas
    ['*mé-di-co', 'doctor'], ['*rá-pi-do', 'fast'], ['*mú-si-ca', 'music'], ['*sá-ba-do', 'Saturday'],
    ['*plá-ta-no', 'banana'], ['*pá-ja-ro', 'bird'], ['*nú-me-ro', 'number'], ['te-*lé-fo-no', 'telephone'],
    ['*Mé-xi-co', 'Mexico'], ['*lám-pa-ra', 'lamp'], ['*có-mo-do', 'comfortable'], ['*jó-ve-nes', 'young people'],
    ['e-*xá-me-nes', 'tests'], ['A-*mé-ri-ca', 'America'], ['*miér-co-les', 'Wednesday'], ['*brú-ju-la', 'compass'],
    ['*ár-bo-les', 'trees'], ['*fá-bri-ca', 'factory'], ['mur-*cié-la-go', 'bat'],
    // sobresdrújulas
    ['*dí-ga-me-lo', 'tell it to me'], ['*cóm-pra-se-lo', 'buy it for him/her'], ['ex-*plí-ca-se-lo', 'explain it to him/her'],
    ['*dé-ja-me-lo', 'leave it to me'], ['*cuén-ta-me-lo', 'tell me about it'], ['*trái-ga-me-lo', 'bring it to me']
  ];

  // Same letters, different stress, different word. Used by the listening and
  // speaking games — the stress is the only thing that tells them apart.
  const TONICA_PAIRS = [
    [['*pa-pa', 'potato'], ['pa-*pá', 'dad']],
    [['*es-ta', 'this'], ['es-*tá', 'is']],
    [['*ha-blo', 'I speak'], ['ha-*bló', 'he/she spoke']],
    [['*can-to', 'I sing'], ['can-*tó', 'he/she sang']],
    [['tra-*ba-jo', 'I work'], ['tra-ba-*jó', 'he/she worked']],
    [['*tér-mi-no', 'term, end'], ['ter-*mi-no', 'I finish'], ['ter-mi-*nó', 'he/she finished']],
    [['*pú-bli-co', 'public, audience'], ['pu-*bli-co', 'I publish'], ['pu-bli-*có', 'he/she published']],
    [['*prác-ti-co', 'practical'], ['prac-*ti-co', 'I practice'], ['prac-ti-*có', 'he/she practiced']],
    [['*cé-le-bre', 'famous'], ['ce-*le-bre', 'that he/she celebrate'], ['ce-le-*bré', 'I celebrated']],
    [['*á-ni-mo', 'spirit, mood'], ['a-*ni-mo', 'I cheer on'], ['a-ni-*mó', 'he/she cheered on']],
    [['*sá-ba-na', 'bed sheet'], ['sa-*ba-na', 'savanna']]
  ];

  const TONICA_TYPES = ['aguda', 'llana', 'esdrújula', 'sobresdrújula'];
  const TONICA_ROUNDS = { 'tonica-id': 20, 'tonica-escucha': 15, 'tonica-voz': 10 };

  // '*ca-sa' → { word:'casa', syl:['ca','sa'], stress:0, type:'llana', ... }
  function tonicaParse(entry) {
    const parts = entry[0].split('-');
    const stress = parts.findIndex(p => p.charAt(0) === '*');
    const syl = parts.map(p => p.replace('*', ''));
    const fromEnd = syl.length - 1 - stress;
    return {
      word: syl.join(''),
      syl, stress,
      gloss: entry[1],
      type: TONICA_TYPES[Math.min(fromEnd, 3)]
    };
  }

  function tonicaStrip(s) {
    // Remove written accents but keep ñ and ü.
    return String(s).normalize('NFD').replace(/[́]/g, '').normalize('NFC');
  }
  function tonicaHasTilde(s) { return /[áéíóú]/i.test(s); }

  // Syllables with one highlighted: ca · MI · no
  function tonicaSylHtml(w, idx, opts) {
    opts = opts || {};
    return w.syl.map((s, i) => {
      const t = opts.strip ? tonicaStrip(s) : s;
      return i === idx
        ? '<strong style="color:var(--ocre);">' + escapeHtml(t.toUpperCase()) + '</strong>'
        : '<span>' + escapeHtml(t.toLowerCase()) + '</span>';
    }).join('<span style="opacity:0.45;"> · </span>');
  }
  function tonicaSylPlain(w, idx, strip) {
    return w.syl.map((s, i) => { const t = strip ? tonicaStrip(s) : s; return i === idx ? t.toUpperCase() : t.toLowerCase(); }).join('-');
  }
  const TONICA_ORD = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
  function tonicaFromEndLabel(n) {
    return ['the last syllable', 'the second-to-last syllable', 'the third-to-last syllable', 'the fourth-to-last syllable'][Math.min(n, 3)];
  }

  // Why a word does or doesn't carry a tilde — the answer-key sentence.
  function tonicaWhy(w) {
    const last = tonicaStrip(w.word).slice(-1).toLowerCase();
    const endsVNS = /[aeiouns]/.test(last);
    const ending = endsVNS ? 'ends in a vowel, -n or -s' : 'ends in -' + last;
    const has = tonicaHasTilde(w.word);
    if (w.type === 'aguda') return 'Aguda that ' + ending + (has ? ' → it needs a tilde.' : ' → no tilde.');
    if (w.type === 'llana') return 'Llana that ' + ending + (has ? ' → it needs a tilde.' : ' → no tilde.');
    return (w.type === 'esdrújula' ? 'Esdrújula' : 'Sobresdrújula') + ' → always a tilde.';
  }

  // Put a tilde on the stressed syllable's vowel (for the wrong option in a
  // "does it need a tilde?" round). Strong vowel first, else the last i/u.
  function tonicaAddTilde(w) {
    const map = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú', A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú' };
    return w.syl.map((s, i) => {
      if (i !== w.stress) return s;
      let pos = s.search(/[aeoAEO]/);
      if (pos < 0) { const m = s.match(/[iuIU](?!.*[iuIU])/); pos = m ? m.index : -1; }
      return pos < 0 ? s : s.slice(0, pos) + map[s[pos]] + s.slice(pos + 1);
    }).join('');
  }

  function tonicaShuffle(a) { return a.slice().sort(() => Math.random() - 0.5); }
  function tonicaPick(a) { return a[Math.floor(Math.random() * a.length)]; }

  // ---------------------------------------------------------------------------
  // Round builders. Each returns { label, display, choices:[{html,text}], answer
  // (index into choices), answerText, why, speak?, review }.
  // ---------------------------------------------------------------------------
  function tonicaRoundStress(w) {
    return {
      label: 'Which syllable is stressed?',
      display: escapeHtml(w.word),
      choices: w.syl.map((s, i) => ({ html: tonicaSylHtml(w, i), text: tonicaSylPlain(w, i) })),
      answer: w.stress,
      answerText: tonicaSylPlain(w, w.stress),
      why: w.word + ' (' + w.gloss + ') — stress on ' + tonicaFromEndLabel(w.syl.length - 1 - w.stress) + '.',
      review: w.word
    };
  }
  function tonicaRoundType(w) {
    return {
      label: 'The stress is shown. What kind of word is it?',
      display: tonicaSylHtml(w, w.stress),
      choices: TONICA_TYPES.map(t => ({ html: escapeHtml(t), text: t })),
      answer: TONICA_TYPES.indexOf(w.type),
      answerText: w.type,
      why: 'Stress on ' + tonicaFromEndLabel(w.syl.length - 1 - w.stress) + ' → ' + w.type + '.',
      review: tonicaSylPlain(w, w.stress)
    };
  }
  function tonicaRoundTilde(w) {
    const has = tonicaHasTilde(w.word);
    const right = w.word;
    const wrong = has ? tonicaStrip(w.word) : tonicaAddTilde(w);
    const opts = tonicaShuffle([right, wrong]);
    return {
      label: 'The stressed syllable is in CAPITALS. Which spelling is right?',
      display: tonicaSylHtml(w, w.stress, { strip: true }),
      choices: opts.map(o => ({ html: escapeHtml(o), text: o })),
      answer: opts.indexOf(right),
      answerText: right,
      why: tonicaWhy(w),
      review: tonicaSylPlain(w, w.stress, true)
    };
  }

  function tonicaBuildIdRounds(n) {
    const words = tonicaShuffle(TONICA_WORDS).slice(0, n).map(tonicaParse);
    const kinds = [tonicaRoundStress, tonicaRoundType, tonicaRoundTilde];
    return words.map((w, i) => kinds[i % 3](w)).sort(() => Math.random() - 0.5);
  }

  function tonicaBuildListenRounds(n) {
    const rounds = [];
    const pairs = tonicaShuffle(TONICA_PAIRS);
    const words = tonicaShuffle(TONICA_WORDS).map(tonicaParse).filter(w => w.syl.length > 1);
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0 && pairs.length) {
        const set = pairs.pop().map(tonicaParse);
        const target = tonicaPick(set);
        const opts = tonicaShuffle(set);
        rounds.push({
          label: 'Listen. Which word did you hear?',
          display: '🔊',
          choices: opts.map(o => ({ html: escapeHtml(o.word) + '<br><span style="font-size:12px;opacity:0.7;">' + escapeHtml(o.gloss) + '</span>', text: o.word })),
          answer: opts.indexOf(target),
          answerText: target.word,
          why: set.map(o => tonicaSylPlain(o, o.stress) + ' = ' + o.gloss).join(' · '),
          speak: target.word,
          review: '🔊 ' + target.word
        });
      } else {
        const w = words.pop();
        rounds.push({
          label: 'Listen. Which syllable gets the stress?',
          display: w.syl.map(s => escapeHtml(tonicaStrip(s).toLowerCase())).join('<span style="opacity:0.45;"> · </span>'),
          choices: w.syl.map((s, k) => ({ html: tonicaSylHtml(w, k, { strip: true }), text: tonicaSylPlain(w, k, true) })),
          answer: w.stress,
          answerText: tonicaSylPlain(w, w.stress),
          why: w.word + ' (' + w.gloss + ') — ' + w.type + '.',
          speak: w.word,
          review: '🔊 ' + w.word
        });
      }
    }
    return rounds.sort(() => Math.random() - 0.5);
  }

  function tonicaBuildVoiceItems(n) {
    // Half from the same-letters pairs (the stress decides the word), half single words.
    const fromPairs = tonicaShuffle(TONICA_PAIRS).slice(0, Math.ceil(n / 2)).map(set => tonicaParse(tonicaPick(set)));
    const singles = tonicaShuffle(TONICA_WORDS).map(tonicaParse).filter(w => w.syl.length > 1).slice(0, n - fromPairs.length);
    return tonicaShuffle(fromPairs.concat(singles));
  }

  // ---------------------------------------------------------------------------
  // Shared state + flow
  // ---------------------------------------------------------------------------
  let tonicaState = null;

  const TONICA_META = {
    'tonica-id': {
      title: '¿Dónde está el <em style="color:var(--rojo);font-style:italic;">golpe</em>?',
      plain: '¿Dónde está el golpe?',
      intro: 'Three kinds of questions, mixed: find the stressed syllable, name the word type (aguda, llana, esdrújula, sobresdrújula), and decide whether the word needs a tilde.'
    },
    'tonica-escucha': {
      title: 'Escucha el <em style="color:var(--rojo);font-style:italic;">golpe</em>',
      plain: 'Escucha el golpe',
      intro: 'Turn your sound on. You hear a word and either pick the stressed syllable or pick which word it was — <em>papa</em> or <em>papá</em>, <em>término</em> or <em>terminó</em>. Tap 🔊 to hear it again, 🐢 to hear it slowly.'
    },
    'tonica-voz': {
      title: 'Lee en voz <em style="color:var(--rojo);font-style:italic;">alta</em>',
      plain: 'Lee en voz alta',
      intro: 'Read each word out loud and hit the stressed syllable. Half of them are words that change meaning with the stress, like <em>papa</em> / <em>papá</em>.'
    }
  };

  // A round's delayed "next" only runs if that same game is still on screen —
  // leaving mid-round (or starting over) must not draw onto another page.
  function tonicaAlive(ts) {
    return ts && tonicaState === ts && location.hash.indexOf('#/game/' + ts.gameId) === 0;
  }

  function tonicaSpeechRecCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function startTonicaGame(gameId) {
    const container = document.getElementById('game-detail-content');
    if (!container) return;
    tonicaStopRec();
    tonicaState = null;
    const meta = TONICA_META[gameId];
    const rounds = TONICA_ROUNDS[gameId];
    const best = getGameBestScore(gameId);
    let buttons;
    if (gameId === 'tonica-voz') {
      const hasMic = !!tonicaSpeechRecCtor();
      buttons = `
        <div class="match-deck-grid">
          <button class="match-deck-btn" ${hasMic ? '' : 'disabled style="opacity:0.5;cursor:not-allowed;"'} onclick="beginTonicaGame('tonica-voz', 'mic')">
            <span class="mdb-label">🎙️ The computer listens</span>
            <span class="mdb-best" style="text-transform:none;letter-spacing:0;">${hasMic
              ? 'Tap the mic and read the word. Uses your browser\'s speech recognition (works best in Chrome).'
              : 'This browser can\'t listen. Try Chrome, or play with a partner.'}</span>
          </button>
          <button class="match-deck-btn" onclick="beginTonicaGame('tonica-voz', 'partner')">
            <span class="mdb-label">👥 A partner checks you</span>
            <span class="mdb-best" style="text-transform:none;letter-spacing:0;">One reads, one listens. The listener sees the stressed syllable and taps ✓ or ✗. Practice only — the score isn't saved.</span>
          </button>
        </div>`;
    } else {
      buttons = `<button class="btn primary" onclick="beginTonicaGame('${gameId}')">Empezar</button>`;
    }
    container.innerHTML = `
      <div class="match-intro">
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">${meta.title}</h2>
        <p style="color:var(--ink-soft);font-size:15px;margin-bottom:6px;">${meta.intro}</p>
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:20px;">${rounds} rounds.${best > 0 ? ' Your best: ' + best + '/' + rounds + '.' : ''}
          Need a refresher? <a href="#/lesson/silaba-tonica" class="aviso-link">La sílaba tónica</a>.
          ${gameId === 'tonica-id' ? '' : 'Voice hard to understand? <a href="javascript:void(0)" class="aviso-link" onclick="openVoicePicker()">Choose another voice 🔊</a>.'}</p>
        ${buttons}
      </div>`;
  }

  function beginTonicaGame(gameId, mode) {
    const n = TONICA_ROUNDS[gameId];
    tonicaState = {
      gameId, mode: mode || null, round: 0, score: 0, history: [], answered: false, tries: 0,
      items: gameId === 'tonica-id' ? tonicaBuildIdRounds(n)
           : gameId === 'tonica-escucha' ? tonicaBuildListenRounds(n)
           : tonicaBuildVoiceItems(n)
    };
    if (gameId === 'tonica-voz') renderTonicaVoiceRound(); else renderTonicaRound();
  }

  function tonicaSay(slow) {
    const ts = tonicaState;
    if (!ts) return;
    const item = ts.items[ts.round];
    const text = item && (item.speak || item.word);
    if (!text || typeof speakSpanish !== 'function') return;
    const keep = listenSpeed;
    listenSpeed = slow ? 0.55 : 0.85;
    speakSpanish(text);
    listenSpeed = keep;
  }

  // ---- Choice rounds (tonica-id, tonica-escucha) ----------------------------
  function renderTonicaRound() {
    const ts = tonicaState;
    const container = document.getElementById('game-detail-content');
    if (!ts || !container) return;
    if (ts.round >= ts.items.length) { renderTonicaResults(); return; }
    const r = ts.items[ts.round];
    ts.answered = false;
    const audio = r.speak ? `
      <div style="display:flex;gap:10px;justify-content:center;margin:4px 0 14px;">
        <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaSay(false)">🔊 Again</button>
        <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaSay(true)">🐢 Slow</button>
      </div>
      <div style="margin:-8px 0 10px;">${voiceLinkHtml()}</div>` : '';
    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">Round <strong>${ts.round + 1}</strong> / ${ts.items.length} · Score: <strong>${ts.score}</strong></div>
        <div class="game-prompt-label">${r.label}</div>
        <div class="game-prompt-display">${r.display}</div>
        ${audio}
        <div id="tonicaChoices" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:8px;">
          ${r.choices.map((c, i) => `
            <button type="button" class="game-choice" data-i="${i}"
              style="border:1px solid var(--paper);background:transparent;color:var(--paper);font-size:18px;padding:12px 20px;min-width:84px;border-radius:3px;cursor:pointer;line-height:1.3;"
              onclick="pickTonicaChoice(${i})">${c.html}</button>`).join('')}
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:20px;">
          <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="pickTonicaChoice(-1)">Skip</button>
        </div>
      </div>`;
    if (r.speak) setTimeout(() => { if (tonicaAlive(ts)) tonicaSay(false); }, 250);
  }

  function pickTonicaChoice(i) {
    const ts = tonicaState;
    if (!ts || ts.answered) return;
    ts.answered = true;
    const r = ts.items[ts.round];
    const ok = i === r.answer;
    if (ok) ts.score++;
    document.querySelectorAll('#tonicaChoices .game-choice').forEach(b => {
      b.disabled = true;
      const k = Number(b.getAttribute('data-i'));
      if (k === r.answer) { b.style.background = 'var(--verde)'; b.style.borderColor = 'var(--verde)'; b.style.color = '#fff'; }
      else if (k === i) { b.style.background = 'var(--rojo)'; b.style.borderColor = 'var(--rojo)'; b.style.color = '#fff'; }
    });
    const fb = document.getElementById('gameFeedback');
    if (fb) {
      fb.innerHTML = (ok ? '✓ ¡Correcto!' : '✗ ' + escapeHtml(r.answerText))
        + ' <span style="opacity:0.85;">— ' + escapeHtml(r.why) + '</span>';
      fb.className = 'game-feedback ' + (ok ? 'correct' : 'wrong');
    }
    ts.history.push({
      isCorrect: ok,
      prompt: r.review,
      userAnswer: i < 0 ? '(skipped)' : r.choices[i].text,
      correctAnswer: r.answerText
    });
    setTimeout(() => { if (!tonicaAlive(ts)) return; ts.round++; renderTonicaRound(); }, ok ? 1500 : 3200);
  }

  // ---- Read-aloud rounds (tonica-voz) ---------------------------------------
  let tonicaRec = null;

  function tonicaStopRec() {
    if (tonicaRec) { try { tonicaRec.abort(); } catch (e) {} tonicaRec = null; }
  }

  function renderTonicaVoiceRound() {
    const ts = tonicaState;
    const container = document.getElementById('game-detail-content');
    if (!ts || !container) return;
    tonicaStopRec();
    if (ts.round >= ts.items.length) { renderTonicaResults(); return; }
    const w = ts.items[ts.round];
    ts.answered = false;
    ts.tries = 0;
    const partner = ts.mode === 'partner';
    const controls = partner
      ? `<div style="margin-top:14px;padding:14px;border:1px dashed var(--paper);border-radius:4px;max-width:420px;margin-left:auto;margin-right:auto;">
           <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.75;margin-bottom:6px;">Listener — the stress should land here</div>
           <div style="font-size:24px;">${tonicaSylHtml(w, w.stress)}</div>
           <div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap;">
             <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaSay(false)">🔊 Model</button>
             <button class="btn" style="background:var(--verde);border-color:var(--verde);color:#fff;" onclick="tonicaVoiceResult(true, '✓ partner')">✓ Right syllable</button>
             <button class="btn" style="background:var(--rojo);border-color:var(--rojo);color:#fff;" onclick="tonicaVoiceResult(false, '✗ partner')">✗ Not yet</button>
           </div>
         </div>`
      : `<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px;">
           <button class="btn primary" id="tonicaMicBtn" style="border-color:var(--paper);background:var(--paper);color:var(--ink);font-size:17px;padding:12px 22px;" onclick="tonicaListen()">🎙️ Tap and read</button>
           <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaShowSyl()">💡 Syllables</button>
           <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaSay(false)">🔊 Model</button>
         </div>
         <div id="tonicaSyl" style="display:none;font-size:22px;margin-top:12px;">${tonicaSylHtml(w, w.stress)}</div>`;
    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">Round <strong>${ts.round + 1}</strong> / ${ts.items.length}${partner ? ' · Partner mode' : ''} · Score: <strong>${ts.score}</strong></div>
        <div class="game-prompt-label">${partner ? 'Reader: say this word out loud' : 'Read this word out loud'}</div>
        <div class="game-prompt-display">${escapeHtml(w.word)}</div>
        <div style="opacity:0.75;margin:-10px 0 10px;font-size:14px;">${escapeHtml(w.gloss)}</div>
        ${controls}
        <div style="margin-top:8px;">${voiceLinkHtml()}</div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:18px;">
          <button class="btn" style="border-color:var(--paper);color:var(--paper);" onclick="tonicaVoiceResult(false, '(skipped)')">Skip</button>
        </div>
      </div>`;
  }

  function tonicaShowSyl() {
    const el = document.getElementById('tonicaSyl');
    if (el) el.style.display = '';
  }

  // Lowercase, drop punctuation, keep accents (the accent is what we grade).
  function tonicaVoiceNorm(s) {
    return String(s || '').toLowerCase().replace(/[.,;:!?¡¿"']/g, '').replace(/\s+/g, ' ').trim();
  }

  function tonicaListen() {
    const ts = tonicaState;
    const Ctor = tonicaSpeechRecCtor();
    if (!ts || ts.answered || !Ctor) return;
    tonicaStopRec();
    const w = ts.items[ts.round];
    const btn = document.getElementById('tonicaMicBtn');
    const fb = document.getElementById('gameFeedback');
    const rec = new Ctor();
    tonicaRec = rec;
    rec.lang = 'es-MX';
    rec.interimResults = false;
    rec.maxAlternatives = 5;
    let heard = false;
    if (btn) { btn.textContent = '👂 Listening…'; btn.disabled = true; }
    if (fb) { fb.innerHTML = 'Say it now.'; fb.className = 'game-feedback'; }

    rec.onresult = e => {
      heard = true;
      const alts = Array.from(e.results[0] || []).map(a => tonicaVoiceNorm(a.transcript));
      const target = tonicaVoiceNorm(w.word);
      const plainTarget = tonicaStrip(target);
      // Any alternative counts. A one-word answer may come back inside a short
      // phrase ("la música"), so look for the word on its own too.
      const has = (a, t) => a === t || (' ' + a + ' ').includes(' ' + t + ' ');
      const exact = alts.some(a => has(a, target));
      const sameLetters = alts.find(a => has(tonicaStrip(a), plainTarget));
      ts.tries++;
      if (exact) { tonicaVoiceResult(true, alts[0]); return; }
      const msg = sameLetters
        ? 'I heard <strong>' + escapeHtml(sameLetters) + '</strong> — close! Check which syllable you hit: ' + tonicaSylHtml(w, w.stress) + '.'
        : 'I heard <strong>' + escapeHtml(alts[0] || '…') + '</strong>. Try again.';
      if (ts.tries >= 3) {
        tonicaVoiceResult(false, alts[0] || '—', sameLetters ? '✗ ' + msg
          : '✗ I heard <strong>' + escapeHtml(alts[0] || '…') + '</strong>. The word was ' + tonicaSylHtml(w, w.stress) + '.');
        return;
      }
      if (fb) { fb.innerHTML = msg + ' <span style="opacity:0.75;">(' + (3 - ts.tries) + ' tr' + (3 - ts.tries === 1 ? 'y' : 'ies') + ' left)</span>'; fb.className = 'game-feedback wrong'; }
    };
    rec.onerror = e => {
      if (!fb) return;
      fb.className = 'game-feedback wrong';
      fb.innerHTML = e.error === 'not-allowed' || e.error === 'service-not-allowed'
        ? 'The microphone is blocked. Allow it in the browser, or go back and play with a partner.'
        : e.error === 'no-speech' ? 'I didn\'t hear anything. Tap the mic and try again.'
        : 'Something went wrong with the mic (' + escapeHtml(e.error) + '). Try again.';
    };
    rec.onend = () => {
      if (tonicaRec === rec) tonicaRec = null;
      const b = document.getElementById('tonicaMicBtn');
      if (b && !ts.answered) { b.textContent = '🎙️ Tap and read'; b.disabled = false; }
      if (!heard && fb && fb.innerHTML === 'Say it now.') fb.innerHTML = 'I didn\'t catch that. Tap the mic and try again.';
    };
    try { rec.start(); } catch (e) { if (btn) { btn.textContent = '🎙️ Tap and read'; btn.disabled = false; } }
  }

  function tonicaVoiceResult(ok, said, msg) {
    const ts = tonicaState;
    if (!ts || ts.answered) return;
    ts.answered = true;
    tonicaStopRec();
    const w = ts.items[ts.round];
    if (ok) ts.score++;
    const fb = document.getElementById('gameFeedback');
    if (fb) {
      fb.innerHTML = ok
        ? '✓ ¡Muy bien! ' + tonicaSylHtml(w, w.stress) + ' <span style="opacity:0.85;">— ' + escapeHtml(w.type) + '</span>'
        : (msg || '✗ The stress goes here: ' + tonicaSylHtml(w, w.stress) + '.');
      fb.className = 'game-feedback ' + (ok ? 'correct' : 'wrong');
    }
    document.querySelectorAll('#game-detail-content .game-prompt-card button').forEach(b => { b.disabled = true; });
    ts.history.push({ isCorrect: ok, prompt: w.word, userAnswer: said, correctAnswer: tonicaSylPlain(w, w.stress) });
    setTimeout(() => { if (!tonicaAlive(ts)) return; ts.round++; renderTonicaVoiceRound(); }, ok ? 1600 : 3200);
  }

  // ---- Results --------------------------------------------------------------
  function renderTonicaResults() {
    const ts = tonicaState;
    const container = document.getElementById('game-detail-content');
    if (!ts || !container) return;
    tonicaStopRec();
    const gameId = ts.gameId;
    const total = ts.items.length;
    const score = ts.score;
    const meta = TONICA_META[gameId];
    const practiceOnly = ts.mode === 'partner';
    const baseTier = GAMES[gameId].maxReward;
    const pct = score / total;
    let reward = 0, verdict = '';
    if (score === total) { reward = baseTier; verdict = 'Perfect — flawless game'; }
    else if (pct >= 0.9) { reward = Math.floor(baseTier * 0.7); verdict = 'Excellent'; }
    else if (pct >= 0.7) { reward = Math.floor(baseTier * 0.5); verdict = 'Solid effort'; }
    else if (pct >= 0.5) { reward = Math.floor(baseTier * 0.25); verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try again — you need half of them to earn'; }
    if (practiceOnly) reward = 0;

    const isNewBest = !practiceOnly && score > getGameBestScore(gameId);
    if (isNewBest && reward > 0) awardCoins(reward, verdict + ' (' + score + '/' + total + ') — new best!');
    if (!practiceOnly) setGameBestScore(gameId, score);
    saveState();

    const details = [ts.mode === 'mic' ? 'speech recognition' : ts.mode === 'partner' ? 'partner checked' : 'La sílaba tónica'];
    const reviewHtml = ts.history.map(h => `
      <div style="display:grid;grid-template-columns:28px 1fr 1.4fr;gap:8px;padding:8px 0;border-bottom:1px dotted var(--line);align-items:center;text-align:left;font-size:14px;">
        <span>${h.isCorrect ? '✅' : '❌'}</span>
        <span style="color:var(--ink-soft);">${escapeHtml(h.prompt)}</span>
        <span>${h.isCorrect
          ? escapeHtml(h.correctAnswer)
          : '<s style="opacity:0.55;">' + escapeHtml(h.userAnswer || '—') + '</s> → <strong>' + escapeHtml(h.correctAnswer) + '</strong>'}</span>
      </div>`).join('');

    const again = gameId === 'tonica-voz'
      ? `beginTonicaGame('tonica-voz', '${ts.mode}')`
      : `beginTonicaGame('${gameId}')`;
    container.innerHTML = `
      <div class="game-results">
        ${practiceOnly ? '' : activityStampHtml(meta.plain, details, score + '/' + total)}
        <h3>${score}/${total} — <em>${verdict}</em></h3>
        ${practiceOnly
          ? '<p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">Partner mode is practice — swap roles and go again.</p>'
          : isNewBest && reward > 0
            ? `<p style="color:var(--verde);font-weight:600;margin-bottom:16px;">+${reward} Lucas — new personal best!</p>`
            : `<p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">${reward > 0 ? 'Lucas are only awarded when you beat your best score (' + getGameBestScore(gameId) + '/' + total + ').' : verdict}</p>`}
        <div style="margin:16px 0;">${reviewHtml}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;">
          <button class="btn primary" onclick="${again}">Play again</button>
          <a href="#/lesson/silaba-tonica" class="btn" style="text-decoration:none;">Back to the lesson</a>
          <a href="#/juegos" class="btn" style="text-decoration:none;">All games</a>
        </div>
      </div>`;
  }
