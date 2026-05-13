// Product data is centralized so every page can share cart and catalog behavior.
const products = [
  {
    id: "dell-xps-14",
    name: "Dell XPS 14 Ultra 7",
    brand: "Dell",
    category: "office",
    price: 38990000,
    oldPrice: 42990000,
    discount: 9,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core Ultra 7 155H",
    ssd: "1TB NVMe Gen 4",
    vga: "Intel Arc Graphics",
    screen: "14.5 inch 3.2K OLED 120Hz",
    shortSpecs: "Ultra 7, 16GB RAM, 1TB SSD, OLED 120Hz",
    description: "Dell XPS 14 cân bằng giữa thiết kế cao cấp, hiệu năng AI mới và màn hình OLED sắc nét cho người dùng chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true
  },
  {
    id: "asus-rog-strix-g16",
    name: "ASUS ROG Strix G16 RTX 4070",
    brand: "ASUS",
    category: "gaming",
    price: 44990000,
    oldPrice: 51990000,
    discount: 13,
    ram: "32GB",
    cpuType: "Intel",
    cpu: "Intel Core i9-14900HX",
    ssd: "1TB NVMe PCIe",
    vga: "NVIDIA GeForce RTX 4070 8GB",
    screen: "16 inch QHD+ 240Hz",
    shortSpecs: "i9 HX, RTX 4070, 32GB RAM, QHD+ 240Hz",
    description: "ROG Strix G16 dành cho game thủ cần FPS cao, tản nhiệt mạnh và màn hình tốc độ cao cho esport lẫn AAA.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true
  },
  {
    id: "lenovo-thinkpad-x1",
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    brand: "Lenovo",
    category: "office",
    price: 35990000,
    oldPrice: 39990000,
    discount: 10,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core Ultra 5 125U",
    ssd: "512GB NVMe",
    vga: "Intel Graphics",
    screen: "14 inch WUXGA IPS",
    shortSpecs: "Ultra 5, 16GB RAM, 512GB SSD, 1.09kg",
    description: "ThinkPad X1 Carbon nổi bật với độ bền doanh nghiệp, bàn phím tốt và khả năng bảo mật toàn diện.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true
  },
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360 14 OLED",
    brand: "HP",
    category: "office",
    price: 32990000,
    oldPrice: 36990000,
    discount: 11,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core Ultra 7 155U",
    ssd: "1TB NVMe",
    vga: "Intel Arc Graphics",
    screen: "14 inch 2.8K OLED Touch",
    shortSpecs: "Ultra 7, OLED cảm ứng, 16GB RAM, 1TB SSD",
    description: "HP Spectre x360 linh hoạt với bản lề xoay 360 độ, phù hợp ghi chú, họp online và làm việc di động.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80"
    ],
    featured: true
  },
  {
    id: "acer-predator-helios",
    name: "Acer Predator Helios Neo 16",
    brand: "Acer",
    category: "gaming",
    price: 31990000,
    oldPrice: 36990000,
    discount: 14,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core i7-14650HX",
    ssd: "1TB NVMe",
    vga: "NVIDIA GeForce RTX 4060 8GB",
    screen: "16 inch WQXGA 165Hz",
    shortSpecs: "i7 HX, RTX 4060, 16GB RAM, 165Hz",
    description: "Predator Helios Neo 16 mang lại hiệu năng gaming mạnh trong mức giá hợp lý cho game thủ nâng cấp.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "asus-zenbook-14",
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    category: "office",
    price: 24990000,
    oldPrice: 27990000,
    discount: 11,
    ram: "16GB",
    cpuType: "AMD",
    cpu: "AMD Ryzen 7 8840HS",
    ssd: "512GB NVMe",
    vga: "AMD Radeon 780M",
    screen: "14 inch 3K OLED",
    shortSpecs: "Ryzen 7, 16GB RAM, OLED 3K, 1.2kg",
    description: "Zenbook 14 OLED mỏng nhẹ, màn hình đẹp, pin tốt cho học tập và làm việc sáng tạo.",
    image: "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "dell-g15",
    name: "Dell G15 Ryzen Edition",
    brand: "Dell",
    category: "gaming",
    price: 23990000,
    oldPrice: 27990000,
    discount: 14,
    ram: "16GB",
    cpuType: "AMD",
    cpu: "AMD Ryzen 7 7840HS",
    ssd: "512GB NVMe",
    vga: "NVIDIA GeForce RTX 4050 6GB",
    screen: "15.6 inch FHD 165Hz",
    shortSpecs: "Ryzen 7, RTX 4050, 16GB RAM, 165Hz",
    description: "Dell G15 là lựa chọn bền bỉ cho gaming phổ thông và học thiết kế 3D cơ bản.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "lenovo-legion-5",
    name: "Lenovo Legion 5 Pro 16",
    brand: "Lenovo",
    category: "gaming",
    price: 34990000,
    oldPrice: 39990000,
    discount: 13,
    ram: "32GB",
    cpuType: "AMD",
    cpu: "AMD Ryzen 9 8945HX",
    ssd: "1TB NVMe",
    vga: "NVIDIA GeForce RTX 4060 8GB",
    screen: "16 inch WQXGA 240Hz",
    shortSpecs: "Ryzen 9, RTX 4060, 32GB RAM, 240Hz",
    description: "Legion 5 Pro phù hợp game thủ và creator cần màn hình chuẩn màu, hiệu năng ổn định lâu dài.",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "toshiba-dynabook",
    name: "Toshiba Dynabook Portégé X40",
    brand: "Toshiba",
    category: "office",
    price: 21990000,
    oldPrice: 24990000,
    discount: 12,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core i5-1340P",
    ssd: "512GB NVMe",
    vga: "Intel Iris Xe",
    screen: "14 inch FHD IPS",
    shortSpecs: "Core i5, 16GB RAM, 512GB SSD, doanh nghiệp",
    description: "Dynabook Portégé X40 hướng tới người dùng doanh nghiệp cần độ ổn định, nhẹ và nhiều cổng kết nối.",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "sony-vaio-sx14",
    name: "Sony VAIO SX14 Signature",
    brand: "Sony",
    category: "office",
    price: 28990000,
    oldPrice: 32990000,
    discount: 12,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core i7-1360P",
    ssd: "1TB NVMe",
    vga: "Intel Iris Xe",
    screen: "14 inch 4K IPS",
    shortSpecs: "Core i7, 16GB RAM, 1TB SSD, màn hình 4K",
    description: "VAIO SX14 nổi bật với thiết kế nhẹ, màn hình 4K và độ hoàn thiện cao cho người dùng di động.",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "hp-victus-16",
    name: "HP Victus 16 RTX 4050",
    brand: "HP",
    category: "gaming",
    price: 22990000,
    oldPrice: 25990000,
    discount: 12,
    ram: "16GB",
    cpuType: "Intel",
    cpu: "Intel Core i5-14500HX",
    ssd: "512GB NVMe",
    vga: "NVIDIA GeForce RTX 4050 6GB",
    screen: "16.1 inch FHD 144Hz",
    shortSpecs: "i5 HX, RTX 4050, 16GB RAM, 144Hz",
    description: "HP Victus 16 có thiết kế tối giản, hiệu năng ổn cho game online, đồ họa và học tập.",
    image: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  },
  {
    id: "acer-swift-go",
    name: "Acer Swift Go 14 AI",
    brand: "Acer",
    category: "office",
    price: 18990000,
    oldPrice: 21990000,
    discount: 14,
    ram: "8GB",
    cpuType: "Snapdragon",
    cpu: "Snapdragon X Plus",
    ssd: "512GB NVMe",
    vga: "Qualcomm Adreno",
    screen: "14 inch 2.2K IPS",
    shortSpecs: "Snapdragon X Plus, 8GB RAM, pin dài",
    description: "Acer Swift Go 14 AI tối ưu pin và tác vụ văn phòng hàng ngày với nền tảng Snapdragon mới.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
    ],
    featured: false
  }
];

