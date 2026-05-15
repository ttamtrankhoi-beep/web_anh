const CART_KEY = "kissaNoirCart";

const money = (value) => new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
}).format(value);

const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (error) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent("cart:updated", { detail: cart }));
};

const itemKey = (item) => [item.id, item.size || "", item.sugar || "", item.ice || ""].join("|");

const addToCart = (item) => {
  const cart = getCart();
  const key = itemKey(item);
  const existing = cart.find((cartItem) => itemKey(cartItem) === key);

  if (existing) {
    existing.qty += item.qty || 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: Number(item.price),
      qty: item.qty || 1,
      size: item.size || "Regular",
      sugar: item.sugar || "70%",
      ice: item.ice || "Normal"
    });
  }

  saveCart(cart);
};

const updateCartItem = (key, qty) => {
  const cart = getCart().map((item) => itemKey(item) === key ? { ...item, qty } : item).filter((item) => item.qty > 0);
  saveCart(cart);
};

const removeCartItem = (key) => {
  saveCart(getCart().filter((item) => itemKey(item) !== key));
};

const cartTotal = (cart) => cart.reduce((sum, item) => sum + item.price * item.qty, 0);

const cartLineTemplate = (item, compact = false) => {
  const key = itemKey(item);
  return `
    <article class="${compact ? "cart-line" : "cart-row"}" data-key="${key}">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.size} · Sugar ${item.sugar} · Ice ${item.ice}</p>
        <div class="qty-control" aria-label="Quantity">
          <button type="button" data-qty-change="-1" aria-label="Decrease">−</button>
          <strong>${item.qty}</strong>
          <button type="button" data-qty-change="1" aria-label="Increase">+</button>
        </div>
      </div>
      <div>
        <strong class="price">${money(item.price * item.qty)}</strong>
        <button class="remove-btn" type="button" data-remove>Remove</button>
      </div>
    </article>
  `;
};

const updateCartBadge = () => {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = count;
    badge.hidden = count === 0;
  });
};

const renderMiniCart = () => {
  const list = document.querySelector("[data-mini-cart-items]");
  const total = document.querySelector("[data-mini-cart-total]");
  if (!list || !total) return;

  const cart = getCart();
  list.innerHTML = cart.length
    ? cart.map((item) => cartLineTemplate(item, true)).join("")
    : `<div class="empty-state">Your cart is waiting for its first slow-crafted cup.</div>`;
  total.textContent = money(cartTotal(cart));
};

const renderCartPage = () => {
  const table = document.querySelector("[data-cart-page]");
  const subtotal = document.querySelector("[data-subtotal]");
  const shipping = document.querySelector("[data-shipping]");
  const grandTotal = document.querySelector("[data-grand-total]");
  if (!table) return;

  const cart = getCart();
  const subtotalValue = cartTotal(cart);
  const shippingValue = subtotalValue > 0 ? 25000 : 0;

  table.innerHTML = cart.length
    ? cart.map((item) => cartLineTemplate(item)).join("")
    : `<div class="empty-state warm-card">Your cart is empty. Explore the coffee menu to begin.</div>`;

  if (subtotal) subtotal.textContent = money(subtotalValue);
  if (shipping) shipping.textContent = money(shippingValue);
  if (grandTotal) grandTotal.textContent = money(subtotalValue + shippingValue);
};

const renderCheckout = () => {
  const summary = document.querySelector("[data-checkout-summary]");
  if (!summary) return;

  const cart = getCart();
  const subtotalValue = cartTotal(cart);
  const shippingValue = subtotalValue > 0 ? 25000 : 0;

  summary.innerHTML = cart.length
    ? cart.map((item) => `
        <div class="summary-line">
          <span>${item.name} × ${item.qty}</span>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
      `).join("") + `
        <div class="summary-line"><span>Shipping</span><strong>${money(shippingValue)}</strong></div>
        <div class="summary-line total"><span>Total</span><strong>${money(subtotalValue + shippingValue)}</strong></div>
      `
    : `<div class="empty-state">No items yet.</div>`;
};

const refreshCartViews = () => {
  updateCartBadge();
  renderMiniCart();
  renderCartPage();
  renderCheckout();
};

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-cart]");
  const quickButton = event.target.closest("[data-quick-view]");
  const cartLine = event.target.closest("[data-key]");

  if (addButton) {
    addToCart({
      id: addButton.dataset.id,
      name: addButton.dataset.name,
      image: addButton.dataset.image,
      price: addButton.dataset.price,
      qty: Number(addButton.dataset.qty || document.querySelector("[data-product-qty]")?.value || 1),
      size: addButton.dataset.size || document.querySelector("input[name='size']:checked")?.value,
      sugar: addButton.dataset.sugar || document.querySelector("input[name='sugar']:checked")?.value,
      ice: addButton.dataset.ice || document.querySelector("input[name='ice']:checked")?.value
    });
    document.body.classList.add("cart-open");
  }

  if (quickButton) {
    window.openQuickView?.({
      id: quickButton.dataset.id,
      name: quickButton.dataset.name,
      image: quickButton.dataset.image,
      price: quickButton.dataset.price,
      description: quickButton.dataset.description
    });
  }

  if (cartLine && event.target.matches("[data-qty-change]")) {
    const current = getCart().find((item) => itemKey(item) === cartLine.dataset.key);
    if (current) updateCartItem(cartLine.dataset.key, current.qty + Number(event.target.dataset.qtyChange));
  }

  if (cartLine && event.target.matches("[data-remove]")) {
    removeCartItem(cartLine.dataset.key);
  }
});

document.addEventListener("cart:updated", refreshCartViews);
document.addEventListener("DOMContentLoaded", refreshCartViews);
