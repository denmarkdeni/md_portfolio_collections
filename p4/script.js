/* ═══════════════════════════════════════════════════════════════════
   script.js – Deniston | AWS DevOps Engineer Portfolio
   ═══════════════════════════════════════════════════════════════════

   ┌──────────────────────────────────────────────────────────────────┐
   │  ✏️  EDITABLE CONTENT CONFIG – update all your info here.        │
   │  You do NOT need to touch the HTML or logic below.               │
   └──────────────────────────────────────────────────────────────────┘
*/

const CONFIG = {

  /* ── Personal ──────────────────────────────────────────────────── */
  name:     'Deniston',
  title:    'AWS DevOps Engineer',
  location: 'Chennai, Tamil Nadu, India',
  email:    'deniston@gmail.com',          // [PLACEHOLDER: verify email]
  resume:   'deniston_resume.pdf',         // filename in same folder

  /* ── Social links ──────────────────────────────────────────────── */
  socials: {
    github:   'https://github.com/deniston-dev',      // [PLACEHOLDER: real GitHub URL]
    linkedin: 'https://linkedin.com/in/deniston-dev', // [PLACEHOLDER: real LinkedIn URL]
    medium:   'https://medium.com/@deniston-dev',     // [PLACEHOLDER: real Medium/Dev.to/X]
  },

  /* ── Typing taglines (hero animation) ──────────────────────────── */
  taglines: [
    'I build reliable, automated, cost-efficient cloud infrastructure.',
    'Turning coffee ☕ into Terraform modules since 2021.',
    'Zero-downtime deploys. Every. Single. Time.',
    'kubectl get pods --all-namespaces | grep happiness',
    'Infrastructure as Code · CI/CD · Cloud Native',
  ],

  /* ── About bio ─────────────────────────────────────────────────── */
  bio: [
    // [PLACEHOLDER: replace with your real bio paragraph]
    'I\'m a passionate AWS DevOps Engineer with 3+ years of experience designing, automating, and operating production-grade cloud infrastructure on AWS. I thrive at the intersection of developer experience and operational reliability — shipping infrastructure as code, building bulletproof CI/CD pipelines, and taming Kubernetes clusters at scale.',
    // [PLACEHOLDER: second paragraph]
    'When I\'m not crafting Terraform modules or optimising EKS node-groups, you\'ll find me writing about cloud-native patterns, contributing to open-source DevOps tooling, or exploring the latest AWS re:Invent launches from Chennai.',
  ],

  /* ── Quick stats ────────────────────────────────────────────────── */
  stats: [
    { number: 3,  suffix: '+', label: 'Years of Experience' },    // [PLACEHOLDER]
    { number: 30, suffix: '+', label: 'Projects Delivered' },     // [PLACEHOLDER]
    { number: 5,  suffix: '',  label: 'Certifications Earned' },  // [PLACEHOLDER]
    { number: 40, suffix: '%', label: 'Avg. Cost Savings' },      // [PLACEHOLDER]
  ],

  /* ── Skills ─────────────────────────────────────────────────────── */
  skills: [
    {
      group: 'AWS Services',
      icon:  '☁️',
      sub:   'core infrastructure',
      tags:  ['EC2', 'EKS', 'ECS', 'Lambda', 'S3', 'VPC', 'IAM',
               'CloudFormation', 'CloudWatch', 'RDS', 'Route 53', 'ALB', 'SQS'],
    },
    {
      group: 'Infrastructure as Code',
      icon:  '🏗️',
      sub:   'iac tooling',
      tags:  ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi'],
    },
    {
      group: 'CI/CD Pipelines',
      icon:  '🚀',
      sub:   'delivery automation',
      tags:  ['GitHub Actions', 'Jenkins', 'GitLab CI', 'AWS CodePipeline',
               'ArgoCD', 'Tekton'],
    },
    {
      group: 'Containers & Orchestration',
      icon:  '🐳',
      sub:   'container platform',
      tags:  ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'containerd'],
    },
    {
      group: 'Monitoring & Observability',
      icon:  '📊',
      sub:   'o11y stack',
      tags:  ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch',
               'Jaeger', 'PagerDuty'],
    },
    {
      group: 'Scripting & Dev',
      icon:  '💻',
      sub:   'language toolkit',
      tags:  ['Bash', 'Python', 'YAML', 'Go (basics)', 'jq', 'Make'],
    },
  ],

  /* ── Experience ─────────────────────────────────────────────────── */
  experience: [
    {
      role:    'Senior DevOps Engineer',            // [PLACEHOLDER]
      company: 'TechNova Solutions Pvt. Ltd.',      // [PLACEHOLDER]
      period:  'Jan 2024 – Present',                // [PLACEHOLDER]
      emoji:   '🚀',
      bullets: [
        'Architected a multi-account AWS landing zone using Control Tower, reducing onboarding time by [X]%.',   // [PLACEHOLDER metric]
        'Designed GitOps workflows with ArgoCD + GitHub Actions, cutting deployment lead time from 4 hours to 12 minutes.',
        'Optimised EKS cluster autoscaling with Karpenter, achieving [X]% reduction in monthly EC2 spend.',     // [PLACEHOLDER metric]
        'Rolled out centralised logging via OpenSearch + Kinesis Firehose across 6 microservices.',
      ],
    },
    {
      role:    'DevOps Engineer',                   // [PLACEHOLDER]
      company: 'CloudEdge Technologies',             // [PLACEHOLDER]
      period:  'Jun 2022 – Dec 2023',               // [PLACEHOLDER]
      emoji:   '⚙️',
      bullets: [
        'Built Terraform modules for VPC, ECS Fargate, and RDS; reused across 8 client projects.',
        'Implemented blue/green deployments with AWS CodeDeploy, achieving 99.98% uptime SLA.',
        'Containerised legacy monolith into 12 Docker micro-services; reduced build times by [X]%.',            // [PLACEHOLDER metric]
        'Set up Prometheus + Grafana dashboards providing real-time visibility into 200+ application metrics.',
      ],
    },
    {
      role:    'Junior DevOps / Cloud Intern',      // [PLACEHOLDER]
      company: 'InfraStack Labs',                   // [PLACEHOLDER]
      period:  'Jan 2022 – May 2022',               // [PLACEHOLDER]
      emoji:   '🌱',
      bullets: [
        'Automated EC2 patch management with Ansible playbooks, covering [X] servers.',  // [PLACEHOLDER metric]
        'Wrote Python scripts to clean up unused S3 objects, saving $[X]/month in storage costs.',              // [PLACEHOLDER metric]
        'Contributed Jenkins pipeline stages for SonarQube SAST integration.',
        'Documented runbooks and DR procedures adopted by the entire ops team.',
      ],
    },
  ],

  /* ── Projects ───────────────────────────────────────────────────── */
  projects: [
    {
      title:    'AWS Multi-Account Landing Zone',
      icon:     '🏛️',
      desc:     'Production-grade AWS Organisation structure using Control Tower, SCPs, and a Terraform-managed account vending machine for self-service account provisioning.',
      arch:     '▸ AWS Control Tower · Service Control Policies · Account Factory · S3 state backend',
      tags:     ['Terraform', 'AWS', 'Control Tower', 'IaC'],
      category: 'iac',
      github:   'https://github.com/deniston-dev/aws-landing-zone',   // [PLACEHOLDER]
      live:     null,
    },
    {
      title:    'EKS GitOps Platform',
      icon:     '☸️',
      desc:     'End-to-end Kubernetes platform on EKS with ArgoCD for GitOps, Karpenter for node autoscaling, and Cert-Manager + External-DNS for zero-touch ingress.',
      arch:     '▸ EKS · ArgoCD · Karpenter · Helm · GitHub Actions · ECR',
      tags:     ['Kubernetes', 'EKS', 'ArgoCD', 'GitOps', 'Helm'],
      category: 'kubernetes',
      github:   'https://github.com/deniston-dev/eks-gitops-platform', // [PLACEHOLDER]
      live:     null,
    },
    {
      title:    'Serverless CI/CD Pipeline',
      icon:     '⚡',
      desc:     'Fully serverless deployment pipeline using GitHub Actions → AWS CodePipeline → Lambda@Edge for a static Next.js site, with automatic Lighthouse audits on every PR.',
      arch:     '▸ GitHub Actions · CodePipeline · S3 · CloudFront · Lambda@Edge',
      tags:     ['CI/CD', 'Lambda', 'GitHub Actions', 'Serverless'],
      category: 'cicd',
      github:   'https://github.com/deniston-dev/serverless-cicd',    // [PLACEHOLDER]
      live:     'https://deniston.dev',                                // [PLACEHOLDER]
    },
    {
      title:    'Observability Stack on EKS',
      icon:     '📈',
      desc:     'Full observability stack deployed via Helm: Prometheus + Alertmanager, Grafana dashboards, Loki for log aggregation, and Tempo for distributed tracing.',
      arch:     '▸ Prometheus · Grafana · Loki · Tempo · PagerDuty · EKS',
      tags:     ['Monitoring', 'Prometheus', 'Grafana', 'Loki'],
      category: 'monitoring',
      github:   'https://github.com/deniston-dev/eks-observability',   // [PLACEHOLDER]
      live:     null,
    },
    {
      title:    'Terraform AWS Module Library',
      icon:     '📦',
      desc:     'A battle-tested library of reusable Terraform modules (VPC, ECS, RDS, ALB, IAM roles) following AWS Well-Architected best practices, with automated tests in Terratest.',
      arch:     '▸ Terraform · Terratest · GitHub Actions · Checkov · tfsec',
      tags:     ['Terraform', 'IaC', 'Modules', 'Testing'],
      category: 'iac',
      github:   'https://github.com/deniston-dev/terraform-aws-modules', // [PLACEHOLDER]
      live:     null,
    },
    {
      title:    'Cost Optimisation Bot',
      icon:     '💰',
      desc:     'Python Lambda function triggered by EventBridge that identifies idle EC2, unused EBS volumes, and over-provisioned RDS, then generates a weekly Slack cost digest.',
      arch:     '▸ Lambda · EventBridge · Cost Explorer API · Slack Webhook · SNS',
      tags:     ['Python', 'Lambda', 'Monitoring', 'FinOps'],
      category: 'monitoring',
      github:   'https://github.com/deniston-dev/aws-cost-bot',        // [PLACEHOLDER]
      live:     null,
    },
  ],

  /* ── Certifications ─────────────────────────────────────────────── */
  certifications: [
    {
      name:   'AWS Certified DevOps Engineer – Professional',
      issuer: 'Amazon Web Services',
      icon:   '🏅',
      date:   'Jul 2024',          // [PLACEHOLDER]
      status: 'Active',
    },
    {
      name:   'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      icon:   '🏅',
      date:   'Jan 2023',          // [PLACEHOLDER]
      status: 'Active',
    },
    {
      name:   'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      icon:   '☸️',
      date:   'Sep 2023',          // [PLACEHOLDER]
      status: 'Active',
    },
    {
      name:   'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      icon:   '🟪',
      date:   'Mar 2024',          // [PLACEHOLDER]
      status: 'Active',
    },
    {
      name:   'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon:   '☁️',
      date:   'Jun 2022',          // [PLACEHOLDER]
      status: 'Active',
    },
  ],

  /* ── Blog posts ─────────────────────────────────────────────────── */
  blogPosts: [
    {
      tag:     'Terraform',
      title:   'Building a Production AWS Landing Zone with Terraform and Control Tower',  // [PLACEHOLDER]
      excerpt: 'A step-by-step walkthrough of designing a scalable, secure multi-account AWS environment from scratch — SCPs, guardrails, and all.',
      date:    'Oct 12, 2026',   // [PLACEHOLDER]
      readMin: 9,
      url:     'https://medium.com/@deniston-dev/aws-landing-zone',  // [PLACEHOLDER]
    },
    {
      tag:     'Kubernetes',
      title:   'Karpenter vs Cluster Autoscaler: Which One Should You Use in 2026?',       // [PLACEHOLDER]
      excerpt: 'A real-world performance comparison after migrating our EKS clusters from CAS to Karpenter — with cost data included.',
      date:    'Sep 3, 2026',    // [PLACEHOLDER]
      readMin: 7,
      url:     'https://medium.com/@deniston-dev/karpenter-vs-cas',  // [PLACEHOLDER]
    },
    {
      tag:     'FinOps',
      title:   'How I Cut Our AWS Bill by 38% Without Touching a Single Feature',           // [PLACEHOLDER]
      excerpt: 'Practical techniques: Savings Plans, Graviton migration, S3 Intelligent-Tiering, and an automated cost-anomaly alerting system.',
      date:    'Jul 20, 2026',   // [PLACEHOLDER]
      readMin: 6,
      url:     'https://medium.com/@deniston-dev/aws-cost-savings',  // [PLACEHOLDER]
    },
  ],

  /* ── Easter egg terminal commands ──────────────────────────────── */
  easterCommands: {
    help:    `Available commands:\n  <span class="accent">about</span>    – who is Deniston?\n  <span class="accent">skills</span>   – tech stack overview\n  <span class="accent">contact</span>  – get in touch\n  <span class="accent">github</span>   – open GitHub profile\n  <span class="accent">resume</span>   – download resume\n  <span class="accent">joke</span>     – a DevOps joke\n  <span class="accent">uptime</span>   – system status\n  <span class="accent">clear</span>    – clear terminal`,
    about:   `Deniston · AWS DevOps Engineer · Chennai, India\n3+ years automating cloud infrastructure at scale.\nPassionate about IaC, GitOps, and FinOps.`,
    skills:  `☁️  AWS (EC2, EKS, ECS, Lambda, S3, IAM...)\n🏗️  IaC  (Terraform, CloudFormation, Ansible)\n🚀  CI/CD (GitHub Actions, Jenkins, ArgoCD)\n🐳  Containers (Docker, Kubernetes, Helm)\n📊  Monitoring (Prometheus, Grafana, ELK)`,
    contact: `📧  deniston@gmail.com\n🔗  linkedin.com/in/deniston-dev\n🐙  github.com/deniston-dev`,
    joke:    `Why did the DevOps engineer quit?\n→ Because he couldn't find the root cause of his problems.`,
    uptime:  `● nginx          active (running)  8d 14h 22m\n● k8s-api        active (running)  8d 14h 22m\n● ci-pipeline    active (running)  8d 14h 22m\n✓ All systems operational`,
    clear:   '__CLEAR__',
    github:  '__OPEN_GITHUB__',
    resume:  '__DOWNLOAD_RESUME__',
  },

}; // ← end CONFIG

