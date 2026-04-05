/* Project: Dashboard UI | Skills: mobile sidebar toggle, tab switching, animated counters */

// Toggle the sidebar on smaller screens so the layout stays usable on mobile.
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

// Switch visible dashboard panels using tab buttons in the sidebar.
const tabLinks = Array.from(document.querySelectorAll(".tab-link"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

tabLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const targetId = link.dataset.tab;

    tabLinks.forEach(function (item) {
      item.classList.toggle("active", item === link);
    });

    tabPanels.forEach(function (panel) {
      panel.classList.toggle("active", panel.id === targetId);
    });

    sidebar.classList.remove("open");
  });
});

// Animate the stat cards so learners can see a simple dashboard number effect.
const statNumbers = Array.from(document.querySelectorAll("[data-target]"));

function animateNumber(element) {
  const target = Number(element.dataset.target);
  let current = 0;
  const increment = Math.max(1, Math.floor(target / 60));

  function tick() {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      return;
    }

    element.textContent = current.toLocaleString();
    requestAnimationFrame(tick);
  }

  tick();
}

statNumbers.forEach(animateNumber);
