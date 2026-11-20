/**
 * ==============================================================================
 * PORTFOLIO DATA ARRAYS (EASILY EDITABLE CONTENT)
 * ==============================================================================
 */

// 1. SKILLS DATA
const SKILLS_DATA = [
  {
    category: "Programming",
    icon: "fa-solid fa-code",
    type: "progress",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "Bash", level: 70 }
    ]
  },
  {
    category: "Machine Learning",
    icon: "fa-solid fa-brain",
    type: "progress",
    items: [
      { name: "Scikit-learn", level: 92 },
      { name: "XGBoost / LightGBM", level: 88 },
      { name: "PyTorch", level: 82 },
      { name: "TensorFlow", level: 80 }
    ]
  },
  {
    category: "NLP & GenAI",
    icon: "fa-solid fa-comments",
    type: "progress",
    items: [
      { name: "Hugging Face Transformers", level: 85 },
      { name: "spaCy", level: 80 },
      { name: "RAG systems", level: 80 },
      { name: "LangChain", level: 78 }
    ]
  },
  {
    category: "Data Engineering & MLOps",
    icon: "fa-solid fa-gears",
    type: "progress",
    items: [
      { name: "Pandas / NumPy", level: 95 },
      { name: "MLflow", level: 80 },
      { name: "Docker", level: 78 },
      { name: "AWS (S3, SageMaker)", level: 75 },
      { name: "Spark", level: 72 },
      { name: "Airflow", level: 70 }
    ]
  },
  {
    category: "Visualization & BI",
    icon: "fa-solid fa-chart-line",
    type: "progress",
    items: [
      { name: "Matplotlib / Seaborn", level: 90 },
      { name: "Plotly", level: 85 },
      { name: "Streamlit", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 78 }
    ]
  },
  {
    category: "Statistics & Methods",
    icon: "fa-solid fa-square-root-variable",
    type: "chips",
    items: [
      "A/B testing",
      "Hypothesis testing",
      "Time-series forecasting",
      "Bayesian methods",
      "Feature engineering",
      "SHAP explainability",
      "Experiment design",
      "Monte Carlo simulations"
    ]
  }
];

// 2. EXPERIENCE DATA
const EXPERIENCE_DATA = [
  {
    role: "Senior Data Scientist",
    company: "NovaTech Analytics",
    period: "Jan 2024 – Present",
    achievements: [
      "Built a customer churn prediction model (XGBoost) that reduced churn by 18% and saved an estimated $1.2M annually.",
      "Designed an MLOps pipeline with MLflow, Docker and Airflow, cutting model deployment time from 2 weeks to 2 days.",
      "Led a team of 3 analysts, introducing code reviews and experiment tracking standards."
    ]
  },
  {
    role: "Data Scientist",
    company: "BrightMind AI",
    period: "Jun 2022 – Dec 2023",
    achievements: [
      "Developed an NLP sentiment-analysis engine (BERT) processing 50K+ reviews daily with 92% accuracy.",
      "Created a product recommendation system that increased click-through rate by 24%.",
      "Built interactive Streamlit and Tableau dashboards used by 100+ business users."
    ]
  },
  {
    role: "Junior Data Analyst",
    company: "DataWave Solutions",
    period: "Jul 2020 – May 2022",
    achievements: [
      "Automated weekly reporting with Python and SQL, saving 15+ hours per week.",
      "Performed A/B testing and statistical analysis to support marketing campaign decisions."
    ]
  }
];