/* ═══════════════════════════════════════════════════════════════════
   THEME MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
(function initTheme() {
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch (e) { /* storage blocked */ }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleTheme() {
  const root    = document.documentElement;
  const current = root.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
}

/* ═══════════════════════════════════════════════════════════════════
   DOM-READY INIT
═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Footer year */
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  /* Bind theme toggle */
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  /* Build sections from config */
  buildAbout();
  buildSkills();
  buildTimeline();
  buildProjects();
  buildCertifications();
  buildBlog();

  /* Behaviours */
  initNavbar();
  initTypingAnimation();
  initHeroTerminal();
  initParticles();
  initScrollReveal();
  initCountUpAnimations();
  initProjectFilters();
  initContactForm();
  initEasterEgg();

});

/* ═══════════════════════════════════════════════════════════════════
   BUILD: ABOUT
═══════════════════════════════════════════════════════════════════ */
function buildAbout() {
  const b1 = document.getElementById('aboutBio');
  const b2 = document.getElementById('aboutBio2');
  if (b1 && CONFIG.bio[0]) b1.textContent = CONFIG.bio[0];
  if (b2 && CONFIG.bio[1]) b2.textContent = CONFIG.bio[1];
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD: SKILLS
═══════════════════════════════════════════════════════════════════ */
function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.skills.map(group => `
    <div class="skill-group reveal">
      <div class="skill-group-header">
        <div class="skill-group-icon">${group.icon}</div>
        <div>
          <div class="skill-group-title">${group.group}</div>
          <div class="skill-group-subtitle mono"># ${group.sub}</div>
        </div>
      </div>
      <div class="skill-tags">
        ${group.tags.map(tag => `
          <span class="skill-tag">
            <span class="skill-tag-dot"></span>${tag}
          </span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD: TIMELINE (Experience)
═══════════════════════════════════════════════════════════════════ */
function buildTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = CONFIG.experience.map((job, i) => `
    <div class="timeline-entry reveal" role="listitem">
      <div class="timeline-content">
        <div class="timeline-content-card">
          <div class="job-title">${job.role}</div>
          <div class="company mono">@ ${job.company}</div>
          <ul class="bullets">
            ${job.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="timeline-node">
        <div class="node-circle" title="${job.role}">${job.emoji}</div>
        <div class="node-line"></div>
      </div>
      <div class="timeline-date">
        <span class="date-badge mono">${job.period}</span>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD: PROJECTS
═══════════════════════════════════════════════════════════════════ */
function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.projects.map(p => `
    <article class="project-card reveal" data-category="${p.category}">
      <div class="project-card-top">
        <div class="project-icon">${p.icon}</div>
        <div class="project-links">
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer"
               class="project-link-btn" aria-label="GitHub repo for ${p.title}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>` : ''}
          ${p.live ? `
            <a href="${p.live}" target="_blank" rel="noopener noreferrer"
               class="project-link-btn" aria-label="Live demo for ${p.title}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>` : ''}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <p class="project-arch mono">${p.arch}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD: CERTIFICATIONS
═══════════════════════════════════════════════════════════════════ */
function buildCertifications() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.certifications.map(cert => `
    <div class="cert-card reveal">
      <span class="cert-badge-icon">${cert.icon}</span>
      <h3 class="cert-name">${cert.name}</h3>
      <p class="cert-issuer mono">${cert.issuer}</p>
      <p class="cert-date mono">${cert.date}</p>
      <span class="cert-status mono">✓ ${cert.status}</span>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD: BLOG
═══════════════════════════════════════════════════════════════════ */
function buildBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  grid.innerHTML = CONFIG.blogPosts.map(post => `
    <article class="blog-card reveal">
      <span class="blog-tag">${post.tag}</span>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-meta">
        <span>${post.date}</span>
        <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="blog-read-link">
          ${post.readMin} min read →
        </a>
      </div>
    </article>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════════════
   NAVBAR: scroll-spy + scrolled class + hamburger
═══════════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const links     = document.querySelectorAll('.nav-link[data-section]');

  /* Scrolled shadow */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    updateScrollSpy();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  /* Close on link click (mobile) */
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Scroll-spy */
  function updateScrollSpy() {
    const scrollY = window.scrollY + 120;
    links.forEach(link => {
      const section = document.getElementById(link.dataset.section);
      if (!section) return;
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    });
  }
}

/* ═══════════════════════════════════════════════════════════════════
   TYPING ANIMATION (Hero tagline)
═══════════════════════════════════════════════════════════════════ */
function initTypingAnimation() {
  const el      = document.getElementById('typingText');
  if (!el) return;

  const taglines = CONFIG.taglines;
  let ti = 0, ci = 0, deleting = false;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    el.textContent = taglines[0];
    return;
  }

  function tick() {
    const current = taglines[ti];
    if (deleting) {
      ci--;
      el.textContent = current.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        ti = (ti + 1) % taglines.length;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 30);
    } else {
      ci++;
      el.textContent = current.slice(0, ci);
      if (ci === current.length) {
        setTimeout(() => { deleting = true; tick(); }, 2800);
        return;
      }
      setTimeout(tick, 55);
    }
  }
  setTimeout(tick, 800);
}

/* ═══════════════════════════════════════════════════════════════════
   HERO TERMINAL (faux command output)
═══════════════════════════════════════════════════════════════════ */
function initHeroTerminal() {
  const body = document.getElementById('terminalBody');
  if (!body) return;

  const lines = [
    { delay: 300,  cls: 't-prompt',  text: 'deniston@devops:~$ ' },
    { delay: 600,  cls: 't-cmd',     text: 'terraform plan -out=prod.tfplan' },
    { delay: 1100, cls: 't-success', text: '✓  Plan: 12 to add, 3 to change, 0 to destroy.' },
    { delay: 1500, cls: 't-prompt',  text: 'deniston@devops:~$ ' },
    { delay: 1700, cls: 't-cmd',     text: 'kubectl get pods -n production' },
    { delay: 2200, cls: 't-output',  text: 'api-server-7d4f8b9   1/1   Running   0   2d' },
    { delay: 2350, cls: 't-output',  text: 'worker-deploy-5k8xs  1/1   Running   0   2d' },
    { delay: 2500, cls: 't-output',  text: 'redis-cluster-0      1/1   Running   0   4d' },
    { delay: 2900, cls: 't-prompt',  text: 'deniston@devops:~$ ' },
    { delay: 3100, cls: 't-cmd',     text: 'aws s3 sync ./dist s3://prod-bucket --delete' },
    { delay: 3700, cls: 't-success', text: '✓  Deployment complete. CloudFront cache invalidated.' },
    { delay: 4000, cls: 't-comment', text: '# All systems green 🚀' },
  ];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lines.forEach(({ delay, cls, text }) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = `t-line ${cls}`;
      span.textContent = text;
      body.appendChild(span);
      body.scrollTop = body.scrollHeight;
    }, reduced ? 0 : delay);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   FLOATING PARTICLES (Hero)
═══════════════════════════════════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count  = window.innerWidth < 768 ? 12 : 22;
  const colors = ['rgba(255,153,0,0.6)', 'rgba(0,212,170,0.5)', 'rgba(56,189,248,0.4)'];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size   = Math.random() * 4 + 2;
    const left   = Math.random() * 100;
    const dur    = Math.random() * 18 + 10;
    const delay  = Math.random() * 12;
    const color  = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      background:${color};
      animation-duration:${dur}s;
      animation-delay:${delay}s;
    `;
    container.appendChild(p);
  }
}

/* ═══════════════════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
═══════════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  /* Staggered children inside reveal parents */
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   COUNT-UP ANIMATION (About stats)
═══════════════════════════════════════════════════════════════════ */
function initCountUpAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.stat-number').forEach(el => {
      el.textContent = el.dataset.target;
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 1600;
      const step   = dur / target;
      let current  = 0;

      const timer = setInterval(() => {
        current++;
        el.textContent = current;
        if (current >= target) {
          clearInterval(timer);
          el.textContent = target;
        }
      }, step);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════════
   PROJECT FILTERS
═══════════════════════════════════════════════════════════════════ */
function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
        /* Re-trigger reveal animation for freshly shown cards */
        if (match && !card.classList.contains('visible')) {
          setTimeout(() => card.classList.add('visible'), 10);
        }
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT FORM (mailto fallback)
═══════════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form  = document.getElementById('contactForm');
  const note  = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = form.contactName.value.trim();
    const email   = form.contactEmail.value.trim();
    const subject = form.contactSubject.value.trim();
    const message = form.contactMessage.value.trim();

    if (!name || !email || !subject || !message) {
      showFormNote('⚠ Please fill in all fields.', 'warning');
      return;
    }

    /* Build mailto URI */
    const mailto = `mailto:${CONFIG.email}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(
          `Hi Deniston,\n\n${message}\n\n—${name}\n${email}`
        )}`;

    window.location.href = mailto;
    showFormNote('✓ Opening your email client...', 'success');
    setTimeout(() => { form.reset(); showFormNote('', ''); }, 3500);
  });

  function showFormNote(msg, type) {
    note.textContent = msg;
    note.style.color = type === 'warning' ? '#f87171'
                     : type === 'success'  ? 'var(--accent-teal)'
                     : 'var(--text-muted)';
  }
}

/* ═══════════════════════════════════════════════════════════════════
   STATUS BADGE – live clock refresh
═══════════════════════════════════════════════════════════════════ */
(function initStatusBadge() {
  const badge = document.getElementById('statusBadge');
  if (!badge) return;

  /* Randomly simulate a status change once in a while for fun */
  const statuses = [
    { text: 'All systems operational', color: 'rgba(0, 212, 170, 0.1)', border: 'rgba(0,212,170,0.3)', dot: 'var(--accent-teal)' },
    { text: 'Deploying v2.4.1 to prod…', color: 'rgba(255,153,0,0.1)', border: 'rgba(255,153,0,0.3)', dot: 'var(--accent-orange)' },
  ];
  let idx = 0;

  setInterval(() => {
    idx = (idx + 1) % statuses.length;
    const s = statuses[idx];
    badge.style.background = s.color;
    badge.style.borderColor = s.border;
    badge.querySelector('.status-dot').style.background = s.dot;
    badge.querySelector('.status-text').textContent = s.text;
    /* Reset after 6 seconds */
    setTimeout(() => {
      const def = statuses[0];
      badge.style.background  = def.color;
      badge.style.borderColor = def.border;
      badge.querySelector('.status-dot').style.background = def.dot;
      badge.querySelector('.status-text').textContent = def.text;
    }, 6000);
  }, 22000);
})();

/* ═══════════════════════════════════════════════════════════════════
   EASTER EGG TERMINAL  (Ctrl + ` or Ctrl + ~)