const CART_KEY = "technova_cart";
const currency = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));
const formatPrice = (value) => currency.format(value).replace(/\s/g, "");

function showToast(message, type = "success") {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.className = "toast";
  }, 2800);
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = count;
  });
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
  updateCartCount();
  showToast("Đã thêm sản phẩm vào giỏ hàng");
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-image" href="product-detail.html?id=${product.id}" aria-label="${product.name}">
        <img src="${product.image}" alt="${product.name}">
        <span class="badge">-${product.discount}%</span>
      </a>
      <div class="product-body">
        <span class="product-brand">${product.brand}</span>
        <h3>${product.name}</h3>
        <p class="specs">${product.shortSpecs}</p>
        <div class="price-row">
          <strong class="price">${formatPrice(product.price)}</strong>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-secondary" href="product-detail.html?id=${product.id}">Xem chi tiết</a>
          <button class="btn icon-btn" type="button" data-add-cart="${product.id}" aria-label="Thêm ${product.name} vào giỏ hàng">+</button>
        </div>
      </div>
    </article>
  `;
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}

function initSearch() {
  document.querySelectorAll(".search-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = form.querySelector("input").value.trim();
      window.location.href = query ? `products.html?search=${encodeURIComponent(query)}` : "products.html";
    });
  });
}

function initAddToCartButtons(root = document) {
  root.querySelectorAll("[data-add-cart]").forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => addToCart(button.dataset.addCart));
  });
}

function initHomePage() {
  document.querySelectorAll("[data-products]").forEach((container) => {
    const type = container.dataset.products;
    let list = products;
    if (type === "featured") list = products.filter((product) => product.featured);
    if (type === "gaming") list = products.filter((product) => product.category === "gaming").slice(0, 4);
    if (type === "office") list = products.filter((product) => product.category === "office").slice(0, 4);
    container.innerHTML = list.map(productCard).join("");
    initAddToCartButtons(container);
  });
}

function initSlider() {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;
  const slides = [...slider.querySelectorAll(".slide")];
  const dotsWrap = slider.querySelector("[data-slider-dots]");
  let current = 0;

  dotsWrap.innerHTML = slides.map((_, index) => `<button type="button" aria-label="Banner ${index + 1}"></button>`).join("");
  const dots = [...dotsWrap.querySelectorAll("button")];

  const showSlide = (index) => {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  };

  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
  dots[0].classList.add("active");
  window.setInterval(() => showSlide((current + 1) % slides.length), 5200);
}

function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function initCatalogPage() {
  const catalog = document.querySelector("[data-catalog]");
  if (!catalog) return;

  const perPage = 6;
  let currentPage = 1;
  const pagination = document.querySelector("[data-pagination]");
  const resultTitle = document.querySelector("[data-result-title]");
  const sortSelect = document.querySelector("[data-sort]");

  const initialBrand = getQueryParam("brand");
  const initialCategory = getQueryParam("category");
  const initialSearch = getQueryParam("search");
  if (initialBrand) {
    const checkbox = document.querySelector(`input[name="brand"][value="${initialBrand}"]`);
    if (checkbox) checkbox.checked = true;
  }

  const selectedValues = (name) => [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((item) => item.value);

  const renderCatalog = () => {
    let list = [...products];
    const brands = selectedValues("brand");
    const rams = selectedValues("ram");
    const cpus = selectedValues("cpu");
    const price = document.querySelector('input[name="price"]:checked')?.value;

    if (initialCategory) list = list.filter((product) => product.category === initialCategory);
    if (initialSearch) {
      const query = initialSearch.toLowerCase();
      list = list.filter((product) => `${product.name} ${product.brand} ${product.shortSpecs}`.toLowerCase().includes(query));
    }
    if (brands.length) list = list.filter((product) => brands.includes(product.brand));
    if (rams.length) list = list.filter((product) => rams.includes(product.ram));
    if (cpus.length) list = list.filter((product) => cpus.includes(product.cpuType));
    if (price) {
      const [min, max] = price.split("-").map(Number);
      list = list.filter((product) => product.price >= min && product.price <= max);
    }

    if (sortSelect.value === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortSelect.value === "price-desc") list.sort((a, b) => b.price - a.price);

    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    currentPage = Math.min(currentPage, totalPages);
    const visible = list.slice((currentPage - 1) * perPage, currentPage * perPage);

    resultTitle.textContent = `${list.length} sản phẩm phù hợp`;
    catalog.innerHTML = visible.length ? visible.map(productCard).join("") : '<div class="empty-state"><h3>Không tìm thấy sản phẩm</h3><p>Thử bỏ bớt bộ lọc hoặc tìm kiếm từ khóa khác.</p></div>';
    pagination.innerHTML = Array.from({ length: totalPages }, (_, index) => `<button class="${index + 1 === currentPage ? "active" : ""}" type="button" data-page="${index + 1}">${index + 1}</button>`).join("");

    initAddToCartButtons(catalog);
    pagination.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        currentPage = Number(button.dataset.page);
        renderCatalog();
        window.scrollTo({ top: 260, behavior: "smooth" });
      });
    });
  };

  document.querySelectorAll(".filter-sidebar input").forEach((input) => {
    input.addEventListener("change", () => {
      currentPage = 1;
      renderCatalog();
    });
  });
  sortSelect.addEventListener("change", renderCatalog);
  document.querySelector("[data-clear-filters]").addEventListener("click", () => {
    document.querySelectorAll(".filter-sidebar input").forEach((input) => {
      input.checked = false;
    });
    currentPage = 1;
    renderCatalog();
  });

  renderCatalog();
}

function initProductDetailPage() {
  const container = document.querySelector("[data-product-detail]");
  if (!container) return;
  const id = getQueryParam("id") || products[0].id;
  const product = products.find((item) => item.id === id) || products[0];

  document.title = `${product.name} | TechNova Laptop`;
  container.innerHTML = `
    <div class="product-gallery">
      <div class="gallery-main"><img data-main-image src="${product.gallery[0]}" alt="${product.name}"></div>
      <div class="gallery-thumbs">
        ${product.gallery.map((image, index) => `
          <button class="${index === 0 ? "active" : ""}" type="button" data-gallery-image="${image}" aria-label="Ảnh ${index + 1}">
            <img src="${image}" alt="${product.name} ${index + 1}">
          </button>
        `).join("")}
      </div>
    </div>
    <div class="detail-info">
      <p class="eyebrow">${product.brand}</p>
      <h1>${product.name}</h1>
      <div class="detail-price">
        <strong class="price">${formatPrice(product.price)}</strong>
        <span class="old-price">${formatPrice(product.oldPrice)}</span>
        <span class="badge">-${product.discount}%</span>
      </div>
      <div class="spec-table">
        <div><span>CPU</span><strong>${product.cpu}</strong></div>
        <div><span>RAM</span><strong>${product.ram}</strong></div>
        <div><span>SSD</span><strong>${product.ssd}</strong></div>
        <div><span>VGA</span><strong>${product.vga}</strong></div>
        <div><span>Màn hình</span><strong>${product.screen}</strong></div>
      </div>
      <p>${product.description}</p>
      <div class="detail-actions">
        <div class="qty-control" aria-label="Số lượng sản phẩm">
          <button type="button" data-qty-minus>-</button>
          <input type="number" data-qty value="1" min="1" max="20" aria-label="Số lượng">
          <button type="button" data-qty-plus>+</button>
        </div>
        <button class="btn btn-primary" type="button" data-detail-add="${product.id}">Thêm vào giỏ hàng</button>
      </div>
    </div>
  `;

  container.querySelectorAll("[data-gallery-image]").forEach((button) => {
    button.addEventListener("click", () => {
      container.querySelector("[data-main-image]").src = button.dataset.galleryImage;
      container.querySelectorAll("[data-gallery-image]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const qtyInput = container.querySelector("[data-qty]");
  container.querySelector("[data-qty-minus]").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  container.querySelector("[data-qty-plus]").addEventListener("click", () => {
    qtyInput.value = Math.min(20, Number(qtyInput.value) + 1);
  });
  container.querySelector("[data-detail-add]").addEventListener("click", () => {
    addToCart(product.id, Math.max(1, Number(qtyInput.value)));
  });

  const related = document.querySelector("[data-related]");
  related.innerHTML = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)
    .map(productCard)
    .join("");
  initAddToCartButtons(related);
}

function renderCartPage() {
  const list = document.querySelector("[data-cart-list]");
  if (!list) return;
  const cart = getCart();
  const detailedCart = cart.map((item) => ({ ...products.find((product) => product.id === item.id), quantity: item.quantity })).filter((item) => item.id);
  const total = detailedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  list.innerHTML = detailedCart.length ? detailedCart.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${formatPrice(item.price)} x ${item.quantity}</p>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button type="button" data-cart-minus="${item.id}">-</button>
          <input type="number" min="1" max="20" value="${item.quantity}" data-cart-qty="${item.id}" aria-label="Số lượng ${item.name}">
          <button type="button" data-cart-plus="${item.id}">+</button>
        </div>
        <button class="remove-btn" type="button" data-remove-cart="${item.id}">Xóa sản phẩm</button>
      </div>
    </article>
  `).join("") : '<div class="empty-state"><h3>Giỏ hàng đang trống</h3><p>Hãy thêm laptop yêu thích trước khi đặt hàng.</p><a class="btn btn-primary" href="products.html">Mua sắm ngay</a></div>';

  document.querySelector("[data-cart-subtotal]").textContent = formatPrice(total);
  document.querySelector("[data-cart-total]").textContent = formatPrice(total);
  updateCartCount();
}

