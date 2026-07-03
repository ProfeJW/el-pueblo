  /* ============== SHOP / REDEMPTION ============== */
  const SHOP_ITEMS = [
    // DIGITAL UNLOCKS — cheap, instant, no teacher involvement
    { id: 'theme_night', kind: 'digital', icon: '🌙', tag: 'Theme', name: 'Night <em>theme</em>', desc: 'Switch the site to a warm night mode for late-evening practice.', price: 75 },
    { id: 'theme_ocean', kind: 'digital', icon: '🌊', tag: 'Theme', name: 'Ocean <em>theme</em>', desc: 'Cool blues and sea greens. Calmer than the default warm tones.', price: 100 },
    { id: 'badge_explorer', kind: 'digital', icon: '🏅', tag: 'Badge', name: 'Explorer <em>badge</em>', desc: 'A permanent badge next to your name on the leaderboard.', price: 150 },
    { id: 'badge_polyglot', kind: 'digital', icon: '🎖️', tag: 'Badge', name: 'Polyglot <em>badge</em>', desc: 'Show off your dedication to Spanish. Worth it.', price: 400 },
    { id: 'unlock_advanced', kind: 'digital', icon: '🔓', tag: 'Unlock', name: 'Advanced <em>vocabulary</em>', desc: 'Unlocks 30 new words: literary terms, advanced verbs, idioms.', price: 225 },
    { id: 'unlock_lit', kind: 'digital', icon: '📚', tag: 'Unlock', name: 'Literary <em>passage</em>', desc: 'A second reading passage from a Latin American classic, with quiz.', price: 300 },

    // TEACHER REWARDS — more expensive, generate redemption codes
    { id: 'late_pass', kind: 'teacher', icon: '⏰', tag: 'Teacher reward', name: 'Late assignment <em>pass</em>', desc: 'Turn in one homework assignment 24 hours late, no penalty.', price: 175 },
    { id: 'snack', kind: 'teacher', icon: '🍪', tag: 'Teacher reward', name: 'Class <em>snack</em>', desc: 'Bring a snack from home with teacher\'s permission for one day.', price: 125 },
    { id: 'music_choice', kind: 'teacher', icon: '🎵', tag: 'Teacher reward', name: 'Music <em>choice</em>', desc: 'Pick the music for one class period or work session.', price: 125 },
    { id: 'partner_choice', kind: 'teacher', icon: '👥', tag: 'Teacher reward', name: 'Partner <em>choice</em>', desc: 'Choose your own partner for one group activity.', price: 100 },
    { id: 'extra_credit', kind: 'teacher', icon: '⭐', tag: 'Teacher reward', name: 'Extra credit <em>opportunity</em>', desc: 'Unlock a bonus extra-credit assignment to boost your grade.', price: 350 },
    { id: 'hw_pass', kind: 'teacher', icon: '🎫', tag: 'Teacher reward', name: 'Homework <em>pass</em>', desc: 'Skip one homework assignment, no penalty (one per quarter max).', price: 500 }
  ];

  let shopFilter = 'all';

  function renderShop() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    if (!STATE.unlockedItems) STATE.unlockedItems = new Set();
    if (!STATE.redemptions) STATE.redemptions = [];

    const filtered = shopFilter === 'all' ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.kind === shopFilter);
    grid.innerHTML = filtered.map(item => {
      const owned = item.kind === 'digital' && STATE.unlockedItems.has(item.id);
      const canAfford = STATE.coins >= item.price;
      const cls = owned ? 'unlocked' : (!canAfford ? 'unaffordable' : '');
      return `
        <div class="shop-item ${cls} ${item.kind === 'teacher' ? 'teacher' : ''}">
          <div class="shop-tag">${item.tag}</div>
          <div class="shop-icon">${item.icon}</div>
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="shop-bottom">
            <div class="shop-price"><span class="coin-icon"></span> ${item.price}</div>
            ${owned
              ? `<button class="shop-buy" disabled>Unlocked ✓</button>`
              : `<button class="shop-buy" ${!canAfford ? 'disabled' : ''} onclick="buyItem('${item.id}')">${item.kind === 'teacher' ? 'Redeem' : 'Buy'}</button>`}
          </div>
        </div>
      `;
    }).join('');

    renderRedemptionHistory();
  }

  function filterShop(kind, btn) {
    shopFilter = kind;
    document.querySelectorAll('#lucas .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderShop();
  }

  function buyItem(id) {
    const item = SHOP_ITEMS.find(i => i.id === id);
    if (!item) return;
    if (STATE.coins < item.price) return;
    if (item.kind === 'digital' && STATE.unlockedItems.has(id)) return;

    if (!confirm(`Spend ${item.price} Lucas on "${item.name.replace(/<[^>]+>/g, '')}"?`)) return;

    STATE.coins -= item.price;
    document.getElementById('coinTotal').textContent = STATE.coins;
    document.getElementById('statCoins').textContent = STATE.coins;

    if (item.kind === 'digital') {
      STATE.unlockedItems.add(id);
      applyDigitalUnlock(id);
      showToast('Unlocked: ' + item.name.replace(/<[^>]+>/g, ''), 0);
    } else {
      // Generate redemption code
      const code = generateCode();
      const rec = {
        id: id,
        code: code,
        item: item.name.replace(/<[^>]+>/g, ''),
        student: STUDENT_NAME,
        time: new Date().toISOString(),
        status: 'pending'
      };
      STATE.redemptions.unshift(rec);
      showRedeemModal(rec, item.desc);
    }

    saveState();
    renderShop();
  }

  function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 3; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    code += '-';
    for (let i = 0; i < 3; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
  }

  function showRedeemModal(rec, desc) {
    document.getElementById('redeemTitle').innerHTML = rec.item;
    document.getElementById('redeemDesc').textContent = desc;
    document.getElementById('redeemCode').textContent = rec.code;
    document.getElementById('redeemStudent').textContent = STUDENT_NAME;
    document.getElementById('redeemModal').classList.add('open');
  }

  function closeRedeemModal() {
    document.getElementById('redeemModal').classList.remove('open');
  }

  function renderRedemptionHistory() {
    const container = document.getElementById('redemptionHistory');
    if (!container) return;
    const recs = (STATE.redemptions || []).slice(0, 10);
    if (recs.length === 0) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = `
      <div class="redemption-history">
        <h3>Your <em style="font-style:italic;color:var(--rojo)">redemptions</em></h3>
        <p style="color: var(--ink-soft); font-size: 14px; margin-bottom: 20px;">Show these codes to your teacher to redeem your reward. They'll mark each one as used.</p>
        ${recs.map(r => `
          <div class="redemption-row">
            <span class="code">${r.code}</span>
            <span class="item-name">${r.item}</span>
            <span class="when">${new Date(r.time).toLocaleDateString()}</span>
            ${r.status === 'redeemed'
              ? `<span class="status redeemed">Redeemed ✓</span>`
              : `<button class="status" style="border:none;cursor:pointer" onclick="markRedeemed('${r.code}')">Pending — tap to mark</button>`}
          </div>
        `).join('')}
      </div>
    `;
  }

  function markRedeemed(code) {
    if (!confirm('Did your teacher confirm this reward? Marking it redeemed is permanent.')) return;
    const rec = (STATE.redemptions || []).find(r => r.code === code);
    if (rec) {
      rec.status = 'redeemed';
      saveState();
      renderShop();
    }
  }

  function applyDigitalUnlock(id) {
    if (id === 'theme_night') {
      document.documentElement.style.setProperty('--paper', '#1a1612');
      document.documentElement.style.setProperty('--paper-deep', '#241f18');
      document.documentElement.style.setProperty('--ink', '#f4ede0');
      document.documentElement.style.setProperty('--ink-soft', '#b8aa92');
    } else if (id === 'theme_ocean') {
      document.documentElement.style.setProperty('--paper', '#e8f0f4');
      document.documentElement.style.setProperty('--paper-deep', '#d4e1e8');
      document.documentElement.style.setProperty('--rojo', '#1e6091');
      document.documentElement.style.setProperty('--ocre', '#2a9d8f');
    }
    // Other unlocks (badges, advanced vocab) are tracked but not applied visually here
  }

  // Apply any previously unlocked themes on load
  function applySavedUnlocks() {
    if (!STATE.unlockedItems) return;
    STATE.unlockedItems.forEach(id => applyDigitalUnlock(id));
  }

