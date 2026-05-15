const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    menuCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
      if (visible) {
        card.animate([
          { opacity: 0, transform: "translateY(14px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: 320, easing: "ease-out" });
      }
    });
  });
});
