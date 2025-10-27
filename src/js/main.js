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
document.querySelectorAll(".accordion-button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Daj malo vremena da se accordion otvori (Bootstrap animacija)
    setTimeout(() => {
      const rect = btn.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top - 115; // 80px od vrha viewporta

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }, 300); // delay da se accordion prvo otvori
  });
});
