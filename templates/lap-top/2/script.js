/* =========================
   Nova Laptop Store Scripts
   ========================= */
const products = [
  {
    id: 1,
    name: "NovaBook Pro X1 14",
    brand: "Nova",
    price: 32990000,
    spec: "Core Ultra 7, 32GB RAM, SSD 1TB, OLED 2.8K",
    tag: "Nổi bật",
    discount: "-12%",
    category: ["featured", "office", "related"],
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Dell XPS 14 Plus",
    brand: "Dell",
    price: 36990000,
    spec: "Core Ultra 7, 16GB RAM, SSD 1TB, Intel Arc",
    tag: "Cao cấp",
    discount: "-10%",
    category: ["featured", "office", "related"],
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    price: 45990000,
    spec: "Ryzen AI 9, 32GB RAM, RTX 4070, 240Hz",
    tag: "Gaming",
    discount: "-15%",
    category: ["featured", "gaming", "related"],
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Lenovo Legion 7i",
    brand: "Lenovo",
    price: 42990000,
    spec: "Core i9, 32GB RAM, RTX 4080, SSD 1TB",
    tag: "Hiệu năng",
    discount: "-18%",
    category: ["gaming"],
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "HP EliteBook Ultra",
    brand: "HP",
    price: 27990000,
    spec: "Core Ultra 5, 16GB RAM, SSD 512GB, 14 inch",
    tag: "Văn phòng",
    discount: "-8%",
    category: ["office"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Acer Swift Go OLED",
    brand: "Acer",
    price: 20990000,
    spec: "Core Ultra 5, 16GB RAM, SSD 512GB, OLED",
    tag: "Mỏng nhẹ",
    discount: "-9%",
    category: ["office"],
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Toshiba Dynabook X40",
    brand: "Toshiba",
    price: 24990000,
    spec: "Core i7, 16GB RAM, SSD 1TB, chuẩn doanh nghiệp",
    tag: "Business",
    discount: "-7%",
    category: ["featured", "office"],
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Sony VAIO SX14",
    brand: "Sony",
    price: 29990000,
    spec: "Core Ultra 7, 16GB RAM, SSD 1TB, 4K display",
    tag: "Premium",
    discount: "-11%",
    category: ["featured"],
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80"
  }
];

const articles = [
  {
    title: "Top laptop AI PC đáng mua 2026",
    date: "12/05/2026",
    desc: "Những cấu hình AI PC cân bằng giữa hiệu năng, pin và trải nghiệm làm việc.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "OLED hay Mini LED cho designer?",
    date: "10/05/2026",
    desc: "So sánh độ sáng, màu sắc, độ bền và chi phí để chọn màn hình laptop phù hợp.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Checklist mua laptop doanh nghiệp",
    date: "08/05/2026",
    desc: "Bảo mật, bảo hành, cổng kết nối và quản trị thiết bị là các yếu tố cần kiểm tra.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "RTX 40 series trên laptop gaming còn đáng mua?",
    date: "06/05/2026",
    desc: "Phân tích hiệu năng thực tế, nhiệt độ và mức giá của laptop gaming mới.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Cách kéo dài tuổi thọ pin laptop",
    date: "04/05/2026",
    desc: "Những thiết lập đơn giản giúp laptop mát hơn và giữ pin bền hơn sau nhiều năm.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Laptop sinh viên kỹ thuật nên chọn gì?",
    date: "02/05/2026",
    desc: "Gợi ý cấu hình cho lập trình, CAD, mô phỏng và làm đồ án tốt nghiệp.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
  }
];

const currency = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

function getCart() {
  return JSON.parse(localStorage.getItem("novaCart") || "[]");
}

function setCart(cart) {
  localStorage.setItem("novaCart", JSON.stringify(cart));
  updateCartCount();
}

function formatPrice(value) {
  return currency.format(value).replace("₫", "đ");
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateCartCount() {
  const total = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = total;
  });
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
  }

  setCart(cart);
  showToast("Đã thêm sản phẩm vào giỏ hàng");
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <a class="product-media" href="product-detail.html" aria-label="${product.name}">
        <img src="${product.image}" alt="${product.name}">
        <span class="badge">${product.discount}</span>
      </a>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="price">${formatPrice(product.price)}</p>
        <p class="spec">${product.spec}</p>
        <div class="card-actions">
          <a class="btn btn-secondary" href="product-detail.html">Xem chi tiết</a>
          <button class="btn btn-primary add-to-cart" type="button" data-id="${product.id}">Thêm</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  document.querySelectorAll("[data-product-section]").forEach((section) => {
    const type = section.dataset.productSection;
    const selected = type === "all"
      ? products
      : products.filter((product) => product.category.includes(type));
    section.innerHTML = selected.map(renderProductCard).join("");
  });
}

function renderNewsCard(article) {
  return `
    <article class="news-card">
      <a href="article-detail.html"><img src="${article.image}" alt="${article.title}"></a>
      <div class="news-body">
        <p class="news-date">${article.date}</p>
        <h3>${article.title}</h3>
        <p>${article.desc}</p>
        <a class="text-link" href="article-detail.html">Xem chi tiết</a>
      </div>
    </article>
  `;
}

