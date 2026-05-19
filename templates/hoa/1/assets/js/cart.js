const CART_KEY = "florist_cart";
const SHIPPING_FEE = 35000;

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:updated"));
}

function selectedSize(source) {
  const scoped = source?.closest(".product-info, .quick-view__body") || document;
  return scoped.querySelector("[data-size-options] .is-active")?.dataset.size || "M";
}

function selectedNote(source) {
  const scoped = source?.closest(".product-info, .quick-view__body") || document;
  return scoped.querySelector("[data-note]")?.value || "";
}

function selectedQty(source) {
  const scoped = source?.closest(".product-info, .quick-view__body") || document;
  return Math.max(1, Number(scoped.querySelector("[data-qty-input]")?.value || 1));
}

function addToCart(id, source) {
  const product = getProduct(id);
  const size = selectedSize(source);
  const note = selectedNote(source);
  const qty = selectedQty(source);
  const cart = readCart();
  const existing = cart.find(item => item.id === id && item.size === size && item.note === note);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, name: product.name, image: product.image, price: product.price, qty, size, note });
  }

  writeCart(cart);
  document.body.classList.add("cart-open");
}

function removeFromCart(index) {
  const cart = readCart();
  cart.splice(index, 1);
  writeCart(cart);
}

function changeQty(index, delta) {
  const cart = readCart();
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  writeCart(cart);
}

function cartTotals() {
  const subtotal = readCart().reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal ? SHIPPING_FEE : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function renderMiniCart() {
  const items = document.querySelector("[data-mini-cart-items]");
  const subtotalNode = document.querySelector("[data-mini-cart-subtotal]");
  const countNodes = document.querySelectorAll("[data-cart-count]");
  if (!items) return;

  const cart = readCart();
  countNodes.forEach(node => node.textContent = cart.reduce((sum, item) => sum + item.qty, 0));
  items.innerHTML = cart.length ? cart.map((item, index) => `
    <article class="cart-line">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <small>Size ${item.size} · ${formatMoney(item.price)}</small>
        <div class="qty-control" aria-label="Số lượng">
          <button data-cart-dec="${index}">−</button>
          <span>${item.qty}</span>
          <button data-cart-inc="${index}">+</button>
        </div>
      </div>
      <button class="remove-btn" data-cart-remove="${index}" aria-label="Xóa">×</button>
    </article>
  `).join("") : `<div class="empty-state">Giỏ hoa của bạn đang trống.</div>`;
  if (subtotalNode) subtotalNode.textContent = formatMoney(cartTotals().subtotal);
}

function renderCartPage() {
  const list = document.querySelector("[data-cart-page]");
  if (!list) return;

  const cart = readCart();
  const totals = cartTotals();
  list.innerHTML = cart.length ? cart.map((item, index) => `
    <article class="cart-page-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Size ${item.size}${item.note ? ` · Thiệp: ${item.note}` : ""}</p>
        <div class="price">${formatMoney(item.price)}</div>
        <div class="qty-control">
          <button data-cart-dec="${index}">−</button>
          <span>${item.qty}</span>
          <button data-cart-inc="${index}">+</button>
        </div>
      </div>
      <button class="remove-btn" data-cart-remove="${index}">Xóa</button>
    </article>
  `).join("") : `<div class="empty-state">Bạn chưa chọn mẫu hoa nào. Hãy để một bó hoa xinh bắt đầu câu chuyện.</div>`;

  document.querySelectorAll("[data-subtotal]").forEach(node => node.textContent = formatMoney(totals.subtotal));
  document.querySelectorAll("[data-shipping]").forEach(node => node.textContent = formatMoney(totals.shipping));
  document.querySelectorAll("[data-total]").forEach(node => node.textContent = formatMoney(totals.total));
}

function renderCheckoutSummary() {
  const target = document.querySelector("[data-checkout-products]");
  if (!target) return;
  const cart = readCart();
  target.innerHTML = cart.length ? cart.map(item => `
    <div class="summary-row">
      <span>${item.name} × ${item.qty}</span>
      <strong>${formatMoney(item.price * item.qty)}</strong>
    </div>
  `).join("") : `<div class="empty-state">Giỏ hàng trống.</div>`;
  const totals = cartTotals();
  document.querySelectorAll("[data-subtotal]").forEach(node => node.textContent = formatMoney(totals.subtotal));
  document.querySelectorAll("[data-shipping]").forEach(node => node.textContent = formatMoney(totals.shipping));
  document.querySelectorAll("[data-total]").forEach(node => node.textContent = formatMoney(totals.total));
}

document.addEventListener("click", event => {
  const add = event.target.closest(".add-to-cart");
  const openCart = event.target.closest("[data-open-cart]");
  const closeCart = event.target.closest("[data-close-cart]");
  const overlay = event.target.classList.contains("mini-cart__overlay");
  const remove = event.target.closest("[data-cart-remove]");
  const inc = event.target.closest("[data-cart-inc]");
  const dec = event.target.closest("[data-cart-dec]");

  if (add) addToCart(add.dataset.productId, add);
  if (openCart) document.body.classList.add("cart-open");
  if (closeCart || overlay) document.body.classList.remove("cart-open");
  if (remove) removeFromCart(Number(remove.dataset.cartRemove));
  if (inc) changeQty(Number(inc.dataset.cartInc), 1);
  if (dec) changeQty(Number(dec.dataset.cartDec), -1);
});

window.addEventListener("cart:updated", () => {
  renderMiniCart();
  renderCartPage();
  renderCheckoutSummary();
});

document.addEventListener("DOMContentLoaded", () => {
  renderMiniCart();
  renderCartPage();
  renderCheckoutSummary();
});
