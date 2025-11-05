// Navigation scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(12px)";
    navbar.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
    navbar.style.boxShadow = "none";
  }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Navigation hover effect
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    const underline = this.querySelector(".nav-underline");
    underline.style.width = "100%";
  });
  link.addEventListener("mouseleave", function () {
    const underline = this.querySelector(".nav-underline");
    underline.style.width = "0";
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate progress bars
      const progressBars = entry.target.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
          bar.style.width = width + "%";
        }, 100);
      });
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section-animate").forEach((section) => {
  observer.observe(section);
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Tänan! See on demo, seega sõnumit ei saadeta.");
    this.reset();
  });

// Set current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Mobile menu toggle (basic implementation)
document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    alert("Mobiilne menüü funktsionaalsus tuleks siin implementeerida");
  });
