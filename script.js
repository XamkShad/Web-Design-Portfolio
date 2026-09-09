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



// Interactive before/after image comparisons.
document.querySelectorAll(".before-after").forEach((comparison) => {
  const setPosition = (clientX) => {
    const rect = comparison.getBoundingClientRect();
    if (!rect.width) return;

    const percent = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    comparison.style.setProperty("--position", `${percent}%`);
    comparison.setAttribute("aria-valuenow", String(Math.round(percent)));
  };

  comparison.addEventListener("pointerdown", (event) => {
    comparison.setPointerCapture(event.pointerId);
    setPosition(event.clientX);
    comparison.classList.add("is-dragging");
    event.preventDefault();
  });

  comparison.addEventListener("pointermove", (event) => {
    if (comparison.hasPointerCapture(event.pointerId)) {
      setPosition(event.clientX);
    }
  });

  const stopDragging = (event) => {
    if (comparison.hasPointerCapture(event.pointerId)) {
      comparison.releasePointerCapture(event.pointerId);
    }
    comparison.classList.remove("is-dragging");
  };

  comparison.addEventListener("pointerup", stopDragging);
  comparison.addEventListener("pointercancel", stopDragging);

  comparison.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let value = Number(comparison.getAttribute("aria-valuenow")) || 50;
    if (event.key === "ArrowLeft") value -= 5;
    if (event.key === "ArrowRight") value += 5;
    if (event.key === "Home") value = 0;
    if (event.key === "End") value = 100;

    value = Math.max(0, Math.min(100, value));
    comparison.style.setProperty("--position", `${value}%`);
    comparison.setAttribute("aria-valuenow", String(value));
  });
});
