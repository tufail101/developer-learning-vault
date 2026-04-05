/* Project: Portfolio Website | Skills: smooth scrolling, active nav state, form validation */

// Cache the navigation and section elements so we only query the DOM once.
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");
const navItems = Array.from(document.querySelectorAll(".nav-links a"));
const sections = Array.from(document.querySelectorAll("main section"));

// Toggle the mobile menu so smaller screens can open and close navigation links.
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close the mobile menu after a user selects a section link.
navItems.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// Highlight the current section in the navigation as the user scrolls.
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      navItems.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    threshold: 0.45,
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});

// Validate the contact form and show friendly error messages next to each field.
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const successMessage = document.querySelector("#form-success");

function setError(id, message) {
  document.querySelector(`#${id}-error`).textContent = message;
}

function clearErrors() {
  setError("name", "");
  setError("email", "");
  setError("message", "");
  successMessage.textContent = "";
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let hasError = false;

  if (nameInput.value.trim().length < 2) {
    setError("name", "Please enter at least 2 characters.");
    hasError = true;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    setError("email", "Please enter a valid email address.");
    hasError = true;
  }

  if (messageInput.value.trim().length < 12) {
    setError("message", "Please write a slightly longer message.");
    hasError = true;
  }

  if (hasError) return;

  successMessage.textContent =
    "Message looks great. In a real project, this would now be sent to a server.";
  form.reset();
});
