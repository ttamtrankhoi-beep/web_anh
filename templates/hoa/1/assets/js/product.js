document.addEventListener("DOMContentLoaded", () => {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;

  const id = new URLSearchParams(location.search).get("id") || "rose-muse";
  const product = getProduct(id);
  const galleryImages = [product.image, product.hover, PRODUCTS[2].image, PRODUCTS[3].image];

  detail.innerHTML = `
    <div class="gallery fade-up">
      <div class="gallery-main"><img data-gallery-main src="${product.image}" alt="${product.name}"></div>
      <div class="thumbs">
        ${galleryImages.map((src, index) => `
          <button class="thumb ${index === 0 ? "is-active" : ""}" data-thumb="${src}">
            <img src="${src}" alt="${product.name} ${index + 1}">
          </button>
        `).join("")}
      </div>
    </div>
    <aside class="product-info fade-up">
      <p class="eyebrow">${product.category}</p>
      <h1>${product.name}</h1>
      <div class="detail-price">${formatMoney(product.price)}</div>
      <p>${product.desc}</p>
      <ul class="meta-list">
        <li><strong>Loại hoa:</strong> ${product.type}</li>
        <li><strong>Phong cách:</strong> Modern romantic boutique</li>
        <li><strong>Giao nhanh:</strong> 2-4 giờ trong nội thành</li>
      </ul>
      <div class="option-row">
        <label>Chọn size</label>
        <div class="size-options" data-size-options>
          <button class="is-active" data-size="M">M</button>
          <button data-size="L">L</button>
          <button data-size="Premium">Premium</button>
        </div>
      </div>
      <div class="option-row">
        <label>Lời nhắn thiệp</label>
        <textarea class="note-field" data-note placeholder="Viết lời nhắn dịu dàng cho người nhận"></textarea>
      </div>
      <div class="option-row">
        <label>Số lượng</label>
        <div class="qty-control">
          <button data-detail-dec>−</button>
          <input data-qty-input value="1" inputmode="numeric" aria-label="Số lượng">
          <button data-detail-inc>+</button>
        </div>
      </div>
      <div class="buy-actions">
        <button class="btn btn--rose add-to-cart" data-product-id="${product.id}">Thêm vào giỏ</button>
        <a class="btn" href="checkout.html">Mua ngay</a>
        <button class="icon-btn" aria-label="Yêu thích">♡</button>
      </div>
    </aside>
  `;

  document.title = `${product.name} | Maison Flora`;
  document.querySelector("[data-detail-desc]")?.setAttribute("content", product.desc);

  detail.addEventListener("click", event => {
    const thumb = event.target.closest("[data-thumb]");
    const inc = event.target.closest("[data-detail-inc]");
    const dec = event.target.closest("[data-detail-dec]");
    const input = detail.querySelector("[data-qty-input]");

    if (thumb) {
      detail.querySelector("[data-gallery-main]").src = thumb.dataset.thumb;
      detail.querySelectorAll(".thumb").forEach(button => button.classList.remove("is-active"));
      thumb.classList.add("is-active");
    }
    if (inc) input.value = Number(input.value || 1) + 1;
    if (dec) input.value = Math.max(1, Number(input.value || 1) - 1);
  });

  document.querySelector("[data-tabs]")?.addEventListener("click", event => {
    const button = event.target.closest("[data-tab-button]");
    if (!button) return;
    const index = button.dataset.tabButton;
    document.querySelectorAll("[data-tab-button]").forEach(item => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-tab-panel]").forEach(panel => panel.classList.toggle("is-active", panel.dataset.tabPanel === index));
  });
});
