function icon(name) {
  const paths = {
    search: '<circle cx="8" cy="8" r="5"></circle><path d="m12 12 5 5"></path>',
    heart: '<path d="M10 17s-6-3.6-6-8a3.4 3.4 0 0 1 6-2 3.4 3.4 0 0 1 6 2c0 4.4-6 8-6 8Z"></path>',
    cart: '<path d="M5 6h12l-1.4 7H7L5 3H2"></path><circle cx="8" cy="17" r="1"></circle><circle cx="15" cy="17" r="1"></circle>',
    user: '<circle cx="10" cy="6" r="3"></circle><path d="M4 18c1-4 11-4 12 0"></path>',
    menu: '<path d="M3 6h14"></path><path d="M3 12h14"></path>'
  };
  return `<svg class="icon" viewBox="0 0 20 20" aria-hidden="true">${paths[name]}</svg>`;
}

function setHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header || header.classList.contains("header-solid")) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal:not([data-reveal-ready])");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  nodes.forEach((node) => {
    node.dataset.revealReady = "true";
    observer.observe(node);
  });
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("is-open")));
}

function initQuickView() {
  const modal = document.querySelector("[data-quick-modal]");
  if (!modal) return;
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-quick-view]");
    if (btn) {
      const product = window.findProduct(btn.dataset.quickView);
      modal.querySelector("[data-quick-image]").src = product.image;
      modal.querySelector("[data-quick-title]").textContent = product.name;
      modal.querySelector("[data-quick-price]").textContent = window.money.format(product.price);
      modal.querySelector("[data-quick-description]").textContent = product.description;
      modal.querySelector("[data-quick-add]").dataset.addCart = product.id;
      modal.classList.add("is-open");
    }
    if (event.target.closest("[data-close-quick]") || event.target.matches("[data-quick-modal]")) {
      modal.classList.remove("is-open");
    }
  });
}

function initShopFilters() {
  const grid = document.querySelector("[data-shop-grid]");
  if (!grid) return;
  const sort = document.querySelector("[data-sort]");
  const checks = [...document.querySelectorAll("[data-filter]")];
  const priceChecks = [...document.querySelectorAll("[data-price-filter]")];

  function apply() {
    let items = [...window.products];
    const active = checks.filter((check) => check.checked).map((check) => check.value);
    if (active.length) {
      items = items.filter((product) => active.includes(product.collection) || active.includes(product.material) || active.includes(product.gemstone) || active.includes(product.gender));
    }
    const priceRanges = priceChecks.filter((check) => check.checked).map((check) => ({
      min: Number(check.dataset.priceMin || 0),
      max: Number(check.dataset.priceMax || Number.MAX_SAFE_INTEGER)
    }));
    if (priceRanges.length) {
      items = items.filter((product) => priceRanges.some((range) => product.price >= range.min && product.price < range.max));
    }
    if (sort.value === "price-asc") items.sort((a, b) => a.price - b.price);
    if (sort.value === "price-desc") items.sort((a, b) => b.price - a.price);
    window.renderProducts("[data-shop-grid]", items);
  }

  checks.forEach((check) => check.addEventListener("change", apply));
  priceChecks.forEach((check) => check.addEventListener("change", apply));
  sort?.addEventListener("change", apply);
}

function initProductDetail() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;
  const params = new URLSearchParams(location.search);
  const product = window.findProduct(params.get("slug"));
  detail.querySelectorAll("[data-title]").forEach((node) => node.textContent = product.name);
  detail.querySelector("[data-price]").textContent = window.money.format(product.price);
  detail.querySelector("[data-description]").textContent = product.description;
  detail.querySelector("[data-material]").textContent = product.material;
  const gallery = [product.image, product.image2, ...window.products.filter((item) => item.id !== product.id).slice(0, 2).map((item) => item.image)];
  detail.querySelector("[data-gallery-main]").src = gallery[0];
  detail.querySelector("[data-gallery-main]").alt = product.name;
  detail.querySelector("[data-thumbs]").innerHTML = gallery.map((src, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-gallery-thumb><img src="${src}" alt="${product.name} view ${index + 1}"></button>`).join("");
  detail.querySelector("[data-detail-add]").addEventListener("click", () => {
    const qty = Number(detail.querySelector("[data-detail-qty]").value || 1);
    const size = detail.querySelector("[data-size].is-active")?.textContent || "52";
    const material = detail.querySelector("[data-material-option].is-active")?.textContent || product.material;
    window.addToCart(product, { qty, size, material });
  });
  detail.querySelector("[data-buy-now]").addEventListener("click", () => {
    window.addToCart(product, { qty: Number(detail.querySelector("[data-detail-qty]").value || 1) });
    location.href = "checkout.html";
  });
  window.renderProducts("[data-related]", window.products.filter((item) => item.id !== product.id).slice(0, 4));
  initGallery();
}

function initTabsAndOptions() {
  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    if (tab) {
      document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll("[data-tab-panel]").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`[data-tab-panel="${tab.dataset.tab}"]`)?.classList.add("is-active");
    }
    const option = event.target.closest("[data-size], [data-material-option]");
    if (option) {
      const group = option.hasAttribute("data-size") ? "[data-size]" : "[data-material-option]";
      document.querySelectorAll(group).forEach((item) => item.classList.remove("is-active"));
      option.classList.add("is-active");
    }
    const qtyBtn = event.target.closest("[data-detail-qty-btn]");
    if (qtyBtn) {
      const input = document.querySelector("[data-detail-qty]");
      input.value = Math.max(1, Number(input.value) + Number(qtyBtn.dataset.detailQtyBtn));
    }
  });
}

function initPageRenders() {
  window.renderProducts?.("[data-featured-products]", window.products.slice(0, 4));
  window.renderProducts?.("[data-shop-grid]", window.products);
  const blogGrid = document.querySelector("[data-blog-grid]");
  if (blogGrid) {
    blogGrid.innerHTML = window.blogs.map((post, index) => `
      <article class="article-card reveal ${index === 0 ? "large" : ""}">
        <a href="blog-detail.html"><img src="${post.image}" alt="${post.title}" loading="lazy"></a>
        <span class="tag">${post.tag}</span>
        <h2><a href="blog-detail.html">${post.title}</a></h2>
        <p class="muted">${post.excerpt}</p>
      </article>`).join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-icon]").forEach((node) => node.innerHTML = icon(node.dataset.icon));
  setHeaderState();
  initMobileMenu();
  initPageRenders();
  initReveal();
  initQuickView();
  initShopFilters();
  initProductDetail();
  initTabsAndOptions();
  window.updateCartUI?.();
  setTimeout(() => {
    document.body.classList.remove("loading");
    document.querySelector(".preloader")?.classList.add("is-hidden");
  }, 550);
});

window.addEventListener("scroll", () => {
  setHeaderState();
  const hero = document.querySelector(".hero-content");
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;
});

window.initReveal = initReveal;
