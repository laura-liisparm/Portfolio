function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Close mobile menu after clicking a link
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("flex")) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  }
}

// Navbar shadow effect on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-md", "bg-white/90");
  } else {
    navbar.classList.remove("shadow-md", "bg-white/90");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  }
});
