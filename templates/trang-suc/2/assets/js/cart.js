const CART_KEY = "maison_lumiere_cart";
const WISHLIST_KEY = "maison_lumiere_wishlist";

function readStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  return readStore(CART_KEY);
}

function saveCart(cart) {
  writeStore(CART_KEY, cart);
  updateCartUI();
}

function addToCart(product, options = {}) {
  const cart = getCart();
  const item = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    image: product.image,
    price: product.price,
    qty: Number(options.qty || 1),
    size: options.size || "52",
    material: options.material || product.material
  };
  const existing = cart.find((line) => line.id === item.id && line.size === item.size && line.material === item.material);
  if (existing) existing.qty += item.qty;
  else cart.push(item);
  saveCart(cart);
  openMiniCart();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateQuantity(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, Number(qty) || 1);
  saveCart(cart);
}

function cartTotals() {
  const subtotal = getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function updateCartUI() {
  const cart = getCart();
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  });
  renderMiniCart();
  renderCartPage();
  renderCheckoutSummary();
}

function miniCartMarkup(item, index) {
  return `
    <div class="mini-cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <strong>${item.name}</strong>
        <div class="muted">${item.material} / Size ${item.size}</div>
        <div>${window.money.format(item.price)} x ${item.qty}</div>
      </div>
      <button class="remove-item" type="button" data-remove-cart="${index}" aria-label="Remove ${item.name}">&times;</button>
    </div>`;
}

function renderMiniCart() {
  const wrap = document.querySelector("[data-mini-cart-items]");
  if (!wrap) return;
  const cart = getCart();
  wrap.innerHTML = cart.length ? cart.map(miniCartMarkup).join("") : `<p class="muted">Your jewelry box is waiting.</p>`;
  const total = document.querySelector("[data-mini-cart-total]");
  if (total) total.textContent = window.money.format(cartTotals().total);
}

function renderCartPage() {
  const wrap = document.querySelector("[data-cart-page]");
  if (!wrap) return;
  const cart = getCart();
  wrap.innerHTML = cart.length ? cart.map((item, index) => `
    <div class="cart-row" data-row="${index}">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <div class="muted">${item.material} / Size ${item.size}</div>
        <div class="price">${window.money.format(item.price)}</div>
      </div>
      <div class="qty-control">
        <button type="button" data-qty-dec="${index}">-</button>
        <input value="${item.qty}" inputmode="numeric" data-qty-input="${index}" aria-label="Quantity for ${item.name}">
        <button type="button" data-qty-inc="${index}">+</button>
      </div>
      <div class="line-total">${window.money.format(item.price * item.qty)}</div>
      <button class="remove-item" type="button" data-remove-cart="${index}" aria-label="Remove ${item.name}">&times;</button>
    </div>`).join("") : `<p class="muted">Your cart is empty. Add a piece that deserves a velvet box.</p>`;
  const totals = cartTotals();
  document.querySelectorAll("[data-subtotal]").forEach((node) => node.textContent = window.money.format(totals.subtotal));
  document.querySelectorAll("[data-total]").forEach((node) => node.textContent = window.money.format(totals.total));
}

function renderCheckoutSummary() {
  const wrap = document.querySelector("[data-checkout-items]");
  if (!wrap) return;
  const cart = getCart();
  wrap.innerHTML = cart.length ? cart.map((item) => `
    <div class="order-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <strong>${item.name}</strong>
        <div class="muted">Qty ${item.qty}</div>
      </div>
      <span>${window.money.format(item.price * item.qty)}</span>
    </div>`).join("") : `<p class="muted">No pieces selected yet.</p>`;
  const totals = cartTotals();
  document.querySelectorAll("[data-checkout-total]").forEach((node) => node.textContent = window.money.format(totals.total));
}

function openMiniCart() {
  document.querySelector("[data-mini-cart]")?.classList.add("is-open");
}

function closeMiniCart() {
  document.querySelector("[data-mini-cart]")?.classList.remove("is-open");
}

function toggleWishlist(id) {
  const list = readStore(WISHLIST_KEY);
  const next = list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
  writeStore(WISHLIST_KEY, next);
}

document.addEventListener("click", (event) => {
  const addBtn = event.target.closest("[data-add-cart]");
  if (addBtn) addToCart(window.findProduct(addBtn.dataset.addCart));

  const removeBtn = event.target.closest("[data-remove-cart]");
  if (removeBtn) {
    const row = removeBtn.closest(".cart-row");
    row?.classList.add("is-removing");
    setTimeout(() => removeFromCart(Number(removeBtn.dataset.removeCart)), 180);
  }

  const inc = event.target.closest("[data-qty-inc]");
  if (inc) {
    const index = Number(inc.dataset.qtyInc);
    updateQuantity(index, getCart()[index].qty + 1);
  }

  const dec = event.target.closest("[data-qty-dec]");
  if (dec) {
    const index = Number(dec.dataset.qtyDec);
    updateQuantity(index, getCart()[index].qty - 1);
  }

  if (event.target.closest("[data-open-cart]")) openMiniCart();
  if (event.target.closest("[data-close-cart]") || event.target.matches("[data-mini-cart]")) closeMiniCart();
});

document.addEventListener("input", (event) => {
  const input = event.target.closest("[data-qty-input]");
  if (input) updateQuantity(Number(input.dataset.qtyInput), input.value);
});

window.addToCart = addToCart;
window.getCart = getCart;
window.updateCartUI = updateCartUI;
