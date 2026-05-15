function renderMenuCards() {
  const grid = document.querySelector("[data-menu-grid]");
  if (!grid) return;
  grid.innerHTML = products
    .filter((item) => item.category !== "Beans")
    .map(
      (item) => `
      <article class="menu-card reveal visible" data-category="${item.category}">
        <div class="card-media"><img src="${item.image}" alt="${item.name}"></div>
        <div class="card-body">
          <p class="eyebrow">${item.category}</p>
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="menu-actions">
            <span class="price">${formatMoney(item.price)}</span>
            <button class="btn outline" type="button" data-quick-product="${item.id}">Quick view</button>
            <button class="btn" type="button" data-add-product="${item.id}">Add</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function initMenuFilter() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.filter;
      cards.forEach((card) => {
        card.classList.toggle("hide", category !== "All" && card.dataset.category !== category);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenuCards();
  initMenuFilter();
});
