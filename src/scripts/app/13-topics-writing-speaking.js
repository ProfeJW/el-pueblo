  /* ============== TOPICS (writing & speaking) ============== */
  // EDIT THESE ARRAYS to post topics for your students.
  // Each topic gets its own page; students respond to it (in writing or by recording).
  // Their responses are saved on their device (private to them).
  //
  // Each topic needs: id (unique short string), title, body, optional tips, optional due

  const WRITING_TOPICS = [
    {
      id: 'salud-write',
      title: 'Una visita al <em>médico</em>',
      level: 'sp1', category: 'narrative',
      body: 'Using the Health & medicine vocab deck, write about a time you were sick or went to the doctor. What symptoms did you have? Did you go to the clinic or hospital? What did the doctor say, and what treatment did you get? How did you take care of yourself to get better?',
      tips: ['Useful vocab: estar enfermo, el síntoma, la fiebre, la tos, el dolor, el médico, la receta, la medicina, la farmacia', 'Use doler like gustar (me duele la cabeza / me duelen los pies)', 'Use the preterite to narrate; aim for 100+ words'],
      date: ''
    },
    {
      id: 'musica-write',
      title: 'La <em>música</em> en mi vida',
      level: 'sp1', category: 'personal',
      body: 'Using the Music vocab deck, write about music. What kind of music do you like, and why? Do you play an instrument or sing? Who is your favorite singer or band? Describe a concert you went to (or want to go to). How does music make you feel?',
      tips: ['Useful vocab: la música, la canción, el cantante, tocar, el instrumento, la guitarra, el concierto, el ritmo', 'Use gustar and encantar (me encanta…, me gusta… porque…)', 'Aim for 100+ words'],
      date: ''
    },
    {
      id: 'educacion-write',
      title: 'La importancia de la <em>educación</em>',
      level: 'sp2', category: 'opinion',
      body: 'Using the Education vocab deck, write about why education matters. What do we learn in school besides facts? Should education be free for everyone? What makes a good teacher? End with your opinion on the most important thing you have learned.',
      tips: ['Useful vocab: la educación, aprender, enseñar, el maestro, la universidad, la beca, el conocimiento', 'Use opinion phrases (creo que, es importante que + subjunctive)', 'Aim for 120+ words'],
      date: ''
    },
    {
      id: 'militar-write',
      title: 'La <em>guerra</em> y la paz',
      level: 'sp3', category: 'opinion',
      body: 'Using the Military vocab deck, write about war and peace. Why have countries gone to war throughout history? What role did armies play in the independence of Latin America? Is war ever justified? Argue your position and explain why peace is so valuable.',
      tips: ['Useful vocab: el ejército, el soldado, la guerra, la batalla, la independencia, la victoria, la paz', 'Use the preterite/imperfect for history and the subjunctive for opinion', 'Address a counterargument; aim for 130+ words'],
      date: ''
    },
    {
      id: 'armas-write',
      title: 'Las <em>armas</em> a través de la historia',
      level: 'sp3', category: 'cultural',
      body: 'Using the Weapons vocab deck, write about how weapons changed history. How did people fight in ancient times (swords, shields, armor)? How did gunpowder change warfare and the conquest of the Americas? Why do countries today have laws to control weapons?',
      tips: ['Useful vocab: el arma, la espada, el escudo, la armadura, la pólvora, el cañón, las armas de fuego, peligroso', 'Use the preterite/imperfect to narrate history', 'Stay factual and analytical; aim for 120+ words'],
      date: ''
    },
    {
      id: 'derecho-write',
      title: 'La <em>justicia</em> y la ley',
      level: 'sp3', category: 'opinion',
      body: 'Using the Law vocab deck, write about justice. How does a trial work — who are the judge, the lawyer, the witnesses, the jury? Why is someone "innocent until proven guilty" important? Should punishments be harsh or focus on rehabilitation? Defend your view.',
      tips: ['Useful vocab: la ley, el juez, el abogado, el tribunal, el juicio, las pruebas, inocente, culpable, la justicia', 'Use opinion phrases and the subjunctive (es justo que…, no creo que…)', 'Address a counterargument; aim for 130+ words'],
      date: ''
    },
    {
      id: 'profesiones-write',
      title: 'Mi <em>profesión</em> ideal',
      level: 'sp1', category: 'personal',
      body: 'Using the Professions vocab deck, write about your ideal career. What do you want to be, and why? What skills does it require? Who inspires you in that field? Would you choose it for money, passion, or to help others? Describe a typical day in that job.',
      tips: ['Useful vocab: la profesión, el médico, el ingeniero, el maestro, el abogado, la carrera, el trabajo', 'Use querer + infinitive (quiero ser…) and the conditional (me gustaría…)', 'Aim for 100+ words'],
      date: ''
    },
    {
      id: 'espacio-write',
      title: 'Un viaje al <em>espacio</em>',
      level: 'sp2', category: 'narrative',
      body: 'Using the Space vocab deck, imagine you are an astronaut. Describe your journey: the rocket launch, what you see (planets, stars, the Moon, the Earth from far away), and how it feels to float without gravity. Would you want to explore Mars? Why?',
      tips: ['Useful vocab: el cohete, el astronauta, el planeta, la estrella, la gravedad, la nave espacial, explorar', 'Use the future or conditional to imagine (viajaría, vería, flotaría)', 'Aim for 100+ words'],
      date: ''
    },
    {
      id: 'vehiculos-write',
      title: 'Cómo me <em>muevo</em> por la ciudad',
      level: 'sp1', category: 'personal',
      body: 'Using the Vehicles vocab deck, write about transportation. How do you get to school or around your town — car, bus, bike, walking? What are the advantages and disadvantages of each? Which is best for the environment? Which do you prefer and why?',
      tips: ['Useful vocab: el coche, el autobús, la bicicleta, el metro, el tren, conducir, el tráfico', 'Use comparisons: más rápido que, más barato que', 'Give your preference with prefiero… porque…'],
      date: ''
    },
    {
      id: 'herramientas-write',
      title: 'Arreglar algo con <em>herramientas</em>',
      level: 'sp2', category: 'narrative',
      body: 'Using the Tools vocab deck, narrate a time you fixed or built something. What was broken? What tools did you use? What steps did you follow? Did it work? Who taught you, or did you figure it out yourself?',
      tips: ['Useful vocab: el martillo, el destornillador, el tornillo, la sierra, arreglar, reparar, apretar', 'Use the preterite for the steps and sequence words (primero, luego, después)', 'Aim for 100+ words'],
      date: ''
    },
    {
      id: 'construccion-write',
      title: 'Cómo se <em>construye</em> algo',
      level: 'sp2', category: 'cultural',
      body: 'Using the Construction vocab deck, explain how something is built (a house, a bridge, a school). Who is involved — architect, engineer, workers? What are the steps, from the blueprints and foundation to the walls and roof? What materials are used?',
      tips: ['Useful vocab: construir, los planos, los cimientos, el ladrillo, el cemento, la pared, el techo, el obrero', 'Use sequence words (primero, después, finalmente) and the passive se (se construye, se levanta)', 'Aim for 110+ words'],
      date: ''
    },
    {
      id: 'caza-write',
      title: 'La <em>caza</em>: tradición y responsabilidad',
      level: 'sp3', category: 'opinion',
      body: 'Using the Hunting vocab deck, write about hunting. Is it a tradition, a sport, or a way to connect with nature? Why do hunting seasons and permits exist? Take a position: should hunting be allowed, and under what rules? Defend your view and respond to a counterargument.',
      tips: ['Useful vocab: la caza, cazar, el cazador, el permiso, la temporada de caza, las huellas, proteger', 'Use opinion phrases: creo que, me parece que, es importante que + subjunctive', 'Address a counterargument (aunque algunos piensen que…)'],
      date: ''
    },
    {
      id: 'pesca-write',
      title: 'Un día de <em>pesca</em>',
      level: 'sp2', category: 'narrative',
      body: 'Using the Fishing vocab deck, narrate a fishing trip (real or imagined). Where did you go? What did you bring? Did the fish bite? What did you catch — and did you keep it or release it? Who were you with, and how did it feel?',
      tips: ['Useful vocab: pescar, la caña de pescar, el anzuelo, la carnada, picar, atrapar, soltar, la paciencia', 'Use the preterite for the events and the imperfect for description', 'Aim for 120+ words'],
      date: ''
    },
    {
      id: 'acampar-write',
      title: 'Una noche de <em>campamento</em>',
      level: 'sp2', category: 'narrative',
      body: 'Using the Camping vocab deck, narrate a camping trip. What did you pack? Where did you set up the tent? What did you do during the day and at night? What was the best part? Describe the scenery and how you felt.',
      tips: ['Useful vocab: acampar, la tienda de campaña, el saco de dormir, la fogata, el sendero, la caminata, al aire libre', 'Use the preterite for events, the imperfect for setting the scene', 'Use sequence words: primero, luego, después, finalmente'],
      date: ''
    },
    {
      id: 'naturaleza-write',
      title: 'Cómo cuidar la <em>naturaleza</em>',
      level: 'sp2', category: 'opinion',
      body: 'Using the Nature vocab deck, write about protecting nature. What problems does the environment face (pollution, deforestation, endangered species)? What can people do to help? End with a call to action: what should we all do, and why?',
      tips: ['Useful vocab: la naturaleza, el medio ambiente, la contaminación, contaminar, proteger, el bosque, salvaje', 'Use deber + infinitive (debemos…) and es importante que + subjunctive', 'Aim for 120+ words with a clear conclusion'],
      date: ''
    },
    {
      id: 'matematicas-write',
      title: 'Las <em>matemáticas</em> en mi vida',
      level: 'sp2', category: 'cultural',
      body: 'Using the Math vocab deck, write about how you use math in everyday life. When do you add, subtract, multiply, or divide? Do you calculate prices, discounts, or percentages? Do you like math — why or why not? Describe a real situation where math helped you solve a problem.',
      tips: ['Useful vocab: sumar, restar, multiplicar, dividir, el porcentaje, calcular, el resultado, el problema', 'Use the present tense for habits and the preterite for one specific example', 'Aim for 100+ words with one opinion (me gusta / no me gusta porque…)'],
      date: ''
    },
    {
      id: 'politica-write',
      title: 'La <em>democracia</em> y el voto',
      level: 'sp3', category: 'opinion',
      body: 'Using the Politics vocab deck, write about democracy. Why is it important for citizens to vote? What rights do people have in a democracy that they don\'t have under a dictatorship? Take a position: should voting be a duty for everyone? Defend your opinion and respond to one counterargument.',
      tips: ['Useful vocab: la democracia, votar, el voto, las elecciones, los derechos, la libertad, el gobierno, la dictadura', 'Use opinion phrases: creo que, me parece que, es importante que + subjunctive', 'Aim for 130+ words and address a counterargument (aunque algunos digan que…)'],
      date: ''
    },
    {
      id: 'ciencia-write',
      title: 'Un <em>experimento</em> y el método científico',
      level: 'sp2', category: 'cultural',
      body: 'Using the Science vocab deck, describe an experiment (real or imagined) using the scientific method. What did you observe? What was your hypothesis? What experiment did you design, and what did you measure? What were the results, and did they confirm your hypothesis?',
      tips: ['Useful vocab: la ciencia, la hipótesis, el experimento, observar, medir, el laboratorio, los resultados, la teoría', 'Use sequence words: primero, luego, después, finalmente', 'Use the preterite to narrate what you did (observé, medí, comprobé)'],
      date: ''
    },
    {
      id: 'geografia-write',
      title: 'La <em>geografía</em> de un país hispano',
      level: 'sp1', category: 'cultural',
      body: 'Using the Geography vocab deck, describe the geography of a Spanish-speaking country (or your own). Where is it located? What mountains, rivers, deserts, coasts, or volcanoes does it have? What is the climate like? How does the geography affect daily life there?',
      tips: ['Useful vocab: el país, la montaña, el río, la costa, el desierto, la selva, el clima, el norte/sur/este/oeste', 'Use hay (there is/are) and está (location)', 'Aim for 100+ words'],
      date: ''
    },
    {
      id: 'mercado-compras',
      title: 'De <em>compras</em> en el mercado',
      level: 'sp1',
      category: 'cultural',
      body: 'Using the Market & shopping vocab deck, write about going shopping at a market. What do you buy, and from which stalls? How much do things cost — what\'s cheap, what\'s expensive? Do you haggle? How do you pay? Compare an open-air market to a supermarket: which do you prefer, and why?',
      tips: ['Useful vocab: el mercado, el puesto, el vendedor, el precio, caro, barato, regatear, pagar, el efectivo, fresco', 'Ask and answer price questions: "¿Cuánto cuesta…?" / "Cuesta…"', 'Aim for 100+ words and give an opinion with "prefiero… porque…"'],
      date: ''
    },
    {
      id: 'cocina-receta',
      title: 'Tu <em>receta</em> favorita',
      level: 'sp1',
      category: 'cultural',
      body: 'Using the Cooking vocab deck, write out a recipe for a dish you love. List the ingredients, then explain the steps in order: what do you chop, fry, boil, mix, or bake? How long does it take? Who taught you to make it, or where is it from? End by saying why this dish is special to you.',
      tips: ['Useful vocab: cocinar, la receta, el ingrediente, picar, freír, hervir, hornear, mezclar, agregar, probar', 'Use sequence words: primero, luego, después, finalmente', 'Try commands for the steps (pica, fríe, mezcla) OR "se pica, se fríe…"'],
      date: ''
    },
    {
      id: 'bailes-hispanos',
      title: 'Los <em>bailes</em> del mundo hispano',
      level: 'sp2',
      category: 'cultural',
      body: 'After studying the Dances vocab deck (and the reading "Los bailes del mundo hispano" in Lectura), write about dance. Which Hispanic dance interests you most — salsa, tango, flamenco, cumbia, merengue, bachata — and why? Where is it from, and what makes it special? Do you like to dance? Describe a time you danced (or watched someone dance). End with your opinion: why do you think dance is so important in Hispanic cultures?',
      tips: ['Useful vocab: el baile, bailar, el ritmo, la pareja, la pista de baile, el escenario, el bailarín / la bailarina', 'Use the preterite to narrate a specific time you danced (bailé, fui, vi)', 'Aim for 120+ words and at least one opinion with "creo que…" or "me parece que…"'],
      date: ''
    },
    {
      id: 'religion-mundo-hispano-write',
      title: 'La <em>religión</em> en el mundo hispano',
      level: 'sp3',
      category: 'cultural',
      body: 'After studying the Religions vocab deck (and the reading "La religión en el mundo hispano" in Lectura), write about religion and belief in the Hispanic world. Why has Catholicism been so important? What is "syncretism," and what are some examples (the Virgin of Guadalupe, Día de los Muertos, santería)? How is the religious landscape changing today? End with a respectful reflection: why do you think faith and tradition matter to so many people?',
      tips: ['Useful vocab: la fe, la creencia, el catolicismo, la iglesia, rezar / orar, sagrado, el creyente, espiritual', 'Use the present for general facts and the imperfect/preterite for history', 'Be respectful and descriptive; aim for 130+ words with at least one opinion'],
      date: ''
    },
    {
      id: 'la-inquisicion',
      title: 'La <em>Inquisición</em>: poder y conciencia',
      level: 'sp2',
      category: 'cultural',
      body: 'After reading "La Inquisición española" in Lectura (or the Inquisition events in Historia), write about it: What was the Inquisition, and why did the Catholic Monarchs create it? Who were its main victims in Spain and in the Americas? Why do you think fear can control people even more than punishment can? End with your opinion: what should we learn from this history today?',
      tips: ['Use the imperfect for description (era, perseguía, tenía) and the preterite for events (crearon, llegó, terminó)', 'Useful vocab: el tribunal, la herejía, el converso, el auto de fe, la censura, el miedo, la conciencia', 'Aim for 120+ words and at least one opinion with "creo que…" or "me parece que…"'],
      date: ''
    },
    // ========== CLASSIC LITERATURE ==========
    {
      id: 'lazarillo-amos',
      title: 'El <em>Lazarillo</em>: hambre y astucia',
      level: 'sp3',
      category: 'literature',
      body: 'After reading "Lázaro y el ciego" in Lectura, write about it. Who is Lázaro, and why does his mother give him to the blind man? Describe two tricks that the blind man and Lázaro play on each other. What does Lázaro learn about surviving in a cruel world? Lazarillo de Tormes invented the "picaresque" — a poor rogue who survives by his wits and exposes the hypocrisy of the powerful. Do you think cleverness (la astucia) can be a kind of justice for someone who has nothing? End with your opinion.',
      tips: ['Use the preterite for the events of the story (entregó, hizo, rompió, huyó) and the imperfect for description and background (era, tenía, pasaba)', 'Useful vocab from the Lazarillo deck: el pícaro, el amo, el ciego, la astucia, el hambre, engañar, la venganza, la hipocresía', 'Give your opinion with "creo que…", "me parece que…", or "en mi opinión…"', 'Aim for 150+ words'],
      date: ''
    },
    {
      id: 'quijote-suenos',
      title: 'Don Quijote: ¿locura o <em>idealismo</em>?',
      level: 'sp3',
      category: 'literature',
      body: 'After reading "Don Quijote y los molinos de viento" in Lectura, write about it. Why does Alonso Quijano lose his sanity, and what does he decide to become? Retell the windmill episode in your own words. Don Quijote sees giants where there are only windmills — he chooses his dream over reality, while his squire Sancho Panza always sees things as they really are. Which character do you identify with more, the idealist (don Quijote) or the realist (Sancho)? Is it better to chase impossible dreams or to accept reality? Defend your opinion with examples.',
      tips: ['Use the preterite to narrate the action (vio, embistió, rompió, cayó) and the imperfect for description (era, leía, creía)', 'Useful vocab from the Don Quijote deck: el hidalgo, el caballero andante, el escudero, la locura, el molino de viento, el gigante, embestir, idealista', 'Contrast the two characters with connectors: en cambio, sin embargo, mientras que, por otro lado', 'State and defend an opinion; aim for 150+ words'],
      date: ''
    },
    // ========== SPANISH 1 — PERSONAL ==========
    {
      id: 'my-family',
      title: 'Mi <em>familia</em>',
      level: 'sp1',
      category: 'personal',
      body: 'Describe your family. Who lives with you? What do they do? What do you do together? Use "mi" (my), "tengo" (I have), and "es" / "son" (is / are).',
      tips: ['Practice possessive adjectives (mi, mis, su, sus)', 'Use ser to describe people permanently', 'Use estar for moods and locations'],
      date: 'Sep 12'
    },
    {
      id: 'daily-routine',
      title: 'Mi <em>rutina diaria</em>',
      level: 'sp1',
      category: 'personal',
      body: 'Walk through a typical day in your life, from morning to night. What time do you wake up? What do you do at school? What do you do after school? What\'s the last thing you do before bed?',
      tips: ['Use at least 8 reflexive verbs (me levanto, me ducho, me visto, me acuesto…)', 'Use time expressions (a las siete, después, por la noche)', 'Aim for 100+ words'],
      date: 'Sep 14'
    },
    {
      id: 'my-likes',
      title: 'Mis <em>gustos</em>',
      level: 'sp1',
      category: 'personal',
      body: 'What do you like and dislike? Talk about foods, music, classes, sports, weather — anything. Be specific about WHY you like or dislike things.',
      tips: ['Use gustar correctly (me gusta + singular, me gustan + plural)', 'Try other "backward" verbs: encantar, interesar, molestar', 'Use porque to give reasons'],
      date: 'Sep 16'
    },
    {
      id: 'best-friend',
      title: 'Mi <em>mejor amigo/a</em>',
      level: 'sp1',
      category: 'personal',
      body: 'Describe your best friend. What do they look like? What are they like personality-wise? Why are you friends? What do you do together?',
      tips: ['Use ser for personality (es divertido, es inteligente)', 'Make adjectives agree in gender and number', 'Aim for 100+ words'],
      date: 'Sep 18'
    },
    {
      id: 'my-room',
      title: 'Mi <em>cuarto</em>',
      level: 'sp1',
      category: 'personal',
      body: 'Describe your bedroom in detail. What furniture is in it? What colors? What\'s on the walls? What things matter to you that are in your room?',
      tips: ['Use hay for "there is / there are"', 'Use prepositions of place (debajo de, encima de, al lado de)', 'Practice colors and adjective agreement'],
      date: 'Sep 20'
    },

    // ========== SPANISH 1 — CULTURAL ==========
    {
      id: 'sp-country-intro',
      title: 'Un <em>país hispanohablante</em>',
      level: 'sp1',
      category: 'cultural',
      body: 'Pick a Spanish-speaking country (any from the Mundo section). Describe it: Where is it? What\'s its capital? What are 3 things it\'s known for? Would you like to visit?',
      tips: ['Check the Mundo section for country info', 'Use ser to describe characteristics (es grande, es famoso)', 'Use nationality adjectives (mexicano, colombiana, peruanos…)'],
      date: 'Sep 22'
    },
    {
      id: 'typical-food',
      title: 'Una <em>comida típica</em>',
      level: 'sp1',
      category: 'cultural',
      body: 'Pick a typical dish from the Spanish-speaking world (check the Iconic Dishes section in Mundo). Describe what it is, where it\'s from, what\'s in it, and whether you\'d like to try it.',
      tips: ['Use food vocabulary', 'Use ser de + country (es de México)', 'Use adjectives: rico, sabroso, picante, dulce'],
      date: 'Sep 24'
    },
    {
      id: 'famous-person',
      title: 'Una <em>persona famosa</em>',
      level: 'sp1',
      category: 'cultural',
      body: 'Pick a person from the People to Know section. Who are they? Where are they from? What are they famous for? Why does their work matter to you?',
      tips: ['Use ser for identity and profession', 'Use nationality adjectives', 'Practice past tense if you talk about what they did'],
      date: 'Sep 26'
    },

    // ========== SPANISH 2 — NARRATIVE ==========
    {
      id: 'last-vacation',
      title: 'Las <em>vacaciones pasadas</em>',
      level: 'sp2',
      category: 'narrative',
      body: 'What did you do last summer (or your last vacation)? Where did you go? With whom? What did you eat? What was the best moment? Tell the story in the past tense.',
      tips: ['Use preterite for completed actions (fui, comí, vi)', 'Use a few imperfects for description (hacía sol, había muchas personas)', 'Aim for 200+ words'],
      due: 'Oct 5',
      date: 'Sep 28'
    },
    {
      id: 'childhood',
      title: 'Cuando <em>era niño/a</em>',
      level: 'sp2',
      category: 'narrative',
      body: 'What was your childhood like? Where did you live? What did you used to do for fun? Who were your friends? What did you love? What did you hate?',
      tips: ['Use the imperfect tense throughout (vivía, jugaba, tenía)', 'Imperfect is for habits and ongoing states in the past', 'Aim for 200+ words'],
      due: 'Oct 8',
      date: 'Oct 1'
    },
    {
      id: 'childhood-place',
      title: 'Describe a place from your <em>childhood</em>',
      level: 'sp2',
      category: 'narrative',
      body: 'Think of a specific place — your grandmother\'s kitchen, a park, your bedroom. Write in Spanish using the five senses: what did you see, hear, smell, touch, feel?',
      tips: ['Use the imperfect tense (vivía, era, tenía)', 'Include at least 3 descriptive adjectives', 'End with a personal reflection'],
      due: 'Oct 10',
      date: 'Oct 3'
    },
    {
      id: 'best-day',
      title: 'El <em>mejor día</em> de mi vida',
      level: 'sp2',
      category: 'narrative',
      body: 'Tell the story of one of the best days you can remember. Where were you? Who was there? What happened? Why was it special?',
      tips: ['Mix preterite and imperfect (preterite for what happened, imperfect for the scene)', 'Use sequencing words: primero, luego, después, finalmente', 'Show, don\'t just tell'],
      due: 'Oct 14',
      date: 'Oct 7'
    },
    {
      id: 'memorable-trip',
      title: 'Un <em>viaje memorable</em>',
      level: 'sp2',
      category: 'narrative',
      body: 'Tell about a trip you\'ve taken — even if it was just a day trip or a weekend. Where did you go? What did you see? What surprised you? What would you do differently?',
      tips: ['Use preterite for the trip\'s events', 'Use imperfect to describe the place and how you felt', 'Aim for 200+ words'],
      date: 'Oct 10'
    },
    {
      id: 'life-changing-person',
      title: 'Una <em>persona que cambió mi vida</em>',
      level: 'sp2',
      category: 'narrative',
      body: 'Write about someone who shaped who you are — a family member, teacher, coach, friend. Who are they? What did they teach you? How are you different because of them?',
      tips: ['Use imperfect to describe what they were like / what they did regularly', 'Use preterite for specific moments', 'End with how this person changed you'],
      date: 'Oct 12'
    },

    // ========== SPANISH 2 — CULTURAL / COUNTRY ==========
    {
      id: 'trip-to-peru',
      title: 'Un <em>viaje a Perú</em>',
      level: 'sp2',
      category: 'cultural',
      body: 'Imagine you traveled to Peru. Tell the story: Where did you go (Lima, Cuzco, the Andes, the jungle)? What did you eat? Did you visit Machu Picchu? What did you bring home? Use Peruvian vocabulary.',
      tips: ['Use the Perú vocabulary deck (cordillera, selva, ceviche, papa, etc.)', 'Write in preterite (fui, vi, comí, subí)', 'Aim for 200+ words'],
      date: 'Oct 18'
    },
    {
      id: 'mexico-culture',
      title: 'México: <em>cultura y tradiciones</em>',
      level: 'sp2',
      category: 'cultural',
      body: 'Describe Mexican culture as you understand it. What are the food, festivals, traditions, and people known for? What surprises you about Mexico? What would you want to learn more about?',
      tips: ['Use the Mundo section for specific details', 'Use cultural vocabulary (mariachi, frontera, indígena)', 'Try not to rely on stereotypes — be specific'],
      date: 'Oct 20'
    },
    {
      id: 'compare-countries',
      title: '<em>Comparando</em> dos países',
      level: 'sp2',
      category: 'cultural',
      body: 'Pick two Spanish-speaking countries and compare them. Geography? Food? History? Famous people? What\'s similar? What\'s different? Which would you rather visit and why?',
      tips: ['Use comparison structures: más que, menos que, tan ___ como', 'Use the Mundo section for facts', 'Aim for 200+ words'],
      date: 'Oct 22'
    },
    {
      id: 'spanish-in-world',
      title: 'La <em>importancia del español</em> en el mundo',
      level: 'sp2',
      category: 'cultural',
      body: 'Why is Spanish important in today\'s world? Where is it spoken? How is it useful in the U.S.? How might it help YOU in the future?',
      tips: ['Use facts you know about Spanish-speaking populations', 'Argue your point with reasons (porque, por eso, además)', 'Make it personal'],
      date: 'Oct 24'
    },
    {
      id: 'favorite-country',
      title: 'Mi <em>país favorito</em> de los que estudiamos',
      level: 'sp2',
      category: 'cultural',
      body: 'Of all the Spanish-speaking countries we\'ve studied, which is your favorite (or which would you most want to visit)? Why? What about its culture, geography, food, or people draws you in?',
      tips: ['Use specific details, not generalities', 'Use ser de for origin', 'End with a clear reason or summary'],
      date: 'Oct 26'
    },

    // ========== SPANISH 2 — OPINION / HYPOTHETICAL ==========
    {
      id: 'time-travel',
      title: 'Si pudiera <em>viajar en el tiempo</em>',
      level: 'sp2',
      category: 'opinion',
      body: 'If you had a time machine, where would you go? To what era? What would you do there? Would you change anything?',
      tips: ['Use the conditional (iría, haría, cambiaría)', 'Combine "si" + imperfect subjunctive (if you\'ve learned it)', 'At least 150 words'],
      due: 'Nov 1',
      date: 'Oct 25'
    },
    {
      id: 'million-dollars',
      title: 'Si tuviera <em>un millón de dólares</em>',
      level: 'sp2',
      category: 'opinion',
      body: 'If you had a million dollars, what would you do with it? Would you spend it? Save it? Give some away? Travel? Be specific.',
      tips: ['Use the conditional (compraría, viajaría, ayudaría)', 'Aim for at least 5 different things you would do', 'Justify with porque'],
      date: 'Oct 28'
    },
    {
      id: 'social-media',
      title: 'Las <em>redes sociales</em>: pros y contras',
      level: 'sp2',
      category: 'opinion',
      body: 'Argue both sides: What are the good things about social media for young people? What are the bad? End with YOUR opinion — should we use less of it?',
      tips: ['Present-tense argument is fine', 'Use connectors: por un lado, por otro lado, sin embargo', 'Use opinion phrases: creo que, pienso que, en mi opinión'],
      date: 'Oct 30'
    },
    {
      id: 'why-learn-language',
      title: '¿Es importante <em>aprender otra lengua</em>?',
      level: 'sp2',
      category: 'opinion',
      body: 'Argue why learning another language matters (or doesn\'t). What benefits does it bring? What\'s hard about it? Why should young people make the effort?',
      tips: ['Take a clear stance early', 'Give 2-3 supporting reasons', 'Use first person to make it personal'],
      date: 'Nov 1'
    },
    {
      id: 'environment',
      title: 'El <em>medio ambiente</em>',
      level: 'sp2',
      category: 'opinion',
      body: 'What can young people do to protect the environment? What changes should we make in our daily lives? What\'s the biggest environmental problem today?',
      tips: ['Use deber + infinitive ("we should"): debemos reciclar', 'Use hay que for general necessity', 'Be specific about actions, not vague'],
      date: 'Nov 3'
    },

    // ========== GRAMMAR-TARGETED ==========
    {
      id: 'ideal-routine',
      title: 'Mi <em>rutina ideal</em>',
      level: 'sp2',
      category: 'grammar',
      body: 'Describe your ideal daily routine — the perfect day from morning to night. Use at least 8 different reflexive verbs. What time would you wake up? What would you do? When would you go to bed?',
      tips: ['Use at least 8 reflexive verbs (levantarse, ducharse, vestirse, etc.)', 'Use the conditional for "ideal" (me levantaría, me acostaría) OR present for "this is what I do"', 'Paired with the Reflexive Verbs lesson'],
      date: 'Nov 5'
    },
    {
      id: 'past-story',
      title: 'Una <em>historia</em> en el pasado',
      level: 'sp2',
      category: 'grammar',
      body: 'Write a short story in the past tense. Beginning, middle, end. It can be real or invented. Mix preterite (what happened) with imperfect (the scene, how things were).',
      tips: ['Use preterite for events: "Un día llegué…"', 'Use imperfect for background: "Era de noche y hacía frío…"', 'Aim for 200+ words', 'Paired with the Preterite & Imperfect lessons'],
      date: 'Nov 8'
    },
    {
      id: 'give-advice',
      title: 'Dale <em>consejos</em> a un amigo',
      level: 'sp2',
      category: 'grammar',
      body: 'A friend is going through a hard time (you decide what — school stress, friendship problems, family issues). Write them a letter giving advice. Use commands.',
      tips: ['Use tú commands: estudia, habla, no te preocupes', 'Use no + command for "don\'t"', 'Use ojalá or espero que to express hopes', 'Paired with Lesson 43: Tú Commands'],
      date: 'Nov 10'
    },
    {
      id: 'formal-letter-request',
      title: 'A <em>formal letter</em> with requests',
      level: 'sp2',
      category: 'grammar',
      body: 'Write a formal letter (to a teacher, principal, business, government office — your choice) asking for something or giving instructions. Use usted commands throughout. Be polite — every command should have "por favor" or similar softening language.<br><br>Possible scenarios: requesting a recommendation letter from a teacher, asking a business to fix a problem with an order, writing to an embassy about a visa question, contacting a tour company about a trip detail.<br><br>Structure: Greeting (Estimado/a señor/a ___) → Reason for writing → Your specific requests (using usted commands) → Closing (Le agradezco su atención · Atentamente, ___).',
      tips: ['Use at least 5 usted commands across the letter', 'Include at least 1 negative command ("No olvide…" / "Por favor, no envíe…")', 'Use the polite forms: "Le agradecería que…" "Si fuera tan amable…"', 'Aim for 150-200 words', 'Paired with Lesson 44: Usted &amp; Ustedes Commands'],
      date: 'Nov 18'
    },
    {
      id: 'guest-house-rules',
      title: 'House rules for a <em>guest</em>',
      level: 'sp2',
      category: 'grammar',
      body: 'A Spanish-speaking exchange student is coming to stay at your house for a week. Write them a friendly "house rules and tips" note explaining how things work — when to wake up, how to use the shower, where to put their things, what NOT to do. Use lots of reflexive tú commands (since you\'re writing to a peer).<br><br>Cover at least: morning routine (waking up, showering, getting dressed), meals (washing hands, sitting at the table), things to do/avoid (calm the dog, don\'t worry about the cat), evening routine (going to bed, not falling asleep with the TV on).',
      tips: ['Use at least 6 reflexive tú commands', 'Mix affirmative and negative — both forms of commands', 'Notice the accents in affirmative (despiértate, dúchate, vístete)', 'Make it friendly, not bossy — you can soften with por favor', 'Aim for 100-150 words', 'Paired with Lesson 45: Reflexive Commands'],
      date: 'Nov 22'
    },
    {
      id: 'recipe-with-pronouns',
      title: 'Write a <em>recipe</em> in Spanish',
      level: 'sp2',
      category: 'grammar',
      body: 'Pick a dish you know how to make — a sandwich, scrambled eggs, pasta, tacos, anything. Write the recipe in Spanish using <strong>tú commands with object pronouns</strong>. The trick: once you mention a noun (the eggs, the bread, the cheese), replace it with a pronoun (lo, la, los, las) in subsequent commands instead of repeating the noun.<br><br>Structure:<br>1. <em>Ingredientes:</em> list what you need<br>2. <em>Preparación:</em> step-by-step commands. First time you mention something, use the noun. Then use the pronoun.<br><br>Example for eggs: "Toma dos huevos. Rómpelos en un bowl. Bátelos bien con un tenedor. Calienta una sartén. Pon mantequilla. Cuando esté caliente, échala. Vierte los huevos en la sartén. Muévelos suavemente con una espátula. No los cocines demasiado."',
      tips: ['Use at least 7 commands with object pronouns', 'After introducing an ingredient, replace it with lo/la/los/las', 'Include at least 1 negative command ("no lo dejes…" / "no la cocines…")', 'Notice accents on affirmative commands (rómpelos, échala)', 'Aim for 100-150 words', 'Paired with Lesson 46: Commands with Object Pronouns'],
      date: 'Nov 26'
    },
    {
      id: 'event-planner-notes',
      title: 'Event planner: <em>delegate everything</em>',
      level: 'sp2',
      category: 'grammar',
      body: 'You\'re organizing a big event — a quinceañera, a wedding, a graduation party, a school festival, anything that requires coordination. You have a team of helpers (an assistant, a relative, a friend) and you need to write them a list of instructions that delegates tasks involving multiple people and items.<br><br>The whole point: use <strong>double object pronouns</strong> consistently. "Send THEM the invitations" → "Mándaselas." "Buy IT for him" → "Cómpraselo." Apply the le→se rule whenever needed.<br><br>Structure: write 8-10 numbered instructions. Each one should use a double-pronoun command.<br><br>Example: "1. Las invitaciones están en mi escritorio — mándaselas a todos los invitados antes del viernes. 2. La torta es para la abuela — cómprasela en la panadería de la esquina. 3. Los regalos están envueltos — dáselos a los niños en la fiesta, no antes."',
      tips: ['Use at least 8 double-pronoun commands', 'Apply the le→se rule at least 4 times', 'Include at least 2 negative commands', 'Number your instructions for clarity', 'Use vocabulary from cumpleaños, cotidiano decks', 'Aim for 120-180 words', 'Paired with Lesson 47: Double Object Pronouns'],
      date: 'Dec 3'
    },
    {
      id: 'confusable-pairs-story',
      title: 'A <em>misunderstanding</em> story',
      level: 'sp2',
      category: 'grammar',
      body: 'Write a short story (real or fictional) about a misunderstanding that happened because someone said the wrong thing. Maybe someone "asked for" something (pidió) when they meant to "ask about" something (preguntó por). Maybe someone said they "knew" a place (conocía) when really they only "knew of it" (sabía de). Maybe someone "met" (conoció) someone when they thought they already knew them.<br><br>The whole point: weave together saber, conocer, pedir, and preguntar naturally throughout the story. Use both present-tense and past-tense forms (preterite + imperfect — both work here).<br><br>Sample opening: <em>"El otro día mi amigo Carlos me pidió un favor. Yo sabía que él conocía a mi hermana desde la escuela, pero no sabía que la quería mucho. Cuando me preguntó si podía darle su número, supe inmediatamente lo que pasaba…"</em>',
      tips: ['Use ALL FOUR target verbs at least once each: saber, conocer, pedir, preguntar', 'Try to use at least 1 preterite form of saber/conocer (supe, conocí) with the special "found out" or "met" meaning', 'Mix tenses naturally — present for current state, preterite for one-time events, imperfect for background', 'Make the misunderstanding genuinely funny or interesting', 'Aim for 150-200 words', 'Paired with Lesson 48'],
      date: 'Dec 8'
    },
    {
      id: 'right-now-scene',
      title: '"<em>Right now</em>" — a scene description',
      level: 'sp2',
      category: 'grammar',
      body: 'Pick a busy, interesting place — a family gathering, a school cafeteria, a public market, a beach, a coffee shop, a bus station, your favorite park. Write a paragraph describing what\'s happening RIGHT NOW in that scene. Use <strong>present progressive with object pronouns</strong> as much as you can.<br><br>The whole point: master the flow of "estar + gerund + pronoun" in both positions. Mix between <em>"Lo está haciendo"</em> and <em>"Está haciéndolo"</em> freely.<br><br>Aim for vivid, specific details — what specific people are doing, what they\'re saying to whom, what objects are being passed around. Make the scene come alive.<br><br>Example: <em>"En la cafetería de la escuela todos están comiendo. Mi amigo Daniel está haciendo cola y mirándome con cara de hambre. Le estoy guardando un asiento en la mesa. Las chicas de mi clase están riéndose de algo — están viendo un video y mostrándoselo a otras compañeras. La maestra está cruzando el comedor con una taza de café — la está bebiendo despacio porque está caliente."</em>',
      tips: ['Use at least 8 progressive constructions with pronouns', 'Use BOTH pronoun positions at least 3 times each (before AND attached)', 'Include reflexive progressives ("se está vistiendo," "nos estamos riendo")', 'Include at least 1 double pronoun', 'Notice accents on attached forms', 'Aim for 120-180 words', 'Paired with Lesson 49'],
      date: 'Dec 12'
    },
    {
      id: 'my-family-vs-theirs',
      title: 'My family vs. <em>theirs</em>',
      level: 'sp2',
      category: 'grammar',
      body: 'Compare your family with a friend\'s family using <strong>possessive pronouns</strong>. Don\'t just say "my mom is funny, your mom is serious" — replace the second mention with a pronoun: "Mi mamá es chistosa, la tuya es seria."<br><br>The whole point: practice the swap from possessive adjective (mi mamá) to possessive pronoun (la tuya) in continuous writing. This is how Spanish speakers AVOID being repetitive.<br><br>Cover at least: parents, siblings, pets, family traditions, where you live, family meals, family vacations. For each comparison, introduce the topic with a possessive adjective + noun, then switch to a possessive pronoun for the second half of the comparison.<br><br>Example: <em>"Mi familia es muy diferente a la tuya. Mis padres son tranquilos, los tuyos son aventureros. Mi hermana tiene 15 años, la tuya tiene 8. Nuestra casa es pequeña, la suya — la de tu abuela — es enorme. Nuestras tradiciones son americanas, las tuyas son mexicanas y americanas. Nuestro perro es viejo, el tuyo es un cachorro."</em>',
      tips: ['Use at least 6 possessive pronoun constructions', 'Include all four "owner" types if you can: mine (mío), yours-tú (tuyo), ours (nuestro), his/hers/theirs (suyo)', 'Match gender + number of the THING owned, not the owner', 'Use nuestro\'s FOUR forms (nuestro/nuestra/nuestros/nuestras) at least once each', 'Aim for 120-180 words', 'Paired with Lesson 50'],
      date: 'Dec 16'
    },
    // ========== SPANISH 3 — ADVANCED / LITERATURE ==========
    // Paired with the author spotlight readings (Mundo → Lectura → Advanced).
    {
      id: 'spotlight-rulfo-write',
      title: 'Un <em>pueblo de fantasmas</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Juan Rulfo spotlight first. Then write a short story (in Spanish) about a place that turns out to be inhabited by the dead — but don\'t announce that at the start. Let the narrator drift slowly from the assumption that the people they\'re meeting are living, to the dawning suspicion that they\'re not. Use the techniques Rulfo perfected in <em>Pedro Páramo</em>: fragmentary dialogue, shifts in time without warning, voices that arrive without speakers attached. The reader should feel disoriented before they understand why.<br><br>Suggested opening tone: <em>"Vine a este pueblo porque me dijeron que aquí vivía mi padre. Me lo había prometido mi madre antes de morir…"</em>',
      tips: ['Use BOTH preterite and imperfect freely — Rulfo moves between them mid-paragraph', 'Include at least 3 fragments of unattributed dialogue ("—Aquí hace frío. / —Siempre lo ha hecho.")', 'Avoid explaining things — let the reader piece it together', 'Aim for 250-350 words', 'Paired with the Juan Rulfo spotlight reading'],
      date: 'Apr 5'
    },
    {
      id: 'spotlight-paz-write',
      title: 'Las <em>máscaras</em> de mi cultura',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Octavio Paz spotlight first. Paz argued in <em>El laberinto de la soledad</em> that Mexicans wear "masks" — that the formality, the indirection, the polite distance are not the absence of feeling but a protection from it. Whether you agree with him or not, write an essay (in Spanish) examining the masks people wear in YOUR culture. What gets hidden? What gets performed? When does the mask come off?<br><br>This is a personal essay, not literary criticism — Paz wrote about Mexicans because he was one. Write about whatever community you actually belong to: your family, your school, your hometown, your religious community, your ethnic group, your generation.',
      tips: ['Use the subjunctive when speculating ("Quizá sea porque…", "Es posible que escondamos…")', 'Use abstract nouns: la soledad, la vergüenza, la dignidad, el orgullo, el silencio', 'Reference Paz directly at least once but disagree with him if you want', 'Aim for 300-400 words', 'Paired with the Octavio Paz spotlight reading'],
      date: 'Apr 8'
    },
    {
      id: 'spotlight-sabato-write',
      title: 'Una <em>confesión</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Ernesto Sábato spotlight first. <em>El túnel</em> is told in first person by a narrator who has committed a terrible act and is now writing his confession. The voice is intelligent, articulate, paranoid, self-justifying — and unreliable. The reader sees what the narrator can\'t see about himself.<br><br>Write (in Spanish) a confession monologue in the voice of a narrator who has done something they\'re trying to explain to the reader — but listen to how they try to explain it. They should be making excuses without realizing they\'re making excuses. The crime can be small (something cruel said to a sibling years ago) or large (your imagination), as long as the voice is fully inside the narrator\'s head.',
      tips: ['First person throughout — never break out', 'Use the imperfect for habitual past behavior ("Yo siempre era el que…")', 'Include at least 3 self-justifying phrases ("Pero hay que entender…", "No fue mi culpa que…", "Cualquiera lo habría hecho…")', 'End with the narrator still not really getting it', 'Aim for 250-400 words', 'Paired with the Ernesto Sábato spotlight reading'],
      date: 'Apr 12'
    },
    {
      id: 'spotlight-quiroga-write',
      title: 'Un <em>cuento al estilo de Quiroga</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Horacio Quiroga spotlight first — including his <em>Decálogo del perfecto cuentista</em>. Then write a short story (in Spanish) following Quiroga\'s rules. Specifically:<br><br>• Set it in a natural environment that is beautiful and indifferent — the jungle, the sea, a mountain, a desert<br>• A small group of characters, ideally just 1-2<br>• Something goes wrong — quietly, not dramatically<br>• The ending should be devastating but inevitable, looking back<br>• Write tight — every sentence has to earn its place. Cut anything that isn\'t doing work.<br><br>Quiroga\'s Rule 7: <em>"No adjetivar sin necesidad."</em> Don\'t add adjectives unless you have to. If a noun is doing the work, leave it alone.',
      tips: ['Maximum 300 words — Quiroga would respect the restraint', 'Use the preterite for the action sequence; imperfect only for setting', 'No fancy vocabulary — the simplest word is usually the strongest', 'Read it aloud — anything that sounds ornate, cut', 'Paired with the Horacio Quiroga spotlight reading'],
      date: 'Apr 15'
    },
    {
      id: 'spotlight-vallejo-write',
      title: 'Un <em>poema fracturado</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the César Vallejo spotlight first. <em>Trilce</em> (1922) broke Spanish grammar deliberately — inventing words, using numerals inside words, scattering language across the page when ordinary syntax couldn\'t hold the feeling.<br><br>Write (in Spanish) a short poem about loss, exhaustion, or longing that uses Vallejo\'s methods. Break a rule on purpose. Invent a word. Use a number where a letter belongs. Let a sentence trail off mid-thought. The point is not nonsense — it\'s the way grief and exhaustion ALREADY break our language, and Vallejo just put that on the page honestly.',
      tips: ['12-20 lines is plenty', 'Each line should be doing emotional work, not just describing', 'Invent at least ONE word (Vallejo did this constantly — "trilce" itself is invented)', 'Don\'t explain the poem in a final line — let it end where it ends', 'Paired with the César Vallejo spotlight reading'],
      date: 'Apr 18'
    },
    {
      id: 'spotlight-mutis-write',
      title: 'En el <em>borde del mundo</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Álvaro Mutis spotlight first. His character Maqroll el Gaviero wanders the world — the Amazon, the Mississippi delta, Asian ports, freight ships — never settling anywhere, observing failed schemes and impossible loves with a calm, world-weary voice.<br><br>Write (in Spanish) a first-person scene in the voice of someone who has arrived at the literal or figurative edge of the world — the last port, the end of a river, an abandoned mining town, the last gas station. Describe what you see, what you remember of how you got here, and what you intend to do next. Maqroll\'s voice is unhurried. The reader knows things have gone wrong, but the narrator doesn\'t complain.',
      tips: ['First person, past tense ("Llegué…", "Recordé…")', 'Use concrete sensory detail — heat, rust, smell of fuel, dust on a railing', 'No exclamation points. Maqroll doesn\'t shout.', 'End with a forward-looking sentence that\'s ambiguous ("Mañana, quizá, tomaré el barco hacia el norte.")', 'Aim for 200-300 words', 'Paired with the Álvaro Mutis spotlight reading'],
      date: 'Apr 22'
    },
    {
      id: 'spotlight-benedetti-write',
      title: 'Un <em>te quiero</em> honesto',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Mario Benedetti spotlight first. His most famous poem, <em>"Te quiero"</em>, doesn\'t use florid metaphors — it lists what loving someone actually means in plain, almost conversational language: working alongside them, sharing political convictions, recognizing their hands as the hands you want to be holding.<br><br>Write (in Spanish) a poem or short prose piece in Benedetti\'s style for someone you actually know — a parent, a sibling, a best friend, a partner, a teacher, an abuela. The constraint: no easy poetic words. No <em>corazón</em>, no <em>estrella</em>, no <em>siempre</em>. Use the things that actually make this person who they are. The most particular details are the most universal.',
      tips: ['Plain language — Benedetti would', 'Use lists ("porque tus manos…, porque tu voz…, porque cuando…")', 'Try to start each line with a different connector or anchor word', 'Length: 12-25 lines or 150-250 words of prose', 'Paired with the Mario Benedetti spotlight reading'],
      date: 'Apr 25'
    },
    {
      id: 'spotlight-bolano-write',
      title: 'Un <em>coro de voces</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Roberto Bolaño spotlight first. <em>Los detectives salvajes</em> is told through dozens of voices — different narrators, each speaking briefly about the same elusive characters across twenty years. The reader never gets a single authoritative version of events; the truth has to be assembled.<br><br>Write (in Spanish) a short polyphonic piece: imagine an event that everyone in your school or family remembers slightly differently. Now give three or four voices, each speaking for a paragraph in their own register, telling their version. The reader pieces it together — including the parts where the witnesses contradict each other. Don\'t reconcile the contradictions; let them stand.',
      tips: ['Label each section with the speaker\'s name + a date/place (like Bolaño does)', 'Each voice should sound distinct — vocabulary, rhythm, what they leave out', 'Use the preterite for the event itself, present for the speaker\'s commentary', 'Don\'t resolve who\'s "right" — the contradictions ARE the point', 'Aim for 350-500 words across all voices', 'Paired with the Roberto Bolaño spotlight reading'],
      date: 'Apr 29'
    },
    {
      id: 'spotlight-roa-bastos-write',
      title: 'La <em>voz del dictador</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Augusto Roa Bastos spotlight first. <em>Yo el supremo</em> is told in the voice of an aging dictator dictating his own defense — paranoid, brilliant, fragmentary, alternating between official decrees and private complaint.<br><br>Write (in Spanish) a short monologue in the voice of someone in absolute power who is justifying their decisions to history. Could be a small-scale tyrant (a despotic principal, a controlling parent, a club president gone power-mad) or a literal dictator. The voice should be intelligent, well-spoken, paranoid, and aware that history may judge them — and trying to shape that judgment in advance.<br><br>The Roa Bastos trick: alternate between two registers in the same paragraph — the formal, decree-like voice ("Que conste que…") and the private grievance ("Y a esa traidora, la que se atrevió…").',
      tips: ['First person throughout', 'Use the imperative for orders ("Que se haga…", "Quítenlo de…")', 'Use the subjunctive for paranoid speculation ("Quizá conspiren…", "Cualquiera que ose…")', 'Slip into self-pity at least once — power is lonely', 'Aim for 250-400 words', 'Paired with the Augusto Roa Bastos spotlight reading'],
      date: 'May 3'
    },
    {
      id: 'spotlight-fuentes-write',
      title: 'En el <em>lecho de muerte</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Carlos Fuentes spotlight first. <em>La muerte de Artemio Cruz</em> moves between three narrative voices: <em>yo</em> (Artemio dying), <em>tú</em> (an interior accusing voice), and <em>él</em> (omniscient narration of his life). The three voices weave a single death.<br><br>Write (in Spanish) a short piece about a character at the end of their life (literal or symbolic — could be the end of a relationship, a job, an era). Use the three Fuentes voices: <em>yo</em> for present consciousness, <em>tú</em> for the inner accuser/judge, <em>él/ella</em> for the third-person narrator looking at the whole arc from outside. Switch between them, even within a paragraph.',
      tips: ['Mark transitions clearly at first — italic for tú, indent for él — until the reader knows how to read it', 'The yo voice is fragmentary and present-tense', 'The tú voice is accusatory ("Recuerdas aquella tarde cuando…")', 'The él voice has historical distance ("En 1985 había decidido que…")', 'Aim for 350-450 words', 'Paired with the Carlos Fuentes spotlight reading'],
      date: 'May 7'
    },
    {
      id: 'spotlight-bodoc-write',
      title: 'El <em>comienzo de una saga</em>',
      level: 'sp3',
      category: 'literature',
      body: 'Read the Liliana Bodoc spotlight first. <em>La saga de los confines</em> built epic fantasy out of pre-Columbian American sources — Mapuche, Inca, Mexica, Mayan — rather than European medieval ones. The villains arrive from across the sea bringing horses and a new god.<br><br>Write (in Spanish) the opening chapter of a fantasy novel rooted in a tradition that ISN\'T European medieval. Could be pre-Columbian American (the easiest starting point if you\'ve read about Maya or Inca cosmology), African, East Asian, Polynesian, or any other tradition with its own mythology. Establish a world with its own geography, its own gods or spirits, and its own coming threat. The threat doesn\'t have to be conquest — could be drought, plague, the return of an ancient enemy.<br><br>This is worldbuilding — show the world before you tell us what\'s wrong with it. Bodoc opens her books with characters going about their lives, and only gradually do we learn what\'s about to break.',
      tips: ['Establish a sense of place in the first paragraph (a specific landscape, a specific season, a specific time of day)', 'Use proper nouns from a real mythology — research a few names of gods, landforms, peoples', 'Imperfect tense for "this is how things had always been"', 'Avoid Tolkien-isms — no elves, no orcs, no medieval European architecture', 'End with the FIRST sign that something is wrong — small, unsettling, not yet an emergency', 'Aim for 400-500 words', 'Paired with the Liliana Bodoc spotlight reading'],
      date: 'May 10'
    }
  ];

  const SPEAKING_TOPICS = [
    // ========== CULTURE — paired with vocab decks ==========
    {
      id: 'salud-speak',
      title: 'En el <em>consultorio</em> del médico',
      level: 'sp1', category: 'roleplay',
      body: 'Role-play a visit to the doctor for at least 60 seconds. Play both the patient and the doctor: describe your symptoms, answer the doctor\'s questions, and have the doctor give a diagnosis and treatment. Use the Health & medicine vocab.',
      tips: ['Useful vocab: el síntoma, la fiebre, la tos, el dolor, doler, la receta, la medicina, descansar', 'Patient lines: "Me duele…", "Tengo fiebre"; Doctor lines: "¿Desde cuándo…?", "Tome esta medicina"', 'Switch voices clearly between patient and doctor'],
      date: ''
    },
    {
      id: 'musica-speak',
      title: 'La <em>música</em> que te gusta',
      level: 'sp1', category: 'personal',
      body: 'Talk for at least 60 seconds about music. What do you listen to and why? Do you play an instrument or sing? Describe your favorite singer or a concert. Use the Music vocab.',
      tips: ['Useful vocab: la música, la canción, el cantante, tocar, el instrumento, el concierto, el ritmo', 'Use me gusta / me encanta + porque', 'Give specific examples (artists, songs)'],
      date: ''
    },
    {
      id: 'educacion-speak',
      title: 'La importancia de la <em>educación</em>',
      level: 'sp2', category: 'opinion',
      body: 'Talk for at least 75 seconds about education. Why does it matter? What makes a good teacher? Should it be free? Share the most important thing you have learned. Use the Education vocab.',
      tips: ['Useful vocab: la educación, aprender, enseñar, el maestro, la universidad, el conocimiento', 'Signal opinion: creo que, me parece que, es importante que', 'Give at least two reasons'],
      date: ''
    },
    {
      id: 'militar-speak',
      title: 'La <em>guerra</em> y la paz',
      level: 'sp3', category: 'opinion',
      body: 'Talk for at least 75 seconds about war and peace. Why do wars happen? Is war ever justified? Why is peace so valuable? Be thoughtful and respectful. Use the Military vocab.',
      tips: ['Useful vocab: el ejército, el soldado, la guerra, la batalla, la paz, defender, la victoria', 'Use the subjunctive for opinion (no creo que la guerra sea…)', 'Organize: por un lado… por otro lado…'],
      date: ''
    },
    {
      id: 'armas-speak',
      title: 'Las <em>armas</em> en la historia',
      level: 'sp3', category: 'cultural',
      body: 'Talk for at least 60 seconds about how weapons changed history — from swords and shields to gunpowder and cannons. Why do countries control weapons today? Stay factual. Use the Weapons vocab.',
      tips: ['Useful vocab: el arma, la espada, el escudo, la armadura, la pólvora, el cañón, peligroso', 'Use the preterite/imperfect to narrate history', 'Keep it analytical, not graphic'],
      date: ''
    },
    {
      id: 'derecho-speak',
      title: 'La <em>justicia</em> y la ley',
      level: 'sp3', category: 'roleplay',
      body: 'Role-play a short courtroom scene for at least 60 seconds, or explain how a trial works. Mention the judge, the lawyer, the witnesses, and how someone is found innocent or guilty. Use the Law vocab.',
      tips: ['Useful vocab: la ley, el juez, el abogado, el tribunal, el testigo, inocente, culpable, las pruebas', 'You can switch voices (juez, abogado, testigo)', 'Use the present and connectors (entonces, por lo tanto)'],
      date: ''
    },
    {
      id: 'profesiones-speak',
      title: 'Tu <em>profesión</em> ideal',
      level: 'sp1', category: 'personal',
      body: 'Talk for at least 60 seconds about your ideal career. What do you want to be and why? What skills does it need? Money, passion, or helping others — what matters most to you? Use the Professions vocab.',
      tips: ['Useful vocab: la profesión, el médico, el ingeniero, el maestro, la carrera, el trabajo', 'Use quiero ser… and me gustaría… porque…', 'Describe a typical day in that job'],
      date: ''
    },
    {
      id: 'espacio-speak',
      title: 'Imagina un viaje al <em>espacio</em>',
      level: 'sp2', category: 'describe',
      body: 'Talk for at least 60 seconds imagining you travel to space. Describe the launch, what you see, and how it feels with no gravity. Would you explore Mars? Use the Space vocab.',
      tips: ['Useful vocab: el cohete, el astronauta, el planeta, la estrella, la gravedad, explorar', 'Use the conditional to imagine (vería, sentiría, exploraría)', 'Describe with the senses'],
      date: ''
    },
    {
      id: 'vehiculos-speak',
      title: 'Cómo te <em>mueves</em> por tu ciudad',
      level: 'sp1', category: 'personal',
      body: 'Talk for at least 60 seconds about how you get around. What transportation do you use? What are the pros and cons? Which do you prefer and why? Use the Vehicles vocab.',
      tips: ['Useful vocab: el coche, el autobús, la bicicleta, el metro, conducir, el tráfico', 'Use comparisons (más rápido que, más barato que)', 'State a preference (prefiero… porque…)'],
      date: ''
    },
    {
      id: 'herramientas-speak',
      title: 'Cuenta cómo <em>arreglaste</em> algo',
      level: 'sp2', category: 'narrate',
      body: 'Talk for at least 60 seconds about a time you fixed or built something. What broke, what tools did you use, and what steps did you follow? Use the Tools vocab.',
      tips: ['Useful vocab: el martillo, el destornillador, la sierra, arreglar, reparar, apretar', 'Use the preterite (usé, arreglé, apreté)', 'Sequence words: primero, luego, al final'],
      date: ''
    },
    {
      id: 'construccion-speak',
      title: 'Explica cómo se <em>construye</em> algo',
      level: 'sp2', category: 'cultural',
      body: 'Talk for at least 60 seconds explaining how something is built. Who is involved, what are the steps, and what materials are used? Use the Construction vocab.',
      tips: ['Useful vocab: construir, los planos, los cimientos, el ladrillo, la pared, el techo, el obrero', 'Use sequence words and the passive se (se construye, se levanta)', 'Go in order: planos → cimientos → paredes → techo'],
      date: ''
    },
    {
      id: 'caza-speak',
      title: 'Tu opinión sobre la <em>caza</em>',
      level: 'sp3', category: 'opinion',
      body: 'Talk for at least 75 seconds about hunting. Is it a tradition worth keeping? Should there be rules like seasons and permits? Give your opinion respectfully and explain your reasons. Use the Hunting vocab.',
      tips: ['Useful vocab: la caza, cazar, el cazador, el permiso, la temporada de caza, proteger', 'Signal opinion: creo que, me parece que, por un lado… por otro lado', 'Give at least two reasons'],
      date: ''
    },
    {
      id: 'pesca-speak',
      title: 'Cuenta un día de <em>pesca</em>',
      level: 'sp2', category: 'narrate',
      body: 'Talk for at least 60 seconds narrating a fishing trip. Where did you go, what did you bring, did the fish bite, and what did you catch? Use the Fishing vocab and past tenses.',
      tips: ['Useful vocab: pescar, la caña de pescar, el anzuelo, la carnada, picar, atrapar, soltar', 'Use the preterite (fui, pesqué, atrapé) and imperfect for description', 'Sequence words: primero, luego, al final'],
      date: ''
    },
    {
      id: 'acampar-speak',
      title: 'Describe un <em>campamento</em>',
      level: 'sp2', category: 'narrate',
      body: 'Talk for at least 60 seconds about a camping trip. What did you pack, where did you camp, and what did you do? Describe the night and the scenery. Use the Camping vocab.',
      tips: ['Useful vocab: acampar, la tienda de campaña, el saco de dormir, la fogata, el sendero, al aire libre', 'Use the preterite for events and imperfect for the setting', 'Describe with the senses (se veían las estrellas, hacía frío…)'],
      date: ''
    },
    {
      id: 'naturaleza-speak',
      title: 'Cómo proteger la <em>naturaleza</em>',
      level: 'sp2', category: 'opinion',
      body: 'Talk for at least 60 seconds about protecting nature. What environmental problems worry you? What can people do to help? Use the Nature vocab and make a call to action.',
      tips: ['Useful vocab: la naturaleza, el medio ambiente, la contaminación, proteger, el bosque, reciclar', 'Use debemos + infinitive and es importante + infinitive', 'Give concrete examples of what people can do'],
      date: ''
    },
    {
      id: 'matematicas-speak',
      title: 'Explica un <em>problema de matemáticas</em>',
      level: 'sp2', category: 'cultural',
      body: 'Talk for at least 60 seconds explaining how you solve a simple math problem out loud, as if teaching a classmate. Use the numbers and operations. For example, calculating a discount or splitting a restaurant bill. Use the Math vocab.',
      tips: ['Useful vocab: sumar, restar, multiplicar, dividir, el porcentaje, el resultado, igual a', 'Narrate the steps: primero, luego, entonces', 'Say the operations out loud (dos más dos es igual a cuatro)'],
      date: ''
    },
    {
      id: 'politica-speak',
      title: 'Tu opinión sobre la <em>política</em>',
      level: 'sp3', category: 'opinion',
      body: 'Talk for at least 75 seconds about a political topic you care about. Why is it important to vote? What rights matter most to you? Be respectful and explain your reasons. Use the Politics vocab.',
      tips: ['Useful vocab: votar, las elecciones, los derechos, la libertad, el gobierno, la democracia', 'Signal opinion: creo que, me parece que, en mi opinión', 'Give at least two reasons (porque…, además…)'],
      date: ''
    },
    {
      id: 'ciencia-speak',
      title: 'Describe un <em>experimento</em>',
      level: 'sp2', category: 'cultural',
      body: 'Talk for at least 60 seconds describing a science experiment, real or imagined. Explain your hypothesis, what you did, what you measured, and the result. Use the Science vocab.',
      tips: ['Useful vocab: la hipótesis, el experimento, observar, medir, el laboratorio, los resultados', 'Use the preterite to narrate (observé, medí, descubrí)', 'Sequence words: primero, luego, finalmente'],
      date: ''
    },
    {
      id: 'geografia-speak',
      title: 'Describe la <em>geografía</em> de un lugar',
      level: 'sp1', category: 'describe',
      body: 'Talk for at least 60 seconds describing the geography of a place you know or want to visit. Where is it? What mountains, rivers, coasts, or deserts does it have? What is the climate like? Use the Geography vocab.',
      tips: ['Useful vocab: la montaña, el río, la costa, el desierto, la selva, el clima, el norte/sur', 'Use hay and está for what exists and where', 'Describe with adjectives (alto, seco, tropical, enorme)'],
      date: ''
    },
    {
      id: 'mercado-speak',
      title: 'En el <em>mercado</em>: regatear',
      level: 'sp2', category: 'roleplay',
      body: 'Role-play a market scene for at least 60 seconds. Play BOTH parts: the customer and the vendor. Ask the price ("¿A cuánto el kilo?"), say it\'s too expensive, haggle for a better price, agree, and pay. Use the Market & shopping vocab.',
      tips: ['Useful vocab: ¿cuánto cuesta?, el precio, caro, barato, regatear, el descuento, pagar, el efectivo, el cambio', 'Be polite: "¿Me puede hacer un descuento?" / "Se lo dejo en…"', 'Switch voices clearly between the customer and the vendor'],
      date: ''
    },
    {
      id: 'cocina-receta-speak',
      title: 'Explica cómo <em>preparar un plato</em>',
      level: 'sp1', category: 'cultural',
      body: 'Talk for at least 60 seconds explaining how to make a dish you like, as if you were teaching someone. Name the ingredients and go through the steps in order — what do you chop, fry, boil, mix, or bake? Use the Cooking vocab.',
      tips: ['Useful vocab: picar, freír, hervir, hornear, mezclar, agregar, probar, la sartén, la olla', 'Use sequence words: primero, luego, después, finalmente', 'Commands work great here: "Pica la cebolla, luego fríela…"'],
      date: ''
    },
    {
      id: 'bailes-hispanos-speak',
      title: 'Habla de un <em>baile</em>',
      level: 'sp2', category: 'cultural',
      body: 'Talk for at least 60 seconds about a Hispanic dance. Pick one — salsa, tango, flamenco, cumbia, merengue, bachata — say where it\'s from, describe its rhythm and style, and explain why you like it. Do you know how to dance it? Would you like to learn? Use the Dances vocab.',
      tips: ['Useful vocab: el baile, bailar, el ritmo, la pareja, la pista de baile, el bailarín / la bailarina', 'Use me gusta / me encanta + reasons (porque…)', 'Try the conditional: "Me gustaría aprender a bailar…"'],
      date: ''
    },
    {
      id: 'religion-mundo-hispano-speak',
      title: 'Habla de la <em>religión y la cultura</em>',
      level: 'sp3', category: 'cultural',
      body: 'Talk for at least 75 seconds about religion and tradition in the Hispanic world. Describe the role of Catholicism, give an example of syncretism (the Virgin of Guadalupe, Día de los Muertos, santería), and mention how things are changing today. Be respectful and descriptive.',
      tips: ['Useful vocab: la fe, la creencia, el catolicismo, rezar / orar, la procesión, sagrado, espiritual', 'Use the present for general facts; signal opinion with "me parece que…"', 'Aim for clear, organized ideas over speed'],
      date: ''
    },
    // ========== TIER 1: READ-ALOUD (scripted — Spanish 1) ==========
    {
      id: 'read-greeting',
      title: 'Read aloud: <em>a greeting</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this short text aloud, slowly and clearly. Focus on your vowels and rolling any "r" sounds. Read it three times — slow, medium, natural.',
      script: '¡Hola! Me llamo [tu nombre]. Tengo [tu edad] años. Vivo en Cincinnati. Estudio español en la escuela. Me gusta la música y el fútbol. Mucho gusto.',
      tips: ['Pure pronunciation practice — no need to invent anything', 'Five clean vowel sounds: a-e-i-o-u', 'Slow is better than fast'],
      date: 'Sep 1'
    },
    {
      id: 'read-family',
      title: 'Read aloud: <em>my family</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this paragraph about a family out loud. Don\'t worry about meaning yet — focus on smooth, clear pronunciation.',
      script: 'Mi familia es pequeña. Tengo una hermana y un hermano. Mi madre se llama Ana y mi padre se llama Luis. Tenemos un perro que se llama Max. Los domingos comemos juntos en casa.',
      tips: ['Watch the "ll" in "llama" — sounds like English "y"', 'The "h" in "hermana" is silent', 'Pause at the periods'],
      date: 'Sep 2'
    },
    {
      id: 'read-trabalenguas',
      title: 'Try a <em>tongue twister</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Practice this classic trabalenguas. Record yourself saying it three times — slow, medium, fast. Have fun with it; nobody gets it perfect the first time.',
      script: 'Tres tristes tigres tragaban trigo en un trigal.',
      tips: ['Roll those Rs as much as you can', 'Start very slow', 'Laugh when you mess up — everyone does'],
      date: 'Sep 5'
    },
    {
      id: 'read-trabalenguas-2',
      title: 'Tongue twister: <em>level up</em>',
      level: 'sp1', category: 'readaloud',
      body: 'A harder trabalenguas. Same drill: slow, medium, fast, three recordings.',
      script: 'Pablito clavó un clavito. ¿Qué clavito clavó Pablito?',
      tips: ['The "cl" cluster is tricky — slow down', 'Keep vowels crisp', 'Have fun with the rhythm'],
      date: 'Sep 6'
    },
    {
      id: 'read-numbers',
      title: 'Read aloud: <em>numbers & dates</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read these numbers and the date aloud clearly. This builds fluency with number pronunciation.',
      script: 'Uno, dos, tres, cuatro, cinco. Diez, veinte, treinta, cuarenta, cincuenta. Hoy es lunes, quince de septiembre de dos mil veintiséis.',
      tips: ['"Cinco" and "cincuenta" — keep them distinct', '"Veintiséis" has an accent — stress the end', 'Steady pace'],
      date: 'Sep 7'
    },
    {
      id: 'read-peru-aloud',
      title: 'Read aloud: <em>sobre el Perú</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this short paragraph about Peru aloud. (Pairs with the Perú vocabulary deck.)',
      script: 'El Perú es un país de Sudamérica. Tiene una costa, una sierra y una selva. La comida peruana es famosa en todo el mundo. El ceviche y la papa son típicos del Perú. Muchos turistas visitan Machu Picchu.',
      tips: ['Study the Perú deck first so the words feel familiar', 'The "ch" in "ceviche" and "Machu Picchu" is like English "ch"', 'Clear vowels'],
      date: 'Sep 8'
    },
    {
      id: 'read-espana-aloud',
      title: 'Read aloud: <em>sobre España</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this short paragraph about Spain aloud. (Pairs with the España vocabulary deck.)',
      script: 'España es un país de Europa. La capital es Madrid. La gente cena muy tarde, a las diez de la noche. El flamenco es un baile tradicional del sur. La paella es un plato famoso de Valencia.',
      tips: ['In most of Spain, "c" before e/i sounds like "th" — but "s" is fine for class', 'Watch "ñ" in "España" — "ny" sound', 'Read it twice'],
      date: 'Sep 9'
    },

    // ========== TIER 2: GUIDED (sentence starters — Spanish 1–2) ==========
    {
      id: 'self-introduction',
      title: 'Introduce <em>yourself</em>',
      level: 'sp1', category: 'personal',
      body: 'Record yourself introducing who you are. Use the sentence starters below, but try to add your own details. Speak naturally — don\'t just read.',
      script: 'STARTERS: Me llamo… / Tengo … años. / Soy de… / Vivo en… / Estudio… / Me gusta… / En mi tiempo libre…',
      tips: ['Aim for 30+ seconds', 'Use the starters as a skeleton, add your own words', 'Speak slowly and clearly'],
      due: 'Sep 12',
      date: 'Sep 10'
    },
    {
      id: 'my-day-guided',
      title: 'Describe your <em>daily routine</em>',
      level: 'sp1', category: 'personal',
      body: 'Talk through a normal day. Use reflexive verbs. The starters give you the structure.',
      script: 'STARTERS: Me despierto a las… / Me levanto y… / Por la mañana… / En la escuela… / Por la tarde… / Por la noche, me acuesto a las…',
      tips: ['Use at least 5 reflexive verbs', 'Sequence words: primero, después, luego, finalmente', '45+ seconds'],
      date: 'Sep 14'
    },
    {
      id: 'favorite-food',
      title: 'Talk about your <em>favorite food</em>',
      level: 'sp1', category: 'personal',
      body: '¿Cuál es tu comida favorita? Describe what it is, who makes it, when you eat it, and why you love it.',
      script: 'STARTERS: Mi comida favorita es… / La prepara… / La como cuando… / Me gusta porque… / Es muy…',
      tips: ['Use gustar / encantar', 'Use adjectives: delicioso, rico, sabroso', 'At least 45 seconds'],
      date: 'Sep 16'
    },
    {
      id: 'my-family-speak',
      title: 'Talk about your <em>family</em>',
      level: 'sp1', category: 'personal',
      body: 'Describe the people in your family — who they are, what they\'re like, what you do together.',
      script: 'STARTERS: En mi familia hay… personas. / Mi madre/padre es… / Tengo … hermanos. / Los fines de semana, nosotros… / Me llevo bien con…',
      tips: ['Use ser for personality', 'Make adjectives agree (mi madre es simpática)', '45+ seconds'],
      date: 'Sep 18'
    },
    {
      id: 'describe-photo',
      title: 'Describe a <em>photo</em>',
      level: 'sp1', category: 'describe',
      body: 'Pick any photo on your phone — friends, a place, your pet, food. Describe it out loud in Spanish. Who or what is in it? Where? What\'s happening?',
      script: 'STARTERS: En esta foto hay… / Es / Son… / Están en… / Me gusta esta foto porque…',
      tips: ['Use hay (there is/are)', 'Use estar for location', 'Don\'t pick something too complicated'],
      date: 'Sep 20'
    },
    {
      id: 'weekend-plans',
      title: 'Your <em>weekend plans</em>',
      level: 'sp1', category: 'personal',
      body: 'What are you going to do this weekend? Use "ir + a + infinitive" to talk about the future.',
      script: 'STARTERS: Este fin de semana voy a… / El sábado… / El domingo… / Voy a… con… / Después, quiero…',
      tips: ['Use "voy a + infinitive"', 'At least 4 different activities', '30+ seconds'],
      date: 'Sep 22'
    },
    {
      id: 'peru-guided-speak',
      title: 'Talk about <em>Perú</em>',
      level: 'sp2', category: 'cultural',
      body: 'Using what you learned from the Perú deck and readings, talk about Peru — its geography, food, and culture. (Pairs with the Perú deck.)',
      script: 'STARTERS: El Perú está en… / Tiene tres regiones:… / La comida típica es… / Los incas… / Me gustaría visitar… porque…',
      tips: ['Use Perú deck vocabulary', 'Mix present and a little past tense', '60+ seconds'],
      date: 'Sep 24'
    },
    {
      id: 'argentina-guided-speak',
      title: 'Talk about <em>Argentina</em>',
      level: 'sp2', category: 'cultural',
      body: 'Using the Argentina deck and readings, describe Argentina — the asado, mate, gauchos, tango, Patagonia. (Pairs with the Argentina deck.)',
      script: 'STARTERS: Argentina es famosa por… / El asado es… / El mate es una tradición… / El tango nació en… / Lo que más me interesa es…',
      tips: ['Use Argentina deck vocabulary', 'Explain WHY things are culturally important', '60+ seconds'],
      date: 'Sep 26'
    },
    {
      id: 'read-mexico-aloud',
      title: 'Read aloud: <em>sobre México</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this short paragraph about Mexico aloud, slowly and clearly. (Pairs with the México vocabulary deck.)',
      script: 'México es un país grande de Norteamérica. La capital es la Ciudad de México. La comida mexicana es famosa en todo el mundo. El maíz y el chile son muy importantes. El mariachi es música tradicional del estado de Jalisco. En los mercados venden comida fresca y artesanías coloridas.',
      tips: ['Study the México deck first so the words feel familiar', 'The "x" in "México" sounds like a Spanish "j" (MEH-hee-koh)', 'Keep your vowels clear and steady'],
      date: 'Sep 9'
    },
    {
      id: 'mexico-guided-speak',
      title: 'Talk about <em>México</em>',
      level: 'sp2', category: 'cultural',
      body: 'Using the México deck and readings, talk about Mexico — its food, markets, music, and culture. (Pairs with the México deck.)',
      script: 'STARTERS: México es un país… / La comida típica es… / En los mercados… / El mariachi es… / Lo que más me gusta de México es…',
      tips: ['Use México deck vocabulary', 'Try not to rely on stereotypes — be specific', '60+ seconds'],
      date: 'Sep 27'
    },
    {
      id: 'read-colombia-aloud',
      title: 'Read aloud: <em>sobre Colombia</em>',
      level: 'sp1', category: 'readaloud',
      body: 'Read this short paragraph about Colombia aloud, slowly and clearly. (Pairs with the Colombia vocabulary deck.)',
      script: 'Colombia es un país de Sudamérica. Tiene montañas, bosques y dos costas. El café colombiano es famoso en todo el mundo. Crece en las montañas, donde el clima es perfecto. Colombia también tiene mucha biodiversidad: hay miles de especies de plantas y animales. La música tradicional incluye la cumbia y el vallenato.',
      tips: ['Study the Colombia deck first so the words feel familiar', 'Watch "biodiversidad" — pronounce each syllable: bee-oh-dee-ver-see-DAD', 'Keep your vowels clear'],
      date: 'Sep 10'
    },
    {
      id: 'colombia-guided-speak',
      title: 'Talk about <em>Colombia</em>',
      level: 'sp2', category: 'cultural',
      body: 'Using the Colombia deck and readings, talk about Colombia — its coffee, biodiversity, mountains, music, and culture. (Pairs with the Colombia deck.)',
      script: 'STARTERS: Colombia es un país… / El café es… / La biodiversidad de Colombia… / La música tradicional… / Lo que más me sorprende de Colombia es…',
      tips: ['Use Colombia deck vocabulary', 'Mention specifics (coffee region, biodiversity, two coasts) — be concrete', '60+ seconds'],
      date: 'Sep 28'
    },
    {
      id: 'opinion-guided',
      title: '¿Prefieres… o…? <em>(guided)</em>',
      level: 'sp2', category: 'conversation',
      body: 'Answer these preference questions out loud, with reasons: ¿Prefieres la ciudad o el campo? ¿El verano o el invierno? ¿Cocinar o comer en un restaurante?',
      script: 'STARTERS: Prefiero… porque… / Para mí… / Por un lado… pero por otro lado… / En mi opinión…',
      tips: ['Always give a reason (porque…)', 'Use comparison words', '45+ seconds'],
      date: 'Sep 28'
    },

    // ========== TIER 3: OPEN-ENDED (no script — Spanish 2) ==========
    {
      id: 'last-weekend-open',
      title: 'What did you do <em>last weekend</em>?',
      level: 'sp2', category: 'narrate',
      body: 'Tell the story of your last weekend in the past tense. No script — just talk. Where did you go? What did you do? Who were you with?',
      tips: ['Use the preterite (fui, comí, vi, jugué)', 'Use some imperfect for description (hacía sol, estaba cansado)', '60+ seconds'],
      due: 'Oct 5',
      date: 'Sep 30'
    },
    {
      id: 'childhood-open',
      title: 'Talk about your <em>childhood</em>',
      level: 'sp2', category: 'narrate',
      body: 'What was your life like when you were a kid? What did you used to do? No script — speak freely in the imperfect.',
      tips: ['Use the imperfect throughout (vivía, jugaba, tenía)', 'Talk about habits, not single events', '60+ seconds'],
      date: 'Oct 2'
    },
    {
      id: 'memorable-day-open',
      title: 'The best day you <em>remember</em>',
      level: 'sp2', category: 'narrate',
      body: 'Describe one of the best days you can remember. What happened? Why was it special? No script — narrate it naturally.',
      tips: ['Mix preterite and imperfect', 'Set the scene, then tell what happened', '60+ seconds'],
      date: 'Oct 4'
    },
    {
      id: 'opinion-open',
      title: 'Give your <em>opinion</em>',
      level: 'sp2', category: 'conversation',
      body: 'Pick ONE and speak about it for at least a minute, no script: Is social media good or bad for teenagers? Should everyone learn a second language? What is the biggest problem facing your generation?',
      tips: ['Take a clear position early', 'Give 2-3 reasons', 'Use: creo que, pienso que, en mi opinión, además'],
      date: 'Oct 6'
    },
    {
      id: 'roleplay-restaurant',
      title: 'Role-play: <em>at a restaurant</em>',
      level: 'sp2', category: 'roleplay',
      body: 'Imagine you\'re ordering at a restaurant in a Spanish-speaking country. Play both roles (waiter and customer), or just the customer. Greet, ask about the menu, order food and a drink, ask for the bill.',
      tips: ['Use "quisiera" / "me gustaría" to order politely', 'Use usted with the waiter', '45+ seconds'],
      date: 'Oct 8'
    },
    {
      id: 'roleplay-directions',
      title: 'Role-play: <em>asking for directions</em>',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re lost in a Spanish-speaking city. Act out asking a stranger for directions to a place (the museum, the train station, a restaurant) and imagine their response.',
      tips: ['Use "¿Dónde está…?" and "¿Cómo llego a…?"', 'Use commands for the response (gire, siga, cruce)', '45+ seconds'],
      date: 'Oct 10'
    },
    {
      id: 'describe-place-open',
      title: 'Describe your <em>favorite place</em>',
      level: 'sp2', category: 'describe',
      body: 'Describe a place that matters to you — no script. It could be a room, a city, a country, somewhere in nature. Why is it special? What do you do there?',
      tips: ['Use estar for location, ser for description', 'Appeal to the senses', '60+ seconds'],
      date: 'Oct 12'
    },
    {
      id: 'compare-countries-open',
      title: 'Compare <em>two countries</em>',
      level: 'sp2', category: 'cultural',
      body: 'Using the country decks you\'ve studied (Perú, España, Argentina, México), compare two of them out loud. Geography, food, culture. Which would you rather visit? No script.',
      tips: ['Use comparisons: más que, menos que, tan… como', 'Pull from the country decks', '60+ seconds'],
      date: 'Oct 14'
    },

    // ========== TIER 2: SCAFFOLDED — Tú Commands ==========
    {
      id: 'teach-something-scaffolded',
      title: 'Teach a friend <em>something you know</em> (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Pick something you know how to do — make a sandwich, get to school, play a video game, do a TikTok dance, anything. Teach a friend how to do it using a sequence of tú commands. Use the scaffold below to build your speech, then record it.<br><br><strong>Scaffold:</strong><br>1. <em>Primero, ___</em> (give a first command — what to do first)<br>2. <em>Después, ___</em> (give a second command — what comes next)<br>3. <em>Luego, ___</em> (third command — keep building)<br>4. <em>Pero, no ___</em> (ONE negative command — something they should NOT do)<br>5. <em>Finalmente, ___</em> (final command — how to finish)<br><br>Example: "Te voy a enseñar a hacer un sándwich de jamón. Primero, saca el pan. Después, pon mantequilla en el pan. Luego, añade jamón y queso. Pero, no pongas tomate si no te gusta. Finalmente, cierra el sándwich y cómelo."',
      tips: ['Use at least 5 tú commands (4 affirmative + 1 negative)', 'Include at least one irregular command (ven, di, sal, haz, ten, ve, pon, sé)', 'Speak as if you\'re actually teaching someone', '45+ seconds', 'Paired with Lesson 43: Tú Commands'],
      date: 'Nov 12'
    },
    // ========== TIER 3: OPEN — Tú Commands ==========
    {
      id: 'bossy-sibling',
      title: 'A day as a <em>bossy older sibling</em>',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re the bossy older sibling for a day. Your job: tell your younger brother/sister what to do (and what NOT to do) from morning to night. Wake them up, give them breakfast instructions, send them to school, manage their afternoon, get them ready for bed. Use lots of tú commands. No script.<br><br>Imagine the scenes: "¡Despiértate! ¡Levántate ya! No te quedes en la cama. Vístete rápido. Come tu desayuno. No comas tan despacio…" Make it funny if you want — really play the bossy sibling.',
      tips: ['Mix affirmative and negative commands freely', 'Use at least 3 reflexive commands (despiértate, levántate, vístete, lávate, etc.)', 'Try to include all 8 irregular tú commands (ven, di, sal, haz, ten, ve, pon, sé) if you can', '60+ seconds', 'Have fun with it — exaggerate the bossiness', 'Paired with Lesson 43: Tú Commands'],
      date: 'Nov 14'
    },

    // ========== TIER 2: SCAFFOLDED — Usted Commands ==========
    {
      id: 'taxi-driver-scaffolded',
      title: 'Take a taxi: <em>direct the driver</em> (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'You\'re in a Spanish-speaking city and need to direct a taxi driver to your destination. Since the taxi driver is a stranger, you must use <strong>usted commands</strong>. Use the scaffold below to organize your speech, then record it.<br><br><strong>Scaffold:</strong><br>1. <em>Greet:</em> Buenos días / Buenas tardes, señor/señora.<br>2. <em>Tell the driver where to go:</em> Por favor, lléveme a ___ (formal command: take me to…).<br>3. <em>Give a direction:</em> Vaya por ___ (go via…) / Doble a la izquierda / derecha (turn left/right).<br>4. <em>Use ONE negative command:</em> No vaya por ___, hay mucho tráfico (don\'t go via X, there\'s a lot of traffic).<br>5. <em>Stop:</em> Pare aquí, por favor (stop here, please).<br>6. <em>Pay & thank:</em> ¿Cuánto le debo? Gracias.<br><br>Example: "Buenos días. Por favor, lléveme al aeropuerto. Vaya por la calle Bolívar. Doble a la derecha en la avenida. No vaya por el centro, hay mucho tráfico. Pare aquí, por favor. ¿Cuánto le debo? Gracias."',
      tips: ['Use at least 4 usted commands', 'Include 1 negative command', 'Use polite forms — por favor, gracias, señor/señora', 'Pace yourself — taxi drivers in Latin America appreciate calm, clear directions', '45+ seconds', 'Paired with Lesson 44: Usted &amp; Ustedes Commands'],
      date: 'Nov 16'
    },

    // ========== TIER 3: OPEN — Usted Commands ==========
    {
      id: 'restaurant-formal-open',
      title: 'A meal at a <em>formal restaurant</em>',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re dining at a nice restaurant in a Spanish-speaking country. Play both roles — yourself as the customer AND the waiter responding. The customer uses <strong>usted commands</strong> politely throughout the meal. The waiter also uses usted in response. No script — improvise the conversation.<br><br>Cover at least: 1) Being seated, 2) Asking for recommendations, 3) Ordering food and drink, 4) Asking for something during the meal (more water, the salt, etc.), 5) Asking for the bill and leaving.<br><br>Sample phrases to weave in: <em>"Tráigame…"</em> (Bring me…), <em>"Recomiéndeme…"</em> (Recommend to me…), <em>"Páseme…"</em> (Pass me…), <em>"Déme la cuenta, por favor"</em> (Give me the bill, please).',
      tips: ['Use at least 6 usted commands across the conversation', 'Always include "por favor" or "gracias"', 'Make the waiter ALSO use usted ("Siga", "Disfrute su comida")', 'Mix affirmative and negative — at least 1 of each', '60+ seconds', 'Paired with Lesson 44: Usted &amp; Ustedes Commands'],
      date: 'Nov 18'
    },

    // ========== TIER 2: SCAFFOLDED — Ustedes (group) Commands ==========
    {
      id: 'tour-guide-scaffolded',
      title: 'Lead a <em>tour group</em> (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'You\'re a tour guide leading a group of Spanish-speaking tourists. Since you\'re addressing a GROUP, you must use <strong>ustedes commands</strong>. Use the scaffold to build your guided tour speech.<br><br><strong>Scaffold:</strong><br>1. <em>Welcome the group:</em> Buenas tardes a todos, bienvenidos a ___.<br>2. <em>Give a "follow me" command:</em> Síganme, por favor (follow me, please).<br>3. <em>Tell them to look at something:</em> Miren a la izquierda / derecha (look to the left/right).<br>4. <em>Give a safety instruction with negative:</em> Por favor, no toquen ___ / no se acerquen demasiado (please don\'t touch X / don\'t get too close).<br>5. <em>Tell them to take photos or ask questions:</em> Tomen fotos / Hagan preguntas (take photos / ask questions).<br>6. <em>Finish:</em> Gracias por venir hoy. Vuelvan pronto.<br><br>You can be touring any place: a museum, a historic site, a market, a national park, your school.',
      tips: ['Use at least 5 ustedes commands', 'Include at least 1 negative command', 'Speak as if you really have a group in front of you — project your voice', 'Use enthusiasm — tour guides should sound engaged', '45+ seconds', 'Paired with Lesson 44: Usted &amp; Ustedes Commands'],
      date: 'Nov 20'
    },

    // ========== TIER 2: SCAFFOLDED — Reflexive Commands ==========
    {
      id: 'morning-routine-coach-scaffolded',
      title: 'Coach a friend through <em>their morning</em> (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Your friend can\'t seem to get out the door on time in the mornings. You\'re going to coach them through their entire morning routine using <strong>reflexive tú commands</strong>. Use the scaffold to build your speech.<br><br><strong>Scaffold (each blank is a reflexive command):</strong><br>1. <em>¡___! Ya son las siete.</em> (wake up)<br>2. <em>¡___ de la cama!</em> (get up)<br>3. <em>¡___ rápido!</em> (take a shower)<br>4. <em>¡___ los dientes!</em> (brush)<br>5. <em>¡___ rápido!</em> (get dressed)<br>6. <em>¡No ___ tu mochila!</em> (don\'t forget — uses negative)<br>7. <em>¡___! Llegamos tarde.</em> (hurry up)<br>8. <em>¡___ del autobús cuando llegues!</em> (be careful — uses "cuidarse")<br><br>Example: "¡Despiértate! Ya son las siete. ¡Levántate de la cama! ¡Dúchate rápido! ¡Cepíllate los dientes! ¡Vístete rápido! ¡No te olvides de tu mochila! ¡Apúrate! Llegamos tarde. ¡Cuídate del autobús cuando llegues!"',
      tips: ['Use at least 6 reflexive tú commands', 'Include at least 1 negative reflexive command', 'Notice the accents on affirmative forms (despiértate, levántate)', '45+ seconds', 'Paired with Lesson 45: Reflexive Commands'],
      date: 'Nov 22'
    },

    // ========== TIER 3: OPEN — Reflexive Commands ==========
    {
      id: 'gym-coach-open',
      title: '<em>Coach</em> at the gym',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re a personal trainer at a gym. Your client is having a tough workout and needs your encouragement and instructions. Use a mix of reflexive commands (calm down, relax, focus) and regular commands (breathe, drink water, lift) to coach them through a workout.<br><br>Choose what kind of workout — running on a treadmill, lifting weights, doing yoga, a HIIT class. Mix tú commands throughout. Make it feel real: be encouraging, urgent, supportive.',
      tips: ['Use at least 4 reflexive commands (¡cálmate!, ¡tranquilízate!, ¡concéntrate!, ¡muévete!, etc.)', 'Mix in non-reflexive commands too (¡respira!, ¡bebe agua!, ¡sigue!)', 'Include at least 1 negative reflexive (¡no te rindas! — don\'t give up)', 'Use enthusiastic tone', '60+ seconds', 'Paired with Lesson 45: Reflexive Commands'],
      date: 'Nov 24'
    },

    // ========== TIER 2: SCAFFOLDED — Object Pronoun Commands ==========
    {
      id: 'lost-object-scaffolded',
      title: 'I lost something! <em>Help me find it</em> (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Your friend lost something important — their phone, their keys, their wallet, their backpack. You\'re going to help them search by giving commands with object pronouns. The whole point: use the pronoun (lo, la) instead of repeating the noun.<br><br><strong>Scaffold:</strong><br>1. <em>Ask what they lost:</em> ¿Qué perdiste? (What did you lose?)<br>2. <em>Tell them to look for it:</em> ¡Búscalo! / ¡Búscala! (Search for it!) — use lo for masc., la for fem.<br>3. <em>Tell them where to check:</em> ¡Míralo en el cajón! / ¡Míralo debajo de la cama! (Look at it in the drawer / under the bed)<br>4. <em>Tell them NOT to give up:</em> ¡No te rindas! (Don\'t give up!)<br>5. <em>When they find it:</em> ¡Encontrémoslo! ¡Tómalo y guárdalo bien! (Let\'s find it! Take it and put it away well!)<br><br>Example with "el teléfono": "¿Qué perdiste? ¿El teléfono? ¡Búscalo en la mesa! ¡Míralo en tu mochila! ¡No te rindas, vamos a encontrarlo! ¡Ah, lo veo! ¡Tómalo y no lo pierdas otra vez!"',
      tips: ['Use at least 5 commands with object pronouns (lo, la, los, las)', 'Match the pronoun to the gender of the lost object', 'Include 1 negative command', 'Notice accents on 2+ syllable affirmatives (búscalo, míralo)', '45+ seconds', 'Paired with Lesson 46: Commands with Object Pronouns'],
      date: 'Nov 26'
    },

    // ========== TIER 3: OPEN — Object Pronoun Commands ==========
    {
      id: 'parent-instructions-open',
      title: 'A parent <em>texts their kid</em> from work',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re a parent at work, texting your teenager at home. You need to give them a series of instructions about: the dog, dinner, homework, chores, and what NOT to do. Use lots of commands with object pronouns — replace nouns with pronouns whenever you can.<br><br>Imagine the texts as voice messages. Make it feel real: <em>"Saca al perro y dale agua. No te olvides de hacer la tarea — hazla antes de cenar. La cena está en el refrigerador, caliéntala dos minutos. Y no me llames si no es urgente."</em><br><br>Cover at least 5 different "tasks" the kid needs to handle. Mix affirmative and negative.',
      tips: ['Use at least 6 commands with object pronouns', 'Mix direct objects (lo, la, los, las) and indirect (me, te, le)', 'Include at least 2 negative commands', 'Speak with a parental tone — caring but firm', '60+ seconds', 'Paired with Lesson 46: Commands with Object Pronouns'],
      date: 'Nov 28'
    },

    // ========== TIER 2: SCAFFOLDED — Double Object Pronoun Commands ==========
    {
      id: 'errand-delegation-scaffolded',
      title: 'Delegate <em>errands</em> to a family member (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Your mom asks you to deliver several items to different people. You\'re busy, so you delegate to your younger sibling. The whole point: use double object pronouns to avoid repeating nouns.<br><br><strong>Scaffold:</strong> For each item, give a command with two pronouns. Use the le→se rule when needed.<br>1. <em>"Llévale el regalo a la abuela."</em> → <em>¡Llévaselo!</em> (Take it to her!)<br>2. <em>"Dale el dinero a papá."</em> → <em>¡Dáselo!</em> (Give it to him!)<br>3. <em>"Mándale las fotos a tu prima."</em> → <em>¡Mándaselas!</em> (Send them to her!)<br>4. <em>"Tráeme el libro."</em> → <em>¡Tráemelo!</em> (Bring it to me!)<br>5. <em>"No le digas la sorpresa al abuelo."</em> → <em>¡No se la digas!</em> (Don\'t tell it to him!)<br>6. <em>"Cómprale la leche a mamá en el supermercado."</em> → <em>¡Cómprasela!</em> (Buy it for her!)<br><br>Then record yourself saying ONLY the double-pronoun commands in sequence — like a real list of delegated tasks.',
      tips: ['Use at least 5 double-pronoun commands', 'Include at least 2 with the le→se rule (dáselo, díselo, etc.)', 'Include at least 1 negative double-pronoun command', 'Notice the accents — affirmative double pronoun commands ALWAYS need them', '45+ seconds', 'Paired with Lesson 47: Double Object Pronouns'],
      date: 'Dec 1'
    },

    // ========== TIER 3: OPEN — Double Object Pronoun Commands ==========
    {
      id: 'gift-shopping-open',
      title: '<em>Holiday gifts</em> — telling someone what to give whom',
      level: 'sp2', category: 'roleplay',
      body: 'It\'s gift-giving season (Christmas, Day of the Three Kings, Hanukkah, anyone\'s birthday). You\'re helping a friend or family member plan which gifts go to which people. Give them commands with double object pronouns: "Give it to her, but don\'t give it to him!" "Send them to your cousins, not to your sister!"<br><br>Cover at least 5 different gift-giving decisions. Imagine the gifts and recipients vividly — make it feel like a real planning conversation.<br><br>Sample structure: <em>"A ver, esta bufanda — dásela a la abuela, le gusta el rojo. Pero los chocolates no se los des, ella es diabética. El libro mándaselo a tu hermano. Y la camisa, cómprasela a papá, pero no se la des hasta el sábado."</em>',
      tips: ['Use at least 6 double-pronoun commands', 'Apply the le→se rule consistently — most of your commands will use it since you\'re talking about "to him/her/them"', 'Mix affirmative and negative — "give it to her, but don\'t give it to him"', 'Use vocabulary from the cumpleaños and cotidiano decks', '60+ seconds', 'Paired with Lesson 47: Double Object Pronouns'],
      date: 'Dec 3'
    },

    // ========== TIER 2: SCAFFOLDED — Saber/Conocer + Pedir/Preguntar ==========
    {
      id: 'interview-stranger-scaffolded',
      title: '<em>Interview</em> someone you\'ve just met (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'You\'re meeting someone new — at a party, a class, a coffee shop. You don\'t know anything about them yet. Practice asking questions naturally, switching between <strong>preguntar</strong> (asking questions) and using verb forms of <strong>saber</strong> and <strong>conocer</strong>.<br><br><strong>Scaffold:</strong> Build your speech using these 6 turns:<br>1. <em>Introduce yourself, then ask their name:</em> "Hola, me llamo ___. ¿Cómo te llamas?"<br>2. <em>Ask if they know certain people or places:</em> "¿Conoces a ___?" / "¿Conoces ___?"<br>3. <em>Ask what they know how to do (a skill):</em> "¿Sabes ___?" (toca un instrumento, hablar otro idioma, cocinar)<br>4. <em>Ask a fact-question:</em> "¿Sabes qué hora es?" o "¿Sabes dónde está ___?"<br>5. <em>Ask for a favor or item:</em> "¿Me puedes pedir un café también, por favor?" o "Pídeme un agua, por favor."<br>6. <em>Ask about a person\'s wellbeing:</em> "¿Cómo está tu familia? Pregunta por ellos cuando los veas."<br><br>Example flow: "Hola, me llamo Sofía. ¿Cómo te llamas? Mucho gusto. ¿Conoces a mi amiga Carla? ¿Conoces este café? Es nuevo. ¿Sabes tocar algún instrumento? Yo toco la guitarra. Ah, ¿sabes qué hora es? Tengo prisa. ¿Me puedes pedir un café cuando vayas a la barra? Gracias. Y dile a tu familia que pregunto por ellos."',
      tips: ['Use at least 3 forms of saber/conocer', 'Use at least 2 forms of pedir/preguntar', 'Notice the difference between "preguntar a" (asking someone) and "preguntar por" (asking about someone)', 'Add the personal "a" before people (Conozco a María, not Conozco María)', '45+ seconds', 'Paired with Lesson 48'],
      date: 'Dec 6'
    },

    // ========== TIER 3: OPEN — Saber/Conocer + Pedir/Preguntar ==========
    {
      id: 'meeting-someone-open',
      title: 'The story of how you <em>met someone important</em>',
      level: 'sp2', category: 'narrative',
      body: 'Tell the story of how you met someone important to you — a best friend, a relative, a teacher, a coach, anyone. The whole point: use the preterite of <strong>conocer</strong> (= "I met") to mark the moment of meeting, then use the imperfect of <strong>saber/conocer</strong> for the ongoing "knowing" relationship that followed.<br><br>Cover at least: 1) Where you met (Lo/La conocí en…), 2) What you didn\'t know about them at first (No sabía que…), 3) When you found out something interesting about them (Supe que…), 4) How well you know them now (Ahora lo/la conozco muy bien).<br><br>Sample structure: <em>"Conocí a mi mejor amigo Marcos en quinto grado. Cuando lo conocí, no sabía que era de Colombia. Después supe que sus padres habían venido aquí cuando él era pequeño. Ahora lo conozco mejor que a nadie — sé todos sus secretos y él sabe los míos."</em>',
      tips: ['Use "conocí" (preterite) for the moment of meeting', 'Use "conocía" (imperfect) for "knew" before that moment', 'Use "supe" (preterite) for "I found out"', 'Use "sabía" (imperfect) for "I knew (a fact, ongoing)"', 'Use "conozco" (present) for current familiarity', '60+ seconds', 'This is the kind of nuanced past-tense storytelling that makes Spanish sound truly fluent', 'Paired with Lesson 48'],
      date: 'Dec 8'
    },

    // ========== TIER 2: SCAFFOLDED — Pronouns + Progressives ==========
    {
      id: 'whats-happening-scaffolded',
      title: '<em>What\'s happening</em> right now around you (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Look around your room, classroom, or wherever you are. Describe AT LEAST 6 things that are happening — using <strong>present progressive with object pronouns</strong> wherever possible. The point: use pronouns rather than repeating nouns to make your speech more natural.<br><br><strong>Scaffold:</strong><br>1. <em>Something you yourself are doing:</em> "Estoy ___" (use a reflexive or self-action — me estoy preparando, estoy estudiando)<br>2. <em>Something someone else is doing TO an object:</em> "Mi amigo lo está ___" / "Está ___lo" (lo = a book, a phone, etc.)<br>3. <em>Something happening that involves you:</em> "Me están ___" (someone is calling me, watching me, talking to me)<br>4. <em>Something a group is doing:</em> "Las están ___" (they\'re doing something to multiple feminine things)<br>5. <em>Something involving a recipient:</em> "Le está ___" (someone giving/saying/showing something to him/her)<br>6. <em>Something with reflexive:</em> "Se está ___" (they\'re getting ready, dressing, etc.)<br><br>For at least 2 of your sentences, use BOTH valid pronoun positions (lo estoy haciendo + estoy haciéndolo) to show you understand the flexibility.<br><br>Example: <em>"Estoy hablando con mi amigo. Me está escuchando. Mi compañera está leyendo un libro — lo está leyendo en voz alta. Le estoy explicando la tarea a mi hermano. Está vistiéndose para salir."</em>',
      tips: ['Use at least 6 progressive + pronoun constructions', 'Use BOTH positions at least once each (before-auxiliary and attached-to-gerund)', 'Include at least 1 reflexive', 'Include at least 1 double pronoun', 'Notice accents on attached forms (haciéndolo, escuchándome)', '45+ seconds', 'Paired with Lesson 49'],
      date: 'Dec 10'
    },

    // ========== TIER 3: OPEN — Pronouns + Progressives ==========
    {
      id: 'live-narration-open',
      title: '<em>Live narration</em> of your day',
      level: 'sp2', category: 'narrative',
      body: 'Imagine you\'re a sports announcer or YouTuber narrating your day in real-time. Tell what\'s happening NOW — in progressive — and use object pronouns naturally to refer to things you\'ve mentioned.<br><br>Cover your morning, your school day, your activities, things people are doing around you. The whole point: this is the FLOW of progressive Spanish, which is how speakers actually talk about current events.<br><br>Sample structure: <em>"Estoy en mi salón ahora mismo. Mi profe está explicándonos la lección, y estamos tomando apuntes. Mi amiga me está mandando un mensaje — la estoy ignorando porque estoy concentrada. Después de clase, voy al gym — mis amigos ya me están esperando allí. Estamos preparándonos para un partido."</em><br><br>Mix freely between the two pronoun positions — use whichever sounds right in each sentence.',
      tips: ['Use at least 8 progressive constructions with pronouns', 'Mix freely between before-auxiliary and attached-to-gerund positions', 'Include direct objects, indirect objects, reflexives, AND at least one double pronoun', 'Make it feel like real narration — energetic, present-tense, flowing', '60+ seconds', 'Paired with Lesson 49'],
      date: 'Dec 12'
    },

    // ========== TIER 2: SCAFFOLDED — Possessive Pronouns ==========
    {
      id: 'compare-belongings-scaffolded',
      title: 'Compare <em>your stuff</em> to a friend\'s (scaffolded)',
      level: 'sp2', category: 'grammar',
      body: 'Compare your things to a friend\'s using possessive pronouns. Don\'t repeat the noun — use el mío / la tuya / etc. The whole point: replace nouns with pronouns to make your speech sound more natural and less repetitive.<br><br><strong>Scaffold:</strong> Build at least 6 comparison sentences using the pattern "Mi/Tu ___ [adjective], ___ [pronoun] [adjective opuesto]."<br><br>1. <em>Your phones:</em> "Mi celular es viejo, ___ es nuevo." (el tuyo)<br>2. <em>Your houses:</em> "Tu casa es grande, ___ es pequeña." (la mía)<br>3. <em>Your families:</em> "Mi familia es pequeña, ___ es grande." (la tuya)<br>4. <em>Your friends:</em> "Tus amigos son divertidos, ___ son aburridos." (los míos)<br>5. <em>Your classes:</em> "Mis clases son difíciles, ___ son fáciles." (las tuyas)<br>6. <em>Your dreams:</em> "Mi sueño es viajar, ___ es estudiar medicina." (el tuyo)<br><br>For at least 2 sentences, use the "after ser" bare form (no article): "Este libro es mío" instead of "Es el mío."<br><br>Example speech: <em>"A ver, comparemos. Mi celular es viejo, el tuyo es nuevo. Tu casa es grande, la mía es pequeña pero acogedora. Mi familia es pequeña, la tuya es enorme. Tus amigos son muy sociales, los míos son más tranquilos. Y nuestras metas — bueno, tu meta es estudiar medicina, la mía es viajar por todo el mundo. Este libro es mío. Esa idea es tuya."</em>',
      tips: ['Use at least 6 possessive pronoun comparisons', 'Mix both forms — with article (el tuyo) and without (es mío)', 'Make sure gender + number agreement matches the THING owned, not the owner', 'Pay attention to nuestro/a/os/as having FOUR forms', '45+ seconds', 'Paired with Lesson 50'],
      date: 'Dec 14'
    },

    // ========== TIER 3: OPEN — Possessive Pronouns ==========
    {
      id: 'whose-is-this-open',
      title: '"<em>Whose is this?</em>" — sorting lost items',
      level: 'sp2', category: 'roleplay',
      body: 'You\'re helping sort lost items after a class trip, a sleepover, a family reunion, or a school event. There\'s a pile of stuff — phones, jackets, water bottles, snacks — and you need to figure out whose is whose. Use lots of possessive pronouns naturally.<br><br>Imagine the back-and-forth: <em>"¿De quién es esta sudadera? ¿Es tuya? No, no es mía, creo que es de María. Sí, es suya. Y estos zapatos, ¿son tuyos? No, los míos están allá. ¿Y este cargador? Mmm, podría ser de cualquiera — ah, espera, es de Carlos, es suyo."</em><br><br>Cover at least 6 different items. Mix between the question forms (¿es tuyo?, ¿son suyas?) and the answer forms (es mío, es de ella, son los suyos). Use the "de + person" structure to clarify ambiguous cases.',
      tips: ['Use at least 8 possessive pronoun constructions', 'Include questions AND answers', 'When "suyo" would be ambiguous, switch to "de él / de ella / de ellos" for clarity', 'Match gender + number of the THING, not the owner', 'Use both with-article and without-article forms', '60+ seconds', 'Paired with Lesson 50'],
      date: 'Dec 16'
    }
