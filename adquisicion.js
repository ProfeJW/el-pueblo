/* ==========================================================================
 * El Pueblo — Actividades de adquisición (HL + L2)  ·  companion file
 * --------------------------------------------------------------------------
 * Loaded as a separate file (like practice-games.js / grammar-games.js) to
 * keep index.html under GitHub's ~1.99 MB single-file limit.
 *
 * Seven research-based acquisition activities for a mixed class of heritage
 * (HL) speakers and second-language (L2) learners. Each activity has TWO
 * versions and a global Español / English switch: every direction, step,
 * rubric and prompt can be read in either language. The Spanish material
 * students analyze (speeches, expressions, verb forms, surveys) stays in
 * Spanish in both modes. Work can be downloaded/copied and turned in through
 * Google Classroom / Canvas (no backend required).
 *
 * Research basis cited inline per activity:
 *   Bayona (2023) · Vana (2023) · Bernate (2023) · White & Mandell (2023) ·
 *   Gámez & Reyna (2023)
 *
 * Integration contract (from index.html):
 *   - A page exists:  <div class="page" data-page="adquisicion"> … <div id="adquisicionRoot"></div>
 *   - The router calls window.renderAdquisicion() when that page is shown.
 *   - PAGE_TITLES.adquisicion makes the hash route resolvable.
 * ======================================================================== */
