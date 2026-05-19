const IMAGE = (id, params = "auto=format&fit=crop&w=900&q=82") =>
  `https://images.unsplash.com/${id}?${params}`;

const PRODUCTS = [
  {
    id: "rose-muse",
    name: "Rose Muse Bouquet",
    price: 1280000,
    category: "Hoa tình yêu",
    type: "rose",
    color: "pink",
    occasion: "love",
    badge: "-12%",
    image: IMAGE("photo-1487530811176-3780de880c2d"),
    hover: IMAGE("photo-1561181286-d3fee7d55364"),
    desc: "Bó hồng pastel phối lá bạc, mềm mại và lãng mạn cho những khoảnh khắc cần được nói bằng hoa."
  },
  {
    id: "peony-cloud",
    name: "Peony Cloud",
    price: 1680000,
    category: "Hoa sinh nhật",
    type: "peony",
    color: "cream",
    occasion: "birthday",
    badge: "Best",
    image: IMAGE("photo-1490750967868-88aa4486c946"),
    hover: IMAGE("photo-1468327768560-75b778cbb551"),
    desc: "Peony kem phối baby, thiết kế bay nhẹ như một lời chúc sinh nhật thật dịu dàng."
  },
  {
    id: "grand-opening",
    name: "Golden Opening Stand",
    price: 2450000,
    category: "Hoa khai trương",
    type: "orchid",
    color: "gold",
    occasion: "opening",
    badge: "New",
    image: IMAGE("photo-1525310072745-f49212b5ac6d"),
    hover: IMAGE("photo-1508610048659-a06b669e3321"),
    desc: "Kệ hoa tông vàng champagne, sang trọng cho lời chúc thịnh vượng và khởi đầu rực rỡ."
  },
  {
    id: "bridal-whisper",
    name: "Bridal Whisper",
    price: 1850000,
    category: "Hoa cưới",
    type: "mixed",
    color: "white",
    occasion: "wedding",
    badge: "Limited",
    image: IMAGE("photo-1526047932273-341f2a7631f9"),
    hover: IMAGE("photo-1520763185298-1b434c919102"),
    desc: "Bó cưới trắng kem phối xanh sage, thanh lịch cho phong cách cưới hiện đại."
  },
  {
    id: "comfort-lily",
    name: "Comfort Lily Basket",
    price: 1320000,
    category: "Hoa chia buồn",
    type: "lily",
    color: "white",
    occasion: "sympathy",
    badge: "",
    image: IMAGE("photo-1533616688419-b7a585564566"),
    hover: IMAGE("photo-1501004318641-b39e6451bec6"),
    desc: "Giỏ lily trắng tinh giản, gửi lời chia sẻ trân trọng và yên bình."
  },
  {
    id: "celebrate-pink",
    name: "Celebrate Pink Box",
    price: 980000,
    category: "Hoa chúc mừng",
    type: "mixed",
    color: "pink",
    occasion: "congrats",
    badge: "-8%",
    image: IMAGE("photo-1487070183336-b863922373d4"),
    hover: IMAGE("photo-1487530811176-3780de880c2d"),
    desc: "Hộp hoa hồng phấn phối cẩm tú cầu, tiện tặng và nổi bật trên mọi bàn tiệc."
  },
  {
    id: "mother-day",
    name: "Mother's Day Garden",
    price: 1450000,
    category: "Hoa sinh nhật",
    type: "mixed",
    color: "pastel",
    occasion: "mother",
    badge: "Gift",
    image: IMAGE("photo-1455659817273-f96807779a8a"),
    hover: IMAGE("photo-1495231916356-a86217efff12"),
    desc: "Vườn hoa pastel ấm áp, dành cho những lời cảm ơn cần được gói thật đẹp."
  },
  {
    id: "valentine-flame",
    name: "Valentine Flame",
    price: 1590000,
    category: "Hoa tình yêu",
    type: "rose",
    color: "red",
    occasion: "valentine",
    badge: "Hot",
    image: IMAGE("photo-1518621736915-f3b1c41bfd00"),
    hover: IMAGE("photo-1487530903081-59e0e3331512"),
    desc: "Hồng đỏ nhập khẩu bó dáng cao, đậm cảm xúc nhưng vẫn giữ vẻ tinh tế."
  }
];

const BLOGS = [
  {
    title: "Ý nghĩa hoa hồng pastel trong những món quà hiện đại",
    tag: "Flower Meaning",
    image: IMAGE("photo-1518895949257-7621c3c786d7"),
    excerpt: "Vì sao gam hồng phấn luôn khiến món quà trở nên mềm mại, gần gũi và vẫn đủ trang trọng."
  },
  {
    title: "Cách giữ bó hoa tươi lâu trong căn hộ nhiều nắng",
    tag: "Care Guide",
    image: IMAGE("photo-1501004318641-b39e6451bec6"),
    excerpt: "Những mẹo nhỏ về nước, ánh sáng và vị trí đặt hoa giúp bình hoa đẹp thêm nhiều ngày."
  },
  {
    title: "Chọn hoa khai trương theo ngành nghề và không gian",
    tag: "Gifting Guide",
    image: IMAGE("photo-1525310072745-f49212b5ac6d"),
    excerpt: "Một kệ hoa đẹp cần hợp thương hiệu, lời chúc và cả nơi nó xuất hiện trong buổi lễ."
  }
];

