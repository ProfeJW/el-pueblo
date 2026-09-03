  /* ============================================================================
     COMPLETA EL DIÁLOGO — finish the conversation
     ----------------------------------------------------------------------------
     A short exchange between two people with one line missing. Two ways to play,
     the same dialogues behind both:

       type  — the student writes the missing line
       mc    — four options, one best fit

     Content is the Preliminar vocabulary list — the 50 words and phrases on the
     handout, plus igualmente, ¿qué tal? and encantado/a. Every blank is one of
     those items, and so is every wrong option, so the whole game is answerable
     from the list alone and nothing here is a word the class has not met.

     The list is covered exhaustively rather than sampled: the greetings by time
     of day, all five farewells, the names pair, the three titles, the two forms
     of "how are you" with their y tú / y usted replies, estoy · bien · mal · muy,
     all six feelings words (both genders where the ending changes), the courtesy
     words, the people nouns from niño up to hombre/mujer, and all eight subject
     pronouns.

     Each dialogue: { setting, lines[], answer, accept[], options[], note? }
       lines   — { who, text }; exactly one line contains '___'
       accept  — everything a typed answer may be, lowercased and unaccented
                 before comparing (see dialogoNormalize)
       options — the three wrong answers for multiple choice. They are chosen to
                 be plausible-but-wrong rather than silly, so picking the right
                 one means reading the exchange rather than eliminating jokes.
                 They come off the list too — a distractor is always a real word
                 the student is expected to know.
       note    — the "why" shown after answering, when there is something to say
     ============================================================================ */

  const DIALOGOS = [
    /* --- Greetings by time of day ------------------------------------------ */
    {
      setting: 'A student arrives at school at eight in the morning.',
      lines: [
        { who: 'Estudiante', text: '___, señora Ruiz.' },
        { who: 'Sra. Ruiz', text: 'Buenos días, Marta. Pasa.' }
      ],
      answer: 'Buenos días', accept: ['buenos días'],
      options: ['Buenas tardes', 'Buenas noches', 'Hasta mañana'],
      note: 'Before noon it is buenos días — and it is plural, días, even for one morning.'
    },
    {
      setting: 'Arriving at a friend\'s house at four in the afternoon.',
      lines: [
        { who: 'Tú', text: '___, señor Peña. ¿Está Carlos?' },
        { who: 'Sr. Peña', text: 'Buenas tardes. Sí, pasa.' }
      ],
      answer: 'Buenas tardes', accept: ['buenas tardes'],
      options: ['Buenos días', 'Buenas noches', 'Hasta luego'],
      note: 'From about noon until dark it is buenas tardes.'
    },
    {
      setting: 'Arriving at a family dinner at nine at night.',
      lines: [
        { who: 'Tú', text: '___, señora. Gracias por la invitación.' },
        { who: 'Señora', text: 'Buenas noches. Pasa, por favor.' }
      ],
      answer: 'Buenas noches', accept: ['buenas noches'],
      options: ['Buenos días', 'Buenas tardes', 'Hasta pronto'],
      note: 'This is the first of the two meanings: buenas noches is "good evening" when you arrive.'
    },
    {
      setting: 'Leaving a friend\'s house late at night.',
      lines: [
        { who: 'Tú', text: 'Ya es muy tarde. ___.' },
        { who: 'Amigo', text: 'Buenas noches. Que descanses.' }
      ],
      answer: 'Buenas noches', accept: ['buenas noches'],
      options: ['Buenos días', 'Buenas tardes', 'Mucho gusto'],
      note: 'And the second meaning: the same words also work as "good night" on the way out.'
    },

    /* --- Farewells ---------------------------------------------------------- */
    {
      setting: 'Saying goodbye to a classmate you will see in the morning.',
      lines: [
        { who: 'Elena', text: 'Ya es tarde. ___.' },
        { who: 'Javier', text: 'Sí, en la clase de español.' }
      ],
      answer: 'Hasta mañana', accept: ['hasta mañana'],
      options: ['Hasta pronto', 'Buenos días', 'Buenas tardes'],
      note: 'Hasta mañana is the specific one: you know you will see them tomorrow.'
    },
    {
      setting: 'Leaving school on a Friday afternoon.',
      lines: [
        { who: 'Lucía', text: 'Bueno, me voy. ¡___!' },
        { who: 'Mateo', text: 'Adiós, Lucía.' }
      ],
      answer: 'Hasta luego', accept: ['hasta luego', 'adiós', 'chau', 'chao', 'hasta pronto'],
      options: ['Buenos días', 'Mucho gusto', 'Por favor']
    },
    {
      setting: 'Two cousins say goodbye at the airport, hoping it will not be long.',
      lines: [
        { who: 'Prima', text: 'Fue muy bueno verte. ¡___!' },
        { who: 'Tú', text: 'Sí, muy pronto.' }
      ],
      answer: 'Hasta pronto', accept: ['hasta pronto', 'hasta luego'],
      options: ['Buenas noches', 'Mucho gusto', 'Por favor'],
      note: 'Hasta pronto — "see you soon" — when you do not know the day, but it will not be long.'
    },
    {
      setting: 'Two friends end a text conversation with the most casual goodbye there is.',
      lines: [
        { who: 'Nico', text: 'Bueno, me voy a dormir. ¡___!' },
        { who: 'Beto', text: 'Igual yo. Hasta mañana.' }
      ],
      answer: 'Chau', accept: ['chau', 'chao', 'adiós', 'hasta luego'],
      options: ['Buenos días', 'Mucho gusto', 'Por favor'],
      note: 'Chau (also written chao) is the most casual goodbye — friends, never the principal.'
    },
    {
      setting: 'Leaving a shop after buying something.',
      lines: [
        { who: 'Dependienta', text: 'Gracias por su compra.' },
        { who: 'Tú', text: '___, señora.' }
      ],
      answer: 'Adiós', accept: ['adiós', 'hasta luego', 'chau', 'chao'],
      options: ['Buenos días', 'Mucho gusto', 'Perdón']
    },

    /* --- Names -------------------------------------------------------------- */
    {
      setting: 'Meeting someone your own age for the first time.',
      lines: [
        { who: 'Marta', text: 'Hola. ¿___?' },
        { who: 'Diego', text: 'Me llamo Diego. ¿Y tú?' }
      ],
      answer: 'Cómo te llamas', accept: ['cómo te llamas'],
      options: ['Cómo estás', 'Cómo está', 'Qué tal'],
      note: 'Te llamas is the tú form — right for someone your own age.'
    },
    {
      setting: 'Answering that question in class.',
      lines: [
        { who: 'Profesora', text: '¿Cómo te llamas?' },
        { who: 'Estudiante', text: '___ Carolina Rivas.' }
      ],
      answer: 'Me llamo', accept: ['me llamo', 'yo me llamo'],
      options: ['Te llamas', 'Mucho gusto', 'Igualmente'],
      note: 'Me llamo is literally "I call myself" — the me goes with llamo.'
    },
    {
      setting: 'A new student writes her name on the board and turns around.',
      lines: [
        { who: 'Emma', text: '___ Emma. Soy de Ohio.' },
        { who: 'Clase', text: '¡Hola, Emma!' }
      ],
      answer: 'Me llamo', accept: ['me llamo', 'yo me llamo'],
      options: ['Te llamas', 'Encantada', 'Igualmente']
    },

    /* --- Titles ------------------------------------------------------------- */
    {
      setting: 'Addressing an adult woman you do not know, in a shop.',
      lines: [
        { who: 'Tú', text: 'Perdón, ___, ¿dónde está la salida?' },
        { who: 'Mujer', text: 'Al final del pasillo.' }
      ],
      answer: 'señora', accept: ['señora'],
      options: ['señor', 'señorita', 'niña'],
      note: 'Señora for an adult woman, señorita for a young one, señor for a man.'
    },
    {
      setting: 'Greeting the man who runs the corner shop.',
      lines: [
        { who: 'Tú', text: 'Buenos días, ___ Ramírez.' },
        { who: 'Sr. Ramírez', text: 'Buenos días. ¿Qué necesitas?' }
      ],
      answer: 'señor', accept: ['señor'],
      options: ['señora', 'señorita', 'joven']
    },
    {
      setting: 'A waiter takes the order of a young woman at a restaurant.',
      lines: [
        { who: 'Camarero', text: '¿Y para usted, ___?' },
        { who: 'Joven', text: 'Un café, por favor.' }
      ],
      answer: 'señorita', accept: ['señorita', 'señora'],
      options: ['señor', 'niño', 'hombre'],
      note: 'Señorita is the polite title for a young woman.'
    },

    /* --- ¿Cómo estás? · estoy · bien · mal · muy · y ------------------------ */
    {
      setting: 'Asking a friend your own age how she is.',
      lines: [
        { who: 'Tú', text: 'Hola, Ana. ¿___?' },
        { who: 'Ana', text: 'Muy bien, gracias.' }
      ],
      answer: 'Cómo estás', accept: ['cómo estás', 'qué tal'],
      options: ['Cómo está', 'Cómo te llamas', 'Mucho gusto'],
      note: 'A friend your age takes the informal tú form: ¿cómo estás?'
    },
    {
      setting: 'Asking your friend\'s grandmother the same question.',
      lines: [
        { who: 'Tú', text: 'Buenas tardes, señora. ¿___?' },
        { who: 'Abuela', text: 'Muy bien, gracias, hijo.' }
      ],
      answer: 'Cómo está', accept: ['cómo está', 'cómo está usted'],
      options: ['Cómo estás', 'Cómo te llamas', 'Qué tal'],
      note: 'An adult you do not know well takes usted — the same question, a different form.'
    },
    {
      setting: 'Two friends pass in the hallway, as casually as it gets.',
      lines: [
        { who: 'Beto', text: '¡Hola! ¿___?' },
        { who: 'Nico', text: 'Bien, ¿y tú?' }
      ],
      answer: 'Qué tal', accept: ['qué tal', 'cómo estás'],
      options: ['Cómo está', 'Mucho gusto', 'Por favor'],
      note: '¿Qué tal? is the casual version of ¿cómo estás? — for friends, not for the principal.'
    },
    {
      setting: 'A friend your age asks how you are, and you ask back.',
      lines: [
        { who: 'Ana', text: 'Estoy muy bien. ¿___?' },
        { who: 'Tú', text: 'Bien también, gracias.' }
      ],
      answer: 'Y tú', accept: ['y tú'],
      options: ['Y usted', 'Y ustedes', 'Y ella']
    },
    {
      setting: 'Your teacher asks how you are, formally.',
      lines: [
        { who: 'Profesora', text: '¿Cómo está usted hoy?' },
        { who: 'Estudiante', text: 'Bien, gracias. ¿___?' }
      ],
      answer: 'Y usted', accept: ['y usted'],
      options: ['Y tú', 'Y él', 'Y ellos'],
      note: 'She used usted with you, so you return it: ¿y usted? Matching the level of formality is the whole point.'
    },
    {
      setting: 'Answering "how are you" with the full sentence, not just one word.',
      lines: [
        { who: 'Carlos', text: '¿Cómo estás?' },
        { who: 'Tú', text: '___ bien, gracias.' }
      ],
      answer: 'Estoy', accept: ['estoy', 'yo estoy'],
      options: ['Estás', 'Está', 'Me llamo'],
      note: 'Estoy is the yo form — how I am right now.'
    },
    {
      setting: 'Everything is going well today.',
      lines: [
        { who: 'Ana', text: '¿Qué tal?' },
        { who: 'Tú', text: 'Muy ___, gracias. ¿Y tú?' }
      ],
      answer: 'bien', accept: ['bien'],
      options: ['mal', 'triste', 'enojado']
    },
    {
      setting: 'You lost your homework and missed the bus, and a friend asks how you are.',
      lines: [
        { who: 'Luis', text: '¿Cómo estás?' },
        { who: 'Tú', text: 'Estoy ___. Perdí la tarea y llegué tarde.' }
      ],
      answer: 'mal', accept: ['mal', 'muy mal'],
      options: ['bien', 'muy bien', 'feliz'],
      note: 'Mal is the honest opposite of bien.'
    },
    {
      setting: 'Making bien stronger — not just fine, but really fine.',
      lines: [
        { who: 'Profesor', text: '¿Cómo está usted?' },
        { who: 'Sra. Peña', text: 'Estoy ___ bien, gracias.' }
      ],
      answer: 'muy', accept: ['muy'],
      options: ['mucho', 'mal', 'y'],
      note: 'Muy goes in front of an adjective or adverb: muy bien, muy cansado. Mucho cannot do that job.'
    },

    /* --- Feelings ----------------------------------------------------------- */
    {
      setting: 'A boy did not sleep last night and it shows.',
      lines: [
        { who: 'Profesora', text: '¿Estás bien, Miguel?' },
        { who: 'Miguel', text: 'Estoy ___. No dormí anoche.' }
      ],
      answer: 'cansado', accept: ['cansado', 'muy cansado'],
      options: ['cansada', 'feliz', 'enojado'],
      note: 'Miguel is masculine, so cansado. A girl would say cansada.'
    },
    {
      setting: 'A girl comes home after a long practice.',
      lines: [
        { who: 'Madre', text: '¿Cómo estás, Lucía?' },
        { who: 'Lucía', text: 'Estoy muy ___. Fue un día largo.' }
      ],
      answer: 'cansada', accept: ['cansada'],
      options: ['cansado', 'feliz', 'enojada'],
      note: 'Lucía is speaking about herself, so the ending is feminine: cansada.'
    },
    {
      setting: 'A friend\'s dog died last week.',
      lines: [
        { who: 'Tú', text: '¿Cómo estás, Nora?' },
        { who: 'Nora', text: 'Estoy ___. Murió mi perro.' }
      ],
      answer: 'triste', accept: ['triste', 'muy triste'],
      options: ['feliz', 'cansada', 'enojada'],
      note: 'Triste does not change for gender — un chico triste, una chica triste.'
    },
    {
      setting: 'Someone just found out she got into her first-choice school.',
      lines: [
        { who: 'Tomás', text: '¿Qué tal?' },
        { who: 'Ximena', text: '¡Estoy muy ___! Buenas noticias.' }
      ],
      answer: 'feliz', accept: ['feliz', 'muy feliz'],
      options: ['triste', 'enferma', 'aburrida'],
      note: 'Feliz, like triste, is the same for a boy or a girl.'
    },
    {
      setting: 'A boy is stuck at home on a rainy Saturday with nothing to do.',
      lines: [
        { who: 'Hermana', text: '¿Qué haces?' },
        { who: 'Pablo', text: 'Nada. Estoy ___.' }
      ],
      answer: 'aburrido', accept: ['aburrido', 'muy aburrido'],
      options: ['aburrida', 'feliz', 'cansado'],
      note: 'Pablo is masculine: aburrido. A girl would say aburrida.'
    },
    {
      setting: 'A girl is stuck in a long meeting with her parents.',
      lines: [
        { who: 'Madre', text: '¿Estás bien, Marta?' },
        { who: 'Marta', text: 'Sí, pero estoy ___. No hay nada que hacer aquí.' }
      ],
      answer: 'aburrida', accept: ['aburrida', 'muy aburrida'],
      options: ['aburrido', 'feliz', 'enferma']
    },
    {
      setting: 'A student calls the school to say she cannot come in.',
      lines: [
        { who: 'Secretaria', text: '¿Qué pasa, Rosa?' },
        { who: 'Rosa', text: 'Estoy ___. No puedo ir a clase hoy.' }
      ],
      answer: 'enferma', accept: ['enferma', 'muy enferma'],
      options: ['enfermo', 'cansada', 'triste']
    },
    {
      setting: 'A boy wakes up with a fever.',
      lines: [
        { who: 'Padre', text: '¿Vas a la escuela hoy?' },
        { who: 'Tomás', text: 'No puedo. Estoy ___.' }
      ],
      answer: 'enfermo', accept: ['enfermo', 'muy enfermo'],
      options: ['enferma', 'cansado', 'aburrido']
    },
    {
      setting: 'His brother broke his bike and never said so.',
      lines: [
        { who: 'Madre', text: '¿Por qué no hablas con tu hermano?' },
        { who: 'Andrés', text: 'Porque estoy ___ con él.' }
      ],
      answer: 'enojado', accept: ['enojado', 'muy enojado'],
      options: ['enojada', 'feliz', 'aburrido'],
      note: 'The ending agrees with the person who is angry, so Andrés says enojado.'
    },
    {
      setting: 'Someone read her diary without asking.',
      lines: [
        { who: 'Amiga', text: '¿Qué te pasa, Nora?' },
        { who: 'Nora', text: 'Estoy ___. Alguien leyó mi diario.' }
      ],
      answer: 'enojada', accept: ['enojada', 'muy enojada'],
      options: ['enojado', 'triste', 'cansada']
    },

    /* --- Courtesy ----------------------------------------------------------- */
    {
      setting: 'Someone holds the door open for you.',
      lines: [
        { who: 'Señor', text: 'Pase usted.' },
        { who: 'Tú', text: 'Muchas ___.' }
      ],
      answer: 'gracias', accept: ['gracias'],
      options: ['por favor', 'perdón', 'igualmente']
    },
    {
      setting: 'Ordering at a café.',
      lines: [
        { who: 'Cliente', text: 'Un café, ___.' },
        { who: 'Camarero', text: 'Enseguida.' }
      ],
      answer: 'por favor', accept: ['por favor'],
      options: ['gracias', 'perdón', 'mucho gusto']
    },
    {
      setting: 'You step on someone\'s foot on the bus.',
      lines: [
        { who: 'Tú', text: '¡Ay, ___!' },
        { who: 'Pasajera', text: 'No pasa nada.' }
      ],
      answer: 'perdón', accept: ['perdón', 'lo siento'],
      options: ['gracias', 'por favor', 'igualmente'],
      note: 'Perdón is the quick apology for something that just happened.'
    },
    {
      setting: 'A classmate tells you her grandfather died on Saturday.',
      lines: [
        { who: 'Compañera', text: 'Murió mi abuelo el sábado.' },
        { who: 'Tú', text: '___ mucho.' }
      ],
      answer: 'Lo siento', accept: ['lo siento'],
      options: ['Perdón', 'Mucho gusto', 'Igualmente'],
      note: 'Lo siento is the heavier one — real sympathy, not just bumping into someone.'
    },
    {
      setting: 'Introducing yourself to a teacher on the first day.',
      lines: [
        { who: 'Estudiante', text: 'Buenos días. Me llamo Rosa Delgado.' },
        { who: 'Profesor', text: '___, Rosa. Soy el señor Ramos.' }
      ],
      answer: 'Mucho gusto', accept: ['mucho gusto', 'encantado'],
      options: ['Lo siento', 'Hasta luego', 'Por favor']
    },
    {
      setting: 'Two people shake hands after being introduced.',
      lines: [
        { who: 'Sr. Ortiz', text: 'Mucho gusto.' },
        { who: 'Sra. Peña', text: '___.' }
      ],
      answer: 'Igualmente', accept: ['igualmente', 'mucho gusto', 'encantada'],
      options: ['Por favor', 'Lo siento', 'Perdón'],
      note: 'Igualmente — "likewise" — is the standard reply to mucho gusto.'
    },
    {
      setting: 'A woman introduces herself at a family party.',
      lines: [
        { who: 'Sofía', text: 'Hola, soy Sofía. ___.' },
        { who: 'Pablo', text: 'Igualmente, Sofía.' }
      ],
      answer: 'Encantada', accept: ['encantada', 'mucho gusto'],
      options: ['Encantado', 'Lo siento', 'Por favor'],
      note: 'Sofía is speaking about herself, so the adjective is feminine: encantada. A man would say encantado.'
    },
    {
      setting: 'A man is introduced to his friend\'s mother.',
      lines: [
        { who: 'Sra. Vidal', text: 'Mucho gusto, Andrés.' },
        { who: 'Andrés', text: '___, señora.' }
      ],
      answer: 'Encantado', accept: ['encantado', 'igualmente', 'mucho gusto'],
      options: ['Encantada', 'Perdón', 'Por favor'],
      note: 'Andrés is speaking about himself, so encantado.'
    },
    {
      setting: 'Thanking a neighbour for a big favour — not just thanks, many thanks.',
      lines: [
        { who: 'Vecino', text: 'Aquí tienes las llaves.' },
        { who: 'Tú', text: '¡___ gracias!' }
      ],
      answer: 'Muchas', accept: ['muchas'],
      options: ['Mucho', 'Mucha', 'Muy'],
      note: 'Gracias is feminine and plural, so mucho agrees with it: muchas gracias.'
    },

    /* --- People ------------------------------------------------------------- */
    {
      setting: 'Pointing out a six-year-old boy in the park.',
      lines: [
        { who: 'Ana', text: '¿Quién es?' },
        { who: 'Tú', text: 'Es ___ de la señora Ruiz. Tiene seis años.' }
      ],
      answer: 'el niño', accept: ['el niño', 'niño'],
      options: ['la niña', 'el joven', 'el hombre'],
      note: 'Niño is a young child, joven is a teenager, hombre is a grown man.'
    },
    {
      setting: 'A small girl is lost in the shop.',
      lines: [
        { who: 'Dependiente', text: '¿De quién es ___?' },
        { who: 'Madre', text: '¡Es mía! ¡Sofía!' }
      ],
      answer: 'la niña', accept: ['la niña', 'niña'],
      options: ['el niño', 'la joven', 'la mujer']
    },
    {
      setting: 'Talking about the new boy in class.',
      lines: [
        { who: 'Marta', text: '¿Quién es él?' },
        { who: 'Diego', text: 'Es ___ nuevo. Se llama Kai.' }
      ],
      answer: 'el chico', accept: ['el chico', 'chico', 'el joven', 'el estudiante'],
      options: ['la chica', 'la niña', 'la mujer']
    },
    {
      setting: 'Talking about a girl who just joined the team.',
      lines: [
        { who: 'Nico', text: '¿Y ella?' },
        { who: 'Beto', text: 'Es ___ nueva del equipo. Es de Perú.' }
      ],
      answer: 'la chica', accept: ['la chica', 'chica', 'la joven', 'la estudiante'],
      options: ['el chico', 'la niña', 'la señora']
    },
    {
      setting: 'A teacher describes the sixteen-year-old who came looking for you.',
      lines: [
        { who: 'Profesora', text: 'Te buscó ___ de la clase de música. Tiene dieciséis años.' },
        { who: 'Tú', text: 'Ah, es Mateo.' }
      ],
      answer: 'el joven', accept: ['el joven', 'joven', 'el chico', 'el estudiante'],
      options: ['el niño', 'el hombre', 'la joven'],
      note: 'At sixteen he is a joven — old enough that niño no longer fits, young enough that hombre does not either.'
    },
    {
      setting: 'Explaining who you are at a school open house.',
      lines: [
        { who: 'Visitante', text: '¿Usted es profesora?' },
        { who: 'Emma', text: 'No, soy ___. Estoy en la clase de español.' }
      ],
      answer: 'la estudiante', accept: ['la estudiante', 'estudiante'],
      options: ['el estudiante', 'la mujer', 'la niña'],
      note: 'Estudiante never changes its ending — only the article does: el estudiante, la estudiante.'
    },
    {
      setting: 'Describing the adult waiting outside the office.',
      lines: [
        { who: 'Secretaria', text: '¿Quién espera?' },
        { who: 'Tú', text: 'Una ___ con su hija. Dice que es la madre de Ana.' }
      ],
      answer: 'mujer', accept: ['mujer', 'señora'],
      options: ['hombre', 'niña', 'joven']
    },
    {
      setting: 'Describing a grown man to a police officer.',
      lines: [
        { who: 'Policía', text: '¿Quién le ayudó?' },
        { who: 'Tú', text: 'Un ___ alto, de unos cuarenta años.' }
      ],
      answer: 'hombre', accept: ['hombre', 'señor'],
      options: ['niño', 'joven', 'chico'],
      note: 'At forty he is an hombre — chico or joven would be someone much younger.'
    },

    /* --- Subject pronouns --------------------------------------------------- */
    {
      setting: 'The teacher asks who finished the homework.',
      lines: [
        { who: 'Profesor', text: '¿Quién terminó la tarea?' },
        { who: 'Rosa', text: '¡___! La terminé anoche.' }
      ],
      answer: 'Yo', accept: ['yo'],
      options: ['Tú', 'Él', 'Nosotros']
    },
    {
      setting: 'Deciding which "you" to use with a classmate your own age.',
      lines: [
        { who: 'Profesora', text: 'Con un compañero de clase, ¿usas tú o usted?' },
        { who: 'Estudiante', text: 'Uso ___, porque es mi amigo.' }
      ],
      answer: 'tú', accept: ['tú'],
      options: ['usted', 'ustedes', 'él'],
      note: 'Tú is the informal you — friends, family, people your own age.'
    },
    {
      setting: 'Deciding which "you" to use with the principal.',
      lines: [
        { who: 'Profesora', text: '¿Y con el director?' },
        { who: 'Estudiante', text: 'Uso ___, porque es un adulto que no conozco bien.' }
      ],
      answer: 'usted', accept: ['usted'],
      options: ['tú', 'ustedes', 'ella'],
      note: 'Usted is the formal you — adults you do not know well, and anyone you want to show respect.'
    },
    {
      setting: 'Saying which boy told you.',
      lines: [
        { who: 'Ana', text: '¿Quién te lo dijo?' },
        { who: 'Tú', text: '___. Mateo me lo dijo esta mañana.' }
      ],
      answer: 'Él', accept: ['él'],
      options: ['Ella', 'Yo', 'Ellos']
    },
    {
      setting: 'Saying which girl won the prize.',
      lines: [
        { who: 'Profesor', text: '¿Quién ganó el premio?' },
        { who: 'Tú', text: '___. Ximena, la estudiante nueva.' }
      ],
      answer: 'Ella', accept: ['ella'],
      options: ['Él', 'Yo', 'Ellas']
    },
    {
      setting: 'Two boys volunteer together.',
      lines: [
        { who: 'Profesora', text: '¿Quiénes quieren ayudar?' },
        { who: 'Beto', text: '¡___! Nico y yo.' }
      ],
      answer: 'Nosotros', accept: ['nosotros'],
      options: ['Nosotras', 'Ellos', 'Ustedes'],
      note: 'Nosotros for a group with at least one male; nosotras only when everyone is female.'
    },
    {
      setting: 'Two girls volunteer to sing together.',
      lines: [
        { who: 'Profesora', text: '¿Quiénes van a cantar?' },
        { who: 'Lucía', text: '¡___! Marta y yo.' }
      ],
      answer: 'Nosotras', accept: ['nosotras'],
      options: ['Nosotros', 'Ellas', 'Ustedes'],
      note: 'Lucía and Marta are both female, so nosotras.'
    },
    {
      setting: 'Saying which two girls are waiting outside.',
      lines: [
        { who: 'Secretaria', text: '¿Quiénes esperan?' },
        { who: 'Tú', text: '___. Marta y Lucía, de mi clase.' }
      ],
      answer: 'Ellas', accept: ['ellas'],
      options: ['Ellos', 'Nosotras', 'Ustedes'],
      note: 'Marta and Lucía are both female, so ellas. Add one boy to the group and it becomes ellos.'
    },
    {
      setting: 'Saying which boys are playing in the park.',
      lines: [
        { who: 'Madre', text: '¿Quiénes juegan en el parque?' },
        { who: 'Tú', text: '___. Mateo, Nico y Beto.' }
      ],
      answer: 'Ellos', accept: ['ellos'],
      options: ['Ellas', 'Nosotros', 'Ustedes']
    },
    {
      setting: 'A teacher in Latin America addresses the whole class at once.',
      lines: [
        { who: 'Profesora', text: '¿Y ___? ¿Terminaron la tarea?' },
        { who: 'Clase', text: 'Sí, profesora.' }
      ],
      answer: 'ustedes', accept: ['ustedes'],
      options: ['usted', 'tú', 'nosotros'],
      note: 'Ustedes is the plural you — more than one person you are speaking to.'
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