═══════════════════════════════════════════════════════════════════ */
function initEasterEgg() {
  const overlay = document.getElementById('easterOverlay');
  const body    = document.getElementById('easterBody');
  const input   = document.getElementById('easterInput');
  if (!overlay || !body || !input) return;

  /* Open/close keyboard shortcut */
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
      e.preventDefault();
      toggleEaster();
    }
    if (e.key === 'Escape' && !overlay.hidden) {
      closeEaster();
    }
  });

  /* Click backdrop to close */
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeEaster();
  });

  /* Command handler */
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    input.value = '';
    if (!cmd) return;

    appendLine(`$ ${cmd}`, 'et-cmd');

    const response = CONFIG.easterCommands[cmd];
    if (!response) {
      appendLine(`command not found: ${cmd}. Type 'help' for available commands.`, 'et-error');
      return;
    }

    if (response === '__CLEAR__') {
      body.innerHTML = '';
      return;
    }
    if (response === '__OPEN_GITHUB__') {
      appendLine(`→ Opening ${CONFIG.socials.github} …`, 'et-output');
      setTimeout(() => window.open(CONFIG.socials.github, '_blank'), 400);
      return;
    }
    if (response === '__DOWNLOAD_RESUME__') {
      appendLine(`→ Downloading ${CONFIG.resume} …`, 'et-output');
      const a = document.createElement('a');
      a.href = CONFIG.resume;
      a.download = CONFIG.resume;
      a.click();
      return;
    }

    response.split('\n').forEach((line, i) => {
      setTimeout(() => appendLine(line, 'et-output', true), i * 60);
    });
  });

  function appendLine(html, cls, isHTML = false) {
    const span = document.createElement('span');
    span.className = `et-line ${cls}`;
    if (isHTML) span.innerHTML = html;
    else        span.textContent = html;
    body.appendChild(span);
    body.scrollTop = body.scrollHeight;
  }

  function toggleEaster() {
    if (overlay.hidden) openEaster();
    else closeEaster();
  }

  function openEaster() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }

  function closeEaster() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }
}

/* ═══════════════════════════════════════════════════════════════════
   SMOOTH ANCHOR OFFSET  (account for fixed navbar)
═══════════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const offset  = parseInt(getComputedStyle(document.documentElement)
                              .getPropertyValue('--navbar-h') || '68', 10);
    const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
