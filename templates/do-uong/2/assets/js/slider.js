const slides = document.querySelectorAll("[data-hero-slide]");
const galleryMain = document.querySelector("[data-gallery-main]");

if (slides.length > 1) {
  let activeSlide = 0;
  setInterval(() => {
    slides[activeSlide].classList.remove("active");
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add("active");
  }, 5200);
}

document.querySelectorAll("[data-thumb]").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (!galleryMain) return;
    document.querySelectorAll("[data-thumb]").forEach((button) => button.classList.remove("active"));
    thumb.classList.add("active");
    galleryMain.src = thumb.dataset.thumb;
  });
});
