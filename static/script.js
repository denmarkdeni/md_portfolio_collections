// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Hero code type-on (single orchestrated reveal) ----------
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const codeEl = document.querySelector(".editor__body");

if (codeEl && !prefersReducedMotion) {
  const original = codeEl.innerHTML;
  const cursor = codeEl.querySelector(".cursor");
  const fullText = codeEl.textContent;

  // Build a plain-text -> markup reveal by fading in via a clip animation
  // rather than re-typing HTML (keeps syntax colors intact, safer than
  // re-parsing partial HTML tags mid-string).
  codeEl.style.opacity = "0";
  codeEl.style.transition = "opacity 0.6s ease";
  requestAnimationFrame(() => {
    setTimeout(() => {
      codeEl.style.opacity = "1";
    }, 150);
  });
}

// ---------- Contact form ----------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "# error: all fields are required";
    return;
  }

  // No backend wired up yet — acknowledge receipt in the terminal voice.
  status.textContent = `# sent — thanks ${name.split(" ")[0]}, I'll reply at ${email}`;
  form.reset();
});