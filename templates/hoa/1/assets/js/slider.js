document.addEventListener("DOMContentLoaded", () => {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = document.querySelector(".slider-dots");
  if (!slides.length || !dots) return;

  let index = 0;
  dots.innerHTML = slides.map((_, dotIndex) =>
    `<button aria-label="Chuyển đến banner ${dotIndex + 1}" data-slide="${dotIndex}"></button>`
  ).join("");

  const dotButtons = [...dots.querySelectorAll("button")];
  const show = next => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === index));
    dotButtons.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  dots.addEventListener("click", event => {
    const dot = event.target.closest("[data-slide]");
    if (dot) show(Number(dot.dataset.slide));
  });

  show(0);
  setInterval(() => show(index + 1), 6200);
});
