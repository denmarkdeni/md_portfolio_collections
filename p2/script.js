/* ============================================================
   YEAR
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   NAV: scroll state, active link, mobile toggle, smooth scroll
   ============================================================ */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
const navLinkEls = document.querySelectorAll('[data-nav]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

const sections = document.querySelectorAll('main .section, .hero');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => navObserver.observe(s));

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
const scrollBar = document.getElementById('scrollBar');
function updateProgress() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  scrollBar.style.width = scrolled + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ============================================================
   BACK TO TOP
   ============================================================ */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============================================================
   TYPEWRITER TAGLINE
   ============================================================ */
const phrases = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Curious Learner'
];
const typeEl = document.getElementById('typewriter');
let pIndex = 0, cIndex = 0, deleting = false;

function typeLoop() {
  const current = phrases[pIndex];
  if (!deleting) {
    cIndex++;
    typeEl.textContent = current.slice(0, cIndex);
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIndex--;
    typeEl.textContent = current.slice(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

/* ============================================================
   SCROLL REVEAL (Intersection Observer)
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* ============================================================
   SKILL BARS — animate fill + counters when visible
   ============================================================ */
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const level = card.getAttribute('data-level');
      const fill = card.querySelector('.skill-bar__fill');
      requestAnimationFrame(() => { fill.style.width = level + '%'; });
      skillObserver.unobserve(card);
    }
  });
}, { threshold: 0.4 });
skillCards.forEach(c => skillObserver.observe(c));

/* ============================================================
   ANIMATED STAT COUNTERS
   ============================================================ */
const statEls = document.querySelectorAll('.stat__num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.6 });
statEls.forEach(el => statObserver.observe(el));

/* ============================================================
   CANVAS: ambient constellation / neural-network background
   ============================================================ */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w, h, nodes;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function initNodes() {
  const count = Math.min(70, Math.floor((w * h) / 22000));
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.6 + 0.6
  }));
}
initNodes();
window.addEventListener('resize', initNodes);

const mouse = { x: null, y: null };
window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}, { passive: true });

const connectDist = 130;

function drawFrame() {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;

    // subtle attraction toward cursor
    if (mouse.x !== null) {
      const dx = mouse.x - n.x, dy = mouse.y - n.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 160) {
        n.x += dx * 0.0018;
        n.y += dy * 0.0018;
      }
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist < connectDist) {
        const alpha = (1 - dist / connectDist) * 0.18;
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(34,211,238,0.55)';
    ctx.fill();
  });

  if (!prefersReducedMotion) requestAnimationFrame(drawFrame);
}

if (!prefersReducedMotion) {
  drawFrame();
} else {
  // draw a single static frame
  drawFrame();
}