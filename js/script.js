/* ================= REVEAL (MODERN WAY) ================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ================= TYPING EFFECT ================= */
const textArray = [
  "Frontend Developer",
  "Web Designer",
  "Aspiring Data Scientist",
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingEl = document.getElementById("typing");
  const currentText = textArray[index];

  if (!typingEl) return;

  if (!isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex++);
  } else {
    typingEl.textContent = currentText.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

typeEffect();

/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
  });
});

/* ================= ACTIVE NAV ON SCROLL ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ================= COLOR SWITCHER (FIXED + SMOOTH) ================= */
const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;

    // main color
    document.documentElement.style.setProperty("--accent", color);

    // auto generate stronger + soft variants (modern trick)
    document.documentElement.style.setProperty("--accent-strong", color);
    document.documentElement.style.setProperty("--accent-soft", color + "26");

    // save preference
    localStorage.setItem("themeColor", color);
  });
});

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          bar.style.width = bar.dataset.width;
        });
      }
    });
  },
  {
    threshold: 0.4,
  },
);

skillObserver.observe(skillSection);

/* ================= LOAD SAVED COLOR ================= */
window.addEventListener("load", () => {
  const saved = localStorage.getItem("themeColor");
  if (saved) {
    document.documentElement.style.setProperty("--accent", saved);
    document.documentElement.style.setProperty("--accent-strong", saved);
    document.documentElement.style.setProperty("--accent-soft", saved + "26");
  }
});

/* ================= SCROLL PROGRESS BAR ================= */
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".scroll-bar");

  if (!scrollBar) return;

  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / height) * 100;
  scrollBar.style.width = progress + "%";
});
