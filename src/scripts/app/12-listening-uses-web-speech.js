  /* ============== LISTENING (uses Web Speech) ============== */
  // ============================================================================
  // ESCUCHA — LISTENING PRACTICE
  // ----------------------------------------------------------------------------
  // Three exercise modes: dictation (transcribe what you hear),
  // comprehension (listen to a paragraph and answer questions),
  // fill-in-the-blank (hear a sentence, fill in the missing word).
  //
  // Speed control is shared across all modes via listenSpeed.
  // ============================================================================

  let listenSpeed = 0.9;
  let dictationLevel = 'beginner';

  function setListenSpeed(speed, btn) {
    listenSpeed = speed;
    // Update pill active state (same-row siblings)
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
  }

  function setListenMode(mode, btn) {
    document.querySelectorAll('.listen-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.getElementById('listen-dictation').style.display = mode === 'dictation' ? '' : 'none';
    document.getElementById('listen-comprehension').style.display = mode === 'comprehension' ? '' : 'none';
    document.getElementById('listen-fillblank').style.display = mode === 'fillblank' ? '' : 'none';
    // Show/hide the speed bar's contextual headings — keep simple
    if (mode === 'dictation') renderDictation();
    if (mode === 'comprehension') renderComprehensionList();
    if (mode === 'fillblank') renderFillBlank();
  }

  function setDictationLevel(level, btn) {
    dictationLevel = level;
    if (btn && btn.parentElement) {
      btn.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    }
    renderDictation();
  }

  // Speak a Spanish text aloud
  function speakSpanish(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz.');
      if (onEnd) onEnd();
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    u.rate = listenSpeed;
    const voices = window.speechSynthesis.getVoices();
    const spanish = voices.find(v => v.lang.startsWith('es'));
    if (spanish) u.voice = spanish;
    u.onend = () => { if (onEnd) onEnd(); };
    u.onerror = () => { if (onEnd) onEnd(); };
    window.speechSynthesis.speak(u);
  }

  // Forgiving normalizer for dictation comparison
  function normalizeListening(s) {
    return (s || '').trim().toLowerCase()
      .replace(/[.!?¡¿,;:"'()]+/g, '')
      .replace(/\s+/g, ' ')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // ========== DICTATION CLIPS ==========
  // Tagged with optional country tie-ins to thread cultural content
  const DICTATION_CLIPS = {
    beginner: [
      { id: 'd-b-01', text: 'Hola, me llamo María.', en: 'Hello, my name is María.', country: null },
      { id: 'd-b-02', text: 'Mi familia vive en una casa pequeña.', en: 'My family lives in a small house.', country: null },
      { id: 'd-b-03', text: 'Tengo dos hermanos y un perro.', en: 'I have two siblings and a dog.', country: null },
      { id: 'd-b-04', text: 'Estudio español en la escuela.', en: 'I study Spanish at school.', country: null },
      { id: 'd-b-05', text: 'Los lunes voy al supermercado.', en: 'On Mondays I go to the supermarket.', country: null },
      { id: 'd-b-06', text: 'En México hace mucho calor.', en: 'In Mexico it\'s very hot.', country: 'mx' },
      { id: 'd-b-07', text: 'La papa es típica del Perú.', en: 'The potato is typical of Peru.', country: 'pe' },
      { id: 'd-b-08', text: 'España es un país muy bonito.', en: 'Spain is a very beautiful country.', country: 'es' },
      { id: 'd-b-09', text: 'Hoy es martes, doce de mayo.', en: 'Today is Tuesday, May 12.', country: null },
      { id: 'd-b-10', text: 'Me gusta el café con leche.', en: 'I like coffee with milk.', country: null },
      { id: 'd-b-11', text: 'En España la gente cena muy tarde.', en: 'In Spain people have dinner very late.', country: 'es' },
      { id: 'd-b-12', text: 'El castillo antiguo está cerca de la plaza.', en: 'The old castle is near the square.', country: 'es' }
    ],
    intermediate: [
      { id: 'd-i-01', text: 'Cuando era niña, vivía cerca del mar y nadaba todos los días.', en: 'When I was a child, I lived near the sea and swam every day.', country: null },
      { id: 'd-i-02', text: 'El verano pasado mi familia viajó a Lima, la capital del Perú.', en: 'Last summer my family traveled to Lima, the capital of Peru.', country: 'pe' },
      { id: 'd-i-03', text: 'Mi abuela siempre prepara empanadas los domingos por la tarde.', en: 'My grandmother always makes empanadas on Sunday afternoons.', country: null },
      { id: 'd-i-04', text: 'En Argentina la gente toma mate y come asado los fines de semana.', en: 'In Argentina people drink mate and eat barbecue on weekends.', country: 'ar' },
      { id: 'd-i-05', text: 'Antes de salir, me ducho, me visto y desayuno rápido.', en: 'Before leaving, I shower, get dressed, and have a quick breakfast.', country: null },
      { id: 'd-i-06', text: 'Los incas construyeron caminos increíbles a lo largo de la cordillera.', en: 'The Incas built incredible roads along the mountain range.', country: 'pe' },
      { id: 'd-i-07', text: 'En España la cena suele ser muy tarde, a las diez de la noche.', en: 'In Spain dinner is usually very late, at ten at night.', country: 'es' },
      { id: 'd-i-08', text: 'Para llegar a Iquitos, hay que viajar en avión o en barco.', en: 'To get to Iquitos, you have to travel by plane or by boat.', country: 'pe' },
      { id: 'd-i-09', text: 'El año pasado mis amigos y yo fuimos a la playa todos los domingos.', en: 'Last year my friends and I went to the beach every Sunday.', country: null },
      { id: 'd-i-10', text: 'Mi profesora de español es de Colombia y enseña muy bien.', en: 'My Spanish teacher is from Colombia and teaches very well.', country: 'co' },
      { id: 'd-i-11', text: 'En Argentina, compartir el mate es una tradición social muy importante.', en: 'In Argentina, sharing mate is a very important social tradition.', country: 'ar' },
      { id: 'd-i-12', text: 'Los domingos, toda la familia se reúne para hacer un asado.', en: 'On Sundays, the whole family gets together to have a barbecue.', country: 'ar' },
      { id: 'd-i-13', text: 'En México, el maíz y el chile son ingredientes muy importantes.', en: 'In Mexico, corn and chili are very important ingredients.', country: 'mx' },
      { id: 'd-i-14', text: 'Los sábados vamos al mercado a comprar frutas y artesanías.', en: 'On Saturdays we go to the market to buy fruit and handicrafts.', country: 'mx' },
      { id: 'd-i-15', text: 'En Colombia el café crece en las montañas, donde el clima es perfecto.', en: 'In Colombia coffee grows in the mountains, where the climate is perfect.', country: 'co' },
      { id: 'd-i-16', text: 'Colombia es uno de los países con más biodiversidad del mundo.', en: 'Colombia is one of the countries with the most biodiversity in the world.', country: 'co' },
      // Tú command-themed sentences (paired with Lesson 43)
      { id: 'd-i-17-cmd', text: '¡Ven aquí y dime la verdad ahora mismo!', en: 'Come here and tell me the truth right now!', country: null },
      { id: 'd-i-18-cmd', text: 'Haz tu tarea primero, después puedes ver la tele.', en: 'Do your homework first, then you can watch TV.', country: null },
      { id: 'd-i-19-cmd', text: 'No salgas sin chaqueta porque hace mucho frío afuera.', en: 'Don\'t go out without a jacket because it\'s very cold outside.', country: null },
      { id: 'd-i-20-cmd', text: 'Levántate temprano y no te olvides de cepillarte los dientes.', en: 'Get up early and don\'t forget to brush your teeth.', country: null },
      // Usted/Ustedes command-themed sentences (paired with Lesson 44)
      { id: 'd-i-21-ud', text: 'Por favor, hable más despacio. No entiendo muy bien.', en: 'Please speak more slowly. I don\'t understand very well.', country: null },
      { id: 'd-i-22-ud', text: 'Tráigame la cuenta cuando pueda, por favor.', en: 'Bring me the check when you can, please.', country: null },
      { id: 'd-i-23-ud', text: 'Pasen ustedes adelante y tomen asiento, por favor.', en: 'You all go ahead and take a seat, please.', country: null },
      { id: 'd-i-24-ud', text: 'No se preocupe, señor. Vamos a resolver el problema.', en: 'Don\'t worry, sir. We\'re going to solve the problem.', country: null },
      // Reflexive command-themed sentences (paired with Lesson 45)
      { id: 'd-i-25-ref', text: 'Levántate y dúchate ahora mismo, vamos tarde.', en: 'Get up and shower right now, we\'re running late.', country: null },
      { id: 'd-i-26-ref', text: 'No te preocupes, todo va a salir bien.', en: 'Don\'t worry, everything is going to be fine.', country: null },
      { id: 'd-i-27-ref', text: 'Siéntense, por favor, y cállense durante la clase.', en: 'Sit down, please, and be quiet during class.', country: null },
      { id: 'd-i-28-ref', text: 'Cuídate mucho y no te olvides de escribirme.', en: 'Take good care and don\'t forget to write to me.', country: null },
      // Object-pronoun command sentences (paired with Lesson 46)
      { id: 'd-i-29-obj', text: 'Cómpralo ahora, está en oferta este fin de semana.', en: 'Buy it now, it\'s on sale this weekend.', country: null },
      { id: 'd-i-30-obj', text: 'No me llames después de las nueve de la noche.', en: 'Don\'t call me after nine at night.', country: null },
      { id: 'd-i-31-obj', text: 'Háblales con calma, ellos están muy estresados.', en: 'Talk to them calmly, they\'re very stressed.', country: null },
      { id: 'd-i-32-obj', text: 'Tráigamela cuando pueda, no hay prisa, señor.', en: 'Bring it to me when you can, no hurry, sir.', country: null },
      // Double-pronoun command sentences (paired with Lesson 47)
      { id: 'd-i-33-dbl', text: 'Dáselo a tu hermano antes de que se enoje contigo.', en: 'Give it to your brother before he gets mad at you.', country: null },
      { id: 'd-i-34-dbl', text: 'No se lo digas a nadie, es un secreto entre nosotros.', en: 'Don\'t tell it to anyone, it\'s a secret between us.', country: null },
      { id: 'd-i-35-dbl', text: 'Cómprasela el sábado, es el regalo perfecto para ella.', en: 'Buy it for her on Saturday, it\'s the perfect gift for her.', country: null },
      { id: 'd-i-36-dbl', text: 'Mándaselos por correo antes del viernes, por favor.', en: 'Send them to her by mail before Friday, please.', country: null },
      // Saber/Conocer/Pedir/Preguntar sentences (paired with Lesson 48)
      { id: 'd-i-37-scpp', text: 'Conocí a María en la fiesta y supe que era de Lima.', en: 'I met María at the party and found out that she was from Lima.', country: null },
      { id: 'd-i-38-scpp', text: '¿Sabes nadar o quieres que te enseñe?', en: 'Do you know how to swim or do you want me to teach you?', country: null },
      { id: 'd-i-39-scpp', text: 'Le pedí un café y le pregunté por su hermana.', en: 'I asked him for a coffee and asked about his sister.', country: null },
      { id: 'd-i-40-scpp', text: 'No conozco esa ciudad pero sé que está cerca del mar.', en: 'I don\'t know that city but I know it\'s near the sea.', country: null },
      // Pronouns + progressive sentences (paired with Lesson 49)
      { id: 'd-i-41-prog', text: 'Lo estoy escuchando, pero no entiendo nada de lo que dice.', en: 'I am listening to him, but I don\'t understand anything he says.', country: null },
      { id: 'd-i-42-prog', text: 'Está duchándose ahora mismo, no puede contestar el teléfono.', en: 'She is taking a shower right now, she can\'t answer the phone.', country: null },
      { id: 'd-i-43-prog', text: 'Te lo estoy explicando con paciencia, pero no me prestas atención.', en: 'I am explaining it to you with patience, but you\'re not paying attention.', country: null },
      { id: 'd-i-44-prog', text: 'Mi mamá está preparándonos una sorpresa para el cumpleaños.', en: 'My mom is preparing a surprise for us for the birthday.', country: null },
      // Possessive pronoun sentences (paired with Lesson 50)
      { id: 'd-i-45-pos', text: 'Este libro no es mío, debe ser tuyo o de tu hermana.', en: 'This book isn\'t mine, it must be yours or your sister\'s.', country: null },
      { id: 'd-i-46-pos', text: 'Mi casa es vieja pero la suya es completamente nueva.', en: 'My house is old but his/hers is completely new.', country: null },
      { id: 'd-i-47-pos', text: 'Las llaves del coche son las mías, las tuyas están en la mesa.', en: 'The car keys are mine, yours are on the table.', country: null },
      { id: 'd-i-48-pos', text: 'Lo nuestro fue especial, pero ya terminó hace tiempo.', en: 'What we had was special, but it ended a while ago.', country: null },
      // Dances / dancing (paired with the Dances vocab deck)
      { id: 'd-i-49-baile', text: 'Aprendí a bailar salsa en una fiesta el verano pasado.', en: 'I learned to dance salsa at a party last summer.', country: null },
      { id: 'd-i-50-baile', text: 'El tango nació en los barrios de Buenos Aires hace más de cien años.', en: 'Tango was born in the neighborhoods of Buenos Aires more than a hundred years ago.', country: 'ar' },
      { id: 'd-i-51-baile', text: 'En la fiesta, la pista de baile estaba llena y todos seguían el ritmo.', en: 'At the party, the dance floor was packed and everyone followed the beat.', country: null },
      { id: 'd-i-52-baile', text: 'El flamenco combina la guitarra, el cante y el zapateo de los bailarines.', en: 'Flamenco combines the guitar, the singing, and the foot-stomping of the dancers.', country: 'es' },
      // Cooking (paired with the Cooking vocab deck)
      { id: 'd-i-53-cocina', text: 'Primero pica la cebolla y luego fríela en la sartén a fuego lento.', en: 'First chop the onion and then fry it in the pan over low heat.', country: null },
      { id: 'd-i-54-cocina', text: 'Mi abuela hierve el arroz mientras prepara la sopa de pollo.', en: 'My grandmother boils the rice while she makes the chicken soup.', country: null },
      { id: 'd-i-55-cocina', text: 'No olvides probar la salsa para ver si le falta sal.', en: 'Don\'t forget to taste the sauce to see if it needs salt.', country: null },
      { id: 'd-i-56-cocina', text: 'Agrega dos cucharadas de aceite y mezcla bien los ingredientes.', en: 'Add two spoonfuls of oil and mix the ingredients well.', country: null },
      // Market & shopping (paired with the Market vocab deck)
      { id: 'd-i-57-mercado', text: 'Los sábados vamos al mercado a comprar fruta y verdura fresca.', en: 'On Saturdays we go to the market to buy fresh fruit and vegetables.', country: null },
      { id: 'd-i-58-mercado', text: '¿A cuánto está el kilo de tomates? Me parece un poco caro.', en: 'How much is a kilo of tomatoes? It seems a bit expensive to me.', country: null },
      { id: 'd-i-59-mercado', text: 'El vendedor me hizo un descuento porque compré una docena.', en: 'The vendor gave me a discount because I bought a dozen.', country: null },
      { id: 'd-i-60-mercado', text: 'Pagué en efectivo y guardé todo en mi propia bolsa.', en: 'I paid in cash and put everything in my own bag.', country: null },
      // Math (paired with the Math vocab deck)
      { id: 'd-i-61-mate', text: 'Si sumas estos tres números, el resultado es cuarenta y dos.', en: 'If you add these three numbers, the result is forty-two.', country: null },
      { id: 'd-i-62-mate', text: 'La tienda ofrece un descuento del veinte por ciento en todo.', en: 'The store offers a twenty percent discount on everything.', country: null },
      { id: 'd-i-63-mate', text: 'Para resolver el problema, primero multiplica y luego resta.', en: 'To solve the problem, first multiply and then subtract.', country: null },
      { id: 'd-i-64-mate', text: 'La mitad de la clase aprobó el examen de matemáticas.', en: 'Half the class passed the math exam.', country: null },
      // Politics (paired with the Politics vocab deck)
      { id: 'd-i-65-pol', text: 'Las elecciones son en noviembre y todos quieren votar.', en: 'The elections are in November and everyone wants to vote.', country: null },
      { id: 'd-i-66-pol', text: 'El candidato dio un discurso sobre los derechos de los ciudadanos.', en: 'The candidate gave a speech about citizens\' rights.', country: null },
      { id: 'd-i-67-pol', text: 'En una democracia, el gobierno debe respetar la libertad de todos.', en: 'In a democracy, the government must respect everyone\'s freedom.', country: null },
      { id: 'd-i-68-pol', text: 'Hubo una gran protesta en la plaza contra la corrupción.', en: 'There was a big protest in the square against corruption.', country: null },
      // Science (paired with the Science vocab deck)
      { id: 'd-i-69-cien', text: 'La científica propuso una hipótesis y la probó en el laboratorio.', en: 'The scientist proposed a hypothesis and tested it in the lab.', country: null },
      { id: 'd-i-70-cien', text: 'Con el microscopio podemos observar las células muy de cerca.', en: 'With the microscope we can observe the cells very closely.', country: null },
      { id: 'd-i-71-cien', text: 'La gravedad atrae todos los objetos hacia la Tierra.', en: 'Gravity pulls all objects toward the Earth.', country: null },
      { id: 'd-i-72-cien', text: 'El experimento confirmó la teoría después de muchas pruebas.', en: 'The experiment confirmed the theory after many tests.', country: null },
      // Geography (paired with the Geography vocab deck)
      { id: 'd-i-73-geo', text: 'Los Andes son la cordillera más larga del mundo.', en: 'The Andes are the longest mountain range in the world.', country: null },
      { id: 'd-i-74-geo', text: 'El río Amazonas cruza la selva más grande del planeta.', en: 'The Amazon River crosses the largest rainforest on the planet.', country: 'pe' },
      { id: 'd-i-75-geo', text: 'El desierto de Atacama, en Chile, es uno de los más secos.', en: 'The Atacama Desert, in Chile, is one of the driest.', country: 'cl' },
      { id: 'd-i-76-geo', text: 'Cuba es una isla rodeada por el mar Caribe.', en: 'Cuba is an island surrounded by the Caribbean Sea.', country: 'cu' },
      // Hunting (paired with the Hunting vocab deck)
      { id: 'd-i-77-caza', text: 'El cazador siguió las huellas del venado por el bosque.', en: 'The hunter followed the deer\'s tracks through the forest.', country: null },
      { id: 'd-i-78-caza', text: 'Necesitas un permiso para cazar durante la temporada.', en: 'You need a permit to hunt during the season.', country: null },
      { id: 'd-i-79-caza', text: 'Esperó en silencio y apuntó con mucho cuidado.', en: 'He waited in silence and aimed very carefully.', country: null },
      { id: 'd-i-80-caza', text: 'La paciencia es más importante que el arma en la caza.', en: 'Patience is more important than the weapon in hunting.', country: null },
      // Fishing (paired with the Fishing vocab deck)
      { id: 'd-i-81-pesca', text: 'Salimos de madrugada con las cañas y la carnada.', en: 'We left at dawn with the rods and the bait.', country: null },
      { id: 'd-i-82-pesca', text: 'Atrapé una trucha grande, pero la solté al agua otra vez.', en: 'I caught a big trout, but I released it back into the water.', country: null },
      { id: 'd-i-83-pesca', text: 'Los peces no pican cuando el agua está muy fría.', en: 'The fish don\'t bite when the water is very cold.', country: null },
      { id: 'd-i-84-pesca', text: 'Pescamos desde el muelle toda la tarde.', en: 'We fished from the pier all afternoon.', country: null },
      // Camping (paired with the Camping vocab deck)
      { id: 'd-i-85-camp', text: 'Montamos la tienda de campaña junto al río.', en: 'We set up the tent next to the river.', country: null },
      { id: 'd-i-86-camp', text: 'Por la noche encendimos una fogata y contamos historias.', en: 'At night we lit a campfire and told stories.', country: null },
      { id: 'd-i-87-camp', text: 'No olvides la linterna, los fósforos y el repelente.', en: 'Don\'t forget the flashlight, the matches, and the repellent.', country: null },
      { id: 'd-i-88-camp', text: 'Dormimos al aire libre y miramos las estrellas.', en: 'We slept outdoors and watched the stars.', country: null },
      // Nature (paired with the Nature vocab deck)
      { id: 'd-i-89-nat', text: 'Los árboles nos dan oxígeno y hogar a los pájaros.', en: 'Trees give us oxygen and a home to the birds.', country: null },
      { id: 'd-i-90-nat', text: 'La contaminación de las fábricas daña el medio ambiente.', en: 'Pollution from factories harms the environment.', country: null },
      { id: 'd-i-91-nat', text: 'Debemos proteger los bosques y no tirar basura.', en: 'We must protect the forests and not throw trash.', country: null },
      { id: 'd-i-92-nat', text: 'Una mariposa azul voló entre las flores del jardín.', en: 'A blue butterfly flew among the flowers in the garden.', country: null },
      // Space (paired with the Space vocab deck)
      { id: 'd-i-93-esp', text: 'La Tierra gira alrededor del Sol una vez al año.', en: 'The Earth revolves around the Sun once a year.', country: null },
      { id: 'd-i-94-esp', text: 'Los astronautas viajaron a la Luna en un cohete enorme.', en: 'The astronauts traveled to the Moon in an enormous rocket.', country: null },
      { id: 'd-i-95-esp', text: 'Con el telescopio podemos ver los planetas del sistema solar.', en: 'With the telescope we can see the planets of the solar system.', country: null },
      { id: 'd-i-96-esp', text: 'En el espacio no hay gravedad y todo flota.', en: 'In space there is no gravity and everything floats.', country: null },
      // Vehicles (paired with the Vehicles vocab deck)
      { id: 'd-i-97-veh', text: 'Tomo el metro al trabajo porque hay mucho tráfico.', en: 'I take the subway to work because there\'s a lot of traffic.', country: null },
      { id: 'd-i-98-veh', text: 'Aprendí a conducir el coche de mi padre el verano pasado.', en: 'I learned to drive my dad\'s car last summer.', country: null },
      { id: 'd-i-99-veh', text: 'El autobús llegó tarde y perdimos el tren.', en: 'The bus arrived late and we missed the train.', country: null },
      { id: 'd-i-100-veh', text: 'No encuentro dónde estacionar el coche por aquí.', en: 'I can\'t find anywhere to park the car around here.', country: null },
      // Tools (paired with the Tools vocab deck)
      { id: 'd-i-101-herr', text: 'Necesito el martillo y unos clavos para colgar el cuadro.', en: 'I need the hammer and some nails to hang the picture.', country: null },
      { id: 'd-i-102-herr', text: 'Aprieta el tornillo con el destornillador, por favor.', en: 'Tighten the screw with the screwdriver, please.', country: null },
      { id: 'd-i-103-herr', text: 'Mi abuelo podía arreglar casi todo en su taller.', en: 'My grandfather could fix almost anything in his workshop.', country: null },
      { id: 'd-i-104-herr', text: 'Guarda las herramientas en la caja cuando termines.', en: 'Put the tools in the box when you finish.', country: null },
      // Construction (paired with the Construction vocab deck)
      { id: 'd-i-105-con', text: 'Los obreros levantan las paredes con ladrillos y cemento.', en: 'The workers build the walls with bricks and cement.', country: null },
      { id: 'd-i-106-con', text: 'El arquitecto revisó los planos antes de empezar la obra.', en: 'The architect checked the blueprints before starting the project.', country: null },
      { id: 'd-i-107-con', text: 'La grúa levantó las vigas de acero hasta el techo.', en: 'The crane lifted the steel beams up to the roof.', country: null },
      { id: 'd-i-108-con', text: 'En la obra es obligatorio usar casco por seguridad.', en: 'On the construction site, wearing a hard hat is required for safety.', country: null },
      // Music (paired with the Music vocab deck)
      { id: 'd-i-109-mus', text: 'Toco la guitarra en una banda con mis amigos.', en: 'I play guitar in a band with my friends.', country: null },
      { id: 'd-i-110-mus', text: 'El cantante salió al escenario y el público aplaudió.', en: 'The singer came out on stage and the audience applauded.', country: null },
      { id: 'd-i-111-mus', text: 'Me sé la letra de esta canción de memoria.', en: 'I know the lyrics of this song by heart.', country: null },
      { id: 'd-i-112-mus', text: 'El ritmo de la salsa viene de los tambores del Caribe.', en: 'The rhythm of salsa comes from the drums of the Caribbean.', country: null },
      // Education (paired with the Education vocab deck)
      { id: 'd-i-113-edu', text: 'La profesora explicó la lección y nos puso tarea.', en: 'The teacher explained the lesson and gave us homework.', country: null },
      { id: 'd-i-114-edu', text: 'Estudié mucho y aprobé el examen con buena nota.', en: 'I studied a lot and passed the exam with a good grade.', country: null },
      { id: 'd-i-115-edu', text: 'Ganó una beca para estudiar en la universidad.', en: 'She won a scholarship to study at the university.', country: null },
      { id: 'd-i-116-edu', text: 'El conocimiento es algo que nadie te puede quitar.', en: 'Knowledge is something no one can take from you.', country: null },
      // Military (paired with the Military vocab deck)
      { id: 'd-i-117-mil', text: 'Los soldados defendieron la frontera durante la guerra.', en: 'The soldiers defended the border during the war.', country: null },
      { id: 'd-i-118-mil', text: 'El general cambió de estrategia antes de la batalla.', en: 'The general changed strategy before the battle.', country: null },
      { id: 'd-i-119-mil', text: 'Después de muchos años de guerra, por fin llegó la paz.', en: 'After many years of war, peace finally came.', country: null },
      { id: 'd-i-120-mil', text: 'Las tropas regresaron a la base tras la misión.', en: 'The troops returned to the base after the mission.', country: null },
      // Weapons (paired with the Weapons vocab deck)
      { id: 'd-i-121-arm', text: 'El caballero llevaba una espada y un escudo.', en: 'The knight carried a sword and a shield.', country: null },
      { id: 'd-i-122-arm', text: 'La pólvora cambió la forma de hacer la guerra.', en: 'Gunpowder changed the way war was waged.', country: null },
      { id: 'd-i-123-arm', text: 'Las armas son peligrosas y hay leyes para controlarlas.', en: 'Weapons are dangerous and there are laws to control them.', country: null },
      { id: 'd-i-124-arm', text: 'El cañón disparó hacia el barco enemigo.', en: 'The cannon fired toward the enemy ship.', country: null },
      // Law (paired with the Law vocab deck)
      { id: 'd-i-125-der', text: 'El abogado defendió al acusado ante el tribunal.', en: 'The lawyer defended the accused before the court.', country: null },
      { id: 'd-i-126-der', text: 'El juez escuchó a los testigos antes de decidir.', en: 'The judge listened to the witnesses before deciding.', country: null },
      { id: 'd-i-127-der', text: 'Nadie es culpable hasta que se demuestre con pruebas.', en: 'No one is guilty until it is proven with evidence.', country: null },
      { id: 'd-i-128-der', text: 'La policía arrestó al sospechoso del robo.', en: 'The police arrested the robbery suspect.', country: null },
      // Professions (paired with the Professions vocab deck)
      { id: 'd-i-129-prof', text: 'De grande quiero ser ingeniera o médica.', en: 'When I grow up I want to be an engineer or a doctor.', country: null },
      { id: 'd-i-130-prof', text: 'Eligió esa profesión porque le gusta ayudar a la gente.', en: 'She chose that profession because she likes helping people.', country: null },
      { id: 'd-i-131-prof', text: 'Muchas personas cambian de carrera más de una vez.', en: 'Many people change careers more than once.', country: null },
      { id: 'd-i-132-prof', text: 'El maestro y la enfermera trabajan mucho por los demás.', en: 'The teacher and the nurse work hard for others.', country: null },
      // Health & medicine (paired with the Health vocab deck)
      { id: 'd-i-133-sal', text: 'Tengo fiebre y me duele mucho la cabeza desde ayer.', en: 'I have a fever and my head has hurt a lot since yesterday.', country: null },
      { id: 'd-i-134-sal', text: 'La doctora me dio una receta para comprar en la farmacia.', en: 'The doctor gave me a prescription to fill at the pharmacy.', country: null },
      { id: 'd-i-135-sal', text: 'Llamaron a una ambulancia porque era una emergencia.', en: 'They called an ambulance because it was an emergency.', country: null },
      { id: 'd-i-136-sal', text: 'Toma la medicina dos veces al día y descansa mucho.', en: 'Take the medicine twice a day and rest a lot.', country: null }
    ],
    advanced: [
      { id: 'd-a-01', text: 'A pesar de las dificultades económicas, muchos jóvenes deciden estudiar idiomas extranjeros para mejorar sus oportunidades laborales.', en: 'Despite economic difficulties, many young people decide to study foreign languages to improve their job opportunities.', country: null },
      { id: 'd-a-02', text: 'La conquista española transformó profundamente la cultura, la religión y el idioma de los pueblos indígenas del continente americano.', en: 'The Spanish conquest profoundly transformed the culture, religion, and language of the indigenous peoples of the American continent.', country: null },
      { id: 'd-a-03', text: 'Aunque Machu Picchu es el sitio arqueológico más famoso del Perú, existen muchos otros lugares impresionantes a lo largo del país.', en: 'Although Machu Picchu is the most famous archaeological site in Peru, there are many other impressive places throughout the country.', country: 'pe' },
      { id: 'd-a-04', text: 'La ciudad de México es enorme y tiene una historia que combina las tradiciones indígenas con la influencia colonial española.', en: 'Mexico City is enormous and has a history that combines indigenous traditions with Spanish colonial influence.', country: 'mx' },
      { id: 'd-a-05', text: 'Si pudiera viajar a cualquier lugar del mundo, iría a las Islas Galápagos para ver los animales únicos que viven allí.', en: 'If I could travel anywhere in the world, I would go to the Galápagos Islands to see the unique animals that live there.', country: 'ec' },
      { id: 'd-a-06', text: 'Es fundamental proteger el medio ambiente porque las decisiones que tomamos hoy afectarán a las futuras generaciones.', en: 'It\'s essential to protect the environment because the decisions we make today will affect future generations.', country: null },
      { id: 'd-a-07', text: 'El tango argentino nació en los barrios de Buenos Aires a fines del siglo diecinueve y hoy se baila en todo el mundo.', en: 'Argentine tango was born in the neighborhoods of Buenos Aires at the end of the 19th century and is danced all over the world today.', country: 'ar' },
      { id: 'd-a-08', text: 'Aprender otro idioma no solo abre puertas profesionales, sino que también nos permite entender otras culturas con más profundidad.', en: 'Learning another language not only opens professional doors, but also allows us to understand other cultures more deeply.', country: null },
      { id: 'd-a-09', text: 'La gastronomía peruana es reconocida mundialmente por su variedad y por la mezcla única de ingredientes indígenas, asiáticos y europeos.', en: 'Peruvian cuisine is recognized worldwide for its variety and for the unique blend of indigenous, Asian, and European ingredients.', country: 'pe' },
      { id: 'd-a-10', text: 'Los gauchos de Argentina y Uruguay representan una tradición rural que ha sobrevivido desde la época colonial hasta nuestros días.', en: 'The gauchos of Argentina and Uruguay represent a rural tradition that has survived from colonial times to the present day.', country: 'ar' },
      // Pluperfect subjunctive / past conditionals (paired with Lesson 60)
      { id: 'd-a-11-plus', text: 'Si hubiera sabido que venías, habría preparado algo de comer.', en: 'If I had known you were coming, I would have made something to eat.', country: null },
      { id: 'd-a-12-plus', text: 'Ojalá hubiéramos llegado más temprano para conseguir buenos asientos.', en: 'I wish we had arrived earlier to get good seats.', country: null },
      { id: 'd-a-13-plus', text: 'Ella me miró como si nunca hubiera visto a nadie tan cansado.', en: 'She looked at me as if she had never seen anyone so tired.', country: null },
      { id: 'd-a-14-plus', text: 'Si no hubieran construido la represa, el valle todavía existiría.', en: 'If they hadn\'t built the dam, the valley would still exist.', country: null }
    ]
  };

  function getDictationReward(level) {
    return level === 'beginner' ? 5 : level === 'intermediate' ? 10 : 15;
  }

  function renderDictation() {
    const board = document.getElementById('dictation-board');
    if (!board) return;
    const clips = DICTATION_CLIPS[dictationLevel] || [];
    const reward = getDictationReward(dictationLevel);
    if (!STATE.completedDictation) STATE.completedDictation = {};

    board.innerHTML = clips.map((clip, i) => {
      const done = STATE.completedDictation[clip.id];
      const countryFlag = {
        'pe': '🇵🇪 Perú', 'mx': '🇲🇽 México', 'ar': '🇦🇷 Argentina',
        'es': '🇪🇸 España', 'co': '🇨🇴 Colombia', 'ec': '🇪🇨 Ecuador'
      }[clip.country] || '';
      return `
        <div class="listen-row ${done ? 'completed' : ''}" id="dict-row-${clip.id}">
          <div class="listen-row-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="listen-row-content">
            ${countryFlag ? `<span class="listen-row-tag">${countryFlag}</span>` : `<span class="listen-row-tag">Dictation · ${reward} Lucas</span>`}
            <div class="listen-row-controls">
              <button class="listen-row-play" onclick="playDictation('${clip.id}', this)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <input type="text" class="listen-row-input ${done ? 'correct' : ''}" data-clip="${clip.id}"
                     value="${done ? clip.text.replace(/"/g, '&quot;') : ''}"
                     ${done ? 'disabled' : ''}
                     placeholder="Type what you hear…"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();checkDictation('${clip.id}');}">
              <button class="listen-row-check" onclick="checkDictation('${clip.id}')" ${done ? 'disabled' : ''}>${done ? '✓' : 'Check'}</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function playDictation(clipId, btn) {
    const clip = findDictationClip(clipId);
    if (!clip) return;
    const row = document.getElementById('dict-row-' + clipId);
    if (row) row.classList.add('playing');
    speakSpanish(clip.text, () => { if (row) row.classList.remove('playing'); });
  }

  function findDictationClip(clipId) {
    for (const level of Object.keys(DICTATION_CLIPS)) {
      const c = DICTATION_CLIPS[level].find(x => x.id === clipId);
      if (c) return c;
    }
    return null;
  }

  function checkDictation(clipId) {
    const clip = findDictationClip(clipId);
    if (!clip) return;
    const input = document.querySelector('.listen-row-input[data-clip="' + clipId + '"]');
    if (!input) return;
    const userAns = normalizeListening(input.value);
    const correctAns = normalizeListening(clip.text);
    const row = document.getElementById('dict-row-' + clipId);

    if (userAns === correctAns) {
      // Correct
      input.classList.add('correct');
      input.disabled = true;
      if (!STATE.completedDictation) STATE.completedDictation = {};
      if (!STATE.completedDictation[clipId]) {
        STATE.completedDictation[clipId] = true;
        const reward = getDictationReward(
          clipId.startsWith('d-b-') ? 'beginner' :
          clipId.startsWith('d-i-') ? 'intermediate' : 'advanced'
        );
        awardCoins(reward, 'Dictation: ' + clip.text.slice(0, 30) + '…');
      }
      if (row) row.classList.add('completed');
      // Disable check button
      const btn = row.querySelector('.listen-row-check');
      if (btn) { btn.disabled = true; btn.textContent = '✓'; }
      // Remove any existing correction
      const old = row.querySelector('.listen-correction');
      if (old) old.remove();
    } else {
      input.classList.add('wrong');
      // Show correction
      const old = row.querySelector('.listen-correction');
      if (old) old.remove();
      const corr = document.createElement('div');
      corr.className = 'listen-correction';
      corr.textContent = '→ ' + clip.text + '  (' + clip.en + ')';
      row.appendChild(corr);
    }
  }

  // ========== COMPREHENSION STORIES ==========
  // Each story: paragraph students hear, then multi-choice questions
  const COMPREHENSION_STORIES = [
    {
      id: 'comp-school-day',
      title: 'Un <em>día de escuela</em>',
      country: null,
      tag: 'Daily life',
      summary: 'A student describes a typical school day.',
      audio: 'Soy estudiante en una escuela secundaria. Tengo clases de matemáticas, inglés, español y ciencias. Mi clase favorita es la de español porque la profesora es muy simpática. Almuerzo con mis amigos en la cafetería. Después de clases, juego al fútbol con el equipo de la escuela.',
      reward: 10,
      questions: [
        { q: '¿Cuál es la clase favorita del estudiante?', options: [
          { text: 'Matemáticas', correct: false },
          { text: 'Español', correct: true },
          { text: 'Ciencias', correct: false }
        ]},
        { q: '¿Por qué le gusta esa clase?', options: [
          { text: 'Porque es fácil', correct: false },
          { text: 'Porque la profesora es simpática', correct: true },
          { text: 'Porque no hay tarea', correct: false }
        ]},
        { q: '¿Qué hace después de clases?', options: [
          { text: 'Estudia en la biblioteca', correct: false },
          { text: 'Juega al fútbol con el equipo', correct: true },
          { text: 'Va a casa inmediatamente', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-peru-trip',
      title: 'Un viaje al <em>Perú</em>',
      country: 'pe',
      tag: 'Travel · Perú',
      summary: 'A traveler describes a recent trip to Peru.',
      audio: 'El año pasado viajé al Perú con mi familia. Pasamos tres días en Lima, la capital, donde probamos el ceviche. Después fuimos a Cuzco. Subimos a Machu Picchu, que está en la sierra. Fue impresionante. También compramos recuerdos para nuestros amigos. Quiero volver al Perú algún día.',
      reward: 15,
      questions: [
        { q: '¿Dónde pasaron los primeros tres días?', options: [
          { text: 'En Cuzco', correct: false },
          { text: 'En Lima', correct: true },
          { text: 'En Machu Picchu', correct: false }
        ]},
        { q: '¿Qué comieron en Lima?', options: [
          { text: 'Tacos', correct: false },
          { text: 'Empanadas', correct: false },
          { text: 'Ceviche', correct: true }
        ]},
        { q: 'Según el narrador, Machu Picchu fue…', options: [
          { text: 'aburrido', correct: false },
          { text: 'impresionante', correct: true },
          { text: 'pequeño', correct: false }
        ]},
        { q: '¿Qué compraron para sus amigos?', options: [
          { text: 'Comida', correct: false },
          { text: 'Recuerdos', correct: true },
          { text: 'Ropa', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-mexico-food',
      title: 'La <em>comida mexicana</em>',
      country: 'mx',
      tag: 'Culture · México',
      summary: 'A short look at Mexican cuisine.',
      audio: 'La comida mexicana es muy variada y deliciosa. Los tacos son famosos en todo el mundo, pero hay muchos otros platos importantes. El mole es una salsa compleja con chiles y chocolate. Los chiles en nogada tienen los colores de la bandera mexicana. Mi plato favorito es el pozole, una sopa con maíz que comemos en ocasiones especiales.',
      reward: 15,
      questions: [
        { q: 'Según el narrador, ¿qué tiene el mole?', options: [
          { text: 'Solo chiles', correct: false },
          { text: 'Chiles y chocolate', correct: true },
          { text: 'Solo maíz', correct: false }
        ]},
        { q: '¿Qué representan los colores de los chiles en nogada?', options: [
          { text: 'Los Andes', correct: false },
          { text: 'La bandera mexicana', correct: true },
          { text: 'Las estaciones del año', correct: false }
        ]},
        { q: '¿Cuál es el plato favorito del narrador?', options: [
          { text: 'Los tacos', correct: false },
          { text: 'El mole', correct: false },
          { text: 'El pozole', correct: true }
        ]},
        { q: '¿Cuándo comen pozole?', options: [
          { text: 'Todos los días', correct: false },
          { text: 'En ocasiones especiales', correct: true },
          { text: 'Solo por la mañana', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-weekend',
      title: 'Mi <em>fin de semana</em>',
      country: null,
      tag: 'Daily life',
      summary: 'A teenager describes a typical weekend.',
      audio: 'Los sábados me levanto tarde. Después de desayunar, voy al parque con mi perro. Por la tarde, mi madre y yo vamos al supermercado. Los domingos toda la familia come en casa de mis abuelos. Mi abuela siempre prepara comida deliciosa. Después comemos juntos y hablamos mucho. Me encantan los fines de semana.',
      reward: 10,
      questions: [
        { q: '¿Qué hace el narrador los sábados por la mañana?', options: [
          { text: 'Se levanta temprano', correct: false },
          { text: 'Va al parque con su perro', correct: true },
          { text: 'Va al supermercado solo', correct: false }
        ]},
        { q: '¿Con quién va al supermercado?', options: [
          { text: 'Con su padre', correct: false },
          { text: 'Con su madre', correct: true },
          { text: 'Con sus amigos', correct: false }
        ]},
        { q: '¿Dónde comen los domingos?', options: [
          { text: 'En un restaurante', correct: false },
          { text: 'En casa de los abuelos', correct: true },
          { text: 'En el parque', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-spain-cities',
      title: 'Las <em>ciudades de España</em>',
      country: 'es',
      tag: 'Travel · España',
      summary: 'A quick overview of major Spanish cities.',
      audio: 'España es un país pequeño, pero tiene muchas ciudades importantes. Madrid es la capital y está en el centro del país. Barcelona está en la costa y es famosa por su arquitectura. Sevilla está en el sur y tiene mucha historia árabe. Valencia es famosa por la paella. Si visitas España, debes probar la comida típica de cada región.',
      reward: 15,
      questions: [
        { q: '¿Dónde está Madrid?', options: [
          { text: 'En la costa', correct: false },
          { text: 'En el centro del país', correct: true },
          { text: 'En el sur', correct: false }
        ]},
        { q: '¿Por qué es famosa Barcelona según el texto?', options: [
          { text: 'Por su arquitectura', correct: true },
          { text: 'Por su paella', correct: false },
          { text: 'Por su historia árabe', correct: false }
        ]},
        { q: '¿Qué ciudad tiene mucha historia árabe?', options: [
          { text: 'Madrid', correct: false },
          { text: 'Valencia', correct: false },
          { text: 'Sevilla', correct: true }
        ]},
        { q: '¿Qué recomienda el narrador hacer en España?', options: [
          { text: 'Visitar solo Madrid', correct: false },
          { text: 'Probar la comida típica de cada región', correct: true },
          { text: 'Hablar solo inglés', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-argentina-mate',
      title: 'El <em>mate</em> argentino',
      country: 'ar',
      tag: 'Culture · Argentina',
      summary: 'A short explanation of the mate tradition.',
      audio: 'El mate es la bebida más típica de Argentina. No es solo una bebida; es una tradición social muy importante. Los amigos y la familia comparten el mate. Una persona prepara el mate y todos toman del mismo recipiente. El mate puede ser amargo o dulce. Compartir el mate es un símbolo de amistad y hospitalidad en Argentina.',
      reward: 15,
      questions: [
        { q: 'Según el texto, ¿qué es el mate?', options: [
          { text: 'Solo una bebida', correct: false },
          { text: 'Una bebida y una tradición social importante', correct: true },
          { text: 'Un tipo de comida', correct: false }
        ]},
        { q: '¿Cómo toman el mate los amigos?', options: [
          { text: 'Cada persona usa su propio vaso', correct: false },
          { text: 'Todos toman del mismo recipiente', correct: true },
          { text: 'Nadie comparte el mate', correct: false }
        ]},
        { q: 'Según el texto, el mate puede ser…', options: [
          { text: 'amargo o dulce', correct: true },
          { text: 'solo dulce', correct: false },
          { text: 'caliente o frío', correct: false }
        ]},
        { q: '¿Qué simboliza compartir el mate?', options: [
          { text: 'Riqueza', correct: false },
          { text: 'Amistad y hospitalidad', correct: true },
          { text: 'Tristeza', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-mexico-mercado',
      title: 'El <em>mercado</em> mexicano',
      country: 'mx',
      tag: 'Daily life · México',
      summary: 'A short look at the traditional Mexican market.',
      audio: 'El mercado es una parte muy importante de la vida en México. Los mercados son grandes y coloridos. La gente va al mercado para comprar comida fresca: frutas, verduras, maíz y chiles. También venden artesanías tradicionales hechas a mano. Muchas familias van al mercado los fines de semana. A veces hay música y la gente habla con sus amigos. El mercado no es solo un lugar para comprar; también es un lugar social.',
      reward: 15,
      questions: [
        { q: 'Según el texto, ¿cómo son los mercados mexicanos?', options: [
          { text: 'Pequeños y silenciosos', correct: false },
          { text: 'Grandes y coloridos', correct: true },
          { text: 'Modernos y vacíos', correct: false }
        ]},
        { q: '¿Qué compra la gente en el mercado?', options: [
          { text: 'Solo ropa', correct: false },
          { text: 'Comida fresca y artesanías', correct: true },
          { text: 'Solo música', correct: false }
        ]},
        { q: '¿Cuándo van muchas familias al mercado?', options: [
          { text: 'Los fines de semana', correct: true },
          { text: 'Solo de noche', correct: false },
          { text: 'Nunca', correct: false }
        ]},
        { q: 'Según el texto, el mercado también es…', options: [
          { text: 'un lugar social', correct: true },
          { text: 'un lugar aburrido', correct: false },
          { text: 'solo para turistas', correct: false }
        ]}
      ]
    },
    {
      id: 'comp-colombia-cafe',
      title: 'El <em>café colombiano</em>',
      country: 'co',
      tag: 'Culture · Colombia',
      summary: 'A short look at why Colombia is famous for coffee.',
      audio: 'El café es muy importante para Colombia. El país es uno de los productores de café más famosos del mundo. El café colombiano crece en las montañas, donde el clima es perfecto: no es muy frío y no es muy caliente. La tierra de las montañas es muy fértil. Muchas familias colombianas tienen fincas pequeñas y cosechan el café a mano. Después, Colombia exporta el café a muchos países. El café es parte de la identidad nacional de Colombia.',
      reward: 15,
      questions: [
        { q: '¿Dónde crece el café en Colombia?', options: [
          { text: 'En la playa', correct: false },
          { text: 'En las montañas', correct: true },
          { text: 'En el desierto', correct: false }
        ]},
        { q: 'Según el texto, ¿cómo es el clima de las montañas?', options: [
          { text: 'Muy frío', correct: false },
          { text: 'Perfecto: ni muy frío ni muy caliente', correct: true },
          { text: 'Muy caliente', correct: false }
        ]},
        { q: '¿Cómo cosechan el café muchas familias?', options: [
          { text: 'Con máquinas grandes', correct: false },
          { text: 'A mano', correct: true },
          { text: 'No lo cosechan', correct: false }
        ]},
        { q: '¿Qué hace Colombia con el café?', options: [
          { text: 'Lo exporta a muchos países', correct: true },
          { text: 'Solo lo vende en casa', correct: false },
          { text: 'Lo regala', correct: false }
        ]}
      ]
    }
  ];

  let currentComprehension = null;

  function renderComprehensionList() {
    const container = document.getElementById('comprehension-list');
    const detail = document.getElementById('comprehension-detail');
    if (!container) return;
    if (!STATE.completedComprehension) STATE.completedComprehension = {};
    detail.style.display = 'none';
    container.style.display = '';
    container.innerHTML = COMPREHENSION_STORIES.map(s => {
      const done = STATE.completedComprehension[s.id];
      const flag = {
        'pe': '🇵🇪', 'mx': '🇲🇽', 'es': '🇪🇸', 'ar': '🇦🇷', 'co': '🇨🇴', 'ec': '🇪🇨'
      }[s.country] || '';
      return `
        <div class="comp-card ${done ? 'completed' : ''}" onclick="openComprehension('${s.id}')">
          <div class="comp-meta">
            <span>${flag} ${s.tag}</span>
            <span>${s.reward} Lucas per Q · ${s.questions.length} Qs</span>
            ${done ? '<span style="color:#5a7a3f;">✓ Completed</span>' : ''}
          </div>
          <h4>${s.title}</h4>
          <p>${s.summary}</p>
        </div>
      `;
    }).join('');
  }

  function openComprehension(storyId) {
    const story = COMPREHENSION_STORIES.find(s => s.id === storyId);
    if (!story) return;
    currentComprehension = story;
    const list = document.getElementById('comprehension-list');
    const detail = document.getElementById('comprehension-detail');
    list.style.display = 'none';
    detail.style.display = '';
    detail.innerHTML = `
      <a href="javascript:void(0)" onclick="renderComprehensionList()" class="aviso-link" style="display:inline-block;margin-bottom:16px;">← Back to stories</a>
      <div class="comp-detail-card">
        <h3 style="font-family: 'DM Serif Display', serif; font-size: 28px; font-weight: 400; margin-bottom: 6px;">${story.title}</h3>
        <div class="comp-meta">${story.tag} · Listen, then answer.</div>
        <div class="comp-play-big">
          <button class="play-btn" id="comp-play-btn" onclick="speakSpanish(currentComprehension.audio, () => document.getElementById('comp-play-btn').classList.remove('playing'))">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div style="flex:1;">
            <p style="font-size:13px;color:var(--ink-soft);margin:0;">Tap play. You can replay as many times as you need.</p>
            <p style="font-size:11px;color:var(--ink-soft);margin:4px 0 0;font-family:'JetBrains Mono',monospace;">Adjust speed at the top of the page</p>
          </div>
        </div>
        <div id="comp-questions"></div>
      </div>
    `;
    renderComprehensionQuestions();
  }

  function renderComprehensionQuestions() {
    const c = document.getElementById('comp-questions');
    if (!c || !currentComprehension) return;
    if (!STATE.compAnswers) STATE.compAnswers = {};
    const storyId = currentComprehension.id;
    if (!STATE.compAnswers[storyId]) STATE.compAnswers[storyId] = {};
    c.innerHTML = currentComprehension.questions.map((q, i) => `
      <div class="quiz-q" data-qidx="${i}">
        <div class="quiz-q-label">Question ${String(i + 1).padStart(2, '0')}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `
            <button class="quiz-opt" data-correct="${opt.correct}" onclick="answerComp(this, ${i}, ${oi})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function answerComp(btn, qidx, oidx) {
    const correct = btn.dataset.correct === 'true';
    const storyId = currentComprehension.id;
    if (!STATE.compAnswers) STATE.compAnswers = {};
    if (!STATE.compAnswers[storyId]) STATE.compAnswers[storyId] = {};
    // Don't re-award if already answered
    if (STATE.compAnswers[storyId][qidx]) return;
    STATE.compAnswers[storyId][qidx] = correct;
    // Visual feedback
    const opts = btn.parentElement.querySelectorAll('.quiz-opt');
    opts.forEach(o => {
      o.disabled = true;
      if (o.dataset.correct === 'true') o.classList.add('correct');
      else if (o === btn) o.classList.add('wrong');
    });
    if (correct) {
      awardCoins(currentComprehension.reward, 'Listening comp: ' + currentComprehension.title.replace(/<[^>]+>/g, ''));
    }
    // Check if all questions answered → mark story completed
    const answered = Object.keys(STATE.compAnswers[storyId]).length;
    if (answered === currentComprehension.questions.length) {
      if (!STATE.completedComprehension) STATE.completedComprehension = {};
      STATE.completedComprehension[storyId] = true;
    }
  }

  // ========== FILL IN THE BLANK ==========
  // Hear a full sentence; the displayed sentence has one word missing.
  // Student types the missing word.
  const FILL_BLANK_CLIPS = [
    { id: 'f-01', audio: 'Hoy hace mucho frío en la sierra.', blank: 'Hoy hace mucho _____ en la sierra.', answer: 'frío', en: 'Today it\'s very cold in the highlands.', country: null, reward: 8 },
    { id: 'f-02', audio: 'Me llamo Carlos y soy de México.', blank: 'Me llamo Carlos y soy de _____.', answer: 'México', en: 'My name is Carlos and I\'m from Mexico.', country: 'mx', reward: 8 },
    { id: 'f-03', audio: 'En Perú la papa es muy importante.', blank: 'En Perú la _____ es muy importante.', answer: 'papa', en: 'In Peru the potato is very important.', country: 'pe', reward: 10 },
    { id: 'f-04', audio: 'Mi hermana se ducha por la mañana.', blank: 'Mi hermana se _____ por la mañana.', answer: 'ducha', en: 'My sister showers in the morning.', country: null, reward: 8 },
    { id: 'f-05', audio: 'Los incas construyeron Machu Picchu hace muchos siglos.', blank: 'Los incas _____ Machu Picchu hace muchos siglos.', answer: 'construyeron', en: 'The Incas built Machu Picchu many centuries ago.', country: 'pe', reward: 12 },
    { id: 'f-06', audio: 'El año pasado viajamos a España con mis padres.', blank: 'El año pasado _____ a España con mis padres.', answer: 'viajamos', en: 'Last year we traveled to Spain with my parents.', country: 'es', reward: 12 },
    { id: 'f-07', audio: 'Me gusta comer ceviche en Lima.', blank: 'Me gusta comer _____ en Lima.', answer: 'ceviche', en: 'I like to eat ceviche in Lima.', country: 'pe', reward: 10 },
    { id: 'f-08', audio: 'En Argentina la gente toma mate todos los días.', blank: 'En Argentina la gente toma _____ todos los días.', answer: 'mate', en: 'In Argentina people drink mate every day.', country: 'ar', reward: 10 },
    { id: 'f-09', audio: 'Estudio español porque me gusta mucho la cultura.', blank: 'Estudio español porque me gusta mucho la _____.', answer: 'cultura', en: 'I study Spanish because I really like the culture.', country: null, reward: 10 },
    { id: 'f-10', audio: 'Mi padre trabaja en un hospital en la ciudad.', blank: 'Mi padre _____ en un hospital en la ciudad.', answer: 'trabaja', en: 'My father works at a hospital in the city.', country: null, reward: 8 },
    { id: 'f-11', audio: 'En España la paella es un plato famoso.', blank: 'En España la paella es un plato _____.', answer: 'famoso', en: 'In Spain paella is a famous dish.', country: 'es', reward: 10 },
    { id: 'f-12', audio: 'Por la tarde paseamos por la plaza del pueblo.', blank: 'Por la tarde _____ por la plaza del pueblo.', answer: 'paseamos', en: 'In the afternoon we stroll through the town square.', country: 'es', reward: 10 },
    { id: 'f-13', audio: 'En Argentina la gente comparte el mate con los amigos.', blank: 'En Argentina la gente _____ el mate con los amigos.', answer: 'comparte', en: 'In Argentina people share mate with friends.', country: 'ar', reward: 12 },
    { id: 'f-14', audio: 'El gaucho trabaja en el campo con los caballos.', blank: 'El gaucho trabaja en el _____ con los caballos.', answer: 'campo', en: 'The gaucho works in the countryside with the horses.', country: 'ar', reward: 10 },
    { id: 'f-15', audio: 'En el mercado venden maíz, chiles y artesanías.', blank: 'En el mercado venden maíz, _____ y artesanías.', answer: 'chiles', en: 'At the market they sell corn, chilis, and handicrafts.', country: 'mx', reward: 10 },
    { id: 'f-16', audio: 'Los mariachis cantan música tradicional en la fiesta.', blank: 'Los mariachis _____ música tradicional en la fiesta.', answer: 'cantan', en: 'The mariachis sing traditional music at the party.', country: 'mx', reward: 10 },
    { id: 'f-17', audio: 'Los campesinos cosechan el café en las montañas.', blank: 'Los campesinos _____ el café en las montañas.', answer: 'cosechan', en: 'The farmers harvest the coffee in the mountains.', country: 'co', reward: 12 },
    { id: 'f-18', audio: 'Colombia exporta flores a muchos países del mundo.', blank: 'Colombia _____ flores a muchos países del mundo.', answer: 'exporta', en: 'Colombia exports flowers to many countries in the world.', country: 'co', reward: 12 }
  ];

  function renderFillBlank() {
    const board = document.getElementById('fillblank-board');
    if (!board) return;
    if (!STATE.completedFillBlank) STATE.completedFillBlank = {};
    board.innerHTML = FILL_BLANK_CLIPS.map((clip, i) => {
      const done = STATE.completedFillBlank[clip.id];
      const flag = {
        'pe': '🇵🇪 Perú', 'mx': '🇲🇽 México', 'ar': '🇦🇷 Argentina', 'es': '🇪🇸 España'
      }[clip.country] || 'Fill in the blank';
      return `
        <div class="listen-row ${done ? 'completed' : ''}" id="fb-row-${clip.id}">
          <div class="listen-row-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="listen-row-content">
            <span class="listen-row-tag">${flag} · ${clip.reward} Lucas</span>
            <div style="font-family:'Fraunces',serif;font-size:16px;color:var(--ink);margin:4px 0 8px;">${clip.blank}</div>
            <div class="listen-row-controls">
              <button class="listen-row-play" onclick="playFillBlank('${clip.id}')">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <input type="text" class="listen-row-input ${done ? 'correct' : ''}" data-fb="${clip.id}"
                     value="${done ? clip.answer : ''}"
                     ${done ? 'disabled' : ''}
                     placeholder="Missing word…"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();checkFillBlank('${clip.id}');}">
              <button class="listen-row-check" onclick="checkFillBlank('${clip.id}')" ${done ? 'disabled' : ''}>${done ? '✓' : 'Check'}</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function playFillBlank(clipId) {
    const clip = FILL_BLANK_CLIPS.find(c => c.id === clipId);
    if (!clip) return;
    speakSpanish(clip.audio);
  }

  function checkFillBlank(clipId) {
    const clip = FILL_BLANK_CLIPS.find(c => c.id === clipId);
    if (!clip) return;
    const input = document.querySelector('.listen-row-input[data-fb="' + clipId + '"]');
    if (!input) return;
    const userAns = normalizeListening(input.value);
    const correctAns = normalizeListening(clip.answer);
    const row = document.getElementById('fb-row-' + clipId);

    if (userAns === correctAns) {
      input.classList.add('correct');
      input.disabled = true;
      if (!STATE.completedFillBlank) STATE.completedFillBlank = {};
      if (!STATE.completedFillBlank[clipId]) {
        STATE.completedFillBlank[clipId] = true;
        awardCoins(clip.reward, 'Fill blank: ' + clip.audio.slice(0, 30) + '…');
      }
      if (row) row.classList.add('completed');
      const btn = row.querySelector('.listen-row-check');
      if (btn) { btn.disabled = true; btn.textContent = '✓'; }
      const old = row.querySelector('.listen-correction');
      if (old) old.remove();
    } else {
      input.classList.add('wrong');
      const old = row.querySelector('.listen-correction');
      if (old) old.remove();
      const corr = document.createElement('div');
      corr.className = 'listen-correction';
      corr.textContent = '→ ' + clip.answer + '  (' + clip.en + ')';
      row.appendChild(corr);
    }
  }

  function playClip(card, text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES';
      u.rate = 0.9;
      const voices = window.speechSynthesis.getVoices();
      const spanish = voices.find(v => v.lang.startsWith('es'));
      if (spanish) u.voice = spanish;
      card.classList.add('playing');
      u.onend = () => {
        card.classList.remove('playing');
        // Reward 1 Luca per unique clip listened to completion (cap at 4)
        const clipKey = text.slice(0, 30);
        if (!STATE.listenedClips.has(clipKey) && STATE.listenedClips.size < 4) {
          STATE.listenedClips.add(clipKey);
          awardCoins(1, 'Audio clip completed');
        }
      };
      u.onerror = () => card.classList.remove('playing');
      window.speechSynthesis.speak(u);
    } else {
      alert('Tu navegador no soporta síntesis de voz.');
    }
  }

