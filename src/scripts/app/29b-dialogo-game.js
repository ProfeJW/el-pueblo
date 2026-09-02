  /* ============================================================================
     COMPLETA EL DIÁLOGO — finish the conversation
     ----------------------------------------------------------------------------
     A short exchange between two people with one line missing. Two ways to play,
     the same dialogues behind both:

       type  — the student writes the missing line
       mc    — four options, one best fit

     Content is the Preliminar list (the `saludos` deck): greetings, farewells,
     names, courtesy, and the formal/informal split. Every blank is answerable
     from that deck alone, so a student who has studied Preliminar can finish
     the game without meeting a word they have not seen.

     Each dialogue: { setting, lines[], answer, accept[], options[], note? }
       lines   — { who, text }; exactly one line contains '___'
       accept  — everything a typed answer may be, lowercased and unaccented
                 before comparing (see dialogoNormalize)
       options — the three wrong answers for multiple choice. They are chosen to
                 be plausible-but-wrong rather than silly, so picking the right
                 one means reading the exchange rather than eliminating jokes.
       note    — the "why" shown after answering, when there is something to say
     ============================================================================ */

  const DIALOGOS = [
    {
      setting: 'Two classmates pass in the hallway.',
      lines: [
        { who: 'Ana', text: '¡Hola! ¿Cómo estás?' },
        { who: 'Luis', text: '___, gracias. ¿Y tú?' },
        { who: 'Ana', text: 'Bien también.' }
      ],
      answer: 'Muy bien', accept: ['muy bien', 'bien'],
      options: ['De nada', 'Hasta luego', 'Mucho gusto']
    },
    {
      setting: 'A student greets the teacher at 8 in the morning.',
      lines: [
        { who: 'Estudiante', text: '___, profesora.' },
        { who: 'Profesora', text: 'Buenos días. Siéntate, por favor.' }
      ],
      answer: 'Buenos días', accept: ['buenos días'],
      options: ['Buenas noches', 'Buenas tardes', 'Hasta mañana'],
      note: 'Before noon it is buenos días — and it is plural, días, even for one morning.'
    },
    {
      setting: 'Meeting someone your own age for the first time.',
      lines: [
        { who: 'Marta', text: 'Hola, ¿cómo te llamas?' },
        { who: 'Diego', text: '___ Diego. ¿Y tú?' },
        { who: 'Marta', text: 'Soy Marta.' }
      ],
      answer: 'Me llamo', accept: ['me llamo'],
      options: ['Te llamas', 'Se llama', 'Le llamo'],
      note: 'Me llamo is literally "I call myself" — the reflexive, so me goes with llamo.'
    },
    {
      setting: 'A student is introduced to the new principal.',
      lines: [
        { who: 'Director', text: 'Buenas tardes. ¿___?' },
        { who: 'Estudiante', text: 'Me llamo Carolina Rivas.' }
      ],
      answer: 'Cómo se llama usted', accept: ['cómo se llama usted', 'cómo se llama', 'cuál es su nombre'],
      options: ['Cómo te llamas', 'De dónde eres', 'Cómo estás tú'],
      note: 'To an adult you have just met, use the formal usted — ¿cómo se llama usted?, never ¿cómo te llamas?'
    },
    {
      setting: 'Two people shake hands after being introduced.',
      lines: [
        { who: 'Sr. Ortiz', text: 'Mucho gusto.' },
        { who: 'Sra. Peña', text: '___.' }
      ],
      answer: 'Igualmente', accept: ['igualmente', 'mucho gusto', 'encantada'],
      options: ['De nada', 'Con permiso', 'Lo siento'],
      note: 'Igualmente — "likewise" — is the standard reply to mucho gusto.'
    },
    {
      setting: 'A woman introduces herself at a family party.',
      lines: [
        { who: 'Sofía', text: 'Hola, soy Sofía. ___ de conocerte.' },
        { who: 'Pablo', text: 'Igualmente, Sofía.' }
      ],
      answer: 'Encantada', accept: ['encantada'],
      options: ['Encantado', 'Bienvenida', 'Gracias'],
      note: 'Sofía is speaking about herself, so the adjective is feminine: encantada. A man would say encantado.'
    },
    {
      setting: 'Someone holds the door open for you.',
      lines: [
        { who: 'Tú', text: 'Muchas gracias.' },
        { who: 'Señor', text: '___.' }
      ],
      answer: 'De nada', accept: ['de nada'],
      options: ['Por favor', 'Lo siento', 'Con permiso']
    },
    {
      setting: 'Squeezing past people to reach your seat.',
      lines: [
        { who: 'Tú', text: '___, por favor.' },
        { who: 'Señora', text: 'Sí, claro. Pase.' }
      ],
      answer: 'Con permiso', accept: ['con permiso', 'perdón'],
      options: ['De nada', 'Mucho gusto', 'Hasta pronto'],
      note: 'Con permiso is for moving past someone. Perdón is for when you have already bumped into them.'
    },
    {
      setting: 'You arrive fifteen minutes late to class.',
      lines: [
        { who: 'Estudiante', text: '___, profesor. Perdí el autobús.' },
        { who: 'Profesor', text: 'Está bien. Siéntate.' }
      ],
      answer: 'Lo siento', accept: ['lo siento', 'perdón', 'perdón profesor'],
      options: ['De nada', 'Igualmente', 'Bienvenido']
    },
    {
      setting: 'A friend asks how you are, and honestly it has been a rough week.',
      lines: [
        { who: 'Carlos', text: '¿Qué tal?' },
        { who: 'Tú', text: '___. No dormí mucho anoche.' }
      ],
      answer: 'Más o menos', accept: ['más o menos', 'regular', 'mal'],
      options: ['Muy bien', 'Mucho gusto', 'Hasta luego'],
      note: 'Más o menos and regular both mean "so-so" — the honest middle between bien and mal.'
    },
    {
      setting: 'Leaving school on a Friday afternoon.',
      lines: [
        { who: 'Lucía', text: 'Bueno, me voy. ¡___!' },
        { who: 'Mateo', text: 'Hasta el lunes.' }
      ],
      answer: 'Hasta luego', accept: ['hasta luego', 'adiós', 'nos vemos', 'chao', 'hasta pronto'],
      options: ['Buenos días', 'Mucho gusto', 'Por favor']
    },
    {
      setting: 'Saying goodbye to a classmate you will see in the morning.',
      lines: [
        { who: 'Elena', text: 'Ya es tarde. ___.' },
        { who: 'Javier', text: 'Sí, nos vemos mañana.' }
      ],
      answer: 'Hasta mañana', accept: ['hasta mañana'],
      options: ['Hasta el año', 'Buenas tardes', 'De nada']
    },
    {
      setting: 'A new student joins the class in October.',
      lines: [
        { who: 'Profesora', text: '¡___ a nuestra clase, Miguel!' },
        { who: 'Miguel', text: 'Gracias, profesora.' }
      ],
      answer: 'Bienvenido', accept: ['bienvenido'],
      options: ['Bienvenida', 'Encantada', 'Igualmente'],
      note: 'Miguel is masculine, so bienvenido. For a girl it would be bienvenida.'
    },
    {
      setting: 'Two people meet on an exchange trip.',
      lines: [
        { who: 'Nora', text: '¿De dónde eres?' },
        { who: 'Tomás', text: '___ Guatemala. ¿Y tú?' },
        { who: 'Nora', text: 'Soy de Ohio.' }
      ],
      answer: 'Soy de', accept: ['soy de'],
      options: ['Eres de', 'Es de', 'Estoy de']
    },
    {
      setting: 'Ordering at a café.',
      lines: [
        { who: 'Cliente', text: 'Un café, ___.' },
        { who: 'Camarero', text: 'Enseguida.' }
      ],
      answer: 'por favor', accept: ['por favor'],
      options: ['de nada', 'gracias', 'lo siento']
    },
    {
      setting: 'Greeting a neighbour at nine in the evening.',
      lines: [
        { who: 'Tú', text: '___, señora Gómez.' },
        { who: 'Sra. Gómez', text: 'Buenas noches. Que descanses.' }
      ],
      answer: 'Buenas noches', accept: ['buenas noches'],
      options: ['Buenos días', 'Buenas tardes', 'Hasta pronto'],
      note: 'Buenas noches works as both "good evening" when you arrive and "good night" when you leave.'
    },
    {
      setting: 'Asking a friend how she is doing.',
      lines: [
        { who: 'Tú', text: '¿___?' },
        { who: 'Ana', text: 'Muy bien, gracias.' }
      ],
      answer: 'Cómo estás', accept: ['cómo estás', 'qué tal', 'cómo estás tú'],
      options: ['Cómo está usted', 'Cómo se llama', 'De dónde es usted'],
      note: 'A friend your age takes the informal tú form: ¿cómo estás?'
    },
    {
      setting: 'Asking your friend\'s grandmother the same question.',
      lines: [
        { who: 'Tú', text: 'Buenas tardes. ¿___?' },
        { who: 'Abuela', text: 'Muy bien, gracias, hijo.' }
      ],
      answer: 'Cómo está usted', accept: ['cómo está usted', 'cómo está'],
      options: ['Cómo estás', 'Qué tal tú', 'Cómo te llamas'],
      note: 'An older adult you do not know well takes usted — the same question, a different form.'
    },
    {
      setting: 'Someone thanks you for helping carry a box.',
      lines: [
        { who: 'Vecino', text: 'Gracias por la ayuda.' },
        { who: 'Tú', text: '___, no fue nada.' }
      ],
      answer: 'De nada', accept: ['de nada'],
      options: ['Por favor', 'Mucho gusto', 'Con permiso']
    },
    {
      setting: 'A friend says thank you for the birthday present.',
      lines: [
        { who: 'Rosa', text: '¡Gracias por el regalo!' },
        { who: 'Tú', text: '___. Me alegro de que te guste.' }
      ],
      answer: 'De nada', accept: ['de nada'],
      options: ['Por favor', 'Con permiso', 'Lo siento']
    },
    {
      setting: 'Answering the phone at three in the afternoon.',
      lines: [
        { who: 'Tú', text: '¿Aló? ___.' },
        { who: 'Voz', text: 'Buenas tardes, ¿está la señora Ruiz?' }
      ],
      answer: 'Buenas tardes', accept: ['buenas tardes'],
      options: ['Buenos días', 'Buenas noches', 'Hasta mañana'],
      note: 'From about noon until dark it is buenas tardes.'
    },
    {
      setting: 'You step on someone\'s foot on the bus.',
      lines: [
        { who: 'Tú', text: '¡Ay, ___!' },
        { who: 'Pasajera', text: 'No pasa nada.' }
      ],
      answer: 'perdón', accept: ['perdón', 'lo siento', 'disculpe'],
      options: ['de nada', 'por favor', 'igualmente'],
      note: 'Perdón is the quick apology for something that already happened.'
    },
    {
      setting: 'Two old friends run into each other downtown.',
      lines: [
        { who: 'Beto', text: '¡___! ¿Cómo estás?' },
        { who: 'Nico', text: '¡Beto! Muy bien, ¿y tú?' }
      ],
      answer: 'Hola', accept: ['hola'],
      options: ['Adiós', 'De nada', 'Bienvenido']
    },
    {
      setting: 'Your teacher asks how you are, formally.',
      lines: [
        { who: 'Profesora', text: '¿Cómo está usted hoy?' },
        { who: 'Estudiante', text: 'Bien, gracias. ¿___?' }
      ],
      answer: 'Y usted', accept: ['y usted'],
      options: ['Y tú', 'Y él', 'Y ustedes'],
      note: 'She used usted with you, so you return it: ¿y usted? Matching the level of formality is the whole point.'
    },
    {
      setting: 'A friend your age asks how you are.',
      lines: [
        { who: 'Ana', text: 'Estoy muy bien. ¿___?' },
        { who: 'Tú', text: 'Yo también, gracias.' }
      ],
      answer: 'Y tú', accept: ['y tú'],
      options: ['Y usted', 'Y ustedes', 'Y ella']
    },
    {
      setting: 'Addressing an older woman you do not know, in a shop.',
      lines: [
        { who: 'Tú', text: 'Disculpe, ___, ¿dónde está la salida?' },
        { who: 'Señora', text: 'Al final del pasillo.' }
      ],
      answer: 'señora', accept: ['señora'],
      options: ['señorita', 'señor', 'joven'],
      note: 'Señora for an adult woman, señorita for a young one, señor for a man.'
    },
    {
      setting: 'Greeting the man who runs the corner shop.',
      lines: [
        { who: 'Tú', text: 'Buenos días, ___ Ramírez.' },
        { who: 'Sr. Ramírez', text: 'Buenos días, ¿qué necesitas?' }
      ],
      answer: 'señor', accept: ['señor'],
      options: ['señora', 'señorita', 'profesora']
    },
    {
      setting: 'A girl arrives at her host family\'s house in Spain.',
      lines: [
        { who: 'Madre', text: '¡___, Emma! Pasa, pasa.' },
        { who: 'Emma', text: 'Gracias, señora.' }
      ],
      answer: 'Bienvenida', accept: ['bienvenida'],
      options: ['Bienvenido', 'Encantado', 'Hasta pronto'],
      note: 'Emma is feminine, so bienvenida — the ending agrees with the person being welcomed.'
    },
    {
      setting: 'Two students meet at a summer exchange in Lima.',
      lines: [
        { who: 'Kai', text: 'Soy de Cincinnati. ¿Y tú? ¿___?' },
        { who: 'Ximena', text: 'Soy de Arequipa.' }
      ],
      answer: 'De dónde eres', accept: ['de dónde eres', 'de dónde eres tú'],
      options: ['Cómo te llamas', 'Cómo estás', 'Qué tal'],
      note: 'Eres is the tú form — right for someone your own age.'
    },
    {
      setting: 'A man is introduced to his friend\'s mother.',
      lines: [
        { who: 'Sra. Vidal', text: 'Mucho gusto, Andrés.' },
        { who: 'Andrés', text: '___, señora.' }
      ],
      answer: 'Encantado', accept: ['encantado', 'igualmente', 'mucho gusto'],
      options: ['Encantada', 'Bienvenida', 'De nada'],
      note: 'Andrés is speaking about himself, so encantado.'
    },
    {
      setting: 'Wrapping up a video call with a cousin abroad.',
      lines: [
        { who: 'Tú', text: 'Bueno, tengo que irme. ¡___!' },
        { who: 'Prima', text: '¡Chao! Escríbeme.' }
      ],
      answer: 'Nos vemos', accept: ['nos vemos', 'chao', 'hasta pronto', 'adiós', 'hasta luego'],
      options: ['Buenos días', 'Con permiso', 'Mucho gusto']
    },
    {
      setting: 'Asking a classmate to repeat something.',
      lines: [
        { who: 'Tú', text: 'Otra vez, ___.' },
        { who: 'Compañera', text: 'Claro. Dije que la tarea es para el viernes.' }
      ],
      answer: 'por favor', accept: ['por favor'],
      options: ['de nada', 'lo siento', 'igualmente']
    },
    {
      setting: 'Someone asks how your weekend was and it was fine, nothing special.',
      lines: [
        { who: 'Diego', text: '¿Qué tal el fin de semana?' },
        { who: 'Tú', text: '___. Descansé un poco.' }
      ],
      answer: 'Regular', accept: ['regular', 'más o menos', 'bien'],
      options: ['Encantado', 'Con permiso', 'Bienvenido'],
      note: 'Regular here does not mean "regular" in English — it means so-so.'
    },
    {
      setting: 'Leaving a shop where you did not buy anything.',
      lines: [
        { who: 'Dependiente', text: '¿Necesita algo más?' },
        { who: 'Tú', text: 'No, ___. Hasta luego.' }
      ],
      answer: 'gracias', accept: ['gracias', 'muchas gracias'],
      options: ['de nada', 'por favor', 'perdón']
    },
    {
      setting: 'Introducing your friend to your grandmother.',
      lines: [
        { who: 'Tú', text: 'Abuela, ___ mi amiga Lucía.' },
        { who: 'Abuela', text: 'Mucho gusto, Lucía.' }
      ],
      answer: 'te presento a', accept: ['te presento a', 'te presento'],
      options: ['me llamo', 'soy de', 'encantada'],
      note: 'Te presento a… — "let me introduce you to…" — is how introductions are actually made.'
    },
    {
      setting: 'Introducing yourself to a teacher on the first day.',
      lines: [
        { who: 'Estudiante', text: 'Buenos días. Me llamo Rosa Delgado.' },
        { who: 'Profesor', text: '___, Rosa. Soy el señor Ramos.' }
      ],
      answer: 'Mucho gusto', accept: ['mucho gusto', 'encantado'],
      options: ['De nada', 'Hasta luego', 'Más o menos']
    }
  ];

  // 20 questions a round, drawn from a larger pool so two plays are not the same
  // set. Defined once: the tiers below and every "/N" label read from it.
  const DIALOGO_ROUNDS = 20;

  let dialogoState = null;

  function dialogoGameId() { return dialogoState.mode === 'mc' ? 'dialogo-mc' : 'dialogo-type'; }

  // Compare forgivingly: case, accents, surrounding punctuation and stray
  // spacing should never be the reason a student is marked wrong on a greeting.
  function dialogoNormalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[¿?¡!.,;:…]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function startDialogoGame(mode) {
    dialogoState = {
      mode,
      items: DIALOGOS.slice().sort(() => Math.random() - 0.5).slice(0, DIALOGO_ROUNDS),
      round: 0, score: 0, history: [], answered: false,
      // Set only by renderDialogoResults, and only after the last round. A game
      // abandoned partway — refreshed, closed, navigated away from — leaves this
      // false and nothing is written: no best score, no Lucas. The state lives in
      // memory alone, so a reload starts over from zero by construction.
      finished: false
    };
    renderDialogoIntro();
  }

  function renderDialogoIntro() {
    const container = document.getElementById('game-detail-content');
    if (!container || !dialogoState) return;
    const isMc = dialogoState.mode === 'mc';
    const best = getGameBestScore(dialogoGameId());
    container.innerHTML = `
      <a href="#/juegos" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to games</a>
      <div class="match-intro">
        <h2 style="font-family:'DM Serif Display',serif;font-size:32px;font-weight:400;margin-bottom:8px;">Completa el <em style="color:var(--rojo);font-style:italic;">diálogo</em></h2>
        <p style="color:var(--ink-soft);font-size:15px;margin-bottom:6px;">
          A short conversation with one line missing. ${isMc
            ? 'Four options — choose the one that actually fits.'
            : 'Type the line that belongs in the blank.'}
          ${DIALOGO_ROUNDS} rounds.${best > 0 ? ' Your best: ' + best + '/' + DIALOGO_ROUNDS + '.' : ''}
        </p>
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:20px;">
          Everything comes from the <strong>Preliminar</strong> list — greetings, farewells, names and courtesy.
          ${isMc ? '' : 'Accents and capital letters are not graded, so answer the way you would speak.'}
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn primary" onclick="beginDialogoRound()">Empezar</button>
          <button class="btn" onclick="startDialogoGame('${isMc ? 'type' : 'mc'}')">Switch to ${isMc ? 'typing' : 'multiple choice'}</button>
        </div>
      </div>
    `;
  }

  function beginDialogoRound() {
    if (!dialogoState) return;
    dialogoState.round = 0;
    dialogoState.score = 0;
    dialogoState.history = [];
    dialogoState.items = DIALOGOS.slice().sort(() => Math.random() - 0.5).slice(0, DIALOGO_ROUNDS);
    renderDialogoRound();
  }

  // The exchange, with the gap shown as a blank or as the student's answer.
  function dialogoLinesHtml(d, filledWith) {
    return d.lines.map(l => {
      const gap = filledWith
        ? '<span style="color:var(--ocre);font-weight:600;">' + escapeHtml(filledWith) + '</span>'
        : '<span style="letter-spacing:0.08em;opacity:0.75;">_____</span>';
      const text = escapeHtml(l.text).replace('___', gap);
      return `
        <div style="display:grid;grid-template-columns:88px 1fr;gap:10px;padding:7px 0;text-align:left;">
          <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.7;padding-top:4px;">${escapeHtml(l.who)}</span>
          <span style="font-size:17px;line-height:1.45;">${text}</span>
        </div>`;
    }).join('');
  }

  function renderDialogoRound() {
    const ds = dialogoState;
    const container = document.getElementById('game-detail-content');
    if (!ds || !container) return;
    if (ds.round >= ds.items.length) { renderDialogoResults(); return; }

    const d = ds.items[ds.round];
    ds.answered = false;

    let answerArea;
    if (ds.mode === 'mc') {
      const opts = [d.answer, ...d.options].sort(() => Math.random() - 0.5);
      answerArea = `
        <div id="dialogoOptions" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:14px;">
          ${opts.map(o => `
            <button class="btn" style="border-color:var(--paper);color:var(--paper);text-align:center;padding:14px 16px;font-size:15px;line-height:1.3;"
                    onclick="pickDialogoOption(this, ${o === d.answer ? 'true' : 'false'})">${escapeHtml(o)}</button>
          `).join('')}
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>`;
    } else {
      answerArea = `
        <div class="game-input-row" style="margin-top:14px;">
          <input type="text" class="game-input" id="dialogoInput" autocomplete="off" autocapitalize="off" spellcheck="false"
                 placeholder="Escribe la línea que falta…"
                 onkeypress="if(event.key==='Enter') submitDialogoAnswer()">
        </div>
        <div class="game-feedback" id="gameFeedback" role="status" aria-live="polite">&nbsp;</div>
        <div style="margin-top:24px;">
          <button class="btn primary" style="border-color:var(--paper);background:var(--paper);color:var(--ink);" onclick="submitDialogoAnswer()">Submit ↵</button>
          <button class="btn" style="border-color:var(--paper);color:var(--paper);margin-left:8px;" onclick="skipDialogoRound()">Skip</button>
        </div>`;
    }

    container.innerHTML = `
      <div class="game-prompt-card">
        <div class="game-progress">Round <strong>${ds.round + 1}</strong> / ${ds.items.length} · Score: <strong>${ds.score}</strong></div>
        <div class="game-prompt-label">${escapeHtml(d.setting)}</div>
        <div style="max-width:520px;margin:14px auto 0;">${dialogoLinesHtml(d, null)}</div>
        ${answerArea}
      </div>
    `;
    if (ds.mode !== 'mc') {
      setTimeout(() => { const i = document.getElementById('dialogoInput'); if (i) i.focus(); }, 50);
    }
  }

  // Shared ending for both modes: score it, show the finished exchange, move on.
  function finishDialogoRound(isCorrect, userAnswer) {
    const ds = dialogoState;
    const d = ds.items[ds.round];
    if (isCorrect) ds.score++;
    ds.history.push({
      isCorrect,
      prompt: d.setting,
      userAnswer: userAnswer,
      correctAnswer: d.answer
    });

    const fb = document.getElementById('gameFeedback');
    if (fb) {
      fb.innerHTML = isCorrect
        ? '<span style="color:var(--verde);">✅ ¡Correcto!</span>' + (d.note ? ' <span style="opacity:0.8;">' + escapeHtml(d.note) + '</span>' : '')
        : '<span style="color:var(--rojo);">❌ ' + escapeHtml(d.answer) + '</span>' + (d.note ? ' <span style="opacity:0.8;">' + escapeHtml(d.note) + '</span>' : '');
    }
    // Show the completed exchange so the right answer is read in context.
    const box = document.querySelector('#game-detail-content .game-prompt-card > div[style*="max-width:520px"]');
    if (box) box.innerHTML = dialogoLinesHtml(d, d.answer);

    ds.answered = true;
    setTimeout(() => { ds.round++; renderDialogoRound(); }, isCorrect ? 1400 : 2600);
  }

  function pickDialogoOption(btn, isCorrect) {
    const ds = dialogoState;
    if (!ds || ds.answered) return;
    document.querySelectorAll('#dialogoOptions button').forEach(b => { b.disabled = true; });
    btn.style.borderColor = isCorrect ? 'var(--verde)' : 'var(--rojo)';
    finishDialogoRound(!!isCorrect, btn.textContent.trim());
  }

  function submitDialogoAnswer() {
    const ds = dialogoState;
    if (!ds || ds.answered) return;
    const input = document.getElementById('dialogoInput');
    if (!input) return;
    const raw = input.value.trim();
    if (!raw) return;
    const d = ds.items[ds.round];
    const guess = dialogoNormalize(raw);
    const ok = d.accept.some(a => dialogoNormalize(a) === guess) || dialogoNormalize(d.answer) === guess;
    input.disabled = true;
    finishDialogoRound(ok, raw);
  }

  function skipDialogoRound() {
    const ds = dialogoState;
    if (!ds || ds.answered) return;
    const input = document.getElementById('dialogoInput');
    if (input) input.disabled = true;
    finishDialogoRound(false, '');
  }

  function renderDialogoResults() {
    const ds = dialogoState;
    const container = document.getElementById('game-detail-content');
    if (!ds || !container) return;
    const gameId = dialogoGameId();
    const score = ds.score;
    const baseTier = GAMES[gameId].maxReward;

    // The same tiers as the other games, read as a share of the round so they
    // keep their meaning now that a round is 20 rather than 10.
    const pct = score / DIALOGO_ROUNDS;
    let reward = 0, verdict = '';
    if (score === DIALOGO_ROUNDS) { reward = baseTier; verdict = 'Perfect — flawless game'; }
    else if (pct >= 0.9) { reward = Math.floor(baseTier * 0.7); verdict = 'Excellent'; }
    else if (pct >= 0.7) { reward = Math.floor(baseTier * 0.5); verdict = 'Solid effort'; }
    else if (pct >= 0.5) { reward = Math.floor(baseTier * 0.25); verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try again — you need half of them to earn'; }

    // Only a finished game is worth anything. Reaching here means the final
    // round was answered; a game left partway wrote nothing at all.
    ds.finished = true;
    const isNewBest = score > getGameBestScore(gameId);
    if (isNewBest && reward > 0) awardCoins(reward, verdict + ' (' + score + '/' + DIALOGO_ROUNDS + ') — new best!');
    setGameBestScore(gameId, score);
    saveState();

    const reviewHtml = ds.history.map(h => `
      <div style="display:grid;grid-template-columns:28px 1fr 1.4fr;gap:8px;padding:8px 0;border-bottom:1px dotted var(--line);align-items:center;text-align:left;font-size:14px;">
        <span>${h.isCorrect ? '✅' : '❌'}</span>
        <span style="color:var(--ink-soft);">${escapeHtml(h.prompt)}</span>
        <span>${h.isCorrect
          ? escapeHtml(h.correctAnswer)
          : '<s style="opacity:0.55;">' + escapeHtml(h.userAnswer || '—') + '</s> → <strong>' + escapeHtml(h.correctAnswer) + '</strong>'}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="game-results">
        <h3>${score}/${DIALOGO_ROUNDS} — <em>${verdict}</em></h3>
        <p style="color:var(--ink-soft);font-size:14px;margin-bottom:8px;">Completa el diálogo · ${ds.mode === 'mc' ? 'multiple choice' : 'typed'} · Preliminar</p>
        ${isNewBest && reward > 0
          ? `<p style="color:var(--verde);font-weight:600;margin-bottom:16px;">+${reward} Lucas — new personal best!</p>`
          : `<p style="color:var(--ink-soft);font-size:13px;margin-bottom:16px;">${reward > 0 ? 'Lucas are only awarded when you beat your best score (' + getGameBestScore(gameId) + '/' + DIALOGO_ROUNDS + ').' : verdict}</p>`}
        <div style="margin:16px 0;">${reviewHtml}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;">
          <button class="btn primary" onclick="beginDialogoRound()">Play again</button>
          <button class="btn" onclick="startDialogoGame('${ds.mode === 'mc' ? 'type' : 'mc'}')">Try ${ds.mode === 'mc' ? 'typing' : 'multiple choice'}</button>
          <a href="#/juegos" class="btn" style="text-decoration:none;">All games</a>
        </div>
      </div>
    `;
  }