const formatMoney = value => new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
}).format(value);

const getProduct = id => PRODUCTS.find(product => product.id === id) || PRODUCTS[0];

function productCard(product) {
  return `
    <article class="product-card fade-up" data-product-card data-category="${product.category}" data-type="${product.type}" data-color="${product.color}" data-occasion="${product.occasion}" data-price="${product.price}">
      <a class="product-card__media" href="product-detail.html?id=${product.id}" aria-label="${product.name}">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <img src="${product.hover}" alt="${product.name} phối cảnh khác" loading="lazy">
      </a>
      <div class="product-card__body">
        <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
        <div class="price">${formatMoney(product.price)}</div>
        <div class="product-card__actions">
          <button class="btn mini add-to-cart" data-product-id="${product.id}">Thêm vào giỏ</button>
          <button class="icon-btn quick-view-btn" data-product-id="${product.id}" aria-label="Xem nhanh">⌕</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(selector, products = PRODUCTS) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = products.map(productCard).join("");
  revealNow(target.querySelectorAll(".fade-up"));
}

function renderBlogs(selector, limit = BLOGS.length) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = BLOGS.slice(0, limit).map((post, index) => `
    <article class="blog-card fade-up">
      <a class="blog-card__media" href="blog-detail.html?post=${index}">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </a>
      <div class="blog-card__body">
        <p class="eyebrow">${post.tag}</p>
        <h3><a href="blog-detail.html?post=${index}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
      </div>
    </article>
  `).join("");
  revealNow(target.querySelectorAll(".fade-up"));
}

function revealNow(nodes) {
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  nodes.forEach(node => observer.observe(node));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll(".nav a");
  const current = location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("is-active");
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  }

  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupQuickView() {
  const modal = document.querySelector(".quick-view");
  if (!modal) return;

  document.addEventListener("click", event => {
    const quick = event.target.closest(".quick-view-btn");
    const close = event.target.closest("[data-close-modal]");
    const overlay = event.target.classList.contains("modal-overlay");

    if (quick) {
      const product = getProduct(quick.dataset.productId);
      modal.querySelector(".quick-view__body").innerHTML = `
        <div class="image-frame"><img src="${product.image}" alt="${product.name}"></div>
        <div>
          <p class="eyebrow">${product.category}</p>
          <h2>${product.name}</h2>
          <div class="detail-price">${formatMoney(product.price)}</div>
          <p>${product.desc}</p>
          <div class="option-row">
            <label>Size</label>
            <div class="size-options" data-size-options>
              <button class="is-active" data-size="M">M</button>
              <button data-size="L">L</button>
              <button data-size="Premium">Premium</button>
            </div>
          </div>
          <button class="btn btn--rose add-to-cart" data-product-id="${product.id}">Thêm vào giỏ</button>
        </div>
      `;
      document.body.classList.add("modal-open");
    }

    if (close || overlay) document.body.classList.remove("modal-open");
  });
}

function setupCategoryFilters() {
  const grid = document.querySelector("[data-category-grid]");
  if (!grid) return;

  renderProducts("[data-category-grid]", PRODUCTS);
  const controls = document.querySelectorAll("[data-filter]");
  const price = document.querySelector("[data-price-range]");
  const sort = document.querySelector("[data-sort]");
  const count = document.querySelector("[data-result-count]");

  function apply() {
    const active = [...controls].filter(input => input.checked).map(input => input.value);
    const max = price ? Number(price.value) : Infinity;
    let next = PRODUCTS.filter(product => product.price <= max);
    if (active.length) {
      next = next.filter(product => active.includes(product.type) || active.includes(product.color) || active.includes(product.occasion));
    }
    if (sort?.value === "price-asc") next.sort((a, b) => a.price - b.price);
    if (sort?.value === "price-desc") next.sort((a, b) => b.price - a.price);
    if (sort?.value === "best") next.sort((a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge)));
    grid.innerHTML = next.length ? next.map(productCard).join("") : `<div class="empty-state">Không tìm thấy mẫu hoa phù hợp.</div>`;
    if (count) count.textContent = `${next.length} sản phẩm`;
    revealNow(grid.querySelectorAll(".fade-up"));
  }

  controls.forEach(input => input.addEventListener("change", apply));
  price?.addEventListener("input", () => {
    document.querySelector("[data-price-label]").textContent = formatMoney(Number(price.value));
    apply();
  });
  sort?.addEventListener("change", apply);
  apply();
}

function setupActiveButtons() {
  document.addEventListener("click", event => {
    const option = event.target.closest("[data-size-options] button");
    if (!option) return;
    option.parentElement.querySelectorAll("button").forEach(button => button.classList.remove("is-active"));
    option.classList.add("is-active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupQuickView();
  setupCategoryFilters();
  setupActiveButtons();
  renderProducts("[data-best-sellers]", PRODUCTS.slice(0, 4));
  renderProducts("[data-related-products]", PRODUCTS.slice(1, 5));
  renderBlogs("[data-blog-preview]", 3);
  renderBlogs("[data-blog-grid]", BLOGS.length);
  revealNow(document.querySelectorAll(".fade-up"));
});
