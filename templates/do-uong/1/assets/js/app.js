const products = [
  {
    id: "reserve-espresso",
    name: "Reserve Espresso",
    price: 68000,
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=85",
    desc: "Double shot dam, crema min, hau vi cacao va caramel chay cham.",
  },
  {
    id: "velvet-latte",
    name: "Velvet Latte",
    price: 78000,
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85",
    desc: "Espresso house blend voi sua tuoi steam mem va note hat de.",
  },
  {
    id: "cacao-mocha",
    name: "Cacao Mocha",
    price: 82000,
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    desc: "Mocha am, chocolate 70%, espresso rang vua va foam day.",
  },
  {
    id: "amber-cold-brew",
    name: "Amber Cold Brew",
    price: 86000,
    category: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    desc: "Ủ lạnh 18 giờ, thanh, it chua, hau vi mat ong va cam kho.",
  },
  {
    id: "matcha-cream",
    name: "Kyoto Matcha Cream",
    price: 88000,
    category: "Tea",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=85",
    desc: "Matcha ceremonial, sua kem nhe va lop cream muoi bien.",
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    price: 72000,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=85",
    desc: "Croissant bo Phap, nhan almond cream, nuong moi moi sang.",
  },
  {
    id: "tiramisu-cup",
    name: "Espresso Tiramisu",
    price: 92000,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
    desc: "Mascarpone min, ladyfinger ngam espresso va cacao rang.",
  },
  {
    id: "estate-beans",
    name: "Single Estate Beans",
    price: 240000,
    category: "Beans",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=85",
    desc: "Hat Arabica chon loc, roast profile rieng cho pour-over va espresso.",
  },
  {
    id: "morning-drip-set",
    name: "Morning Drip Set",
    price: 180000,
    category: "Beans",
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=85",
    desc: "Hop 10 tui drip voi profile chocolate, nutty va hau vi sach.",
  },
  {
    id: "pour-over-kit",
    name: "Pour-over Ritual Kit",
    price: 620000,
    category: "Beans",
    image: "https://images.unsplash.com/photo-1461988091159-192b6df7054f?auto=format&fit=crop&w=900&q=85",
    desc: "Bo dripper, filter va glass server cho nghi thuc pha tai nha.",
  },
];

function initHeader() {
  const header = document.querySelector("[data-header]");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector("[data-nav-links]");
  toggle?.addEventListener("click", () => links?.classList.toggle("open"));
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function bindAddButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-product]");
    if (!button) return;
    const product = products.find((item) => item.id === button.dataset.addProduct);
    if (!product) return;
    addToCart({ ...product, qty: 1, size: button.dataset.size || "Regular", sugar: "Normal", ice: "Normal" });
  });
}

function initQuickView() {
  const modal = document.querySelector("[data-quick-view]");
  const overlay = document.querySelector("[data-overlay]");
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-product]");
    if (!button || !modal) return;
    const product = products.find((item) => item.id === button.dataset.quickProduct);
    if (!product) return;
    modal.innerHTML = `
      <div class="quick-grid">
        <img src="${product.image}" alt="${product.name}">
        <div class="quick-copy">
          <button class="plain-btn" type="button" data-close-drawers>Close</button>
          <p class="eyebrow">${product.category}</p>
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <p class="price">${formatMoney(product.price)}</p>
          <div class="detail-actions">
            <button class="btn" type="button" data-add-product="${product.id}">Add to cart</button>
            <a class="btn outline" href="product-detail.html">View detail</a>
          </div>
        </div>
      </div>`;
    modal.classList.add("open");
    overlay?.classList.add("open");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileMenu();
  initReveal();
  bindAddButtons();
  initQuickView();
});