(function () {
  'use strict';

  /* ----------------------------- UI strings ----------------------------- */
  var UI = {
    es: {
      quevas: 'Qué vas a hacer', pasos: 'Pasos', entregas: 'Qué entregas', evalua: 'Cómo se evalúa',
      miTrabajo: 'Mi trabajo', tuNombre: 'Tu nombre', nombrePh: 'Escribe tu nombre aquí',
      respuestaPh: 'Escribe tu respuesta…', descargar: 'Descargar mi trabajo', copiar: 'Copiar',
      copiado: '¡Copiado!', subir: 'Luego súbelo a Google Classroom o Canvas.',
      docente: 'Para el/la docente', versionAria: 'Versión de la actividad', basadoEn: 'Basado en la investigación de',
      sinResponder: '(sin responder)', nombreFallback: 'trabajo', labelVersion: 'versión',
      fecha: 'Fecha', nombre: 'Nombre', queEntrego: 'Qué entrego', langAria: 'Idioma / Language',
      kicker: 'El Pueblo · aula mixta',
      title: 'Actividades de adquisición para hablantes de <em>herencia</em> y aprendices de <em>L2</em>',
      sub: 'Siete actividades basadas en investigación. Cada una tiene dos versiones, pasos claros y un botón para descargar tu trabajo y entregarlo en clase.',
      navAria: 'Actividades'
    },
    en: {
      quevas: "What you'll do", pasos: 'Steps', entregas: 'What you turn in', evalua: "How it's graded",
      miTrabajo: 'My work', tuNombre: 'Your name', nombrePh: 'Write your name here',
      respuestaPh: 'Write your answer…', descargar: 'Download my work', copiar: 'Copy',
      copiado: 'Copied!', subir: 'Then upload it to Google Classroom or Canvas.',
      docente: 'For the teacher', versionAria: 'Activity version', basadoEn: 'Based on the research of',
      sinResponder: '(not answered)', nombreFallback: 'work', labelVersion: 'version',
      fecha: 'Date', nombre: 'Name', queEntrego: 'What I turn in', langAria: 'Idioma / Language',
      kicker: 'El Pueblo · mixed class',
      title: 'Acquisition activities for <em>heritage</em> speakers and <em>L2</em> learners',
      sub: 'Seven research-based activities. Each one has two versions, clear steps, and a button to download your work and turn it in.',
      navAria: 'Activities'
    }
  };

  /* --------------------------- Spanish material -------------------------- */
  var TOPICS = [
    'la inmigración y las fronteras', 'el medio ambiente', 'la música y la identidad',
    'las redes sociales', 'la comida y la tradición', 'el español en los Estados Unidos',
    'los derechos laborales', 'la educación bilingüe'
  ];
  var COLLOQUIAL = ['totalmente', 'bueno…', 'me choca', 'qué chévere', 'órale', '¿qué onda?', 'un chisme', 'ándale', 'qué padre'];
  var ROLE_TASKS = [
    { task: 'Pronunciación y entonación', taskEn: 'Pronunciation & intonation', expert: 'HL' },
    { task: 'Ortografía y conjugación', taskEn: 'Spelling & conjugation', expert: 'L2' },
    { task: 'Expresiones coloquiales y cultura', taskEn: 'Colloquial expressions & culture', expert: 'HL' },
    { task: 'Análisis de la regla (¿por qué?)', taskEn: 'Analyzing the rule (why?)', expert: 'L2' }
  ];
  var CANDIDATES = [
    { id: 'a', label: 'Candidato/a A', labelEn: 'Candidate A', speech: "Buenos días. Vi su anuncio pa'l trabajo en el centro. Me late ayudar a la gente y soy bien trabajador. Cualquier cosa que ocupen, ahí estoy.", note: "Español de EE. UU. / contacto: pa'l, me late, ocupen. Fluido y natural, registro informal.", noteEn: "U.S. Spanish / contact features: pa'l, me late, ocupen. Fluent and natural, informal register." },
    { id: 'b', label: 'Candidato/a B', labelEn: 'Candidate B', speech: 'Buenos días. He visto su anuncio para el puesto en el centro. Me gustaría ayudar a la comunidad y considero que soy una persona responsable y trabajadora.', note: 'Registro académico/formal, típico de un aprendiz de L2. Correcto pero menos espontáneo.', noteEn: 'Academic/formal register, typical of an L2 learner. Correct but less spontaneous.' },
    { id: 'c', label: 'Candidato/a C', labelEn: 'Candidate C', speech: 'Buen día. Quería preguntar por el trabajo del centro. Yo ayudo en lo que sea, hablo con la gente, no tengo problema. Cuando quieran platicamos.', note: 'Fluidez alta, registro coloquial, rasgos regionales (platicamos). Igual de capaz que A y B.', noteEn: 'Highly fluent, colloquial register, regional features (platicamos). Just as capable as A and B.' }
  ];
  var PRETERITE_FORMS = [
    { form: 'hablé', std: true }, { form: 'fuistes', std: false }, { form: 'comí', std: true },
    { form: 'andó', std: false }, { form: 'dijiste', std: true }, { form: 'conducí', std: false }
  ];
  var SI_ITEMS = ['tenga sol y buen clima', 'ofrezca comida local', 'sea económico', 'tenga vida nocturna', 'esté cerca de la naturaleza', 'ofrezca actividades culturales'];
  var SURVEY = [
    '¿Cómo describirías tu español?',
    'En tu opinión, ¿quién habla el “mejor” español? ¿Por qué?',
    '¿A qué variedades del español has estado expuesto/a?',
    '¿Te sientes con confianza al usar tu español en clase? ¿Y fuera?'
  ];

  /* ------------------------------ Activities ----------------------------- */
  var ACT = {
    skit: {
      icon: '🎭', name: 'El sketch de actualidad', nameEn: 'Current-events skit', tag: 'Andamiaje bidireccional', tagEn: 'Two-way scaffolding', basis: 'Patricia Bayona (2023)',
      intro: 'En el aula mixta, el “experto” cambia según la tarea. Aquí los hablantes de herencia y los aprendices de L2 se ayudan mutuamente.',
      introEn: 'In a mixed class, the “expert” changes with the task. Here heritage speakers and L2 learners help each other.',
      versions: {
        base: { label: 'Sketch', labelEn: 'Skit', quevas: 'Crea un sketch corto sobre un tema de actualidad. En grupo, cada quien aporta lo que mejor sabe.', quevasEn: 'Make a short skit about a current event. Each person adds what they do best.',
          pasos: ['Forma un grupo y elige el tema de arriba.', 'Busca 3 datos sobre el tema y compártelos.', 'Entre todos escriban un sketch de 1–2 minutos.', 'Incluyan al menos 2 expresiones del banco.', 'Graben el sketch (video o audio).'],
          pasosEn: ['Form a group and pick the topic above.', 'Find 3 facts about the topic and share them.', 'Together, write a 1–2 minute skit.', 'Include at least 2 expressions from the bank.', 'Record the skit (video or audio).'],
          entregas: 'El video o audio del sketch y tu lista de 3 datos.', entregasEn: 'Turn in: your skit video/audio + your 3 facts.',
          rubric: ['Aportaste tu parte al grupo', 'Usaron 2+ expresiones del banco', 'El sketch se entiende y va al tema'],
          rubricEn: ['You contributed your part to the group', 'You used 2+ expressions from the bank', 'The skit is clear and on topic'],
          prompts: ['Tus 3 datos sobre el tema:', '¿Qué aportaste tú al grupo?', 'Una expresión nueva que usaste:'],
          promptsEn: ['Your 3 facts about the topic:', 'What did you contribute to the group?', 'A new expression you used:'] },
        alt: { label: 'Glosario vivo', labelEn: 'Living glossary', quevas: 'Tu grupo arma un “glosario vivo”: una lista que crece con las expresiones que aportan los hablantes de herencia y las correcciones de gramática que aportan los aprendices de L2.', quevasEn: 'Build a living glossary: expressions from heritage speakers + grammar fixes from L2 learners, all unit long.',
          pasos: ['Anota cada expresión nueva que aprendas de un compañero.', 'Anota cada error de gramática que ayudes a arreglar.', 'Escribe quién aportó cada cosa y qué significa.', 'Al final, junten todo en una lista de la clase.'],
          pasosEn: ['Write down every new expression you learn from a classmate.', 'Write down every grammar error you help fix.', 'Note who contributed each item and what it means.', 'At the end, combine everything into a class list.'],
          entregas: 'Tu parte del glosario: 5+ expresiones y 5+ arreglos, con ejemplos.', entregasEn: 'Turn in: 5+ expressions and 5+ grammar fixes, with examples.',
          rubric: ['5+ expresiones con ejemplo', '5+ arreglos de gramática', 'Dices quién aportó cada uno'],
          rubricEn: ['5+ expressions with an example', '5+ grammar fixes', 'You say who contributed each one'],
          prompts: ['Expresiones nuevas (con ejemplo):', 'Arreglos de gramática que ayudaste a hacer:', '¿Quién te enseñó algo y qué fue?'],
          promptsEn: ['New expressions (with example):', 'Grammar fixes you helped make:', 'Who taught you something, and what was it?'] }
      },
      teacher: 'Bayona vio que, en el sketch, los aprendices de L2 empezaron a usar expresiones coloquiales (totalmente, bueno, me choca) mientras los HL recibían ayuda con ortografía y conjugación. Forma los grupos a propósito (mitad HL, mitad L2).',
      teacherEn: 'Bayona found that, in the skit, L2 learners began using colloquial expressions (totalmente, bueno, me choca) while heritage speakers got help with spelling and conjugation. Form the groups deliberately (half HL, half L2).'
    },
    guise: {
      icon: '🎤', name: '¿A quién contratamos?', nameEn: 'Who do we hire?', tag: 'Juego de roles · prueba de pares', tagEn: 'Role-play · matched-guise test', basis: 'Rosti Vana (2023)',
      intro: 'Tres personas dicen casi lo mismo, pero de formas distintas. La meta no es juzgar el contenido, sino notar cómo juzgamos a la gente por su forma de hablar.',
      introEn: "Three people say almost the same thing, but in different ways. The goal isn't to judge the content, but to notice how we judge people by the way they speak.",
      versions: {
        base: { label: 'Prueba de pares', labelEn: 'Matched-guise test', quevas: 'Escucha (o lee en voz alta) a tres personas que quieren el mismo trabajo. Decide a quién contratarías y por qué.', quevasEn: "Hear three people applying for the same job. Decide who you'd hire and why.",
          pasos: ['Lee o escucha a los tres candidatos de arriba.', 'Anota qué pensaste de cada uno.', 'Elige a quién contratas y explica por qué.', 'Revela el análisis: ¿te fijaste en QUÉ decían o en CÓMO hablaban?'],
          pasosEn: ['Read or listen to the three candidates above.', 'Note what you thought of each one.', "Choose who you'd hire and explain why.", 'Reveal the analysis: did you focus on WHAT they said or HOW they spoke?'],
          entregas: 'Tu decisión y un párrafo corto: ¿qué te hizo elegir? ¿Cambió algo al final?', entregasEn: 'Turn in: your choice + a short paragraph on what decided it.',
          rubric: ['Explicas tu decisión con razones', 'Notas si juzgaste por la forma de hablar', 'Reflexionas sobre el prejuicio lingüístico'],
          rubricEn: ['You explain your decision with reasons', 'You notice if you judged by the way they speak', 'You reflect on linguistic prejudice'],
          prompts: ['¿A quién contratas y por qué?', '¿Qué supusiste de cada persona solo por cómo habla?', 'Al pensarlo bien, ¿cambió tu decisión?'],
          promptsEn: ['Who do you hire, and why?', 'What did you assume about each person just from how they speak?', 'Thinking it over, did your decision change?'] },
        alt: { label: 'Misma idea, dos formas', labelEn: 'Same idea, two ways', quevas: 'Escribe el mismo mensaje de dos maneras: una como le hablas a tu familia, otra como en un trabajo formal. Las dos son correctas.', quevasEn: 'Write the same message two ways — to family, and formally. Both are correct.',
          pasos: ['Elige una situación (pedir un favor, presentarte…).', 'Escribe el mensaje en tu forma de casa, relajada.', 'Escribe el mismo mensaje en forma formal.', 'Explica cuándo usarías cada una.'],
          pasosEn: ['Pick a situation (asking a favor, introducing yourself…).', 'Write the message in your relaxed, at-home style.', 'Write the same message in a formal style.', "Explain when you'd use each one."],
          entregas: 'Las dos versiones y 2–3 frases sobre cuándo usar cada una.', entregasEn: 'Turn in: both versions + 2–3 sentences on when to use each.',
          rubric: ['Las dos versiones dicen lo mismo', 'Se nota el cambio de registro', 'Explicas cuándo va cada una (sin decir que una es “mejor”)'],
          rubricEn: ['Both versions say the same thing', 'The change in register is clear', 'You explain when each one fits (without saying one is “better”)'],
          prompts: ['Versión de casa (relajada):', 'Versión formal:', '¿Cuándo usas cada una?'],
          promptsEn: ['At-home version (relaxed):', 'Formal version:', 'When do you use each one?'] }
      },
      teacher: 'Una prueba de pares presenta el mismo mensaje en distintas variedades para que los oyentes revelen sus actitudes. Lo clave es la conversación posterior: nombrar el perfilamiento lingüístico. Puedes pedir muestras reales de la comunidad (con permiso).',
      teacherEn: 'A matched-guise test presents the same message in different varieties so listeners reveal their attitudes. The key is the conversation afterward: naming linguistic profiling. You can ask for real samples from the community (with permission).'
    },
    lexico: {
      icon: '🗺️', name: 'Mapa de variación léxica', nameEn: 'Lexical variation map', tag: 'Entrevista entre pares', tagEn: 'Peer interview', basis: 'Vana (2023) · Bernate (2023)',
      intro: 'Hay muchas palabras correctas para lo mismo. La variación es natural, no un error.',
      introEn: 'There are many correct words for the same thing. Variation is natural, not an error.',
      versions: {
        base: { label: 'Dos compañeros', labelEn: 'Two classmates', quevas: 'Pregúntales una palabra a dos compañeros: uno que aprendió español en clase y otro que lo aprendió en casa. Compara.', quevasEn: 'Ask two classmates for a word — one who learned in class, one at home. Compare.',
          pasos: ['Elige un tema y haz una lista de 10 palabras en inglés.', 'Escribe la traducción que tú usas.', 'Pregúntale a un compañero de L2 y a uno de herencia.', 'Anota todo en la tabla de arriba.'],
          pasosEn: ['Pick a topic and make a list of 10 words in English.', 'Write the translation you use.', 'Ask one L2 classmate and one heritage classmate.', 'Record everything in the table above.'],
          entregas: 'Tu tabla llena y 2–3 frases: ¿qué palabras te sorprendieron?', entregasEn: 'Turn in: your filled table + 2–3 sentences on surprises.',
          rubric: ['Tabla con 10 palabras', 'Preguntaste a los dos tipos de compañeros', 'Reflexionas sobre la variación'],
          rubricEn: ['Table with 10 words', 'You asked both types of classmates', 'You reflect on the variation'],
          prompts: ['Palabras que te sorprendieron:', '¿Hay una sola palabra correcta? ¿Por qué?'],
          promptsEn: ['Words that surprised you:', 'Is there only one correct word? Why?'] },
        alt: { label: 'Tres generaciones', labelEn: 'Three generations', quevas: 'Entrevista a tres personas de distintas edades o lugares y compara qué palabras usan.', quevasEn: 'Interview three people of different ages or places and compare their words.',
          pasos: ['Elige un tema (comida, familia, escuela).', 'Entrevista a 3 personas de distintas edades o regiones.', 'Anota las palabras de cada una.', 'Explica por qué crees que cambian (región, edad, contacto con el inglés).'],
          pasosEn: ['Pick a topic (food, family, school).', 'Interview 3 people of different ages or regions.', "Write down each person's words.", 'Explain why you think they differ (region, age, contact with English).'],
          entregas: 'Tu mapa de palabras de las 3 personas y un párrafo con el porqué.', entregasEn: 'Turn in: word map from 3 people + a paragraph on why they differ.',
          rubric: ['Entrevistaste a 3 personas', 'Comparaste las palabras', 'Explicas el porqué con razones'],
          rubricEn: ['You interviewed 3 people', 'You compared the words', 'You explain the why with reasons'],
          prompts: ['Persona 1 (edad/lugar) y sus palabras:', 'Persona 2:', 'Persona 3:', '¿Por qué crees que cambian?'],
          promptsEn: ['Person 1 (age/place) and their words:', 'Person 2:', 'Person 3:', 'Why do you think they differ?'] }
      },
      teacher: 'La tarea de variación léxica muestra que la variación es inherente al idioma. Conecta con la idea de Bernate de tratar las formas no estándar como sistemáticas, no como errores.',
      teacherEn: "The lexical variation task shows that variation is inherent to language. It connects with Bernate's idea of treating nonstandard forms as systematic, not as errors."
    },
    gramatica: {
      icon: '📖', name: 'Gramática en contexto', nameEn: 'Grammar in context', tag: 'Lección variacionista en 4 pasos', tagEn: '4-step variationist lesson', basis: 'Emily Bernate (2023)',
      intro: 'La misma lección sirve a los dos grupos si se enseña como variación, no como error.',
      introEn: "The same lesson works for both groups if it's taught as variation, not as error.",
      versions: {
        base: { label: 'El pretérito', labelEn: 'The preterite', quevas: 'Vas a ver que formas como fuistes o andó no son errores al azar: siguen reglas. Sigue los 4 pasos de arriba.', quevasEn: 'See that forms like fuistes or andó follow rules. Use the 4 steps above.',
          pasos: ['Mira ejemplos del pretérito en contexto (paso 1).', 'Aprende la raíz y la terminación (paso 2).', 'Clasifica las formas en el juego de arriba.', 'Explica por qué existe la forma no estándar (pasos 3 y 4).'],
          pasosEn: ['Look at preterite examples in context (step 1).', 'Learn the stem and the ending (step 2).', 'Sort the forms in the game above.', 'Explain why the nonstandard form exists (steps 3 and 4).'],
          entregas: 'Tu clasificación y una explicación: ¿por qué dice la gente fuistes o andó?', entregasEn: 'Turn in: your sorting + why people say fuistes or andó.',
          rubric: ['Clasificas bien las formas', 'Explicas la regla detrás de la forma no estándar', 'No la llamas “mala”, sino diferente'],
          rubricEn: ['You sort the forms correctly', 'You explain the rule behind the nonstandard form', 'You call it different, not “bad”'],
          prompts: ['¿Por qué dice la gente fuistes? (pista: la -s ya marca el tú)', '¿Por qué dice andó en vez de anduvo?', '¿En qué se parece esto al inglés (burned / burnt)?'],
          promptsEn: ['Why do people say fuistes? (hint: the -s already marks tú)', 'Why say andó instead of anduvo?', 'How is this like English (burned / burnt)?'] },
        alt: { label: 'Diseña la prueba', labelEn: 'Design the quiz', quevas: 'Hoy eres el profe: elige una forma del español y escribe preguntas para ver si alguien entiende por qué existe.', quevasEn: 'Be the teacher: pick a feature and write questions testing why it happens.',
          pasos: ['Elige una forma: la a personal, haiga/haya, o -stes.', 'Escribe 1 pregunta de forma (completar).', 'Escribe 1 pregunta de “por qué” (sociolingüística).', 'Escribe la respuesta correcta de cada una.'],
          pasosEn: ['Pick a feature: the personal a, haiga/haya, or -stes.', 'Write 1 form question (fill in the blank).', 'Write 1 “why” question (sociolinguistic).', 'Write the correct answer for each one.'],
          entregas: 'Tus 2 preguntas con sus respuestas, sobre la forma que elegiste.', entregasEn: 'Turn in: your 2 questions + answers about your feature.',
          rubric: ['Una pregunta de forma', 'Una pregunta de “por qué”', 'Tus respuestas son correctas y claras'],
          rubricEn: ['One form question', 'One “why” question', 'Your answers are correct and clear'],
          prompts: ['Forma que elegiste:', 'Pregunta 1 (de forma) + respuesta:', 'Pregunta 2 (de por qué) + respuesta:'],
          promptsEn: ['Feature you chose:', 'Question 1 (form) + answer:', 'Question 2 (why) + answer:'] }
      },
      teacher: 'El método variacionista también funciona para la a personal y el futuro. Evalúa los cuatro pasos, no solo la forma: pídeles que expliquen por qué una variedad se estigmatiza.',
      teacherEn: 'The variationist method also works for the personal a and the future tense. Assess all four steps, not just the form: ask them to explain why a variety gets stigmatized.'
    },
    input: {
      icon: '🧭', name: 'Entrada estructurada', nameEn: 'Structured input', tag: 'De la entrada a la tarea', tagEn: 'From input to task', basis: 'White & Mandell (2023)',
      intro: 'La entrada estructurada te hace procesar la forma para entender el significado, y prepara a todos para una tarea comunicativa.',
      introEn: 'Structured input makes you process the form to get the meaning, and prepares everyone for a communicative task.',
      versions: {
        base: { label: 'Encuesta de viaje', labelEn: 'Travel survey', quevas: 'Da tu opinión usando el subjuntivo y luego ponte de acuerdo con tu grupo sobre un destino.', quevasEn: 'Give your opinion with the subjunctive, then agree on a destination.',
          pasos: ['Llena la encuesta de arriba (1 a 4).', 'Compara tus respuestas con tu grupo.', 'Elijan juntos las 3 cosas más importantes.', 'Busquen una ciudad real y preséntenla a la clase.'],
          pasosEn: ['Fill out the survey above (1 to 4).', 'Compare your answers with your group.', 'Together, choose the 3 most important things.', 'Find a real city and present it to the class.'],
          entregas: 'Tus respuestas de la encuesta y el destino del grupo con su porqué.', entregasEn: "Turn in: your answers + your group's destination and why.",
          rubric: ['Completaste la encuesta', 'Participaste en el acuerdo del grupo', 'Explican su elección con razones'],
          rubricEn: ['You completed the survey', "You took part in the group's agreement", 'You explain your choice with reasons'],
          prompts: ['Tus 3 cosas más importantes al viajar:', 'Destino del grupo:', '¿Por qué lo eligieron?'],
          promptsEn: ['Your 3 most important things when traveling:', "Group's destination:", 'Why did you choose it?'] },
        alt: { label: 'Detective de formas', labelEn: 'Form detective', quevas: 'Eres detective: en un texto o audio buscas SOLO una forma (el subjuntivo o el pretérito) y explicas cómo la encontraste.', quevasEn: 'Be a detective: find ONLY one form in a text/audio and explain how you spotted it.',
          pasos: ['Elige la forma que vas a buscar.', 'Lee o escucha el texto que da el profe.', 'Subraya o anota cada vez que aparece.', 'Explica cómo la reconociste (a veces está en medio de la oración).'],
          pasosEn: ["Choose the form you'll look for.", 'Read or listen to the text the teacher gives.', 'Underline or note each time it appears.', "Explain how you recognized it (sometimes it's in the middle of the sentence)."],
          entregas: 'Tu lista de las formas que encontraste y cómo las reconociste.', entregasEn: 'Turn in: the forms you found + how you spotted them.',
          rubric: ['Encontraste la forma correcta', 'No confundiste otras formas', 'Explicas cómo la reconociste'],
          rubricEn: ['You found the correct form', "You didn't confuse it with other forms", 'You explain how you recognized it'],
          prompts: ['Forma que buscaste:', 'Ejemplos que encontraste:', '¿Cómo supiste que era esa forma?'],
          promptsEn: ['Form you looked for:', 'Examples you found:', 'How did you know it was that form?'] }
      },
      teacher: 'La entrada estructurada redirige las estrategias de procesamiento y crea un punto de partida común antes de la tarea. Funciona igual con pretérito/imperfecto y con pronombres de objeto.',
      teacherEn: 'Structured input redirects processing strategies and creates a common starting point before the task. It works the same with preterite/imperfect and with object pronouns.'
    },
    caminos: {
      icon: '🛤️', name: 'Nuestros caminos', nameEn: 'Our paths', tag: 'Trayectorias lingüísticas', tagEn: 'Language journeys', basis: 'Vana (2023)',
      intro: 'Los HL y los L2 llegan al español por caminos muy distintos. Compartirlos construye respeto mutuo.',
      introEn: 'Heritage and L2 learners come to Spanish by very different paths. Sharing them builds mutual respect.',
      versions: {
        base: { label: 'Encuesta y pareja', labelEn: 'Survey and partner', quevas: 'Comparte cómo aprendiste español y escucha el camino de un compañero. Cada camino es distinto y válido.', quevasEn: "Share how you learned Spanish and hear a classmate's path. Each path is valid.",
          pasos: ['Responde la encuesta de arriba (al inicio del curso).', 'En pareja, cuenta cómo aprendiste español.', 'Escucha el camino de tu compañero.', 'Anota algo que tienen en común y algo distinto.'],
          pasosEn: ['Answer the survey above (at the start of the course).', 'With a partner, tell how you learned Spanish.', "Listen to your partner's path.", 'Note something you share and something different.'],
          entregas: 'Tus respuestas de la encuesta y 3 frases sobre el camino de tu compañero.', entregasEn: "Turn in: your answers + 3 sentences about your partner's path.",
          rubric: ['Respondes la encuesta con honestidad', 'Escuchaste a tu compañero', 'Notas algo en común y algo distinto'],
          rubricEn: ['You answer the survey honestly', 'You listened to your partner', 'You note something shared and something different'],
          prompts: ['¿Cómo aprendiste tú español?', 'El camino de tu compañero (3 frases):', 'Algo en común y algo distinto:'],
          promptsEn: ['How did you learn Spanish?', "Your partner's path (3 sentences):", 'Something shared and something different:'] },
        alt: { label: 'Autobiografía lingüística', labelEn: 'Language autobiography', quevas: 'Crea tu “autobiografía lingüística”: la historia de tu español. Puede ser un audio, una presentación o una página.', quevasEn: 'Make your language autobiography — audio, slides, or one page.',
          pasos: ['Piensa: ¿dónde y con quién hablas español? ¿Cómo te sientes al usarlo?', 'Cuenta tu historia desde niño/a hasta hoy.', 'Incluye un momento de orgullo y uno difícil.', 'Elige el formato: audio, presentación o una página.'],
          pasosEn: ['Think: where and with whom do you speak Spanish? How do you feel using it?', 'Tell your story from childhood to today.', 'Include a proud moment and a hard one.', 'Choose the format: audio, slides, or one page.'],
          entregas: 'Tu autobiografía lingüística (audio, presentación o página).', entregasEn: 'Turn in: your language autobiography.',
          rubric: ['Cuentas tu historia con detalle', 'Incluyes un momento de orgullo y uno difícil', 'Se entiende y está completa'],
          rubricEn: ['You tell your story in detail', 'You include a proud moment and a hard one', "It's clear and complete"],
          prompts: ['Notas para tu historia (niñez):', 'Un momento de orgullo y uno difícil:', '¿Qué formato vas a usar?'],
          promptsEn: ['Notes for your story (childhood):', 'A proud moment and a hard one:', 'What format will you use?'] }
      },
      teacher: 'Establece primero un ambiente seguro: comparte tu propia historia. Vana recomienda la encuesta al inicio y al final para ver cómo cambian las actitudes.',
      teacherEn: 'First establish a safe environment: share your own story. Vana recommends the survey at the start and end to see how attitudes change.'
    },
    mejor: {
      icon: '💬', name: '¿El “mejor” español?', nameEn: 'The “best” Spanish?', tag: 'Conciencia crítica', tagEn: 'Critical awareness', basis: 'Gámez & Reyna (2023)',
      intro: 'Vamos a cuestionar la idea de que existe un español “mejor”. Ningún idioma es “puro”.',
      introEn: "We'll question the idea that there's a “best” Spanish. No language is “pure”.",
      versions: {
        base: { label: 'Nube de palabras', labelEn: 'Word cloud', quevas: 'Junta las palabras que la gente usa para decir cuál es el “mejor” español, y luego cuestiónalas.', quevasEn: 'Collect the words people use for the “best” Spanish, then question them.',
          pasos: ['Busca en internet “¿dónde se habla el mejor español?”.', 'Anota las palabras que más se repiten (arriba).', 'Pregúntate: ¿quién decide qué es “mejor”?', 'Responde las preguntas de reflexión.'],
          pasosEn: ['Search online for “where is the best Spanish spoken?”.', 'Note the words that come up most (above).', "Ask yourself: who decides what's “best”?", 'Answer the reflection questions.'],
          entregas: 'Tu lista de palabras y tus respuestas a las 3 preguntas.', entregasEn: 'Turn in: your word list + answers to the 3 questions.',
          rubric: ['Juntaste varias palabras', 'Respondes las 3 preguntas', 'Cuestionas la idea de un español “mejor”'],
          rubricEn: ['You collected several words', 'You answer the 3 questions', 'You question the idea of a “best” Spanish'],
          prompts: ['Palabras que encontraste:', '¿Quién gana y quién pierde con esa idea?', 'Si alguien dice que dijistes es “incorrecto”, ¿qué respondes?'],
          promptsEn: ['Words you found:', 'Who wins and who loses with that idea?', 'If someone says dijistes is “incorrect,” how do you respond?'] },
        alt: { label: 'Léxico que reescribimos', labelEn: 'Words we rewrite', quevas: 'Busca una palabra negativa que se usa sobre el español de la gente (como “español malo”) y propón una mejor.', quevasEn: "Find a negative term used about people's Spanish and propose a better one.",
          pasos: ['Busca un término negativo (“no sabe hablar bien”, “español malo”).', 'Explica por qué es injusto.', 'Propón una palabra o frase más justa y exacta.', 'Explica por qué la tuya es mejor.'],
          pasosEn: ['Find a negative term (“can\'t speak well,” “bad Spanish”).', "Explain why it's unfair.", 'Propose a fairer, more accurate word or phrase.', 'Explain why yours is better.'],
          entregas: 'El término negativo, tu reemplazo y por qué el tuyo es más justo.', entregasEn: "Turn in: the negative term + your replacement + why it's fairer.",
          rubric: ['Identificas un término cargado', 'Propones un reemplazo justo', 'Explicas tu razonamiento'],
          rubricEn: ['You identify a loaded term', 'You propose a fair replacement', 'You explain your reasoning'],
          prompts: ['Término negativo que encontraste:', 'Tu reemplazo:', '¿Por qué el tuyo es más justo?'],
          promptsEn: ['Negative term you found:', 'Your replacement:', 'Why is yours fairer?'] }
      },
      teacher: 'Gámez y Reyna parten de una perspectiva raciolingüística: la estigmatización no se basa en criterios lingüísticos, sino en actitudes hacia los hablantes. La meta no es avergonzar, sino notar estas ideologías.',
      teacherEn: "Gámez and Reyna start from a raciolinguistic perspective: stigmatization isn't based on linguistic criteria, but on attitudes toward speakers. The goal isn't to shame, but to notice these ideologies."
    }
  };
  var ORDER = ['skit', 'guise', 'lexico', 'gramatica', 'input', 'caminos', 'mejor'];

  /* ------------------------------- State -------------------------------- */
  var STATE = {
    lang: 'es',
    active: 'skit',
    version: {},
    work: {},
    name: '',
    copied: false,
    teacherOpen: {},
    w: {
      skitTopic: TOPICS[0], skitSeed: 0,
      guiseRev: {},
      lexRows: [{ en: '', l2: '', hl: '' }],
      gramStep: 0, gramTags: {},
      inputRates: {},
      mejorWord: '', mejorCloud: ['puro', 'correcto', 'limpio', 'propio']
    }
  };
  ORDER.forEach(function (k) { STATE.version[k] = 'base'; });

  var ROOT = null;
  function pick(es, en) { return STATE.lang === 'en' ? en : es; }
  function ui() { return UI[STATE.lang]; }
  function repaint() { if (ROOT) render(ROOT); }

  /* ---------------------------- DOM helpers ----------------------------- */
  function h(tag, attrs) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!attrs.hasOwnProperty(k)) continue;
        var v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') e.className = v;
        else if (k === 'html') e.innerHTML = v;
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') e.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'style' && typeof v === 'object') { for (var s in v) e.style[s] = v[s]; }
        else e.setAttribute(k, v === true ? '' : v);
      }
    }
    for (var i = 2; i < arguments.length; i++) appendChild(e, arguments[i]);
    return e;
  }
  function appendChild(parent, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { appendChild(parent, x); }); return; }
    parent.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
  }

  /* --------------------------- UI components ---------------------------- */
  function langToggle() {
    var wrap = h('div', { class: 'ep-vtoggle ep-langtoggle', role: 'group', 'aria-label': ui().langAria },
      h('span', { class: 'ep-langicon', 'aria-hidden': 'true' }, '🌐'));
    [['es', 'Español'], ['en', 'English']].forEach(function (pair) {
      wrap.appendChild(h('button', {
        class: 'ep-vbtn' + (STATE.lang === pair[0] ? ' ep-on' : ''),
        'aria-pressed': STATE.lang === pair[0] ? 'true' : 'false',
        onclick: function () { STATE.lang = pair[0]; repaint(); }
      }, pair[1]));
    });
    return wrap;
  }

  function versionToggle(id) {
    var v = ACT[id].versions;
    var wrap = h('div', { class: 'ep-vtoggle', role: 'group', 'aria-label': ui().versionAria });
    ['base', 'alt'].forEach(function (k) {
      wrap.appendChild(h('button', {
        class: 'ep-vbtn' + (STATE.version[id] === k ? ' ep-on' : ''),
        'aria-pressed': STATE.version[id] === k ? 'true' : 'false',
        onclick: function () { STATE.version[id] = k; repaint(); }
      }, pick(v[k].label, v[k].labelEn)));
    });
    return wrap;
  }

  function basis(id) {
    return h('div', { class: 'ep-basis' },
      h('span', { class: 'ep-spark', 'aria-hidden': 'true' }, '✦'),
      h('span', null, ui().basadoEn + ' ', h('strong', null, ACT[id].basis)));
  }

  function directions(id) {
    var d = ACT[id].versions[STATE.version[id]];
    var pasosList = h('ol', { class: 'ep-pasos' });
    pick(d.pasos, d.pasosEn).forEach(function (p, i) {
      pasosList.appendChild(h('li', null, h('span', { class: 'ep-num' }, String(i + 1)), h('span', null, p)));
    });
    var rubricList = h('ul', { class: 'ep-rubric' });
    pick(d.rubric, d.rubricEn).forEach(function (r) {
      rubricList.appendChild(h('li', null, h('span', { class: 'ep-check', 'aria-hidden': 'true' }, '✓'), r));
    });
    return h('div', { class: 'ep-dirs' },
      h('div', { class: 'ep-dblock' },
        h('h3', { class: 'ep-dh' }, ui().quevas),
        h('p', { class: 'ep-dtext' }, pick(d.quevas, d.quevasEn))),
      h('div', { class: 'ep-dblock' },
        h('h3', { class: 'ep-dh' }, ui().pasos), pasosList),
      h('div', { class: 'ep-drow' },
        h('div', { class: 'ep-dblock ep-entrega' },
          h('h3', { class: 'ep-dh' }, ui().entregas),
          h('p', { class: 'ep-dtext' }, pick(d.entregas, d.entregasEn))),
        h('div', { class: 'ep-dblock' },
          h('h3', { class: 'ep-dh' }, ui().evalua), rubricList)));
  }

  function studentWork(id) {
    var d = ACT[id].versions[STATE.version[id]];
    var prompts = pick(d.prompts, d.promptsEn);
    var wrap = h('div', { class: 'ep-work' }, h('h3', { class: 'ep-dh' }, ui().miTrabajo));

    var nameInput = h('input', { class: 'ep-input', id: 'ep-name', value: STATE.name, placeholder: ui().nombrePh });
    nameInput.addEventListener('input', function (e) { STATE.name = e.target.value; });
    wrap.appendChild(h('div', { class: 'ep-field' }, h('label', { for: 'ep-name' }, ui().tuNombre), nameInput));

    prompts.forEach(function (p, i) {
      var key = id + ':' + STATE.version[id] + ':' + i;
      var ta = h('textarea', { class: 'ep-textarea', id: key, rows: '2', placeholder: ui().respuestaPh });
      ta.value = STATE.work[key] || '';
      ta.addEventListener('input', function (e) { STATE.work[key] = e.target.value; });
      wrap.appendChild(h('div', { class: 'ep-field' }, h('label', { for: key }, p), ta));
    });

    var toolbar = h('div', { class: 'ep-toolbar' },
      h('button', { class: 'ep-btn', onclick: function () { exportWork(id, 'download'); } }, '⬇ ' + ui().descargar),
      h('button', { class: 'ep-btn ep-btn-ghost', onclick: function () { exportWork(id, 'copy'); } }, STATE.copied ? '✓ ' + ui().copiado : '⧉ ' + ui().copiar),
      h('span', { class: 'ep-submit-note' }, ui().subir));
    wrap.appendChild(toolbar);
    return wrap;
  }

  function teacherNote(id) {
    var open = !!STATE.teacherOpen[id];
    var wrap = h('div', { class: 'ep-teacher' },
      h('button', {
        class: 'ep-teacher-btn', 'aria-expanded': open ? 'true' : 'false',
        onclick: function () { STATE.teacherOpen[id] = !open; repaint(); }
      }, '🎓 ' + ui().docente, h('span', { class: 'ep-chev' + (open ? ' ep-rot' : '') }, '›')));
    if (open) wrap.appendChild(h('div', { class: 'ep-teacher-body' }, pick(ACT[id].teacher, ACT[id].teacherEn)));
    return wrap;
  }

  /* ------------------------------ Widgets ------------------------------- */
  function skitWidget() {
    var words = COLLOQUIAL.slice(0, 5 + (STATE.w.skitSeed % 4));
    var flip = h('div', { class: 'ep-flip' });
    ROLE_TASKS.forEach(function (r) {
      flip.appendChild(h('div', { class: 'ep-flip-row' },
        h('span', { class: 'ep-flip-task' }, pick(r.task, r.taskEn)),
        h('span', { class: 'ep-chip ' + (r.expert === 'HL' ? 'ep-chip-hl' : 'ep-chip-l2') },
          pick('Experto/a:', 'Expert:') + ' ' + (r.expert === 'HL' ? pick('herencia', 'heritage') : 'L2'))));
    });
    var chips = h('div', { class: 'ep-chips' });
    words.forEach(function (w) { chips.appendChild(h('span', { class: 'ep-chip ep-chip-word' }, w)); });
    return h('div', null,
      h('div', { class: 'ep-card ep-accent' },
        h('div', { class: 'ep-card-head' },
          h('span', null, pick('Generador de roles y tema', 'Roles & topic generator')),
          h('button', {
            class: 'ep-btn', onclick: function () {
              STATE.w.skitTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
              STATE.w.skitSeed += 1; repaint();
            }
          }, '🔀 ' + pick('Mezclar', 'Mix'))),
        h('div', { class: 'ep-topic' }, pick('Tema:', 'Topic:') + ' ', h('strong', null, STATE.w.skitTopic)),
        flip),
      h('div', { class: 'ep-card' },
        h('div', { class: 'ep-card-head' }, h('span', null, pick('Banco de expresiones', 'Expression bank'))),
        chips));
  }

  function guiseWidget() {
    var wrap = h('div', { class: 'ep-cards' });
    CANDIDATES.forEach(function (c) {
      var open = !!STATE.w.guiseRev[c.id];
      var card = h('div', { class: 'ep-card ep-guise' },
        h('div', { class: 'ep-card-head' }, h('span', null, pick(c.label, c.labelEn))),
        h('p', { class: 'ep-speech' }, '“' + c.speech + '”'),
        h('button', {
          class: 'ep-btn ep-btn-ghost', 'aria-expanded': open ? 'true' : 'false',
          onclick: function () { STATE.w.guiseRev[c.id] = !open; repaint(); }
        }, open ? pick('Ocultar análisis', 'Hide analysis') : pick('Revelar análisis', 'Reveal analysis')));
      if (open) card.appendChild(h('p', { class: 'ep-reveal' }, pick(c.note, c.noteEn)));
      wrap.appendChild(card);
    });
    return wrap;
  }

  function lexicoWidget() {
    var table = h('div', { class: 'ep-table' },
      h('div', { class: 'ep-trow ep-thead' },
        h('span', null, pick('Inglés', 'English')),
        h('span', null, pick('Compañero/a de L2', 'L2 classmate')),
        h('span', null, pick('Compañero/a de herencia', 'Heritage classmate')),
        h('span', { 'aria-hidden': 'true' })));
    STATE.w.lexRows.forEach(function (r, i) {
      function cell(kk, ph) {
        var inp = h('input', { class: 'ep-input', value: r[kk], placeholder: ph });
        inp.addEventListener('input', function (e) { STATE.w.lexRows[i][kk] = e.target.value; });
        return inp;
      }
      table.appendChild(h('div', { class: 'ep-trow' },
        cell('en', 'bus'), cell('l2', 'autobús'), cell('hl', 'camión / guagua'),
        h('button', {
          class: 'ep-icon-btn', 'aria-label': pick('Quitar fila', 'Remove row'),
          onclick: function () { if (STATE.w.lexRows.length > 1) { STATE.w.lexRows.splice(i, 1); repaint(); } }
        }, '✕')));
    });
    return h('div', { class: 'ep-card ep-accent' },
      h('div', { class: 'ep-card-head' }, h('span', null, pick('Tabla de palabras', 'Word table'))),
      table,
      h('button', {
        class: 'ep-btn ep-btn-ghost',
        onclick: function () { STATE.w.lexRows.push({ en: '', l2: '', hl: '' }); repaint(); }
      }, '＋ ' + pick('Agregar palabra', 'Add word')));
  }

  function gramaticaWidget() {
    var steps = [
      { t: '1 · Entrada en contexto', tEn: '1 · Input in context', b: 'Escuchen o lean historias reales en pretérito, incluyendo voces del español de EE. UU.', bEn: 'Listen to or read real stories in the preterite, including voices from U.S. Spanish.' },
      { t: '2 · Enfoque en la forma', tEn: '2 · Focus on form', b: 'Aprendan la raíz y la terminación: en habl-é, habl- lleva el significado y -é marca el tiempo.', bEn: 'Learn the stem and the ending: in habl-é, habl- carries the meaning and -é marks the tense.' },
      { t: '3 · El porqué', tEn: '3 · The why', b: 'Por qué surgen fuistes o andó: aplican una regla que ya existe. El inglés hace lo mismo (burned reemplaza a burnt).', bEn: 'Why fuistes or andó arise: they apply a rule that already exists. English does the same (burned replaces burnt).' },
      { t: '4 · Reflexión crítica', tEn: '4 · Critical reflection', b: 'Decidan cómo usar cada forma según el contexto y cómo responder cuando alguien dice que una variedad es “incorrecta”.', bEn: 'Decide how to use each form by context and how to respond when someone says a variety is “incorrect”.' }
    ];
    var stepper = h('div', { class: 'ep-stepper' });
    steps.forEach(function (s, i) {
      stepper.appendChild(h('button', {
        class: 'ep-step-pill' + (i === STATE.w.gramStep ? ' ep-on' : ''),
        onclick: function () { STATE.w.gramStep = i; repaint(); }
      }, String(i + 1)));
    });
    var sorter = h('div', { class: 'ep-sorter' });
    PRETERITE_FORMS.forEach(function (pf) {
      var chosen = STATE.w.gramTags[pf.form];
      var correct = chosen != null && (chosen === 'std') === pf.std;
      var btns = h('div', { class: 'ep-sort-btns' },
        h('button', { class: 'ep-tagbtn' + (chosen === 'std' ? ' ep-sel' : ''), onclick: function () { STATE.w.gramTags[pf.form] = 'std'; repaint(); } }, pick('estándar', 'standard')),
        h('button', { class: 'ep-tagbtn' + (chosen === 'non' ? ' ep-sel' : ''), onclick: function () { STATE.w.gramTags[pf.form] = 'non'; repaint(); } }, pick('no estándar', 'nonstandard')));
      var row = h('div', { class: 'ep-sort-row' }, h('span', { class: 'ep-mono' }, pf.form), btns);
      if (chosen != null) row.appendChild(h('span', { class: 'ep-feedback ' + (correct ? 'ep-ok' : 'ep-no') },
        correct ? pick('✓ sigue un patrón lógico', '✓ follows a logical pattern') : pick('no estándar ≠ incorrecto', 'nonstandard ≠ incorrect')));
      sorter.appendChild(row);
    });
    return h('div', null,
      stepper,
      h('div', { class: 'ep-card ep-accent' },
        h('div', { class: 'ep-step-title' }, pick(steps[STATE.w.gramStep].t, steps[STATE.w.gramStep].tEn)),
        h('p', { class: 'ep-step-body' }, pick(steps[STATE.w.gramStep].b, steps[STATE.w.gramStep].bEn))),
      h('div', { class: 'ep-card' },
        h('div', { class: 'ep-card-head' }, h('span', null, pick('Clasifica: ¿estándar o no estándar?', 'Sort: standard or nonstandard?'))),
        sorter));
  }

  function inputWidget() {
    var rate = h('div', { class: 'ep-rate' });
    SI_ITEMS.forEach(function (item) {
      var scale = h('div', { class: 'ep-rate-scale', role: 'group', 'aria-label': item });
      [1, 2, 3, 4].forEach(function (n) {
        scale.appendChild(h('button', {
          class: 'ep-rate-dot' + (STATE.w.inputRates[item] === n ? ' ep-on' : ''),
          'aria-pressed': STATE.w.inputRates[item] === n ? 'true' : 'false',
          onclick: function () { STATE.w.inputRates[item] = n; repaint(); }
        }, String(n)));
      });
      rate.appendChild(h('div', { class: 'ep-rate-row' }, h('span', { class: 'ep-rate-label' }, item), scale));
    });
    return h('div', { class: 'ep-card ep-accent' },
      h('div', { class: 'ep-card-head' }, h('span', null, pick('Prefiero viajar a un lugar que…', 'I prefer to travel somewhere that…'))),
      rate,
      h('p', { class: 'ep-fine' }, pick('1 = nada importante · 4 = muy importante. Fíjate en la terminación del verbo (tenga, ofrezca, sea): ahí está el subjuntivo.', "1 = not important · 4 = very important. Notice the verb ending (tenga, ofrezca, sea): that's the subjunctive.")));
  }

  function caminosWidget() {
    var list = h('ol', { class: 'ep-pasos' });
    SURVEY.forEach(function (q, i) {
      list.appendChild(h('li', null, h('span', { class: 'ep-num' }, String(i + 1)), h('span', null, q)));
    });
    return h('div', { class: 'ep-card ep-accent' },
      h('div', { class: 'ep-card-head' }, h('span', null, pick('Encuesta de actitudes', 'Attitudes survey'))),
      list);
  }

  function mejorWidget() {
    var input = h('input', { class: 'ep-input', value: STATE.w.mejorWord, placeholder: pick('p. ej. correcto', 'e.g. correcto') });
    input.addEventListener('input', function (e) { STATE.w.mejorWord = e.target.value; });
    function add() {
      var w = STATE.w.mejorWord.trim().toLowerCase();
      if (w && STATE.w.mejorCloud.indexOf(w) === -1) STATE.w.mejorCloud.push(w);
      STATE.w.mejorWord = '';
      repaint();
    }
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') add(); });
    var cloud = h('div', { class: 'ep-cloud' });
    STATE.w.mejorCloud.forEach(function (w, i) {
      cloud.appendChild(h('span', { class: 'ep-cloud-word', style: { fontSize: (0.95 + ((i * 7) % 5) * 0.22) + 'rem' } }, w));
    });
    return h('div', { class: 'ep-card ep-accent' },
      h('div', { class: 'ep-card-head' }, h('span', null, pick('Nube de palabras', 'Word cloud'))),
      h('div', { class: 'ep-inline' }, input, h('button', { class: 'ep-btn', onclick: add }, '＋ ' + pick('Agregar', 'Add'))),
      cloud);
  }

  var WIDGETS = {
    skit: skitWidget, guise: guiseWidget, lexico: lexicoWidget, gramatica: gramaticaWidget,
    input: inputWidget, caminos: caminosWidget, mejor: mejorWidget
  };

  function activity(id) {
    var stack = h('div', { class: 'ep-stack' },
      basis(id),
      h('p', { class: 'ep-lead' }, pick(ACT[id].intro, ACT[id].introEn)),
      versionToggle(id));
    if (STATE.version[id] === 'base') stack.appendChild(WIDGETS[id]());
    stack.appendChild(directions(id));
    stack.appendChild(studentWork(id));
    stack.appendChild(teacherNote(id));
    return stack;
  }

  /* ------------------------------ Export -------------------------------- */
  function buildText(id) {
    var a = ACT[id], d = a.versions[STATE.version[id]];
    var date = new Date().toLocaleDateString(STATE.lang === 'en' ? 'en' : 'es', { year: 'numeric', month: 'long', day: 'numeric' });
    var actName = pick(a.name, a.nameEn);
    var verLabel = pick(d.label, d.labelEn);
    var entregas = pick(d.entregas, d.entregasEn);
    var prompts = pick(d.prompts, d.promptsEn);
    var out = 'El Pueblo — ' + actName + ' (' + ui().labelVersion + ': ' + verLabel + ')\n';
    out += ui().nombre + ': ' + (STATE.name || '________') + '    ' + ui().fecha + ': ' + date + '\n';
    out += ui().queEntrego + ': ' + entregas + '\n\n';
    prompts.forEach(function (p, i) {
      var ans = (STATE.work[id + ':' + STATE.version[id] + ':' + i] || '').trim();
      out += p + '\n' + (ans || ui().sinResponder) + '\n\n';
    });
    return out.trim() + '\n';
  }
  function exportWork(id, mode) {
    var text = buildText(id);
    if (mode === 'copy') {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        } else {
          var t = document.createElement('textarea');
          t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t);
        }
        STATE.copied = true; repaint();
        setTimeout(function () { STATE.copied = false; repaint(); }, 1800);
      } catch (e) { /* ignore */ }
      return;
    }
    try {
      var safe = (STATE.name || ui().nombreFallback).replace(/[^\wÀ-ſ]+/g, '_').slice(0, 30);
      var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url; link.download = 'ElPueblo_' + id + '_' + safe + '.txt';
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    } catch (e) { exportWork(id, 'copy'); }
  }

  /* ------------------------------ Render -------------------------------- */
  function render(root) {
    ROOT = root;
    root.innerHTML = '';
    var u = ui();

    var nav = h('nav', { class: 'ep-nav', 'aria-label': u.navAria });
    ORDER.forEach(function (id) {
      nav.appendChild(h('button', {
        class: 'ep-navbtn' + (STATE.active === id ? ' ep-on' : ''),
        'aria-current': STATE.active === id ? 'true' : 'false',
        onclick: function () { STATE.active = id; repaint(); }
      },
        h('span', { class: 'ep-navicon', 'aria-hidden': 'true' }, ACT[id].icon),
        h('span', null,
          h('span', { class: 'ep-navname' }, pick(ACT[id].name, ACT[id].nameEn)),
          h('span', { class: 'ep-navtag' }, pick(ACT[id].tag, ACT[id].tagEn)))));
    });

    var cur = ACT[STATE.active];
    var panel = h('section', { class: 'ep-panel' },
      h('div', { class: 'ep-panel-head' },
        h('div', { class: 'ep-panel-eyebrow' }, pick(cur.tag, cur.tagEn)),
        h('h2', { class: 'ep-panel-title' }, pick(cur.name, cur.nameEn))),
      activity(STATE.active));

    var header = h('header', { class: 'ep-header' },
      h('div', { class: 'ep-topbar' },
        h('div', null,
          h('div', { class: 'ep-kicker' }, '✦ ' + u.kicker),
          h('h1', { class: 'ep-title', html: u.title })),
        langToggle()),
      h('p', { class: 'ep-sub' }, u.sub),
      h('div', { class: 'ep-azulejo', 'aria-hidden': 'true', html: '<i></i><i></i><i></i><i></i><i></i>' }));

    var rootEl = h('div', { class: 'ep-root' }, header, h('div', { class: 'ep-layout' }, nav, panel));
    root.appendChild(rootEl);
  }

  /* ------------------------------ Styles -------------------------------- */
  function ensureStyles() {
    if (document.getElementById('ep-adq-styles')) return;
    var style = document.createElement('style');
    style.id = 'ep-adq-styles';
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Inter:wght@400;500;600&display=swap');",
      ".ep-root{--ink:#1d231f;--canvas:#f4eddd;--paper:#fbf6ec;--clay:#9a3b2e;--azulejo:#1c6b66;--azulejo-2:#268a82;--gold:#cf9b2c;--line:#e0d4bd;--hl:#1c6b66;--l2:#9a3b2e;font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--canvas);padding:clamp(14px,4vw,40px);line-height:1.55;border-radius:18px;}",
      ".ep-root *{box-sizing:border-box;}",
      ".ep-header{margin-bottom:24px;}",
      ".ep-topbar{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;}",
      ".ep-kicker{display:flex;align-items:center;gap:8px;color:var(--clay);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-bottom:10px;}",
      ".ep-title{font-family:'Bricolage Grotesque','Inter',sans-serif;font-weight:800;font-size:clamp(1.6rem,4.5vw,2.6rem);line-height:1.03;letter-spacing:-.02em;margin:0;}",
      ".ep-title em{font-style:normal;color:var(--azulejo);}",
      ".ep-sub{margin:12px 0 0;max-width:62ch;color:#4c4a40;font-size:.96rem;}",
      ".ep-azulejo{display:flex;gap:5px;margin-top:16px;}",
      ".ep-azulejo i{width:18px;height:18px;border-radius:4px;display:block;background:radial-gradient(circle at 50% 50%, var(--gold) 0 28%, transparent 29%),conic-gradient(from 45deg, var(--azulejo) 0 25%, var(--clay) 0 50%, var(--azulejo) 0 75%, var(--clay) 0);opacity:.85;}",
      ".ep-langtoggle{flex:none;margin-top:2px;}",
      ".ep-langicon{margin:0 4px 0 6px;align-self:center;font-size:.95rem;}",
      ".ep-spark{color:var(--gold);}",
      ".ep-layout{display:grid;grid-template-columns:230px 1fr;gap:24px;align-items:start;}",
      "@media(max-width:780px){.ep-layout{grid-template-columns:1fr;}}",
      ".ep-nav{display:flex;flex-direction:column;gap:6px;position:sticky;top:14px;}",
      "@media(max-width:780px){.ep-nav{flex-direction:row;flex-wrap:wrap;position:static;}}",
      ".ep-navbtn{display:flex;gap:11px;align-items:flex-start;text-align:left;cursor:pointer;background:transparent;border:1px solid transparent;border-radius:12px;padding:11px 12px;font-family:inherit;color:var(--ink);transition:background .15s,border-color .15s;}",
      ".ep-navbtn:hover{background:var(--paper);}",
      ".ep-navbtn.ep-on{background:var(--paper);border-color:var(--line);}",
      ".ep-navbtn.ep-on .ep-navicon{background:var(--azulejo);}",
      ".ep-navicon{flex:none;width:30px;height:30px;border-radius:8px;display:grid;place-items:center;background:#ece1cb;transition:background .15s;margin-top:1px;font-size:1rem;}",
      ".ep-navname{font-weight:600;font-size:.9rem;line-height:1.15;display:block;}",
      ".ep-navtag{font-size:.69rem;color:#7a766a;line-height:1.2;margin-top:2px;display:block;}",
      ".ep-panel{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:clamp(16px,3vw,30px);}",
      ".ep-panel-head{border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:18px;}",
      ".ep-panel-eyebrow{font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:var(--azulejo);}",
      ".ep-panel-title{font-family:'Bricolage Grotesque','Inter',sans-serif;font-weight:800;font-size:clamp(1.3rem,3vw,1.8rem);letter-spacing:-.015em;margin:6px 0 0;}",
      ".ep-stack{display:flex;flex-direction:column;gap:16px;}",
      ".ep-lead{margin:0;font-size:1rem;color:#403e36;max-width:64ch;}",
      ".ep-basis{display:flex;align-items:center;gap:7px;font-size:.8rem;color:var(--azulejo);background:#e7f0ee;border:1px solid #cfe2df;padding:7px 11px;border-radius:9px;width:fit-content;}",
      ".ep-vtoggle{display:inline-flex;gap:4px;background:#ece1cb;border-radius:11px;padding:4px;width:fit-content;align-items:center;}",
      ".ep-vbtn{cursor:pointer;font-family:inherit;font-weight:600;font-size:.85rem;border:none;border-radius:8px;padding:7px 14px;background:transparent;color:#5a5648;}",
      ".ep-vbtn.ep-on{background:var(--paper);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.06);}",
      ".ep-dirs{display:flex;flex-direction:column;gap:16px;background:var(--canvas);border:1px solid var(--line);border-radius:14px;padding:clamp(14px,2.5vw,22px);}",
      ".ep-dblock{display:flex;flex-direction:column;gap:6px;}",
      ".ep-drow{display:grid;grid-template-columns:1fr 1fr;gap:16px;}",
      "@media(max-width:560px){.ep-drow{grid-template-columns:1fr;}}",
      ".ep-dh{font-family:'Bricolage Grotesque','Inter',sans-serif;font-weight:700;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--clay);margin:0;}",
      ".ep-dtext{margin:0;font-size:1rem;color:#34322b;}",
      ".ep-pasos{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;}",
      ".ep-pasos li{display:flex;gap:12px;align-items:flex-start;font-size:1rem;color:#34322b;}",
      ".ep-num{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--azulejo);color:#fff;font-weight:700;font-size:.85rem;margin-top:1px;}",
      ".ep-entrega{background:#fbf6ec;border:1px solid var(--line);border-radius:10px;padding:12px;}",
      ".ep-rubric{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px;}",
      ".ep-rubric li{display:flex;gap:8px;align-items:flex-start;font-size:.9rem;color:#46443b;}",
      ".ep-check{flex:none;margin-top:1px;color:var(--azulejo);font-weight:800;}",
      ".ep-work{display:flex;flex-direction:column;gap:12px;background:var(--canvas);border:1px solid var(--line);border-radius:14px;padding:clamp(14px,2.5vw,22px);}",
      ".ep-field{display:flex;flex-direction:column;gap:6px;}",
      ".ep-field label{font-size:.9rem;font-weight:600;color:#3c3a32;}",
      ".ep-input,.ep-textarea{font-family:inherit;font-size:.95rem;color:var(--ink);background:#fff;border:1px solid var(--line);border-radius:9px;padding:9px 11px;width:100%;}",
      ".ep-textarea{resize:vertical;line-height:1.5;}",
      ".ep-input:focus,.ep-textarea:focus{outline:2px solid var(--azulejo);outline-offset:1px;border-color:var(--azulejo);}",
      ".ep-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:4px;}",
      ".ep-submit-note{font-size:.82rem;color:#7a766a;}",
      ".ep-btn{display:inline-flex;align-items:center;gap:7px;cursor:pointer;font-family:inherit;font-weight:600;font-size:.85rem;border:none;border-radius:9px;padding:9px 14px;background:var(--azulejo);color:#fff;transition:background .15s;}",
      ".ep-btn:hover{background:var(--azulejo-2);}",
      ".ep-btn-ghost{background:transparent;color:var(--azulejo);border:1px solid var(--azulejo);}",
      ".ep-btn-ghost:hover{background:#e7f0ee;}",
      ".ep-card{background:var(--canvas);border:1px solid var(--line);border-radius:13px;padding:16px;margin-bottom:12px;}",
      ".ep-card:last-child{margin-bottom:0;}",
      ".ep-card.ep-accent{border-left:4px solid var(--azulejo);}",
      ".ep-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;}",
      ".ep-card-head{display:flex;justify-content:space-between;align-items:center;gap:10px;font-weight:700;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase;margin-bottom:12px;}",
      ".ep-topic{font-size:1.05rem;margin-bottom:12px;}",
      ".ep-flip{display:flex;flex-direction:column;gap:8px;}",
      ".ep-flip-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:9px 0;border-top:1px dashed var(--line);}",
      ".ep-flip-row:first-child{border-top:none;}",
      ".ep-flip-task{font-weight:600;font-size:.92rem;}",
      ".ep-chip{font-size:.78rem;font-weight:600;padding:4px 10px;border-radius:999px;white-space:nowrap;}",
      ".ep-chip-hl{background:#dcebe9;color:var(--hl);}",
      ".ep-chip-l2{background:#f1ddd8;color:var(--l2);}",
      ".ep-chip-word{background:#fff;border:1px solid var(--line);color:var(--ink);font-weight:500;}",
      ".ep-chips{display:flex;flex-wrap:wrap;gap:8px;}",
      ".ep-fine{font-size:.8rem;color:#7a766a;margin:12px 0 0;}",
      ".ep-speech{font-size:.93rem;font-style:italic;color:#3c3a32;margin:0 0 12px;}",
      ".ep-reveal{font-size:.82rem;color:#5a5648;margin:10px 0 0;padding-top:10px;border-top:1px dashed var(--line);}",
      ".ep-inline{display:flex;gap:8px;}",
      ".ep-table{display:flex;flex-direction:column;gap:7px;}",
      ".ep-trow{display:grid;grid-template-columns:1fr 1fr 1fr 32px;gap:8px;align-items:center;}",
      ".ep-thead{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;font-weight:600;color:#7a766a;}",
      "@media(max-width:560px){.ep-trow{grid-template-columns:1fr 1fr;}.ep-thead{display:none;}}",
      ".ep-icon-btn{display:grid;place-items:center;width:32px;height:32px;border-radius:8px;cursor:pointer;border:1px solid var(--line);background:#fff;color:#9a3b2e;font-weight:700;}",
      ".ep-icon-btn:hover{background:#f1ddd8;}",
      ".ep-stepper{display:flex;gap:8px;}",
      ".ep-step-pill{width:36px;height:36px;border-radius:9px;cursor:pointer;font-family:inherit;font-weight:700;border:1px solid var(--line);background:#fff;color:var(--azulejo);}",
      ".ep-step-pill.ep-on{background:var(--azulejo);color:#fff;border-color:var(--azulejo);}",
      ".ep-step-title{font-weight:700;font-size:1rem;margin-bottom:6px;color:var(--azulejo);}",
      ".ep-step-body{margin:0;font-size:.93rem;color:#403e36;}",
      ".ep-sorter{display:flex;flex-direction:column;gap:10px;}",
      ".ep-sort-row{display:grid;grid-template-columns:90px auto 1fr;gap:10px;align-items:center;}",
      "@media(max-width:560px){.ep-sort-row{grid-template-columns:1fr;}}",
      ".ep-mono{font-family:'Bricolage Grotesque',monospace;font-weight:700;font-size:1.05rem;}",
      ".ep-sort-btns{display:flex;gap:6px;}",
      ".ep-tagbtn{cursor:pointer;font-family:inherit;font-size:.78rem;font-weight:600;border-radius:7px;border:1px solid var(--line);background:#fff;color:#5a5648;padding:6px 10px;}",
      ".ep-tagbtn.ep-sel{background:var(--ink);color:#fff;border-color:var(--ink);}",
      ".ep-feedback{font-size:.78rem;font-weight:600;}",
      ".ep-ok{color:var(--azulejo);}.ep-no{color:var(--clay);}",
      ".ep-rate{display:flex;flex-direction:column;gap:9px;}",
      ".ep-rate-row{display:flex;justify-content:space-between;align-items:center;gap:12px;border-top:1px dashed var(--line);padding-top:9px;}",
      ".ep-rate-row:first-child{border-top:none;padding-top:0;}",
      ".ep-rate-label{font-size:.9rem;}",
      ".ep-rate-scale{display:flex;gap:5px;flex:none;}",
      ".ep-rate-dot{width:30px;height:30px;border-radius:8px;cursor:pointer;font-family:inherit;font-weight:600;border:1px solid var(--line);background:#fff;color:#7a766a;}",
      ".ep-rate-dot.ep-on{background:var(--gold);color:var(--ink);border-color:var(--gold);}",
      ".ep-cloud{display:flex;flex-wrap:wrap;gap:4px 16px;align-items:baseline;padding:8px 0;}",
      ".ep-cloud-word{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;color:var(--clay);line-height:1.1;}",
      ".ep-cloud-word:nth-child(even){color:var(--azulejo);}",
      ".ep-teacher{border-top:1px solid var(--line);padding-top:14px;}",
      ".ep-teacher-btn{display:flex;align-items:center;gap:8px;cursor:pointer;font-family:inherit;font-weight:600;font-size:.83rem;color:var(--clay);background:transparent;border:none;padding:0;}",
      ".ep-chev{display:inline-block;transition:transform .15s;}",
      ".ep-rot{transform:rotate(90deg);}",
      ".ep-teacher-body{margin-top:10px;font-size:.86rem;color:#5a5648;background:var(--canvas);border:1px solid var(--line);border-radius:10px;padding:13px 15px;max-width:66ch;}",
      "@media(prefers-reduced-motion:reduce){.ep-root *{transition:none!important;}}"
    ].join('\n');
    document.head.appendChild(style);
  }

  /* --------------------------- Entry point ------------------------------ */
  window.renderAdquisicion = function () {
    var root = document.getElementById('adquisicionRoot');
    if (!root) return;
    ensureStyles();
    render(root);
  };
})();
