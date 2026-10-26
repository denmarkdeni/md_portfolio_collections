/**
 * Deniston – AWS DevOps Portfolio · script.js
 * Features: Candle cursor, theme toggle, navbar scroll, terminal,
 *           pipeline animation, scroll reveal, stat counters,
 *           project modal, contact form, particles, back-to-top.
 */

'use strict';

/* ─────────────────────────────────────────────────
   UTILS
──────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────
   1. CANDLE CURSOR
──────────────────────────────────────────────────── */
(function initCursor() {
  const candle = $('#cursorCandle');
  const trail  = $('#cursorTrail');
  if (!candle || prefersReducedMotion()) return;
  // Hide on touch
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  let mx = -200, my = -200;
  let tx = -200, ty = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    candle.style.left = `${mx}px`;
    candle.style.top  = `${my}px`;
  });

  // Trail lags behind
  (function animateTrail() {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    trail.style.left = `${tx}px`;
    trail.style.top  = `${ty}px`;
    requestAnimationFrame(animateTrail);
  })();

  // Enlarge on interactive elements
  document.addEventListener('mouseenter', e => {
    const el = e.target;
    if (el.matches('a, button, input, textarea, [role="button"]')) {
      candle.style.transform = 'translate(-50%, -100%) scale(1.3)';
      trail.style.width  = '14px';
      trail.style.height = '14px';
      trail.style.background = 'rgba(255,153,0,0.3)';
    }
  }, true);
  document.addEventListener('mouseleave', e => {
    const el = e.target;
    if (el.matches('a, button, input, textarea, [role="button"]')) {
      candle.style.transform = 'translate(-50%, -100%) scale(1)';
      trail.style.width  = '6px';
      trail.style.height = '6px';
      trail.style.background = 'rgba(255,153,0,0.5)';
    }
  }, true);
})();

/* ─────────────────────────────────────────────────
   2. THEME TOGGLE
──────────────────────────────────────────────────── */
(function initTheme() {
  const btn = $('#themeToggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('deniston-theme') || 'dark';
  root.setAttribute('data-theme', saved);
  if (btn) btn.setAttribute('aria-pressed', saved === 'light' ? 'true' : 'false');

  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('deniston-theme', next);
    btn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
  });
})();

/* ─────────────────────────────────────────────────
   3. NAVBAR – SCROLL & MOBILE
──────────────────────────────────────────────────── */
(function initNavbar() {
  const navbar  = $('#navbar');
  const burger  = $('#navBurger');
  const navMenu = $('#navLinks');
  const navLinks = $$('.nav-link');

  // Scroll state
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile burger
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Active link highlight
  function updateActiveLink() {
    const sections = $$('section[id]');
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const link = $(`.nav-link[href="#${sec.id}"]`);
      if (!link) return;
      const top = sec.offsetTop;
      const bot = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bot) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
})();

