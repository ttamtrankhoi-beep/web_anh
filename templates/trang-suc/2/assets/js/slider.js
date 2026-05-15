function initHeroSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-dots button")];
  if (!slides.length) return;
  let index = 0;

  function show(next) {
    slides[index].classList.remove("is-active");
    dots[index]?.classList.remove("is-active");
    index = next;
    slides[index].classList.add("is-active");
    dots[index]?.classList.add("is-active");
  }

  dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => show(dotIndex)));
  setInterval(() => show((index + 1) % slides.length), 5200);
}

function initGallery() {
  const main = document.querySelector("[data-gallery-main]");
  const thumbs = [...document.querySelectorAll("[data-gallery-thumb]")];
  if (!main || !thumbs.length) return;
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((item) => item.classList.remove("is-active"));
      thumb.classList.add("is-active");
      main.src = thumb.querySelector("img").src;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initGallery();
});
