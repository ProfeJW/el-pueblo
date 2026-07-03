  /* ============== MUNDO (Countries) ============== */
  // SVG flags — simplified geometric versions for performance.
  // Each flag is a pure SVG so no external images needed.
  const FLAGS = {
    AR: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#74acdf"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#74acdf"/><circle cx="4.5" cy="3" r="0.5" fill="#f6b40e" stroke="#85340a" stroke-width="0.05"/></svg>`,
    BO: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#d52b1e"/><rect y="2" width="9" height="2" fill="#f9e300"/><rect y="4" width="9" height="2" fill="#007934"/></svg>`,
    CL: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="3" fill="#fff"/><rect y="3" width="9" height="3" fill="#d52b1e"/><rect width="3" height="3" fill="#0039a6"/><polygon points="1.5,1 1.7,1.55 2.3,1.55 1.8,1.85 2,2.4 1.5,2.07 1,2.4 1.2,1.85 0.7,1.55 1.3,1.55" fill="#fff"/></svg>`,
    CO: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="3" fill="#fcd116"/><rect y="3" width="9" height="1.5" fill="#003893"/><rect y="4.5" width="9" height="1.5" fill="#ce1126"/></svg>`,
    CR: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="1" fill="#002b7f"/><rect y="1" width="9" height="1" fill="#fff"/><rect y="2" width="9" height="2" fill="#ce1126"/><rect y="4" width="9" height="1" fill="#fff"/><rect y="5" width="9" height="1" fill="#002b7f"/></svg>`,
    CU: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="1.2" fill="#002a8f"/><rect y="1.2" width="9" height="1.2" fill="#fff"/><rect y="2.4" width="9" height="1.2" fill="#002a8f"/><rect y="3.6" width="9" height="1.2" fill="#fff"/><rect y="4.8" width="9" height="1.2" fill="#002a8f"/><polygon points="0,0 3,3 0,6" fill="#cf142b"/><polygon points="0.6,3 1.05,2.55 1.5,3 1.05,3.45" fill="#fff"/></svg>`,
    DO: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="4.5" height="3" fill="#002d62"/><rect x="4.5" width="4.5" height="3" fill="#ce1126"/><rect y="3" width="4.5" height="3" fill="#ce1126"/><rect x="4.5" y="3" width="4.5" height="3" fill="#002d62"/><rect x="4.2" width="0.6" height="6" fill="#fff"/><rect y="2.7" width="9" height="0.6" fill="#fff"/></svg>`,
    EC: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="3" fill="#ffd100"/><rect y="3" width="9" height="1.5" fill="#0072ce"/><rect y="4.5" width="9" height="1.5" fill="#ef3340"/></svg>`,
    SV: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#0047ab"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#0047ab"/></svg>`,
    GQ: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#3e9a00"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#e32118"/><polygon points="0,0 2.5,3 0,6" fill="#0073ce"/></svg>`,
    GT: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="3" height="6" fill="#4997d0"/><rect x="3" width="3" height="6" fill="#fff"/><rect x="6" width="3" height="6" fill="#4997d0"/></svg>`,
    HN: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#0073cf"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#0073cf"/><circle cx="3" cy="3" r="0.3" fill="#0073cf"/><circle cx="4.5" cy="3" r="0.3" fill="#0073cf"/><circle cx="6" cy="3" r="0.3" fill="#0073cf"/><circle cx="3.75" cy="2.4" r="0.3" fill="#0073cf"/><circle cx="5.25" cy="2.4" r="0.3" fill="#0073cf"/></svg>`,
    MX: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="3" height="6" fill="#006847"/><rect x="3" width="3" height="6" fill="#fff"/><rect x="6" width="3" height="6" fill="#ce1126"/><circle cx="4.5" cy="3" r="0.7" fill="none" stroke="#8c6c40" stroke-width="0.08"/></svg>`,
    NI: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#0067c6"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#0067c6"/></svg>`,
    PA: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="4.5" height="3" fill="#fff"/><rect x="4.5" width="4.5" height="3" fill="#d21034"/><rect y="3" width="4.5" height="3" fill="#005293"/><rect x="4.5" y="3" width="4.5" height="3" fill="#fff"/><polygon points="2.25,1 2.5,1.65 3.2,1.65 2.6,2.05 2.85,2.7 2.25,2.3 1.65,2.7 1.9,2.05 1.3,1.65 2,1.65" fill="#005293"/><polygon points="6.75,4 7,4.65 7.7,4.65 7.1,5.05 7.35,5.7 6.75,5.3 6.15,5.7 6.4,5.05 5.8,4.65 6.5,4.65" fill="#d21034"/></svg>`,
    PY: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#d52b1e"/><rect y="2" width="9" height="2" fill="#fff"/><rect y="4" width="9" height="2" fill="#0038a8"/></svg>`,
    PE: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="3" height="6" fill="#d91023"/><rect x="3" width="3" height="6" fill="#fff"/><rect x="6" width="3" height="6" fill="#d91023"/></svg>`,
    PR: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="1.2" fill="#ed1c24"/><rect y="1.2" width="9" height="1.2" fill="#fff"/><rect y="2.4" width="9" height="1.2" fill="#ed1c24"/><rect y="3.6" width="9" height="1.2" fill="#fff"/><rect y="4.8" width="9" height="1.2" fill="#ed1c24"/><polygon points="0,0 3.5,3 0,6" fill="#0050a0"/><polygon points="0.7,3 1.2,2.5 1.7,3 1.2,3.5" fill="#fff"/></svg>`,
    ES: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="1.5" fill="#aa151b"/><rect y="1.5" width="9" height="3" fill="#f1bf00"/><rect y="4.5" width="9" height="1.5" fill="#aa151b"/></svg>`,
    UY: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="6" fill="#fff"/><rect y="0.67" width="9" height="0.67" fill="#0038a8"/><rect y="2" width="9" height="0.67" fill="#0038a8"/><rect y="3.33" width="9" height="0.67" fill="#0038a8"/><rect y="4.67" width="9" height="0.67" fill="#0038a8"/><rect width="3.6" height="3.33" fill="#fff"/><circle cx="1.8" cy="1.65" r="0.6" fill="#fcd116" stroke="#000" stroke-width="0.04"/></svg>`,
    VE: `<svg viewBox="0 0 9 6" preserveAspectRatio="none"><rect width="9" height="2" fill="#fcd116"/><rect y="2" width="9" height="2" fill="#0038a8"/><rect y="4" width="9" height="2" fill="#cf142b"/></svg>`
  };

  const COUNTRIES = [
    { code: 'AR', name: 'Argentina', capital: 'Buenos Aires', region: 'america', pop: '46M', currency: 'Peso', dish: 'Asado · Empanadas · Dulce de leche', figures: 'Borges · Maradona · Gardel · Messi', fact: 'Hogar del tango y de la mejor carne del mundo. La cordillera de los Andes y la Pampa marcan su paisaje.',
      geo: { climate: 'Stretches from subtropical north to subantarctic south. Buenos Aires is humid subtropical; Patagonia is cold and windy; the northwest is dry and warm.', topography: 'The Andes form the entire western border. The Pampa (vast grassland) covers the center. Patagonia\'s steppes and glaciers cover the south. Includes Aconcagua, the tallest mountain in the Americas (6,961 m).' } },
    { code: 'BO', name: 'Bolivia', capital: 'Sucre / La Paz', region: 'america', pop: '12M', currency: 'Boliviano', dish: 'Salteñas · Silpancho', figures: 'Evo Morales · Jaime Saenz', fact: 'Tiene el lago navegable más alto del mundo (Titicaca) y el salar de Uyuni, un desierto de sal espectacular.',
      geo: { climate: 'Varies dramatically with altitude. The high plateau (Altiplano) is cold and dry year-round; the Amazon lowlands are hot and humid; the valleys have a mild temperate climate.', topography: 'Two main Andean ranges enclose the Altiplano, a high plateau at ~3,800 m. Lake Titicaca sits at the border with Peru. The eastern lowlands are Amazon rainforest. Salar de Uyuni is the world\'s largest salt flat.' } },
    { code: 'CL', name: 'Chile', capital: 'Santiago', region: 'america', pop: '20M', currency: 'Peso chileno', dish: 'Empanadas · Pastel de choclo · Completos', figures: 'Pablo Neruda · Gabriela Mistral · Isabel Allende', fact: 'Un país largo y delgado con desierto, glaciares, y vino. Atacama es el desierto más seco del mundo.',
      geo: { climate: 'Every climate on Earth except polar. The north (Atacama) is the driest desert in the world; central Chile is Mediterranean (warm, dry summers); the south is rainy and cold; Patagonia is glacial.', topography: 'Long and thin: 4,300 km north-south, only 177 km wide on average. The Andes form the eastern wall; the Pacific coast runs the entire west. Includes deserts, fjords, glaciers, and Easter Island.' } },
    { code: 'CO', name: 'Colombia', capital: 'Bogotá', region: 'america', pop: '52M', currency: 'Peso colombiano', dish: 'Bandeja paisa · Arepas · Ajiaco', figures: 'Gabriel García Márquez · Shakira · Botero', fact: 'Cuna del realismo mágico y del mejor café del mundo. Único país sudamericano con costas en el Pacífico y el Caribe.',
      geo: { climate: 'Tropical year-round, but altitude creates "thermal floors" — hot at the coast, eternal spring at 2,500 m (Bogotá), cold above 3,000 m. No real seasons, only wet and dry periods.', topography: 'Three Andean ranges run north-south, dividing the country. Coastlines on both the Caribbean and Pacific. The east is Amazon rainforest and grasslands (los Llanos).' } },
    { code: 'CR', name: 'Costa Rica', capital: 'San José', region: 'america', pop: '5M', currency: 'Colón', dish: 'Gallo pinto · Casado', figures: 'Óscar Arias · Carmen Lyra', fact: 'Sin ejército desde 1948. Un cuarto del país son áreas protegidas. "Pura vida" es su lema nacional.',
      geo: { climate: 'Tropical, with wet (May–Nov) and dry (Dec–Apr) seasons. The central highlands are mild year-round; the coasts are hot and humid.', topography: 'A volcanic backbone runs the length of the country, with several active volcanoes. Coasts on both the Caribbean and Pacific. Cloud forests, beaches, and rainforest in a small area — one of the most biodiverse countries on Earth.' } },
    { code: 'CU', name: 'Cuba', capital: 'La Habana', region: 'caribe', pop: '11M', currency: 'Peso cubano', dish: 'Ropa vieja · Moros y cristianos · Tostones', figures: 'José Martí · Celia Cruz · Alejo Carpentier', fact: 'La isla más grande del Caribe. Cuna del son, la salsa, y los habanos. Su capital es un patrimonio mundial.',
      geo: { climate: 'Tropical, warm and humid year-round (avg. 25°C). Hurricane season runs June through November. Trade winds keep the coast pleasant.', topography: 'Mostly flat or gently rolling, with three mountain ranges (Sierra Maestra in the southeast is the highest). Long, thin island — 1,250 km east-to-west. White-sand beaches, mangroves, and fertile farmland.' } },
    { code: 'DO', name: 'República Dominicana', capital: 'Santo Domingo', region: 'caribe', pop: '11M', currency: 'Peso dominicano', dish: 'La bandera · Mangú · Sancocho', figures: 'Juan Luis Guerra · Julia Álvarez · Oscar de la Renta', fact: 'Cuna del merengue y la bachata. Santo Domingo fue la primera ciudad europea de América (1496).',
      geo: { climate: 'Tropical, warm year-round. Slightly cooler in the central mountains. Hurricane season June–November.', topography: 'Shares the island of Hispaniola with Haiti. Has the highest mountain in the Caribbean (Pico Duarte, 3,098 m) and the lowest point (Lake Enriquillo, below sea level). Beaches, mountains, and tropical forest.' } },
    { code: 'EC', name: 'Ecuador', capital: 'Quito', region: 'america', pop: '18M', currency: 'Dólar estadounidense', dish: 'Ceviche · Llapingachos · Encebollado', figures: 'Eloy Alfaro · Oswaldo Guayasamín', fact: 'Atravesado por la línea ecuatorial. Las Islas Galápagos inspiraron la teoría de la evolución de Darwin.',
      geo: { climate: 'Equatorial — but climate depends on altitude, not season. Quito (2,850 m) is mild year-round; the coast is hot and humid; the Amazon is tropical; the Galápagos are dry and breezy.', topography: 'Four distinct regions: the Pacific coast, the Andean Sierra (with active volcanoes like Cotopaxi), the Amazon basin (el Oriente), and the Galápagos Islands 1,000 km offshore.' } },
    { code: 'SV', name: 'El Salvador', capital: 'San Salvador', region: 'america', pop: '6M', currency: 'Dólar / Bitcoin', dish: 'Pupusas · Yuca frita', figures: 'Óscar Romero · Roque Dalton', fact: 'El país más pequeño de Centroamérica. Las pupusas son su plato nacional y patrimonio cultural.',
      geo: { climate: 'Tropical with two seasons: dry (Nov–Apr) and rainy (May–Oct). The highlands are pleasantly cooler than the coast.', topography: 'Smallest country in Central America. Two parallel mountain ranges of volcanoes (over 20 of them). Pacific coast only — no Caribbean side. Known as "the land of volcanoes."' } },
    { code: 'GQ', name: 'Guinea Ecuatorial', capital: 'Malabo', region: 'africa', pop: '1.6M', currency: 'Franco CFA', dish: 'Sopa de pescado · Plátano frito', figures: 'Donato Ndongo · Juan Tomás Ávila', fact: 'El único país hispanohablante de África. El español es lengua oficial junto al francés y el portugués.',
      geo: { climate: 'Equatorial — hot and very humid year-round. Two rainy seasons. One of the wettest countries in Africa.', topography: 'Two parts: a mainland portion in West Africa and Bioko Island (where the capital sits). The mainland is mostly tropical rainforest. Bioko has volcanic peaks rising over 3,000 m. Tiny country — only 28,000 sq km.' } },
    { code: 'GT', name: 'Guatemala', capital: 'Ciudad de Guatemala', region: 'america', pop: '18M', currency: 'Quetzal', dish: 'Pepián · Tamales · Kak\'ik', figures: 'Miguel Ángel Asturias · Rigoberta Menchú', fact: 'Cuna de la civilización maya. Tikal y Antigua Guatemala son patrimonios mundiales de la UNESCO.',
      geo: { climate: 'Mild "land of eternal spring" in the highlands; hot and humid in the lowlands. Wet season May–Oct, dry Nov–Apr.', topography: 'Mountainous interior with active volcanoes (Volcán de Fuego erupts regularly). Pacific and Caribbean coastlines. The Petén region in the north is dense lowland jungle, home to ancient Maya cities like Tikal.' } },
    { code: 'HN', name: 'Honduras', capital: 'Tegucigalpa', region: 'america', pop: '10M', currency: 'Lempira', dish: 'Baleadas · Plato típico hondureño', figures: 'Lempira · Ramón Amaya Amador', fact: 'Hogar de las ruinas mayas de Copán. Sus playas caribeñas son de las más bellas del mundo.',
      geo: { climate: 'Tropical on the coasts, temperate in the mountains. Caribbean side gets more rain. Hurricane risk on the Caribbean coast.', topography: 'Mostly mountainous (75%). Long Caribbean coast with the Bay Islands; small Pacific coast on the Gulf of Fonseca. Includes pristine cloud forests and the Mosquito Coast (la Mosquitia).' } },
    { code: 'MX', name: 'México', capital: 'Ciudad de México', region: 'america', pop: '128M', currency: 'Peso mexicano', dish: 'Tacos · Mole · Chiles en nogada · Pozole', figures: 'Frida Kahlo · Octavio Paz · Sor Juana · Diego Rivera', fact: 'El país con más hispanohablantes del mundo. Cuna de las civilizaciones azteca y maya. La CDMX está construida sobre un lago.',
      geo: { climate: 'Hugely varied: deserts in the north, tropical in the south, mild year-round in the central highlands. Mexico City sits at 2,240 m so it stays around 20°C most of the year.', topography: 'The Sierra Madre Occidental and Oriental flank the central plateau. Volcanic peaks rise above 5,000 m. Long coasts on the Pacific, Gulf of Mexico, and Caribbean. The Yucatán is flat tropical lowland; the north is desert (Sonoran, Chihuahuan).' } },
    { code: 'NI', name: 'Nicaragua', capital: 'Managua', region: 'america', pop: '7M', currency: 'Córdoba', dish: 'Gallo pinto · Nacatamal · Vigorón', figures: 'Rubén Darío · Ernesto Cardenal', fact: 'Tiene el lago más grande de Centroamérica con tiburones de agua dulce. Cuna del modernismo literario con Rubén Darío.',
      geo: { climate: 'Tropical, with hot lowlands and cooler highlands. Caribbean coast is much wetter than the Pacific side.', topography: 'Volcanic chain runs along the Pacific. Lake Nicaragua (Cocibolca) is the largest lake in Central America and contains volcanic islands and freshwater sharks. The Caribbean coast is sparsely populated rainforest.' } },
    { code: 'PA', name: 'Panamá', capital: 'Ciudad de Panamá', region: 'america', pop: '4.4M', currency: 'Balboa / Dólar', dish: 'Sancocho · Ropa vieja · Patacones', figures: 'Rubén Blades · Mariano Rivera', fact: 'El canal conecta dos océanos. Su moneda comparte valor con el dólar estadounidense.',
      geo: { climate: 'Tropical, hot and humid year-round. Wet season May–Dec; dry Jan–Apr. Caribbean side wetter than Pacific.', topography: 'A narrow S-shaped land bridge between North and South America. Mountainous spine with the highest peak (Volcán Barú, 3,475 m). Coastlines on both Caribbean and Pacific — only 80 km apart at the canal.' } },
    { code: 'PY', name: 'Paraguay', capital: 'Asunción', region: 'america', pop: '7M', currency: 'Guaraní', dish: 'Sopa paraguaya · Chipá · Mandi\'o', figures: 'Augusto Roa Bastos · José Asunción Flores', fact: 'País bilingüe oficial: español y guaraní. La "sopa paraguaya" es en realidad un pastel de maíz, no una sopa.',
      geo: { climate: 'Subtropical to tropical. Hot summers (often 35–40°C); mild winters. The Chaco (west) is much drier and hotter than the eastern region.', topography: 'Landlocked. The Paraguay River divides the country: fertile, populated east versus the dry, scrubby Chaco in the west. No mountains — mostly plains, low hills, and wetlands. Iguazú Falls is on the eastern border.' } },
    { code: 'PE', name: 'Perú', capital: 'Lima', region: 'america', pop: '34M', currency: 'Sol', dish: 'Ceviche · Lomo saltado · Ají de gallina', figures: 'Mario Vargas Llosa · César Vallejo · Inca Garcilaso', fact: 'Cuna del Imperio Inca y Machu Picchu. Su gastronomía es considerada una de las mejores del mundo.',
      geo: { climate: 'Three completely different climate zones: the coastal desert (Lima rarely sees rain), the Andean highlands (cool to cold, dry), and the Amazon (hot and rainy year-round).', topography: 'The Andes split Peru into three regions: la costa (narrow desert strip on the Pacific), la sierra (high Andes, including Cusco and Machu Picchu), and la selva (Amazon rainforest, covering 60% of the country). Lake Titicaca, the highest navigable lake, is on the Bolivian border.' } },
    { code: 'PR', name: 'Puerto Rico', capital: 'San Juan', region: 'caribe', pop: '3.2M', currency: 'Dólar', dish: 'Mofongo · Arroz con gandules · Lechón', figures: 'Julia de Burgos · Bad Bunny · Ricky Martin', fact: 'Estado libre asociado a EE.UU. Sus habitantes son ciudadanos estadounidenses pero la cultura es profundamente latina.',
      geo: { climate: 'Tropical marine — warm year-round (avg. 27°C). Trade winds keep the coast pleasant. Hurricane season June–November (María, 2017, was devastating).', topography: 'Mountainous interior (Cordillera Central) with the El Yunque rainforest on the east. Beaches around the entire coast. The smallest of the four Greater Antilles islands.' } },
    { code: 'ES', name: 'España', capital: 'Madrid', region: 'europa', pop: '48M', currency: 'Euro', dish: 'Paella · Tortilla · Jamón ibérico · Tapas', figures: 'Cervantes · Picasso · Lorca · Almodóvar', fact: 'Origen del idioma español. Cuna del flamenco y de Don Quijote, la novela moderna por excelencia.',
      geo: { climate: 'Mediterranean on the south and east coasts; oceanic and rainy in the north (Galicia, Basque Country); semi-arid in the central plateau and southeast. Madrid has cold winters and very hot summers.', topography: 'Diverse: the central Meseta plateau (where Madrid sits), the Pyrenees mountains in the north (border with France), the Sierra Nevada in the south, the Mediterranean coast, the Atlantic coast, and the Canary Islands off Africa.' } },
    { code: 'UY', name: 'Uruguay', capital: 'Montevideo', region: 'america', pop: '3.5M', currency: 'Peso uruguayo', dish: 'Asado · Chivito · Mate', figures: 'Eduardo Galeano · Mario Benedetti · José Mujica', fact: 'Pequeño pero progresista: pionero en derechos sociales en América Latina. El mate es prácticamente sagrado.',
      geo: { climate: 'Temperate — four distinct seasons. Mild year-round (rarely below freezing or above 32°C). Fairly even rainfall.', topography: 'Mostly rolling grasslands (la pradera) — perfect for cattle. No real mountains, just low hills (the highest point is just 514 m). Long Atlantic coastline with great beaches like Punta del Este.' } },
    { code: 'VE', name: 'Venezuela', capital: 'Caracas', region: 'caribe', pop: '28M', currency: 'Bolívar', dish: 'Arepas · Pabellón criollo · Hallacas', figures: 'Simón Bolívar · Rómulo Gallegos · Teresa Carreño', fact: 'Hogar del Salto Ángel, la cascada más alta del mundo. Las arepas son el plato nacional, comidas a cualquier hora.',
      geo: { climate: 'Tropical — hot and humid on the coast, milder in Caracas (at 900 m), cooler in the Andean foothills. Wet season May–Nov.', topography: 'Caribbean coast, the northern tip of the Andes (Pico Bolívar, 4,978 m), the vast Llanos grasslands in the center, and the ancient Guayana Highlands in the south — home to the tepuis (table-top mountains) and Salto Ángel, the world\'s tallest waterfall (979 m).' } }
  ];

  let countryFilter = 'all';
  let countriesViewed = new Set();

  function renderCountries() {
    const grid = document.getElementById('countryGrid');
    const filtered = countryFilter === 'all' ? COUNTRIES : COUNTRIES.filter(c => c.region === countryFilter);
    grid.innerHTML = filtered.map(c => `
      <div class="country-card" onclick="openCountry('${c.code}')">
        <div class="country-flag">${FLAGS[c.code]}</div>
        <div class="country-info">
          <h4>${c.name}</h4>
          <div class="capital">${c.capital}</div>
        </div>
      </div>
    `).join('');
  }

  function filterCountries(region, btn) {
    countryFilter = region;
    document.querySelectorAll('#mundo .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderCountries();
  }

  // ============== MONEY / CURRENCY ==============
  // Per-country currency info used to draw a stylized "bill" in the country
  // modal and to show a live USD exchange rate. iso = ISO-4217 code (for the
  // rate lookup); sym = display symbol; c1/c2 = two flag colors; denom = a
  // representative banknote value; note = optional caveat (e.g. official rate).
  const MONEY = {
    AR: { iso:'ARS', sym:'$',    c1:'#74acdf', c2:'#f6b40e', denom:1000 },
    BO: { iso:'BOB', sym:'Bs',   c1:'#d52b1e', c2:'#007934', denom:200 },
    CL: { iso:'CLP', sym:'$',    c1:'#0039a6', c2:'#d52b1e', denom:5000 },
    CO: { iso:'COP', sym:'$',    c1:'#003893', c2:'#fcd116', denom:20000 },
    CR: { iso:'CRC', sym:'₡', c1:'#002b7f', c2:'#ce1126', denom:5000 },
    CU: { iso:'CUP', sym:'$',    c1:'#002a8f', c2:'#cf142b', denom:200, note:'official rate' },
    DO: { iso:'DOP', sym:'RD$',  c1:'#002d62', c2:'#ce1126', denom:200 },
    EC: { iso:'USD', sym:'$',    c1:'#034ea2', c2:'#ffd100', denom:20 },
    SV: { iso:'USD', sym:'$',    c1:'#0f47af', c2:'#ffffff', denom:20 },
    GQ: { iso:'XAF', sym:'FCFA', c1:'#3e9a00', c2:'#0073ce', denom:5000 },
    GT: { iso:'GTQ', sym:'Q',    c1:'#4997d0', c2:'#ffffff', denom:100 },
    HN: { iso:'HNL', sym:'L',    c1:'#0073cf', c2:'#ffffff', denom:100 },
    MX: { iso:'MXN', sym:'$',    c1:'#006847', c2:'#ce1126', denom:200 },
    NI: { iso:'NIO', sym:'C$',   c1:'#0067c6', c2:'#ffffff', denom:200 },
    PA: { iso:'PAB', sym:'B/.',  c1:'#005293', c2:'#d21034', denom:20 },
    PY: { iso:'PYG', sym:'₲', c1:'#d52b1e', c2:'#0038a8', denom:10000 },
    PE: { iso:'PEN', sym:'S/',   c1:'#d91023', c2:'#ffffff', denom:100 },
    PR: { iso:'USD', sym:'$',    c1:'#0050a4', c2:'#ed0000', denom:20 },
    ES: { iso:'EUR', sym:'€', c1:'#c60b1e', c2:'#ffc400', denom:50 },
    UY: { iso:'UYU', sym:'$U',   c1:'#0038a8', c2:'#f6b40e', denom:200 },
    VE: { iso:'VES', sym:'Bs',   c1:'#ffce00', c2:'#cf142b', denom:100, note:'official rate' }
  };

  // Insert "." every three digits (Spanish thousands separator): 20000 -> 20.000
  function fmtMiles(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }

  // Format an exchange rate for display, scaled to its magnitude.
  function fmtRate(r) {
    if (r >= 1000) return fmtMiles(Math.round(r));
    if (r >= 100)  return String(Math.round(r));
    if (r >= 10)   return r.toFixed(1);
    return r.toFixed(2);
  }

  // Fetch USD-based exchange rates once, cache in memory + localStorage (12h).
  // Free, no-key, CORS-enabled endpoint. Resolves to a { ISO: rate } object.
  let __fxRates = null, __fxPromise = null;
  function getFxRates() {
    if (__fxRates) return Promise.resolve(__fxRates);
    try {
      const raw = localStorage.getItem('elPueblo_fx');
      if (raw) {
        const o = JSON.parse(raw);
        if (o && o.rates && (Date.now() - o.ts) < 12 * 3600 * 1000) { __fxRates = o.rates; return Promise.resolve(__fxRates); }
      }
    } catch (e) {}
    if (typeof fetch !== 'function') return Promise.reject(new Error('no fetch'));
    if (__fxPromise) return __fxPromise;
    __fxPromise = fetch('https://open.er-api.com/v6/latest/USD')
      .then(r => r.json())
      .then(d => {
        if (d && d.rates) {
          __fxRates = d.rates;
          try { localStorage.setItem('elPueblo_fx', JSON.stringify({ ts: Date.now(), rates: d.rates })); } catch (e) {}
          return __fxRates;
        }
        throw new Error('no rates');
      });
    return __fxPromise;
  }

  // Draw the stylized banknote for a country as inline SVG (always renders —
  // no external images). Uses flag colors, currency symbol, name and code.
  function buildBill(code) {
    const m = MONEY[code];
    const c = COUNTRIES.find(x => x.code === code);
    if (!m || !c) return '';
    const denom = fmtMiles(m.denom);
    const cname = c.name.toUpperCase();
    return `
      <svg class="money-bill" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${c.currency} banknote" style="font-family:'DM Serif Display',Georgia,serif;">
        <defs>
          <pattern id="bg_${code}" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
            <path d="M0 11 Q5.5 0 11 11 T22 11" fill="none" stroke="#000" stroke-width="0.4" opacity="0.05"/>
          </pattern>
          <clipPath id="band_${code}"><rect width="20" height="190" rx="12"/></clipPath>
          <clipPath id="seal_${code}"><circle cx="338" cy="92" r="36"/></clipPath>
        </defs>
        <rect width="400" height="190" rx="12" fill="#f7f2e8"/>
        <rect width="400" height="190" rx="12" fill="url(#bg_${code})"/>
        <rect x="5" y="5" width="390" height="180" rx="9" fill="none" stroke="${m.c1}" stroke-width="2.5"/>
        <rect x="11" y="11" width="378" height="168" rx="6" fill="none" stroke="${m.c2}" stroke-width="0.8" opacity="0.6"/>
        <g clip-path="url(#band_${code})">
          <rect y="0" width="20" height="64" fill="${m.c1}"/>
          <rect y="64" width="20" height="62" fill="#ffffff"/>
          <rect y="126" width="20" height="64" fill="${m.c2}"/>
        </g>
        <text x="44" y="40" font-family="'JetBrains Mono',monospace" font-size="11" letter-spacing="2.5" fill="#7a6f5c">${cname}</text>
        <text x="42" y="116"><tspan font-size="30" fill="#1f1b17">${m.sym}</tspan><tspan font-size="56" dx="3" fill="#1f1b17">${denom}</tspan></text>
        <text x="46" y="148" font-size="20" font-style="italic" fill="${m.c1}">${c.currency}</text>
        <text x="46" y="170" font-family="'JetBrains Mono',monospace" font-size="12" letter-spacing="2" fill="#8a8175">${m.iso} · ${m.sym}</text>
        <circle cx="338" cy="92" r="40" fill="#fff" stroke="${m.c1}" stroke-width="2"/>
        <g clip-path="url(#seal_${code})">
          <rect x="298" y="56" width="27" height="72" fill="${m.c1}"/>
          <rect x="325" y="56" width="26" height="72" fill="#ffffff"/>
          <rect x="351" y="56" width="27" height="72" fill="${m.c2}"/>
        </g>
      </svg>`;
  }

  // Fill in the live "1 USD = …" line inside the open country modal.
  function loadModalRate(code) {
    const m = MONEY[code];
    const el = document.getElementById('modalFxRate');
    if (!m || !el) return;
    if (m.iso === 'USD') { el.textContent = 'Uses the US dollar — 1 USD = 1.00 USD'; return; }
    getFxRates().then(rates => {
      const cur = document.getElementById('modalFxRate');
      if (!cur) return;
      const r = rates[m.iso];
      cur.textContent = r
        ? ('1 USD = ' + fmtRate(r) + ' ' + m.iso + (m.note ? ' · ' + m.note : ''))
        : (m.iso + ' — live rate unavailable');
    }).catch(() => {
      const cur = document.getElementById('modalFxRate');
      if (cur) cur.textContent = 'Live rate unavailable (offline)';
    });
  }

  function openCountry(code) {
    const c = COUNTRIES.find(x => x.code === code);
    if (!c) return;
    document.getElementById('modalFlag').innerHTML = FLAGS[code];

    // Pull KNOWN_FOR data — what this country is known for internationally
    const knownFor = (typeof KNOWN_FOR !== 'undefined' && KNOWN_FOR[code]) ? KNOWN_FOR[code] : null;
    const knownForHtml = knownFor ? `
      <div class="modal-section">
        <h5>🌍 Known for internationally</h5>
        <div class="known-for-tags">
          ${knownFor.map(([icon, label]) => `<span class="known-for-pill"><span class="known-for-icon">${icon}</span>${label}</span>`).join('')}
        </div>
      </div>
    ` : '';

    document.getElementById('modalBody').innerHTML = `
      <h3>${c.name.replace(/(\\w+)$/, '<em>$1</em>')}</h3>
      <div class="modal-sub">Capital · ${c.capital}</div>
      <div class="modal-stats">
        <div><div class="label">Population</div><div class="value">${c.pop}</div></div>
        <div><div class="label">Currency</div><div class="value">${c.currency}</div></div>
        <div><div class="label">Region</div><div class="value">${({america:'Americas',caribe:'Caribbean',europa:'Europe',africa:'Africa'})[c.region] || c.region}</div></div>
      </div>
      <div class="modal-section">
        <h5>💵 Money</h5>
        ${buildBill(code)}
        <div class="money-rate" id="modalFxRate">Loading current rate…</div>
      </div>
      ${knownForHtml}
      <div class="modal-section">
        <h5>Typical food</h5>
        <div class="tag-list">${c.dish.split(' · ').map(d => '<span>' + d + '</span>').join('')}</div>
      </div>
      <div class="modal-section">
        <h5>Important figures</h5>
        <div class="tag-list">${c.figures.split(' · ').map(d => '<span>' + d + '</span>').join('')}</div>
      </div>
      ${c.geo ? `
      <div class="modal-section">
        <h5>🌡️ Climate</h5>
        <p>${c.geo.climate}</p>
      </div>
      <div class="modal-section">
        <h5>🗻 Topography</h5>
        <p>${c.geo.topography}</p>
      </div>
      ` : ''}
      <div class="modal-section">
        <h5>Did you know…?</h5>
        <p>${c.fact}</p>
      </div>
    `;
    document.getElementById('countryModal').classList.add('open');
    loadModalRate(code);
    // Award 1 Luca per unique country viewed
    if (!STATE.countriesViewed.has(code)) {
      STATE.countriesViewed.add(code);
      awardCoins(1, 'Country explored: ' + c.name);
    }
  }

  function closeCountryModal() {
    document.getElementById('countryModal').classList.remove('open');
  }

  // Close on escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCountryModal();
  });

