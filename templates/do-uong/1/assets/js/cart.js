const CART_KEY = "lumiereCafeCart";

const formatMoney = (value) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent("cart:updated"));
};

const cartId = (item) => [item.id, item.size || "", item.sugar || "", item.ice || ""].join("|");

function addToCart(item) {
  const cart = getCart();
  const id = cartId(item);
  const found = cart.find((cartItem) => cartId(cartItem) === id);

  if (found) {
    found.qty += item.qty || 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      price: Number(item.price),
      qty: item.qty || 1,
      size: item.size || "Regular",
      sugar: item.sugar || "Normal",
      ice: item.ice || "Normal",
    });
  }

  saveCart(cart);
  openMiniCart();
}

function updateCartItem(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, qty);
  saveCart(cart);
}

function removeCartItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function cartTotals() {
  const subtotal = getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 30000 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

function renderMiniCart() {
  const lists = document.querySelectorAll("[data-mini-cart-items]");
  const total = document.querySelector("[data-mini-cart-total]");
  const countTargets = document.querySelectorAll("[data-cart-count]");
  if (!lists.length) return;

  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  countTargets.forEach((target) => {
    target.textContent = count;
  });

  if (!cart.length) {
    lists.forEach((list) => {
      list.innerHTML = '<div class="empty-state"><h3>Gio hang dang trong</h3><p>Hay them mot ly ca phe that thom vao don hang.</p></div>';
    });
  } else {
    const html = cart
      .map(
        (item, index) => `
        <div class="cart-line">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <p>${item.size} / ${item.sugar} sugar / ${item.ice} ice</p>
            <span class="price">${formatMoney(item.price)}</span>
            <div class="qty-control" aria-label="Cap nhat so luong">
              <button type="button" data-cart-dec="${index}">-</button>
              <strong>${item.qty}</strong>
              <button type="button" data-cart-inc="${index}">+</button>
            </div>
          </div>
          <button class="remove-btn" type="button" data-cart-remove="${index}">Remove</button>
        </div>`
      )
      .join("");
    lists.forEach((list) => {
      list.innerHTML = html;
    });
  }

  if (total) total.textContent = formatMoney(cartTotals().total);
}

function renderCartPage() {
  const list = document.querySelector("[data-cart-page]");
  if (!list) return;
  const cart = getCart();

  if (!cart.length) {
    list.innerHTML = '<div class="empty-state"><h3>Gio hang dang trong</h3><p>Quay lai menu de chon coffee, beans va bakery yeu thich.</p><a class="btn" href="menu.html">Explore Menu</a></div>';
  } else {
    list.innerHTML = cart
      .map(
        (item, index) => `
        <div class="cart-line">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <p>${item.size} / ${item.sugar} sugar / ${item.ice} ice</p>
            <span class="price">${formatMoney(item.price)}</span>
          </div>
          <div>
            <div class="qty-control">
              <button type="button" data-cart-dec="${index}">-</button>
              <strong>${item.qty}</strong>
              <button type="button" data-cart-inc="${index}">+</button>
            </div>
            <button class="remove-btn" type="button" data-cart-remove="${index}">Remove</button>
          </div>
        </div>`
      )
      .join("");
  }
  renderSummary();
}

function renderSummary() {
  const subtotal = document.querySelector("[data-summary-subtotal]");
  const shipping = document.querySelector("[data-summary-shipping]");
  const total = document.querySelector("[data-summary-total]");
  const { subtotal: sub, shipping: ship, total: all } = cartTotals();
  if (subtotal) subtotal.textContent = formatMoney(sub);
  if (shipping) shipping.textContent = formatMoney(ship);
  if (total) total.textContent = formatMoney(all);
}

function openMiniCart() {
  document.querySelector("[data-mini-cart]")?.classList.add("open");
  document.querySelector("[data-overlay]")?.classList.add("open");
}

function closeDrawers() {
  document.querySelector("[data-mini-cart]")?.classList.remove("open");
  document.querySelector("[data-quick-view]")?.classList.remove("open");
  document.querySelector("[data-overlay]")?.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-cart-inc]");
  const dec = event.target.closest("[data-cart-dec]");
  const remove = event.target.closest("[data-cart-remove]");
  const openCart = event.target.closest("[data-open-cart]");
  const close = event.target.closest("[data-close-drawers]");

  if (inc) updateCartItem(Number(inc.dataset.cartInc), getCart()[Number(inc.dataset.cartInc)].qty + 1);
  if (dec) updateCartItem(Number(dec.dataset.cartDec), getCart()[Number(dec.dataset.cartDec)].qty - 1);
  if (remove) removeCartItem(Number(remove.dataset.cartRemove));
  if (openCart) openMiniCart();
  if (close) closeDrawers();
});

document.addEventListener("cart:updated", () => {
  renderMiniCart();
  renderCartPage();
  renderSummary();
});

document.addEventListener("DOMContentLoaded", () => {
  renderMiniCart();
  renderCartPage();
  renderSummary();
});
