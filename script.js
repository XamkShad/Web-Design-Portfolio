const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

// Keep project devlogs newest-first.
// Give each .devlog-entry a data-order number; higher numbers are newer.
document.querySelectorAll(".devlog").forEach((devlog) => {
  const entries = Array.from(devlog.querySelectorAll(".devlog-entry[data-order]"));

  entries
    .sort((a, b) => Number(b.dataset.order) - Number(a.dataset.order))
    .forEach((entry) => devlog.appendChild(entry));
});

