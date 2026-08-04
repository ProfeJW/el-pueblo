  /* ============== DEPORTES — NATIONAL SPORTS STARS ============== */
  // Per nation: its defining sport, all-time legends, current stars, rising talent,
  // and an optional line for secondary sports / US-Latino diaspora figures.
  const SPORTS_STARS = [
    { code: 'AR', sport: '⚽ Fútbol',
      legends: ['<strong>Diego Maradona</strong> — captain and genius of the 1986 World Cup title', '<strong>Lionel Messi</strong> — 8 Balones de Oro, 2022 World Cup champion, the most decorated player ever', '<strong>Alfredo Di Stéfano</strong> — engine of the great Real Madrid of the 1950s', '<strong>Gabriel Batistuta</strong> — Batigol, all-time great No. 9'],
      current: ['<strong>Julián Álvarez</strong>', '<strong>Lautaro Martínez</strong>', '<strong>Emiliano «Dibu» Martínez</strong> — the penalty-saving keeper of Qatar 2022', '<strong>Enzo Fernández</strong>'],
      rising: ['<strong>Franco Mastantuono</strong> — signed by Real Madrid as a teenager', '<strong>Claudio Echeverri</strong>'],
      other: '🏀 Básquet: <strong>Manu Ginóbili</strong> — 4 NBA rings with the Spurs and Olympic gold 2004.' },
    { code: 'BO', sport: '⚽ Fútbol',
      legends: ['<strong>Marco «El Diablo» Etcheverry</strong> — icon of the USA-94 World Cup team', '<strong>Erwin «Platiní» Sánchez</strong> — first Bolivian to score at a World Cup'],
      current: ['<strong>Carlos Lampe</strong> — veteran wall in goal'],
      rising: ['<strong>Miguel «Miguelito» Terceros</strong> — the great hope of La Verde'],
      other: '🎾 Raquetbol: <strong>Conrrado Moscoso</strong> — world champion. And at 3,600 m, the Hernando Siles in La Paz is the highest fortress in world fútbol.' },
    { code: 'CL', sport: '⚽ Fútbol',
      legends: ['<strong>Elías Figueroa</strong> — three-time South American player of the year', '<strong>Iván Zamorano</strong> — Bam Bam', '<strong>Marcelo Salas</strong> — el Matador'],
      current: ['<strong>Alexis Sánchez</strong> — all-time top scorer, hero of the back-to-back Copa América titles (2015, 2016)', '<strong>Arturo Vidal</strong> — el Rey'],
      rising: ['<strong>Darío Osorio</strong>', '<strong>Lucas Cepeda</strong>'],
      other: '🎾 Tenis: <strong>Marcelo Ríos</strong> — world No. 1 in 1998; <strong>Nicolás Massú</strong> — double Olympic gold in Athens 2004.' },
    { code: 'CO', sport: '⚽ Fútbol',
      legends: ['<strong>Carlos Valderrama</strong> — el Pibe, the golden mane of the 90s', '<strong>René Higuita</strong> — inventor of the scorpion kick', '<strong>Radamel Falcao</strong> — el Tigre'],
      current: ['<strong>Luis Díaz</strong> — Liverpool and Bayern star', '<strong>James Rodríguez</strong> — golden boot of Brasil 2014', '<strong>Linda Caicedo</strong> — Real Madrid forward, global star of the women\'s game at 21'],
      rising: [],
      other: '🚴 Ciclismo: <strong>Egan Bernal</strong> — first Latin American to win the Tour de France (2019); <strong>Nairo Quintana</strong> — Giro and Vuelta champion.' },
    { code: 'CR', sport: '⚽ Fútbol',
      legends: ['<strong>Keylor Navas</strong> — three straight Champions League titles with Real Madrid', '<strong>Paulo Wanchope</strong>', '<strong>Bryan Ruiz</strong> — captain of the historic 2014 quarter-final run'],
      current: ['<strong>Manfred Ugalde</strong>'],
      rising: [],
      other: '🏊 Natación: <strong>Claudia Poll</strong> — first Olympic gold for Costa Rica (Atlanta 96); 🏄 surf: <strong>Brisa Hennessy</strong>.' },
    { code: 'CU', sport: '⚾ Béisbol · 🥊 Boxeo',
      legends: ['<strong>Minnie Miñoso</strong> — Hall of Famer, first Black Cuban superstar in MLB', '<strong>Luis Tiant</strong> — legendary pitcher', '<strong>Teófilo Stevenson</strong> — 3 Olympic boxing golds, refused millions to stay amateur', '<strong>Félix Savón</strong> — 3 more Olympic golds'],
      current: ['<strong>Yordan Álvarez</strong> — feared Astros slugger', '<strong>Luis Robert Jr.</strong>'],
      rising: [],
      other: '🤼 Lucha: <strong>Mijaín López</strong> — five straight Olympic golds in Greco-Roman wrestling, a record in any sport.' },
    { code: 'DO', sport: '⚾ Béisbol',
      legends: ['<strong>Juan Marichal</strong> — first Dominican in the Hall of Fame', '<strong>Pedro Martínez</strong> — three Cy Youngs, maybe the best pitcher of his era', '<strong>David Ortiz</strong> — Big Papi, Boston legend', '<strong>Sammy Sosa</strong>'],
      current: ['<strong>Juan Soto</strong> — record 765-million-dollar contract with the Mets', '<strong>Vladimir Guerrero Jr.</strong>', '<strong>Fernando Tatis Jr.</strong>'],
      rising: ['<strong>Elly De La Cruz</strong> — the most electric player in baseball'],
      other: '🏃 Atletismo: <strong>Marileidy Paulino</strong> — Olympic 400m champion (París 2024); 🏀 NBA: <strong>Al Horford</strong> — first Dominican NBA champion.' },
    { code: 'EC', sport: '⚽ Fútbol',
      legends: ['<strong>Alberto Spencer</strong> — all-time top scorer of the Copa Libertadores', '<strong>Antonio Valencia</strong> — Manchester United captain', '<strong>Agustín Delgado</strong>'],
      current: ['<strong>Moisés Caicedo</strong> — anchor of Chelsea\'s midfield', '<strong>Piero Hincapié</strong>'],
      rising: ['<strong>Kendry Páez</strong> — signed by Chelsea at 16'],
      other: '🚴 Ciclismo: <strong>Richard Carapaz</strong> — Giro 2019 and Olympic gold 2021; 🏃 marcha: <strong>Jefferson Pérez</strong> — first Ecuadorian Olympic gold (1996).' },
    { code: 'SV', sport: '⚽ Fútbol',
      legends: ['<strong>Jorge «Mágico» González</strong> — the wizard of Cádiz; many call him the most gifted player CONCACAF has ever produced. The national stadium bears his name.'],
      current: [],
      rising: [],
      other: '🏄 Surf City: El Salvador now hosts world surfing championships on its Pacific coast.' },
    { code: 'ES', sport: '⚽ Fútbol',
      legends: ['<strong>Andrés Iniesta</strong> — scored the goal that won the 2010 World Cup', '<strong>Xavi Hernández</strong> — brain of tiki-taka', '<strong>Iker Casillas</strong> — San Iker', '<strong>Raúl</strong> — Real Madrid icon'],
      current: ['<strong>Rodri</strong> — Balón de Oro 2024', '<strong>Pedri</strong>', '<strong>Aitana Bonmatí</strong> — back-to-back Balón de Oro in the women\'s game'],
      rising: ['<strong>Lamine Yamal</strong> — Euro 2024 champion as a teenager', '<strong>Pau Cubarsí</strong>'],
      other: '🎾 Tenis: <strong>Rafa Nadal</strong> (22 Grand Slams) and <strong>Carlos Alcaraz</strong>; 🏎️ F1: <strong>Fernando Alonso</strong>; 🏀 básquet: <strong>Pau Gasol</strong>.' },
    { code: 'GQ', sport: '⚽ Fútbol',
      legends: ['<strong>Genoveva Añonma</strong> — icon of African women\'s fútbol, led the Nzalang Femenino to two continental titles'],
      current: ['<strong>Emilio Nsue</strong> — top scorer of the 2024 Africa Cup of Nations'],
      rising: [],
      other: '' },
    { code: 'GT', sport: '⚽ Fútbol',
      legends: ['<strong>Carlos «El Pescado» Ruiz</strong> — 39 World Cup qualifying goals, the most by any player from any country'],
      current: ['<strong>Óscar Santis</strong>'],
      rising: [],
      other: '🏃 Marcha: <strong>Erick Barrondo</strong> — first Olympic medal in the history of Guatemala (silver, London 2012).' },
    { code: 'HN', sport: '⚽ Fútbol',
      legends: ['<strong>Carlos Pavón</strong> — all-time top scorer of La H', '<strong>David Suazo</strong> — la Pantera, Serie A star', '<strong>Amado Guevara</strong>'],
      current: ['<strong>Anthony «Choco» Lozano</strong>', '<strong>Alberth Elis</strong>'],
      rising: [],
      other: '' },
    { code: 'MX', sport: '⚽ Fútbol · 🥊 Boxeo',
      legends: ['<strong>Hugo Sánchez</strong> — 5 Pichichis, king of Real Madrid in the 80s', '<strong>Rafael Márquez</strong> — captain at 5 World Cups', '<strong>Cuauhtémoc Blanco</strong>', '<strong>Jorge Campos</strong> — the flamboyant keeper'],
      current: ['<strong>Santiago Giménez</strong>', '<strong>Edson Álvarez</strong>', '<strong>Raúl Jiménez</strong>'],
      rising: ['<strong>Gilberto Mora</strong> — teenage playmaker already starring for El Tri'],
      other: '🥊 Boxing is religion: <strong>Julio César Chávez</strong> (all-time) and <strong>Canelo Álvarez</strong> (today); ⚾ béisbol: <strong>Fernando Valenzuela</strong> and the Fernandomanía; 🇺🇸 diáspora: <strong>Oscar De La Hoya</strong>, Mexican-American Olympic gold medalist.' },
    { code: 'NI', sport: '⚾ Béisbol · 🥊 Boxeo',
      legends: ['<strong>Dennis Martínez</strong> — «El Presidente», first Nicaraguan in MLB and author of a perfect game (1991); the national stadium bears his name', '<strong>Alexis Argüello</strong> — three-division world boxing champion and national hero'],
      current: ['<strong>Jonathan Loáisiga</strong> — Yankees reliever'],
      rising: [],
      other: '' },
    { code: 'PA', sport: '⚾ Béisbol · ⚽ Fútbol',
      legends: ['<strong>Mariano Rivera</strong> — greatest closer ever, first unanimous Hall of Fame vote', '<strong>Rod Carew</strong> — 7 batting titles', '<strong>Roberto «Manos de Piedra» Durán</strong> — boxing legend across four divisions'],
      current: ['<strong>Adalberto «Coco» Carrasquilla</strong> — midfield motor of La Marea Roja'],
      rising: [],
      other: '⚽ Panamá qualified for the 2026 World Cup — only the second in its history.' },
    { code: 'PY', sport: '⚽ Fútbol',
      legends: ['<strong>José Luis Chilavert</strong> — the goal-scoring goalkeeper (free kicks and penalties!)', '<strong>Roque Santa Cruz</strong> — record appearances for La Albirroja'],
      current: ['<strong>Miguel Almirón</strong>', '<strong>Antonio Sanabria</strong>'],
      rising: ['<strong>Julio Enciso</strong>', '<strong>Diego León</strong> — signed by Manchester United'],
      other: '⚽ La Albirroja returns to the World Cup in 2026 after 16 years away.' },
    { code: 'PE', sport: '⚽ Fútbol',
      legends: ['<strong>Teófilo Cubillas</strong> — 10 World Cup goals, the great No. 10', '<strong>Paolo Guerrero</strong> — all-time top scorer', '<strong>Claudio Pizarro</strong> — Bundesliga great'],
      current: ['<strong>Luis Advíncula</strong>', '<strong>Renato Tapia</strong>'],
      rising: [],
      other: '🏄 Surf: <strong>Sofía Mulánovich</strong> — world champion 2004; 🏃 marcha: <strong>Kimberly García</strong> — double world gold 2022; 🏐 the 1988 Olympic silver volleyball team is national lore.' },
    { code: 'PR', sport: '⚾ Béisbol · 🥊 Boxeo',
      legends: ['<strong>Roberto Clemente</strong> — 3,000 hits and a humanitarian death that made him a saint of the game', '<strong>Iván «Pudge» Rodríguez</strong> — Hall of Fame catcher', '<strong>Félix «Tito» Trinidad</strong> and <strong>Miguel Cotto</strong> — boxing royalty'],
      current: ['<strong>Francisco Lindor</strong>', '<strong>Carlos Correa</strong>'],
      rising: [],
      other: '🎾 Tenis: <strong>Mónica Puig</strong> — first Olympic gold for Puerto Rico (Río 2016); 🏀 básquet: <strong>Carlos Arroyo</strong> and the famous 2004 win over the US Dream Team.' },
    { code: 'UY', sport: '⚽ Fútbol',
      legends: ['<strong>Obdulio Varela</strong> — captain of the Maracanazo (1950)', '<strong>Enzo Francescoli</strong> — el Príncipe', '<strong>Luis Suárez</strong> — all-time top scorer', '<strong>Diego Forlán</strong> — best player of the 2010 World Cup'],
      current: ['<strong>Federico Valverde</strong> — Real Madrid engine', '<strong>Darwin Núñez</strong>', '<strong>Ronald Araújo</strong>'],
      rising: [],
      other: '🏆 Two World Cups (1930, 1950) and a record 15 Copas América — with 3.5 million people, the most titles per capita on Earth.' },
    { code: 'VE', sport: '⚾ Béisbol',
      legends: ['<strong>Luis Aparicio</strong> — the only Venezuelan in the Hall of Fame', '<strong>Miguel Cabrera</strong> — Triple Crown 2012, 500 home runs and 3,000 hits', '<strong>Johan Santana</strong> — two Cy Youngs', '<strong>Omar Vizquel</strong> — 11 Gold Gloves'],
      current: ['<strong>Ronald Acuña Jr.</strong> — MVP 2023, first 40-homer / 70-steal season ever', '<strong>José Altuve</strong>', '<strong>Luis Arráez</strong> — three straight batting titles'],
      rising: ['<strong>Jackson Chourio</strong> — 82-million-dollar contract as a teenager'],
      other: '⚽ Fútbol: <strong>Salomón Rondón</strong> — all-time scorer of La Vinotinto; <strong>Deyna Castellanos</strong> — pioneer of the women\'s game.' }
  ];

  function renderDeportes() {
    const grid = document.getElementById('deportesGrid');
    const tabs = document.getElementById('deportesTabs');
    if (!grid) return;

    const availableCodes = SPORTS_STARS.map(s => s.code);
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    const toShow = mundoCountryFilter === 'all'
      ? SPORTS_STARS
      : SPORTS_STARS.filter(s => s.code === mundoCountryFilter);

    if (toShow.length === 0) {
      grid.innerHTML = `<div class="mundo-empty">No sports data yet for the selected country.</div>`;
      return;
    }

    const tier = (icon, label, items) => (items && items.length)
      ? `<div class="sp-tier"><div class="sp-tier-label">${icon} ${label}</div><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`
      : '';

    grid.innerHTML = toShow.map(s => {
      const c = COUNTRIES.find(x => x.code === s.code);
      const flag = FLAGS[s.code] || '';
      return `
        <div class="sport-card">
          <div class="sp-head"><span class="sp-flag">${flag}</span><div><h4>${c ? c.name : s.code}</h4><div class="sp-sport">${s.sport}</div></div></div>
          ${tier('🏆', 'Leyendas', s.legends)}
          ${tier('⭐', 'Estrellas de hoy', s.current)}
          ${tier('🌱', 'Promesas', s.rising)}
          ${s.other ? `<div class="sp-other">${s.other}</div>` : ''}
        </div>
      `;
    }).join('');
  }
