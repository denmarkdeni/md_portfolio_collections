/* =====================================================
   DENI RAJ PORTFOLIO – script.js
   Desert Sand Theme | UI/UX Designer Portfolio
   ===================================================== */

'use strict';

/* ─── UTILITIES ─────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice        = () => window.matchMedia('(hover: none)').matches;

/* ─── INIT ON DOM READY ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initActiveNav();
  initCustomCursor();
  initSandCanvas();
  initScrollReveal();
  initCounters();
  initSkillBars();
  initProjectFilter();
  initContactForm();
});

/* ═══════════════════════════════════════════════════════
   1. NAVBAR – scroll glass effect
   ═══════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = $('#navbar');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 55);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ═══════════════════════════════════════════════════════
   2. ACTIVE NAV LINKS – highlight current section
   ═══════════════════════════════════════════════════════ */
function initActiveNav() {
  const sections  = $$('section[id]');
  const navLinks  = $$('.nav-link');
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
  ) || 68;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const active = link.dataset.section === id;
          link.classList.toggle('active', active);
        });
      }
    });
  }, { rootMargin: `-${navHeight}px 0px -58% 0px`, threshold: 0 });

  sections.forEach(s => observer.observe(s));
}

/* ═══════════════════════════════════════════════════════
   3. MOBILE MENU
   ═══════════════════════════════════════════════════════ */
function initMobileMenu() {
  const burger  = $('#hamburger');
  const menu    = $('#mobile-menu');
  const mLinks  = $$('.mobile-nav-link');
  if (!burger || !menu) return;

  const toggleMenu = open => {
    burger.classList.toggle('is-open', open);
    menu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () =>
    toggleMenu(!menu.classList.contains('is-open'))
  );
  mLinks.forEach(l => l.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) toggleMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMenu(false);
  });
}

/* ═══════════════════════════════════════════════════════
   4. CUSTOM CAMEL CURSOR
   ═══════════════════════════════════════════════════════ */
function initCustomCursor() {
  if (isTouchDevice()) return;
  const cursor = $('#custom-cursor');
  if (!cursor) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;
  const EASE = 0.115;
  let rafId;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  const tick = () => {
    cx += (mx - cx) * EASE;
    cy += (my - cy) * EASE;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    rafId = requestAnimationFrame(tick);
  };
  tick();

  /* hover state */
  const clickables = $$('a, button, [role="tab"], input, textarea, select, label, .filter-btn, .btn-case');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });

  /* click bob */
  document.addEventListener('mousedown', () => {
    cursor.classList.add('is-clicking');
    cursor.classList.remove('is-hovering');
  });
  document.addEventListener('mouseup', () => cursor.classList.remove('is-clicking'));

  /* hide when leaving viewport */
  document.addEventListener('mouseleave', () => (cursor.style.opacity = '0'));
  document.addEventListener('mouseenter', () => (cursor.style.opacity = '1'));

  /* pause when tab hidden */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else tick();
  });
}

/* ═══════════════════════════════════════════════════════
   5. SAND PARTICLE CANVAS
   ═══════════════════════════════════════════════════════ */
