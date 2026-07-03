  /* ============== READING LIBRARY ============== */
  // Stories and poems with difficulty levels.
  // Lucas reward scales with difficulty: beginner=5, intermediate=10, advanced=20 (each per question correct, max 3 questions per text)
  // Quiz bonus on perfect score: +5 (beginner), +10 (intermediate), +20 (advanced)
  // Each text can be completed once per student per reward (no farming).
  //
  // Format:
  //   id: unique short string
  //   kind: 'story' or 'poem'
  //   level: 'beginner', 'intermediate', or 'advanced'
  //   title, author, year, attribution (e.g., "Public domain")
  //   preview: 1-2 sentences shown on the library card
  //   text: array of paragraphs (for stories) or stanzas (for poems)
  //   gloss: object mapping Spanish words to English (renders as hoverable tooltips)
  //   quiz: array of { q, options: [{ text, correct }] }

  const READINGS = [
    // ---------- HEALTH READING ----------
    {
      id: 'salud-medico',
      kind: 'story', level: 'intermediate',
      title: 'Una visita al <em>médico</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Salud y bienestar',
      preview: '"¿Qué síntomas tiene?" — En el consultorio, describir lo que sentimos es el primer paso para curarnos.',
      text: [
        'El lunes me desperté con fiebre, tos y un fuerte dolor de cabeza. Mi madre me tomó la temperatura y decidió pedir una cita en la clínica. "Mejor que te vea un médico", dijo.',
        'En el consultorio, la doctora me hizo muchas preguntas: "¿Qué síntomas tienes? ¿Desde cuándo te sientes mal? ¿Te duele la garganta?" Después me revisó y me explicó que solo era una gripe. No era grave, pero tenía que descansar y beber mucha agua.',
        'Me dio una receta para unas pastillas y me dijo que las comprara en la farmacia. "Con descanso y esta medicina, en unos días estarás sano", me aseguró. Salí del consultorio más tranquilo: a veces, lo más importante para la salud es saber qué nos pasa y cómo cuidarnos.'
      ],
      gloss: {
        'la fiebre': 'fever', 'la tos': 'cough', 'el dolor de cabeza': 'headache', 'la cita': 'appointment',
        'la clínica': 'clinic', 'el médico': 'doctor', 'el consultorio': 'doctor\'s office', 'el síntoma': 'symptom',
        'la garganta': 'throat', 'la gripe': 'flu', 'descansar': 'to rest', 'la receta': 'prescription',
        'la pastilla': 'pill', 'la farmacia': 'pharmacy', 'la medicina': 'medicine', 'sano': 'healthy', 'la salud': 'health'
      },
      quiz: [
        { q: '¿Qué síntomas tenía el narrador?', options: [
          { text: 'fiebre, tos y dolor de cabeza', correct: true }, { text: 'una herida en la pierna', correct: false }, { text: 'ningún síntoma', correct: false } ]},
        { q: '¿Qué le diagnosticó la doctora?', options: [
          { text: 'una gripe', correct: true }, { text: 'una emergencia grave', correct: false }, { text: 'nada', correct: false } ]},
        { q: '¿Qué le recomendó para curarse?', options: [
          { text: 'descansar, beber agua y tomar la medicina', correct: true }, { text: 'correr una maratón', correct: false }, { text: 'no dormir', correct: false } ]}
      ]
    },
    // ---------- MUSIC READING ----------
    {
      id: 'musica-mundo',
      kind: 'story', level: 'intermediate',
      title: 'La <em>música</em> del mundo hispano',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Música',
      preview: 'De la guitarra flamenca al reguetón: la música hispana suena en todo el planeta.',
      text: [
        'La música es una parte enorme de la cultura hispana. Cada país tiene sus instrumentos, sus ritmos y sus canciones. En España, la guitarra acompaña el cante flamenco; en los Andes, las flautas crean melodías antiguas; en el Caribe, los tambores marcan el ritmo de la salsa.',
        'Hoy, los cantantes hispanos llenan los conciertos más grandes del mundo. Géneros como el reguetón, el pop latino y la bachata se escuchan en la radio de muchos países, incluso de gente que no habla español. La letra y la melodía cruzan las fronteras.',
        'Pero la música no es solo para escuchar: muchas personas aprenden a tocar un instrumento, a cantar en un coro o a componer sus propias canciones. Tocar música con otros, en una banda o en familia, es una forma de unir a la gente que existe en todas las culturas.'
      ],
      gloss: {
        'la música': 'music', 'el instrumento': 'instrument', 'el ritmo': 'rhythm', 'la guitarra': 'guitar',
        'el cante': 'flamenco singing', 'la flauta': 'flute', 'la melodía': 'melody', 'el tambor': 'drum',
        'el cantante': 'singer', 'el concierto': 'concert', 'la letra': 'lyrics', 'tocar': 'to play',
        'la banda': 'band', 'componer': 'to compose'
      },
      quiz: [
        { q: '¿Qué instrumento acompaña el cante flamenco en España?', options: [
          { text: 'la guitarra', correct: true }, { text: 'el tambor', correct: false }, { text: 'el violín', correct: false } ]},
        { q: 'Según el texto, los géneros hispanos hoy…', options: [
          { text: 'se escuchan en muchos países', correct: true }, { text: 'solo se escuchan en España', correct: false }, { text: 'ya no existen', correct: false } ]},
        { q: '¿Qué dice el texto sobre tocar música con otros?', options: [
          { text: 'es una forma de unir a la gente', correct: true }, { text: 'es aburrido', correct: false }, { text: 'es imposible', correct: false } ]}
      ]
    },
    // ---------- EDUCATION READING ----------
    {
      id: 'educacion-futuro',
      kind: 'story', level: 'intermediate',
      title: 'La <em>educación</em>: la llave del futuro',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Educación',
      preview: 'Aprender no termina con la escuela: la educación abre puertas toda la vida.',
      text: [
        'Se dice que la educación es la llave del futuro, y es verdad. En la escuela aprendemos a leer, a escribir y a resolver problemas, pero también aprendemos a pensar y a convivir con los demás. Un buen maestro puede cambiar la vida de un estudiante.',
        'No todos tienen las mismas oportunidades. En muchas partes del mundo hispano, una beca puede ser la única forma de que un joven llegue a la universidad y obtenga un título. Por eso, muchas familias hacen grandes sacrificios para que sus hijos estudien.',
        'Pero la educación no termina con un diploma. Aprender es algo que hacemos toda la vida: con cada libro, cada viaje y cada conversación. El conocimiento es uno de los pocos tesoros que nadie nos puede quitar.'
      ],
      gloss: {
        'la educación': 'education', 'aprender': 'to learn', 'la escuela': 'school', 'el maestro': 'teacher',
        'el estudiante': 'student', 'la beca': 'scholarship', 'la universidad': 'university', 'el título': 'degree',
        'estudiar': 'to study', 'el conocimiento': 'knowledge', 'el diploma': 'diploma'
      },
      quiz: [
        { q: 'Según el texto, además de leer y escribir, en la escuela aprendemos a…', options: [
          { text: 'pensar y convivir con los demás', correct: true }, { text: 'solo memorizar', correct: false }, { text: 'nada más', correct: false } ]},
        { q: '¿Qué puede ser la única forma de llegar a la universidad para algunos jóvenes?', options: [
          { text: 'una beca', correct: true }, { text: 'un coche', correct: false }, { text: 'una multa', correct: false } ]},
        { q: 'Según el texto, la educación…', options: [
          { text: 'no termina con un diploma', correct: true }, { text: 'termina en la escuela primaria', correct: false }, { text: 'no sirve para nada', correct: false } ]}
      ]
    },
    // ---------- MILITARY READING ----------
    {
      id: 'militar-guerra-paz',
      kind: 'story', level: 'intermediate',
      title: 'La <em>guerra</em> y la paz',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Historia · Conflicto y paz',
      preview: 'A lo largo de la historia, los ejércitos han marcado el destino de las naciones — pero la paz siempre fue la meta.',
      text: [
        'A lo largo de la historia, los ejércitos han jugado un papel enorme en el mundo hispano. Los soldados de muchos países lucharon en guerras de independencia para liberarse del control colonial. Líderes como Simón Bolívar y José de San Martín dirigieron sus tropas en batallas decisivas.',
        'Una guerra no se gana solo con fuerza: también requiere estrategia. Los generales debían decidir cuándo atacar, cuándo defender y cómo proteger la frontera. Una victoria podía cambiar el destino de toda una nación; una derrota, también.',
        'Pero la verdadera meta de cualquier conflicto siempre ha sido la paz. Después de años de guerra, las naciones firman tratados para poner fin a la violencia. Hoy, muchos recuerdan a los soldados del pasado, pero valoran sobre todo el difícil trabajo de mantener la paz.'
      ],
      gloss: {
        'el ejército': 'army', 'el soldado': 'soldier', 'la guerra': 'war', 'la independencia': 'independence',
        'la tropa': 'troop', 'la batalla': 'battle', 'la estrategia': 'strategy', 'el general': 'general',
        'atacar': 'to attack', 'defender': 'to defend', 'la frontera': 'border', 'la victoria': 'victory',
        'la derrota': 'defeat', 'la paz': 'peace', 'el tratado': 'treaty'
      },
      quiz: [
        { q: '¿En qué tipo de guerras lucharon muchos países hispanos?', options: [
          { text: 'guerras de independencia', correct: true }, { text: 'guerras espaciales', correct: false }, { text: 'ninguna', correct: false } ]},
        { q: 'Según el texto, una guerra no se gana solo con fuerza, sino también con…', options: [
          { text: 'estrategia', correct: true }, { text: 'dinero', correct: false }, { text: 'suerte', correct: false } ]},
        { q: '¿Cuál ha sido siempre la verdadera meta de un conflicto?', options: [
          { text: 'la paz', correct: true }, { text: 'más guerra', correct: false }, { text: 'la derrota', correct: false } ]}
      ]
    },
    // ---------- WEAPONS READING ----------
    {
      id: 'armas-historia',
      kind: 'story', level: 'intermediate',
      title: 'Las <em>armas</em> a través de la historia',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Historia · Tecnología militar',
      preview: 'De la espada y el escudo a la pólvora y el cañón: cómo las armas cambiaron la historia.',
      text: [
        'Las armas han cambiado mucho a lo largo de la historia. En la antigüedad, los guerreros luchaban cuerpo a cuerpo con espadas y lanzas, y se protegían con un escudo y una armadura de metal. La fuerza y la habilidad lo eran todo.',
        'Todo cambió con la llegada de la pólvora. Los cañones y los primeros fusiles dieron una ventaja enorme a quienes los tenían. Durante la conquista de América, las armas de fuego de los españoles fueron una de las razones de su poder frente a ejércitos mucho más grandes.',
        'Hoy, las armas son mucho más peligrosas, y por eso casi todos los países tienen leyes estrictas para controlarlas. Estudiar la historia de las armas no es celebrar la violencia: es entender cómo la tecnología ha cambiado la forma en que los seres humanos hacen — y evitan — la guerra.'
      ],
      gloss: {
        'el arma': 'weapon', 'el guerrero': 'warrior', 'la espada': 'sword', 'la lanza': 'spear',
        'el escudo': 'shield', 'la armadura': 'armor', 'la pólvora': 'gunpowder', 'el cañón': 'cannon',
        'el fusil': 'rifle / gun', 'las armas de fuego': 'firearms', 'la conquista': 'the conquest',
        'peligroso': 'dangerous', 'la ley': 'law'
      },
      quiz: [
        { q: 'En la antigüedad, ¿con qué se protegían los guerreros?', options: [
          { text: 'un escudo y una armadura', correct: true }, { text: 'un cañón', correct: false }, { text: 'un satélite', correct: false } ]},
        { q: '¿Qué invento cambió la forma de luchar?', options: [
          { text: 'la pólvora', correct: true }, { text: 'el telescopio', correct: false }, { text: 'la guitarra', correct: false } ]},
        { q: 'Según el texto, estudiar la historia de las armas sirve para…', options: [
          { text: 'entender cómo la tecnología cambió la guerra', correct: true }, { text: 'celebrar la violencia', correct: false }, { text: 'aprender a fabricarlas', correct: false } ]}
      ]
    },
    // ---------- LAW READING ----------
    {
      id: 'derecho-justicia',
      kind: 'story', level: 'intermediate',
      title: 'La <em>justicia</em> y la ley',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Derecho y sociedad',
      preview: 'Jueces, abogados y jurados: cómo funciona la justicia cuando alguien rompe la ley.',
      text: [
        'En toda sociedad existen leyes que todos debemos respetar. Cuando alguien comete un delito —como robar o hacer daño a otra persona—, la policía investiga y puede arrestar al sospechoso. Pero nadie es culpable hasta que un tribunal lo decide.',
        'En el juicio, un abogado defiende al acusado y otro presenta las pruebas en su contra. Los testigos cuentan lo que vieron, y al final el juez —o a veces un jurado— decide si la persona es inocente o culpable. Esa es la base de la justicia.',
        'El sistema no es perfecto, pero su idea central es justa: toda persona tiene derecho a defenderse y a un juicio justo. Sin leyes y sin tribunales, los más fuertes harían lo que quisieran. Por eso decimos que la ley protege a todos, no solo a unos pocos.'
      ],
      gloss: {
        'la ley': 'law', 'el delito': 'crime', 'robar': 'to steal', 'la policía': 'police',
        'arrestar': 'to arrest', 'el sospechoso': 'suspect', 'culpable': 'guilty', 'el tribunal': 'court',
        'el juicio': 'trial', 'el abogado': 'lawyer', 'el acusado': 'the accused', 'las pruebas': 'evidence',
        'el testigo': 'witness', 'el juez': 'judge', 'el jurado': 'jury', 'inocente': 'innocent', 'la justicia': 'justice'
      },
      quiz: [
        { q: 'Según el texto, ¿cuándo es alguien culpable?', options: [
          { text: 'cuando un tribunal lo decide', correct: true }, { text: 'cuando la policía lo arresta', correct: false }, { text: 'nunca', correct: false } ]},
        { q: '¿Quién cuenta lo que vio en un juicio?', options: [
          { text: 'el testigo', correct: true }, { text: 'el cantante', correct: false }, { text: 'el albañil', correct: false } ]},
        { q: 'La idea central de la justicia, según el texto, es que…', options: [
          { text: 'toda persona tiene derecho a defenderse y a un juicio justo', correct: true }, { text: 'los fuertes deciden todo', correct: false }, { text: 'no hacen falta tribunales', correct: false } ]}
      ]
    },
    // ---------- PROFESSIONS READING ----------
    {
      id: 'profesiones-elegir',
      kind: 'story', level: 'intermediate',
      title: 'Elegir una <em>profesión</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Trabajo y profesiones',
      preview: '¿Médico, maestro, ingeniero, artista? Elegir una profesión es una de las grandes decisiones de la vida.',
      text: [
        'Una de las preguntas más comunes de la infancia es: "¿Qué quieres ser de grande?" Algunos niños sueñan con ser médicos o bomberos; otros quieren ser maestros, ingenieros, abogados o artistas. Elegir una profesión es una de las decisiones más importantes de la vida.',
        'A la hora de decidir, hay muchas cosas que pensar. ¿Qué se te da bien? ¿Qué te apasiona? Algunas personas eligen un trabajo por el dinero; otras, porque quieren ayudar a los demás, como los enfermeros o los profesores. Lo ideal es encontrar algo que una las dos cosas.',
        'Hoy el mundo del trabajo cambia muy rápido. Aparecen profesiones nuevas cada año, sobre todo en la tecnología, y muchas personas cambian de carrera más de una vez en su vida. Por eso, más que elegir "para siempre", lo importante es seguir aprendiendo y estar dispuesto a adaptarse.'
      ],
      gloss: {
        'la profesión': 'profession', 'el médico': 'doctor', 'el bombero': 'firefighter', 'el maestro': 'teacher',
        'el ingeniero': 'engineer', 'el abogado': 'lawyer', 'el artista': 'artist', 'apasionar': 'to be passionate about',
        'el enfermero': 'nurse', 'la carrera': 'career', 'adaptarse': 'to adapt'
      },
      quiz: [
        { q: 'Según el texto, elegir una profesión es…', options: [
          { text: 'una de las decisiones más importantes de la vida', correct: true }, { text: 'algo sin importancia', correct: false }, { text: 'imposible', correct: false } ]},
        { q: '¿Por qué algunas personas eligen su trabajo?', options: [
          { text: 'para ayudar a los demás', correct: true }, { text: 'para no aprender nada', correct: false }, { text: 'para quedarse en casa', correct: false } ]},
        { q: 'Según el texto, hoy el mundo del trabajo…', options: [
          { text: 'cambia muy rápido y hay que adaptarse', correct: true }, { text: 'nunca cambia', correct: false }, { text: 'no necesita aprendizaje', correct: false } ]}
      ]
    },
    // ---------- SPACE READING ----------
    {
      id: 'espacio-explorar',
      kind: 'story', level: 'intermediate',
      title: 'Explorar el <em>espacio</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Académico · Astronomía',
      preview: 'Cohetes, planetas y estrellas: la curiosidad humana siempre mira hacia arriba.',
      text: [
        'Desde hace miles de años, los seres humanos miran el cielo y se hacen preguntas. ¿Cuántas estrellas hay? ¿Qué hay en la Luna? Esa curiosidad nos llevó a explorar el espacio con telescopios, satélites y, por fin, naves espaciales.',
        'Nuestro planeta, la Tierra, gira alrededor del Sol junto con otros siete planetas que forman el sistema solar. Y el Sol es solo una estrella más entre miles de millones en nuestra galaxia, la Vía Láctea. El universo es tan grande que cuesta imaginarlo.',
        'En 1969, un cohete llevó a los primeros astronautas a la Luna. Hoy, los científicos sueñan con explorar Marte y otros planetas. Cada nave espacial que despega nos enseña algo nuevo sobre el universo y sobre nuestro propio lugar en él.'
      ],
      gloss: {
        'el espacio': 'space', 'la estrella': 'star', 'la Luna': 'the Moon', 'el telescopio': 'telescope',
        'el satélite': 'satellite', 'la nave espacial': 'spaceship', 'la Tierra': 'Earth', 'el Sol': 'the Sun',
        'el planeta': 'planet', 'el sistema solar': 'solar system', 'la galaxia': 'galaxy',
        'el universo': 'universe', 'el cohete': 'rocket', 'el astronauta': 'astronaut', 'despega': 'takes off'
      },
      quiz: [
        { q: '¿Cuántos planetas forman el sistema solar?', options: [
          { text: 'ocho', correct: true }, { text: 'tres', correct: false }, { text: 'cien', correct: false } ]},
        { q: 'El Sol es…', options: [
          { text: 'una estrella', correct: true }, { text: 'un planeta', correct: false }, { text: 'un satélite', correct: false } ]},
        { q: '¿Qué pasó en 1969?', options: [
          { text: 'los primeros astronautas llegaron a la Luna', correct: true }, { text: 'se descubrió el Sol', correct: false }, { text: 'explotó la Vía Láctea', correct: false } ]}
      ]
    },
    // ---------- VEHICLES READING ----------
    {
      id: 'vehiculos-ciudad',
      kind: 'story', level: 'intermediate',
      title: 'Cómo nos <em>movemos</em> por la ciudad',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Transporte',
      preview: 'Metro, autobús, bicicleta o coche: cada ciudad tiene su forma de moverse.',
      text: [
        'En las grandes ciudades del mundo hispano, como Madrid, Ciudad de México o Buenos Aires, la gente usa muchos tipos de vehículos para moverse. El metro es rápido y barato, y por eso millones de personas lo toman cada día.',
        'No todos tienen coche. En las horas de más tráfico, el autobús y el metro suelen ser más prácticos que conducir, porque las calles se llenan y es difícil estacionar. Muchos jóvenes prefieren la bicicleta o la motocicleta para llegar más rápido.',
        'Fuera de la ciudad, el tren y el avión conectan regiones lejanas, y los camiones transportan la comida y los productos. Cada forma de transporte tiene sus ventajas: lo importante es elegir la más cómoda, barata y buena para el medio ambiente.'
      ],
      gloss: {
        'el vehículo': 'vehicle', 'el metro': 'subway', 'el coche': 'car', 'el tráfico': 'traffic',
        'el autobús': 'bus', 'conducir': 'to drive', 'estacionar': 'to park', 'la bicicleta': 'bicycle',
        'la motocicleta': 'motorcycle', 'el tren': 'train', 'el avión': 'airplane', 'el camión': 'truck'
      },
      quiz: [
        { q: 'Según el texto, ¿por qué tanta gente toma el metro?', options: [
          { text: 'es rápido y barato', correct: true }, { text: 'es el más caro', correct: false }, { text: 'es el más lento', correct: false } ]},
        { q: 'En las horas de más tráfico, ¿qué suele ser más práctico que conducir?', options: [
          { text: 'el autobús y el metro', correct: true }, { text: 'el avión', correct: false }, { text: 'el camión', correct: false } ]},
        { q: '¿Qué conecta las regiones lejanas?', options: [
          { text: 'el tren y el avión', correct: true }, { text: 'la bicicleta', correct: false }, { text: 'el metro', correct: false } ]}
      ]
    },
    // ---------- TOOLS READING ----------
    {
      id: 'herramientas-taller',
      kind: 'story', level: 'intermediate',
      title: 'El <em>taller</em> del abuelo',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Oficios y herramientas',
      preview: 'Martillo, destornillador, sierra: en su taller, mi abuelo podía arreglar cualquier cosa.',
      text: [
        'Mi abuelo tenía un pequeño taller en el garaje. En la pared colgaban todas sus herramientas, ordenadas con cuidado: el martillo, la sierra, varios destornilladores y una caja llena de clavos y tornillos.',
        '"Antes de comprar algo nuevo", decía, "hay que intentar arreglar lo viejo." Cuando se rompía una silla, no la tiraba: la reparaba con un poco de madera, unos clavos y mucha paciencia. Yo le pasaba las herramientas y aprendía mirando.',
        'Me enseñó a usar el taladro, a medir con la cinta métrica y a apretar bien los tornillos. Pero, sobre todo, me enseñó algo más importante: que con las herramientas correctas y ganas de aprender, casi cualquier cosa se puede arreglar.'
      ],
      gloss: {
        'el taller': 'workshop', 'la herramienta': 'tool', 'el martillo': 'hammer', 'la sierra': 'saw',
        'el destornillador': 'screwdriver', 'el clavo': 'nail', 'el tornillo': 'screw', 'arreglar': 'to fix',
        'reparar': 'to repair', 'la madera': 'wood', 'el taladro': 'drill', 'la cinta métrica': 'tape measure', 'apretar': 'to tighten'
      },
      quiz: [
        { q: '¿Dónde tenía el abuelo su taller?', options: [
          { text: 'en el garaje', correct: true }, { text: 'en la cocina', correct: false }, { text: 'en el jardín', correct: false } ]},
        { q: '¿Qué hacía el abuelo cuando se rompía una silla?', options: [
          { text: 'la reparaba en vez de tirarla', correct: true }, { text: 'compraba una nueva', correct: false }, { text: 'la quemaba', correct: false } ]},
        { q: 'La lección más importante del abuelo fue que…', options: [
          { text: 'casi todo se puede arreglar con las herramientas correctas', correct: true }, { text: 'es mejor comprar todo nuevo', correct: false }, { text: 'las herramientas son peligrosas', correct: false } ]}
      ]
    },
    // ---------- CONSTRUCTION READING ----------
    {
      id: 'construccion-casa',
      kind: 'story', level: 'intermediate',
      title: 'Cómo se <em>construye</em> una casa',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Académico · Construcción',
      preview: 'De los planos a los cimientos, del ladrillo al techo: construir una casa es trabajo de equipo.',
      text: [
        'Construir una casa empieza mucho antes de poner el primer ladrillo. Primero, un arquitecto dibuja los planos y un ingeniero revisa que todo sea seguro. Solo entonces los obreros pueden empezar a trabajar en la obra.',
        'El primer paso es hacer los cimientos, la base fuerte sobre la que se apoya todo el edificio. Luego, los albañiles levantan las paredes con ladrillos y cemento, y una grúa enorme sube los materiales pesados, como las vigas de acero.',
        'Por seguridad, todos en la obra llevan casco. Poco a poco, lo que era un terreno vacío se convierte en paredes, ventanas y, finalmente, un techo. Construir una casa es un trabajo lento que requiere muchas manos, muchas herramientas y mucha planificación.'
      ],
      gloss: {
        'construir': 'to build', 'el ladrillo': 'brick', 'el arquitecto': 'architect', 'los planos': 'blueprints',
        'el ingeniero': 'engineer', 'el obrero': 'worker', 'la obra': 'construction site', 'los cimientos': 'foundation',
        'el edificio': 'building', 'el albañil': 'bricklayer', 'la pared': 'wall', 'el cemento': 'cement',
        'la grúa': 'crane', 'la viga': 'beam', 'el acero': 'steel', 'el casco': 'hard hat', 'el techo': 'roof'
      },
      quiz: [
        { q: '¿Quién dibuja los planos de la casa?', options: [
          { text: 'el arquitecto', correct: true }, { text: 'el albañil', correct: false }, { text: 'el conductor', correct: false } ]},
        { q: '¿Cuál es el primer paso de la construcción?', options: [
          { text: 'hacer los cimientos', correct: true }, { text: 'poner el techo', correct: false }, { text: 'pintar las paredes', correct: false } ]},
        { q: '¿Por qué todos llevan casco en la obra?', options: [
          { text: 'por seguridad', correct: true }, { text: 'por moda', correct: false }, { text: 'por el frío', correct: false } ]}
      ]
    },
    // ---------- HUNTING READING ----------
    {
      id: 'caza-tradicion',
      kind: 'story', level: 'intermediate',
      title: 'La <em>caza</em> y la naturaleza',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Vida al aire libre',
      preview: 'Para los cazadores responsables, la caza no es solo un deporte: es respeto por la naturaleza.',
      text: [
        'En muchas regiones del mundo hispano, la caza es una tradición antigua. Antes de los rifles y las escopetas, la gente cazaba con arco y flecha para alimentar a su familia. Hoy, para muchos, sigue siendo una forma de conectar con la naturaleza.',
        'Un buen cazador conoce el bosque: sigue las huellas y el rastro de los animales, espera en silencio y solo dispara cuando está seguro. La paciencia es más importante que el arma. Cazar un venado o un jabalí requiere horas de observación.',
        'Pero la caza también tiene reglas. Cada región tiene una temporada de caza y exige un permiso, para que las especies no desaparezcan. Los cazadores responsables respetan estos límites, porque entienden que cuidar la naturaleza es parte de la tradición.'
      ],
      gloss: {
        'la caza': 'hunting', 'cazar': 'to hunt', 'el cazador': 'hunter', 'el rifle': 'rifle',
        'la escopeta': 'shotgun', 'el arco': 'bow', 'la flecha': 'arrow', 'las huellas': 'tracks',
        'el rastro': 'trail', 'disparar': 'to shoot', 'el venado': 'deer', 'el jabalí': 'wild boar',
        'la temporada de caza': 'hunting season', 'el permiso': 'permit'
      },
      quiz: [
        { q: 'Antes de los rifles, ¿con qué cazaba la gente?', options: [
          { text: 'con arco y flecha', correct: true }, { text: 'con escopetas', correct: false }, { text: 'con trampas eléctricas', correct: false } ]},
        { q: 'Según el texto, ¿qué es lo más importante para un buen cazador?', options: [
          { text: 'la paciencia', correct: true }, { text: 'el arma más cara', correct: false }, { text: 'la velocidad', correct: false } ]},
        { q: '¿Por qué existen la temporada de caza y los permisos?', options: [
          { text: 'para que las especies no desaparezcan', correct: true }, { text: 'para vender más armas', correct: false }, { text: 'para prohibir la naturaleza', correct: false } ]}
      ]
    },
    // ---------- FISHING READING ----------
    {
      id: 'pesca-dia',
      kind: 'story', level: 'intermediate',
      title: 'Un día de <em>pesca</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Vida al aire libre',
      preview: 'Caña, anzuelo y mucha paciencia: así pasamos la mañana en el lago.',
      text: [
        'Mi abuelo me enseñó a pescar cuando era niño. Salíamos de madrugada hacia el lago, con las cañas de pescar, una caja de anzuelos y un cubo para los peces. "La pesca", decía, "es noventa por ciento paciencia."',
        'Primero poníamos la carnada en el anzuelo y lanzábamos el sedal al agua. Luego esperábamos en silencio, mirando el agua tranquila. A veces pasaba una hora sin que picara ningún pez. Pero cuando por fin uno picaba, el carrete giraba rápido y el corazón se aceleraba.',
        'Algunos días atrapábamos varias truchas; otros días, nada. Pero mi abuelo siempre soltaba los peces más pequeños al agua otra vez. "Para que crezcan", decía. Lo importante no era cuántos peces atrapábamos, sino las horas que pasábamos juntos junto al lago.'
      ],
      gloss: {
        'pescar': 'to fish', 'el lago': 'lake', 'la caña de pescar': 'fishing rod', 'el anzuelo': 'hook',
        'el cubo': 'bucket', 'la paciencia': 'patience', 'la carnada': 'bait', 'el sedal': 'fishing line',
        'picar': 'to bite (fish)', 'el carrete': 'reel', 'la trucha': 'trout', 'soltar': 'to release'
      },
      quiz: [
        { q: 'Según el abuelo, la pesca es sobre todo…', options: [
          { text: 'paciencia', correct: true }, { text: 'velocidad', correct: false }, { text: 'fuerza', correct: false } ]},
        { q: '¿Qué hacían con los peces más pequeños?', options: [
          { text: 'los soltaban al agua otra vez', correct: true }, { text: 'los vendían en el mercado', correct: false }, { text: 'los usaban de carnada', correct: false } ]},
        { q: 'Para el narrador, lo más importante de la pesca era…', options: [
          { text: 'el tiempo que pasaba con su abuelo', correct: true }, { text: 'atrapar muchos peces', correct: false }, { text: 'ganar dinero', correct: false } ]}
      ]
    },
    // ---------- CAMPING READING ----------
    {
      id: 'acampar-estrellas',
      kind: 'story', level: 'intermediate',
      title: 'Acampar bajo las <em>estrellas</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Vida al aire libre',
      preview: 'Una tienda, una fogata y un cielo lleno de estrellas: nuestra primera noche acampando.',
      text: [
        'El verano pasado, mis amigos y yo fuimos a acampar a las montañas por primera vez. Llevábamos las mochilas llenas: la tienda de campaña, los sacos de dormir, una linterna, fósforos y, por supuesto, mucho repelente de mosquitos.',
        'Cuando llegamos, montamos la tienda junto a un sendero, cerca de un río. No fue fácil —se nos cayó dos veces— pero al final lo logramos. Por la tarde hicimos una caminata por el bosque y volvimos justo antes de que oscureciera.',
        'Por la noche encendimos una fogata, cocinamos algo sencillo y contamos historias. Lo mejor llegó después: nos acostamos al aire libre y miramos el cielo. Sin las luces de la ciudad, se veían miles de estrellas. Nunca había visto algo tan hermoso.'
      ],
      gloss: {
        'acampar': 'to camp', 'la mochila': 'backpack', 'la tienda de campaña': 'tent',
        'el saco de dormir': 'sleeping bag', 'la linterna': 'flashlight', 'los fósforos': 'matches',
        'el repelente': 'bug repellent', 'montar la tienda': 'to set up the tent', 'el sendero': 'trail',
        'la caminata': 'hike', 'la fogata': 'campfire', 'al aire libre': 'outdoors', 'las estrellas': 'the stars'
      },
      quiz: [
        { q: '¿Qué llevaban en las mochilas?', options: [
          { text: 'la tienda, los sacos de dormir y una linterna', correct: true }, { text: 'una televisión', correct: false }, { text: 'cañas de pescar', correct: false } ]},
        { q: '¿Qué hicieron por la tarde?', options: [
          { text: 'una caminata por el bosque', correct: true }, { text: 'fueron de compras', correct: false }, { text: 'durmieron todo el día', correct: false } ]},
        { q: '¿Por qué se veían tantas estrellas?', options: [
          { text: 'porque no había luces de la ciudad', correct: true }, { text: 'porque usaron un telescopio', correct: false }, { text: 'porque era de día', correct: false } ]}
      ]
    },
    // ---------- NATURE READING ----------
    {
      id: 'naturaleza-cuidar',
      kind: 'story', level: 'intermediate',
      title: 'Cuidar la <em>naturaleza</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Medio ambiente',
      preview: 'Árboles, ríos y animales: la naturaleza nos da todo, pero también necesita nuestra ayuda.',
      text: [
        'La naturaleza está llena de vida: árboles que nos dan oxígeno, flores que alimentan a las mariposas, ríos donde viven los peces y pájaros que cantan al amanecer. Cada planta y cada animal forma parte de un equilibrio delicado.',
        'Pero ese equilibrio está en peligro. La contaminación de las fábricas y la basura ensucian el aire, el agua y la tierra. Muchas especies de animales salvajes están desapareciendo porque pierden su hogar en los bosques y las selvas.',
        'Por suerte, hay cosas que todos podemos hacer para proteger el medio ambiente: reciclar, no tirar basura en la naturaleza, ahorrar agua y plantar árboles. Cuidar el paisaje no es solo responsabilidad de los gobiernos: empieza con cada uno de nosotros.'
      ],
      gloss: {
        'la naturaleza': 'nature', 'el árbol': 'tree', 'la flor': 'flower', 'la mariposa': 'butterfly',
        'el pájaro': 'bird', 'el equilibrio': 'balance', 'la contaminación': 'pollution',
        'la basura': 'trash', 'salvaje': 'wild', 'el bosque': 'forest', 'proteger': 'to protect',
        'el medio ambiente': 'the environment', 'el paisaje': 'landscape'
      },
      quiz: [
        { q: 'Según el texto, ¿qué nos dan los árboles?', options: [
          { text: 'oxígeno', correct: true }, { text: 'gasolina', correct: false }, { text: 'electricidad', correct: false } ]},
        { q: '¿Por qué desaparecen muchas especies salvajes?', options: [
          { text: 'pierden su hogar en los bosques y las selvas', correct: true }, { text: 'se van de vacaciones', correct: false }, { text: 'hay demasiados árboles', correct: false } ]},
        { q: 'Según el texto, cuidar el medio ambiente…', options: [
          { text: 'empieza con cada uno de nosotros', correct: true }, { text: 'es solo trabajo del gobierno', correct: false }, { text: 'es imposible', correct: false } ]}
      ]
    },
    // ---------- MATH READING ----------
    {
      id: 'matematicas-vida',
      kind: 'story', level: 'intermediate',
      title: 'Las <em>matemáticas</em> de cada día',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Académico · Matemáticas',
      preview: 'Sumar, restar, calcular porcentajes… usamos las matemáticas más de lo que pensamos.',
      text: [
        'Mucha gente dice que odia las matemáticas, pero la verdad es que las usamos todos los días sin darnos cuenta. Cuando vamos al mercado y calculamos cuánto cuesta todo, estamos sumando. Cuando el vendedor nos da el cambio, está restando.',
        'Los porcentajes también aparecen por todas partes. Si una tienda ofrece un descuento del veinte por ciento, necesitamos calcular cuánto vamos a pagar de verdad. Y si queremos dividir la cuenta de un restaurante entre cuatro amigos, usamos la división.',
        'Las matemáticas no son solo números y ecuaciones en la pizarra: son una herramienta para resolver problemas reales. Sumar, restar, multiplicar y dividir son las cuatro operaciones básicas, pero con ellas podemos calcular casi cualquier cosa, desde el precio de la comida hasta el tiempo de un viaje.'
      ],
      gloss: {
        'las matemáticas': 'mathematics', 'sumar': 'to add', 'restar': 'to subtract',
        'el cambio': 'change (money)', 'el porcentaje': 'percentage', 'el descuento': 'discount',
        'calcular': 'to calculate', 'la división': 'division', 'la ecuación': 'equation',
        'resolver': 'to solve', 'las operaciones': 'operations'
      },
      quiz: [
        { q: 'Cuando calculas cuánto cuesta todo en el mercado, estás…', options: [
          { text: 'sumando', correct: true }, { text: 'dividiendo', correct: false }, { text: 'midiendo', correct: false } ]},
        { q: 'Para saber cuánto pagas con un descuento del 20%, usas…', options: [
          { text: 'los porcentajes', correct: true }, { text: 'la geometría', correct: false }, { text: 'los ángulos', correct: false } ]},
        { q: 'Según el texto, las cuatro operaciones básicas son…', options: [
          { text: 'sumar, restar, multiplicar y dividir', correct: true }, { text: 'leer, escribir, contar y medir', correct: false }, { text: 'solo sumar y restar', correct: false } ]}
      ]
    },
    // ---------- POLITICS READING ----------
    {
      id: 'politica-democracia',
      kind: 'story', level: 'intermediate',
      title: 'La <em>democracia</em> y el voto',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Política y sociedad',
      preview: 'En una democracia, cada voto cuenta — pero no siempre fue así.',
      text: [
        'En una democracia, el poder viene del pueblo. Los ciudadanos eligen a sus líderes a través de las elecciones: votan por el candidato o el partido que prefieren. Por eso se dice que cada voto cuenta.',
        'Pero la democracia no siempre existió en el mundo hispano. Durante el siglo XX, varios países de América Latina y España vivieron bajo dictaduras, donde una sola persona o un grupo tenía todo el poder y la gente no podía votar ni protestar libremente.',
        'Hoy, la mayoría de los países hispanohablantes son democracias. Los ciudadanos tienen derechos como la libertad de expresión, y pueden criticar al gobierno o participar en protestas. La democracia no es perfecta —la corrupción sigue siendo un problema en muchos lugares— pero permite que la gente tenga voz.'
      ],
      gloss: {
        'la democracia': 'democracy', 'el poder': 'power', 'el pueblo': 'the people',
        'el ciudadano': 'citizen', 'las elecciones': 'elections', 'votar': 'to vote',
        'el voto': 'vote', 'el candidato': 'candidate', 'la dictadura': 'dictatorship',
        'los derechos': 'rights', 'la libertad de expresión': 'freedom of speech', 'la corrupción': 'corruption'
      },
      quiz: [
        { q: 'En una democracia, ¿de dónde viene el poder?', options: [
          { text: 'Del pueblo', correct: true }, { text: 'De una sola persona', correct: false }, { text: 'Del ejército', correct: false } ]},
        { q: 'Durante el siglo XX, varios países hispanos vivieron bajo…', options: [
          { text: 'dictaduras', correct: true }, { text: 'democracias perfectas', correct: false }, { text: 'sin gobierno', correct: false } ]},
        { q: 'Según el texto, ¿qué problema sigue afectando a muchas democracias?', options: [
          { text: 'la corrupción', correct: true }, { text: 'la falta de mapas', correct: false }, { text: 'el exceso de elecciones', correct: false } ]}
      ]
    },
    // ---------- SCIENCE READING ----------
    {
      id: 'ciencia-metodo',
      kind: 'story', level: 'intermediate',
      title: 'El <em>método científico</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Académico · Ciencia',
      preview: 'Observar, preguntar, experimentar: así trabaja la ciencia.',
      text: [
        'La ciencia no es una colección de datos aburridos: es una forma de hacer preguntas sobre el mundo y buscar respuestas. Los científicos siguen un proceso llamado el método científico para investigar y descubrir cómo funcionan las cosas.',
        'Primero, un científico observa algo interesante y propone una hipótesis, es decir, una posible explicación. Luego diseña un experimento para probar esa hipótesis. En el laboratorio, mide los resultados con cuidado y los observa muchas veces.',
        'Si los experimentos confirman la hipótesis una y otra vez, puede convertirse en una teoría. Así nacieron grandes descubrimientos de la física, la química y la biología. Lo importante es que la ciencia siempre está dispuesta a cambiar de opinión cuando aparecen nuevas pruebas.'
      ],
      gloss: {
        'la ciencia': 'science', 'el científico': 'scientist', 'el método científico': 'scientific method',
        'observar': 'to observe', 'la hipótesis': 'hypothesis', 'el experimento': 'experiment',
        'el laboratorio': 'laboratory', 'medir': 'to measure', 'los resultados': 'the results',
        'la teoría': 'theory', 'el descubrimiento': 'discovery', 'las pruebas': 'the evidence'
      },
      quiz: [
        { q: '¿Qué propone un científico después de observar algo?', options: [
          { text: 'una hipótesis', correct: true }, { text: 'una ley política', correct: false }, { text: 'un mapa', correct: false } ]},
        { q: '¿Dónde mide los resultados con cuidado?', options: [
          { text: 'en el laboratorio', correct: true }, { text: 'en el mercado', correct: false }, { text: 'en el congreso', correct: false } ]},
        { q: 'Una hipótesis confirmada muchas veces puede convertirse en…', options: [
          { text: 'una teoría', correct: true }, { text: 'una hipótesis nueva', correct: false }, { text: 'un experimento', correct: false } ]}
      ]
    },
    // ---------- GEOGRAPHY READING ----------
    {
      id: 'geografia-latinoamerica',
      kind: 'story', level: 'intermediate',
      title: 'La <em>geografía</em> de América Latina',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Geografía',
      preview: 'Montañas, selvas, desiertos y costas: América Latina lo tiene todo.',
      text: [
        'América Latina es una región de geografía increíble y variada. A lo largo del continente se extienden los Andes, la cordillera de montañas más larga del mundo, que cruza países como Perú, Chile y Argentina.',
        'En el norte está la enorme selva amazónica, con su río gigantesco y miles de especies de animales y plantas. Más al sur, en Chile, se encuentra el desierto de Atacama, uno de los lugares más secos del planeta. Y por todas partes hay costas, islas, lagos y volcanes.',
        'Esta diversidad geográfica influye en el clima, la comida y la forma de vida de cada país. No es lo mismo vivir en la costa del Caribe que en lo alto de los Andes. Por eso, conocer la geografía nos ayuda a entender mejor la cultura de cada región.'
      ],
      gloss: {
        'la geografía': 'geography', 'el continente': 'continent', 'la cordillera': 'mountain range',
        'la montaña': 'mountain', 'la selva': 'rainforest', 'el río': 'river',
        'la especie': 'species', 'el desierto': 'desert', 'la costa': 'coast',
        'la isla': 'island', 'el lago': 'lake', 'el volcán': 'volcano', 'el clima': 'climate'
      },
      quiz: [
        { q: '¿Cuál es la cordillera más larga del mundo, según el texto?', options: [
          { text: 'los Andes', correct: true }, { text: 'los Pirineos', correct: false }, { text: 'los Alpes', correct: false } ]},
        { q: 'El desierto de Atacama es famoso por ser…', options: [
          { text: 'uno de los lugares más secos del planeta', correct: true }, { text: 'el más frío del mundo', correct: false }, { text: 'una selva tropical', correct: false } ]},
        { q: 'Según el texto, la geografía influye en…', options: [
          { text: 'el clima, la comida y la forma de vida', correct: true }, { text: 'solo el idioma', correct: false }, { text: 'nada importante', correct: false } ]}
      ]
    },
    // ---------- MARKET READING — A day at the market ----------
    {
      id: 'mercado-dia',
      kind: 'story', level: 'intermediate',
      title: 'Un día en el <em>mercado</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Mercado y compras',
      preview: '"¿A cuánto el kilo?" — En el mercado al aire libre, regatear es parte del juego.',
      text: [
        'Los sábados por la mañana, mi madre y yo vamos al mercado al aire libre del centro. Es muy diferente del supermercado: aquí cada puesto tiene su propio vendedor, y los colores y olores de la fruta fresca llenan el aire.',
        'Primero buscamos las frutas y verduras de temporada, porque son más baratas y de mejor calidad. Mi madre toca los tomates, huele los melones y escoge solo los más maduros. "Lo barato sale caro", dice siempre, "pero la buena calidad vale la pena."',
        'En un puesto, ella pregunta: "¿A cuánto el kilo?" El vendedor responde, y entonces empieza el regateo. Mi madre ofrece un poco menos, el vendedor sonríe, y al final llegan a un precio justo. Regatear no es pelear: es casi una conversación amable entre clientes y vendedores que se conocen desde hace años.',
        'Pagamos en efectivo, guardamos todo en nuestra canasta y, antes de irnos, el vendedor nos regala unas naranjas "para la casa". Salimos con las bolsas llenas y, sobre todo, con la sensación de haber comprado algo más que comida: un pedazo de la vida del barrio.'
      ],
      gloss: {
        'el mercado al aire libre': 'open-air market',
        'el supermercado': 'supermarket',
        'el puesto': 'stall',
        'el vendedor': 'vendor',
        'de temporada': 'in season',
        'barato': 'cheap',
        'la calidad': 'quality',
        'maduros': 'ripe',
        'lo barato sale caro': 'cheap things end up costing you (saying)',
        '¿a cuánto el kilo?': 'how much per kilo?',
        'el regateo': 'haggling',
        'regatear': 'to haggle',
        'el precio': 'price',
        'en efectivo': 'in cash',
        'la canasta': 'basket',
        'las bolsas': 'the bags'
      },
      quiz: [
        { q: '¿En qué se diferencia el mercado del supermercado, según el texto?', options: [
          { text: 'Cada puesto tiene su propio vendedor', correct: true },
          { text: 'Todo es más caro', correct: false },
          { text: 'No se puede comprar fruta', correct: false }
        ]},
        { q: '¿Por qué buscan productos de temporada?', options: [
          { text: 'Son más baratos y de mejor calidad', correct: true },
          { text: 'Son los únicos que hay', correct: false },
          { text: 'No les gusta la fruta', correct: false }
        ]},
        { q: 'Según el texto, regatear es…', options: [
          { text: 'casi una conversación amable, no una pelea', correct: true },
          { text: 'una forma de discutir y enojarse', correct: false },
          { text: 'algo prohibido en el mercado', correct: false }
        ]},
        { q: '¿Cómo pagan al final?', options: [
          { text: 'En efectivo', correct: true },
          { text: 'Con tarjeta de crédito', correct: false },
          { text: 'No pagan nada', correct: false }
        ]}
      ]
    },
    // ---------- COOKING READING — A family recipe ----------
    {
      id: 'cocina-receta-abuela',
      kind: 'story', level: 'intermediate',
      title: 'En la <em>cocina</em> con la abuela',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · Comida y cocina',
      preview: 'Primero se pica la cebolla, luego se fríe el pollo… así cocinaba mi abuela.',
      text: [
        'Los domingos por la mañana, la cocina de mi abuela olía a ajo y a cebolla. Para ella, cocinar no era una tarea: era una forma de cuidar a la familia. Nunca usaba una receta escrita; todo estaba en su memoria y en sus manos.',
        '"Primero", decía, "se pica la cebolla bien fina y se fríe en la sartén a fuego lento." Mientras tanto, hervía el arroz en una olla grande y pelaba las papas para la sopa. Yo solo podía mirar y, a veces, mezclar los ingredientes con una cuchara de madera.',
        'Lo más importante, según ella, era probar la comida muchas veces. "Si no la pruebas, no sabes si le falta sal", repetía. Agregaba una cucharada de esto, una pizca de aquello, y todo salía perfecto sin medir nada.',
        'Hoy, cuando cocino el mismo plato, sigo cada paso de memoria, igual que ella. La receta no está en ningún papel: está en el olor de la cebolla en la sartén y en las tardes que pasamos juntas en su cocina.'
      ],
      gloss: {
        'la cocina': 'kitchen / cooking',
        'cocinar': 'to cook',
        'la receta': 'recipe',
        'se pica': 'one chops / you chop',
        'se fríe': 'one fries / you fry',
        'a fuego lento': 'on low heat',
        'la sartén': 'frying pan',
        'hervía': 'boiled (imperfect)',
        'la olla': 'pot',
        'pelaba': 'peeled (imperfect)',
        'mezclar': 'to mix',
        'probar': 'to taste',
        'le falta sal': 'it needs salt',
        'agregaba': 'added (imperfect)',
        'una cucharada': 'a spoonful',
        'una pizca': 'a pinch'
      },
      quiz: [
        { q: 'Para la abuela, cocinar era sobre todo…', options: [
          { text: 'una forma de cuidar a la familia', correct: true },
          { text: 'una tarea aburrida', correct: false },
          { text: 'un trabajo pagado', correct: false }
        ]},
        { q: '¿Qué hace primero según la abuela?', options: [
          { text: 'Picar la cebolla y freírla a fuego lento', correct: true },
          { text: 'Hornear un pastel', correct: false },
          { text: 'Batir los huevos', correct: false }
        ]},
        { q: '¿Por qué insistía en probar la comida muchas veces?', options: [
          { text: 'Para saber si le faltaba sal', correct: true },
          { text: 'Porque tenía mucha hambre', correct: false },
          { text: 'Para enfriarla', correct: false }
        ]},
        { q: '¿Dónde está la receta, según el final del texto?', options: [
          { text: 'En la memoria y en los recuerdos, no en un papel', correct: true },
          { text: 'En un libro de cocina', correct: false },
          { text: 'En internet', correct: false }
        ]}
      ]
    },
    // ---------- CULTURE READING — Dances of the Hispanic world ----------
    {
      id: 'bailes-mundo-hispano',
      kind: 'story', level: 'intermediate',
      title: 'Los <em>bailes</em> del mundo hispano',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · El mundo hispanohablante',
      preview: 'Del tango argentino al flamenco andaluz, cada país baila su propia historia…',
      text: [
        'Si hay algo que une al mundo hispano, es el baile. En cada país, la gente celebra, cuenta su historia y expresa sus emociones a través del ritmo. Pero cada región tiene su propio estilo, y cada baile lleva dentro siglos de mezcla cultural.',
        'En el Caribe nacieron algunos de los bailes más populares del planeta. La salsa, con su energía y sus parejas que giran sin parar, mezcla ritmos africanos y europeos. El merengue de la República Dominicana es rápido y alegre, mientras que la bachata, del mismo país, es más romántica y lenta. En Colombia, la cumbia combina tambores africanos, flautas indígenas y melodías españolas.',
        'Más al sur, Argentina dio al mundo el tango. Nació en los barrios pobres de Buenos Aires a fines del siglo XIX y, al principio, era mal visto por la sociedad. Hoy es un símbolo nacional: una pareja, un abrazo y pasos elegantes y dramáticos sobre la pista de baile.',
        'En España, el flamenco de Andalucía une el cante, la guitarra y el zapateo. El bailarín marca el compás con los pies y las manos, mientras el público aplaude al ritmo. Como muchos bailes hispanos, el flamenco no es solo un espectáculo en el escenario: es una forma de sentir y de recordar quiénes somos.'
      ],
      gloss: {
        'el baile': 'dance',
        'el ritmo': 'rhythm',
        'la salsa': 'salsa',
        'las parejas': 'partners / couples',
        'giran': 'spin / turn',
        'el merengue': 'merengue',
        'la bachata': 'bachata',
        'la cumbia': 'cumbia',
        'los tambores': 'drums',
        'el tango': 'tango',
        'mal visto': 'frowned upon',
        'la pista de baile': 'the dance floor',
        'el flamenco': 'flamenco',
        'el cante': 'flamenco singing',
        'el zapateo': 'foot-stomping',
        'el compás': 'the beat',
        'aplaude': 'applauds',
        'el escenario': 'the stage'
      },
      quiz: [
        { q: '¿Qué tienen en común los bailes del mundo hispano, según el texto?', options: [
          { text: 'Expresan emociones e historia a través del ritmo', correct: true },
          { text: 'Todos vienen de Argentina', correct: false },
          { text: 'Son todos lentos y románticos', correct: false }
        ]},
        { q: '¿De qué país son el merengue y la bachata?', options: [
          { text: 'La República Dominicana', correct: true },
          { text: 'España', correct: false },
          { text: 'Argentina', correct: false }
        ]},
        { q: 'Al principio, el tango era…', options: [
          { text: 'mal visto por la sociedad', correct: true },
          { text: 'un símbolo oficial del gobierno', correct: false },
          { text: 'un baile religioso', correct: false }
        ]},
        { q: 'El flamenco combina el cante, la guitarra y…', options: [
          { text: 'el zapateo', correct: true },
          { text: 'los tambores africanos', correct: false },
          { text: 'las flautas indígenas', correct: false }
        ]}
      ]
    },
    // ---------- CULTURE READING — Religion in the Hispanic world ----------
    {
      id: 'religion-mundo-hispano',
      kind: 'story', level: 'intermediate',
      title: 'La <em>religión</em> en el mundo hispano',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Cultura · El mundo hispanohablante',
      preview: 'El catolicismo llegó con los españoles, pero hoy el mundo hispano reza de muchas maneras…',
      text: [
        'Durante siglos, la religión más importante del mundo hispano ha sido el catolicismo. Llegó con los españoles en el siglo XV y, junto con la Inquisición, se convirtió en el centro de la vida social. Todavía hoy, en casi todos los pueblos hay una iglesia en la plaza mayor, y cada comunidad celebra a su santo patrón con fiestas, procesiones y misas.',
        'Pero la fe del continente nunca fue solo europea. Cuando el cristianismo se encontró con las creencias indígenas y africanas, nació algo nuevo: el sincretismo. La Virgen de Guadalupe en México une la devoción católica con símbolos indígenas. El Día de los Muertos mezcla el cielo cristiano con tradiciones prehispánicas. En el Caribe, la santería combina santos católicos con dioses africanos.',
        'La Semana Santa muestra esta fe de forma espectacular. En ciudades como Sevilla o Antigua, miles de creyentes llenan las calles para ver las procesiones, llevar la cruz y rezar juntos. Para muchos no es solo religión, sino también identidad y cultura.',
        'Hoy el panorama es más diverso que nunca. Las iglesias evangélicas crecen rápidamente en Latinoamérica. España guarda la memoria de su pasado judío y musulmán en las sinagogas de Toledo y la gran mezquita de Córdoba. Y, al mismo tiempo, cada vez más personas se declaran ateas o simplemente espirituales, sin pertenecer a ninguna religión.',
        'Así, preguntar "¿cuál es la religión del mundo hispano?" ya no tiene una sola respuesta. La fe sigue siendo muy importante para millones de personas, pero hoy el mundo hispano ora, cree y duda de muchas maneras distintas.'
      ],
      gloss: {
        'el catolicismo': 'Catholicism',
        'el santo patrón': 'patron saint',
        'la procesión': 'procession',
        'las creencias': 'beliefs',
        'el sincretismo': 'syncretism (blending of beliefs)',
        'la Virgen de Guadalupe': 'the Virgin of Guadalupe',
        'el cielo': 'heaven',
        'la santería': 'Santería (Afro-Caribbean religion)',
        'la Semana Santa': 'Holy Week',
        'los creyentes': 'believers',
        'la cruz': 'cross',
        'rezar': 'to pray',
        'evangélicas': 'evangelical (Protestant)',
        'la mezquita': 'mosque',
        'ateas': 'atheist (fem. pl.)',
        'espirituales': 'spiritual',
        'ora': 'prays'
      },
      quiz: [
        { q: '¿Qué religión ha sido históricamente la más importante del mundo hispano?', options: [
          { text: 'El catolicismo', correct: true },
          { text: 'El budismo', correct: false },
          { text: 'El islam', correct: false }
        ]},
        { q: 'El "sincretismo" del texto se refiere a…', options: [
          { text: 'la mezcla de creencias cristianas, indígenas y africanas', correct: true },
          { text: 'la prohibición de todas las religiones', correct: false },
          { text: 'una nueva iglesia evangélica', correct: false }
        ]},
        { q: '¿Qué ejemplo de sincretismo se menciona en México?', options: [
          { text: 'La Virgen de Guadalupe', correct: true },
          { text: 'La Semana Santa de Sevilla', correct: false },
          { text: 'La mezquita de Córdoba', correct: false }
        ]},
        { q: 'Según el texto, el panorama religioso de hoy es…', options: [
          { text: 'más diverso, con evangélicos, ateos y personas espirituales', correct: true },
          { text: 'exactamente igual que en el siglo XV', correct: false },
          { text: 'totalmente sin religión', correct: false }
        ]}
      ]
    },
    // ---------- GRAMMAR-IN-CONTEXT — Pluperfect subjunctive (Lesson 60) ----------
    {
      id: 'si-hubiera-sabido',
      kind: 'story', level: 'advanced',
      title: 'Lo que <em>habría sido</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Gramática en contexto · El pluscuamperfecto de subjuntivo',
      preview: 'Si hubiera tomado aquel tren, toda mi vida habría sido distinta…',
      text: [
        'Si hubiera tomado aquel tren de las seis, toda mi vida habría sido distinta. Pero llegué tarde a la estación, y el tren ya se había ido.',
        'Mi abuela siempre decía que no valía la pena lamentarse por el pasado. «Ojalá hubieras escuchado a tu corazón», me dijo una vez, «pero lo hecho, hecho está.» En aquel momento no la entendí; actuaba yo como si nada hubiera pasado, como si las decisiones no tuvieran consecuencias.',
        'Años después, comprendí lo que había querido decir. Si hubiera estudiado música, quizá habría sido feliz de otra manera. Si no me hubiera mudado a la ciudad, nunca habría conocido a las personas que hoy más quiero. Cada «si hubiera» abre la puerta a una vida que no viví.',
        'Hoy ya no me pregunto qué habría pasado. Si me hubiera quedado atrapado en esos pensamientos, no habría aprendido la lección más importante: el pasado no se cambia, pero el presente todavía es mío.'
      ],
      gloss: {
        'si hubiera tomado': 'if I had taken',
        'se había ido': 'had (already) left',
        'lamentarse': 'to lament / regret',
        'ojalá hubieras escuchado': 'I wish you had listened',
        'lo hecho, hecho está': 'what\'s done is done',
        'como si nada hubiera pasado': 'as if nothing had happened',
        'habría sido': 'would have been',
        'si no me hubiera mudado': 'if I hadn\'t moved',
        'atrapado': 'trapped'
      },
      quiz: [
        { q: '«Si hubiera tomado aquel tren…» expresa una situación…', options: [
          { text: 'contraria a los hechos, en el pasado', correct: true },
          { text: 'real que sí ocurrió', correct: false },
          { text: 'que pasará en el futuro', correct: false }
        ]},
        { q: '¿Qué estructura completa «si hubiera tomado…»?', options: [
          { text: '…habría sido (condicional perfecto)', correct: true },
          { text: '…sería (condicional simple)', correct: false },
          { text: '…es (presente)', correct: false }
        ]},
        { q: '«como si nada hubiera pasado» significa…', options: [
          { text: 'as if nothing had happened', correct: true },
          { text: 'because nothing happened', correct: false },
          { text: 'when nothing happens', correct: false }
        ]},
        { q: '¿Cuál es la lección final del narrador?', options: [
          { text: 'El pasado no se cambia, pero el presente es suyo', correct: true },
          { text: 'Siempre hay que lamentarse por el pasado', correct: false },
          { text: 'El tren llegará mañana', correct: false }
        ]}
      ]
    },
    // ---------- HISTORY READING — La Inquisición ----------
    {
      id: 'la-inquisicion',
      kind: 'story', level: 'intermediate',
      title: 'La <em>Inquisición</em> española',
      author: 'Original · El Pueblo',
      year: '',
      attribution: 'Historia · España y América',
      preview: 'En 1478, los Reyes Católicos crearon un tribunal religioso que duró más de 350 años…',
      text: [
        'En 1478, los Reyes Católicos — Isabel y Fernando — crearon un tribunal religioso muy poderoso: la Inquisición española. Su misión oficial era proteger la fe católica. En realidad, era también un instrumento de control político y social.',
        'La Inquisición perseguía sobre todo a los conversos: judíos que se habían convertido al catolicismo, muchas veces por la fuerza. Si un vecino los acusaba de practicar su antigua religión en secreto, el tribunal podía arrestarlos, interrogarlos y confiscar sus propiedades. Los procesos eran secretos: el acusado nunca sabía quién lo había denunciado.',
        'Las sentencias se anunciaban en grandes ceremonias públicas llamadas autos de fe. Los condenados que no se arrepentían morían en la hoguera. Los historiadores calculan que la Inquisición ejecutó a varios miles de personas en España durante sus 356 años de historia. Pero su poder más grande era el miedo: la gente tenía mucho cuidado con lo que decía, leía y pensaba.',
        'La Inquisición también cruzó el océano. Hubo tribunales en Lima (1570), en la Ciudad de México (1571) y en Cartagena de Indias (1610). Una excepción importante: los indígenas no estaban bajo la jurisdicción de estos tribunales. Las víctimas típicas en América eran comerciantes acusados de judaísmo secreto, marineros extranjeros protestantes y — especialmente en Cartagena — africanos esclavizados acusados de brujería.',
        'La Inquisición española no desapareció definitivamente hasta 1834. Hoy, los palacios de la Inquisición en Lima, México y Cartagena son museos. Son lugares para recordar una lección importante: lo que pasa cuando un estado decide controlar la conciencia de las personas.'
      ],
      gloss: {
        'el tribunal': 'court / tribunal',
        'perseguía': 'persecuted',
        'los conversos': 'converts (Jews forced to convert)',
        'por la fuerza': 'by force',
        'confiscar': 'to confiscate',
        'el acusado': 'the accused',
        'se arrepentían': 'repented',
        'la hoguera': 'the stake (burning)',
        'el miedo': 'fear',
        'la brujería': 'witchcraft',
        'la conciencia': 'conscience'
      },
      quiz: [
        { q: '¿Cuál era la misión oficial de la Inquisición?', options: [
          { text: 'Proteger la fe católica', correct: true },
          { text: 'Conquistar América', correct: false },
          { text: 'Educar a los conversos', correct: false }
        ]},
        { q: '¿A quiénes perseguía sobre todo en España?', options: [
          { text: 'A los marineros ingleses', correct: false },
          { text: 'A los conversos acusados de practicar el judaísmo en secreto', correct: true },
          { text: 'A los reyes', correct: false }
        ]},
        { q: '¿Qué eran los autos de fe?', options: [
          { text: 'Libros prohibidos', correct: false },
          { text: 'Tribunales secretos', correct: false },
          { text: 'Ceremonias públicas donde se anunciaban las sentencias', correct: true }
        ]},
        { q: '¿Quiénes NO estaban bajo la jurisdicción de los tribunales en América?', options: [
          { text: 'Los indígenas', correct: true },
          { text: 'Los comerciantes portugueses', correct: false },
          { text: 'Los marineros extranjeros', correct: false }
        ]},
        { q: '¿Cuándo desapareció definitivamente la Inquisición española?', options: [
          { text: 'En 1492', correct: false },
          { text: 'En 1834', correct: true },
          { text: 'En 1610', correct: false }
        ]}
      ]
    },
    // ---------- CLASSIC LITERATURE — Lazarillo de Tormes ----------
    {
      id: 'lazarillo-ciego',
      kind: 'story', level: 'advanced',
      title: 'Lázaro y el <em>ciego</em>',
      author: 'Adaptación · El Pueblo',
      year: '1554',
      attribution: 'Clásico · Lazarillo de Tormes (anónimo)',
      preview: 'La madre de Lázaro lo entrega a un ciego cruel y astuto. Para no morir de hambre, el niño tendrá que ser aún más listo que su amo…',
      text: [
        'Lázaro de Tormes nació cerca de un río, en una familia muy pobre. Cuando todavía era un niño, su madre, que no podía cuidarlo, lo entregó a un ciego para que le sirviera de guía por los caminos. Así empezó la vida de Lázaro como criado, yendo de amo en amo por toda España.',
        'El ciego era astuto y muy avaro. Aunque pedía limosna y casi siempre tenía comida, nunca compartía nada con el niño. Lázaro pasaba mucha hambre. Pronto comprendió que, para sobrevivir, tendría que ser todavía más listo que su amo.',
        'El ciego guardaba el vino en un jarro y lo vigilaba con cuidado. Lázaro, muerto de sed, hizo un pequeño agujero en el fondo del jarro y lo tapó con cera. Cuando el ciego se sentaba a comer, la cera se derretía con el calor y el niño bebía el vino a escondidas, gota a gota.',
        'Un día el ciego descubrió el truco. Sin decir nada, esperó a que Lázaro acercara la cara al jarro y entonces lo levantó y lo dejó caer con fuerza sobre la boca del niño. El golpe le rompió los dientes. Desde ese momento, Lázaro odió a su amo y empezó a planear su venganza.',
        'La ocasión llegó un día de lluvia. Para cruzar un arroyo, Lázaro colocó al ciego justo frente a un poste de piedra y le dijo que saltara con todas sus fuerzas. El ciego saltó y se golpeó la cabeza contra la piedra. Lázaro huyó corriendo. Con este primer amo aprendió la lección más importante de su vida: en un mundo cruel, solo la astucia permite sobrevivir.'
      ],
      gloss: {
        'el ciego': 'blind man',
        'el amo': 'master / employer',
        'el criado': 'servant',
        'la limosna': 'alms / charity',
        'avaro': 'stingy / miserly',
        'el jarro': 'jug / pitcher',
        'el agujero': 'hole',
        'la cera': 'wax',
        'derretirse': 'to melt',
        'a escondidas': 'secretly',
        'el poste': 'post',
        'la venganza': 'revenge',
        'la astucia': 'cunning'
      },
      historyNote: {
        heading: 'El español del Siglo de Oro: el pronombre va detrás del verbo',
        intro: 'This story is retold in modern Spanish, but the real <em>Lazarillo</em> was printed in <strong>1554</strong> and the language worked differently. The change you would notice most: direct- and indirect-object pronouns were normally attached to the <strong>end</strong> of a conjugated verb — this is called <em>enclisis</em> — above all when the verb opened the sentence. Today those same pronouns go <strong>before</strong> the verb.',
        examples: [
          { old: 'entrególe', modern: 'le entregó', en: 'she handed him over (IO)' },
          { old: 'díjole', modern: 'le dijo', en: 'he said to him (IO)' },
          { old: 'tomólo', modern: 'lo tomó', en: 'he took it (DO)' },
          { old: 'rompióle los dientes', modern: 'le rompió los dientes', en: 'it broke his teeth (IO)' },
          { old: 'dióselo', modern: 'se lo dio', en: 'he gave it to him (IO + DO)' }
        ],
        outro: 'Future- and conditional-tense verbs could even split in two, with the pronoun wedged inside: <em>dártelo he</em> = <em>te lo daré</em> (“I will give it to you”). You would also meet <em>vuestra merced</em> — the polite “you” that later shrank into today’s <strong>usted</strong> — plus older spellings like <em>agora</em> (ahora) and <em>ansí</em> (así).'
      },
      quiz: [
        { q: '¿Por qué la madre entregó a Lázaro a un ciego?', options: [
          { text: 'Para que le sirviera de guía', correct: true },
          { text: 'Para que estudiara en la ciudad', correct: false },
          { text: 'Para que fuera sacerdote', correct: false }
        ]},
        { q: '¿Cómo era el ciego?', options: [
          { text: 'Generoso y rico', correct: false },
          { text: 'Astuto y avaro', correct: true },
          { text: 'Joven y alegre', correct: false }
        ]},
        { q: '¿Cómo bebía Lázaro el vino sin que el ciego lo notara?', options: [
          { text: 'Pedía permiso cada vez', correct: false },
          { text: 'Compraba su propio vino', correct: false },
          { text: 'Hizo un agujero en el jarro y lo tapó con cera', correct: true }
        ]},
        { q: '¿Qué pasó cuando el ciego descubrió el truco?', options: [
          { text: 'Le rompió los dientes con el jarro', correct: true },
          { text: 'Lo perdonó y le dio más vino', correct: false },
          { text: 'Lo abandonó en el camino', correct: false }
        ]},
        { q: '¿Cuál fue la venganza de Lázaro?', options: [
          { text: 'Le robó todo el dinero', correct: false },
          { text: 'Hizo que el ciego saltara contra un poste de piedra', correct: true },
          { text: 'Lo dejó dormido en la iglesia', correct: false }
        ]}
      ]
    },
    // ---------- CLASSIC LITERATURE — Don Quijote de la Mancha ----------
    {
      id: 'quijote-molinos',
      kind: 'story', level: 'advanced',
      title: 'Don Quijote y los <em>molinos de viento</em>',
      author: 'Adaptación · El Pueblo',
      year: '1605',
      attribution: 'Clásico · Don Quijote de la Mancha · Cervantes',
      preview: 'Un hidalgo lee tantos libros de caballerías que pierde la razón y confunde unos molinos de viento con gigantes terribles…',
      text: [
        'En un lugar de la Mancha vivía un hidalgo pobre llamado Alonso Quijano. Era un hombre tranquilo, pero tenía una gran pasión: leía libros de caballerías día y noche. Leyó tantas historias de caballeros, gigantes y batallas que, poco a poco, perdió la razón y empezó a creer que todo era verdad.',
        'Un día decidió convertirse él mismo en caballero andante. Buscó una vieja armadura oxidada, montó en su flaco caballo, al que llamó Rocinante, y se dio a sí mismo el nombre de don Quijote de la Mancha. Eligió como dama de sus sueños a una campesina del pueblo, a quien llamó Dulcinea del Toboso, y convenció a un labrador sencillo, Sancho Panza, de ser su escudero.',
        'Una mañana, cruzando el campo, don Quijote vio a lo lejos treinta o cuarenta molinos de viento. Lleno de emoción, le dijo a Sancho: «¡Mira, amigo! Allí hay gigantes terribles. Voy a luchar contra ellos.» Sancho respondió: «Señor, esos no son gigantes, son molinos de viento. Lo que parecen brazos son las aspas que mueve el viento.»',
        'Pero don Quijote no lo escuchó. Convencido de que eran gigantes, bajó la lanza, espoleó a Rocinante y embistió contra el primer molino con todas sus fuerzas. En ese momento el viento movió las aspas, que rompieron la lanza en pedazos y arrojaron al caballero y a su caballo por el suelo.',
        'Sancho corrió a ayudarlo. «¿No le dije que eran molinos?», exclamó. Don Quijote, dolorido pero seguro de sí mismo, respondió que un mago enemigo, el sabio Frestón, había convertido a los gigantes en molinos para quitarle la gloria de la victoria. Y así, sin perder nunca su fe en los sueños, continuó su camino en busca de nuevas aventuras.'
      ],
      gloss: {
        'el hidalgo': 'minor nobleman',
        'los libros de caballerías': 'chivalry novels',
        'la razón': 'reason / sanity',
        'el caballero andante': 'knight-errant',
        'la armadura': 'armor',
        'oxidada': 'rusty',
        'el escudero': 'squire',
        'el molino de viento': 'windmill',
        'las aspas': 'sails / blades',
        'la lanza': 'lance',
        'embestir': 'to charge / attack',
        'el sabio': 'wise man / wizard'
      },
      historyNote: {
        heading: 'El español de Cervantes: el pronombre pegado al verbo',
        intro: 'Our version is modernized, but Cervantes published <em>Don Quijote</em> in <strong>1605</strong> in early-modern Spanish. Its signature trait is the same one you would hear all across the Golden Age: object pronouns clinging to the <strong>back</strong> of a conjugated verb (<em>enclisis</em>), where modern Spanish puts them in front.',
        examples: [
          { old: 'respondióle', modern: 'le respondió', en: 'he answered him (IO)' },
          { old: 'parecióle', modern: 'le pareció', en: 'it seemed to him (IO)' },
          { old: 'levantóse', modern: 'se levantó', en: 'he got up (reflexive)' },
          { old: 'diéronle de palos', modern: 'le dieron de palos', en: 'they gave him a beating (IO)' },
          { old: 'prometióselo', modern: 'se lo prometió', en: 'he promised it to him (IO + DO)' }
        ],
        outro: 'Open the real novel and the enclitics jump out at once — <em>Frisaba la edad…</em>, <em>Respondióle don Quijote…</em>, <em>Diéronle…</em> You will also spot the old polite address <em>vuestra merced</em> (→ usted) and spellings like <em>agora</em> for ahora.'
      },
      quiz: [
        { q: '¿Cuál era la gran pasión de Alonso Quijano?', options: [
          { text: 'Leer libros de caballerías', correct: true },
          { text: 'Cazar gigantes', correct: false },
          { text: 'Viajar por el mar', correct: false }
        ]},
        { q: '¿Cómo se llamaba su caballo?', options: [
          { text: 'Frestón', correct: false },
          { text: 'Rocinante', correct: true },
          { text: 'Sancho', correct: false }
        ]},
        { q: '¿Qué vio don Quijote en el campo?', options: [
          { text: 'Un castillo encantado', correct: false },
          { text: 'Un ejército real', correct: false },
          { text: 'Molinos de viento que creyó gigantes', correct: true }
        ]},
        { q: '¿Qué pasó cuando embistió contra el molino?', options: [
          { text: 'Ganó la batalla fácilmente', correct: false },
          { text: 'El viento movió las aspas y lo arrojó al suelo', correct: true },
          { text: 'El gigante huyó asustado', correct: false }
        ]},
        { q: 'Después de la caída, ¿cómo explicó don Quijote su derrota?', options: [
          { text: 'Admitió que estaba loco', correct: false },
          { text: 'Culpó a Sancho por no ayudarlo', correct: false },
          { text: 'Dijo que un mago había convertido a los gigantes en molinos', correct: true }
        ]}
      ]
    },
    // ---------- BEGINNER STORIES (5 Lucas/correct, +5 bonus = max 20) ----------
    {
      id: 'mi-familia',
      kind: 'story', level: 'beginner',
      title: 'Mi <em>familia</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: '',
      preview: 'Hola, me llamo Ana. Mi familia es pequeña pero feliz. Vivimos en una casa azul…',
      text: [
        'Hola, me llamo Ana. Mi familia es pequeña pero feliz. Vivimos en una casa azul cerca del parque.',
        'Mi madre se llama Elena. Ella es maestra de matemáticas. Mi padre se llama Roberto. Él trabaja en un hospital.',
        'Tengo un hermano mayor, Carlos. Él tiene quince años. También tenemos un perro que se llama Coco. Coco es muy juguetón.',
        'Los domingos comemos juntos en la cocina. Mi abuela viene a visitarnos y prepara empanadas. Me encantan los domingos.'
      ],
      gloss: {
        'feliz': 'happy',
        'cerca del parque': 'near the park',
        'maestra': 'teacher (female)',
        'mayor': 'older',
        'juguetón': 'playful',
        'juntos': 'together',
        'empanadas': 'savory pastries'
      },
      quiz: [
        { q: '¿Cómo se llama la madre de Ana?', options: [
          { text: 'Elena', correct: true },
          { text: 'Ana', correct: false },
          { text: 'Coco', correct: false }
        ]},
        { q: '¿Qué hace el padre de Ana?', options: [
          { text: 'Es maestro', correct: false },
          { text: 'Trabaja en un hospital', correct: true },
          { text: 'Cocina empanadas', correct: false }
        ]},
        { q: '¿Quién prepara empanadas los domingos?', options: [
          { text: 'La madre', correct: false },
          { text: 'Carlos', correct: false },
          { text: 'La abuela', correct: true }
        ]}
      ]
    },
    {
      id: 'el-mercado',
      kind: 'story', level: 'beginner',
      title: 'En el <em>mercado</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: '',
      preview: 'Los sábados voy al mercado con mi abuela. Compramos frutas, verduras y a veces flores…',
      text: [
        'Los sábados voy al mercado con mi abuela. Caminamos por las calles llenas de gente.',
        'En el mercado hay muchos colores. Las naranjas son anaranjadas. Los tomates son rojos. Las uvas son verdes o moradas.',
        'Mi abuela siempre compra pan fresco. A mí me gusta el pan caliente con un poco de mantequilla.',
        'A veces el vendedor me da una manzana gratis. "Para la niña", dice. Yo le digo "gracias" y sonrío.'
      ],
      gloss: {
        'gente': 'people',
        'uvas': 'grapes',
        'moradas': 'purple',
        'pan fresco': 'fresh bread',
        'mantequilla': 'butter',
        'gratis': 'free',
        'sonrío': 'I smile'
      },
      quiz: [
        { q: '¿Cuándo va Ana al mercado?', options: [
          { text: 'Los lunes', correct: false },
          { text: 'Los sábados', correct: true },
          { text: 'Los domingos', correct: false }
        ]},
        { q: 'En el mercado, ¿qué color son las uvas?', options: [
          { text: 'Solamente rojas', correct: false },
          { text: 'Verdes o moradas', correct: true },
          { text: 'Anaranjadas', correct: false }
        ]},
        { q: '¿Qué le da el vendedor a la niña?', options: [
          { text: 'Una manzana gratis', correct: true },
          { text: 'Pan caliente', correct: false },
          { text: 'Un tomate', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE STORIES (10 Lucas/correct) ----------
    {
      id: 'cuento-abuela',
      kind: 'story', level: 'intermediate',
      title: 'El cuento de la <em>abuela</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: '',
      preview: 'Cada tarde, mi abuela se sentaba en el patio bajo el limonero. Tenía las manos arrugadas como mapas viejos…',
      text: [
        'Cada __gloss__tarde__afternoon__, mi abuela se sentaba en el patio bajo el limonero. Tenía las manos arrugadas como mapas viejos, y una taza de café siempre humeante a su lado.',
        '"Ven, __gloss__mijo__my child (term of endearment)__," me decía. "Te voy a contar la historia de cuando tu abuelo cruzó la frontera con una guitarra y tres pesos en el bolsillo."',
        'Yo me sentaba en el suelo, abrazando mis rodillas. Sus historias siempre empezaban igual — con una __gloss__tormenta__storm__, un viaje, o una promesa rota. Y siempre terminaban con la misma frase: "Y así, mijo, aprendí que la vida no se mide en pesos, sino en canciones."',
        'Hoy, __gloss__muchos años después__many years later__, todavía huelo el café cuando cierro los ojos.'
      ],
      gloss: {},
      quiz: [
        { q: 'Where did the grandmother sit?', options: [
          { text: 'In the kitchen', correct: false },
          { text: 'In the patio under the lemon tree', correct: true },
          { text: 'In her bedroom', correct: false }
        ]},
        { q: 'According to the grandmother, how is life measured?', options: [
          { text: 'In pesos', correct: false },
          { text: 'In years', correct: false },
          { text: 'In songs', correct: true }
        ]},
        { q: '"Mijo" is an affectionate expression that means:', options: [
          { text: 'My friend', correct: false },
          { text: 'My son (term of endearment)', correct: true },
          { text: 'My grandson', correct: false }
        ]}
      ]
    },
    {
      id: 'viaje-tren',
      kind: 'story', level: 'intermediate',
      title: 'El viaje en <em>tren</em>',
      author: 'Original · El Pueblo',
      year: '',
      attribution: '',
      preview: 'Marcos subió al tren con una maleta vieja y un libro sin terminar. El tren cruzaba montañas, ríos, y pueblos pequeños…',
      text: [
        'Marcos subió al tren con una maleta vieja y un libro sin terminar. Iba a visitar a su tío en un pueblo pequeño, lejos de la ciudad ruidosa.',
        'El tren cruzaba montañas, ríos, y pueblos donde nadie esperaba a nadie. Marcos miraba por la ventana y pensaba en su vida — en lo que había dejado y en lo que esperaba encontrar.',
        'Una mujer mayor se sentó frente a él. "¿Vas lejos?", preguntó con una sonrisa amable. "No sé", respondió Marcos honestamente. "Eso es bueno", dijo ella. "Los mejores viajes son los que no terminamos de planear."',
        'Cuando el tren llegó a su destino, Marcos bajó con la maleta vieja, el libro sin terminar, y una sensación nueva: la de empezar otra vez.'
      ],
      gloss: {
        'maleta': 'suitcase',
        'cruzaba': 'crossed',
        'ruidosa': 'noisy',
        'había dejado': 'he had left behind',
        'frente a él': 'in front of him',
        'amable': 'kind',
        'sensación': 'feeling',
        'empezar otra vez': 'to start over'
      },
      quiz: [
        { q: '¿A quién iba a visitar Marcos?', options: [
          { text: 'A su madre', correct: false },
          { text: 'A su tío', correct: true },
          { text: 'A su abuela', correct: false }
        ]},
        { q: 'Según la mujer mayor, ¿cuáles son los mejores viajes?', options: [
          { text: 'Los más largos', correct: false },
          { text: 'Los planeados con cuidado', correct: false },
          { text: 'Los que no terminamos de planear', correct: true }
        ]},
        { q: 'Al final, ¿qué sensación tiene Marcos?', options: [
          { text: 'La de empezar otra vez', correct: true },
          { text: 'La de regresar a casa', correct: false },
          { text: 'La de estar perdido', correct: false }
        ]}
      ]
    },

    // ---------- BEGINNER POEM ----------
    {
      id: 'rosa-blanca',
      kind: 'poem', level: 'beginner',
      title: 'Cultivo una <em>rosa blanca</em>',
      author: 'José Martí',
      year: '1891',
      attribution: 'From "Versos sencillos" · Public domain',
      preview: '"Cultivo una rosa blanca, en julio como en enero…" — One of the most beloved poems in Latin American literature.',
      text: [
        'Cultivo una rosa blanca,\nen julio como en enero,\npara el amigo sincero\nque me da su mano franca.',
        'Y para el cruel que me arranca\nel corazón con que vivo,\ncardo ni ortiga cultivo:\ncultivo la rosa blanca.'
      ],
      gloss: {
        'cultivo': 'I grow / I cultivate',
        'sincero': 'sincere, honest',
        'mano franca': 'open / honest hand',
        'arranca': 'tears out',
        'cardo': 'thistle',
        'ortiga': 'nettle (a stinging plant)'
      },
      quiz: [
        { q: 'In the poem, the speaker grows a white rose for which person?', options: [
          { text: 'For their family', correct: false },
          { text: 'For the sincere friend', correct: true },
          { text: 'For everyone they meet', correct: false }
        ]},
        { q: 'For the cruel person who hurts them, what does the speaker grow?', options: [
          { text: 'A red rose', correct: false },
          { text: 'Thistles and nettles', correct: false },
          { text: 'Still a white rose', correct: true }
        ]},
        { q: 'What is the central theme of the poem?', options: [
          { text: 'Forgiveness and treating everyone with kindness', correct: true },
          { text: 'Gardening tips', correct: false },
          { text: 'Revenge', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE POEM (Machado) ----------
    {
      id: 'caminante',
      kind: 'poem', level: 'intermediate',
      title: 'Caminante, <em>no hay camino</em>',
      author: 'Antonio Machado',
      year: '1912',
      attribution: 'From "Proverbios y cantares" · Public domain',
      preview: '"Caminante, son tus huellas el camino y nada más…" — One of the most quoted poems in Spanish.',
      text: [
        'Caminante, son tus huellas\nel camino y nada más;\ncaminante, no hay camino,\nse hace camino al andar.',
        'Al andar se hace el camino,\ny al volver la vista atrás\nse ve la senda que nunca\nse ha de volver a pisar.',
        'Caminante, no hay camino\nsino estelas en la mar.'
      ],
      gloss: {
        'caminante': 'traveler / walker',
        'huellas': 'footprints',
        'al andar': 'by walking',
        'se hace': 'is made',
        'al volver la vista atrás': 'when you look back',
        'senda': 'path',
        'se ha de volver a pisar': 'will be walked again',
        'estelas': 'wakes (trails left by ships)'
      },
      quiz: [
        { q: 'According to the poem, what makes the road?', options: [
          { text: 'Maps and signs', correct: false },
          { text: 'The act of walking itself', correct: true },
          { text: 'Other travelers', correct: false }
        ]},
        { q: 'What does the speaker say you cannot do?', options: [
          { text: 'Walk again on the path you\'ve already walked', correct: true },
          { text: 'Find your way home', correct: false },
          { text: 'Travel with friends', correct: false }
        ]},
        { q: 'What does Machado compare paths to in the final line?', options: [
          { text: 'Mountains', correct: false },
          { text: 'Wakes (trails) on the sea', correct: true },
          { text: 'Footprints in snow', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED POEM (Lorca) ----------
    {
      id: 'luna-asoma',
      kind: 'poem', level: 'advanced',
      title: 'La luna <em>asoma</em>',
      author: 'Federico García Lorca',
      year: '1921',
      attribution: 'From "Canciones" · Public domain',
      preview: '"Cuando sale la luna se pierden las campanas…" — A surreal, dreamlike vision of moonlight by Spain\'s greatest 20th-century poet.',
      text: [
        'Cuando sale la luna\nse pierden las campanas\ny aparecen las sendas\nimpenetrables.',
        'Cuando sale la luna,\nel mar cubre la tierra\ny el corazón se siente\nisla en el infinito.',
        'Nadie come naranjas\nbajo la luna llena.\nEs preciso comer\nfruta verde y helada.',
        'Cuando sale la luna\nde cien rostros iguales,\nla moneda de plata\nsolloza en el bolsillo.'
      ],
      gloss: {
        'asoma': 'appears / peeks out',
        'campanas': 'bells',
        'sendas': 'paths',
        'impenetrables': 'impenetrable',
        'cubre': 'covers',
        'isla': 'island',
        'naranjas': 'oranges',
        'helada': 'frozen / icy',
        'rostros': 'faces',
        'moneda de plata': 'silver coin',
        'solloza': 'sobs / weeps',
        'bolsillo': 'pocket'
      },
      quiz: [
        { q: 'According to Lorca, what should you NOT eat under the full moon?', options: [
          { text: 'Apples', correct: false },
          { text: 'Oranges', correct: true },
          { text: 'Bread', correct: false }
        ]},
        { q: 'When the moon comes out, what happens to the heart?', options: [
          { text: 'It feels like an island in infinity', correct: true },
          { text: 'It stops beating', correct: false },
          { text: 'It becomes a bell', correct: false }
        ]},
        { q: 'What surreal action do silver coins perform in the poem?', options: [
          { text: 'They sing', correct: false },
          { text: 'They sob in the pocket', correct: true },
          { text: 'They turn to gold', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED POEM (Martí) ----------
    {
      id: 'hombre-sincero',
      kind: 'poem', level: 'advanced',
      title: 'Yo soy un <em>hombre sincero</em>',
      author: 'José Martí',
      year: '1891',
      attribution: 'From "Versos sencillos" · Public domain · The opening verse of "Guantanamera"',
      preview: '"Yo soy un hombre sincero, de donde crece la palma…" — The most famous opening lines in Cuban literature.',
      text: [
        'Yo soy un hombre sincero\nde donde crece la palma,\ny antes de morirme quiero\nechar mis versos del alma.',
        'Yo vengo de todas partes,\ny hacia todas partes voy:\narte soy entre las artes,\nen los montes, monte soy.',
        'Yo sé los nombres extraños\nde las yerbas y las flores,\ny de mortales engaños,\ny de sublimes dolores.'
      ],
      gloss: {
        'sincero': 'sincere, honest',
        'crece la palma': 'the palm tree grows',
        'morirme': 'to die',
        'echar': 'to cast / to release',
        'versos': 'verses',
        'alma': 'soul',
        'arte': 'art',
        'montes': 'mountains',
        'extraños': 'strange',
        'yerbas': 'herbs',
        'engaños': 'deceptions',
        'sublimes dolores': 'sublime sorrows'
      },
      quiz: [
        { q: 'From where does the speaker come?', options: [
          { text: 'From where the palm tree grows', correct: true },
          { text: 'From a great city', correct: false },
          { text: 'From across the sea', correct: false }
        ]},
        { q: 'What does the speaker want to do before dying?', options: [
          { text: 'Travel the world', correct: false },
          { text: 'Cast / release the verses from his soul', correct: true },
          { text: 'See his family', correct: false }
        ]},
        { q: 'These verses became the lyrics of which famous Cuban song?', options: [
          { text: 'La Bamba', correct: false },
          { text: 'Bésame Mucho', correct: false },
          { text: 'Guantanamera', correct: true }
        ]}
      ]
    },

    // ---------- INTERMEDIATE POEM (Rubén Darío) ----------
    {
      id: 'sonatina',
      kind: 'poem', level: 'intermediate',
      title: 'Sonatina (excerpt)',
      author: 'Rubén Darío',
      year: '1896',
      attribution: 'From "Prosas profanas" · Public domain · Father of Hispanic modernismo',
      preview: '"La princesa está triste… ¿Qué tendrá la princesa?" — The opening of one of the most famous poems in Spanish.',
      text: [
        'La princesa está triste... ¿Qué tendrá la princesa?\nLos suspiros se escapan de su boca de fresa,\nque ha perdido la risa, que ha perdido el color.\nLa princesa está pálida en su silla de oro,\nestá mudo el teclado de su clave sonoro,\ny en un vaso, olvidada, se desmaya una flor.',
        '¡Pobrecita princesa de los ojos azules!\nEstá presa en sus oros, está presa en sus tules,\nen la jaula de mármol del palacio real;\nel palacio soberbio que vigilan los guardas,\nque custodian cien negros con sus cien alabardas,\nun lebrel que no duerme y un dragón colosal.'
      ],
      gloss: {
        'suspiros': 'sighs',
        'fresa': 'strawberry',
        'risa': 'laughter',
        'pálida': 'pale',
        'silla de oro': 'golden chair',
        'mudo': 'silent',
        'teclado': 'keyboard',
        'clave': 'harpsichord',
        'sonoro': 'resonant',
        'olvidada': 'forgotten',
        'se desmaya': 'wilts / faints',
        'pobrecita': 'poor little',
        'presa': 'imprisoned',
        'tules': 'tulle (fine fabric)',
        'jaula': 'cage',
        'mármol': 'marble',
        'soberbio': 'magnificent / proud',
        'guardas': 'guards',
        'alabardas': 'halberds (medieval weapons)',
        'lebrel': 'greyhound',
        'dragón colosal': 'colossal dragon'
      },
      quiz: [
        { q: 'How does the poem describe the princess?', options: [
          { text: 'Happy and laughing', correct: false },
          { text: 'Sad, pale, and silent', correct: true },
          { text: 'Angry and loud', correct: false }
        ]},
        { q: 'What is the central image of the second stanza?', options: [
          { text: 'A free princess in a garden', correct: false },
          { text: 'A princess imprisoned in luxury — a "marble cage"', correct: true },
          { text: 'A princess searching for her family', correct: false }
        ]},
        { q: 'Rubén Darío is considered the father of which literary movement?', options: [
          { text: 'Realism', correct: false },
          { text: 'Romanticism', correct: false },
          { text: 'Modernismo (Hispanic Modernism)', correct: true }
        ]}
      ]
    },

    // ---------- INTERMEDIATE POEM (Bécquer) ----------
    {
      id: 'rima-xxi',
      kind: 'poem', level: 'intermediate',
      title: '¿Qué es <em>poesía</em>?',
      author: 'Gustavo Adolfo Bécquer',
      year: '1871',
      attribution: 'Rima XXI from "Rimas" · Public domain',
      preview: '"¿Qué es poesía?, dices mientras clavas en mi pupila tu pupila azul…" — Spain\'s most famous love stanza.',
      text: [
        '¿Qué es poesía?, dices mientras clavas\nen mi pupila tu pupila azul.\n¿Qué es poesía? ¿Y tú me lo preguntas?\nPoesía... eres tú.'
      ],
      gloss: {
        'clavas': 'you fix / nail',
        'pupila': 'pupil (of the eye)',
        'azul': 'blue',
        'preguntas': 'you ask'
      },
      quiz: [
        { q: 'What is the speaker doing in this poem?', options: [
          { text: 'Asking a question', correct: false },
          { text: 'Answering the question "What is poetry?"', correct: true },
          { text: 'Writing in a notebook', correct: false }
        ]},
        { q: 'Whose eyes are described as blue?', options: [
          { text: 'The speaker\'s', correct: false },
          { text: 'The person being addressed', correct: true },
          { text: 'A stranger\'s', correct: false }
        ]},
        { q: 'According to the poem, what is poetry?', options: [
          { text: 'A book of verses', correct: false },
          { text: 'The person the speaker loves', correct: true },
          { text: 'A complicated art', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED POEM (Gabriela Mistral) ----------
    {
      id: 'meciendo',
      kind: 'poem', level: 'advanced',
      title: 'Meciendo',
      author: 'Gabriela Mistral',
      year: '1924',
      attribution: 'From "Ternura" · Chile\'s first Nobel laureate (1945) · Public domain',
      preview: '"El mar sus millares de olas mece, divino…" — A tender lullaby from Chile\'s most beloved poet.',
      text: [
        'El mar sus millares de olas\nmece, divino.\nOyendo a los mares amantes,\nmezo a mi niño.',
        'El viento errabundo en la noche\nmece los trigos.\nOyendo a los vientos amantes,\nmezo a mi niño.',
        'Dios Padre sus miles de mundos\nmece sin ruido.\nSintiendo su mano en la sombra\nmezo a mi niño.'
      ],
      gloss: {
        'meciendo': 'rocking (cradling)',
        'millares': 'thousands',
        'olas': 'waves',
        'mece': 'rocks / cradles',
        'oyendo': 'listening to',
        'amantes': 'loving',
        'mezo': 'I rock',
        'errabundo': 'wandering',
        'trigos': 'wheat fields',
        'sin ruido': 'without sound',
        'sombra': 'shadow / darkness'
      },
      quiz: [
        { q: 'What is the central action of the poem?', options: [
          { text: 'A storm at sea', correct: false },
          { text: 'A mother rocking her child to sleep', correct: true },
          { text: 'A farmer harvesting wheat', correct: false }
        ]},
        { q: 'In each stanza, what large thing rocks something smaller?', options: [
          { text: 'The sea, the wind, and God', correct: true },
          { text: 'The mountains, the rivers, and the stars', correct: false },
          { text: 'The sun, the moon, and the earth', correct: false }
        ]},
        { q: 'Gabriela Mistral was the first Latin American to receive which honor?', options: [
          { text: 'The Cervantes Prize', correct: false },
          { text: 'The Nobel Prize in Literature (1945)', correct: true },
          { text: 'The Pulitzer Prize', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED POEM (Sor Juana) ----------
    {
      id: 'hombres-necios',
      kind: 'poem', level: 'advanced',
      title: 'Hombres necios <em>(excerpt)</em>',
      author: 'Sor Juana Inés de la Cruz',
      year: 'c. 1690',
      attribution: 'From "Redondillas" · Public domain · 17th-century Mexican feminist poet',
      preview: '"Hombres necios que acusáis a la mujer sin razón…" — Sor Juana\'s blistering critique of male hypocrisy, written 300+ years ago.',
      text: [
        'Hombres necios que acusáis\na la mujer sin razón,\nsin ver que sois la ocasión\nde lo mismo que culpáis:',
        'si con ansia sin igual\nsolicitáis su desdén,\n¿por qué queréis que obren bien\nsi las incitáis al mal?',
        'Combatís su resistencia\ny luego, con gravedad,\ndecís que fue liviandad\nlo que hizo la diligencia.'
      ],
      gloss: {
        'necios': 'foolish / stubborn',
        'acusáis': 'you accuse',
        'sin razón': 'without reason',
        'ocasión': 'cause / occasion',
        'culpáis': 'you blame',
        'ansia': 'eagerness / longing',
        'sin igual': 'unequaled',
        'solicitáis': 'you seek / pursue',
        'desdén': 'disdain',
        'obren': 'they act',
        'incitáis al mal': 'incite them to wrong',
        'combatís': 'you fight against',
        'gravedad': 'seriousness',
        'liviandad': 'frivolity / looseness',
        'diligencia': 'effort / pursuit'
      },
      quiz: [
        { q: 'Whom is Sor Juana criticizing in this poem?', options: [
          { text: 'Foolish men who blame women unfairly', correct: true },
          { text: 'The Spanish king', correct: false },
          { text: 'The Catholic Church', correct: false }
        ]},
        { q: 'What contradiction does she point out?', options: [
          { text: 'That men pursue women, then blame them for being pursued', correct: true },
          { text: 'That men say one thing and do another about money', correct: false },
          { text: 'That men can read but women cannot', correct: false }
        ]},
        { q: 'Sor Juana wrote in what time period?', options: [
          { text: 'The 1990s', correct: false },
          { text: 'The 1800s', correct: false },
          { text: 'The late 1600s — over 300 years ago', correct: true }
        ]}
      ]
    },

    // ---------- AUTHOR SPOTLIGHTS (modern, copyrighted authors — bio + theme discussion only) ----------
    {
      id: 'spotlight-vargas-llosa',
      kind: 'spotlight', level: 'intermediate',
      title: 'Mario <em>Vargas Llosa</em>',
      author: '1936 – 2025 · Peru',
      year: '',
      attribution: 'Author spotlight · 2010 Nobel Prize in Literature',
      preview: 'Peruvian Nobel laureate, novelist, and one of the giants of the Latin American Boom. Master of authoritarian power and human resistance.',
      text: [
        'Mario Vargas Llosa was one of the towering figures of 20th-century Latin American literature. Born in Arequipa, Peru in 1936, he rose to international fame with his first novel, *La ciudad y los perros* (1963), a searing portrait of a Peruvian military academy based on his own teenage experience. The Peruvian generals were so offended that they reportedly burned a thousand copies of the book on the school grounds.',
        'Along with Gabriel García Márquez, Julio Cortázar, and Carlos Fuentes, Vargas Llosa became one of the four "captains" of the Latin American Boom — the literary explosion of the 1960s and 70s that put Latin American fiction on the world stage. His novels explore themes of authoritarianism, corruption, machismo, and the individual\'s struggle against systems of power.',
        'In 1990, he ran for president of Peru and lost. He won the Nobel Prize in Literature in 2010, with the committee citing his "cartography of structures of power and his trenchant images of the individual\'s resistance, revolt, and defeat." He died in Lima in April 2025.',
        'Key works to know: *La ciudad y los perros* (The Time of the Hero, 1963), *La casa verde* (The Green House, 1966), *Conversación en La Catedral* (1969), *La fiesta del Chivo* (The Feast of the Goat, 2000), and *La tía Julia y el escribidor* (Aunt Julia and the Scriptwriter, 1977).'
      ],
      gloss: {},
      quiz: [
        { q: 'Vargas Llosa was a leading figure in which literary movement?', options: [
          { text: 'The Generation of \'27', correct: false },
          { text: 'The Latin American Boom', correct: true },
          { text: 'Romanticism', correct: false }
        ]},
        { q: 'His first novel was based on his experience at:', options: [
          { text: 'A monastery', correct: false },
          { text: 'A university', correct: false },
          { text: 'A military academy in Peru', correct: true }
        ]},
        { q: 'In what year did Vargas Llosa win the Nobel Prize in Literature?', options: [
          { text: '1990', correct: false },
          { text: '2010', correct: true },
          { text: '2025', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-cortazar',
      kind: 'spotlight', level: 'intermediate',
      title: 'Julio <em>Cortázar</em>',
      author: '1914 – 1984 · Argentina',
      year: '',
      attribution: 'Author spotlight · Master of the experimental short story',
      preview: 'Argentine writer who shattered the rules of fiction. Author of *Rayuela* — a novel you can read in any order.',
      text: [
        'Julio Cortázar was an Argentine writer born in Brussels (his parents were diplomats) who lived most of his adult life in exile in Paris. He became one of the most experimental and beloved fiction writers of the 20th century — a writer who treated the novel and the short story as games to be reinvented.',
        'His most famous novel, *Rayuela* (Hopscotch, 1963), can be read in two completely different orders: chapter by chapter from the start, or following a "table of instructions" that jumps you around the book in a totally different sequence. It was unlike anything readers had seen before, and it became a bible for a generation.',
        'Cortázar also wrote some of the most celebrated short stories in Spanish: *Casa tomada* (a couple slowly retreats as their house is mysteriously occupied), *Continuidad de los parques* (a man reads a story in which he himself is the victim), and *La noche boca arriba* (a motorcycle accident victim dreams he is being hunted in an Aztec ritual). His themes blur reality and dream, the everyday and the impossible.',
        'Politically, Cortázar moved from a more apolitical youth to vocal support for the Cuban Revolution and Latin American leftist movements in his later years. He died in Paris in 1984.',
        'Key works to know: *Rayuela* (1963), *Bestiario* (1951), *Final del juego* (1956), *Las armas secretas* (1959), and *Historias de cronopios y de famas* (1962).'
      ],
      gloss: {},
      quiz: [
        { q: 'What is unusual about Cortázar\'s novel *Rayuela*?', options: [
          { text: 'It can be read in two different orders', correct: true },
          { text: 'It has no chapters', correct: false },
          { text: 'It is written entirely in poetry', correct: false }
        ]},
        { q: 'Cortázar lived most of his adult life in:', options: [
          { text: 'Buenos Aires', correct: false },
          { text: 'Paris', correct: true },
          { text: 'Mexico City', correct: false }
        ]},
        { q: 'His short stories often blur the line between:', options: [
          { text: 'History and fiction', correct: false },
          { text: 'Poetry and prose', correct: false },
          { text: 'Reality and dream / the everyday and the impossible', correct: true }
        ]}
      ]
    },
    {
      id: 'spotlight-garcia-marquez',
      kind: 'spotlight', level: 'intermediate',
      title: 'Gabriel <em>García Márquez</em>',
      author: '1927 – 2014 · Colombia',
      year: '',
      attribution: 'Author spotlight · 1982 Nobel Prize in Literature · "Gabo"',
      preview: 'Colombian Nobel laureate. Father of magical realism, author of *Cien años de soledad*, and the most-translated Spanish-language writer alive in his time.',
      text: [
        'Gabriel García Márquez — known affectionately as "Gabo" — was a Colombian novelist, journalist, and Nobel laureate who shaped how the entire world reads Latin American literature.',
        'His masterpiece *Cien años de soledad* (One Hundred Years of Solitude, 1967) tells the story of seven generations of the Buendía family in the imaginary town of Macondo. It blends political history, family saga, and miraculous events — flying carpets, ascending to heaven while folding laundry, rain that lasts four years and eleven months — in a style now known around the world as **magical realism**. The novel sold tens of millions of copies and was translated into dozens of languages.',
        'García Márquez began his career as a journalist (he always called himself a reporter first, novelist second) and his writing has the texture of news reporting fused with the dreamlike quality of folk tales told by his grandmother in Aracataca, the Caribbean Colombian town where he grew up.',
        'He won the Nobel Prize in Literature in 1982. He was a close friend of Fidel Castro and a controversial political figure. He died in Mexico City in 2014.',
        'Key works to know: *Cien años de soledad* (1967), *El amor en los tiempos del cólera* (Love in the Time of Cholera, 1985), *Crónica de una muerte anunciada* (Chronicle of a Death Foretold, 1981), and *El otoño del patriarca* (1975).'
      ],
      gloss: {},
      quiz: [
        { q: 'What literary style is Gabriel García Márquez most associated with?', options: [
          { text: 'Realism', correct: false },
          { text: 'Magical realism', correct: true },
          { text: 'Surrealism', correct: false }
        ]},
        { q: 'What is the imaginary town in *Cien años de soledad* called?', options: [
          { text: 'Comala', correct: false },
          { text: 'Macondo', correct: true },
          { text: 'Aracataca', correct: false }
        ]},
        { q: 'Before becoming a novelist, García Márquez worked primarily as a:', options: [
          { text: 'Lawyer', correct: false },
          { text: 'Doctor', correct: false },
          { text: 'Journalist', correct: true }
        ]}
      ]
    },
    {
      id: 'spotlight-borges',
      kind: 'spotlight', level: 'advanced',
      title: 'Jorge Luis <em>Borges</em>',
      author: '1899 – 1986 · Argentina',
      year: '',
      attribution: 'Author spotlight · Master of philosophical fiction',
      preview: 'The blind librarian-philosopher of Buenos Aires whose stories about labyrinths, mirrors, and infinite books changed world literature.',
      text: [
        'Jorge Luis Borges is one of those rare writers whose name became an adjective: "Borgesian" — meaning labyrinthine, paradoxical, full of philosophical puzzles. His work transformed the short story and influenced everyone from Italo Calvino to Umberto Eco to nearly every literary novelist alive today.',
        'Born in Buenos Aires in 1899, Borges spent much of his childhood in his father\'s library. He read English and Spanish from an early age, lost his sight gradually starting in his 30s, and was completely blind by the time he became director of Argentina\'s National Library — a coincidence he treated with bittersweet irony, calling it "God\'s magnificent irony" to give him 800,000 books and the night.',
        'His most famous stories include *El Aleph* (a single point in space that contains the entire universe), *La biblioteca de Babel* (a library containing every possible book), *Pierre Menard, autor del Quijote* (a 20th-century author who rewrites Don Quixote word-for-word — and somehow creates a different work), and *El jardín de senderos que se bifurcan* (a novel that branches at every choice).',
        'Borges never won the Nobel Prize, which became an ongoing literary scandal during his lifetime. Critics suggested it was because of his complicated political stances — he initially supported the military dictatorship in Argentina — but most contemporary writers and scholars consider him among the greatest of the 20th century.',
        'Key works to know: *Ficciones* (1944), *El Aleph* (1949), *El hacedor* (1960), and *El libro de arena* (1975). His complete short fiction fits in a few volumes and rewards endless rereading.'
      ],
      gloss: {},
      quiz: [
        { q: 'What is "Borgesian" used to describe?', options: [
          { text: 'Stories with happy endings', correct: false },
          { text: 'Labyrinthine, philosophical, paradoxical works', correct: true },
          { text: 'Realistic war novels', correct: false }
        ]},
        { q: 'Borges became director of Argentina\'s National Library when he was:', options: [
          { text: 'Newly graduated from college', correct: false },
          { text: 'Completely blind', correct: true },
          { text: 'Twenty years old', correct: false }
        ]},
        { q: 'Which of these is one of Borges\'s most famous stories?', options: [
          { text: 'La biblioteca de Babel', correct: true },
          { text: 'Cien años de soledad', correct: false },
          { text: 'La casa verde', correct: false }
        ]}
      ]
    },

    {
      id: 'spotlight-rulfo',
      kind: 'spotlight', level: 'advanced',
      title: 'Juan <em>Rulfo</em>',
      author: '1917 – 1986 · México',
      year: '',
      attribution: 'Author spotlight · The ghost-haunted founder of Latin American magical realism',
      preview: 'A Mexican writer who published only two books — and yet became one of the most influential voices in 20th-century world literature.',
      text: [
        'Juan Rulfo published just two slim volumes of fiction in his entire life, then never wrote another novel. He didn\'t need to. Those two books — *El llano en llamas* (1953) and *Pedro Páramo* (1955) — quietly rebuilt what Spanish-language fiction could do.',
        '*Pedro Páramo* is the story of a man who returns to his mother\'s hometown to find his father — a town called Comala — only to discover that everyone there is dead and the voices he hears are ghosts murmuring from beneath the earth. The novel jumps between time periods, between living and dead voices, between memory and rumor, with no warning. Readers in 1955 had never encountered anything like it.',
        'Gabriel García Márquez later said he had *Pedro Páramo* memorized — that without Rulfo, *One Hundred Years of Solitude* could not exist. The book is the secret hinge of Latin American literature: Cortázar, Vargas Llosa, Bolaño, and every magical realist owes it a debt.',
        'Rulfo himself worked as a tire salesman, an archive clerk, and a photographer (his black-and-white images of rural Mexico are themselves canonical). He was famously private. When asked why he stopped writing, he would shrug. "El tío Celerino," he\'d say — referring to a fictional uncle who supposedly told him all his stories — "ya se murió." Uncle Celerino is dead.',
        'Key works to know: *El llano en llamas* (1953, short stories of rural Mexico after the Revolution) and *Pedro Páramo* (1955, the novel that changed everything). Read in that order.'
      ],
      gloss: {},
      quiz: [
        { q: 'How many novels did Juan Rulfo publish in his lifetime?', options: [
          { text: 'One', correct: true },
          { text: 'Twenty-three', correct: false },
          { text: 'None — only short stories', correct: false }
        ]},
        { q: 'What is unusual about the town of Comala in Pedro Páramo?', options: [
          { text: 'It has no name', correct: false },
          { text: 'Everyone in it is dead', correct: true },
          { text: 'It only exists in dreams', correct: false }
        ]},
        { q: 'García Márquez said that without Rulfo:', options: [
          { text: 'He would have been a better writer', correct: false },
          { text: 'One Hundred Years of Solitude could not exist', correct: true },
          { text: 'Magical realism would have been Argentine', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-paz',
      kind: 'spotlight', level: 'advanced',
      title: 'Octavio <em>Paz</em>',
      author: '1914 – 1998 · México',
      year: '',
      attribution: 'Author spotlight · Nobel Prize 1990 · The poet who diagnosed Mexico',
      preview: 'A poet, essayist, and diplomat who tried to explain Mexico to itself — and won the Nobel Prize for the attempt.',
      text: [
        'Octavio Paz won the Nobel Prize in Literature in 1990, but his most influential book is not a collection of poems. It\'s *El laberinto de la soledad* (1950) — a long essay arguing that the Mexican character is shaped by masks, by loneliness, by the historical wound of the Conquest. Mexicans, Paz argued, hide behind a wall of formality precisely because they\'ve been violated by their own history.',
        'The book made Paz famous outside literary circles. It is still required reading in Mexican high schools and universities — and still debated. Some scholars accept his thesis; others find it reductive, especially when applied to indigenous Mexicans whom Paz mostly wrote about rather than with.',
        'As a poet, Paz\'s masterpiece is *Piedra de sol* (1957) — a single 584-line poem structured around the Aztec calendar stone. The poem cycles through love, history, violence, and consciousness in long unbroken sentences. It is one of the great poems in the Spanish language.',
        'Paz served as Mexico\'s ambassador to India from 1962 to 1968 — until he resigned in protest after the Mexican government massacred student protesters in Tlatelolco that year. His later years were spent editing the magazine *Vuelta*, where he advocated a complicated, sometimes controversial liberal-individualist politics.',
        'Key works to know: *El laberinto de la soledad* (1950, essay), *Piedra de sol* (1957, poem), *El arco y la lira* (1956, on poetic theory), and *Sor Juana Inés de la Cruz, o, Las trampas de la fe* (1982, his sprawling study of the colonial nun-poet).'
      ],
      gloss: {},
      quiz: [
        { q: 'What is Paz\'s most influential prose work?', options: [
          { text: 'El laberinto de la soledad', correct: true },
          { text: 'Cien años de soledad', correct: false },
          { text: 'La ciudad y los perros', correct: false }
        ]},
        { q: 'Why did Paz resign as ambassador to India in 1968?', options: [
          { text: 'He wanted to write full-time', correct: false },
          { text: 'In protest after the Tlatelolco massacre', correct: true },
          { text: 'He was offered the Nobel Prize', correct: false }
        ]},
        { q: 'Piedra de sol is structured around:', options: [
          { text: 'The Catholic liturgical year', correct: false },
          { text: 'The Aztec calendar stone', correct: true },
          { text: 'The phases of the moon', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-sabato',
      kind: 'spotlight', level: 'advanced',
      title: 'Ernesto <em>Sábato</em>',
      author: '1911 – 2011 · Argentina',
      year: '',
      attribution: 'Author spotlight · Physicist turned novelist · Author of Nunca Más',
      preview: 'A trained physicist who walked away from a Sorbonne research career to write dark, paranoid novels about modern alienation.',
      text: [
        'Ernesto Sábato earned a doctorate in physics and was conducting research at the Joliot-Curie laboratory in Paris when he had a crisis: he decided science could not answer the questions that mattered to him, and he abandoned it forever for literature. Some friends thought he\'d gone mad. His former colleagues never forgave him.',
        'His first novel, *El túnel* (1948), is a short, intense first-person confession from a painter who has murdered the only woman he believed could understand him. Albert Camus and Thomas Mann both praised it. It remains one of the most-read novels in Argentina, often the first "serious" book Argentine teenagers read.',
        'His masterpiece is *Sobre héroes y tumbas* (1961), a sprawling novel that contains within it the famous "Informe sobre ciegos" — a paranoid 100-page interior monologue by a man convinced that the blind are conspiring against humanity. It\'s a book that influenced everything from Argentine rock lyrics to Roberto Bolaño.',
        'After the return to democracy in 1983, Sábato was asked by President Alfonsín to chair the *Comisión Nacional sobre la Desaparición de Personas* (CONADEP) — the truth commission investigating the military dictatorship\'s atrocities. He wrote the prologue to its report, *Nunca más* (1984). That single document is one of the foundational texts of human rights memory in Latin America.',
        'Key works to know: *El túnel* (1948), *Sobre héroes y tumbas* (1961), *Abaddón el exterminador* (1974), and his prologue to *Nunca más* (1984).'
      ],
      gloss: {},
      quiz: [
        { q: 'What did Sábato do before becoming a novelist?', options: [
          { text: 'He was a Catholic priest', correct: false },
          { text: 'He worked as a physicist', correct: true },
          { text: 'He was a soldier in WWII', correct: false }
        ]},
        { q: 'What is the "Informe sobre ciegos"?', options: [
          { text: 'A medical study Sábato published', correct: false },
          { text: 'A paranoid section inside Sobre héroes y tumbas', correct: true },
          { text: 'A government report on visual impairment', correct: false }
        ]},
        { q: 'What was Nunca más?', options: [
          { text: 'A play Sábato wrote in exile', correct: false },
          { text: 'The CONADEP truth-commission report on the dictatorship', correct: true },
          { text: 'A poem against war', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-quiroga',
      kind: 'spotlight', level: 'advanced',
      title: 'Horacio <em>Quiroga</em>',
      author: '1878 – 1937 · Uruguay / Argentina',
      year: '',
      attribution: 'Author spotlight · The master of the dark Latin American short story',
      preview: 'A Uruguayan who lived deep in the Argentine jungle and wrote some of the most haunting short stories in the language.',
      text: [
        'Horacio Quiroga\'s life was so tragic it reads like one of his own stories. His father died in a hunting accident. His stepfather killed himself. Quiroga himself accidentally shot and killed a close friend while cleaning a gun. His first wife killed herself with poison after they had moved deep into the jungle of Misiones, Argentina. He eventually killed himself too, after being diagnosed with cancer.',
        'Out of this life came the cleanest, most precise short stories in Spanish-language literature. Quiroga learned from Edgar Allan Poe and Rudyard Kipling, but he transposed their methods into the suffocating heat of the South American jungle. His *Cuentos de amor de locura y de muerte* (1917) — stories of love, of madness, and of death — combine clinical economy with quietly devastating endings.',
        'His *Cuentos de la selva* (1918) is a children\'s book that schools across Latin America still teach. It is not a sweet book. Animals die. The jungle is beautiful and pitiless. Children learn from it that nature has no special feeling for them.',
        'In 1927 Quiroga published his "Decálogo del perfecto cuentista" — ten rules for the short story writer. Rule 1: "Believe in a master — Poe, Maupassant, Kipling, Chekhov — as in God himself." Rule 10: "Don\'t think of your friends when you write, or of the impression your story will make. Tell the tale as if it interested no one but the small world of your characters, of which you could have been one. There is no other way to give life to the story."',
        'Key works to know: *Cuentos de amor de locura y de muerte* (1917), *Cuentos de la selva* (1918), *El desierto* (1924), and the *Decálogo del perfecto cuentista* (1927).'
      ],
      gloss: {},
      quiz: [
        { q: 'Where did Quiroga spend much of his adult life?', options: [
          { text: 'Buenos Aires literary salons', correct: false },
          { text: 'The Misiones jungle in Argentina', correct: true },
          { text: 'Paris, exiled from Uruguay', correct: false }
        ]},
        { q: 'Cuentos de la selva is unusual because:', options: [
          { text: 'It is written entirely in French', correct: false },
          { text: 'It is a children\'s book where animals die and nature is pitiless', correct: true },
          { text: 'It has no plot', correct: false }
        ]},
        { q: 'The Decálogo del perfecto cuentista is:', options: [
          { text: 'Quiroga\'s ten rules for writing short stories', correct: true },
          { text: 'A long poem about jungle animals', correct: false },
          { text: 'A book of recipes from the jungle', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-vallejo',
      kind: 'spotlight', level: 'advanced',
      title: 'César <em>Vallejo</em>',
      author: '1892 – 1938 · Perú',
      year: '',
      attribution: 'Author spotlight · The most radical poet in the Spanish language',
      preview: 'A poor mestizo poet from a small Andean town who wrote the most radically original Spanish-language poetry of the 20th century.',
      text: [
        'César Vallejo was born in Santiago de Chuco, a small mountain town in northern Peru, the youngest of eleven children. His family was poor, mixed-race, devout. He published his first book, *Los heraldos negros* (1919), in his late 20s — a striking debut full of religious imagery, Andean rhythms, and a vocabulary nobody had used in poetry before.',
        'Then in 1922, Vallejo published *Trilce* — and broke Spanish poetry. *Trilce* abandoned grammar, invented words, broke syntax, used numerals where letters should be, scattered language across the page like an explosion. It is not exaggeration to say no one had ever written like this in Spanish. The book sold poorly, was mocked, and is now considered the most important poetic event of the century.',
        'Vallejo spent his last years in Paris in extreme poverty, sustained by occasional journalism and by his second wife Georgette. He became a Communist, traveled to the Soviet Union, and wrote intensely political poetry during the Spanish Civil War — *España, aparta de mí este cáliz* (1939, posthumous), pleading with Spain to spare him the cup of its suffering.',
        'He died in Paris on April 15, 1938, on a rainy day — exactly as he had foretold in his famous poem "Piedra negra sobre una piedra blanca": *"Me moriré en París con aguacero, / un día del cual tengo ya el recuerdo."* I will die in Paris in a downpour, on a day I already remember.',
        'Key works to know: *Los heraldos negros* (1919), *Trilce* (1922), *Poemas humanos* (1939, posthumous), and *España, aparta de mí este cáliz* (1939, posthumous).'
      ],
      gloss: {},
      quiz: [
        { q: 'Vallejo\'s book Trilce (1922) is famous for:', options: [
          { text: 'Breaking grammar and inventing a new poetic language', correct: true },
          { text: 'Being the first novel in Quechua', correct: false },
          { text: 'Winning the Nobel Prize', correct: false }
        ]},
        { q: 'Where did Vallejo spend his last years?', options: [
          { text: 'In Cusco', correct: false },
          { text: 'In Paris, in poverty', correct: true },
          { text: 'In Buenos Aires', correct: false }
        ]},
        { q: 'In his poem Piedra negra sobre una piedra blanca, Vallejo foretold:', options: [
          { text: 'A revolution in Peru', correct: false },
          { text: 'His own death in Paris on a rainy day', correct: true },
          { text: 'The Spanish Civil War', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-mutis',
      kind: 'spotlight', level: 'advanced',
      title: 'Álvaro <em>Mutis</em>',
      author: '1923 – 2013 · Colombia',
      year: '',
      attribution: 'Author spotlight · Cervantes Prize 2001 · The adventurer\'s poet',
      preview: 'A Colombian poet and novelist who invented one of the great wandering characters of world literature — Maqroll el Gaviero.',
      text: [
        'Álvaro Mutis spent most of his adult life in Mexico City, where he became the closest friend of Gabriel García Márquez. The two writers were neighbors for decades. Mutis is the reason García Márquez first read *Pedro Páramo* — he handed him the book and said, "Read this." García Márquez later said it was the most consequential gift he ever received.',
        'Mutis is best known for the seven short novels collectively called *Empresas y tribulaciones de Maqroll el Gaviero* — the adventures and misfortunes of Maqroll the Gaviero (a "gaviero" is the lookout in a ship\'s crow\'s nest). Maqroll is a stateless wanderer who drifts between the Caribbean, the Mississippi, the Amazon, and Asian ports, getting tangled in failed mining ventures, ghost shipments, and impossible loves. He is one of the great literary characters of the 20th century.',
        'Before he was a novelist, Mutis was a poet — and a complicated one. His youthful poems mix surrealism with Catholic liturgy with shipboard slang. He worked for years as a publicist for Standard Oil and Esso, traveling all over Latin America. He spent fifteen months in prison in Mexico in the late 1950s on a (probably trumped-up) charge of embezzlement; he later said prison was an experience he would not trade.',
        'He won the Cervantes Prize in 2001 — the highest honor in Spanish-language literature. His friend García Márquez had won it years earlier; the two often joked that they shared the prize between them.',
        'Key works to know: the Maqroll novels — *La Nieve del Almirante* (1986), *Ilona llega con la lluvia* (1987), *Un bel morir* (1989), and the others — plus his collected poems, *Summa de Maqroll el Gaviero* (1973).'
      ],
      gloss: {},
      quiz: [
        { q: 'Who was Mutis\'s closest literary friend?', options: [
          { text: 'Jorge Luis Borges', correct: false },
          { text: 'Gabriel García Márquez', correct: true },
          { text: 'Mario Vargas Llosa', correct: false }
        ]},
        { q: 'Maqroll el Gaviero is:', options: [
          { text: 'A Caribbean dictator in Mutis\'s novels', correct: false },
          { text: 'A stateless wanderer who lookouts from ships\' crow\'s nests', correct: true },
          { text: 'Mutis\'s pen name', correct: false }
        ]},
        { q: 'What did Mutis win in 2001?', options: [
          { text: 'The Nobel Prize', correct: false },
          { text: 'The Cervantes Prize', correct: true },
          { text: 'The Pritzker Prize', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-benedetti',
      kind: 'spotlight', level: 'advanced',
      title: 'Mario <em>Benedetti</em>',
      author: '1920 – 2009 · Uruguay',
      year: '',
      attribution: 'Author spotlight · The most-loved Uruguayan writer of the 20th century',
      preview: 'A Uruguayan poet, novelist, and essayist whose plainspoken love poems and political commitment made him a household name across Latin America.',
      text: [
        'Mario Benedetti wrote in nearly every literary form — poetry, novels, short stories, essays, plays, song lyrics — and was extraordinarily popular in all of them. His readers were not just literary professionals. They were teachers, office workers, taxi drivers, teenagers in love. Bookstores in Buenos Aires and Mexico City often sold more Benedetti than any other Latin American author.',
        'His best-known novel is *La tregua* (1960), a short diary-novel about Martín Santomé, a 49-year-old widower and middle manager about to retire, who unexpectedly falls in love with a 24-year-old new hire at his office. It is gentle, sad, and devastating. It has been adapted into films, plays, and a Mexican telenovela.',
        'His poetry is best known for its directness. "Te quiero," "No te salves," "Defensa de la alegría," "Hagamos un trato" — these poems are recited at weddings, funerals, political rallies, and student protests across Latin America. They are not stylistically ambitious. They are emotionally honest, in a language a 16-year-old can understand.',
        'Benedetti was forced into exile by Uruguay\'s military dictatorship in 1973. He lived in Argentina, Peru, Cuba, and Spain over the next 12 years. He never stopped writing, and he became one of the strongest voices against Latin American authoritarianism in his generation. He returned to Uruguay in 1985 after the return of democracy and lived in Montevideo until his death.',
        'Key works to know: *La tregua* (1960), *Gracias por el fuego* (1965), the poems *Inventario* (collected as it grew over decades), and *El olvido está lleno de memoria* (1995).'
      ],
      gloss: {},
      quiz: [
        { q: 'What is Benedetti\'s best-known novel?', options: [
          { text: 'La tregua', correct: true },
          { text: 'El túnel', correct: false },
          { text: 'Pedro Páramo', correct: false }
        ]},
        { q: 'Where did Benedetti live during his exile?', options: [
          { text: 'Only in Cuba', correct: false },
          { text: 'In Argentina, Peru, Cuba, and Spain', correct: true },
          { text: 'In France and the United States', correct: false }
        ]},
        { q: 'Benedetti\'s poetry is known for:', options: [
          { text: 'Extreme experimental difficulty', correct: false },
          { text: 'Plainspoken emotional directness', correct: true },
          { text: 'Being written entirely in Quechua', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-bolano',
      kind: 'spotlight', level: 'advanced',
      title: 'Roberto <em>Bolaño</em>',
      author: '1953 – 2003 · Chile',
      year: '',
      attribution: 'Author spotlight · The post-Boom novelist who reinvented Latin American fiction',
      preview: 'A Chilean novelist who lived in Mexico and Spain, founded a punk-poetry movement, and reshaped Latin American literature in his last decade.',
      text: [
        'Roberto Bolaño was born in Chile in 1953, moved to Mexico as a teenager, returned to Chile in 1973 — just in time to be briefly imprisoned during the Pinochet coup — then went back to Mexico, where in the mid-1970s he founded a movement called *infrarrealismo* with poet Mario Santiago Papasquiaro. The infrarealists\' favorite activity was crashing other poets\' readings to insult them. They were unwelcome everywhere.',
        'Bolaño moved to Spain in the late 1970s, worked as a dishwasher, night watchman, and bartender, and wrote poetry that no one read. He didn\'t start writing serious fiction until his late thirties — when he was diagnosed with the liver disease that would eventually kill him and decided his children needed an inheritance. From that point on he wrote with terrifying speed and focus.',
        '*Los detectives salvajes* (1998) is the novel that made his reputation. It is a fictionalized history of his own infrarealist movement, told through dozens of voices over twenty years. The book is structurally daring, emotionally generous, and very funny. It won the Premio Herralde and the Premio Rómulo Gallegos in the same year — unprecedented.',
        '*2666* (2004) was published posthumously. It is over a thousand pages long and includes, at its center, a hundred-and-twenty-page litany of murdered women in the Mexican border city of "Santa Teresa" — clearly Ciudad Juárez. The book is one of the most ambitious novels in any language since the war. It was unfinished when Bolaño died waiting for a liver transplant in 2003.',
        'Key works to know: *Los detectives salvajes* (1998), *Estrella distante* (1996), *Nocturno de Chile* (2000), and *2666* (2004, posthumous).'
      ],
      gloss: {},
      quiz: [
        { q: 'What was infrarrealismo?', options: [
          { text: 'A movement founded by Bolaño that crashed other poets\' readings', correct: true },
          { text: 'A Spanish architectural movement of the 1970s', correct: false },
          { text: 'Bolaño\'s rejected pen name', correct: false }
        ]},
        { q: 'Why did Bolaño finally turn to fiction in his late thirties?', options: [
          { text: 'A publisher offered him a contract', correct: false },
          { text: 'He was diagnosed with a fatal liver disease and wanted to leave his children an inheritance', correct: true },
          { text: 'He won a Nobel Prize for poetry first', correct: false }
        ]},
        { q: 'What is at the center of 2666?', options: [
          { text: 'A love story between two writers', correct: false },
          { text: 'A long catalog of murdered women in a Mexican border city', correct: true },
          { text: 'A Chilean coup d\'état', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-roa-bastos',
      kind: 'spotlight', level: 'advanced',
      title: 'Augusto <em>Roa Bastos</em>',
      author: '1917 – 2005 · Paraguay',
      year: '',
      attribution: 'Author spotlight · Cervantes Prize 1989 · The novelist of the dictator',
      preview: 'A Paraguayan who spent most of his life in exile and wrote one of the great Latin American novels about absolute power.',
      text: [
        'Augusto Roa Bastos is the only Paraguayan writer most readers outside Paraguay have ever heard of. He spent over forty years of his life in exile — first in Argentina, later in France — because his books offended a succession of Paraguayan military governments. He was finally able to return only in his last decades.',
        'His masterpiece is *Yo el supremo* (1974), a novel told in the voice of José Gaspar Rodríguez de Francia — the absolute dictator who ruled Paraguay from independence in 1811 until his death in 1840. Francia closed the country\'s borders for decades, decreed his own divinity, and called himself simply "El Supremo." Roa Bastos\' novel imagines him at his desk near death, dictating a long, paranoid, brilliant, fragmentary self-defense.',
        '*Yo el supremo* belongs to a small group of mid-century Latin American "dictator novels" — alongside García Márquez\'s *El otoño del patriarca* and Carpentier\'s *El recurso del método* — that try to capture the inner voice of absolute power. Roa Bastos\' is the strangest and most experimental of the three.',
        'Roa Bastos also wrote in Guaraní, the indigenous language spoken alongside Spanish by most Paraguayans. He cared deeply about Paraguay\'s bilingual reality at a time when most Latin American writers were not paying attention to indigenous languages. His earlier novel *Hijo de hombre* (1960) draws on Guaraní oral tradition.',
        'Key works to know: *Hijo de hombre* (1960), *Yo el supremo* (1974), and the late stories collected in *El fiscal* (1993).'
      ],
      gloss: {},
      quiz: [
        { q: 'How long did Roa Bastos live in exile?', options: [
          { text: 'A few months', correct: false },
          { text: 'Over 40 years', correct: true },
          { text: 'He never went into exile', correct: false }
        ]},
        { q: 'Yo el supremo is told in the voice of:', options: [
          { text: 'Paraguay\'s 19th-century dictator Francia', correct: true },
          { text: 'Roa Bastos\'s grandfather', correct: false },
          { text: 'Augusto Pinochet', correct: false }
        ]},
        { q: 'Roa Bastos was unusual among Latin American writers of his generation because:', options: [
          { text: 'He refused to leave Paraguay', correct: false },
          { text: 'He wrote in Guaraní and cared about indigenous languages', correct: true },
          { text: 'He wrote only science fiction', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-fuentes',
      kind: 'spotlight', level: 'advanced',
      title: 'Carlos <em>Fuentes</em>',
      author: '1928 – 2012 · México',
      year: '',
      attribution: 'Author spotlight · The diplomat-novelist who interpreted Mexican history',
      preview: 'A Mexican novelist, essayist, and diplomat who used fiction to interrogate his country\'s past and to defend Latin American literature on the world stage.',
      text: [
        'Carlos Fuentes was born in Panama City — his father was a Mexican diplomat — and grew up in embassies across the Americas, attending school in Washington, D.C., Santiago, Buenos Aires, and Mexico City. He was bilingual from childhood. He carried himself, all his life, like a diplomat as much as a writer.',
        'His first novel *La región más transparente* (1958) was a Joycean panorama of Mexico City, the first novel to take that vast, polyphonic city seriously as a literary subject. *La muerte de Artemio Cruz* (1962) is his most-read book — a death-bed monologue by a Mexican Revolution veteran who became a corrupt magnate. It moves between three narrative voices (yo, tú, él) to anatomize how revolutionary idealism becomes power and self-betrayal.',
        '*Terra Nostra* (1975) is his most ambitious and exhausting novel — a 700-page Latin American historical phantasmagoria that crosses time periods, languages, and continents, set partially in the court of Philip II of Spain. It won the Premio Rómulo Gallegos in 1977.',
        'Fuentes was a public intellectual unlike any in Mexico today. He gave the Massey Lectures in Canada and the Harvard Charles Eliot Norton Lectures. He published a major book of essays on Latin American literature, *La nueva novela hispanoamericana* (1969), which became a defining manifesto for the Boom generation. He defended Latin American writers against Cold War simplifications in both directions.',
        'Key works to know: *La región más transparente* (1958), *La muerte de Artemio Cruz* (1962), *Aura* (1962, a short uncanny novella), *Terra Nostra* (1975), and the essays *La nueva novela hispanoamericana* (1969).'
      ],
      gloss: {},
      quiz: [
        { q: 'Where was Carlos Fuentes born?', options: [
          { text: 'Mexico City', correct: false },
          { text: 'Panama City', correct: true },
          { text: 'Madrid', correct: false }
        ]},
        { q: 'La muerte de Artemio Cruz is structured around:', options: [
          { text: 'A young writer\'s coming of age', correct: false },
          { text: 'A dying revolutionary-turned-magnate, told in three narrative voices', correct: true },
          { text: 'A love affair between two diplomats', correct: false }
        ]},
        { q: 'Fuentes\'s essay book La nueva novela hispanoamericana became:', options: [
          { text: 'A bestseller in Europe', correct: false },
          { text: 'A defining manifesto for the Boom generation', correct: true },
          { text: 'The basis for a Hollywood film', correct: false }
        ]}
      ]
    },
    {
      id: 'spotlight-bodoc',
      kind: 'spotlight', level: 'advanced',
      title: 'Liliana <em>Bodoc</em>',
      author: '1958 – 2018 · Argentina',
      year: '',
      attribution: 'Author spotlight · The Tolkien of pre-Columbian America',
      preview: 'An Argentine writer who built a Tolkienesque fantasy world entirely from pre-Columbian American mythology — and changed Spanish-language YA fantasy forever.',
      text: [
        'When Liliana Bodoc published *Los días del venado* in 2000 — the first volume of her trilogy *La saga de los confines* — she did something no one had really done before in Spanish-language fantasy: she built an epic Tolkien-scale fantasy world rooted entirely in pre-Columbian American sources rather than in northern-European medieval ones.',
        'The trilogy\'s mythology pulls from Mapuche, Inca, Mexica, and Mayan traditions. The geography is recognizably Andean and Amazonian. The villains arrive from across the sea bringing horses, steel, and a strange new god — and any reader can hear the echo of the Conquest, told from the side of those who fought against it. The books were embraced by Argentine and Mexican high schools and became required reading in many curricula.',
        'Bodoc came to writing late. She lived for decades in Mendoza, taught literature in secondary schools, and raised two sons. Her husband helped her edit. She was 42 when *Los días del venado* came out — and the trilogy became a phenomenon almost immediately.',
        'She wrote many other books — including a fictional retelling of the Inca conquest told from a young girl\'s perspective, *El espejo africano* (2008) on the Atlantic slave trade, and several picture books — but the trilogy is where her revolution happened. Spanish-language YA fantasy has been chasing her ever since.',
        'Key works to know: *La saga de los confines* trilogy (*Los días del venado* 2000, *Los días de la sombra* 2002, *Los días del fuego* 2004), *El espejo africano* (2008), and the novella *Memorias impuras* (2007).'
      ],
      gloss: {},
      quiz: [
        { q: 'What is unusual about La saga de los confines as a fantasy series?', options: [
          { text: 'It is written entirely in verse', correct: false },
          { text: 'It builds its world from pre-Columbian American mythology instead of European sources', correct: true },
          { text: 'It has no magic', correct: false }
        ]},
        { q: 'Where did Bodoc live and teach?', options: [
          { text: 'Buenos Aires', correct: false },
          { text: 'Mendoza, Argentina', correct: true },
          { text: 'Cusco, Peru', correct: false }
        ]},
        { q: 'What historical event is echoed in La saga de los confines?', options: [
          { text: 'The Spanish Conquest of the Americas', correct: true },
          { text: 'The French Revolution', correct: false },
          { text: 'The Mexican-American War', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // PERU READINGS — three pieces showing different aspects of the country
    // (paired with the Perú vocabulary deck)
    // ============================================================================

    // ---------- BEGINNER PERU STORY — Lima coast & daily life ----------
    {
      id: 'peru-lima',
      kind: 'story', level: 'beginner',
      title: 'Mi familia en <em>Lima</em>',
      author: 'Original · El Pueblo · 🇵🇪 Perú',
      year: '',
      attribution: '',
      preview: 'Me llamo Mateo y vivo en Lima, la capital del Perú. Lima está en la costa…',
      text: [
        'Hola. Me llamo Mateo. Tengo catorce años. Vivo en Lima, la capital del Perú.',
        'Lima está en la costa del país. No hay montañas aquí. En realidad, Lima está en el desierto, pero cerca del mar. Casi nunca llueve.',
        'Mi familia es típica. Mi madre se llama Rosa. Ella trabaja en una oficina. Mi padre se llama Carlos. Él es taxista.',
        'Los domingos vamos al mercado. Compramos pescado fresco y muchas papas. Mi madre prepara ceviche. ¡Es delicioso!',
        'Por la tarde, mi padre y yo caminamos a lo largo de la playa. A veces vemos turistas que sacan fotos. Me gusta vivir aquí.'
      ],
      gloss: {
        'capital': 'capital',
        'casi nunca llueve': 'it almost never rains',
        'taxista': 'taxi driver',
        'pescado fresco': 'fresh fish',
        'a lo largo de': 'along',
        'sacan fotos': 'take photos'
      },
      quiz: [
        { q: '¿Dónde vive Mateo?', options: [
          { text: 'En Cuzco', correct: false },
          { text: 'En Lima', correct: true },
          { text: 'En la selva', correct: false }
        ]},
        { q: '¿Cómo es el clima de Lima?', options: [
          { text: 'Llueve mucho', correct: false },
          { text: 'Hay muchas montañas', correct: false },
          { text: 'Es un desierto cerca del mar', correct: true }
        ]},
        { q: '¿Qué prepara la madre los domingos?', options: [
          { text: 'Ceviche', correct: true },
          { text: 'Empanadas', correct: false },
          { text: 'Tacos', correct: false }
        ]},
        { q: '¿Qué hacen Mateo y su padre por la tarde?', options: [
          { text: 'Van al mercado', correct: false },
          { text: 'Caminan a lo largo de la playa', correct: true },
          { text: 'Estudian en casa', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE PERU STORY — Amazon jungle trip ----------
    {
      id: 'peru-selva',
      kind: 'story', level: 'intermediate',
      title: 'Un viaje a la <em>selva</em>',
      author: 'Original · El Pueblo · 🇵🇪 Perú',
      year: '',
      attribution: '',
      preview: 'El verano pasado, mi hermana y yo viajamos a la selva peruana. Salimos de Lima en avión…',
      text: [
        'El verano pasado, mi hermana y yo viajamos a la selva peruana. Salimos de Lima en avión. Después de una hora, llegamos a Iquitos, una ciudad en el Amazonas.',
        'Iquitos es una ciudad muy diferente. No hay carreteras que conectan Iquitos con el resto del país. Solo se puede llegar en avión o en barco.',
        'El primer día, subimos a un barco pequeño. Viajamos por el río por muchas horas. Yo estaba muy emocionada. Mi hermana sacaba fotos de todo.',
        'En la selva, escuchamos los sonidos de los pájaros y los monos. Vimos plantas enormes. Hacía mucho calor y había muchos insectos.',
        'Visitamos una comunidad indígena. La gente allí habla español, pero también habla otras lenguas. Probamos comida típica de la región. Era diferente, pero rica.',
        'Después de tres días, bajamos del barco y volvimos a Iquitos. Compré un recuerdo pequeño para mi madre. Fue un viaje impresionante.'
      ],
      gloss: {
        'el verano pasado': 'last summer',
        'avión': 'airplane',
        'carreteras': 'roads / highways',
        'barco': 'boat',
        'río': 'river',
        'emocionada': 'excited',
        'pájaros': 'birds',
        'monos': 'monkeys',
        'comunidad indígena': 'indigenous community',
        'lenguas': 'languages',
        'volvimos': 'we returned'
      },
      quiz: [
        { q: '¿Cómo viajaron de Lima a Iquitos?', options: [
          { text: 'En carro', correct: false },
          { text: 'En avión', correct: true },
          { text: 'En tren', correct: false }
        ]},
        { q: '¿Por qué Iquitos es una ciudad diferente?', options: [
          { text: 'Es la capital del Perú', correct: false },
          { text: 'Solo se puede llegar en avión o en barco', correct: true },
          { text: 'Está en la costa', correct: false }
        ]},
        { q: '¿Qué hicieron en la selva?', options: [
          { text: 'Caminaron por las montañas', correct: false },
          { text: 'Visitaron una comunidad indígena y viajaron por el río', correct: true },
          { text: 'Comieron en restaurantes elegantes', correct: false }
        ]},
        { q: 'Según la narradora, la comida típica de la selva era…', options: [
          { text: 'mala', correct: false },
          { text: 'diferente, pero rica', correct: true },
          { text: 'igual que la comida de Lima', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED PERU READING — informational essay about the potato ----------
    {
      id: 'peru-papa',
      kind: 'story', level: 'advanced',
      title: 'La <em>papa</em>: una historia peruana',
      author: 'Original · El Pueblo · 🇵🇪 Perú',
      year: '',
      attribution: '',
      preview: 'La papa es uno de los alimentos más importantes del mundo. Pero, ¿de dónde viene? La respuesta es: del Perú…',
      text: [
        'La papa es uno de los alimentos más importantes del mundo. Pero, ¿de dónde viene? La respuesta es: del Perú.',
        'Hace miles de años, los pueblos indígenas de los Andes empezaron a cultivar la papa. Vivían en la sierra, donde el clima es frío y la tierra es difícil. La papa era perfecta para esa región.',
        'Los incas también cultivaban la papa. Construyeron terrazas en las montañas para crear más espacio para sus cultivos. Tenían muchas variedades de papa, de diferentes colores y formas. Para los incas, la papa no era solo comida — era una parte importante de su cultura.',
        'En el año 1532, los españoles llegaron al Perú y conquistaron el imperio inca. Descubrieron la papa por primera vez. Llevaron la papa a España, y poco a poco, la papa llegó a otros países de Europa.',
        'Al principio, muchos europeos no querían comer la papa. Pensaban que era extraña. Pero después de varios siglos, la papa se hizo muy popular. Hoy, países como Irlanda, Rusia y Alemania comen muchas papas. Sin embargo, todo empezó en el Perú.',
        'Hoy en día, en el Perú hay más de cuatro mil tipos de papa. En la sierra, los agricultores andinos todavía cultivan variedades antiguas, las mismas papas que comían los incas hace cientos de años. La papa es típica del Perú, pero también es un regalo del Perú para el mundo.'
      ],
      gloss: {
        'alimentos': 'foods',
        'hace miles de años': 'thousands of years ago',
        'cultivar': 'to grow / to cultivate',
        'tierra': 'land / soil',
        'terrazas': 'terraces (flat areas built into the mountain)',
        'cultivos': 'crops',
        'variedades': 'varieties',
        'al principio': 'at first',
        'pensaban': 'they thought',
        'siglos': 'centuries',
        'se hizo': 'it became',
        'sin embargo': 'however',
        'hoy en día': 'nowadays',
        'agricultores': 'farmers',
        'todavía': 'still'
      },
      quiz: [
        { q: 'Según el texto, ¿de dónde viene la papa originalmente?', options: [
          { text: 'De España', correct: false },
          { text: 'De Irlanda', correct: false },
          { text: 'Del Perú', correct: true }
        ]},
        { q: '¿Por qué la papa era perfecta para los Andes?', options: [
          { text: 'Porque la sierra es caliente', correct: false },
          { text: 'Porque era perfecta para el clima frío y la tierra difícil', correct: true },
          { text: 'Porque solo los incas podían cultivarla', correct: false }
        ]},
        { q: '¿Qué construyeron los incas en las montañas?', options: [
          { text: 'Carreteras', correct: false },
          { text: 'Terrazas para sus cultivos', correct: true },
          { text: 'Casas modernas', correct: false }
        ]},
        { q: '¿Cuál fue la reacción de los europeos cuando recibieron la papa?', options: [
          { text: 'La amaron inmediatamente', correct: false },
          { text: 'Al principio no querían comerla, pero después se hizo popular', correct: true },
          { text: 'La devolvieron al Perú', correct: false }
        ]},
        { q: '¿Cuántos tipos de papa hay en el Perú hoy?', options: [
          { text: 'Solo cinco', correct: false },
          { text: 'Cien', correct: false },
          { text: 'Más de cuatro mil', correct: true }
        ]}
      ]
    },

    // ============================================================================
    // SPAIN READINGS — three pieces (Spanish 1 level, matches the España deck)
    // ============================================================================

    // ---------- BEGINNER SPAIN STORY — daily life in a small town ----------
    {
      id: 'espana-pueblo',
      kind: 'story', level: 'beginner',
      title: 'Un día en mi <em>pueblo</em>',
      author: 'Original · El Pueblo · 🇪🇸 España',
      year: '',
      attribution: '',
      preview: 'Me llamo Lucía. Vivo en un pueblo pequeño en España. Me gusta mucho mi pueblo…',
      text: [
        'Me llamo Lucía. Tengo trece años. Vivo en un pueblo pequeño en el sur de España.',
        'Por la mañana, camino a la escuela. La escuela está cerca de la plaza.',
        'Por la tarde, mi familia y yo paseamos por la plaza. Es un lugar muy animado. Hay muchas personas y muchos cafés.',
        'A veces compramos jamón y pan en el mercado. Mi madre prepara tapas para la familia.',
        'En mi pueblo hay un castillo muy antiguo. Es famoso e histórico. Me gusta mirar el castillo desde la plaza.',
        'Por la noche, cenamos tarde, a las nueve. Es una costumbre española. Me gusta mucho mi pueblo.'
      ],
      gloss: {
        'camino': 'I walk',
        'cerca de': 'near',
        'paseamos': 'we stroll',
        'animado': 'lively',
        'jamón': 'cured ham',
        'tapas': 'small dishes',
        'castillo': 'castle',
        'antiguo': 'old / ancient',
        'costumbre': 'custom'
      },
      quiz: [
        { q: '¿Dónde vive Lucía?', options: [
          { text: 'En una ciudad grande', correct: false },
          { text: 'En un pueblo pequeño en el sur de España', correct: true },
          { text: 'En Madrid', correct: false }
        ]},
        { q: '¿Qué hace su familia por la tarde?', options: [
          { text: 'Pasean por la plaza', correct: true },
          { text: 'Van a la playa', correct: false },
          { text: 'Miran la televisión', correct: false }
        ]},
        { q: '¿Qué hay en el pueblo de Lucía?', options: [
          { text: 'Un castillo antiguo', correct: true },
          { text: 'Un aeropuerto', correct: false },
          { text: 'Una universidad', correct: false }
        ]},
        { q: '¿A qué hora cena la familia?', options: [
          { text: 'A las seis', correct: false },
          { text: 'A las nueve', correct: true },
          { text: 'A las doce', correct: false }
        ]}
      ]
    },

    // ---------- BEGINNER-PLUS SPAIN STORY — a day at the beach ----------
    {
      id: 'espana-playa',
      kind: 'story', level: 'beginner',
      title: 'Un día en la <em>playa</em>',
      author: 'Original · El Pueblo · 🇪🇸 España',
      year: '',
      attribution: '',
      preview: 'En verano, mi familia y yo vamos a la playa. España tiene playas muy hermosas…',
      text: [
        'En verano, mi familia y yo vamos a la playa. España tiene playas muy hermosas, especialmente en la costa mediterránea.',
        'Mi playa favorita está cerca de Valencia. El agua es azul y la arena es muy bonita.',
        'Por la mañana, nadamos en el mar y descansamos al aire libre. Mi padre lee un libro y mi madre escucha música.',
        'A mediodía, comemos paella en un restaurante cerca de la playa. La paella es un plato típico de Valencia. ¡Es deliciosa!',
        'Por la tarde, paseamos por el casco antiguo de la ciudad. Visitamos las tiendas y miramos los edificios históricos.',
        'Muchas veces, cenamos tarde y después caminamos por la playa. Me encanta el verano en España.'
      ],
      gloss: {
        'verano': 'summer',
        'hermosas': 'beautiful',
        'la costa mediterránea': 'the Mediterranean coast',
        'arena': 'sand',
        'nadamos': 'we swim',
        'descansamos': 'we rest',
        'al aire libre': 'outdoors',
        'a mediodía': 'at noon',
        'casco antiguo': 'old town',
        'muchas veces': 'often'
      },
      quiz: [
        { q: '¿Cuándo va la familia a la playa?', options: [
          { text: 'En invierno', correct: false },
          { text: 'En verano', correct: true },
          { text: 'En otoño', correct: false }
        ]},
        { q: '¿Dónde está su playa favorita?', options: [
          { text: 'Cerca de Madrid', correct: false },
          { text: 'Cerca de Valencia', correct: true },
          { text: 'En el norte de España', correct: false }
        ]},
        { q: '¿Qué comen a mediodía?', options: [
          { text: 'Tapas', correct: false },
          { text: 'Jamón', correct: false },
          { text: 'Paella', correct: true }
        ]},
        { q: '¿Qué hacen por la tarde?', options: [
          { text: 'Pasean por el casco antiguo', correct: true },
          { text: 'Duermen en la playa', correct: false },
          { text: 'Van a un museo', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE SPAIN STORY — a visit to several cities ----------
    {
      id: 'espana-ciudades',
      kind: 'story', level: 'intermediate',
      title: 'Un viaje por <em>España</em>',
      author: 'Original · El Pueblo · 🇪🇸 España',
      year: '',
      attribution: '',
      preview: 'El verano pasado, mi familia y yo viajamos por España. Visitamos tres ciudades diferentes…',
      text: [
        'El verano pasado, mi familia y yo viajamos por España durante dos semanas. Visitamos tres ciudades muy diferentes.',
        'Primero, pasamos cuatro días en Madrid, la capital. Madrid está en el centro del país. Caminamos por las calles animadas y comimos tapas en muchos restaurantes. Una noche, vimos un espectáculo de flamenco. El flamenco es originario del sur de España, pero ahora es famoso en todo el país.',
        'Después, viajamos a Sevilla, en el sur. Sevilla es una ciudad histórica con mucha influencia árabe. Visitamos edificios antiguos y paseamos por el casco antiguo. Hacía mucho calor, pero la ciudad era hermosa.',
        'Finalmente, fuimos a Barcelona, en la costa mediterránea. Barcelona tiene playas y arquitectura impresionante. Descansamos al aire libre y miramos el mar. Compramos recuerdos para nuestros amigos.',
        'Fue un viaje increíble. España es un país pequeño, pero cada región tiene sus propias costumbres, su comida y su cultura. Quiero volver algún día.'
      ],
      gloss: {
        'el verano pasado': 'last summer',
        'durante': 'during / for',
        'animadas': 'lively',
        'comimos': 'we ate',
        'vimos': 'we saw',
        'espectáculo': 'show / performance',
        'originario de': 'originating from',
        'influencia árabe': 'Arab influence',
        'hacía calor': 'it was hot',
        'sus propias costumbres': 'its own customs',
        'volver': 'to return'
      },
      quiz: [
        { q: '¿Cuánto tiempo duró el viaje?', options: [
          { text: 'Dos semanas', correct: true },
          { text: 'Dos días', correct: false },
          { text: 'Dos meses', correct: false }
        ]},
        { q: '¿Qué vieron una noche en Madrid?', options: [
          { text: 'Un partido de fútbol', correct: false },
          { text: 'Un espectáculo de flamenco', correct: true },
          { text: 'Una película', correct: false }
        ]},
        { q: 'Según el texto, ¿de dónde es originario el flamenco?', options: [
          { text: 'Del norte de España', correct: false },
          { text: 'Del sur de España', correct: true },
          { text: 'De Madrid', correct: false }
        ]},
        { q: '¿Qué tiene Barcelona, según el narrador?', options: [
          { text: 'Playas y arquitectura impresionante', correct: true },
          { text: 'Muchos castillos antiguos', correct: false },
          { text: 'Un clima muy frío', correct: false }
        ]},
        { q: '¿Cuál es la idea principal del último párrafo?', options: [
          { text: 'España es un país aburrido', correct: false },
          { text: 'España es pequeña pero cada región es diferente', correct: true },
          { text: 'Madrid es la mejor ciudad', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // ARGENTINA READINGS — three pieces (Spanish 2 level, matches Argentina deck)
    // ============================================================================

    // ---------- BEGINNER ARGENTINA STORY — Sunday asado ----------
    {
      id: 'argentina-asado',
      kind: 'story', level: 'beginner',
      title: 'El <em>asado</em> del domingo',
      author: 'Original · El Pueblo · 🇦🇷 Argentina',
      year: '',
      attribution: '',
      preview: 'Los domingos, mi familia hace un asado. Es una tradición muy importante en Argentina…',
      text: [
        'Me llamo Tomás y vivo en un barrio de Buenos Aires. Los domingos, mi familia hace un asado.',
        'El asado es más que comida; es un momento social. Toda la familia viene a casa.',
        'Mi tío asa la carne en la parrilla. La carne argentina es muy sabrosa. También comemos empanadas.',
        'Mientras comemos, los adultos comparten el mate. El mate es una bebida tradicional. Es una costumbre social muy importante.',
        'Después de comer, escuchamos música y hablamos por horas. A veces mi abuelo cuenta historias del campo y de los gauchos.',
        'Me encantan los domingos. El asado es mi tradición favorita.'
      ],
      gloss: {
        'barrio': 'neighborhood',
        'asa': 'grills / roasts',
        'la parrilla': 'the grill',
        'sabrosa': 'tasty',
        'empanadas': 'stuffed pastries',
        'mientras': 'while',
        'comparten': 'they share',
        'la bebida': 'the drink',
        'costumbre': 'custom',
        'cuenta historias': 'tells stories',
        'gauchos': 'Argentine cowboys'
      },
      quiz: [
        { q: '¿Qué hace la familia de Tomás los domingos?', options: [
          { text: 'Va a la playa', correct: false },
          { text: 'Hace un asado', correct: true },
          { text: 'Mira televisión', correct: false }
        ]},
        { q: 'Según el texto, el asado es…', options: [
          { text: 'solo comida', correct: false },
          { text: 'más que comida; un momento social', correct: true },
          { text: 'un deporte', correct: false }
        ]},
        { q: '¿Qué comparten los adultos mientras comen?', options: [
          { text: 'El mate', correct: true },
          { text: 'Café', correct: false },
          { text: 'Jugo', correct: false }
        ]},
        { q: '¿De qué cuenta historias el abuelo?', options: [
          { text: 'Del mar', correct: false },
          { text: 'Del campo y de los gauchos', correct: true },
          { text: 'De la ciudad', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE ARGENTINA STORY — a trip through the country ----------
    {
      id: 'argentina-viaje',
      kind: 'story', level: 'intermediate',
      title: 'Un viaje por <em>Argentina</em>',
      author: 'Original · El Pueblo · 🇦🇷 Argentina',
      year: '',
      attribution: '',
      preview: 'El año pasado, mi familia y yo recorrimos Argentina. Es un país inmenso con paisajes muy diferentes…',
      text: [
        'El año pasado, mi familia y yo recorrimos Argentina durante tres semanas. Es un país inmenso, con paisajes muy diferentes en cada región.',
        'Primero, exploramos Buenos Aires, la capital. Es una ciudad con mucha influencia europea, especialmente italiana. Una noche, vimos un espectáculo de tango. El tango nació en los barrios de Buenos Aires hace más de cien años.',
        'Después, viajamos al norte. Allí el clima es cálido y la comida es deliciosa. Saboreamos empanadas en cada pueblo. En cambio, cuando viajamos al sur, a la Patagonia, todo era diferente: el paisaje era inmenso y hacía mucho frío.',
        'En la Patagonia conocimos a algunos gauchos que trabajan en el campo. Ellos comparten el mate con los visitantes; es una tradición de hospitalidad. Probé el mate por primera vez. Al principio, era amargo, pero después me gustó.',
        'Argentina me sorprendió mucho. Cada región tiene su propia cultura, su comida y su clima. Quiero volver para conocer más.'
      ],
      gloss: {
        'el año pasado': 'last year',
        'recorrimos': 'we traveled through',
        'inmenso': 'immense / vast',
        'exploramos': 'we explored',
        'influencia europea': 'European influence',
        'espectáculo': 'show',
        'nació': 'was born',
        'cálido': 'warm',
        'saboreamos': 'we savored',
        'en cambio': 'on the other hand',
        'conocimos': 'we met',
        'comparten': 'they share',
        'amargo': 'bitter',
        'me sorprendió': 'surprised me'
      },
      quiz: [
        { q: '¿Cuánto tiempo duró el viaje?', options: [
          { text: 'Tres días', correct: false },
          { text: 'Tres semanas', correct: true },
          { text: 'Tres meses', correct: false }
        ]},
        { q: '¿Qué influencia tiene Buenos Aires, según el texto?', options: [
          { text: 'Europea, especialmente italiana', correct: true },
          { text: 'Solo indígena', correct: false },
          { text: 'Asiática', correct: false }
        ]},
        { q: '¿Cómo era el paisaje de la Patagonia?', options: [
          { text: 'Pequeño y caluroso', correct: false },
          { text: 'Inmenso y frío', correct: true },
          { text: 'Igual que Buenos Aires', correct: false }
        ]},
        { q: '¿Cómo era el mate la primera vez que el narrador lo probó?', options: [
          { text: 'Dulce', correct: false },
          { text: 'Amargo, pero después le gustó', correct: true },
          { text: 'No lo probó', correct: false }
        ]},
        { q: '¿Cuál es la idea principal del texto?', options: [
          { text: 'Buenos Aires es aburrida', correct: false },
          { text: 'Cada región de Argentina tiene su propia cultura y clima', correct: true },
          { text: 'La Patagonia es el único lugar bonito', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED ARGENTINA READING — the gaucho tradition ----------
    {
      id: 'argentina-gaucho',
      kind: 'story', level: 'advanced',
      title: 'El <em>gaucho</em>: símbolo de Argentina',
      author: 'Original · El Pueblo · 🇦🇷 Argentina',
      year: '',
      attribution: '',
      preview: 'El gaucho es uno de los símbolos más importantes de la cultura argentina. Pero, ¿quién era el gaucho?',
      text: [
        'El gaucho es uno de los símbolos más importantes de la cultura argentina. Pero, ¿quién era el gaucho y por qué es tan importante hoy?',
        'Hace muchos años, los gauchos vivían en el campo, en las inmensas llanuras de Argentina. Eran trabajadores rurales que cuidaban el ganado y vivían a caballo. Eran independientes y conocían muy bien la naturaleza. Para muchos argentinos, el gaucho representaba la libertad y la vida sencilla del campo.',
        'La vida del gaucho no era fácil. Trabajaban mucho, casi siempre solos, lejos de las ciudades. Comían carne asada y compartían el mate alrededor del fuego. Con el tiempo, la cultura del gaucho influyó profundamente en la música, la comida y las costumbres del país.',
        'En el siglo diecinueve, un escritor argentino llamado José Hernández escribió un poema épico sobre un gaucho. El poema se llama "Martín Fierro" y hoy es una obra muy importante de la literatura argentina. El poema ayudó a transformar al gaucho en un símbolo nacional.',
        'Hoy en día, ya no hay muchos gauchos como antes. Sin embargo, su influencia está en todas partes: en el asado, en el mate, en la música folklórica y en el orgullo que sienten los argentinos por su historia rural. El gaucho ya no es solo una persona; es una idea, una parte de la identidad argentina.'
      ],
      gloss: {
        'hace muchos años': 'many years ago',
        'llanuras': 'plains',
        'trabajadores rurales': 'rural workers',
        'cuidaban el ganado': 'took care of the cattle',
        'a caballo': 'on horseback',
        'sencilla': 'simple',
        'alrededor del fuego': 'around the fire',
        'influyó': 'influenced',
        'siglo diecinueve': '19th century',
        'obra': 'work (of literature)',
        'hoy en día': 'nowadays',
        'sin embargo': 'however',
        'orgullo': 'pride',
        'identidad': 'identity'
      },
      quiz: [
        { q: '¿Dónde vivían los gauchos?', options: [
          { text: 'En las ciudades grandes', correct: false },
          { text: 'En el campo, en las llanuras', correct: true },
          { text: 'En la costa', correct: false }
        ]},
        { q: 'Según el texto, ¿qué representaba el gaucho para muchos argentinos?', options: [
          { text: 'La riqueza', correct: false },
          { text: 'La libertad y la vida sencilla del campo', correct: true },
          { text: 'La vida moderna de la ciudad', correct: false }
        ]},
        { q: '¿Qué es "Martín Fierro"?', options: [
          { text: 'Una canción moderna', correct: false },
          { text: 'Un poema épico sobre un gaucho', correct: true },
          { text: 'El nombre de una ciudad', correct: false }
        ]},
        { q: '¿Cómo influyó la cultura del gaucho en Argentina?', options: [
          { text: 'En la música, la comida y las costumbres', correct: true },
          { text: 'Solo en el deporte', correct: false },
          { text: 'No influyó en nada', correct: false }
        ]},
        { q: '¿Cuál es la idea principal del último párrafo?', options: [
          { text: 'Ya no existen gauchos, entonces no son importantes', correct: false },
          { text: 'El gaucho hoy es una idea y parte de la identidad argentina', correct: true },
          { text: 'Todos los argentinos son gauchos', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // MÉXICO READINGS — three pieces (Spanish 1 level, matches México deck)
    // ============================================================================

    // ---------- BEGINNER MÉXICO STORY — the market ----------
    {
      id: 'mexico-mercado',
      kind: 'story', level: 'beginner',
      title: 'El <em>mercado</em>',
      author: 'Original · El Pueblo · 🇲🇽 México',
      year: '',
      attribution: '',
      preview: 'Me llamo Sofía. Vivo en México. Los sábados, mi madre y yo vamos al mercado…',
      text: [
        'Me llamo Sofía. Tengo doce años. Vivo en una ciudad en México.',
        'Los sábados en la mañana, mi madre y yo vamos al mercado. El mercado es muy grande y colorido.',
        'En el mercado, venden de todo: frutas, verduras, maíz y chiles. También venden artesanías muy bonitas.',
        'Mi madre compra comida para preparar la cena. A mí me gusta el maíz. Comemos tortillas todos los días.',
        'A veces hay música en el mercado. Los mariachis cantan canciones tradicionales. La música es muy alegre.',
        'Me gusta mucho el mercado. Es un lugar especial para mi familia.'
      ],
      gloss: {
        'el mercado': 'the market',
        'colorido': 'colorful',
        'venden': 'they sell',
        'maíz': 'corn',
        'chiles': 'chili peppers',
        'artesanías': 'handicrafts',
        'preparar': 'to prepare',
        'todos los días': 'every day',
        'mariachis': 'mariachi musicians',
        'alegre': 'lively / cheerful'
      },
      quiz: [
        { q: '¿Cuándo va Sofía al mercado?', options: [
          { text: 'Los sábados en la mañana', correct: true },
          { text: 'Los domingos por la noche', correct: false },
          { text: 'Todos los días', correct: false }
        ]},
        { q: '¿Qué venden en el mercado?', options: [
          { text: 'Solo ropa', correct: false },
          { text: 'Frutas, verduras, maíz, chiles y artesanías', correct: true },
          { text: 'Solo música', correct: false }
        ]},
        { q: '¿Qué come la familia todos los días?', options: [
          { text: 'Pan', correct: false },
          { text: 'Tortillas', correct: true },
          { text: 'Arroz', correct: false }
        ]},
        { q: '¿Quiénes cantan en el mercado?', options: [
          { text: 'Los mariachis', correct: true },
          { text: 'Los profesores', correct: false },
          { text: 'Los turistas', correct: false }
        ]}
      ]
    },

    // ---------- BEGINNER-PLUS MÉXICO STORY — a festival ----------
    {
      id: 'mexico-fiesta',
      kind: 'story', level: 'beginner',
      title: 'Una <em>fiesta</em> tradicional',
      author: 'Original · El Pueblo · 🇲🇽 México',
      year: '',
      attribution: '',
      preview: 'En México hay muchas fiestas. Mi familia celebra muchas tradiciones…',
      text: [
        'En México hay muchas fiestas tradicionales. A mi familia le gusta celebrar.',
        'Para una fiesta, mi madre y mi abuela cocinan toda la mañana. Preparan comida tradicional: tacos, tamales y mole. La comida es deliciosa.',
        'Mi padre decora la casa con cosas coloridas. Mis hermanos y yo ayudamos también. Trabajamos juntos.',
        'Por la tarde, viene toda la familia. Comemos, hablamos y escuchamos música. A veces hay mariachis.',
        'Los niños rompen una piñata. Adentro hay dulces y caramelos. ¡Es muy divertido!',
        'Me encantan las fiestas con mi familia. Son alegres y especiales. Celebramos juntos con frecuencia.'
      ],
      gloss: {
        'celebrar': 'to celebrate',
        'cocinan': 'they cook',
        'mole': 'a traditional sauce',
        'deliciosa': 'delicious',
        'decora': 'decorates',
        'coloridas': 'colorful',
        'ayudamos': 'we help',
        'juntos': 'together',
        'rompen': 'they break',
        'dulces': 'sweets / candy',
        'divertido': 'fun',
        'con frecuencia': 'frequently'
      },
      quiz: [
        { q: '¿Quiénes cocinan para la fiesta?', options: [
          { text: 'El padre y los hermanos', correct: false },
          { text: 'La madre y la abuela', correct: true },
          { text: 'Solo los niños', correct: false }
        ]},
        { q: '¿Qué comida preparan?', options: [
          { text: 'Tacos, tamales y mole', correct: true },
          { text: 'Pizza y pasta', correct: false },
          { text: 'Solo dulces', correct: false }
        ]},
        { q: '¿Qué hay adentro de la piñata?', options: [
          { text: 'Juguetes', correct: false },
          { text: 'Dulces y caramelos', correct: true },
          { text: 'Frutas', correct: false }
        ]},
        { q: '¿Cómo describe el narrador las fiestas?', options: [
          { text: 'Aburridas y tristes', correct: false },
          { text: 'Alegres y especiales', correct: true },
          { text: 'Cortas y silenciosas', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE MÉXICO STORY — a country of contrasts ----------
    {
      id: 'mexico-pais',
      kind: 'story', level: 'intermediate',
      title: 'México: un país de <em>contrastes</em>',
      author: 'Original · El Pueblo · 🇲🇽 México',
      year: '',
      attribution: '',
      preview: 'México es un país grande y diverso. Tiene ciudades enormes, pueblos pequeños, playas y desiertos…',
      text: [
        'México es un país grande y muy diverso. Tiene ciudades enormes, pueblos pequeños, playas, montañas y desiertos.',
        'La Ciudad de México es la capital. Es una de las ciudades más grandes del mundo. En el centro hay edificios históricos y mercados muy animados. La ciudad combina tradiciones antiguas con la vida moderna.',
        'En el norte de México está la frontera con los Estados Unidos. Muchas personas trabajan cerca de la frontera y muchas familias tienen miembros en los dos países. Es una región muy importante.',
        'La comida mexicana es famosa en todo el mundo. El maíz y el chile son ingredientes básicos. Cada región tiene sus platos típicos. El mole, los tacos y los tamales son solo algunos ejemplos.',
        'La cultura mexicana es rica y colorida. La música tradicional, como el mariachi, es originaria del estado de Jalisco. Las artesanías y las fiestas son muy importantes para la identidad del país.',
        'México no es solo un lugar; es muchas cosas a la vez. Por eso, mucha gente dice que México es un país de contrastes.'
      ],
      gloss: {
        'diverso': 'diverse',
        'enormes': 'enormous',
        'desiertos': 'deserts',
        'edificios históricos': 'historic buildings',
        'animados': 'lively',
        'combina': 'combines',
        'la frontera': 'the border',
        'miembros': 'members',
        'ingredientes básicos': 'basic ingredients',
        'platos típicos': 'typical dishes',
        'originaria de': 'originating from',
        'identidad': 'identity',
        'a la vez': 'at the same time',
        'contrastes': 'contrasts'
      },
      quiz: [
        { q: '¿Cómo describe el texto a México?', options: [
          { text: 'Un país pequeño y simple', correct: false },
          { text: 'Un país grande y diverso', correct: true },
          { text: 'Un país sin ciudades', correct: false }
        ]},
        { q: '¿Qué hay en el norte de México?', options: [
          { text: 'La frontera con los Estados Unidos', correct: true },
          { text: 'La capital', correct: false },
          { text: 'Solo playas', correct: false }
        ]},
        { q: '¿Cuáles son ingredientes básicos de la comida mexicana?', options: [
          { text: 'El maíz y el chile', correct: true },
          { text: 'El arroz y el pan', correct: false },
          { text: 'La papa y el trigo', correct: false }
        ]},
        { q: 'Según el texto, ¿de dónde es originario el mariachi?', options: [
          { text: 'De la Ciudad de México', correct: false },
          { text: 'Del estado de Jalisco', correct: true },
          { text: 'De la frontera', correct: false }
        ]},
        { q: '¿Por qué dicen que México es "un país de contrastes"?', options: [
          { text: 'Porque es muy pequeño', correct: false },
          { text: 'Porque combina muchas cosas diferentes a la vez', correct: true },
          { text: 'Porque no tiene cultura', correct: false }
        ]}
      ]
    },

    // ============================================================================
    // COLOMBIA READINGS — three pieces (Spanish 2 level, matches Colombia deck)
    // ============================================================================

    // ---------- BEGINNER COLOMBIA STORY — coffee in the mountains ----------
    {
      id: 'colombia-cafe',
      kind: 'story', level: 'beginner',
      title: 'El <em>café</em> de mi familia',
      author: 'Original · El Pueblo · 🇨🇴 Colombia',
      year: '',
      attribution: '',
      preview: 'Me llamo Andrés. Mi familia tiene una finca de café en las montañas de Colombia…',
      text: [
        'Me llamo Andrés. Tengo trece años. Vivo en Colombia, en las montañas.',
        'Mi familia tiene una finca pequeña. En la finca cultivamos café. El café crece bien en este clima.',
        'Las montañas son muy verdes. La tierra es fértil. Mi padre dice que el café necesita las montañas para crecer bien.',
        'En la temporada de cosecha, todos ayudamos. Cosechamos los granos a mano. Es mucho trabajo, pero es importante.',
        'Después, mi familia vende el café. Colombia exporta café a muchos países. Es famoso en todo el mundo.',
        'Estoy orgulloso de la finca de mi familia. El café es parte de nuestra cultura.'
      ],
      gloss: {
        'la finca': 'farm / coffee estate',
        'cultivamos': 'we grow',
        'crece': 'grows',
        'fértil': 'fertile',
        'temporada de cosecha': 'harvest season',
        'cosechamos': 'we harvest',
        'a mano': 'by hand',
        'exporta': 'exports',
        'orgulloso': 'proud'
      },
      quiz: [
        { q: '¿Dónde vive Andrés?', options: [
          { text: 'En la playa', correct: false },
          { text: 'En las montañas', correct: true },
          { text: 'En la selva', correct: false }
        ]},
        { q: '¿Qué cultivan en la finca?', options: [
          { text: 'Flores', correct: false },
          { text: 'Café', correct: true },
          { text: 'Maíz', correct: false }
        ]},
        { q: '¿Cómo cosechan los granos?', options: [
          { text: 'Con máquinas grandes', correct: false },
          { text: 'A mano', correct: true },
          { text: 'No los cosechan', correct: false }
        ]},
        { q: '¿Qué hace Colombia con el café?', options: [
          { text: 'Lo exporta a muchos países', correct: true },
          { text: 'Lo guarda en casa', correct: false },
          { text: 'No produce mucho café', correct: false }
        ]}
      ]
    },

    // ---------- INTERMEDIATE COLOMBIA STORY — the diverse geography ----------
    {
      id: 'colombia-paisaje',
      kind: 'story', level: 'intermediate',
      title: 'Colombia: un país <em>diverso</em>',
      author: 'Original · El Pueblo · 🇨🇴 Colombia',
      year: '',
      attribution: '',
      preview: 'Colombia es un país muy diverso. Tiene dos costas, montañas, bosques y muchos ríos…',
      text: [
        'Colombia es un país muy diverso. A diferencia de muchos países, Colombia tiene dos costas: una en el océano Atlántico y otra en el océano Pacífico.',
        'En el centro del país están las montañas. Los Andes cruzan Colombia y forman tres cordilleras. En estas montañas hay muchas fincas de café. El clima de las montañas es perfecto para cultivar los granos.',
        'En el norte está la costa caribeña. El clima allí es muy cálido. La música tradicional de esa región es el vallenato y la cumbia. Las playas son muy bonitas y reciben muchos turistas.',
        'En el sur hay bosques tropicales y mucha biodiversidad. Colombia es uno de los países con más biodiversidad del mundo. Hay miles de especies de aves, plantas y animales que no existen en otros lugares.',
        'Además, Colombia es famosa por sus flores. Gracias al clima diverso, los campesinos pueden cultivar muchos tipos de flores y exportarlas a otros países.',
        'Por todas estas razones, Colombia es un país sorprendente. Cada región tiene su propio clima, su propia música y su propia cultura.'
      ],
      gloss: {
        'a diferencia de': 'unlike',
        'cordilleras': 'mountain ranges',
        'fincas': 'farms',
        'cálido': 'warm',
        'el vallenato': 'a Colombian music genre',
        'la cumbia': 'a Colombian music & dance',
        'reciben': 'they receive',
        'bosques tropicales': 'tropical forests',
        'biodiversidad': 'biodiversity',
        'especies': 'species',
        'aves': 'birds',
        'gracias a': 'thanks to',
        'exportarlas': 'to export them',
        'sorprendente': 'surprising'
      },
      quiz: [
        { q: 'Según el texto, ¿qué hace especial la geografía de Colombia?', options: [
          { text: 'Solo tiene playas', correct: false },
          { text: 'Tiene dos costas, una en el Atlántico y otra en el Pacífico', correct: true },
          { text: 'No tiene montañas', correct: false }
        ]},
        { q: '¿Dónde están las fincas de café?', options: [
          { text: 'En la costa caribeña', correct: false },
          { text: 'En los bosques del sur', correct: false },
          { text: 'En las montañas del centro', correct: true }
        ]},
        { q: '¿Qué música es típica de la costa caribeña?', options: [
          { text: 'El vallenato y la cumbia', correct: true },
          { text: 'El flamenco', correct: false },
          { text: 'El tango', correct: false }
        ]},
        { q: 'Según el texto, ¿qué hay en el sur de Colombia?', options: [
          { text: 'Desiertos', correct: false },
          { text: 'Bosques tropicales y mucha biodiversidad', correct: true },
          { text: 'Solo ciudades grandes', correct: false }
        ]},
        { q: '¿Por qué Colombia puede cultivar muchos tipos de flores?', options: [
          { text: 'Gracias a su clima diverso', correct: true },
          { text: 'Porque solo hay un tipo de clima', correct: false },
          { text: 'Porque no tiene montañas', correct: false }
        ]}
      ]
    },

    // ---------- ADVANCED COLOMBIA READING — biodiversity ----------
    {
      id: 'colombia-biodiversidad',
      kind: 'story', level: 'advanced',
      title: 'La <em>biodiversidad</em> de Colombia',
      author: 'Original · El Pueblo · 🇨🇴 Colombia',
      year: '',
      attribution: '',
      preview: 'Pocos países en el mundo tienen tanta biodiversidad como Colombia. Pero, ¿por qué?',
      text: [
        'Pocos países en el mundo tienen tanta biodiversidad como Colombia. De hecho, Colombia ocupa el segundo lugar mundial en número de especies de plantas y animales. Pero, ¿por qué?',
        'La respuesta tiene que ver con la geografía del país. Colombia tiene una combinación única de climas y paisajes: montañas, costas en dos océanos, bosques tropicales, ríos enormes y hasta una pequeña parte de la selva amazónica. Cada uno de estos lugares es el hogar de diferentes especies.',
        'Por ejemplo, en Colombia viven más de mil novecientas especies de aves. Eso es más que en cualquier otro país del mundo. También hay miles de especies de mariposas, peces, plantas y árboles que no existen en otros lugares.',
        'Además, Colombia tiene una larga tradición de respeto por la naturaleza. Muchas comunidades indígenas viven en armonía con los bosques y los ríos desde hace siglos. Hoy en día, el gobierno y muchas organizaciones trabajan para proteger los parques naturales y la fauna del país.',
        'Sin embargo, la biodiversidad colombiana también enfrenta problemas. La deforestación, la agricultura intensiva y el cambio climático ponen en peligro a muchas especies. Por eso, proteger la naturaleza es un tema muy importante para el país.',
        'Para los colombianos, la biodiversidad es más que un dato científico; es una parte fundamental de su identidad. Es una riqueza que vale la pena proteger para las futuras generaciones.'
      ],
      gloss: {
        'tanta… como': 'as much… as',
        'de hecho': 'in fact',
        'ocupa el segundo lugar': 'ranks second',
        'tiene que ver con': 'has to do with',
        'única': 'unique',
        'el hogar de': 'home to',
        'mil novecientas': 'one thousand nine hundred',
        'aves': 'birds',
        'mariposas': 'butterflies',
        'comunidades indígenas': 'indigenous communities',
        'en armonía con': 'in harmony with',
        'desde hace siglos': 'for centuries',
        'el gobierno': 'the government',
        'fauna': 'wildlife',
        'sin embargo': 'however',
        'enfrenta': 'faces',
        'deforestación': 'deforestation',
        'ponen en peligro': 'endanger',
        'identidad': 'identity',
        'riqueza': 'wealth / treasure',
        'vale la pena': 'is worth it'
      },
      quiz: [
        { q: 'Según el texto, ¿qué lugar ocupa Colombia en biodiversidad mundial?', options: [
          { text: 'Primero', correct: false },
          { text: 'Segundo', correct: true },
          { text: 'Décimo', correct: false }
        ]},
        { q: '¿Cuál es la razón principal de tanta biodiversidad?', options: [
          { text: 'Su tamaño pequeño', correct: false },
          { text: 'Su combinación única de climas y paisajes', correct: true },
          { text: 'Solo sus playas', correct: false }
        ]},
        { q: 'Según el texto, ¿qué tipo de animal tiene Colombia más que cualquier otro país?', options: [
          { text: 'Aves', correct: true },
          { text: 'Insectos', correct: false },
          { text: 'Peces', correct: false }
        ]},
        { q: '¿Qué problemas amenazan la biodiversidad?', options: [
          { text: 'La deforestación, la agricultura intensiva y el cambio climático', correct: true },
          { text: 'Solo el turismo', correct: false },
          { text: 'No hay ningún problema', correct: false }
        ]},
        { q: '¿Cuál es la idea principal del último párrafo?', options: [
          { text: 'La biodiversidad no es importante', correct: false },
          { text: 'La biodiversidad es parte de la identidad colombiana y vale la pena proteger', correct: true },
          { text: 'Solo los científicos deben proteger la naturaleza', correct: false }
        ]}
      ]
    }
  ];

  function getReadingReward(level) {
    return level === 'beginner' ? 5 : level === 'intermediate' ? 10 : 20;
  }

  function getReadingBonus(level) {
    return level === 'beginner' ? 5 : level === 'intermediate' ? 10 : 20;
  }

  let readingFilter = 'all';

  function filterReadings(filter, btn) {
    readingFilter = filter;
    document.querySelectorAll('#lectura .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderReadingLibrary();
  }

  function renderReadingLibrary() {
    const grid = document.getElementById('readingGrid');
    if (!grid) return;
    let filtered = READINGS;
    if (readingFilter === 'beginner' || readingFilter === 'intermediate' || readingFilter === 'advanced') {
      filtered = READINGS.filter(r => r.level === readingFilter);
    } else if (readingFilter === 'story' || readingFilter === 'poem' || readingFilter === 'spotlight') {
      filtered = READINGS.filter(r => r.kind === readingFilter);
    }
    if (!STATE.completedReadings) STATE.completedReadings = {};
    grid.innerHTML = filtered.map(r => {
      const completion = STATE.completedReadings[r.id];
      const completed = completion && completion.score >= r.quiz.length;
      const reward = getReadingReward(r.level);
      const bonus = getReadingBonus(r.level);
      const totalReward = (reward * r.quiz.length) + bonus;
      const levelLabel = r.level.charAt(0).toUpperCase() + r.level.slice(1);
      return `
        <a href="#/reading/${r.id}" class="reading-card ${completed ? 'completed' : ''}">
          <div class="reading-meta">
            <span>${r.kind === 'story' ? '📖 Story' : r.kind === 'poem' ? '🪶 Poem' : '👤 Author spotlight'}</span>
            <span class="level-pill ${r.level}">${levelLabel}</span>
          </div>
          <h3>${r.title}</h3>
          <div class="author">${r.author}${r.year ? ' · ' + r.year : ''}</div>
          <div class="preview">${r.preview}</div>
          <div class="reward">
            <span>${completed ? 'Completed' : 'Not started'}</span>
            <span class="reward-amount">up to ${totalReward} L</span>
          </div>
        </a>
      `;
    }).join('');
  }

  let currentReading = null;
  let currentReadingAnswers = []; // tracks which questions student got right this attempt

  function renderReadingDetail(readingId) {
    const reading = READINGS.find(r => r.id === readingId);
    const container = document.getElementById('reading-detail-content');
    if (!reading) {
      container.innerHTML = '<p style="color: var(--ink-soft); padding: 24px 0;">Reading not found. <a href="#/lectura">Back to library</a></p>';
      return;
    }
    currentReading = reading;
    currentReadingAnswers = new Array(reading.quiz.length).fill(null);

    // Render the passage with glossed words
    let textHtml;
    if (reading.kind === 'poem') {
      textHtml = reading.text.map(stanza => {
        // For poems, preserve line breaks as <br>
        return '<p>' + processGloss(stanza, reading.gloss).replace(/\n/g, '<br>') + '</p>';
      }).join('');
    } else if (reading.kind === 'spotlight') {
      // Author spotlights are biographical English text — process markdown-style *italics* for book titles
      textHtml = reading.text.map(p => {
        const processed = p.replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        return '<p>' + processed + '</p>';
      }).join('');
    } else {
      textHtml = reading.text.map(p => '<p>' + processGloss(p, reading.gloss) + '</p>').join('');
    }

    const reward = getReadingReward(reading.level);
    const bonus = getReadingBonus(reading.level);
    const levelLabel = reading.level.charAt(0).toUpperCase() + reading.level.slice(1);
    const kindLabel = reading.kind === 'story' ? 'story' : reading.kind === 'poem' ? 'poem' : 'author spotlight';

    const hn = reading.historyNote;
    const historyHtml = hn ? `
      <div class="reading-history-note">
        <div class="rhn-head">📜 ${hn.heading}</div>
        <p class="rhn-intro">${hn.intro}</p>
        <table class="rhn-table">
          <thead><tr><th>Entonces (Siglo de Oro)</th><th>Hoy</th><th>English</th></tr></thead>
          <tbody>
            ${hn.examples.map(e => `<tr><td><em>${e.old}</em></td><td>${e.modern}</td><td>${e.en}</td></tr>`).join('')}
          </tbody>
        </table>
        ${hn.outro ? `<p class="rhn-outro">${hn.outro}</p>` : ''}
      </div>` : '';

    const quizHtml = reading.quiz.map((q, i) => `
      <div class="quiz-q" data-qidx="${i}">
        <div class="quiz-q-label">Question ${String(i+1).padStart(2,'0')}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `
            <button class="quiz-opt" data-correct="${opt.correct}" onclick="answerReadingQuiz(this, ${i}, ${oi})">${opt.text}</button>
          `).join('')}
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="reading-passage-card ${reading.kind === 'poem' ? 'poem' : ''} ${reading.kind === 'spotlight' ? 'spotlight' : ''}">
        <h2>${reading.title}</h2>
        <div class="author-line">${reading.author}${reading.year ? ' · ' + reading.year : ''}</div>
        <div class="meta-line">${levelLabel} ${kindLabel}${reading.attribution ? ' · ' + reading.attribution : ''}${reading.kind !== 'spotlight' ? ' · Hover red words for translations' : ''}</div>
        <div class="text-body">${textHtml}</div>
        ${historyHtml}
      </div>
      <div class="reading-quiz-card">
        <h4>${reading.kind === 'spotlight' ? 'Check your understanding' : 'Comprehension'}</h4>
        <div class="quiz-intro">Earn ${reward} Lucas per correct answer · ${bonus} Luca bonus for a perfect score</div>
        ${quizHtml}
        <div id="reading-completion-banner"></div>
      </div>
    `;
  }

  function processGloss(text, glossDict) {
    // Handle inline glosses like __gloss__word__translation__
    text = text.replace(/__gloss__(.+?)__(.+?)__/g, (m, word, translation) => {
      return `<span class="gloss" data-gloss="${escapeHtml(translation)}">${word}</span>`;
    });
    // Auto-gloss any words from the gloss dictionary
    if (glossDict) {
      Object.keys(glossDict).forEach(word => {
        const regex = new RegExp('\\b(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'g');
        text = text.replace(regex, (m, w) => {
          // Don't double-wrap
          if (text.indexOf('<span class="gloss"') > -1 && text.indexOf(w, text.indexOf('<span')) > -1) return w;
          return `<span class="gloss" data-gloss="${escapeHtml(glossDict[word])}">${w}</span>`;
        });
      });
    }
    return text;
  }

  function answerReadingQuiz(btn, qIdx, oIdx) {
    if (!currentReading) return;
    if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
    if (currentReadingAnswers[qIdx] !== null) return; // already answered
    const isCorrect = btn.dataset.correct === 'true';
    const siblings = btn.parentElement.querySelectorAll('.quiz-opt');
    siblings.forEach(s => s.disabled = true);
    currentReadingAnswers[qIdx] = isCorrect;
    const reward = getReadingReward(currentReading.level);

    // Check whether this reading has already been completed (if so, no rewards)
    if (!STATE.completedReadings) STATE.completedReadings = {};
    const previouslyCompleted = STATE.completedReadings[currentReading.id];
    const alreadyMaxed = previouslyCompleted && previouslyCompleted.score >= currentReading.quiz.length;

    if (isCorrect) {
      btn.classList.add('correct');
      STATE.quizCorrect = (STATE.quizCorrect || 0) + 1;
      if (!alreadyMaxed) {
        awardCoins(reward, currentReading.title.replace(/<[^>]+>/g, '') + ' — correct!');
      }
    } else {
      btn.classList.add('wrong');
      siblings.forEach(s => { if (s.dataset.correct === 'true') s.classList.add('correct'); });
    }

    // Check if all questions answered
    if (currentReadingAnswers.every(a => a !== null)) {
      const score = currentReadingAnswers.filter(a => a).length;
      const total = currentReadingAnswers.length;
      const banner = document.getElementById('reading-completion-banner');
      const bonus = getReadingBonus(currentReading.level);

      // Save best score
      const prev = STATE.completedReadings[currentReading.id];
      if (!prev || score > prev.score) {
        STATE.completedReadings[currentReading.id] = { score, total, completedAt: new Date().toISOString() };
      }

      // Award perfect-score bonus only if not previously perfect
      if (score === total && !alreadyMaxed) {
        awardCoins(bonus, 'Perfect score! ' + currentReading.title.replace(/<[^>]+>/g, ''));
      }

      banner.innerHTML = `
        <div class="reading-completion-banner">
          <span class="coin-icon"></span>
          <div>
            <div style="font-family: 'DM Serif Display', serif; font-size: 22px; font-style: italic; color: var(--ocre);">${score} / ${total}</div>
            <div style="color: rgba(244,237,224,0.8); font-size: 14px; margin-top: 2px;">
              ${alreadyMaxed
                ? 'Already completed — no new Lucas this time, but great review!'
                : score === total
                  ? `Perfect! Earned ${(reward * total) + bonus} Lucas total.`
                  : `Earned ${reward * score} Lucas.`}
            </div>
          </div>
        </div>
      `;
      saveState();
    }
  }

  // Keep old answerQuiz function as a no-op stub (the original reading section is gone)
  function answerQuiz() {}

