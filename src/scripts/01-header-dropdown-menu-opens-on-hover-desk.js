
  // Header dropdown menu: opens on hover (desktop, via CSS) or tap/click (touch).
  function toggleNavMenu(e) {
    if (e) e.stopPropagation();
    var dd = document.getElementById('navDropdown');
    var tg = document.getElementById('navMenuToggle');
    if (!dd) return;
    var open = dd.classList.toggle('open');
    if (tg) tg.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeNavMenu() {
    var dd = document.getElementById('navDropdown');
    var tg = document.getElementById('navMenuToggle');
    if (dd) dd.classList.remove('open');
    if (tg) tg.setAttribute('aria-expanded', 'false');
  }
  // Tap/click anywhere outside the menu closes it.
  document.addEventListener('click', function (ev) {
    var menu = document.getElementById('navMenu');
    if (menu && !menu.contains(ev.target)) closeNavMenu();
  });