function initSandCanvas() {
  if (isTouchDevice() || prefersReducedMotion()) return;
  const canvas = $('#sand-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* Sand palette – rgba strings with 'A' placeholder */
  const COLORS = [
    [244, 217, 160], [232, 194, 122], [201, 154,  75],
    [246, 227, 180], [217, 168,  92], [139,  90,  43],
    [200,  85,  61], [248, 228, 158],
  ];
  const MAX = 300;
  let particles = [];

  /* resize */
  const resize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  /* ── Particle class ── */
  class Particle {
    constructor(x, y, speedMult, burst) {
      this.x = x; this.y = y;
      const [r, g, b] = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.r = r; this.g = g; this.b = b;
      const spd   = (Math.random() * 2.8 + 0.7) * speedMult;
      const angle = burst
        ? Math.random() * Math.PI * 2
        : (Math.random() * Math.PI - Math.PI / 2) + 0.6;
      this.vx      = Math.cos(angle) * spd + velX * 0.14;
      this.vy      = Math.sin(angle) * spd - Math.random() * 1.8;
      this.gravity = 0.055 + Math.random() * 0.045;
      this.wind    = 0.018 + Math.random() * 0.028;   /* slight right drift */
      this.size    = Math.random() * (burst ? 4.5 : 3) + 0.8;
      this.life    = 1;
      this.decay   = 0.008 + Math.random() * 0.013;
    }
    update() {
      this.vx   += this.wind;
      this.vy   += this.gravity;
      this.x    += this.vx;
      this.y    += this.vy;
      this.life -= this.decay;
      this.size  = Math.max(0, this.size - 0.018);
    }
    draw() {
      const a = Math.max(0, this.life * 0.9);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${a.toFixed(2)})`;
      ctx.fill();
    }
    get dead() { return this.life <= 0 || this.size <= 0; }
  }

  /* mouse velocity tracking */
  let lastX = 0, lastY = 0, lastT = 0;
  let velX  = 0, velY  = 0;

  const emit = (x, y, count, burst = false) => {
    const space = MAX - particles.length;
    for (let i = 0; i < Math.min(count, space); i++) {
      particles.push(new Particle(x, y, 1, burst));
    }
  };

  document.addEventListener('mousemove', e => {
    const now = performance.now();
    const dt  = now - lastT || 16;
    velX = (e.clientX - lastX) / dt * 16;
    velY = (e.clientY - lastY) / dt * 16;
    const speed = Math.hypot(velX, velY);
    emit(e.clientX, e.clientY, Math.min(Math.floor(speed * 0.75) + 1, 9));
    lastX = e.clientX; lastY = e.clientY; lastT = now;
  });

  document.addEventListener('click', e => emit(e.clientX, e.clientY, 35, true));

  /* render loop */
  let running = true;
  const loop = () => {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => !p.dead);
    for (const p of particles) { p.update(); p.draw(); }
    requestAnimationFrame(loop);
  };
  loop();

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (!document.hidden) loop();
  });
}

/* ═══════════════════════════════════════════════════════
   6. SCROLL REVEAL
   ═══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = $$('.reveal-section');
  if (!els.length) return;

  if (prefersReducedMotion()) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════
   7. ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════ */
function initCounters() {
  const counters = $$('.stat-num[data-target]');
  if (!counters.length) return;

  /* instant if motion is reduced */
  if (prefersReducedMotion()) {
    counters.forEach(el => {
      el.textContent = el.dataset.target + (el.dataset.suffix || '');
    });
    return;
  }

  /* easeOutQuart */
  const ease = t => 1 - Math.pow(1 - t, 4);
  const DURATION = 1650;

  const animateOne = el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const start  = performance.now();
    const tick   = now => {
      const p = Math.min((now - start) / DURATION, 1);
      el.textContent = Math.round(ease(p) * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateOne(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════
   8. SKILL BARS – fill like sand in a tube
   ═══════════════════════════════════════════════════════ */
function initSkillBars() {
  const bars = $$('.skill-fill[data-width]');
  if (!bars.length) return;

  if (prefersReducedMotion()) {
    bars.forEach(b => (b.style.width = b.dataset.width + '%'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        /* small delay so it triggers visibly after section reveals */
        setTimeout(() => (bar.style.width = bar.dataset.width + '%'), 220);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.35 });

  bars.forEach(b => observer.observe(b));
}

/* ═══════════════════════════════════════════════════════
   9. PROJECT FILTER
   ═══════════════════════════════════════════════════════ */
function initProjectFilter() {
  const btns  = $$('.filter-btn');
  const cards = $$('.project-card');
  if (!btns.length || !cards.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      /* update buttons */
      btns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      /* filter cards with a tiny fade */
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('is-hidden');
          card.style.animation = 'none';
          void card.offsetHeight;        /* reflow to restart animation */
          card.style.animation = '';
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════
   10. CONTACT FORM VALIDATION
   ═══════════════════════════════════════════════════════ */
function initContactForm() {
  const form       = $('#contact-form');
  const successMsg = $('#form-success');
  if (!form) return;

  const nameInput = $('#contact-name');
  const mailInput = $('#contact-email');
  const msgInput  = $('#contact-message');
  const nameErr   = $('#name-error');
  const mailErr   = $('#email-error');
  const msgErr    = $('#msg-error');

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const setErr = (input, errEl, msg) => {
    errEl.textContent = msg;
    input.classList.toggle('error', !!msg);
  };

  const validateField = (input, errEl) => {
    const v = input.value.trim();
    if (!v) { setErr(input, errEl, 'This field is required.'); return false; }
    if (input.type === 'email' && !isEmail(v)) {
      setErr(input, errEl, 'Please enter a valid email address.');
      return false;
    }
    if (input.tagName === 'TEXTAREA' && v.length < 10) {
      setErr(input, errEl, 'Message must be at least 10 characters.');
      return false;
    }
    setErr(input, errEl, '');
    return true;
  };

  /* live validation after first blur */
  [[nameInput, nameErr], [mailInput, mailErr], [msgInput, msgErr]].forEach(([inp, err]) => {
    inp.addEventListener('blur', () => validateField(inp, err));
    inp.addEventListener('input', () => {
      if (inp.classList.contains('error')) validateField(inp, err);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = [
      validateField(nameInput, nameErr),
      validateField(mailInput, mailErr),
      validateField(msgInput,  msgErr),
    ].every(Boolean);

    if (ok) {
      form.style.display = 'none';
      successMsg.hidden  = false;
      successMsg.removeAttribute('hidden');
    }
  });
}