function renderNews() {
  document.querySelectorAll("[data-news-section]").forEach((section) => {
    const type = section.dataset.newsSection;
    const count = type === "home" || type === "related" ? 3 : articles.length;
    section.innerHTML = articles.slice(0, count).map(renderNewsCard).join("");
  });
}

function initSlider() {
  const slides = [...document.querySelectorAll(".slide")];
  const dotsWrap = document.querySelector(".slider-dots");
  if (!slides.length || !dotsWrap) return;

  let current = 0;
  dotsWrap.innerHTML = slides.map((_, index) => (
    `<button class="slider-dot ${index === 0 ? "active" : ""}" type="button" aria-label="Banner ${index + 1}"></button>`
  )).join("");
  const dots = [...dotsWrap.querySelectorAll(".slider-dot")];

  const activate = (index) => {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  };

  dots.forEach((dot, index) => dot.addEventListener("click", () => activate(index)));
  setInterval(() => activate((current + 1) % slides.length), 5200);
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector(".nav-panel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initGallery() {
  const main = document.querySelector(".gallery-main");
  const thumbs = document.querySelectorAll(".thumb");
  if (!main || !thumbs.length) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      main.src = thumb.dataset.image;
      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
}

function initCartButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".add-to-cart");
    if (!button) return;
    addToCart(button.dataset.id, 1);
  });

  const detailButton = document.querySelector(".add-detail-cart");
  const qtyInput = document.querySelector("#detail-qty");
  if (detailButton && qtyInput) {
    detailButton.addEventListener("click", () => {
      const quantity = Math.max(1, Number(qtyInput.value) || 1);
      addToCart(detailButton.dataset.id, quantity);
    });
  }
}

function renderCart() {
  const list = document.querySelector("[data-cart-items]");
  if (!list) return;

  const cart = getCart();
  if (!cart.length) {
    list.innerHTML = '<div class="empty-cart">Giỏ hàng đang trống. Hãy chọn một chiếc laptop thật hợp gu nhé.</div>';
  } else {
    list.innerHTML = cart.map((item) => `
      <article class="cart-row" data-id="${item.id}">
        <div class="cart-product">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3>${item.name}</h3>
            <p>${formatPrice(item.price)}</p>
          </div>
        </div>
        <input class="cart-qty" type="number" min="1" value="${item.quantity}" aria-label="Số lượng ${item.name}">
        <strong>${formatPrice(item.price * item.quantity)}</strong>
        <button class="remove-cart" type="button">Xóa</button>
      </article>
    `).join("");
  }

  updateCartSummary();
}

function updateCartSummary() {
  const total = getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelectorAll("[data-cart-subtotal], [data-cart-total]").forEach((el) => {
    el.textContent = formatPrice(total);
  });
}

function initCartPage() {
  const list = document.querySelector("[data-cart-items]");
  if (!list) return;

  list.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-cart");
    if (!removeButton) return;
    const row = removeButton.closest(".cart-row");
    const cart = getCart().filter((item) => item.id !== Number(row.dataset.id));
    setCart(cart);
    renderCart();
    showToast("Đã xóa sản phẩm khỏi giỏ hàng");
  });

  list.addEventListener("change", (event) => {
    if (!event.target.classList.contains("cart-qty")) return;
    const row = event.target.closest(".cart-row");
    const quantity = Math.max(1, Number(event.target.value) || 1);
    const cart = getCart().map((item) => (
      item.id === Number(row.dataset.id) ? { ...item, quantity } : item
    ));
    setCart(cart);
    renderCart();
  });

  const updateButton = document.querySelector(".update-cart");
  if (updateButton) {
    updateButton.addEventListener("click", () => {
      renderCart();
      showToast("Giỏ hàng đã được cập nhật");
    });
  }
}

function initCheckout() {
  const form = document.querySelector(".checkout-form");
  if (!form) return;

  const validators = {
    fullname: (value) => value.trim().length >= 2 || "Vui lòng nhập họ tên.",
    phone: (value) => /^[0-9+\s]{9,15}$/.test(value.trim()) || "Số điện thoại chưa hợp lệ.",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Email chưa hợp lệ.",
    address: (value) => value.trim().length >= 6 || "Vui lòng nhập địa chỉ giao hàng.",
    note: () => true
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      const wrapper = field.closest(".form-field");
      const message = validators[name](field.value);
      wrapper.classList.toggle("error", message !== true);
      wrapper.querySelector("small").textContent = message === true ? "" : message;
      if (message !== true) isValid = false;
    });

    if (!isValid) {
      showToast("Vui lòng kiểm tra lại thông tin đặt hàng");
      return;
    }

    form.reset();
    setCart([]);
    showToast("Đặt hàng thành công");
  });
}

function initSearch() {
  document.querySelectorAll(".search-box").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      showToast(input.value.trim() ? `Đang tìm: ${input.value.trim()}` : "Nhập tên sản phẩm để tìm kiếm");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderNews();
  initSlider();
  initMenu();
  initGallery();
  initCartButtons();
  renderCart();
  initCartPage();
  initCheckout();
  initSearch();
  updateCartCount();
});
