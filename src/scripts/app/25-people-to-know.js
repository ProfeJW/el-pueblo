  /* ============== PEOPLE TO KNOW ============== */
  // Internationally famous figures from Spanish-speaking countries.
  // Photos sourced from Wikimedia Commons (public domain or freely licensed).
  // role: brief one-line tag · blurb: 1-2 sentence bio
  const PEOPLE = [
    // ARGENTINA
    { name: 'Lionel Messi', country: 'AR', role: 'Footballer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/400px-Lionel_Messi_20180626.jpg', blurb: 'One of the greatest soccer players in history. Won the 2022 World Cup with Argentina and 8 Ballon d\'Or awards.', credit: 'Кирилл Венедиктов / CC BY-SA' },
    { name: 'Jorge Luis Borges', country: 'AR', role: 'Writer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jorge_Luis_Borges_1976.jpg/400px-Jorge_Luis_Borges_1976.jpg', blurb: 'Master of short fiction and labyrinthine narratives. His stories shaped modern literature worldwide.', credit: 'Wikimedia / Public Domain' },
    { name: 'Pope Francis', country: 'AR', role: 'Religious leader', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pope_Francis_in_March_2013.jpg/400px-Pope_Francis_in_March_2013.jpg', blurb: 'The first Latin American pope, leading the Catholic Church since 2013. Born Jorge Mario Bergoglio in Buenos Aires.', credit: 'Casa Rosada / CC BY-SA' },

    // SPAIN
    { name: 'Pablo Picasso', country: 'ES', role: 'Painter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pablo_picasso_1.jpg/400px-Pablo_picasso_1.jpg', blurb: 'Co-founder of Cubism and one of the most influential artists of the 20th century. Painted Guernica in 1937.', credit: 'Wikimedia / Public Domain' },
    { name: 'Penélope Cruz', country: 'ES', role: 'Actor', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Pen%C3%A9lope_Cruz_2017.jpg/400px-Pen%C3%A9lope_Cruz_2017.jpg', blurb: 'Oscar-winning actress known for collaborations with Pedro Almodóvar. First Spanish woman to win Best Supporting Actress.', credit: 'Georges Biard / CC BY-SA' },
    { name: 'Rafael Nadal', country: 'ES', role: 'Tennis player', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Rafael_Nadal_%2851434563421%29.jpg/400px-Rafael_Nadal_%2851434563421%29.jpg', blurb: 'One of the greatest tennis players ever. 22 Grand Slam titles, including a record 14 French Open championships.', credit: 'si.robi / CC BY-SA' },

    // MEXICO
    { name: 'Frida Kahlo', country: 'MX', role: 'Painter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/400px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg', blurb: 'Painter of intensely personal self-portraits exploring identity, pain, and Mexican culture. Cultural icon worldwide.', credit: 'Guillermo Kahlo / Public Domain' },
    { name: 'Guillermo del Toro', country: 'MX', role: 'Filmmaker', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Guillermo_del_Toro-2017.jpg/400px-Guillermo_del_Toro-2017.jpg', blurb: 'Oscar-winning director of Pan\'s Labyrinth, The Shape of Water, and Pinocchio. Master of dark fantasy.', credit: 'Gage Skidmore / CC BY-SA' },
    { name: 'Salma Hayek', country: 'MX', role: 'Actor', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Salma_Hayek_-_2018.jpg/400px-Salma_Hayek_-_2018.jpg', blurb: 'Oscar-nominated actress and producer who broke barriers for Latina actresses in Hollywood.', credit: 'Georges Biard / CC BY-SA' },

    // COLOMBIA
    { name: 'Shakira', country: 'CO', role: 'Singer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shakira_-_Rock_in_Rio_Madrid_2010_-_18.jpg/400px-Shakira_-_Rock_in_Rio_Madrid_2010_-_18.jpg', blurb: 'Global pop icon and Colombian superstar. Hips Don\'t Lie, Waka Waka — billions of streams worldwide.', credit: 'Jaguar MENA / CC BY' },
    { name: 'Gabriel García Márquez', country: 'CO', role: 'Writer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Gabriel_Garcia_Marquez.jpg/400px-Gabriel_Garcia_Marquez.jpg', blurb: 'Nobel laureate who pioneered "magical realism." Wrote One Hundred Years of Solitude — the most influential Spanish-language novel of the 20th century.', credit: 'Festival Internacional de Cine en Guadalajara / CC BY 2.0' },

    // CHILE
    { name: 'Pablo Neruda', country: 'CL', role: 'Poet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pablo_Neruda.jpg/400px-Pablo_Neruda.jpg', blurb: 'Nobel laureate. His love poems and political verse made him one of the most read poets in any language.', credit: 'Wikimedia / Public Domain' },
    { name: 'Isabel Allende', country: 'CL', role: 'Novelist', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Isabel_Allende_-_001.jpg/400px-Isabel_Allende_-_001.jpg', blurb: 'Most widely read Spanish-language author alive. Wrote The House of the Spirits and Eva Luna.', credit: 'Lesekreis / Public Domain' },

    // PERU
    { name: 'Mario Vargas Llosa', country: 'PE', role: 'Writer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vargas_Llosa_Madrid_2009.jpg/400px-Vargas_Llosa_Madrid_2009.jpg', blurb: 'Nobel laureate (2010) and one of the leading novelists of the Latin American Boom. Author of The Time of the Hero.', credit: 'Daniele Devoti / CC BY 2.0' },

    // CUBA
    { name: 'Celia Cruz', country: 'CU', role: 'Singer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Celia_Cruz_1955.jpg/400px-Celia_Cruz_1955.jpg', blurb: 'The "Queen of Salsa." Her booming voice and shout of "¡Azúcar!" defined Latin music for decades.', credit: 'Wikimedia / Public Domain' },

    // PUERTO RICO
    { name: 'Bad Bunny', country: 'PR', role: 'Musician', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bad_Bunny_at_the_2019_Coachella_Festival.jpg/400px-Bad_Bunny_at_the_2019_Coachella_Festival.jpg', blurb: 'The most-streamed artist on Spotify three years running. Made reggaeton and Latin trap mainstream globally.', credit: 'Stephen J. Cohen / CC BY-SA' },
    { name: 'Rita Moreno', country: 'PR', role: 'Actor', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rita_Moreno_2010.jpg/400px-Rita_Moreno_2010.jpg', blurb: 'EGOT winner (Emmy, Grammy, Oscar, Tony) — one of the few people in history to achieve this. Star of West Side Story.', credit: 'Iampatricio / CC BY-SA' },

    // DOMINICAN REPUBLIC
    { name: 'Juan Luis Guerra', country: 'DO', role: 'Singer-songwriter', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Juan_Luis_Guerra_2010.jpg/400px-Juan_Luis_Guerra_2010.jpg', blurb: 'Brought merengue and bachata to global audiences. Multi-Grammy winner with poetic, socially conscious lyrics.', credit: 'José Lage / CC BY 2.0' },
    { name: 'Oscar de la Renta', country: 'DO', role: 'Fashion designer', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Oscar_de_la_Renta_in_New_York_City_in_2008.jpg/400px-Oscar_de_la_Renta_in_New_York_City_in_2008.jpg', blurb: 'Legendary couturier who dressed first ladies, queens, and Hollywood royalty for half a century.', credit: 'Ed Kavishe / CC BY-SA' },

    // VENEZUELA
    { name: 'Simón Bolívar', country: 'VE', role: 'Liberator', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bol%C3%ADvar_pintado_en_1825_por_Jos%C3%A9_Gil_de_Castro.jpg/400px-Bol%C3%ADvar_pintado_en_1825_por_Jos%C3%A9_Gil_de_Castro.jpg', blurb: '19th-century leader who liberated six countries from Spanish rule: Venezuela, Colombia, Ecuador, Panama, Peru, and Bolivia.', credit: 'José Gil de Castro / Public Domain' },

    // Added 2026-06 — broader country coverage
    { name: 'Pablo Neruda', country: 'CL', role: 'Poet', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pablo_Neruda_1963.jpg', blurb: 'Nobel Prize winner (1971) and one of the most influential poets of the 20th century. Wrote love sonnets and political odes.', credit: 'Wikimedia / Public Domain' },
    { name: 'Gabriela Mistral', country: 'CL', role: 'Poet', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gabriela_Mistral_1945.jpg', blurb: 'First Latin American to win the Nobel Prize in Literature (1945). Rural teacher turned diplomat.', credit: 'Wikimedia / Public Domain' },
    { name: 'Isabel Allende', country: 'CL', role: 'Novelist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Isabel_Allende_-_001.jpg', blurb: 'Best-selling Chilean novelist. The House of the Spirits launched magical realism into a new generation.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Violeta Parra', country: 'CL', role: 'Folk singer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Violeta_Parra.jpg', blurb: 'Founder of the Nueva Canción Chilena movement. Her song Gracias a la vida became a Latin American anthem.', credit: 'Wikimedia / Public Domain' },
    { name: 'José Mujica', country: 'UY', role: 'Former president', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jose_Mujica_2_de_marzo_2010.jpg', blurb: 'Former guerrilla turned president (2010-2015). Famous for giving away 90% of his salary and driving a 1987 Volkswagen Beetle.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Eduardo Galeano', country: 'UY', role: 'Writer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eduardo_Galeano_-_001.jpg', blurb: 'Author of Open Veins of Latin America — a sweeping history of Latin American exploitation that became required reading across the continent.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Roberto Clemente', country: 'PR', role: 'Baseball legend', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/RobertoClemente1965FlamingoHilton.jpg', blurb: 'First Latin American inducted into the MLB Hall of Fame. Died in 1972 delivering earthquake relief to Nicaragua.', credit: 'Wikimedia / Public Domain' },
    { name: 'Lin-Manuel Miranda', country: 'PR', role: 'Composer · Actor', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lin-Manuel_Miranda_2018.jpg', blurb: 'Creator of Hamilton and In the Heights. Pulitzer Prize and 11 Tonys for redefining American musical theater.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Bad Bunny', country: 'PR', role: 'Musician', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bad_Bunny_in_Boston_2023.jpg', blurb: 'Reggaetón superstar (Benito Antonio Martínez Ocasio). The most-streamed artist on Spotify multiple years in a row.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Rita Moreno', country: 'PR', role: 'Actor', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rita_Moreno_in_2018.jpg', blurb: 'One of only 19 people to win the EGOT (Emmy, Grammy, Oscar, Tony). Star of West Side Story.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Rigoberta Menchú', country: 'GT', role: 'Activist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rigoberta_Menchu_2009.jpg', blurb: 'Maya K\'iche\' activist. Won the 1992 Nobel Peace Prize for documenting indigenous resistance during Guatemala\'s civil war.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Óscar Romero', country: 'SV', role: 'Archbishop · Saint', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oscar_Romero.jpg', blurb: 'Archbishop assassinated in 1980 for defending the poor during El Salvador\'s civil war. Canonized in 2018.', credit: 'Wikimedia / Public Domain' },
    { name: 'Diego Maradona', country: 'AR', role: 'Footballer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maradona-Mundial_86_con_la_copa.JPG', blurb: 'Led Argentina to the 1986 World Cup. Famous for the Hand of God goal and the Goal of the Century in the same match.', credit: 'Wikimedia / Public Domain' },
    { name: 'Eva Perón', country: 'AR', role: 'First Lady', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eva_Peron_color.jpg', blurb: 'Argentina\'s most iconic First Lady (1946-1952). Champion of the descamisados — the working class. Inspired Evita.', credit: 'Wikimedia / Public Domain' },
    { name: 'Salvador Dalí', country: 'ES', role: 'Painter', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Dalí_1939.jpg', blurb: 'Surrealist painter of melting clocks (The Persistence of Memory) and an outrageous public persona to match.', credit: 'Wikimedia / Public Domain' },
    { name: 'Federico García Lorca', country: 'ES', role: 'Poet · Playwright', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Federico_García_Lorca_(1932).jpg', blurb: 'The greatest Spanish poet of the 20th century. Murdered by Nationalist forces at the start of the Spanish Civil War in 1936.', credit: 'Wikimedia / Public Domain' },
    { name: 'Pedro Almodóvar', country: 'ES', role: 'Filmmaker', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pedro_Almodóvar_2017_(cropped).jpg', blurb: 'Spain\'s most famous director. Won two Oscars for films like All About My Mother and Talk to Her.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Diego Rivera', country: 'MX', role: 'Muralist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diego_Rivera_with_a_xoloitzcuintle_dog_in_the_Blue_House,_Coyoacan_-_Smithsonian_Archives_of_American_Art_-_Cropped.jpg', blurb: 'The father of Mexican muralism. Painted huge politically charged murals on the walls of public buildings. Frida Kahlo\'s husband.', credit: 'Wikimedia / Public Domain' },
    { name: 'Selena Quintanilla', country: 'MX', role: 'Musician', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Selena_in_white.jpg', blurb: 'The Queen of Tejano music. Murdered in 1995 at age 23, but remains one of the most influential Latina artists ever.', credit: 'Wikimedia / Public Domain' },
    { name: 'Mario Vargas Llosa', country: 'PE', role: 'Novelist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mario_Vargas_Llosa_(2011).jpg', blurb: 'Peruvian Nobel laureate (2010). His novels — La ciudad y los perros, La fiesta del Chivo — shaped the Latin American Boom.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Gabriel García Márquez', country: 'CO', role: 'Novelist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gabriel_Garcia_Marquez,_2009_(cropped).jpg', blurb: 'Nobel laureate (1982). Father of magical realism. Wrote One Hundred Years of Solitude — the most influential Latin American novel.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Shakira', country: 'CO', role: 'Musician', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shakira_(Cannes_2022).jpg', blurb: 'Colombian superstar from Barranquilla. Multiple Latin Grammys, Grammys, and Billboard Hot 100 #1s in two languages.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Fernando Botero', country: 'CO', role: 'Painter · Sculptor', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fernando_Botero_2009.jpg', blurb: 'Famous for painting people, animals, and objects in exaggerated, voluptuous proportions. A style now called Boterismo.', credit: 'Wikimedia / CC BY-SA' },

    // Added 2026-06 — coverage for the remaining countries (BO, CR, EC, GQ, HN, NI, PA, PY)
    // BOLIVIA
    { name: 'Evo Morales', country: 'BO', role: 'Former president', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Evo_Morales_2_(cropped).jpg', blurb: 'Bolivia\'s first Indigenous president (2006–2019). An Aymara former coca-growers\' union leader who reshaped the country before resigning amid the disputed 2019 election.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Jaime Escalante', country: 'BO', role: 'Educator', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jaime_Escalante.jpg', blurb: 'Bolivian-born math teacher whose work with struggling East L.A. students inspired the film Stand and Deliver (1988).', credit: 'Wikimedia / CC BY-SA' },

    // COSTA RICA
    { name: 'Óscar Arias', country: 'CR', role: 'Statesman', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Óscar_Arias_2009.jpg', blurb: 'President of Costa Rica who won the 1987 Nobel Peace Prize for his plan to end Central America\'s civil wars.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Keylor Navas', country: 'CR', role: 'Footballer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Keylor_Navas_2018.jpg', blurb: 'Star goalkeeper who won three consecutive Champions League titles with Real Madrid — Costa Rica\'s most famous footballer.', credit: 'Wikimedia / CC BY-SA' },

    // ECUADOR
    { name: 'Oswaldo Guayasamín', country: 'EC', role: 'Painter', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oswaldo_Guayasamín.jpg', blurb: 'Ecuador\'s most celebrated painter. His anguished portraits protested poverty, war, and injustice across Latin America.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Antonio Valencia', country: 'EC', role: 'Footballer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Antonio_Valencia_2018.jpg', blurb: 'Winger and right-back who captained both Manchester United and Ecuador\'s national team.', credit: 'Wikimedia / CC BY-SA' },

    // EQUATORIAL GUINEA
    { name: 'Donato Ndongo', country: 'GQ', role: 'Writer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Donato_Ndongo.jpg', blurb: 'Equatorial Guinea\'s best-known writer and historian, author of Shadows of Your Black Memory. Long exiled for opposing the dictatorship.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Eric Moussambani', country: 'GQ', role: 'Olympic swimmer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eric_Moussambani.jpg', blurb: 'Swimmer nicknamed "Eric the Eel" after his slow but heroic 100m freestyle at the 2000 Sydney Olympics — a global symbol of the Olympic spirit.', credit: 'Wikimedia / CC BY-SA' },

    // HONDURAS
    { name: 'David Suazo', country: 'HN', role: 'Footballer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/David_Suazo.jpg', blurb: 'Honduras\'s most successful footballer, a prolific striker in Italy\'s Serie A with Cagliari and Inter Milan.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Salvador Moncada', country: 'HN', role: 'Scientist', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Moncada.jpg', blurb: 'Honduran-born pharmacologist whose research on nitric oxide and how aspirin works made him one of the world\'s most-cited scientists.', credit: 'Wikimedia / CC BY-SA' },

    // NICARAGUA
    { name: 'Rubén Darío', country: 'NI', role: 'Poet', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ruben_dario.jpg', blurb: 'Nicaraguan poet who founded Modernismo and transformed poetry in the Spanish language. Revered as the "Prince of Castilian Letters."', credit: 'Wikimedia / Public Domain' },
    { name: 'Gioconda Belli', country: 'NI', role: 'Writer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gioconda_Belli_2016.jpg', blurb: 'Nicaraguan poet and novelist, and former Sandinista revolutionary, known for The Inhabited Woman and her award-winning verse.', credit: 'Wikimedia / CC BY-SA' },

    // PANAMA
    { name: 'Rubén Blades', country: 'PA', role: 'Singer · Actor', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rubén_Blades_2014.jpg', blurb: 'Panamanian salsa legend, actor, and former presidential candidate who turned dance music into political storytelling.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Mariano Rivera', country: 'PA', role: 'Baseball legend', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mariano_Rivera_2017.jpg', blurb: 'Panamanian pitcher regarded as the greatest closer in baseball history — and the first player ever elected to the Hall of Fame unanimously.', credit: 'Wikimedia / CC BY-SA' },

    // PARAGUAY
    { name: 'Augusto Roa Bastos', country: 'PY', role: 'Writer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Augusto_Roa_Bastos.jpg', blurb: 'Paraguay\'s greatest writer, author of the dictator-novel Yo el Supremo. Won the Cervantes Prize, the top honor in Spanish-language literature.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Roque Santa Cruz', country: 'PY', role: 'Footballer', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Roque_Santa_Cruz_2016.jpg', blurb: 'Paraguay\'s record-appearance footballer, a striker for Bayern Munich, Manchester City, and the national team.', credit: 'Wikimedia / CC BY-SA' }
  ];


  // ============== HISTORIA INDEX ==============
  // Lightweight country metadata for the Historia hub. The full event content
  // lives in historia.js (lazy-loaded). This index lets the hub page render
  // immediately and remain usable even if historia.js fails to load.
  // To regenerate: derive from historia.js HISTORIA array.
  const HISTORIA_INDEX = [
    { code: 'AR', name: 'Argentina',     events: 10, blurb: 'Perón, dictatorship, Falklands, Maradona, Mafalda.' },
    { code: 'BO', name: 'Bolivia',       events: 6,  blurb: 'Tiwanaku, Potosí silver, Evo Morales, and the 2019 crisis.' },
    { code: 'CL', name: 'Chile',         events: 5,  blurb: 'Allende, Pinochet, the 1988 NO, and the 2019 estallido.' },
    { code: 'CO', name: 'Colombia',      events: 9,  blurb: 'Bolívar, La Violencia, Pablo Escobar, the FARC peace.' },
    { code: 'CR', name: 'Costa Rica',    events: 6,  blurb: 'Coffee, abolishing the army in 1948, Óscar Arias, pura vida.' },
    { code: 'CU', name: 'Cuba',          events: 9,  blurb: 'Slavery, 1898, the Revolution, Bay of Pigs, the Special Period.' },
    { code: 'DO', name: 'Rep. Dominicana', events: 6, blurb: 'Santo Domingo, independence from Haiti, Trujillo, baseball.' },
    { code: 'EC', name: 'Ecuador',       events: 6,  blurb: 'Quito and the Inca, Pichincha, Amazon oil, the indigenous movement.' },
    { code: 'ES', name: 'España',        events: 10, blurb: 'Al-Andalus, the Inquisition, civil war, Franco, La Movida.' },
    { code: 'GQ', name: 'Guinea Ecuatorial', events: 6, blurb: 'Spanish colony in Africa, Macías\'s terror, Obiang, oil wealth.' },
    { code: 'GT', name: 'Guatemala',     events: 6,  blurb: 'The Maya, the 1954 US-backed coup, civil war, Rigoberta Menchú.' },
    { code: 'HN', name: 'Honduras',      events: 6,  blurb: 'Banana republics, the Soccer War, 2009 coup, the caravans.' },
    { code: 'MX', name: 'México',        events: 10, blurb: 'Aztec, Conquest, Independence, Revolution, NAFTA, narcoviolencia.' },
    { code: 'NI', name: 'Nicaragua',     events: 6,  blurb: 'William Walker, Sandino, the Somozas, the Revolution, Ortega.' },
    { code: 'PA', name: 'Panamá',        events: 6,  blurb: 'The treasure route, separation from Colombia, the Canal, Noriega.' },
    { code: 'PE', name: 'Perú',          events: 10, blurb: 'Inca, Conquest, Independence, Sendero Luminoso, Fujimori.' },
    { code: 'PR', name: 'Puerto Rico',   events: 6,  blurb: 'Taíno, 1898, Operation Bootstrap, María, the status question.' },
    { code: 'PY', name: 'Paraguay',      events: 6,  blurb: 'Jesuit Reductions, Francia, Triple Alliance, Stroessner.' },
    { code: 'SV', name: 'El Salvador',   events: 8,  blurb: 'Pipil, Romero, civil war, the maras, Bukele\'s mega-prison.' },
    { code: 'UY', name: 'Uruguay',       events: 6,  blurb: 'Artigas, Batlle, El Maracanazo, dictatorship, Mujica.' },
    { code: 'VE', name: 'Venezuela',     events: 6,  blurb: 'Bolívar, the oil era, Caracazo, Chávez, the exodus.' }
  ];

  // HISTORIA — historical content by country.
  // Each country has an arc-overview and a series of events with explanations.
  // English explanations (high school students need accessibility), with key Spanish
  // vocabulary integrated and highlighted in italics. Events ordered chronologically.
  let HISTORIA = (typeof window !== 'undefined' && window.HISTORIA) ? window.HISTORIA : [];

  // Lazy-loader for historia.js. Returns a Promise that resolves when HISTORIA
  // is populated. Re-fetches are no-ops (caches the loading promise).
  let __historiaLoadPromise = null;
  function loadHistoriaModule() {
    if (HISTORIA && HISTORIA.length > 0) return Promise.resolve();
    if (window.HISTORIA && window.HISTORIA.length > 0) {
      HISTORIA = window.HISTORIA;
      return Promise.resolve();
    }
    if (__historiaLoadPromise) return __historiaLoadPromise;
    __historiaLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'historia.js';
      script.async = true;
      script.onload = () => {
        HISTORIA = window.HISTORIA || [];
        resolve();
      };
      script.onerror = (err) => {
        console.error('Failed to load historia.js. Make sure it is uploaded alongside index.html.', err);
        __historiaLoadPromise = null;
        reject(err);
      };
      document.head.appendChild(script);
    });
    return __historiaLoadPromise;
  }

  function renderHistoriaHub() {
    const grid = document.getElementById('historiaHubGrid');
    if (!grid) return;
    // Use HISTORIA_INDEX (always available inline). If historia.js has loaded,
    // use its real event counts; otherwise fall back to the index counts.
    const lookup = {};
    if (HISTORIA && HISTORIA.length > 0) {
      HISTORIA.forEach(c => { lookup[c.country] = c.events.length; });
    }
    const sorted = HISTORIA_INDEX.slice().sort((a, b) => a.name.localeCompare(b.name));
    grid.innerHTML = sorted.map(c => {
      const code = c.code.toLowerCase();
      const events = lookup[c.code] || c.events;
      const flag = (typeof FLAGS !== 'undefined' && FLAGS[c.code]) ? FLAGS[c.code] : '';
      return `
        <a href="#/historia/${code}" class="historia-hub-card">
          <div class="historia-hub-card-top">
            <div class="historia-hub-flag">${flag}</div>
            <div>
              <div class="historia-hub-name">${c.name}</div>
              <div class="historia-hub-count">${events} event${events === 1 ? '' : 's'}</div>
            </div>
          </div>
          <div class="historia-hub-blurb">${c.blurb}</div>
        </a>
      `;
    }).join('');
    // Load historia.js in the background and refresh the counts ONCE when it
    // arrives. Only do this while the data is still missing — if HISTORIA is
    // already loaded, loadHistoriaModule() resolves synchronously and calling
    // renderHistoriaHub() again here would re-subscribe every pass, creating an
    // infinite render loop that locks up the page.
    if (!HISTORIA || HISTORIA.length === 0) {
      loadHistoriaModule().then(() => {
        if (HISTORIA && HISTORIA.length > 0) renderHistoriaHub();
      }).catch(() => {
        // Silent — the cards are still usable from HISTORIA_INDEX
      });
    }
  }

  // View toggle between grid (default) and map
  function setHistoriaView(view, btn) {
    document.querySelectorAll('.historia-view-toggle .pill').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const grid = document.getElementById('historiaHubGrid');
    const map = document.getElementById('historiaHubMap');
    if (view === 'map') {
      if (grid) grid.style.display = 'none';
      if (map) map.style.display = 'block';
      populateHistoriaMap();
    } else {
      if (grid) grid.style.display = 'grid';
      if (map) map.style.display = 'none';
    }
  }

  // Clone the existing map SVG into the historia hub container.
  // Click handlers navigate to /historia/{code} instead of triggering quiz logic.
  function populateHistoriaMap() {
    const container = document.getElementById('historiaMapContainer');
    const label = document.getElementById('historiaMapLabel');
    if (!container || container.querySelector('svg')) return; // already populated

    const source = document.querySelector('svg#hispanoMap, svg#mapQuizSvg, svg#capQuizSvg');
    if (!source) {
      container.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--ink-soft); font-style: italic; font-family: \'Fraunces\', serif;">Map view loading… try the list view if this doesn\'t appear.</div>';
      return;
    }

    const clone = source.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelectorAll('.capital-dot, .capital-label, .map-overlay').forEach(el => el.remove());

    const haveHistoria = new Set(HISTORIA_INDEX.map(c => c.code));
    const indexLookup = {};
    HISTORIA_INDEX.forEach(c => { indexLookup[c.code] = c; });

    const resetLabel = () => {
      if (!label) return;
      label.classList.remove('active');
      label.innerHTML = '&nbsp;';
    };

    // Floating tooltip that follows the cursor so the country name is always
    // visible right where the user is pointing (the label bar above the map can
    // be far from the cursor when hovering a country low on the map).
    container.style.position = 'relative';
    const tip = document.createElement('div');
    tip.className = 'historia-map-tip';
    container.appendChild(tip);
    const showTip = (name) => { tip.textContent = name; tip.classList.add('visible'); };
    const hideTip = () => { tip.classList.remove('visible'); };
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      tip.style.left = (e.clientX - rect.left) + 'px';
      tip.style.top = (e.clientY - rect.top) + 'px';
    });

    clone.querySelectorAll('.country-region').forEach(region => {
      const code = region.getAttribute('data-country');
      if (!code) return;
      const indexEntry = indexLookup[code];

      // Get the country name from the SVG's <title> child (always present)
      // or from the index entry as fallback
      const titleEl = region.querySelector('title');
      const countryName = (indexEntry && indexEntry.name) || (titleEl && titleEl.textContent) || code;

      if (!haveHistoria.has(code)) {
        // Faded — still hoverable for name, but not clickable
        region.style.opacity = '0.35';
        region.style.cursor = 'default';
        region.addEventListener('mouseenter', () => {
          if (label) { label.classList.remove('active'); label.textContent = countryName; }
          showTip(countryName);
        });
        region.addEventListener('mouseleave', () => { resetLabel(); hideTip(); });
        return;
      }

      // Clickable
      region.style.cursor = 'pointer';
      region.addEventListener('mouseenter', () => {
        if (label) { label.classList.add('active'); label.textContent = countryName; }
        showTip(countryName);
      });
      region.addEventListener('mouseleave', () => { resetLabel(); hideTip(); });
      region.addEventListener('click', () => {
        window.location.hash = '#/historia/' + code.toLowerCase();
      });
    });

    container.appendChild(clone);
  }

  function renderHistoriaCountry(code) {
    const container = document.getElementById('historiaCountryContent');
    if (!container) return;
    const upper = (code || '').toUpperCase();

    // If the full HISTORIA data isn't loaded, show a stub from HISTORIA_INDEX,
    // then quietly fetch historia.js and re-render once ready.
    if (!HISTORIA || HISTORIA.length === 0) {
      const indexEntry = HISTORIA_INDEX.find(c => c.code === upper);
      const flag = (typeof FLAGS !== 'undefined' && FLAGS[upper]) ? FLAGS[upper] : '';
      if (indexEntry) {
        container.innerHTML = `
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
            <div style="font-size: 56px;">${flag}</div>
            <div>
              <h2 style="font-family: 'DM Serif Display', serif; font-size: clamp(32px, 4vw, 48px); font-weight: 400; line-height: 1.05; margin: 0; color: var(--ink);">${indexEntry.name}</h2>
              <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-top: 6px;">${indexEntry.events} historical event${indexEntry.events === 1 ? '' : 's'}</div>
            </div>
          </div>
          <p style="font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.6; color: var(--ink); margin-bottom: 24px; font-style: italic; max-width: 760px;">${indexEntry.blurb}</p>
          <div style="padding: 14px 0; color: var(--ink-soft); font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; opacity: 0.7;">Loading timeline…</div>
        `;
      } else {
        container.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--ink-soft); font-family: \'Fraunces\', serif; font-style: italic;">No historia available for this country yet. <a href="#/historia" style="color: var(--rojo);">Back to Historia</a>.</div>';
      }
      loadHistoriaModule().then(() => renderHistoriaCountry(code)).catch(() => {
        if (indexEntry) {
          // Replace the loading message with a friendly note (no scary error)
          container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
              <div style="font-size: 56px;">${flag}</div>
              <div>
                <h2 style="font-family: 'DM Serif Display', serif; font-size: clamp(32px, 4vw, 48px); font-weight: 400; line-height: 1.05; margin: 0; color: var(--ink);">${indexEntry.name}</h2>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-top: 6px;">${indexEntry.events} historical event${indexEntry.events === 1 ? '' : 's'}</div>
              </div>
            </div>
            <p style="font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.6; color: var(--ink); margin-bottom: 24px; font-style: italic; max-width: 760px;">${indexEntry.blurb}</p>
            <div style="padding: 20px 0; color: var(--ink-soft); font-family: 'Fraunces', serif; font-style: italic; font-size: 14px;">
              Detailed events couldn't load. <a href="#/historia" style="color: var(--rojo);">Back to Historia</a>.
            </div>
          `;
        }
      });
      return;
    }
    // Full data is loaded — render properly
    const c = HISTORIA.find(x => x.country === upper);
    if (!c) {
      container.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--ink-soft); font-family: \'Fraunces\', serif; font-style: italic;">No historia available for this country yet. <a href="#/historia" style="color: var(--rojo);">Back to Historia</a>.</div>';
      return;
    }
    const eventsHtml = c.events.map((e, idx) => `
      <details class="historia-event" style="background: var(--paper); border: 1px solid var(--line); padding: 20px 24px; margin-bottom: 10px; border-radius: 4px;">
        <summary style="cursor: pointer; list-style: none; outline: none; display: flex; align-items: baseline; gap: 16px; padding: 0;">
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 600; color: var(--rojo); flex-shrink: 0; min-width: 90px;">${e.year}</span>
          <span style="font-family: 'Fraunces', serif; font-size: 18px; line-height: 1.3; color: var(--ink); font-weight: 500;">${e.title}</span>
        </summary>
        <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line);">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 10px;">En español: <em style="font-style: italic; text-transform: none; letter-spacing: 0; color: var(--rojo);">${e.spanish}</em></div>
          <div style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.65; color: var(--ink);">${e.body}</div>
          <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed var(--line);">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 8px;">Vocabulary to know:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${(e.vocab || []).map(v => '<span style="background: var(--ocre); color: var(--ink); padding: 3px 10px; border-radius: 3px; font-size: 13px; font-family: \'Fraunces\', serif;">' + v + '</span>').join('')}
            </div>
          </div>
          ${e.sources && e.sources.length ? `<div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--line); font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.05em; color: var(--ink-soft); opacity: 0.8;">Fuentes: ${e.sources.map((s, i) => `<a href="${s}" target="_blank" rel="noopener" style="color: var(--ink-soft);">[${i + 1}]</a>`).join(' ')}</div>` : ''}
        </div>
      </details>
    `).join('');

    const viewingHtml = c.furtherViewing && c.furtherViewing.length > 0 ? `
      <div style="margin-top: 24px; padding: 20px 24px; background: var(--card-bg); border-left: 4px solid var(--rojo); border-radius: 4px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 12px;">Para profundizar — films & documentaries:</div>
        <ul style="font-family: 'Fraunces', serif; font-size: 14px; line-height: 1.6; color: var(--ink); padding-left: 22px; margin: 0;">
          ${c.furtherViewing.map(f => '<li>' + f + '</li>').join('')}
        </ul>
      </div>
    ` : '';

    // La diáspora — where this country's emigrant communities live today,
    // worldwide and in the US. Data (sourced) lives in window.ELP_DIASPORA,
    // appended in historia.js. Rendered only when present for this country.
    const dia = (typeof window !== 'undefined' && window.ELP_DIASPORA) ? window.ELP_DIASPORA[c.country] : null;
    const diasporaHtml = dia && dia.hubs && dia.hubs.length ? `
      <div style="margin-top: 28px; padding: 22px 24px; background: var(--card-bg); border: 1px solid var(--line); border-radius: 4px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--rojo); margin-bottom: 10px;">La diáspora — where the community lives today</div>
        ${dia.blurb ? `<p style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.6; color: var(--ink); margin: 0 0 16px 0; max-width: 760px;">${dia.blurb}</p>` : ''}
        <div style="display: flex; flex-direction: column; gap: 11px;">
          ${dia.hubs.map(h => `
            <div style="display: flex; flex-wrap: wrap; gap: 8px 12px; align-items: baseline;">
              <span style="font-family: 'Fraunces', serif; font-weight: 600; font-size: 15px; color: var(--ink);">${h.place}</span>
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink); background: var(--ocre); padding: 2px 8px; border-radius: 3px;">${h.region}</span>
              <span style="flex: 1; min-width: 200px; font-family: 'Fraunces', serif; font-size: 14px; line-height: 1.5; color: var(--ink-soft);">${h.note}</span>
            </div>
          `).join('')}
        </div>
        ${dia.sources && dia.sources.length ? `<div style="margin-top: 16px; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.05em; color: var(--ink-soft); opacity: 0.75;">Sources: ${dia.sources.map((s, i) => `<a href="${s}" target="_blank" rel="noopener" style="color: var(--ink-soft);">[${i + 1}]</a>`).join(' ')}</div>` : ''}
      </div>
    ` : '';

    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
        <div style="font-size: 56px;">${FLAGS[c.country] || ''}</div>
        <div>
          <h2 style="font-family: 'DM Serif Display', serif; font-size: clamp(32px, 4vw, 48px); font-weight: 400; line-height: 1.05; margin: 0; color: var(--ink);">${c.countryName}</h2>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-top: 6px;">${c.events.length} historical event${c.events.length === 1 ? '' : 's'}</div>
        </div>
      </div>
      <p style="font-family: 'Fraunces', serif; font-size: 17px; line-height: 1.6; color: var(--ink); margin-bottom: 28px; font-style: italic; max-width: 760px;">${c.arc}</p>
      <div>
        ${eventsHtml}
      </div>
      ${viewingHtml}
      ${diasporaHtml}
    `;
  }

  // Kept as alias for backwards-compat (the historia trivia game still works via this name)
  function renderHistoria() { renderHistoriaHub(); }


  function renderPeople() {
    const grid = document.getElementById('peopleGrid');
    const tabs = document.getElementById('peopleTabs');
    if (!grid) return;

    const availableCodes = Array.from(new Set(PEOPLE.map(p => p.country)));
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    const peopleToShow = mundoCountryFilter === 'all'
      ? PEOPLE
      : PEOPLE.filter(p => p.country === mundoCountryFilter);

    if (peopleToShow.length === 0) {
      grid.innerHTML = `<div class="mundo-empty">No people from the selected country yet.</div>`;
      return;
    }

    grid.innerHTML = peopleToShow.map(p => {
      const flag = FLAGS[p.country] || '';
      const initials = (p.name || '?').split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('');
      const photoHtml = p.img
        ? `<img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling && (this.nextElementSibling.style.display='flex');"><div class="photo-fallback" style="display:none">${initials}</div>`
        : `<div class="photo-fallback">${initials}</div>`;
      return `
        <div class="person-card">
          <div class="person-photo">
            ${photoHtml}
            <div class="country-badge" title="${p.country}">${flag}</div>
          </div>
          <div class="person-info">
            <h4>${escapeHtml(p.name)}</h4>
            <div class="role">${escapeHtml(p.role || '')}</div>
            <div class="blurb">${p.blurb || ''}</div>
          </div>
        </div>
      `;
    }).join('');
  }