function updateItemQuantity(id, quantity) {
  const cart = getCart().map((item) => item.id === id ? { ...item, quantity: Math.max(1, Math.min(20, quantity)) } : item);
  saveCart(cart);
  renderCartPage();
}

function initCartPage() {
  const list = document.querySelector("[data-cart-list]");
  if (!list) return;
  renderCartPage();
  list.addEventListener("click", (event) => {
    const minus = event.target.closest("[data-cart-minus]");
    const plus = event.target.closest("[data-cart-plus]");
    const remove = event.target.closest("[data-remove-cart]");
    if (minus) {
      const item = getCart().find((cartItem) => cartItem.id === minus.dataset.cartMinus);
      updateItemQuantity(item.id, item.quantity - 1);
    }
    if (plus) {
      const item = getCart().find((cartItem) => cartItem.id === plus.dataset.cartPlus);
      updateItemQuantity(item.id, item.quantity + 1);
    }
    if (remove) {
      saveCart(getCart().filter((item) => item.id !== remove.dataset.removeCart));
      showToast("Đã xóa sản phẩm khỏi giỏ hàng");
      renderCartPage();
    }
  });
  list.addEventListener("change", (event) => {
    if (event.target.matches("[data-cart-qty]")) {
      updateItemQuantity(event.target.dataset.cartQty, Number(event.target.value));
    }
  });
  document.querySelector("[data-update-cart]").addEventListener("click", () => {
    renderCartPage();
    showToast("Giỏ hàng đã được cập nhật");
  });
}