/* ─────────────────────────────────────────────────
   4. SCROLL REVEAL
──────────────────────────────────────────────────── */
(function initReveal() {
  if (prefersReducedMotion()) {
    $$('[data-reveal]').forEach(el => el.classList.add('revealed'));
    return;
  }
  const els = $$('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(() => el.classList.add('revealed'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
})();

/* ─────────────────────────────────────────────────
   5. STAT COUNTER ANIMATION
──────────────────────────────────────────────────── */
(function initCounters() {
  if (prefersReducedMotion()) return;
  const counters = $$('.stat-number[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1500;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
})();

/* ─────────────────────────────────────────────────
   6. CI/CD PIPELINE ANIMATION
──────────────────────────────────────────────────── */
(function initPipeline() {
  const steps    = $$('.pipeline-step');
  const bar      = $('#pipelineBar');
  if (!steps.length || !bar) return;

  let current = 0;
  const total = steps.length;

  function activateStep(idx) {
    steps.forEach((s, i) => {
      s.classList.remove('active', 'done', 'running');
      if (i < idx)       s.classList.add('done');
      else if (i === idx) s.classList.add('active', 'running');
    });
    bar.style.width = `${(idx / (total - 1)) * 100}%`;
  }

  function runPipeline() {
    current = 0;
    activateStep(0);
    const interval = setInterval(() => {
      current++;
      if (current >= total) {
        clearInterval(interval);
        // Mark all done, then restart after delay
        setTimeout(() => {
          steps.forEach(s => { s.classList.remove('active', 'done', 'running'); });
          bar.style.width = '0%';
          setTimeout(runPipeline, 800);
        }, 1500);
      } else {
        activateStep(current);
      }
    }, 1200);
  }

  // Start when visible
  const pipelineEl = $('.pipeline-container');
  if (!pipelineEl || prefersReducedMotion()) { activateStep(3); bar.style.width = '100%'; return; }

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { runPipeline(); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(pipelineEl);
})();

/* ─────────────────────────────────────────────────
   7. TERMINAL
──────────────────────────────────────────────────── */
(function initTerminal() {
  const typingEl = $('#typingText');
  const termInput = $('#termInput');
  const termOutput = $('#termOutput');
  const termCursor = $('#termCursor');
  if (!typingEl) return;

  // Intro typing
  const intro = 'whoami';
  let idx = 0;
  if (!prefersReducedMotion()) {
    const typeInterval = setInterval(() => {
      if (idx < intro.length) {
        typingEl.textContent += intro[idx++];
      } else {
        clearInterval(typeInterval);
        termCursor.style.display = 'none';
        setTimeout(() => {
          appendOutput(runCommand('whoami'));
        }, 300);
      }
    }, 80);
  } else {
    typingEl.textContent = intro;
    termCursor.style.display = 'none';
    appendOutput(runCommand('whoami'));
  }

  // Commands
  const commands = {
    whoami: () => `<span class="t-accent">Deniston</span> – AWS DevOps Engineer
<span class="t-info">Location:</span> Chennai, India (IST UTC+5:30)
<span class="t-info">Status:</span> <span class="t-success">● Open to Work</span>`,

    help: () => `Available commands:
<span class="t-accent">about</span>      → Who I am
<span class="t-accent">skills</span>     → My tech stack
<span class="t-accent">projects</span>   → What I've built
<span class="t-accent">experience</span> → Work history
<span class="t-accent">contact</span>    → Get in touch
<span class="t-accent">certs</span>      → Certifications
<span class="t-accent">clear</span>      → Clear terminal`,

    about: () => `AWS DevOps Engineer with <span class="t-accent">4+ years</span> of experience.
<span class="t-info">Specialties:</span> CI/CD · Terraform · Kubernetes · Cost Optimization
<span class="t-info">Fun fact:</span> Reduced cloud bills by 40% across projects.`,

    skills: () => `<span class="t-accent">Cloud (AWS):</span>    EC2, EKS, Lambda, RDS, S3, VPC, IAM ...
<span class="t-accent">IaC:</span>           Terraform · CloudFormation · Ansible
<span class="t-accent">CI/CD:</span>         GitHub Actions · ArgoCD · Jenkins
<span class="t-accent">Containers:</span>    Docker · Kubernetes · Helm
<span class="t-accent">Monitoring:</span>    Prometheus · Grafana · ELK · Datadog
<span class="t-accent">Scripting:</span>     Bash · Python · YAML`,

    projects: () => `<span class="t-success">1.</span> Multi-Tier AWS Infrastructure (Terraform)
<span class="t-success">2.</span> CI/CD Pipeline for EKS with GitOps
<span class="t-success">3.</span> Serverless Cost Monitoring Dashboard
<span class="t-success">4.</span> Observability Stack (Prometheus + Grafana)
<span class="t-info">→ Scroll to #projects or type</span> <span class="t-accent">open projects</span>`,

    experience: () => `<span class="t-accent">CloudNova Technologies</span>   | Senior DevOps Eng  | 2024–Present
<span class="t-accent">BrightStack Solutions</span>     | DevOps Engineer    | 2022–2023
<span class="t-accent">Zenith Infotech</span>           | Jr. Cloud Engineer | 2021–2022`,

    contact: () => `<span class="t-info">Email:</span>    deniston@example.com
<span class="t-info">LinkedIn:</span> linkedin.com/in/deniston
<span class="t-info">GitHub:</span>   github.com/deniston
<span class="t-info">Twitter:</span>  x.com/deniston_dev`,

    certs: () => `<span class="t-success">✓</span> AWS Solutions Architect – Associate (2023)
<span class="t-success">✓</span> AWS DevOps Engineer – Professional (2024)
<span class="t-success">✓</span> HashiCorp Terraform Associate (2023)
<span class="t-success">✓</span> Certified Kubernetes Administrator (2024)`,

    clear: () => null,

    'open projects': () => {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      return '<span class="t-success">→ Navigating to Projects section...</span>';
    },
  };

  function runCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      termOutput.innerHTML = '';
      return null;
    }
    if (commands[trimmed]) return commands[trimmed]();
    return `<span class="t-error">Command not found: "${cmd}". Type <span class="t-accent">help</span> to see available commands.</span>`;
  }

  function appendOutput(html) {
    if (html === null) return;
    const line = document.createElement('div');
    line.innerHTML = html;
    line.style.marginBottom = '6px';
    line.style.color = '#8b94a8';
    line.style.fontSize = '0.78rem';
    termOutput.appendChild(line);
    termOutput.parentElement.scrollTop = termOutput.parentElement.scrollHeight;
  }

  if (termInput) {
    termInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const cmd = termInput.value;
        if (!cmd.trim()) return;
        // Echo
        const echo = document.createElement('div');
        echo.className = 't-cmd-echo';
        echo.style.cssText = 'color: #a78bfa; font-size: 0.78rem; margin-bottom: 2px;';
        echo.textContent = `$ ${cmd}`;
        termOutput.appendChild(echo);
        // Result
        appendOutput(runCommand(cmd));
        termInput.value = '';
      }
    });
  }
})();

