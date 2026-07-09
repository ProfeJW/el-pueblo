  /* ============== AVATAR ============== */
  const AVATAR_EMOJIS = ['🦊','🐻','🐼','🐨','🦁','🐯','🐸','🐢','🐙','🦋','🦉','🐧','🦜','🐝','🌸','🌺','🌻','🌵','🍓','🍋','🌙','⭐','🔥','🎵','🎨','📚','✏️','🪐','🌎','⚓','🎸','🎭'];
  const AVATAR_COLORS = ['#d4922c','#c43d2a','#4a6b3a','#2c5282','#7d3c98','#d35400','#16a085','#34495e'];

  function loadAvatar() {
    const saved = localStorage.getItem('tertulia_avatar:' + STUDENT_NAME);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { type: 'emoji', value: AVATAR_EMOJIS[0], color: AVATAR_COLORS[0] };
  }

  function saveAvatar(a) {
    localStorage.setItem('tertulia_avatar:' + STUDENT_NAME, JSON.stringify(a));
  }

  function renderAvatar() {
    const a = loadAvatar();
    const btn = document.getElementById('avatarBtn');
    if (!btn) return;
    if (a.type === 'image') {
      btn.innerHTML = `<img src="${a.value}" alt="Your avatar">`;
      btn.style.background = 'transparent';
    } else {
      btn.innerHTML = a.value;
      btn.style.background = a.color || AVATAR_COLORS[0];
    }
  }

  function openAvatarPicker() {
    const a = loadAvatar();
    const grid = document.getElementById('avatarGrid');
    grid.innerHTML = AVATAR_EMOJIS.map(e =>
      `<div class="avatar-option ${a.type === 'emoji' && a.value === e ? 'selected' : ''}" onclick="selectAvatarEmoji('${e}')">${e}</div>`
    ).join('');
    const colors = document.getElementById('avatarColorRow');
    colors.innerHTML = AVATAR_COLORS.map(c =>
      `<div class="avatar-color ${a.color === c ? 'selected' : ''}" style="background: ${c};" onclick="selectAvatarColor('${c}')"></div>`
    ).join('');
    document.getElementById('avatarPicker').classList.add('open');
  }

  function closeAvatarPicker() {
    document.getElementById('avatarPicker').classList.remove('open');
  }

  function selectAvatarEmoji(e) {
    const a = loadAvatar();
    a.type = 'emoji';
    a.value = e;
    saveAvatar(a);
    renderAvatar();
    document.querySelectorAll('.avatar-option').forEach(el => el.classList.toggle('selected', el.textContent === e));
  }

  function selectAvatarColor(c) {
    const a = loadAvatar();
    a.color = c;
    if (a.type !== 'emoji') a.type = 'emoji';
    saveAvatar(a);
    renderAvatar();
    document.querySelectorAll('.avatar-color').forEach(el => el.classList.toggle('selected', el.style.background.includes(c.replace('#','')) || el.style.backgroundColor === c));
  }

  function uploadAvatar(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024) {
      alert('Image too large — please pick one under 1MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      saveAvatar({ type: 'image', value: e.target.result });
      renderAvatar();
    };
    reader.readAsDataURL(file);
  }

  function resetAvatar() {
    if (!confirm('Reset avatar to default?')) return;
    localStorage.removeItem('tertulia_avatar:' + STUDENT_NAME);
    renderAvatar();
    closeAvatarPicker();
  }

