  /* ============== LANDMARK / SITE QUIZ ============== */
  // Famous landmarks across the Spanish-speaking world.
  // Images sourced from Wikimedia Commons (public domain or freely licensed).
  // Each entry: { name (site), country code, image URL, fact, attribution }
  const SITES = [
    { name: 'Machu Picchu', country: 'PE', img: 'images/sites/machu-picchu.jpg', fact: 'A 15th-century Inca citadel high in the Andes mountains.', credit: 'Pedro Szekely / CC BY-SA' },
    { name: 'Sagrada Família', country: 'ES', img: 'images/sites/sagrada-familia.jpg', fact: 'Antoni Gaudí\'s unfinished basilica in Barcelona — under construction since 1882.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Chichén Itzá', country: 'MX', img: 'images/sites/chichen-itza.jpg', fact: 'A massive Maya pyramid (El Castillo) in Yucatán, built around 800-1100 CE.', credit: 'Wikimedia / Public Domain' },
    { name: 'Salar de Uyuni', country: 'BO', img: 'images/sites/salar-de-uyuni.jpg', fact: 'The world\'s largest salt flat — 4,086 square miles of mirror-like white.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Cartagena old city', country: 'CO', img: 'images/sites/cartagena.jpg', fact: 'A walled colonial city on Colombia\'s Caribbean coast — UNESCO World Heritage.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Iguazú Falls', country: 'AR', img: 'images/sites/iguazu-falls.jpg', fact: 'A system of 275 waterfalls on the Argentina-Brazil border. Taller than Niagara.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Plaza de Mayo', country: 'AR', img: 'images/sites/plaza-de-mayo.jpg', fact: 'Buenos Aires\' political heart — site of the Casa Rosada presidential palace.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Alhambra', country: 'ES', img: 'images/sites/alhambra.jpg', fact: 'A Moorish palace and fortress in Granada — masterpiece of Islamic architecture in Europe.', credit: 'Berthold Werner / CC BY-SA' },
    { name: 'Tikal', country: 'GT', img: 'images/sites/tikal.jpg', fact: 'Ancient Maya city in the jungles of Guatemala — once one of the largest in the Americas.', credit: 'Wikimedia / Public Domain' },
    { name: 'Easter Island', country: 'CL', img: 'images/sites/easter-island.jpg', fact: 'Rapa Nui — Chilean island famous for its 887 stone moai statues.', credit: 'Wikimedia / Public Domain' },
    { name: 'Old San Juan', country: 'PR', img: 'images/sites/old-san-juan.jpg', fact: 'Castillo San Felipe del Morro — a 16th-century Spanish fortress guarding San Juan Bay.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Galápagos Islands', country: 'EC', img: 'images/sites/galapagos.jpg', fact: 'The volcanic archipelago that inspired Darwin\'s theory of evolution.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Lake Titicaca', country: 'PE', img: 'images/sites/lake-titicaca.jpg', fact: 'The highest navigable lake in the world — sits between Peru and Bolivia at 12,500 ft.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Havana Malecón', country: 'CU', img: 'images/sites/havana-malecon.jpg', fact: 'Havana\'s famous seawall promenade — five miles of crashing waves and pastel buildings.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Panama Canal', country: 'PA', img: 'images/sites/panama-canal.jpg', fact: 'The 50-mile waterway connecting the Atlantic and Pacific oceans, opened in 1914.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Teotihuacán', country: 'MX', img: 'images/sites/teotihuacan.jpg', fact: 'A pre-Columbian city near Mexico City with the third-largest pyramid in the world.', credit: 'Wikimedia / CC BY-SA' },
    { name: 'Angel Falls (Salto Ángel)', country: 'VE', img: '', fact: 'The world\'s tallest uninterrupted waterfall — 979 meters tall — in the Venezuelan jungle.', credit: '' },
    { name: 'Atacama Desert', country: 'CL', img: '', fact: 'The driest non-polar desert in the world. Some areas have never recorded rainfall in human history.', credit: '' },
    { name: 'Torres del Paine', country: 'CL', img: '', fact: 'Three granite peaks rising from the Patagonian steppe in southern Chile.', credit: '' },
    { name: 'Perito Moreno Glacier', country: 'AR', img: '', fact: 'A massive 250-square-kilometer glacier in Patagonia — one of the few still advancing.', credit: '' },
    { name: 'Nazca Lines', country: 'PE', img: '', fact: 'Giant ancient geoglyphs (monkey, hummingbird, spider) carved into the Peruvian desert — visible only from the air.', credit: '' },
    { name: 'Tulum', country: 'MX', img: '', fact: 'Ancient Maya seaside fortress on Mexico\'s Caribbean coast — built on cliffs above turquoise water.', credit: '' },
    { name: 'Copán', country: 'HN', img: '', fact: 'Maya archaeological site in Honduras famous for its intricate stone stelae and hieroglyphic stairway.', credit: '' },
    { name: 'Granada (Nicaragua)', country: 'NI', img: '', fact: 'The oldest colonial city in the Americas — founded in 1524 on Lake Nicaragua.', credit: '' },
    { name: 'Arenal Volcano', country: 'CR', img: '', fact: 'An active conical volcano in Costa Rica, surrounded by hot springs and cloud forest.', credit: '' },
    { name: 'Zona Colonial Santo Domingo', country: 'DO', img: '', fact: 'The first European settlement in the Americas — founded in 1496.', credit: '' },
    { name: 'Camino de Santiago', country: 'ES', img: '', fact: 'A medieval pilgrimage route across northern Spain ending at the cathedral of Santiago de Compostela.', credit: '' },
    { name: 'Park Güell', country: 'ES', img: '', fact: 'Antoni Gaudí\'s colorful mosaic park overlooking Barcelona — built 1900-1914.', credit: '' },
    { name: 'Casa Azul (Frida Kahlo)', country: 'MX', img: '', fact: 'Frida Kahlo\'s lifelong home in Coyoacán, Mexico City — now her museum.', credit: '' },
    { name: 'La Boca / Caminito', country: 'AR', img: '', fact: 'A colorful Buenos Aires neighborhood famous for tango and brightly painted tin houses.', credit: '' },
    { name: 'Lima\'s Plaza Mayor', country: 'PE', img: '', fact: 'The historic heart of colonial Lima — fountain from 1651, government palace, cathedral.', credit: '' },
  ];

  let siteQuizSite = null;
  let siteQuizQuestionType = 'country'; // 'country' or 'name'
  let siteCorrectCount = 0, siteTriesCount = 0;
  let siteAnswered = false;

  function newSiteQuiz() {
    siteAnswered = false;
    const target = SITES[Math.floor(Math.random() * SITES.length)];
    siteQuizSite = target;
    // Two question modes: ask the country (show name + clue) OR ask the name (show fact + country)
    siteQuizQuestionType = Math.random() < 0.5 ? 'country' : 'name';

    // TEXT-BASED CLUE — no image dependency.
    // Image hosting is blocked by the school's Chromebook restrictions, so the
    // quiz now uses the site's `fact` and `name` as the clue. Pedagogically
    // this is actually stronger — students learn names + facts, not just visual recognition.
    const imgEl = document.getElementById('siteQuizImage');
    if (imgEl) {
      if (siteQuizQuestionType === 'country') {
        // Show the name + the fact; ask which country
        imgEl.innerHTML = `
          <div style="padding: 28px 32px; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 12px; box-sizing: border-box;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft);">Landmark</div>
            <div style="font-family: 'DM Serif Display', serif; font-size: 32px; line-height: 1.15; color: var(--ink);">${target.name}</div>
            <div style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.5; color: var(--ink-soft); font-style: italic;">${target.fact}</div>
          </div>`;
      } else {
        // Show just the fact + country flag; ask which landmark
        const flag = FLAGS[target.country] || '';
        const country = COUNTRIES.find(c => c.code === target.country);
        imgEl.innerHTML = `
          <div style="padding: 28px 32px; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 14px; box-sizing: border-box;">
            <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft);">Found in</div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 38px; line-height: 1;">${flag}</span>
              <span style="font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--ink);">${country ? country.name : ''}</span>
            </div>
            <div style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.5; color: var(--ink-soft); font-style: italic;">${target.fact}</div>
          </div>`;
      }
    }
    // Caption: no longer photo credit (no photo). Use a subtle hint instead.
    const captionEl = document.getElementById('siteQuizCaption');
    if (captionEl) captionEl.textContent = '';

    // Build question + options
    if (siteQuizQuestionType === 'country') {
      document.getElementById('siteQuizQuestion').innerHTML = 'Which Spanish-speaking country is this landmark in?';
      const correct = COUNTRIES.find(c => c.code === target.country);
      const others = COUNTRIES.filter(c => c.code !== target.country).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [correct, ...others].sort(() => Math.random() - 0.5);
      document.getElementById('siteQuizOptions').innerHTML = options.map(o => `
        <button class="site-opt" data-code="${o.code}" onclick="answerSite(this, '${o.code}')">${FLAGS[o.code] || ''} ${o.name}</button>
      `).join('');
    } else {
      document.getElementById('siteQuizQuestion').innerHTML = 'What place is being described?';
      // Build options from other site names
      const others = SITES.filter(s => s.name !== target.name).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [target, ...others].sort(() => Math.random() - 0.5);
      document.getElementById('siteQuizOptions').innerHTML = options.map(o => `
        <button class="site-opt" data-name="${o.name}" onclick="answerSite(this, null, '${o.name.replace(/'/g, "\\'")}')">${o.name}</button>
      `).join('');
    }
    document.getElementById('siteQuizAnswer').textContent = '';
  }

  function answerSite(btn, code, name) {
    if (siteAnswered) return;
    siteAnswered = true;
    const all = document.querySelectorAll('.site-opt');
    all.forEach(b => b.disabled = true);
    siteTriesCount++;

    let isCorrect = false;
    if (siteQuizQuestionType === 'country') {
      isCorrect = code === siteQuizSite.country;
    } else {
      isCorrect = name === siteQuizSite.name;
    }

    if (isCorrect) {
      btn.classList.add('correct');
      siteCorrectCount++;
      STATE.sitesCorrect = (STATE.sitesCorrect || 0) + 1;
      awardCoins(3, 'Site correct: ' + siteQuizSite.name);
    } else {
      btn.classList.add('wrong');
      // Highlight the correct one
      all.forEach(b => {
        if (siteQuizQuestionType === 'country' && b.dataset.code === siteQuizSite.country) b.classList.add('correct');
        if (siteQuizQuestionType === 'name' && b.dataset.name === siteQuizSite.name) b.classList.add('correct');
      });
    }

    // Show the fact and answer
    const correctCountry = COUNTRIES.find(c => c.code === siteQuizSite.country);
    document.getElementById('siteQuizAnswer').innerHTML = `<strong>${siteQuizSite.name}</strong> · ${correctCountry ? correctCountry.name : ''} — ${siteQuizSite.fact}`;
    document.getElementById('siteCorrect').textContent = siteCorrectCount;
    document.getElementById('siteTries').textContent = siteTriesCount;
  }

