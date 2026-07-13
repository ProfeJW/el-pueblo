  /* ============== MUNDO SUBPAGE COUNTRY FILTER ============== */
  // Shared state across all 5 Mundo subpages (Known For, People, Slang, Dishes, Historia).
  // Each subpage shows a row of country tabs; clicking one filters to just that country.
  // Selection persists across subpages in this session via localStorage,
  // so picking "Peru" on Slang means landing on Peru's content when you visit Dishes.
  let mundoCountryFilter = 'all'; // 'all' or a country code like 'PE'

  // Restore saved filter on init (if any)
  try {
    const saved = localStorage.getItem('tertulia_mundo_country');
    if (saved) mundoCountryFilter = saved;
  } catch(e) {}

  // List of country codes used across all 5 subpages — used to build tab lists
  // Includes any country that appears in at least one of the data arrays.
  function getMundoCountriesForSubpage(dataArray, codeField) {
    const codes = new Set();
    (dataArray || []).forEach(item => {
      const code = codeField === 'country' ? item.country : (codeField === 'code' ? item.code : null);
      if (code) codes.add(code);
    });
    // For KNOWN_FOR (which is keyed by country code, not an array)
    return Array.from(codes);
  }

  function setMundoCountryFilter(code, btn) {
    mundoCountryFilter = code;
    try { localStorage.setItem('tertulia_mundo_country', code); } catch(e) {}
    // Refresh all 5 subpage renders so when student navigates to another subpage, it's pre-filtered
    if (typeof renderKnownFor === 'function') renderKnownFor();
    if (typeof renderPeople === 'function') renderPeople();
    if (typeof renderSlang === 'function') renderSlang();
    if (typeof renderDishes === 'function') renderDishes();
    if (typeof renderHistoria === 'function') renderHistoria();
  }

  // Builds the country tab UI for a given subpage's data.
  // dataArray = the data being rendered (PEOPLE, SLANG, DISHES, HISTORIA, or COUNTRIES for known-for)
  // For HISTORIA where data is structured differently, codeField extraction adapts.

  // ============================================================================
  // MAP QUIZZES — Country-find + Capital-dot-find. Both use the same SVG map
  // (one copy per subpage) but the capitals page wraps its SVG container with
  // class .capitals-mode which (a) reveals the dots and (b) disables country
  // clicks. Each quiz has its own IDs and its own state so they don't clash.
  // ============================================================================

  // Capital dots — each dot has a unique id (e.g. "BO-LP" vs "BO-SC" for
  // Bolivia's two capitals). country = parent country code (for lookup).

  // ============ CIVILIZACIONES ANTIGUAS ============
  // Pre-Columbian civilizations: timeline + approximate heartlands drawn over
  // the modern-borders map. Shapes are pedagogical approximations, anchored to
  // the same 800x800 coordinate space as the capital dots.
  const CIVS = [
  {
    "id": "caral",
    "name": "Caral / Norte Chico",
    "color": "#8d6e63",
    "start": -3000,
    "end": -1800,
    "where": "Perú (costa norte de Lima)",
    "shape": {
      "type": "ellipse",
      "cx": 299,
      "cy": 421,
      "rx": 9,
      "ry": 6,
      "rot": -25
    },
    "quienes": "The oldest urban civilization in the Americas. The Norte Chico civilization emerged around 3000 a.C., and its greatest city, Caral, was built around 2600 a.C. — the same era as Egypt's first pyramids. These coastal Peruvian cities lived on irrigation farming (cotton, beans, squash) and rich Pacific fishing. No pottery, no writing — but monumental pyramids, sunken circular plazas, and possibly the first quipus (knotted cords).",
    "construccion": "Platform pyramids were raised with quarried stone and <em>shicra</em> — woven reed bags filled with rubble and stacked like sandbags, a clever earthquake-resistant design. The work happened in repeated communal building events over generations, organized through communal labor and reciprocity (most likely rewarded with feasting), not slavery. Strikingly, Caral shows no evidence of warfare: no walls, no fortifications, no weapons.",
    "sitios": "Ceremonial-civic centers: temple platforms with fire altars, plazas for public gatherings, and residences — the anchors of irrigation societies that traded cotton for fish.",
    "final": "Declined around 1800 a.C., most likely from droughts and El Niño floods that broke the irrigation economy. Its ideas — platform temples, sunken plazas, the quipu — echo through every later Andean culture.",
    "sources": [
      "https://whc.unesco.org/en/list/1269/",
      "https://en.wikipedia.org/wiki/Caral%E2%80%93Supe_civilization",
      "https://www.britannica.com/place/Caral"
    ]
  },
  {
    "id": "olmeca",
    "name": "Olmecas",
    "color": "#ab47bc",
    "start": -1500,
    "end": -400,
    "where": "México (costa del Golfo: Veracruz y Tabasco)",
    "shape": {
      "type": "ellipse",
      "cx": 193,
      "cy": 236,
      "rx": 15,
      "ry": 8,
      "rot": -15
    },
    "quienes": "Mesoamerica's “mother culture” — or at least its first great one. From the hot Gulf-coast lowlands the Olmecs gave the region its template: ceremonial centers, very likely the ballgame, jade carving, and probably the first steps toward writing and the calendar that the Maya would later perfect. Their colossal stone heads — portraits of rulers, up to 3 meters tall and 40+ tons — are among the most famous objects of ancient America.",
    "construccion": "The colossal heads were carved from basalt boulders quarried in the Tuxtla mountains and moved more than 60 km — dragged on sledges and floated on rafts — with no wheels, no metal tools, and no draft animals, then shaped with stone hammers. The great earthen pyramid-mounds of La Venta were piled up basketload by basketload by communal labor crews over generations.",
    "sitios": "San Lorenzo and La Venta were ceremonial-political capitals: plazas, mounds, stone drainage systems, and buried offerings of jade and serpentine laid out as sacred geography.",
    "final": "San Lorenzo declined around 900 a.C. and La Venta around 400 a.C. The causes are debated — shifting rivers, environmental change, political upheaval (some monuments were deliberately defaced and buried). The people didn't vanish; the culture transformed, and its ideas spread through everything that came after.",
    "sources": [
      "https://en.wikipedia.org/wiki/Olmecs",
      "https://en.wikipedia.org/wiki/Olmec_colossal_heads",
      "https://www.britannica.com/topic/Olmec"
    ]
  },
  {
    "id": "chavin",
    "name": "Chavín",
    "color": "#7e57c2",
    "start": -900,
    "end": -200,
    "where": "Perú (sierra norte)",
    "shape": {
      "type": "ellipse",
      "cx": 306,
      "cy": 406,
      "rx": 12,
      "ry": 9,
      "rot": -30
    },
    "quienes": "The first great unifying culture of the Andes — a religious phenomenon more than an empire. Chavín de Huántar, a temple complex 3,180 m up in the Peruvian Andes, drew pilgrims for centuries, and its fanged-deity art style spread across most of Peru without a single conquest we know of.",
    "construccion": "Stone-faced platform temples honeycombed with interior galleries, air vents, and water channels engineered for theater: in the rainy season, water thundering through the ducts made the temple itself seem to roar. Built and enlarged over roughly five centuries by pilgrim and communal labor.",
    "sitios": "An oracle and pilgrimage center. Initiates moved through dark labyrinths — the carved imagery shows the psychoactive san pedro cactus in use — to meet the Lanzón, a 4.5 m granite idol that still stands in its original gallery today.",
    "final": "Its influence dissolved around 200 a.C. as regional cultures like Moche and Nazca went their own ways. No invasion required — the religion simply lost its hold.",
    "sources": [
      "https://whc.unesco.org/en/list/330/",
      "https://www.britannica.com/topic/Chavin",
      "https://en.wikipedia.org/wiki/Chav%C3%ADn_de_Hu%C3%A1ntar"
    ]
  },
  {
    "id": "zapoteca",
    "name": "Zapotecas",
    "color": "#26a69a",
    "start": -500,
    "end": 850,
    "where": "México (valles de Oaxaca)",
    "shape": {
      "type": "ellipse",
      "cx": 181,
      "cy": 247,
      "rx": 11,
      "ry": 7,
      "rot": 0
    },
    "quienes": "Builders of Monte Albán, one of the earliest true cities in Mesoamerica — founded around 500 a.C. on a mountaintop above the Oaxaca valleys. The Zapotecs were among the first in Mesoamerica to carve writing and calendar dates in stone.",
    "construccion": "They literally flattened a mountain ridge into a vast plaza and ringed it with stone-faced platforms — quarrying, hauling, and lime-plastering done by rotating labor levies owed by the valley towns, sustained over centuries.",
    "sitios": "A political-religious capital ruling the valleys below: temples, a ballcourt, an astronomical building set at its own deliberate odd angle (Edificio J), and the carved “Danzantes” figures — most likely slain enemies of the city.",
    "final": "Monte Albán peaked around 750 d.C., then declined and was largely abandoned by about 900, and the great plaza emptied. But the Zapotec people never went anywhere — they held off the Aztecs, navigated the Spanish conquest, and hundreds of thousands of people speak Zapotec languages in Oaxaca today.",
    "sources": [
      "https://whc.unesco.org/en/list/415",
      "https://www.britannica.com/place/Monte-Alban",
      "https://en.wikipedia.org/wiki/Monte_Alb%C3%A1n"
    ]
  },
  {
    "id": "nazca",
    "name": "Nazca",
    "color": "#ec407a",
    "start": -100,
    "end": 600,
    "where": "Perú (costa sur)",
    "shape": {
      "type": "ellipse",
      "cx": 317,
      "cy": 457,
      "rx": 12,
      "ry": 7,
      "rot": -25
    },
    "quienes": "A desert culture of Peru's south coast, famous for the Nazca Lines, some of the finest pottery and textiles of ancient America, and for thriving in one of the driest places on Earth.",
    "construccion": "The Lines were “drawn” by removing the dark, sun-varnished stones of the desert floor to expose the lighter ground beneath. An organized work crew could complete even a giant geoglyph in days or weeks — no mystery technology needed, and the method is visible to archaeologists. The Nazca also dug <em>puquios</em>: spiral-entry underground aqueducts, some of which still deliver water today.",
    "sitios": "The lines' purpose is still debated, but the leading view is that many were processional and ritual paths — made to be walked, not viewed from the air — tied to water and fertility worship, and associated with the great adobe complex of Cahuachi. (And no: humans made them. The evidence is overwhelming.)",
    "final": "The culture faded around 600 d.C. The evidence points to devastating El Niño flood cycles, made worse by the clearing of the huarango trees whose roots anchored the irrigated valleys.",
    "sources": [
      "https://whc.unesco.org/en/list/700/",
      "https://en.wikipedia.org/wiki/Nazca_culture",
      "https://www.britannica.com/place/Nazca-Lines"
    ]
  },
  {
    "id": "teotihuacan",
    "name": "Teotihuacán",
    "color": "#ffa726",
    "start": -100,
    "end": 600,
    "where": "México (Valle de México)",
    "shape": {
      "type": "ellipse",
      "cx": 163,
      "cy": 216,
      "rx": 7,
      "ry": 6,
      "rot": 0
    },
    "quienes": "At its height around 450 d.C., the largest city in the Americas and one of the largest anywhere: 100,000+ people, a planned grid, multi-ethnic neighborhoods — and no clearly named king in any surviving image. Centuries later the Aztecs found the ruins and named it Teotihuacán, “where the gods were born.” We still don't know what its own people called it.",
    "construccion": "The Pyramid of the Sun — among the largest structures by volume in the ancient world — is a mountain of earth, rubble, and adobe faced with stone and lime plaster, raised mostly in concentrated bursts between about 100 and 250 d.C. Thousands of laborers organized and fed by the state carried material basket by basket: no wheels, no draft animals, just ramps, ropes, and human muscle.",
    "sitios": "The Avenue of the Dead laid the city out as sacred geography: pyramids as artificial mountains, the Temple of Quetzalcóatl with its warrior burials, palaces — and more than 2,000 apartment compounds where ordinary families lived better than most city-dwellers of the ancient world.",
    "final": "Around 550–600 d.C. (the traditional dating; some recent research argues earlier) the monuments along the Avenue were burned and smashed — selectively, the ritual heart of the city rather than the homes — which points to an internal uprising against the elite more than a foreign invasion. The city shrank to a town, but its prestige haunted Mesoamerica for the next thousand years.",
    "sources": [
      "https://whc.unesco.org/en/list/414/",
      "https://en.wikipedia.org/wiki/Teotihuacan",
      "https://www.britannica.com/place/Teotihuacan"
    ]
  },
  {
    "id": "maya",
    "name": "Mayas",
    "color": "#66bb6a",
    "start": -1000,
    "end": 1697,
    "where": "México (Yucatán y Chiapas), Guatemala, Belice, Honduras, El Salvador",
    "shape": {
      "type": "ellipse",
      "cx": 224,
      "cy": 228,
      "rx": 22,
      "ry": 30,
      "rot": -8
    },
    "quienes": "Not one empire but dozens of rival city-states — Tikal, Calakmul, Palenque, Copán — sharing one brilliant culture: the only complete writing system of the pre-Columbian Americas, positional mathematics with zero, astronomical tables accurate enough to predict eclipses, and dynastic histories we can now read king by king. Classic golden age: roughly 250–900 d.C.",
    "construccion": "Maya temple-pyramids are layered like onions: each ruler built over his predecessors' temple, so a “single” pyramid contains centuries of construction. Limestone was quarried with stone tools, burned to make lime plaster and mortar, and hauled by tumpline porters. Labor was corvée owed to the king — plus war captives for some projects. A major temple enlargement took years to a few decades, not whole lifetimes.",
    "sitios": "Cities were political capitals and cosmic stages: temples were sacred mountains, plazas were the primordial sea, stelae froze the king's body in stone. Around them: ballcourts, markets, causeways, reservoirs (Tikal's water system carried 10,000+ people through dry seasons), and observatories like El Caracol at Chichén Itzá tracking Venus.",
    "final": "The famous “collapse” (~800–950 d.C.) struck the southern lowlands: back-to-back megadroughts, escalating warfare, and kings whose rain-bringing legitimacy failed. Cities emptied one by one. But the north — Chichén Itzá, Uxmal, later Mayapán — flourished afterward, and the last independent Maya kingdom, Nojpetén, fell to the Spanish only in <strong>1697</strong>. Around seven million Maya live today; “the Maya disappeared” is a myth.",
    "sources": [
      "https://en.wikipedia.org/wiki/Maya_civilization",
      "https://www.britannica.com/topic/Maya-people",
      "https://en.wikipedia.org/wiki/Classic_Maya_collapse",
      "https://en.wikipedia.org/wiki/Nojpet%C3%A9n"
    ]
  },
  {
    "id": "moche",
    "name": "Moche",
    "color": "#ef5350",
    "start": 100,
    "end": 800,
    "where": "Perú (costa norte)",
    "shape": {
      "type": "ellipse",
      "cx": 292,
      "cy": 391,
      "rx": 9,
      "ry": 14,
      "rot": -30
    },
    "quienes": "Master artisans of Peru's north coast: the most lifelike portrait pottery of the ancient Americas, sophisticated gold and copper metallurgy, and canal systems that turned desert into farmland. The untouched tomb of the Lord of Sipán, found in 1987, is rightly called the Tutankhamun of the Americas.",
    "construccion": "The Moche built with adobe bricks — by the millions. The Huaca del Sol contains over 130 million; makers' marks pressed into the bricks show that different communities each owed batches as labor tax. The great huacas grew by additions over some six centuries.",
    "sitios": "Huacas were temple-mountains for a dramatic state religion (the sacrifice of war captives looms large in their art), elite tombs, and administrative centers commanding the irrigation networks.",
    "final": "Between about 600 and 750 d.C., super-El Niño cycles — catastrophic floods followed by drought — wrecked the canal economy. Settlements moved inland and the culture fragmented. Its engineering and goldsmithing flowed into the Chimú centuries later.",
    "sources": [
      "https://en.wikipedia.org/wiki/Moche_culture",
      "https://www.britannica.com/topic/Moche",
      "https://en.wikipedia.org/wiki/Huaca_del_Sol"
    ]
  },
  {
    "id": "tiwanaku",
    "name": "Tiwanaku",
    "color": "#5c6bc0",
    "start": 500,
    "end": 1000,
    "where": "Bolivia y Perú (lago Titicaca)",
    "shape": {
      "type": "ellipse",
      "cx": 356,
      "cy": 469,
      "rx": 14,
      "ry": 10,
      "rot": -15
    },
    "quienes": "A ceremonial empire at 3,850 m on the shores of Lake Titicaca — one of the highest cities ever built — whose religious influence radiated across the south-central Andes for half a millennium.",
    "construccion": "Megalithic precision long before the Inca: andesite blocks were ferried across the lake on reed boats, hauled overland, and locked together with copper-arsenic (arsenical) bronze cramps — at Pumapunku, poured molten into carved sockets. Raised-field agriculture (<em>suka kollus</em>) around the lake was so productive that modern experiments have revived it — that surplus fed the building labor.",
    "sitios": "A pilgrimage capital: the Akapana platform-mountain, the Semi-subterranean Temple with its carved stone heads, and the Gateway of the Sun bearing the Staff God — an ancestor of later Andean religion.",
    "final": "Declined around 1000–1100 d.C. The cause is debated: a long drought that shrank the lake and broke the raised-field farming is the traditional explanation, though recent dating suggests the political collapse may have come before the worst of the drought. The Inca later claimed Titicaca as the place where the world was created — inheriting the prestige of a ruin.",
    "sources": [
      "https://whc.unesco.org/en/list/567",
      "https://www.britannica.com/place/Tiwanaku",
      "https://en.wikipedia.org/wiki/Tiwanaku"
    ]
  },
  {
    "id": "wari",
    "name": "Wari",
    "color": "#29b6f6",
    "start": 600,
    "end": 1000,
    "where": "Perú (sierra central)",
    "shape": {
      "type": "ellipse",
      "cx": 312,
      "cy": 436,
      "rx": 17,
      "ry": 11,
      "rot": -35
    },
    "quienes": "One of the earliest expansionist empires of the Andes — Tiwanaku's contemporary and rival to the north. From their capital near modern Ayacucho, the Wari governed much of highland Peru through roads, planned provincial centers, and quipu record-keeping — the toolkit the Inca would inherit.",
    "construccion": "Standardized, planned compounds — Pikillacta looks like a barracks-city drawn on graph paper — built by labor levies from subject communities, plus mountainside terracing to farm steep country.",
    "sitios": "Administrative cities and storehouses for moving food and cloth around an empire. Centuries later the Inca built on Andean precedents the Wari had pioneered — roads, provincial administrative hubs, and state labor service.",
    "final": "Came apart around 1000 d.C. in the same great drought that brought down Tiwanaku, fragmenting into the regional kingdoms the Inca would later absorb.",
    "sources": [
      "https://en.wikipedia.org/wiki/Wari_Empire",
      "https://whc.unesco.org/en/list/1459/",
      "https://www.worldhistory.org/Wari_Civilization/"
    ]
  },
  {
    "id": "tolteca",
    "name": "Toltecas",
    "color": "#c0ca33",
    "start": 900,
    "end": 1150,
    "where": "México (Tula, Hidalgo)",
    "shape": {
      "type": "ellipse",
      "cx": 155,
      "cy": 209,
      "rx": 8,
      "ry": 5,
      "rot": 0
    },
    "quienes": "The great civilization that later peoples of central Mexico — above all the Aztecs — revered as their cultural ancestors. To the Aztecs, “Toltec” simply meant civilized — <em>toltecayotl</em> was the word for artistry and refinement itself. Their capital Tula is famous for its 4.6 m basalt Atlantean warrior columns.",
    "construccion": "Colonnaded halls and Pyramid B's warrior columns — carved basalt drums stacked, pinned, and aligned — raised with tribute labor from subject towns.",
    "sitios": "Tula was a warrior-state capital. Its art — chacmools, skull racks, feathered serpents — appears as far away as Chichén Itzá, and whether that traveled by conquest, alliance, or sheer fashion is still argued.",
    "final": "Tula burned around 1150–1200 d.C., likely amid drought and factional strife; its nobility scattered. Every later dynasty — above all the Aztecs — claimed Toltec descent to look legitimate.",
    "sources": [
      "https://en.wikipedia.org/wiki/Toltec",
      "https://en.wikipedia.org/wiki/Tula_(Mesoamerican_site)",
      "https://www.britannica.com/topic/Toltec"
    ]
  },
  {
    "id": "chimu",
    "name": "Chimú",
    "color": "#ff7043",
    "start": 900,
    "end": 1470,
    "where": "Perú (costa norte, Chan Chan)",
    "shape": {
      "type": "ellipse",
      "cx": 288,
      "cy": 396,
      "rx": 8,
      "ry": 18,
      "rot": -32
    },
    "quienes": "The greatest coastal kingdom of the Andes before the Inca, ruling 1,000 km of desert shoreline from Chan Chan — the largest adobe city in the Americas, roughly 20 km² with tens of thousands of inhabitants.",
    "construccion": "Chan Chan's nine or ten royal compounds (<em>ciudadelas</em>) rose from adobe and sculpted mud friezes. Each king built a new walled palace-compound using labor levies from conquered valleys, while canals carried water dozens of kilometers across open desert.",
    "sitios": "Each ciudadela was palace, treasury, administrative hub, and finally the king's tomb. The friezes — endless fish, waves, seabirds — tell you exactly what fed the kingdom.",
    "final": "Conquered around 1470 by the Inca. According to Spanish chronicles, the Inca forced the surrender by seizing the highland headwaters that Chimú's canals depended on — \"conquest by plumbing\" — though that story rests on later accounts more than on archaeology. King Minchançaman was taken to Cusco, and the famous Chimú goldsmiths were deported to work for the empire.",
    "sources": [
      "https://whc.unesco.org/en/list/366/",
      "https://www.britannica.com/topic/Chimu",
      "https://www.worldhistory.org/Chan_Chan/"
    ]
  },
  {
    "id": "mexica",
    "name": "Mexicas (Aztecas)",
    "color": "#c62828",
    "start": 1325,
    "end": 1521,
    "where": "México (centro y sur)",
    "shape": {
      "type": "ellipse",
      "cx": 167,
      "cy": 230,
      "rx": 30,
      "ry": 17,
      "rot": -12
    },
    "quienes": "Late arrivals who built the most feared empire in Mesoamerican history in barely two centuries. Tenochtitlán — founded 1325 on an island in Lake Texcoco — held an estimated 200,000 people by 1519 (some estimates run higher), larger than any city in Spain, with canals, causeways, aqueducts, schooling for every child, and the great market of Tlatelolco that stunned the conquistadors.",
    "construccion": "The Templo Mayor was rebuilt bigger in <strong>seven main phases</strong> between 1325 and 1519, each version entombing the last (a famous enlargement was dedicated in 1487). Stone, fill, and lime plaster moved entirely by canoe and human porters. Labor came as <em>tequitl</em> — rotating work-service owed by every commoner ward and tribute town. The chinampas (“floating gardens” — actually anchored raised fields) were agricultural engineering that fed the metropolis. Enslaved people (<em>tlacotin</em>) existed in Aztec society, but the monuments were built by organized tribute labor, not slave gangs.",
    "sitios": "The sacred precinct was the center of the cosmos: the double temple to Tláloc (rain) and Huitzilopochtli (sun and war), where human sacrifice — real, though inflated by both Aztec propaganda and Spanish justification — fed the sun. Around it: palaces, schools, a zoo, an aviary, and neighborhoods threaded with canals.",
    "final": "Cortés landed in 1519 with about 500 men — and won because tens of thousands of Indigenous enemies of the empire, above all Tlaxcala, joined him, and because smallpox killed perhaps half of Tenochtitlán mid-war, including the emperor Cuitláhuac. The city fell on August 13, 1521, after a 93-day siege that left it in rubble. Mexico City stands on top of it; more than 1.5 million people still speak Nahuatl (about 1.65 million at the 2020 census).",
    "sources": [
      "https://en.wikipedia.org/wiki/Tenochtitlan",
      "https://www.britannica.com/place/Tenochtitlan",
      "https://en.wikipedia.org/wiki/Templo_Mayor",
      "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan"
    ]
  },
  {
    "id": "inca",
    "name": "Incas (Tawantinsuyu)",
    "color": "#fbc02d",
    "start": 1438,
    "end": 1533,
    "where": "Perú, Bolivia, Ecuador, Chile, Argentina, Colombia",
    "shape": {
      "type": "path",
      "d": "M303,332 L285,360 L281,395 L290,430 L300,470 L315,520 L330,575 L340,622 L356,634 L364,598 L374,558 L396,540 L399,505 L390,468 L371,440 L361,400 L331,362 L316,338 Z"
    },
    "quienes": "The largest empire of the pre-Columbian Americas: Tawantinsuyu, “the four parts together,” ran 4,000 km down the Andes from southern Colombia to central Chile — roughly 10–12 million people knit together by some 30,000–40,000 km of roads (the Qhapaq Ñan), relay runners (<em>chasquis</em>), and quipu accounting. Nearly all of it was assembled in under a century after 1438, mostly under Pachacuti and his son Túpac Yupanqui.",
    "construccion": "The famous mortarless walls — Machu Picchu, the 100+ ton blocks of Sacsayhuamán — were quarried with stone hammers, moved with ramps, log rollers, ropes, and massed muscle, then fitted by lowering each block again and again and pecking the contact points until it seated perfectly. The result is earthquake-proof. Labor was the <strong>mit'a</strong>: every household owed the state rotating turns of work, paid in food, chicha, and cloth from state storehouses (<em>qollqas</em>). It was a labor tax, not slavery — the same system built the roads, the terraces, and the irrigation. Machu Picchu, a royal estate of Pachacuti begun around 1450, occupied crews in the low thousands for a few decades — and was still unfinished when it was abandoned.",
    "sitios": "Machu Picchu was a royal estate and sanctuary (never a “lost city of gold”); Sacsayhuamán a temple-fortress above Cusco; Ollantaytambo a royal town still lived in today. And everywhere: terraces, qollqas, and tambos (road inns). The empire's true genius was logistics — while the state stood, nobody starved.",
    "final": "A European epidemic — most likely smallpox — raced ahead of the Spaniards in the 1520s, killing the emperor Huayna Cápac and igniting civil war between his sons Huáscar and Atahualpa. Pizarro's 168 men ambushed Atahualpa at Cajamarca in 1532 in the middle of that chaos, extracted history's largest ransom — a room filled with gold — and executed him anyway in 1533. Andean peoples who hated Inca rule made the conquest possible; a Neo-Inca state held out at Vilcabamba until 1572, when Túpac Amaru was executed in Cusco's plaza.",
    "sources": [
      "https://en.wikipedia.org/wiki/Inca_Empire",
      "https://en.wikipedia.org/wiki/Inca_road_system",
      "https://www.britannica.com/event/Battle-of-Cajamarca-1532"
    ]
  }
];

  const CIV_TL_MIN = -3200, CIV_TL_MAX = 1750;
  let civSelected = null;

  function civYear(y) { return y < 0 ? Math.abs(y) + ' a.C.' : y + ' d.C.'; }
  function civPct(y) { return ((y - CIV_TL_MIN) / (CIV_TL_MAX - CIV_TL_MIN) * 100); }

  // "Known for" photos. Each loads images/civ/<id>.jpg; until that file is
  // uploaded the <figure> hides itself (img onerror), so empty slots are silent.
  // Drop a jpg named after the civ id into images/civ/ and it appears automatically.
  const CIV_IMG = {
    caral:       { cap: 'La Pirámide Mayor de Caral — la ciudad más antigua de América.' },
    olmeca:      { cap: 'Cabeza colosal olmeca — retrato de un gobernante tallado en basalto.' },
    chavin:      { cap: 'Las cabezas clavas y el Lanzón de Chavín de Huántar.' },
    zapoteca:    { cap: 'Monte Albán — la gran plaza zapoteca sobre el valle de Oaxaca.' },
    nazca:       { cap: 'Las Líneas de Nazca — geoglifos como el colibrí y el mono.' },
    teotihuacan: { cap: 'La Pirámide del Sol y la Calzada de los Muertos, Teotihuacán.' },
    maya:        { cap: 'El Castillo de Chichén Itzá — pirámide-calendario maya.' },
    moche:       { cap: 'El oro y las máscaras del Señor de Sipán (cultura moche).' },
    tiwanaku:    { cap: 'La Puerta del Sol de Tiwanaku, junto al lago Titicaca.' },
    wari:        { cap: 'La ciudad amurallada wari (p. ej. Pikillacta).' },
    tolteca:     { cap: 'Los Atlantes de Tula — guerreros de piedra toltecas.' },
    chimu:       { cap: 'Chan Chan — la gran ciudad de adobe del reino chimú.' },
    mexica:      { cap: 'La Piedra del Sol mexica (el mal llamado "calendario azteca").' },
    inca:        { cap: 'Machu Picchu — la ciudadela inca en los Andes.' }
  };
  function civImgHTML(id) {
    const info = CIV_IMG[id];
    if (!info) return '';
    const credit = info.credit ? ` <span class="cd-credit">· ${info.credit}</span>` : '';
    return `<figure class="cd-figure">
        <img src="images/civ/${id}.jpg" alt="${info.cap}" loading="lazy"
             onerror="this.closest('.cd-figure').style.display='none'">
        <figcaption>${info.cap}${credit}</figcaption>
      </figure>`;
  }

  function renderCivilizaciones() {
    renderCivTimeline();
    populateCivMap();
    selectCiv(civSelected || 'maya', false);
  }

  function renderCivTimeline() {
    const el = document.getElementById('civTimeline');
    if (!el) return;
    const ticks = [-3000, -2000, -1000, 0, 500, 1000, 1500];
    const axis = '<div class="civ-axis">' + ticks.map(t =>
      `<span style="left:${civPct(t)}%">${t < 0 ? Math.abs(t) + ' a.C.' : (t === 0 ? '0' : t + ' d.C.')}</span>`).join('') + '</div>';
    const rows = CIVS.slice().sort((a, b) => a.start - b.start).map(c => {
      const left = civPct(c.start), width = Math.max(civPct(c.end) - left, 0.8);
      return `<div class="civ-tl-row" id="civrow-${c.id}" onclick="selectCiv('${c.id}', true)">
        <div class="civ-tl-name"><span class="civ-tl-dot" style="background:${c.color}"></span>${c.name}</div>
        <div class="civ-tl-track"><div class="civ-tl-bar" style="left:${left}%; width:${width}%; background:${c.color}"></div></div>
        <div class="civ-tl-years">${civYear(c.start)} – ${civYear(c.end)}</div>
      </div>`;
    }).join('');
    el.innerHTML = axis + rows;
  }

  function populateCivMap() {
    const container = document.getElementById('civMapContainer');
    if (!container || container.querySelector('svg')) return;
    const source = document.querySelector('svg#hispanoMap');
    if (!source) return;
    const clone = source.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelectorAll('.capital-dot, .capital-label, .map-overlay').forEach(n => n.remove());
    clone.querySelectorAll('.country-region, .neighbor-region').forEach(p => { p.style.pointerEvents = 'none'; p.style.cursor = 'default'; });
    // Crop to the Americas (Spain/Africa not relevant here)
    clone.setAttribute('viewBox', '20 100 470 700');
    const NS = 'http://www.w3.org/2000/svg';
    const g = document.createElementNS(NS, 'g');
    CIVS.forEach(c => {
      let shp;
      if (c.shape.type === 'path') {
        shp = document.createElementNS(NS, 'path');
        shp.setAttribute('d', c.shape.d);
      } else {
        shp = document.createElementNS(NS, 'ellipse');
        shp.setAttribute('cx', c.shape.cx); shp.setAttribute('cy', c.shape.cy);
        shp.setAttribute('rx', c.shape.rx); shp.setAttribute('ry', c.shape.ry);
        if (c.shape.rot) shp.setAttribute('transform', `rotate(${c.shape.rot} ${c.shape.cx} ${c.shape.cy})`);
      }
      shp.setAttribute('class', 'civ-overlay-shape');
      shp.setAttribute('data-civ', c.id);
      shp.setAttribute('fill', c.color);
      shp.setAttribute('fill-opacity', '0.40');
      shp.setAttribute('stroke', c.color);
      shp.setAttribute('stroke-opacity', '0.85');
      shp.setAttribute('stroke-width', '1.2');
      shp.addEventListener('click', () => selectCiv(c.id, true));
      const t = document.createElementNS(NS, 'title');
      t.textContent = c.name;
      shp.appendChild(t);
      g.appendChild(shp);
    });
    clone.appendChild(g);
    container.appendChild(clone);
  }

  function selectCiv(id, scroll) {
    const civ = CIVS.find(c => c.id === id);
    if (!civ) return;
    civSelected = id;
    document.querySelectorAll('.civ-tl-row').forEach(r => {
      const mine = r.id === 'civrow-' + id;
      r.classList.toggle('sel', mine);
      r.classList.toggle('dim', !mine);
    });
    document.querySelectorAll('.civ-overlay-shape').forEach(s => {
      const mine = s.getAttribute('data-civ') === id;
      s.setAttribute('fill-opacity', mine ? '0.65' : '0.10');
      s.setAttribute('stroke-opacity', mine ? '1' : '0.25');
      s.setAttribute('stroke-width', mine ? '2' : '1');
    });
    const el = document.getElementById('civDetail');
    if (el) {
      el.style.borderTopColor = civ.color;
      el.innerHTML = `
        <h3>${civ.name}</h3>
        <div class="cd-meta"><strong style="color:${civ.color}">●</strong> ${civYear(civ.start)} – ${civYear(civ.end)} · Hoy: ${civ.where}</div>
        ${civImgHTML(civ.id)}
        <h5>¿Quiénes eran?</h5><p>${civ.quienes}</p>
        <h5>¿Cómo construyeron — y quién hizo el trabajo?</h5><p>${civ.construccion}</p>
        <h5>¿Para qué eran los sitios?</h5><p>${civ.sitios}</p>
        <h5>¿Cómo terminó?</h5><p>${civ.final}</p>
        ${civ.sources && civ.sources.length ? `<div style="margin-top:18px; padding-top:12px; border-top:1px dashed var(--line); font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.05em; color:var(--ink-soft); opacity:0.8;">Fuentes: ${civ.sources.map((s,i)=>`<a href="${s}" target="_blank" rel="noopener" style="color:var(--ink-soft);">[${i+1}]</a>`).join(' ')}</div>` : ''}`;
      if (scroll && window.innerWidth < 900) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const CAPITAL_DOTS = [
    { id: 'MX',    country: 'MX', name: 'Ciudad de México' },
    { id: 'GT',    country: 'GT', name: 'Ciudad de Guatemala' },
    { id: 'HN',    country: 'HN', name: 'Tegucigalpa' },
    { id: 'SV',    country: 'SV', name: 'San Salvador' },
    { id: 'NI',    country: 'NI', name: 'Managua' },
    { id: 'CR',    country: 'CR', name: 'San José' },
    { id: 'PA',    country: 'PA', name: 'Ciudad de Panamá' },
    { id: 'CU',    country: 'CU', name: 'La Habana' },
    { id: 'DO',    country: 'DO', name: 'Santo Domingo' },
    { id: 'PR',    country: 'PR', name: 'San Juan' },
    { id: 'CO',    country: 'CO', name: 'Bogotá' },
    { id: 'VE',    country: 'VE', name: 'Caracas' },
    { id: 'EC',    country: 'EC', name: 'Quito' },
    { id: 'PE',    country: 'PE', name: 'Lima' },
    { id: 'BO-LP', country: 'BO', name: 'La Paz', note: 'de facto / sede de gobierno' },
    { id: 'BO-SC', country: 'BO', name: 'Sucre',  note: 'capital constitucional' },
    { id: 'CL',    country: 'CL', name: 'Santiago' },
    { id: 'AR',    country: 'AR', name: 'Buenos Aires' },
    { id: 'UY',    country: 'UY', name: 'Montevideo' },
    { id: 'PY',    country: 'PY', name: 'Asunción' },
    { id: 'ES',    country: 'ES', name: 'Madrid' },
    { id: 'GQ',    country: 'GQ', name: 'Malabo' }
  ];

  // Keep CAPITALS as a backwards-compatible lookup (country code -> capital name)
  // for any other code that references it. Uses La Paz for Bolivia.
  const CAPITALS = (() => {
    const map = {};
    CAPITAL_DOTS.forEach(d => { if (!map[d.country]) map[d.country] = d.name; });
    return map;
  })();

  // =========================================================================
  // State — separate for each quiz so they don't interfere.
  // =========================================================================
  let countryQuizState = { target: null, correct: 0, tries: 0, streak: 0, answered: false };
  let capitalQuizState = { target: null, correct: 0, tries: 0, streak: 0, answered: false };

  // Personal best streaks live in localStorage (per device)
  function loadStreak(key) {
    try { return parseInt(localStorage.getItem(key) || '0', 10) || 0; } catch (e) { return 0; }
  }
  function saveStreak(key, value) {
    try { localStorage.setItem(key, String(value)); } catch (e) {}
  }

  // =========================================================================
  // COUNTRY QUIZ — given a country name, click the right country region.
  // =========================================================================
  function newCountryMapQuiz() {
    countryQuizState.answered = false;
    const svg = document.getElementById('mapQuizSvg');
    if (!svg) return;
    const codes = Array.from(svg.querySelectorAll('.country-region')).map(el => el.getAttribute('data-country'));
    if (codes.length === 0) return;
    countryQuizState.target = codes[Math.floor(Math.random() * codes.length)];
    const country = COUNTRIES.find(c => c.code === countryQuizState.target);
    const promptEl = document.getElementById('mapQuizPrompt');
    if (promptEl) promptEl.innerHTML = 'Find <em style="color: var(--ocre);">' + (country ? country.name : countryQuizState.target) + '</em>';
    const hintEl = document.getElementById('mapQuizHint');
    if (hintEl) hintEl.textContent = 'Click the country on the map';
    svg.querySelectorAll('.country-region').forEach(el => el.classList.remove('correct', 'wrong', 'reveal'));
    const ansEl = document.getElementById('mapQuizAnswer');
    if (ansEl) ansEl.textContent = '';
    updateCountryStats();
  }

  function handleCountryMapClick(evt) {
    if (countryQuizState.answered) return;
    const target = evt.target;
    if (!target.classList || !target.classList.contains('country-region')) return;
    countryQuizState.answered = true;
    countryQuizState.tries++;
    const clickedCode = target.getAttribute('data-country');
    const correctCode = countryQuizState.target;
    const correctCountry = COUNTRIES.find(c => c.code === correctCode);
    const ansEl = document.getElementById('mapQuizAnswer');
    if (clickedCode === correctCode) {
      countryQuizState.correct++;
      countryQuizState.streak++;
      target.classList.add('correct');
      if (typeof awardCoins === 'function') awardCoins(3, 'Map quiz · correct');
      if (ansEl) ansEl.innerHTML = '✓ Correct! That\'s <strong>' + (correctCountry ? correctCountry.name : correctCode) + '</strong>.';
      // Update best streak
      const best = loadStreak('elPueblo_mapStreak_country');
      if (countryQuizState.streak > best) saveStreak('elPueblo_mapStreak_country', countryQuizState.streak);
    } else {
      countryQuizState.streak = 0;
      target.classList.add('wrong');
      const svg = document.getElementById('mapQuizSvg');
      const correctEl = svg.querySelector('.country-region[data-country="' + correctCode + '"]');
      if (correctEl) correctEl.classList.add('reveal');
      const clickedCountry = COUNTRIES.find(c => c.code === clickedCode);
      if (ansEl) ansEl.innerHTML = '✗ You clicked <strong>' + (clickedCountry ? clickedCountry.name : clickedCode) + '</strong>. The correct one is <strong>' + (correctCountry ? correctCountry.name : correctCode) + '</strong> (highlighted).';
    }
    updateCountryStats();
  }

  function updateCountryStats() {
    const correctEl = document.getElementById('mapCorrect');
    const triesEl = document.getElementById('mapTries');
    if (correctEl) correctEl.textContent = countryQuizState.correct;
    if (triesEl) triesEl.textContent = countryQuizState.tries;
    const streakEl = document.getElementById('mapStreak');
    const bestEl = document.getElementById('mapBestStreak');
    if (streakEl) streakEl.textContent = countryQuizState.streak;
    if (bestEl) bestEl.textContent = loadStreak('elPueblo_mapStreak_country');
  }

  // =========================================================================
  // CAPITALS QUIZ — given a capital name, click the right dot on the map.
  // Uses different element IDs (cap* prefix) so doesn't clash with country quiz.
  // =========================================================================
  function newCapitalMapQuiz() {
    capitalQuizState.answered = false;
    const svg = document.getElementById('capQuizSvg');
    if (!svg) return;
    const dotIds = Array.from(svg.querySelectorAll('.capital-dot')).map(el => el.getAttribute('data-capital'));
    if (dotIds.length === 0) return;
    capitalQuizState.target = dotIds[Math.floor(Math.random() * dotIds.length)];
    const dot = CAPITAL_DOTS.find(d => d.id === capitalQuizState.target);
    const promptEl = document.getElementById('capQuizPrompt');
    if (promptEl && dot) promptEl.innerHTML = 'Find <em style="color: var(--ocre);">' + dot.name + '</em>';
    const hintEl = document.getElementById('capQuizHint');
    if (hintEl) hintEl.textContent = 'Click the red dot on the map';
    svg.querySelectorAll('.capital-dot').forEach(el => el.classList.remove('correct', 'wrong', 'reveal'));
    const ansEl = document.getElementById('capQuizAnswer');
    if (ansEl) ansEl.textContent = '';
    updateCapitalStats();
  }

  function handleCapitalMapClick(evt) {
    if (capitalQuizState.answered) return;
    const target = evt.target;
    if (!target.classList || !target.classList.contains('capital-dot')) return;
    capitalQuizState.answered = true;
    capitalQuizState.tries++;
    const clickedId = target.getAttribute('data-capital');
    const correctId = capitalQuizState.target;
    const correctDot = CAPITAL_DOTS.find(d => d.id === correctId);
    const correctCountry = COUNTRIES.find(c => c.code === (correctDot ? correctDot.country : ''));
    const ansEl = document.getElementById('capQuizAnswer');
    if (clickedId === correctId) {
      capitalQuizState.correct++;
      capitalQuizState.streak++;
      target.classList.add('correct');
      if (typeof awardCoins === 'function') awardCoins(3, 'Capitals quiz · correct');
      let msg = '✓ Correct! ' + (correctDot ? correctDot.name : '') + ' is ';
      if (correctDot && correctDot.note) msg += '<em>(' + correctDot.note + ')</em> ';
      msg += 'the capital of <strong>' + (correctCountry ? correctCountry.name : '') + '</strong>.';
      if (ansEl) ansEl.innerHTML = msg;
      const best = loadStreak('elPueblo_mapStreak_capital');
      if (capitalQuizState.streak > best) saveStreak('elPueblo_mapStreak_capital', capitalQuizState.streak);
    } else {
      capitalQuizState.streak = 0;
      target.classList.add('wrong');
      const svg = document.getElementById('capQuizSvg');
      const correctEl = svg.querySelector('.capital-dot[data-capital="' + correctId + '"]');
      if (correctEl) correctEl.classList.add('reveal');
      const clickedDot = CAPITAL_DOTS.find(d => d.id === clickedId);
      const clickedCountry = COUNTRIES.find(c => c.code === (clickedDot ? clickedDot.country : ''));
      let msg = '✗ That dot is <strong>' + (clickedDot ? clickedDot.name : clickedId) + '</strong>';
      if (clickedCountry) msg += ' (' + clickedCountry.name + ')';
      msg += '. ' + (correctDot ? correctDot.name : '') + ' is the highlighted dot';
      if (correctCountry) msg += ' in ' + correctCountry.name;
      msg += '.';
      if (ansEl) ansEl.innerHTML = msg;
    }
    updateCapitalStats();
  }

  function updateCapitalStats() {
    const correctEl = document.getElementById('capCorrect');
    const triesEl = document.getElementById('capTries');
    if (correctEl) correctEl.textContent = capitalQuizState.correct;
    if (triesEl) triesEl.textContent = capitalQuizState.tries;
    const streakEl = document.getElementById('capStreak');
    const bestEl = document.getElementById('capBestStreak');
    if (streakEl) streakEl.textContent = capitalQuizState.streak;
    if (bestEl) bestEl.textContent = loadStreak('elPueblo_mapStreak_capital');
  }

  // Backwards-compat aliases (in case anything else still calls these names)
  function newMapQuiz(mode) {
    if (mode === 'capital') newCapitalMapQuiz(); else newCountryMapQuiz();
  }
  function handleMapClick(evt) {
    // Determine context from where the click came
    const target = evt.target;
    if (!target.classList) return;
    if (target.classList.contains('capital-dot')) handleCapitalMapClick(evt);
    else if (target.classList.contains('country-region')) handleCountryMapClick(evt);
  }

  // ============================================================================
  // ARTE — render the gallery and the artwork modal
  // ============================================================================
  function renderArte() {
    const grid = document.getElementById('arteGrid');
    const tabs = document.getElementById('arteTabs');
    if (!grid || !ARTISTS) return;

    // Flatten works for filtering
    const allWorks = [];
    ARTISTS.forEach((artist, ai) => {
      artist.works.forEach((w, wi) => {
        allWorks.push({ artist, artistIdx: ai, work: w, workIdx: wi });
      });
    });

    const availableCodes = Array.from(new Set(allWorks.map(x => x.artist.country)));
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    const filtered = mundoCountryFilter === 'all'
      ? allWorks
      : allWorks.filter(x => x.artist.country === mundoCountryFilter);

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="mundo-empty">No artworks from the selected country yet.</div>';
      return;
    }

    grid.innerHTML = filtered.map(({ artist, artistIdx, work, workIdx }) => {
      const flag = FLAGS[artist.country] || '';
      const fallback = '<div class="artwork-fallback">' +
        '<div class="icon">🎨</div>' +
        '<div class="title">' + escapeAttr(work.title) + '</div>' +
        '<div class="artist">' + escapeAttr(artist.name) + '</div>' +
      '</div>';
      return '<div class="artwork-card" onclick="openArtworkModal(' + artistIdx + ',' + workIdx + ')">' +
        '<div class="artwork-image-wrap">' +
          '<img src="' + escapeAttr(window.ELP_imgSrc(work.image)) + '" data-remote="' + escapeAttr(work.image) + '" alt="' + escapeAttr(work.title) + '" loading="lazy" ' +
            'onerror="if(!window.ELP_imgFallback(this)){this.parentElement.innerHTML=\'' + fallback.replace(/'/g, "&#39;").replace(/"/g, '&quot;') + '\'}">' +
        '</div>' +
        '<div class="artwork-info">' +
          '<div class="title">' + escapeHtml(work.title) + '</div>' +
          '<div class="artist">' + escapeHtml(artist.name) + '</div>' +
          '<div class="year-country">' + flag + ' ' + escapeHtml(work.year) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  // Simple escape helpers — escapeHtml may already exist; check before defining
  function escapeAttr(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // Open a modal showing the full info for a single artwork.
  // Reuses the existing countryModal HTML (modalFlag + modalBody).
  function openArtworkModal(artistIdx, workIdx) {
    const artist = ARTISTS[artistIdx];
    if (!artist) return;
    const work = artist.works[workIdx];
    if (!work) return;
    const country = COUNTRIES.find(c => c.code === artist.country);
    const flag = FLAGS[artist.country] || '';

    // Header: image with overlay caption. Onerror falls back to ocre/title block.
    const fallback = '<div style="padding: 40px 24px; text-align: center; background: linear-gradient(180deg, #d4922c, #c98a25); color: #2d1f10;">' +
      '<div style="font-size: 64px; line-height: 1; margin-bottom: 16px;">🎨</div>' +
      '<div style="font-size: 32px;">' + flag + '</div>' +
      '<div style="font-family: \'JetBrains Mono\', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.75; margin-top: 14px;">' + escapeHtml(work.year) + '</div>' +
      '<div style="font-family: \'DM Serif Display\', serif; font-size: 26px; line-height: 1.15; margin-top: 4px; font-style: italic;">' + escapeHtml(work.title) + '</div>' +
      '<div style="font-family: \'Fraunces\', serif; font-style: italic; font-size: 14px; opacity: 0.85; margin-top: 4px;">' + escapeHtml(artist.name) + '</div>' +
    '</div>';

    document.getElementById('modalFlag').innerHTML =
      '<div style="position: relative; background: var(--ink);">' +
        '<img src="' + escapeAttr(window.ELP_imgSrc(work.image)) + '" data-remote="' + escapeAttr(work.image) + '" alt="' + escapeAttr(work.title) + '" loading="lazy" ' +
          'style="width: 100%; max-height: 360px; object-fit: contain; display: block; background: #1a1410;" ' +
          'onerror="if(!window.ELP_imgFallback(this)){this.parentElement.outerHTML=\'' + fallback.replace(/'/g, "&#39;").replace(/"/g, '&quot;') + '\'}">' +
      '</div>';

    document.getElementById('modalBody').innerHTML =
      '<h3 style="font-style: italic;">' + escapeHtml(work.title) + '</h3>' +
      '<div class="modal-sub">' + escapeHtml(artist.name) + ' · ' + escapeHtml(work.year) + ' · ' + (country ? country.name : '') + '</div>' +
      '<div class="modal-section">' +
        '<h5>🖼 About the work</h5>' +
        '<p style="line-height: 1.6;">' + escapeHtml(work.trivia) + '</p>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h5>📍 Where it lives</h5>' +
        '<p>' + escapeHtml(work.location) + '</p>' +
      '</div>' +
      '<div class="modal-section">' +
        '<h5>👤 About the artist</h5>' +
        '<p style="line-height: 1.6;"><strong>' + escapeHtml(artist.name) + '</strong> (' + escapeHtml(artist.years) + ') · <em>' + escapeHtml(artist.tradition) + '</em></p>' +
        '<p style="line-height: 1.6; margin-top: 6px;">' + escapeHtml(artist.bio) + '</p>' +
      '</div>';
    document.getElementById('countryModal').classList.add('open');
  }

  // ============================================================================
  // ART QUIZ — rotating question types:
  //   1) Who painted this? (image -> artist name)
  //   2) What painting is this? (image -> title)
  //   3) Where does this painting live? (image -> country)
  // 3 Lucas per correct.
  // ============================================================================
  let artQuizState = null;
  let artCorrectCount = 0, artTriesCount = 0;
  let artAnswered = false;

  function newArtQuiz() {
    artAnswered = false;
    // Pick a random work across all artists
    const allWorks = [];
    ARTISTS.forEach((artist, ai) => artist.works.forEach((w, wi) => allWorks.push({ artist, artistIdx: ai, work: w, workIdx: wi })));
    const target = allWorks[Math.floor(Math.random() * allWorks.length)];
    // Pick a random question type
    const questionType = ['artist', 'title', 'country'][Math.floor(Math.random() * 3)];
    artQuizState = { target, questionType };

    // Render image
    const flag = FLAGS[target.artist.country] || '';
    const fallback = '<div style="padding: 40px 20px; text-align: center; background: linear-gradient(180deg, #d4922c, #c98a25); color: #2d1f10; height: 100%; display: flex; flex-direction: column; justify-content: center;">' +
      '<div style="font-size: 56px; line-height: 1;">🎨</div>' +
      '<div style="font-family: \'Fraunces\', serif; font-style: italic; font-size: 14px; color: var(--ink-soft); margin-top: 12px;">Image not available — using clue below</div>' +
    '</div>';

    document.getElementById('artQuizImage').innerHTML =
      '<img src="' + escapeAttr(window.ELP_imgSrc(target.work.image)) + '" data-remote="' + escapeAttr(target.work.image) + '" alt="artwork to identify" ' +
        'style="width: 100%; height: 100%; object-fit: contain; background: #1a1410; display: block;" ' +
        'onerror="if(!window.ELP_imgFallback(this)){this.parentElement.innerHTML=\'' + fallback.replace(/'/g, "&#39;").replace(/"/g, '&quot;') + '\'}">';

    // Build question + options
    let questionText, options, correctValue, valueAttr;
    if (questionType === 'artist') {
      questionText = 'Who painted this?';
      correctValue = target.artist.name;
      const others = ARTISTS.filter(a => a.name !== target.artist.name).sort(() => Math.random() - 0.5).slice(0, 3).map(a => a.name);
      options = [correctValue, ...others].sort(() => Math.random() - 0.5);
      valueAttr = 'artist';
    } else if (questionType === 'title') {
      questionText = 'What is this painting called?';
      correctValue = target.work.title;
      const otherTitles = [];
      ARTISTS.forEach(a => a.works.forEach(w => { if (w.title !== correctValue) otherTitles.push(w.title); }));
      const others = otherTitles.sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctValue, ...others].sort(() => Math.random() - 0.5);
      valueAttr = 'title';
    } else {
      questionText = 'Where is the artist from?';
      const correctCountry = COUNTRIES.find(c => c.code === target.artist.country);
      correctValue = correctCountry ? correctCountry.name : target.artist.country;
      const otherCountries = COUNTRIES.filter(c => c.code !== target.artist.country).sort(() => Math.random() - 0.5).slice(0, 3).map(c => c.name);
      options = [correctValue, ...otherCountries].sort(() => Math.random() - 0.5);
      valueAttr = 'country';
    }

    document.getElementById('artQuizQuestion').textContent = questionText;
    document.getElementById('artQuizOptions').innerHTML = options.map(opt =>
      '<button class="site-opt" data-value="' + escapeAttr(opt) + '" onclick="answerArt(this, \'' + opt.replace(/'/g, "\\'") + '\')">' + escapeHtml(opt) + '</button>'
    ).join('');
    document.getElementById('artQuizAnswer').textContent = '';
  }

  function answerArt(btn, value) {
    if (artAnswered || !artQuizState) return;
    artAnswered = true;
    artTriesCount++;
    const { target, questionType } = artQuizState;
    let correctValue;
    if (questionType === 'artist') correctValue = target.artist.name;
    else if (questionType === 'title') correctValue = target.work.title;
    else { const c = COUNTRIES.find(c => c.code === target.artist.country); correctValue = c ? c.name : target.artist.country; }

    const all = document.querySelectorAll('#artQuizOptions .site-opt');
    if (value === correctValue) {
      artCorrectCount++;
      btn.classList.add('correct');
      if (typeof awardCoins === 'function') awardCoins(3, 'Art quiz · correct');
    } else {
      btn.classList.add('wrong');
      all.forEach(b => { if (b.getAttribute('data-value') === correctValue) b.classList.add('correct'); });
    }
    // Show answer + trivia
    const country = COUNTRIES.find(c => c.code === target.artist.country);
    document.getElementById('artQuizAnswer').innerHTML =
      '<strong>' + escapeHtml(target.work.title) + '</strong> · ' + escapeHtml(target.artist.name) +
      ' · ' + escapeHtml(target.work.year) + ' · ' + (country ? escapeHtml(country.name) : '') +
      '<br><span style="font-style: italic; color: var(--ink-soft);">' + escapeHtml(target.work.trivia) + '</span>';
    document.getElementById('artCorrect').textContent = artCorrectCount;
    document.getElementById('artTries').textContent = artTriesCount;
  }


  // ============================================================================
  // TRANSLATOR WIDGET (Resources page)
  // - Auto-detects Spanish vs English from input
  // - Live preview via MyMemory free API (no key, ~5000 chars/day per IP)
  // - "Look up in WordReference" button always works, URL changes by direction
  // - Graceful failure: if MyMemory blocked/fails, status shows but WR button still works
  // ============================================================================
  (function setupTranslator() {
    let trInitialized = false;
    let trDebounceTimer = null;
    let trCurrentDirection = 'es-en'; // 'es-en' or 'en-es'
    let trManualDirection = null;     // user-flipped override; null = auto
    let trLastFetched = '';           // skip refetch if same input

    // Common-word heuristic. Returns 'es', 'en', or null (too short/ambiguous).
    function detectLanguage(text) {
      const t = text.trim().toLowerCase();
      if (t.length < 2) return null;
      // Spanish-only characters are a strong signal
      if (/[ñáéíóúü¿¡]/.test(t)) return 'es';
      // Word-list heuristic for cases with no accents
      const tokens = t.split(/[\s.,;:!?¿¡"'()]+/).filter(Boolean);
      if (tokens.length === 0) return null;
      const esWords = new Set(['el','la','los','las','un','una','unos','unas','y','o','pero','que','de','del','al','en','con','por','para','sin','sobre','su','sus','mi','mis','tu','tus','yo','tú','él','ella','nosotros','ellos','ellas','es','son','está','están','estoy','estás','soy','eres','ser','estar','tener','tengo','tienes','tiene','hay','muy','también','más','no','sí','como','cuando','donde','quien','porque','aquí','allí','este','esta','estos','estas','ese','esa','esos','esas','hola','adiós','gracias','por favor','perdón','buenos','buenas','dias','días','tarde','tardes','noche','noches','casa','agua','comida','familia','amigo','amiga','amor','vida','hombre','mujer','niño','niña','tiempo','día','año','mundo','país','ciudad','calle','libro','escuela','trabajo','dinero','perro','gato']);
      const enWords = new Set(['the','a','an','and','or','but','that','of','in','on','at','to','for','with','from','by','about','as','is','are','was','were','be','been','being','am','has','have','had','do','does','did','will','would','can','could','should','may','might','must','i','you','he','she','it','we','they','my','your','his','her','its','our','their','this','that','these','those','what','when','where','who','why','how','here','there','yes','no','not','very','too','also','more','most','some','any','all','one','two','three','hello','hi','goodbye','bye','thanks','thank','please','sorry','good','morning','afternoon','evening','night','house','water','food','family','friend','love','life','man','woman','boy','girl','time','day','year','world','country','city','street','book','school','work','money','dog','cat']);
      let es = 0, en = 0;
      tokens.forEach(w => { if (esWords.has(w)) es++; if (enWords.has(w)) en++; });
      if (es === 0 && en === 0) {
        // Single token, no matches — check character pattern
        // 'es' final vowels common; 'en' ends in consonant more often. Weak signal.
        if (/[aeiou]$/.test(tokens[0])) return 'es';
        return 'en';
      }
      if (es > en) return 'es';
      if (en > es) return 'en';
      return null;
    }

    function updateDirectionUI(lang) {
      const fromEl = document.getElementById('trDirFrom');
      const toEl = document.getElementById('trDirTo');
      const hintEl = document.getElementById('trDirHint');
      if (!fromEl || !toEl) return;
      if (lang === 'es') {
        trCurrentDirection = 'es-en';
        fromEl.textContent = 'SPANISH';
        toEl.textContent = 'ENGLISH';
      } else {
        trCurrentDirection = 'en-es';
        fromEl.textContent = 'ENGLISH';
        toEl.textContent = 'SPANISH';
      }
      if (hintEl) hintEl.textContent = trManualDirection ? 'manual (use ⇄ to flip)' : 'auto-detected';
    }

    function updateWordReferenceLink(text) {
      const link = document.getElementById('trWRLink');
      if (!link) return;
      const q = (text || '').trim();
      if (!q) {
        link.href = 'https://www.wordreference.com/';
        return;
      }
      const encoded = encodeURIComponent(q);
      // WordReference URL patterns:
      //  ES → EN: https://www.wordreference.com/es/en/translation.asp?spen=palabra
      //  EN → ES: https://www.wordreference.com/es/translation.asp?tranword=word
      if (trCurrentDirection === 'es-en') {
        link.href = 'https://www.wordreference.com/es/en/translation.asp?spen=' + encoded;
      } else {
        link.href = 'https://www.wordreference.com/es/translation.asp?tranword=' + encoded;
      }
    }

    async function fetchTranslation(text) {
      const statusEl = document.getElementById('trStatus');
      const outEl = document.getElementById('trOutput');
      if (!outEl) return;
      const q = (text || '').trim();
      if (!q) {
        outEl.textContent = '';
        if (statusEl) statusEl.textContent = '';
        return;
      }
      if (q === trLastFetched) return; // skip if same as previous
      trLastFetched = q;
      if (statusEl) statusEl.textContent = 'translating…';
      try {
        const langpair = trCurrentDirection === 'es-en' ? 'es|en' : 'en|es';
        const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(q) + '&langpair=' + langpair;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        const resp = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const data = await resp.json();
        const translated = data && data.responseData && data.responseData.translatedText;
        if (translated) {
          outEl.textContent = translated;
          if (statusEl) statusEl.textContent = '';
        } else {
          throw new Error('No translation in response');
        }
      } catch (err) {
        // Graceful fallback — show message and direct to WordReference
        outEl.innerHTML = '<span style="color: var(--ink-soft); font-style: italic;">Live preview unavailable. Click "Look up in WordReference" below for the dictionary entry.</span>';
        if (statusEl) statusEl.textContent = 'preview offline';
      }
    }

    function handleInput() {
      const input = document.getElementById('trInput');
      if (!input) return;
      const text = input.value;
      // Detect direction (unless user manually overrode)
      if (!trManualDirection) {
        const detected = detectLanguage(text);
        if (detected) updateDirectionUI(detected);
      }
      updateWordReferenceLink(text);
      // Debounce the API call so we don't hammer it on every keystroke
      clearTimeout(trDebounceTimer);
      trDebounceTimer = setTimeout(() => fetchTranslation(text), 600);
    }

    function handleFlip() {
      // Flip direction manually. Keep flipped until user clears or auto re-detects on next input.
      trManualDirection = trCurrentDirection === 'es-en' ? 'en' : 'es';
      updateDirectionUI(trManualDirection === 'es' ? 'es' : 'en');
      // Re-fetch with new direction
      trLastFetched = ''; // force refetch
      const input = document.getElementById('trInput');
      if (input) {
        updateWordReferenceLink(input.value);
        fetchTranslation(input.value);
      }
    }

    // Initialize when the Resources page is shown
    function initTranslator() {
      if (trInitialized) return;
      const input = document.getElementById('trInput');
      const flipBtn = document.getElementById('trFlipBtn');
      if (!input || !flipBtn) return; // page not in DOM yet
      input.addEventListener('input', handleInput);
      flipBtn.addEventListener('click', handleFlip);
      trInitialized = true;
    }

    // Expose init globally so showPage can call it
    window.__initTranslator = initTranslator;
  })();

  function buildMundoCountryTabs(availableCodes) {
    const sortedCodes = COUNTRIES
      .filter(c => availableCodes.includes(c.code))
      .map(c => c.code);
    const allBtn = `<button class="mundo-country-tab ${mundoCountryFilter === 'all' ? 'active' : ''}" onclick="setMundoCountryFilter('all', this)">All countries</button>`;
    const countryBtns = sortedCodes.map(code => {
      const country = COUNTRIES.find(c => c.code === code);
      const flag = FLAGS[code] || '';
      const isActive = mundoCountryFilter === code ? 'active' : '';
      return `<button class="mundo-country-tab ${isActive}" onclick="setMundoCountryFilter('${code}', this)"><span class="tab-flag">${flag}</span><span class="tab-name">${country ? country.name : code}</span></button>`;
    }).join('');
    return `<div class="mundo-country-tabs">${allBtn}${countryBtns}</div>`;
  }

  function renderKnownFor() {
    const grid = document.getElementById('knownForGrid');
    const tabs = document.getElementById('knownForTabs');
    if (!grid) return;

    // Available countries = ones that have KNOWN_FOR data
    const availableCodes = Object.keys(KNOWN_FOR).filter(code => KNOWN_FOR[code] && KNOWN_FOR[code].length > 0);
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    // Filter countries based on selected filter
    const countriesToShow = mundoCountryFilter === 'all'
      ? COUNTRIES.filter(c => availableCodes.includes(c.code))
      : COUNTRIES.filter(c => c.code === mundoCountryFilter);

    if (countriesToShow.length === 0) {
      grid.innerHTML = `<div class="mundo-empty">No "known for" data yet for the selected country.</div>`;
      return;
    }

    grid.innerHTML = countriesToShow.map(c => {
      const items = KNOWN_FOR[c.code] || [];
      const tagsHtml = items.map(([icon, label]) =>
        `<span class="tag"><span class="icon">${icon}</span>${label}</span>`
      ).join('');
      return `
        <div class="known-card">
          <div class="head">
            <div class="mini-flag">${FLAGS[c.code] || ''}</div>
            <h4>${c.name}</h4>
          </div>
          <div class="tags">${tagsHtml}</div>
        </div>
      `;
    }).join('');
  }