function initCheckoutPage() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;
  const itemsWrap = document.querySelector("[data-checkout-items]");
  const totalWrap = document.querySelector("[data-checkout-total]");

  const renderCheckoutSummary = () => {
    const detailedCart = getCart().map((item) => ({ ...products.find((product) => product.id === item.id), quantity: item.quantity })).filter((item) => item.id);
    const total = detailedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    itemsWrap.innerHTML = detailedCart.length ? detailedCart.map((item) => `
      <div class="checkout-item">
        <span>${item.name} x ${item.quantity}</span>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `).join("") : "<p>Chưa có sản phẩm trong giỏ hàng.</p>";
    totalWrap.textContent = formatPrice(total);
  };

  const setError = (name, message) => {
    const error = form.querySelector(`[data-error="${name}"]`);
    if (error) error.textContent = message;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    let valid = true;

    ["fullname", "phone", "email", "address"].forEach((name) => {
      const empty = !String(values[name] || "").trim();
      setError(name, empty ? "Vui lòng không để trống dữ liệu." : "");
      if (empty) valid = false;
    });

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "");
    if (values.email && !emailValid) {
      setError("email", "Email không hợp lệ.");
      valid = false;
    }

    const phoneValid = /^[0-9+\s]{9,15}$/.test(values.phone || "");
    if (values.phone && !phoneValid) {
      setError("phone", "Số điện thoại không hợp lệ.");
      valid = false;
    }

    if (!valid) {
      showToast("Vui lòng kiểm tra lại thông tin đặt hàng", "error");
      return;
    }

    localStorage.removeItem(CART_KEY);
    form.reset();
    updateCartCount();
    renderCheckoutSummary();
    showToast("Đặt hàng thành công");
  });

  renderCheckoutSummary();
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSearch();
  initSlider();
  initHomePage();
  initCatalogPage();
  initProductDetailPage();
  initCartPage();
  initCheckoutPage();
  initAddToCartButtons();
  updateCartCount();
});
