// ====== Theme toggle ======
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);
themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ====== Nav scroll state + mobile burger ======
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });
burger?.addEventListener('click', () => navLinks.classList.toggle('is-open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('is-open')));

// ====== Reveal on scroll ======
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('is-in'), i * 40);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ====== Animated counters ======
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const isFloat = suffix.includes('.');
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (isFloat ? '' : Math.floor(val)) + (isFloat && p === 1 ? suffix : isFloat ? (Math.floor(val) + (val % 1 ? '.' + Math.floor((val%1)*100).toString().padStart(2,'0') : '')) : '');
      if (p < 1) requestAnimationFrame(tick); else el.textContent = isFloat ? (Math.floor(target) + suffix) : target.toString();
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

// ====== Magnetic buttons ======
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

// ====== Custom cursor ======
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
});
const loop = () => {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(loop);
};
loop();
document.querySelectorAll('a, button, .project, .exp, .ach, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
});

// ====== Skill-card light follow ======
document.querySelectorAll('.skill-group').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// ====== Year ======
document.getElementById('year').textContent = new Date().getFullYear();
