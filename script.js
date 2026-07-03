const navToggle = document.querySelector(".nav-toggle");
const topbar = document.querySelector(".topbar");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");

navToggle?.addEventListener("click", () => {
  topbar.classList.toggle("nav-open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((el) => observer.observe(el));

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been received. I will follow up shortly.");
  contactForm.reset();
});
