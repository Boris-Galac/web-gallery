document.addEventListener("DOMContentLoaded", () => {
  const hamBtn = document.querySelector(".ham-btn");
  const nav = document.querySelector(".nav");

  if (hamBtn && nav) {
    hamBtn.addEventListener("click", () => {
      const isExpanded = nav.getAttribute("aria-expanded") === "true";
      nav.setAttribute("aria-expanded", !isExpanded);
      hamBtn.setAttribute("data-active", !isExpanded);
    });
  }

  baguetteBox.run(".gallery");
});
