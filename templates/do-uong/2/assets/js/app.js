const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const closeCartButtons = document.querySelectorAll("[data-close-cart]");
const cartButtons = document.querySelectorAll("[data-open-cart]");
const drawerBackdrop = document.querySelector("[data-drawer-backdrop]");
const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modal = document.querySelector("[data-modal]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", document.body.classList.contains("menu-open"));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

cartButtons.forEach((button) => button.addEventListener("click", () => document.body.classList.add("cart-open")));
closeCartButtons.forEach((button) => button.addEventListener("click", () => document.body.classList.remove("cart-open")));
drawerBackdrop?.addEventListener("click", () => {
  document.body.classList.remove("cart-open");
  document.body.classList.remove("menu-open");
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".fade-in, .section, .product-card, .article-card, .menu-card").forEach((element) => {
  element.classList.add("fade-in");
  revealObserver.observe(element);
});

window.openQuickView = (product) => {
  if (!modal) return;
  modal.innerHTML = `
    <div class="quick-view">
      <img src="${product.image}" alt="${product.name}">
      <div class="quick-view-content">
        <div style="display:flex;justify-content:space-between;gap:16px;align-items:start;">
          <div>
            <p class="section-kicker">Quick View</p>
            <h2 class="section-title" style="font-size:clamp(2rem,5vw,4rem);">${product.name}</h2>
          </div>
          <button class="close-btn" type="button" data-close-modal aria-label="Close">×</button>
        </div>
        <p class="section-copy">${product.description || "Small-batch coffee with warm aromatics and a clean finish."}</p>
        <p class="price" style="font-size:1.4rem;">${money(Number(product.price))}</p>
        <button class="btn btn-primary" type="button" data-add-cart data-id="${product.id}" data-name="${product.name}" data-image="${product.image}" data-price="${product.price}">Add to cart</button>
      </div>
    </div>
  `;
  document.body.classList.add("modal-open");
};

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    document.body.classList.remove("modal-open");
  }
});

modalBackdrop?.addEventListener("click", () => document.body.classList.remove("modal-open"));

document.querySelectorAll("[data-parallax]").forEach((element) => {
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    const offset = rect.top * -0.06;
    element.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
});
