const yearTarget = document.querySelector('[data-year]');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      current = section.id;
    }
  }

  navAnchors.forEach((anchor) => {
    anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();
