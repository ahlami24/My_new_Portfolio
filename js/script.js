// ================= REVEAL ON SCROLL =================
const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// ================= TYPING EFFECT =================
const textArray = [
  "Frontend Developer",
  "Web Designer",
  "Aspiring Data Scientist",
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (index >= textArray.length) index = 0;

  currentText = textArray[index];

  if (!isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(
      0,
      charIndex++,
    );
  } else {
    document.getElementById("typing").textContent = currentText.substring(
      0,
      charIndex--,
    );
  }

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
});

// Close menu when clicking a link
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
  });
});

// ================= ACTIVE LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ================= COLOR SWITCHER =================
const colorButtons = document.querySelectorAll(".color-btn");

colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.getAttribute("data-color");

    // change main color
    document.documentElement.style.setProperty("--main-color", color);
  });
});