/* ─────────────────────────────────────────────────
   8. FLOATING PARTICLES (Hero)
──────────────────────────────────────────────────── */
(function initParticles() {
  const container = $('#particles');
  if (!container || prefersReducedMotion()) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 3 + 1.5;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 14 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.6 + 0.2};
    `;
    container.appendChild(p);
  }
})();

/* ─────────────────────────────────────────────────
   9. PROJECT MODAL
──────────────────────────────────────────────────── */
(function initModal() {
  const modal    = $('#projectModal');
  const closeBtn = $('#modalClose');
  const body     = $('#modalBody');
  if (!modal) return;

  const caseStudies = [
    {
      title: 'Multi-Tier AWS Infrastructure with Terraform',
      img: 'assets/arch_diagram.png',
      imgAlt: 'AWS 3-tier architecture diagram',
      description: 'Fully automated 3-tier architecture deployed on AWS using Terraform — zero manual clicks from code to production.',
      challenge: 'The team was spending 3+ hours on every environment setup, with inconsistent configurations across dev, staging, and prod environments.',
      solution: 'Built reusable Terraform modules for each tier (networking, compute, data), with remote state on S3 + DynamoDB locking. CI/CD integration triggers plan/apply on PR merge.',
      outcomes: [
        'Environment provisioning reduced from 3 hours → 12 minutes',
        'Modules adopted across 6 product teams',
        'Zero configuration drift across environments',
        'Estimated savings: $18K/year in engineering time',
      ],
      tech: ['Terraform', 'AWS VPC', 'ALB', 'Auto Scaling Groups', 'Amazon RDS', 'S3 Remote State', 'DynamoDB Locking', 'GitHub Actions'],
      github: 'https://github.com/deniston/terraform-aws-3tier',
    },
  ];

  $$('.btn-case-study').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.project, 10);
      const cs  = caseStudies[idx];
      if (!cs) return;

      body.innerHTML = `
        <img src="${cs.img}" alt="${cs.imgAlt}" loading="lazy" />
        <h2>${cs.title}</h2>
        <p>${cs.description}</p>
        <h3>🎯 Challenge</h3>
        <p>${cs.challenge}</p>
        <h3>⚙️ Solution</h3>
        <p>${cs.solution}</p>
        <h3>📈 Outcomes</h3>
        <ul>${cs.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        <h3>🛠️ Tech Stack</h3>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
          ${cs.tech.map(t => `<span style="font-family:var(--font-mono);font-size:0.72rem;padding:3px 10px;background:rgba(255,153,0,0.08);border:1px solid rgba(255,153,0,0.25);border-radius:9999px;color:var(--accent);">${t}</span>`).join('')}
        </div>
        <div style="margin-top:24px;">
          <a href="${cs.github}" target="_blank" rel="noopener noreferrer"
             style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:var(--accent);color:#000;border-radius:9999px;font-weight:700;font-size:0.85rem;text-decoration:none;">
            <i class="fa-brands fa-github"></i> View on GitHub
          </a>
        </div>
      `;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    });
  });

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
})();

/* ─────────────────────────────────────────────────
   10. CONTACT FORM
──────────────────────────────────────────────────── */
(function initContact() {
  const form      = $('#contactForm');
  const submitBtn = $('#submitBtn');
  const successEl = $('#formSuccess');
  if (!form) return;

  function validate(field) {
    const val = field.value.trim();
    const err = field.closest('.form-group')?.querySelector('.form-error');
    let msg = '';
    if (!val) {
      msg = 'This field is required.';
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      msg = 'Please enter a valid email address.';
    }
    if (err) err.textContent = msg;
    field.classList.toggle('invalid', !!msg);
    return !msg;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const fields = $$('.form-input', form);
    const valid  = fields.map(f => validate(f)).every(Boolean);
    if (!valid) return;

    const btnText    = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    btnText.hidden    = true;
    btnLoading.hidden = false;
    submitBtn.disabled = true;

    // Simulate form send (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1400));

    btnText.hidden    = false;
    btnLoading.hidden = true;
    submitBtn.disabled = false;
    successEl.hidden = false;
    form.reset();

    setTimeout(() => { successEl.hidden = true; }, 5000);
  });

  // Real-time validation on blur
  $$('.form-input', form).forEach(f => {
    f.addEventListener('blur', () => validate(f));
    f.addEventListener('input', () => {
      if (f.classList.contains('invalid')) validate(f);
    });
  });
})();

/* ─────────────────────────────────────────────────
   11. BACK TO TOP
──────────────────────────────────────────────────── */
(function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
})();

/* ─────────────────────────────────────────────────
   12. SMOOTH SCROLL for anchor links
──────────────────────────────────────────────────── */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  const offset = target.offsetTop - 72;
  window.scrollTo({ top: offset, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
});

/* ─────────────────────────────────────────────────
   13. TIMELINE ITEMS – stagger on scroll
──────────────────────────────────────────────────── */
(function initTimeline() {
  if (prefersReducedMotion()) return;
  const items = $$('.timeline-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
})();

/* ─────────────────────────────────────────────────
   14. SKILL CARD – stagger hover glow
──────────────────────────────────────────────────── */
(function initSkillCards() {
  $$('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const tags = $$('.skill-tag', card);
      tags.forEach((tag, i) => {
        setTimeout(() => {
          tag.style.background = 'rgba(255,153,0,0.1)';
          tag.style.borderColor = 'rgba(255,153,0,0.3)';
          tag.style.color = 'var(--text-primary)';
        }, i * 30);
      });
    });
    card.addEventListener('mouseleave', () => {
      $$('.skill-tag', card).forEach(tag => {
        tag.style.background = '';
        tag.style.borderColor = '';
        tag.style.color = '';
      });
    });
  });
})();

/* ─────────────────────────────────────────────────
   15. KEYBOARD ACCESSIBILITY – Skip to main
──────────────────────────────────────────────────── */
(function initA11y() {
  // Trap focus in modal when open
  const modal = $('#projectModal');
  if (!modal) return;
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = $$('button, a, input, textarea, [tabindex]:not([tabindex="-1"])', modal);
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    }
  });
})();

/* ─────────────────────────────────────────────────
   16. OPEN GRAPH IMAGE META (dynamic year)
──────────────────────────────────────────────────── */
(function updateYear() {
  const copy = document.querySelector('.footer-copy');
  if (copy) {
    const year = new Date().getFullYear();
    copy.innerHTML = copy.innerHTML.replace('2024', year);
  }
})();

/* Done ✓ */
console.log('%cDeniston Portfolio ✓', 'color:#FF9900;font-weight:900;font-size:1.2rem;');
console.log('%cBuilt with HTML · CSS · JS | AWS DevOps Engineer', 'color:#8b94a8;');