// 3. PROJECTS DATA
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Customer Churn Predictor",
    category: "Machine Learning",
    description: "End-to-end churn prediction with feature engineering, SHAP explainability and a deployed API.",
    tags: ["Python", "XGBoost", "FastAPI", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Sentiment Analyzer Pro",
    category: "NLP",
    description: "Fine-tuned BERT model classifying product reviews with a live web demo.",
    tags: ["PyTorch", "Transformers", "Streamlit"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Sales Forecasting Dashboard",
    category: "Visualization",
    description: "Interactive time-series forecasting dashboard using Prophet and Plotly.",
    tags: ["Prophet", "Plotly", "Streamlit"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Movie Recommendation Engine",
    category: "Machine Learning",
    description: "Hybrid collaborative and content-based recommender system on 1M ratings.",
    tags: ["Scikit-learn", "Surprise", "Pandas"],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "RAG Document Chatbot",
    category: "NLP",
    description: "Chat with your PDFs using embeddings, a vector database and an LLM.",
    tags: ["LangChain", "FAISS", "OpenAI", "Streamlit"],
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "ML Pipeline with MLflow",
    category: "MLOps",
    description: "Automated training, tracking and deployment pipeline with CI/CD.",
    tags: ["MLflow", "Airflow", "Docker", "GitHub Actions"],
    github: "#",
    demo: "#"
  },
  {
    id: 7,
    title: "COVID-19 Data Explorer",
    category: "Visualization",
    description: "Interactive global data storytelling dashboard.",
    tags: ["Tableau", "SQL", "Python"],
    github: "#",
    demo: "#"
  }
];

/**
 * ==============================================================================
 * DOM RENDER FUNCTIONS
 * ==============================================================================
 */

// Render Skills
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map(group => {
    let contentHtml = '';

    if (group.type === 'progress') {
      contentHtml = `
        <div class="skills-list">
          ${group.items.map(skill => `
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-pct">${skill.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" data-level="${skill.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (group.type === 'chips') {
      contentHtml = `
        <div class="skill-chips-list">
          ${group.items.map(item => `
            <span class="skill-chip">
              <i class="fa-solid fa-chart-simple"></i>
              ${item}
            </span>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="skill-category-card reveal">
        <div class="skill-card-header">
          <div class="skill-card-icon"><i class="${group.icon}"></i></div>
          <h3 class="skill-card-title">${group.category}</h3>
        </div>
        ${contentHtml}
      </div>
    `;
  }).join('');
}

// Render Experience
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company-row">
            <span class="timeline-company">${exp.company}</span>
            <span class="timeline-date"><i class="fa-regular fa-calendar"></i> ${exp.period}</span>
          </div>
        </div>
        <ul class="timeline-bullets">
          ${exp.achievements.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Projects
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category.toLowerCase() === filter.toLowerCase());

  container.innerHTML = filtered.map(proj => `
    <div class="project-card reveal active">
      <div>
        <div class="project-card-header">
          <span class="project-category-tag">${proj.category}</span>
          <i class="fa-solid fa-folder-code project-icon"></i>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
      </div>

      <div>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${proj.github}" class="project-btn" target="_blank" rel="noopener" aria-label="View source code on GitHub">
            <i class="fa-brands fa-github"></i> Code
          </a>
          <a href="${proj.demo}" class="project-btn" target="_blank" rel="noopener" aria-label="View live project demo">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * ==============================================================================
 * CORE INTERACTIVITY & ANIMATION LOGIC
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render Dynamic Sections
  renderSkills();
  renderExperience();
  renderProjects('all');

  // Initialize Modules
  initTheme();
  initTypingEffect();
  initNavbarAndScroll();
  initHeroCanvas();
  initScrollObservers();
  initProjectFilters();
  initContactForm();
});

/**
 * 1. Theme Management (Dark / Light toggle with LocalStorage)
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Retrieve saved preference or check OS preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // dark theme by default

  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }
  }
}

/**
 * 2. Typing Effect (Vanilla JS)
 */
function initTypingEffect() {
  const typingTextEl = document.getElementById('typing-text');
  if (!typingTextEl) return;

  const roles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Enthusiast",
    "Storyteller with Data"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 110;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingDelay = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/**
 * 3. Navigation, Scroll Progress, Active Links & Back-To-Top
 */
function initNavbarAndScroll() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll listeners
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Progress Bar
    if (scrollProgressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      scrollProgressBar.style.width = `${progress}%`;
      scrollProgressBar.setAttribute('aria-valuenow', Math.round(progress));
    }

    // 2. Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // 3. Active Nav Link on Scroll
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * 4. Lightweight Canvas Neural / Particle Network Animation
 */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  const particleCount = 45;
  const maxDistance = 120;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.6)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // Check if reduced motion is requested
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!motionQuery.matches) {
    animate();
  }

  // Pause when tab not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else if (!motionQuery.matches) {
      animate();
    }
  });
}

/**
 * 5. IntersectionObserver for Scroll-Reveal, Counters & Skill Bars
 */
function initScrollObservers() {
  // 1. General Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // 2. Animated Numerical Counters (triggers once when in view)
  const countersSection = document.getElementById('counters-grid');
  if (countersSection) {
    let animated = false;
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    }, { threshold: 0.3 });

    counterObserver.observe(countersSection);
  }

  function animateCounters() {
    const counterElements = document.querySelectorAll('.counter-number');
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const duration = 1600;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (easeOutQuad)
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.floor(easeProgress * target);

        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // 3. Animated Skill Progress Bars
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    let barsAnimated = false;
    const skillsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !barsAnimated) {
        barsAnimated = true;
        const fills = document.querySelectorAll('.skill-bar-fill');
        fills.forEach(fill => {
          const level = fill.getAttribute('data-level');
          fill.style.width = `${level}%`;
        });
      }
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsContainer);
  }
}

/**
 * 6. Projects Filter Tabs
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

/**
 * 7. Contact Form Validation & Submission Feedback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formFeedback = document.getElementById('form-feedback');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time input clearing
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const errEl = document.getElementById(`${input.name}-error`);
      if (errEl) errEl.classList.remove('visible');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('is-invalid');
      nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameError.classList.remove('visible');
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      emailError.classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailError.classList.remove('visible');
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      messageError.classList.add('visible');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
      messageError.classList.remove('visible');
    }

    if (isValid) {
      // Simulate successful submission
      const submitBtn = document.getElementById('submit-btn');
      const originalContent = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;

        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. I will get back to you shortly.';
        form.reset();

        setTimeout(() => {
          formFeedback.className = 'form-feedback';
          formFeedback.textContent = '';
        }, 5000);
      }, 700);
    }
  });
}
