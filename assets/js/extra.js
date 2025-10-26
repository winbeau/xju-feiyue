document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const navItems = Array.from(navbar.querySelectorAll('.nav-item'));
  const contentItems = Array.from(document.querySelectorAll('.content-item'));
  const decoration = navbar.querySelector('.nav-decoration');

  const moveDecoration = (elem) => {
    if (!decoration || !elem) return;
    window.requestAnimationFrame(() => {
      decoration.style.width = `${elem.offsetWidth}px`;
      decoration.style.transform = `translateX(${elem.offsetLeft}px)`;
      decoration.classList.add('is-active');
    });
  };

  const activateTab = (btn) => {
    if (!btn) return;
    const navId = btn.dataset.tab;

    contentItems.forEach((section) => {
      section.classList.toggle('active', section.id === navId);
    });

    navItems.forEach((item) => {
      item.classList.toggle('active', item === btn);
    });

    moveDecoration(btn);
  };

  navbar.addEventListener('click', (event) => {
    const btn = event.target.closest('.nav-item');
    if (!btn || !navbar.contains(btn)) return;
    activateTab(btn);
  });

  const first = navItems[0];
  if (first) activateTab(first);

  window.addEventListener('resize', () => {
    const active = navbar.querySelector('.nav-item.active');
    if (active) moveDecoration(active);
  });
});
