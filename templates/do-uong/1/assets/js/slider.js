document.addEventListener("DOMContentLoaded", () => {
  const slides = [...document.querySelectorAll("[data-hero-slide]")];
  if (!slides.length) return;

  let index = 0;
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 5200);

  window.addEventListener(
    "scroll",
    () => {
      const hero = document.querySelector(".home-hero");
      if (!hero) return;
      hero.style.setProperty("--parallax", `${window.scrollY * 0.08}px`);
      slides.forEach((slide) => {
        slide.style.transform = `translateY(${window.scrollY * 0.08}px) scale(${slide.classList.contains("active") ? 1.1 : 1.04})`;
      });
    },
    { passive: true }
  );
});