,
    {
      id: 'sp3-opinion-universidad',
      title: '¿<em>Vale la pena</em> la universidad?',
      level: 'sp3', category: 'conversation',
      body: 'Take a clear position: is a four-year university degree still worth it today? Defend your view with at least three reasons, then acknowledge the strongest counterargument and respond to it. Use opinion phrases and the subjunctive of doubt where it fits (<em>no creo que…, es importante que…</em>).',
      tips: ['Open with your thesis in one sentence', 'Connectors: por un lado / por otro lado, sin embargo, además, en conclusión', 'Subjunctive after doubt and value (no creo que sea, es necesario que)', 'Address a counterargument (aunque algunos digan que…)', '90+ seconds'],
      date: 'Jan 12'
    },
    {
      id: 'sp3-si-mundo',
      title: 'Si pudieras <em>cambiar el mundo</em>',
      level: 'sp3', category: 'conversation',
      body: 'If you could change one thing about the world or your society, what would it be — and what would happen as a result? Build your whole answer around hypothetical "si" clauses.',
      tips: ['Use Si + imperfect subjunctive + conditional: "Si pudiera…, cambiaría…"', 'Give at least two hypotheticals', 'Explain consequences (esto haría que… + subjunctive)', 'Stay in the hypothetical, not the real', '75+ seconds'],
      date: 'Jan 19'
    },
    {
      id: 'sp3-redes',
      title: 'Las <em>redes sociales</em>: ¿nos unen o nos separan?',
      level: 'sp3', category: 'conversation',
      body: 'Do social media bring people together or push them apart? Argue one side, support it with examples from your own experience, and concede one point to the other side before refuting it.',
      tips: ['Pick ONE side and commit', 'Use real examples (por ejemplo, en mi caso…)', 'Concede then refute: "Es verdad que…, pero…"', 'Advanced connectors: no obstante, por lo tanto', '90+ seconds'],
      date: 'Jan 26'
    },
    {
      id: 'sp3-momento',
      title: 'Un momento que <em>lo cambió todo</em>',
      level: 'sp3', category: 'narrative',
      body: 'Tell the story of a turning point — in your life or someone else\'s. Set the scene, build to a complication, and reflect on how things changed afterward. Move smoothly between time frames.',
      tips: ['Imperfect for scene/background (era, había, me sentía)', 'Preterite for the key events (de repente, fue cuando…)', 'End with reflection (desde entonces…, me di cuenta de que…)', 'Narrate in connected paragraphs, not isolated sentences', '2+ minutes'],
      date: 'Feb 2'
    },
    {
      id: 'sp3-tradiciones',
      title: 'Tradiciones que vale la pena <em>conservar</em>',
      level: 'sp3', category: 'cultural',
      body: 'Choose a tradition — from your family, your community, or the Spanish-speaking world — that you believe should be preserved. Explain its meaning, why it matters, and what would be lost without it. Compare it briefly to a tradition from another culture.',
      tips: ['Describe the tradition vividly', 'Argue its value (es importante que se conserve…)', 'Make a cross-cultural comparison (a diferencia de…, al igual que…)', 'Subjunctive for value and emotion', '90+ seconds'],
      date: 'Feb 9'
    },
    {
      id: 'sp3-convence',
      title: '<em>Convence</em> a la clase',
      level: 'sp3', category: 'conversation',
      body: 'Give a short persuasive speech proposing one change at your school or in your community. Win your audience over: state the problem, propose your solution, and end with a call to action.',
      tips: ['Structure: problema → propuesta → llamado a la acción', 'Use "deberíamos / hay que / es hora de que…"', 'Rhetorical questions to engage (¿No creen que…?)', 'Confident, formal tone', '75+ seconds'],
      date: 'Feb 16'
    },
    {
      id: 'sp3-exito',
      title: '¿Qué significa el <em>éxito</em>?',
      level: 'sp3', category: 'personal',
      body: 'What does success really mean to you? Go beyond money and grades — define it in your own words, give an example of someone you consider successful, and explain whether your definition has changed over time.',
      tips: ['Define an abstract idea (para mí, el éxito es…)', 'Support with a concrete example', 'Reflect on change over time (antes pensaba que…, ahora…)', 'Mix present, past, and conditional', '90+ seconds'],
      date: 'Feb 23'
    },
    {
      id: 'sp3-entrevista',
      title: '<em>Entrevista</em> de trabajo',
      level: 'sp3', category: 'roleplay',
      body: 'Role-play a job interview for a position you would actually want. Greet formally, present your strengths, answer a tough or unexpected question, and ask one question of your own. Use the formal "usted" throughout.',
      tips: ['Formal register: usted, condicional de cortesía (me gustaría, podría)', 'Sell yourself (soy capaz de…, tengo experiencia en…)', 'Handle a curveball calmly', 'Ask the interviewer a smart question', 'Stay in character · 90+ seconds'],
      date: 'Mar 2'
    }
  ];

  function getAllTopics(kind) {
    // Combine baked-in topics + teacher-posted topics (saved per device)
    const teacherKey = kind === 'writing' ? 'tertulia_teacher_writing_topics' : 'tertulia_teacher_speaking_topics';
    const teacherPosted = JSON.parse(localStorage.getItem(teacherKey) || '[]');
    const baked = kind === 'writing' ? WRITING_TOPICS : SPEAKING_TOPICS;
    return [...teacherPosted, ...baked];
  }

  function findTopic(topicId) {
    const all = [...getAllTopics('writing').map(t => ({ ...t, kind: 'writing' })),
                 ...getAllTopics('speaking').map(t => ({ ...t, kind: 'speaking' }))];
    return all.find(t => t.id === topicId);
  }

  function getStudentResponses(topicId) {
    const key = 'tertulia_responses:' + STUDENT_NAME + ':' + topicId;
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  function saveStudentResponses(topicId, responses) {
    const key = 'tertulia_responses:' + STUDENT_NAME + ':' + topicId;
    localStorage.setItem(key, JSON.stringify(responses));
  }

  function hasResponded(topicId) {
    return getStudentResponses(topicId).length > 0;
  }

  /* ============== INDEXEDDB AUDIO STORE ==============
   * Recordings are stored as Blobs in IndexedDB, keyed by a stable `audioKey`.
   * The response entry in localStorage stores only the audioKey, not a blob URL —
   * because blob URLs are only valid for the current page session.
   * On playback, we retrieve the Blob and generate a fresh URL each time.
   */
  const AUDIO_DB_NAME = 'tertulia_audio';
  const AUDIO_STORE_NAME = 'recordings';
  let audioDbPromise = null;

  function openAudioDB() {
    if (audioDbPromise) return audioDbPromise;
    audioDbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('IndexedDB not supported')); return; }
      const req = indexedDB.open(AUDIO_DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(AUDIO_STORE_NAME)) {
          db.createObjectStore(AUDIO_STORE_NAME); // key supplied at put-time
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return audioDbPromise;
  }

  async function saveAudioBlob(audioKey, blob) {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(AUDIO_STORE_NAME, 'readwrite');
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.put(blob, audioKey);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async function loadAudioBlob(audioKey) {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(AUDIO_STORE_NAME, 'readonly');
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.get(audioKey);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async function deleteAudioBlob(audioKey) {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(AUDIO_STORE_NAME, 'readwrite');
      const store = tx.objectStore(AUDIO_STORE_NAME);
      const req = store.delete(audioKey);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // Generate a unique audio key with timestamp + randomness
  function newAudioKey() {
    return 'audio_' + Date.now() + '_' + Math.floor(Math.random() * 1e9);
  }

  // Track URLs we've generated this session so we can revoke them on cleanup
  // (avoids leaking memory if a user plays many recordings in one session)
  const sessionAudioUrls = new Map(); // audioKey → blob URL

  async function getAudioPlaybackUrl(audioKey) {
    // Reuse a URL if we already created one this session
    if (sessionAudioUrls.has(audioKey)) return sessionAudioUrls.get(audioKey);
    const blob = await loadAudioBlob(audioKey);
    if (!blob) return null;
    const url = URL.createObjectURL(blob);
    sessionAudioUrls.set(audioKey, url);
    return url;
  }

  // Topic filter state
  let writingFilter = { level: 'all', category: 'all' };
  let speakingFilter = { level: 'all', category: 'all' };

  // Grid/List view state for Speaking and Writing pages
  let speakingView = 'grid'; // 'grid' | 'list'
  let writingView = 'grid';
  try {
    const sv = localStorage.getItem('tertulia_speaking_view');
    if (sv === 'list' || sv === 'grid') speakingView = sv;
    const wv = localStorage.getItem('tertulia_writing_view');
    if (wv === 'list' || wv === 'grid') writingView = wv;
  } catch(e) {}

  function setSpeakingView(view, btn) {
    speakingView = view;
    try { localStorage.setItem('tertulia_speaking_view', view); } catch(e) {}
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
    renderTopicList('speaking');
  }

  function setWritingView(view, btn) {
    writingView = view;
    try { localStorage.setItem('tertulia_writing_view', view); } catch(e) {}
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
    renderTopicList('writing');
  }

  function setSpeakingFilter(field, value) {
    speakingFilter[field] = value;
    renderTopicList('speaking');
  }

  function setWritingFilter(field, value) {
    writingFilter[field] = value;
    renderTopicList('writing');
  }

  // Toggle "active" only among siblings in the same filter row
  function setActivePill(btn) {
    const row = btn.closest('.filter-row');
    if (!row) return;
    row.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
  }

  function renderTopicList(kind) {
    const containerId = kind === 'writing' ? 'writing-topic-list' : 'speaking-topic-list';
    const container = document.getElementById(containerId);
    if (!container) return;

    // Sync view-toggle pills with current state
    const view = kind === 'writing' ? writingView : speakingView;
    const gridBtn = document.getElementById(kind + '-view-grid');
    const listBtn = document.getElementById(kind + '-view-list');
    if (gridBtn && listBtn) {
      gridBtn.classList.toggle('active', view === 'grid');
      listBtn.classList.toggle('active', view === 'list');
    }
    // Container class swap so CSS layout matches
    if (view === 'list') {
      container.classList.remove('topic-grid');
      container.classList.add('topic-list');
    } else {
      container.classList.remove('topic-list');
      container.classList.add('topic-grid');
    }

    let topics = getAllTopics(kind);

    // Apply filters
    if (kind === 'writing') {
      if (writingFilter.level !== 'all') {
        topics = topics.filter(t => !t.level || t.level === writingFilter.level);
      }
      if (writingFilter.category !== 'all') {
        topics = topics.filter(t => !t.category || t.category === writingFilter.category);
      }
    } else {
      if (speakingFilter.level !== 'all') {
        topics = topics.filter(t => !t.level || t.level === speakingFilter.level);
      }
      if (speakingFilter.category !== 'all') {
        topics = topics.filter(t => !t.category || t.category === speakingFilter.category);
      }
    }

    if (topics.length === 0) {
      container.innerHTML = `<div class="topic-empty"><h4>No topics match those filters</h4><p>Try a different combination, or reset to "All".</p></div>`;
      return;
    }

    // Sort by level (sp1 first, sp2 second, unspecified last); within speaking, readaloud first
    const levelOrder = { 'sp1': 0, 'sp2': 1 };
    topics = [...topics].sort((a, b) => {
      // Speaking: read-aloud category always floats to the top
      if (kind === 'speaking') {
        const ra = a.category === 'readaloud' ? 0 : 1;
        const rb = b.category === 'readaloud' ? 0 : 1;
        if (ra !== rb) return ra - rb;
      }
      const la = levelOrder[a.level] ?? 2;
      const lb = levelOrder[b.level] ?? 2;
      return la - lb;
    });

    container.innerHTML = topics.map(t => {
      const responses = getStudentResponses(t.id);
      const completed = responses.length > 0;
      const stateText = completed ? `Responded · ${responses.length} ${responses.length === 1 ? 'entry' : 'entries'}` : 'Not yet started';
      const levelBadge = t.level === 'sp1' ? '<span class="topic-level sp1">Spanish 1</span>' :
                         t.level === 'sp2' ? '<span class="topic-level sp2">Spanish 2</span>' : '';
      const categoryLabel = {
        personal: 'Personal', cultural: 'Cultural', narrative: 'Narrative',
        opinion: 'Opinion', grammar: 'Grammar focus',
        readaloud: '📜 Read-aloud', describe: 'Describe', narrate: 'Narrate',
        conversation: 'Opinion', roleplay: 'Role-play'
      }[t.category] || '';

      if (view === 'list') {
        // Compact list row
        const levelTag = t.level === 'sp1' ? '<span class="row-level">SP1</span>' :
                         t.level === 'sp2' ? '<span class="row-level">SP2</span>' : '<span class="row-level">·</span>';
        const compactStatus = completed ? '✓ ' + responses.length : 'Not started';
        return `
          <a href="#/topic/${t.id}" class="topic-row ${completed ? 'completed' : ''}">
            <span class="row-title">${t.title}</span>
            ${categoryLabel ? `<span class="row-tag">${categoryLabel}</span>` : '<span class="row-tag">·</span>'}
            ${levelTag}
            <span class="row-status">${compactStatus}</span>
          </a>
        `;
      }
      // Grid (card)
      return `
        <a href="#/topic/${t.id}" class="topic-card ${completed ? 'completed' : ''}">
          <div class="topic-meta">
            <span>${t.date || ''}</span>
            <span>${kind === 'writing' ? '✍ Writing' : '🎤 Speaking'}</span>
            ${levelBadge}
            ${categoryLabel ? `<span class="topic-category">${categoryLabel}</span>` : ''}
          </div>
          <h3>${t.title}</h3>
          <p>${t.body}</p>
          <div class="topic-status">
            <span class="response-state">${stateText}</span>
            ${t.due ? `<span class="topic-due">Due ${t.due}</span>` : ''}
          </div>
        </a>
      `;
    }).join('');
  }

  // -- Topic detail page (renders dynamically based on which topic was clicked)
  let currentTopic = null;
  let writeStartTime = null, writeTimer = null;

  function renderTopicDetail(topicId) {
    const topic = findTopic(topicId);
    const container = document.getElementById('topic-detail-content');
    const back = document.getElementById('topic-back');
    if (!topic) {
      container.innerHTML = '<p style="color: var(--ink-soft); padding: 24px 0;">Topic not found. <a href="#/">Go home</a></p>';
      return;
    }
    currentTopic = topic;
    // Set back link based on kind
    back.href = topic.kind === 'writing' ? '#/escritura' : '#/voces';
    back.textContent = topic.kind === 'writing' ? '← Back to writing topics' : '← Back to speaking topics';

    const tipsHtml = topic.tips && topic.tips.length
      ? `<div class="tips"><div class="label">Tips</div><ul>${topic.tips.map(t => '<li>' + t + '</li>').join('')}</ul></div>`
      : '';

    // If the topic has a script, show it prominently as the thing to read/use
    const isStarters = topic.script && topic.script.startsWith('STARTERS:');
    const scriptHtml = topic.script
      ? `<div class="script-box ${isStarters ? 'starters' : ''}">
           <div class="script-label">${isStarters ? '🗂 Sentence starters — build from these' : '📜 Read this aloud'}</div>
           <div class="script-text">${isStarters ? topic.script.replace('STARTERS:', '').trim() : topic.script}</div>
         </div>`
      : '';

    const responseEditor = topic.kind === 'writing'
      ? renderWritingEditor()
      : renderSpeakingEditor();

    container.innerHTML = `
      <div class="topic-prompt-card ${topic.kind === 'speaking' ? 'speaking' : ''}">
        <span class="topic-tag">${topic.kind === 'writing' ? 'Writing prompt' : 'Speaking prompt'} ${topic.due ? '· Due ' + topic.due : ''}</span>
        <h2>${topic.title}</h2>
        <div class="body">${topic.body}</div>
        ${scriptHtml}
        ${tipsHtml}
      </div>
      ${responseEditor}
      <div class="response-section" style="margin-top: 32px;">
        <h3>Your <em>responses</em></h3>
        <div id="response-list"></div>
      </div>
    `;
    renderResponseList();
  }

  function renderWritingEditor() {
    return `
      <div class="response-section">
        <h3>Write your <em>response</em></h3>
        <p style="color: var(--ink-soft); font-size: 14px; margin-bottom: 16px;">Write in Spanish. Aim for 200+ words to earn the long-form bonus. You can save and come back anytime.</p>
        <textarea id="topic-write-text" placeholder="Empieza a escribir aquí…" oninput="updateTopicWriteStats()"
          style="width: 100%; min-height: 280px; background: var(--card-bg); border: 1px solid var(--line); padding: 20px; font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.7; color: var(--ink); resize: vertical; outline: none;"></textarea>
        <div style="display: flex; justify-content: space-between; margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-soft);">
          <span>Words: <strong id="topic-word-count">0</strong></span>
          <span>Characters: <strong id="topic-char-count">0</strong></span>
          <span>Time: <strong id="topic-write-time">0:00</strong></span>
        </div>
        <div class="card-controls" style="margin-top: 16px;">
          <button class="btn primary" onclick="saveWritingResponse()">Save response</button>
          <button class="btn" onclick="document.getElementById('topic-write-text').value=''; updateTopicWriteStats();">Clear</button>
        </div>
      </div>
    `;
  }

  function renderSpeakingEditor() {
    return `
      <div class="response-section">
        <h3>Record your <em>response</em></h3>
        <p style="color: var(--ink-soft); font-size: 14px; margin-bottom: 16px;">Speak in Spanish. Recordings 30+ seconds long earn 10 Lucas. Your microphone needs to be allowed in the browser.</p>
        <div style="background: var(--ink); color: var(--paper); padding: 32px; text-align: center;">
          <div class="record-status" id="rec-status">Ready to record</div>
          <button class="record-btn" id="rec-btn" onclick="toggleRecording()">
            <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
          </button>
          <div class="record-timer" id="rec-timer">0:00</div>
          <div class="record-status">Tap to start / stop</div>
        </div>
      </div>
    `;
  }

  function renderResponseList() {
    if (!currentTopic) return;
    const list = document.getElementById('response-list');
    if (!list) return;
    const responses = getStudentResponses(currentTopic.id);
    if (responses.length === 0) {
      list.innerHTML = '<div class="response-empty">No responses yet. Submit your first one above.</div>';
      return;
    }
    list.innerHTML = responses.map((r, i) => {
      const dateStr = new Date(r.savedAt).toLocaleString();
      if (r.kind === 'writing') {
        const wordCount = r.text.trim() ? r.text.trim().split(/\s+/).length : 0;
        return `
          <div class="response-item">
            <div class="head">
              <span>Response ${i + 1} · ${wordCount} words · ${dateStr}</span>
              <div class="response-actions">
                <button onclick="loadWritingResponseToEditor(${i})">Edit</button>
                <button class="delete" onclick="deleteResponse(${i})">Delete</button>
              </div>
            </div>
            <div class="body-text">${escapeHtml(r.text)}</div>
          </div>
        `;
      } else {
        // Speaking response — handle three cases:
        // 1. New schema: r.audioKey is set → load from IndexedDB (async)
        // 2. Legacy schema: r.url is a blob: URL → show "unavailable" notice
        //    (because blob URLs don't survive page reloads)
        // 3. Anything else → defensive fallback
        const idForAudio = 'audio-' + i + '-' + (r.audioKey || 'legacy');
        let audioHtml;
        if (r.audioKey) {
          // Will be populated async after render
          audioHtml = `<audio id="${idForAudio}" controls style="flex: 1; max-width: 100%;"></audio>
            <span class="audio-load-msg" id="${idForAudio}-msg" style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-soft);">loading…</span>`;
        } else if (r.url && r.url.startsWith('blob:')) {
          // Old recording from before the IndexedDB fix — these are gone
          audioHtml = `<div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--rojo); padding: 8px 0;">⚠ Recording unavailable — saved before the audio-persistence fix. Please re-record if needed.</div>`;
        } else {
          audioHtml = `<div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-soft); padding: 8px 0;">⚠ Audio data missing.</div>`;
        }
        return `
          <div class="response-item">
            <div class="head">
              <span>Recording ${i + 1} · ${r.duration}s · ${dateStr}</span>
              <div class="response-actions">
                <button class="delete" onclick="deleteResponse(${i})">Delete</button>
              </div>
            </div>
            <div class="audio-row">
              ${audioHtml}
            </div>
          </div>
        `;
      }
    }).join('');

    // Async: populate each audio element from IndexedDB
    responses.forEach(async (r, i) => {
      if (r.kind !== 'speaking' || !r.audioKey) return;
      const idForAudio = 'audio-' + i + '-' + r.audioKey;
      try {
        const url = await getAudioPlaybackUrl(r.audioKey);
        const audioEl = document.getElementById(idForAudio);
        const msgEl = document.getElementById(idForAudio + '-msg');
        if (audioEl && url) {
          audioEl.src = url;
          if (msgEl) msgEl.remove();
        } else if (audioEl) {
          // Blob exists no more (e.g. cleared) — show notice
          audioEl.style.display = 'none';
          if (msgEl) {
            msgEl.style.color = 'var(--rojo)';
            msgEl.textContent = '⚠ Recording data not found in browser storage.';
          }
        }
      } catch (err) {
        console.error('Could not load audio:', err);
        const msgEl = document.getElementById(idForAudio + '-msg');
        if (msgEl) {
          msgEl.style.color = 'var(--rojo)';
          msgEl.textContent = '⚠ Failed to load audio.';
        }
      }
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
  }

  function updateTopicWriteStats() {
    const ta = document.getElementById('topic-write-text');
    if (!ta) return;
    const text = ta.value;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const wc = document.getElementById('topic-word-count');
    const cc = document.getElementById('topic-char-count');
    if (wc) wc.textContent = words;
    if (cc) cc.textContent = text.length;
    if (!writeStartTime && text.length > 0) {
      writeStartTime = Date.now();
      writeTimer = setInterval(() => {
        const s = Math.floor((Date.now() - writeStartTime) / 1000);
        const m = Math.floor(s / 60);
        const r = s % 60;
        const el = document.getElementById('topic-write-time');
        if (el) el.textContent = m + ':' + String(r).padStart(2, '0');
      }, 1000);
    }
  }

  function saveWritingResponse() {
    if (!currentTopic) return;
    const ta = document.getElementById('topic-write-text');
    if (!ta) return;
    const text = ta.value.trim();
    if (!text) { alert('Write something first!'); return; }
    const words = text.split(/\s+/).length;

    const responses = getStudentResponses(currentTopic.id);
    const isFirstForThisTopic = responses.length === 0;
    responses.push({
      kind: 'writing',
      text,
      wordCount: words,
      savedAt: new Date().toISOString()
    });
    saveStudentResponses(currentTopic.id, responses);

    // Award Lucas: 1 per 50 words on FIRST response only (avoid farming by saving many copies)
    if (isFirstForThisTopic) {
      const milestones = Math.floor(words / 50);
      if (milestones > 0) {
        STATE.wordsWritten += milestones * 50;
        awardCoins(milestones, '50 words written (' + words + ' total)');
      }
      if (words >= 200) {
        STATE.poemsCompleted = (STATE.poemsCompleted || 0) + 1;
        awardCoins(10, 'Long-form piece (200+ words)');
      }
    }

    ta.value = '';
    if (writeTimer) { clearInterval(writeTimer); writeTimer = null; writeStartTime = null; }
    updateTopicWriteStats();
    renderResponseList();
    showToast('Response saved!', 0);
  }

  function loadWritingResponseToEditor(index) {
    if (!currentTopic) return;
    const responses = getStudentResponses(currentTopic.id);
    const r = responses[index];
    if (!r) return;
    const ta = document.getElementById('topic-write-text');
    if (ta) {
      ta.value = r.text;
      updateTopicWriteStats();
      ta.scrollIntoView({ behavior: 'smooth' });
      ta.focus();
    }
  }

  function deleteResponse(index) {
    if (!currentTopic) return;
    if (!confirm('Delete this response? This cannot be undone.')) return;
    const responses = getStudentResponses(currentTopic.id);
    const removed = responses.splice(index, 1)[0];

    // If this was an audio recording, also clean up its IndexedDB entry
    // and revoke any active blob URL for it (releases memory immediately).
    if (removed && removed.kind === 'speaking' && removed.audioKey) {
      // Revoke any URL we've generated this session for this key
      if (sessionAudioUrls.has(removed.audioKey)) {
        try { URL.revokeObjectURL(sessionAudioUrls.get(removed.audioKey)); } catch (e) {}
        sessionAudioUrls.delete(removed.audioKey);
      }
      // Remove the blob from IndexedDB (don't block UI on this)
      deleteAudioBlob(removed.audioKey).catch(err =>
        console.error('Failed to delete audio blob:', err)
      );
    }

    saveStudentResponses(currentTopic.id, responses);
    renderResponseList();
    // also re-render the topic list (so completion check updates)
    if (currentTopic.kind === 'writing') renderTopicList('writing');
    else renderTopicList('speaking');
  }

