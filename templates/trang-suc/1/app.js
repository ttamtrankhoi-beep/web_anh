const img = (id, q = 80) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=${q}`;

const heroImage = `url("${img("photo-1515562141207-7a88fb7ce338")}")`;
const boutiqueImage = `url("${img("photo-1601121141461-9d6647bca1ed")}")`;
const editorialImage = `url("${img("photo-1509631179647-0177331693ae")}")`;

const products = [
  {
    id: "solaire-diamond-ring",
    name: "Solaire Diamond Ring",
    category: "rings",
    type: "Nhẫn",
    material: "Vàng trắng 18K",
    stone: "Kim cương",
    collection: "Diamond Collection",
    price: "128.000.000 VND",
    tag: "New",
    images: [
      img("photo-1605100804763-247f67b3557e"),
      img("photo-1611652022419-a9419f74343d"),
      img("photo-1589674781759-c21c37956a44"),
      img("photo-1603561591411-07134e71a2a9")
    ],
    description: "Một thiết kế nhẫn kim cương thanh mảnh, cân bằng giữa ánh sáng champagne và đường nét Parisian cổ điển."
  },
  {
    id: "trinity-champagne-bracelet",
    name: "Trinity Champagne Bracelet",
    category: "bracelets",
    type: "Vòng tay",
    material: "Vàng hồng 18K",
    stone: "Không đá",
    collection: "Trinity",
    price: "86.000.000 VND",
    tag: "Limited",
    images: [
      img("photo-1617038260897-41a1f14a8ca0"),
      img("photo-1619119069152-a2b331eb392a"),
      img("photo-1512163143273-bde0e3cc7407"),
      img("photo-1620656798579-1984d9e87df7")
    ],
    description: "Ba sắc vàng đan nhẹ như một chữ ký mềm mại, dành cho những cử động cổ tay thật yên."
  },
  {
    id: "panther-onyx-necklace",
    name: "Panther Onyx Necklace",
    category: "necklaces",
    type: "Dây chuyền",
    material: "Vàng vàng 18K",
    stone: "Onyx",
    collection: "Panther",
    price: "214.000.000 VND",
    tag: "Icon",
    images: [
      img("photo-1599643478518-a784e5dc4c8f"),
      img("photo-1611591437281-460bfbe1220a"),
      img("photo-1617038220319-276d3cfab638"),
      img("photo-1602173574767-37ac01994b2a")
    ],
    description: "Một điểm nhấn mạnh và tinh gọn, lấy cảm hứng từ chuyển động uyển chuyển của biểu tượng feline."
  },
  {
    id: "love-pave-earrings",
    name: "Love Pavé Earrings",
    category: "rings",
    type: "Hoa tai",
    material: "Vàng trắng 18K",
    stone: "Kim cương",
    collection: "Love Collection",
    price: "74.000.000 VND",
    tag: "New",
    images: [
      img("photo-1535632066927-ab7c9ab60908"),
      img("photo-1506630448388-4e683c67ddb0"),
      img("photo-1629224316810-9d8805b95e76"),
      img("photo-1617038260897-41a1f14a8ca0")
    ],
    description: "Hoa tai pavé nhỏ, sáng gọn trên da, tạo ánh nhìn đủ lặng để trở nên rất đắt."
  },
  {
    id: "rive-gauche-watch",
    name: "Rive Gauche Watch",
    category: "watches",
    type: "Đồng hồ",
    material: "Thép & vàng",
    stone: "Sapphire",
    collection: "Heritage Time",
    price: "196.000.000 VND",
    tag: "Limited",
    images: [
      img("photo-1524592094714-0f0654e20314"),
      img("photo-1523275335684-37898b6baf30"),
      img("photo-1547996160-81dfa63595aa"),
      img("photo-1612817159949-195b6eb9e31a")
    ],
    description: "Mặt số tối giản, dây kim loại sắc lạnh và ánh vàng vừa đủ cho một nhịp sống rất Paris."
  },
  {
    id: "etoile-tennis-bracelet",
    name: "Étoile Tennis Bracelet",
    category: "bracelets",
    type: "Vòng tay",
    material: "Bạch kim",
    stone: "Kim cương",
    collection: "Diamond Collection",
    price: "302.000.000 VND",
    tag: "Signature",
    images: [
      img("photo-1602751584552-8ba73aad10e1"),
      img("photo-1617038220319-276d3cfab638"),
      img("photo-1605100804763-247f67b3557e"),
      img("photo-1603974372039-adc49044b6bd")
    ],
    description: "Dải kim cương liền mạch được cân đá thủ công để mỗi chuyển động đều bắt sáng."
  },
  {
    id: "vendome-pearl-necklace",
    name: "Vendôme Pearl Necklace",
    category: "necklaces",
    type: "Dây chuyền",
    material: "Vàng champagne",
    stone: "Ngọc trai",
    collection: "Love Collection",
    price: "69.000.000 VND",
    tag: "New",
    images: [
      img("photo-1515562141207-7a88fb7ce338"),
      img("photo-1603974372039-adc49044b6bd"),
      img("photo-1599643478518-a784e5dc4c8f"),
      img("photo-1602173574767-37ac01994b2a")
    ],
    description: "Ngọc trai kem trên sợi vàng champagne, một vẻ mềm mại không cần nói lớn."
  },
  {
    id: "noir-panther-ring",
    name: "Noir Panther Ring",
    category: "rings",
    type: "Nhẫn",
    material: "Vàng vàng 18K",
    stone: "Onyx & Diamond",
    collection: "Panther",
    price: "244.000.000 VND",
    tag: "Icon",
    images: [
      img("photo-1589128777073-263566ae5e4d"),
      img("photo-1605100804763-247f67b3557e"),
      img("photo-1611652022419-a9419f74343d"),
      img("photo-1589674781759-c21c37956a44")
    ],
    description: "Đen onyx và vàng 18K tạo nên nét tương phản đầy bản lĩnh trên một form nhẫn điêu khắc."
  }
];

const posts = [
  {
    id: "art-of-diamond-light",
    title: "Nghệ thuật chọn ánh kim cương dưới ánh nến",
    date: "14.05.2026",
    category: "Diamond Guide",
    image: img("photo-1600721391776-b5cd0e0048f9"),
    excerpt: "Một viên đá đẹp không chỉ nằm ở thông số, mà ở cách nó giữ ánh sáng trong từng khoảng lặng."
  },
  {
    id: "paris-boutique-ritual",
    title: "Nghi thức boutique Paris cho một món trang sức đầu đời",
    date: "09.05.2026",
    category: "Maison Notes",
    image: img("photo-1496747611176-843222e1e57c"),
    excerpt: "Từ cuộc hẹn riêng đến chiếc hộp đỏ burgundy, luxury bắt đầu ở nhịp chậm."
  },
  {
    id: "gold-tones",
    title: "Vàng trắng, vàng hồng hay champagne gold?",
    date: "02.05.2026",
    category: "Styling",
    image: img("photo-1509631179647-0177331693ae"),
    excerpt: "Cách chọn sắc vàng theo undertone da, trang phục tối giản và khoảnh khắc sử dụng."
  },
  {
    id: "care-for-heirloom",
    title: "Giữ vẻ rực rỡ cho món trang sức truyền đời",
    date: "26.04.2026",
    category: "Care",
    image: img("photo-1515562141207-7a88fb7ce338"),
    excerpt: "Những thói quen nhỏ giúp vàng, kim cương và ngọc trai bền sáng theo năm tháng."
  }
];

const collections = [
  ["Love Collection", "Biểu tượng mềm mại của lời hứa", img("photo-1515562141207-7a88fb7ce338")],
  ["Trinity", "Ba sắc vàng trong một chuyển động", img("photo-1617038260897-41a1f14a8ca0")],
  ["Panther", "Nét mạnh mẽ của haute joaillerie", img("photo-1599643478518-a784e5dc4c8f")],
  ["Diamond Collection", "Ánh sáng được tuyển chọn thủ công", img("photo-1605100804763-247f67b3557e")]
];

const app = document.querySelector("#app");
const header = document.querySelector("#siteHeader");
const mobilePanel = document.querySelector("#mobilePanel");
const searchModal = document.querySelector("#searchModal");
const cartCount = document.querySelector("#cartCount");
let cartTotal = 0;

const moneyToNumber = (price) => Number(price.replace(/\D/g, ""));

function productCard(product) {
  return `
    <article class="product-card reveal" data-collection="${product.collection}" data-category="${product.category}" data-type="${product.type}" data-material="${product.material}" data-stone="${product.stone}" data-price="${moneyToNumber(product.price)}">
      <div class="product-media">
        <span class="tag">${product.tag}</span>
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <img src="${product.images[1]}" alt="${product.name} nhìn gần" loading="lazy">
      </div>
      <div class="product-actions">
        <button type="button" data-add-cart="${product.id}">Add to cart</button>
        <a href="#product/${product.id}" data-link>Quick view</a>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="price">${product.price}</div>
      </div>
    </article>
  `;
}

function homeView() {
  return `
    <section class="hero" style="--hero-img:${heroImage}">
      <div class="hero-content">
        <p class="eyebrow">Paris fine jewelry</p>
        <h1>Quiet brilliance, forever held.</h1>
        <p>Trang sức cao cấp được tuyển chọn như một nghi thức: tối giản, tinh khiết và đủ rực rỡ để trở thành di sản.</p>
        <a class="premium-button" href="#category" data-link>Khám phá bộ sưu tập</a>
      </div>
    </section>

    <section class="section">
      <div class="section-title reveal">
        <div>
          <p class="eyebrow">Collections</p>
          <h2>Maison icons</h2>
        </div>
        <p>Bố cục editorial đặt từng món trang sức như một vật thể nghệ thuật trong không gian boutique.</p>
      </div>
      <div class="collection-grid">
        ${collections.map(([title, text, image]) => `
          <a class="collection-card reveal" href="#category" data-link>
            <img src="${image}" alt="${title}" loading="lazy">
            <div><h3>${title}</h3><p>${text}</p></div>
          </a>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-title reveal">
        <div>
          <p class="eyebrow">Featured jewelry</p>
          <h2>New brilliance</h2>
        </div>
        <a class="text-button" href="#category" data-link>Xem tất cả</a>
      </div>
      <div class="products-grid">${products.slice(0, 4).map(productCard).join("")}</div>
    </section>

    <section class="dark-banner reveal">
      <div>
        <p class="eyebrow">High jewelry salon</p>
        <h2>Light, cut by hand.</h2>
        <p>Từng viên đá được cân chỉnh để giữ độ sâu, độ trong và ánh lửa riêng. Sự xa xỉ nằm ở những chi tiết gần như im lặng.</p>
        <a class="premium-button" href="#product/etoile-tennis-bracelet" data-link>Khám phá signature</a>
      </div>
      <div class="floating-jewel">
        <img src="${img("photo-1605100804763-247f67b3557e", 90)}" alt="Nhẫn kim cương floating" loading="lazy">
      </div>
    </section>

    <section class="section">
      <div class="story">
        <div class="story-image reveal">
          <img src="${img("photo-1601121141461-9d6647bca1ed")}" alt="Nghệ nhân chế tác trang sức" loading="lazy">
        </div>
        <div class="story-copy reveal">
          <p class="eyebrow">Savoir-faire</p>
          <h2>Crafted with the patience of heritage.</h2>
          <p>Mỗi món Maison Élise được hoàn thiện bằng tay trong nhiều lớp kiểm định: từ độ cân đá, bề mặt kim loại đến cảm giác khi đeo. Chúng tôi theo đuổi vẻ đẹp có thể sống cùng người sở hữu qua nhiều năm.</p>
          <div class="atelier-list">
            <div><strong>Handmade setting</strong><span>Ổ đá được chỉnh từng micron để giữ ánh sáng sạch và sâu.</span></div>
            <div><strong>Diamond quality</strong><span>Kim cương tuyển chọn theo độ trong, độ cắt và sắc ánh.</span></div>
            <div><strong>Luxury heritage</strong><span>Thiết kế lấy cảm hứng từ boutique Paris, tiết chế và bền vững.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-title reveal">
        <div>
          <p class="eyebrow">Journal</p>
          <h2>Maison stories</h2>
        </div>
        <a class="text-button" href="#blog" data-link>Đọc journal</a>
      </div>
      <div class="blog-grid">
        ${posts.slice(0, 3).map((post, index) => `
          <a class="blog-card ${index === 0 ? "large" : ""} reveal" href="#article/${post.id}" data-link>
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div>
              <span class="meta">${post.category}</span>
              <h3>${post.title}</h3>
              <span>${post.date}</span>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function categoryView(slug = "") {
  const title = slug ? products.find((p) => p.category === slug)?.type || "Bộ sưu tập" : "Bộ sưu tập";
  return `
    <section class="page-hero" style="--page-img:${boutiqueImage}">
      <div>
        <p class="eyebrow">Fine jewelry catalog</p>
        <h1>${title}</h1>
        <p>Khám phá các thiết kế được chọn lọc cho nhịp sống tối giản, những buổi tối champagne và các khoảnh khắc đáng giữ lại.</p>
      </div>
    </section>
    <section class="section">
      <div class="catalog-layout">
        <aside class="filter-sidebar reveal" aria-label="Bộ lọc sản phẩm">
          ${filterGroup("Loại sản phẩm", ["Nhẫn", "Vòng tay", "Dây chuyền", "Đồng hồ"])}
          ${filterGroup("Chất liệu", ["Vàng trắng 18K", "Vàng hồng 18K", "Vàng vàng 18K", "Bạch kim", "Vàng champagne"])}
          ${filterGroup("Đá quý", ["Kim cương", "Onyx", "Ngọc trai", "Sapphire"])}
          ${filterGroup("Giá", ["Dưới 100M", "100M - 200M", "Trên 200M"])}
          ${filterGroup("Collection", ["Love Collection", "Trinity", "Panther", "Diamond Collection"])}
        </aside>
        <div>
          <div class="section-title reveal">
            <div>
              <p class="eyebrow">Selected pieces</p>
              <h2>${slug ? title : "All jewelry"}</h2>
            </div>
            <p id="catalogCount">${products.length} thiết kế</p>
          </div>
          <div class="products-grid catalog-grid" id="catalogGrid">
            ${products.filter((p) => !slug || p.category === slug).map(productCard).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function filterGroup(title, items) {
  return `
    <div class="filter-group">
      <h3>${title}</h3>
      ${items.map((item) => `
        <label><input type="checkbox" value="${item}" data-filter> ${item}</label>
      `).join("")}
    </div>
  `;
}

function productView(id) {
  const product = products.find((item) => item.id === id) || products[0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 5);
  return `
    <section class="section">
      <div class="product-detail">
        <div class="gallery reveal">
          <div class="thumbs">
            ${product.images.map((image, index) => `
              <button type="button" class="${index === 0 ? "active" : ""}" data-thumb="${image}" aria-label="Ảnh ${index + 1}">
                <img src="${image}" alt="${product.name} thumbnail ${index + 1}">
              </button>
            `).join("")}
          </div>
          <div class="gallery-main" data-zoom>
            <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
          </div>
        </div>
        <div class="detail-info reveal">
          <p class="eyebrow">${product.collection}</p>
          <h1>${product.name}</h1>
          <div class="detail-price">${product.price}</div>
          <p>${product.description}</p>
          <div class="size-row" aria-label="Chọn size">
            ${["48", "50", "52", "54", "56"].map((size, index) => `<button type="button" class="${index === 2 ? "active" : ""}" data-size>${size}</button>`).join("")}
          </div>
          <button class="premium-button" type="button" data-add-cart="${product.id}">Thêm vào giỏ hàng</button>
          <div class="tabs">
            <div class="tab-buttons" role="tablist">
              ${["Mô tả", "Chất liệu", "Shipping", "Bảo hành"].map((tab, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-tab="${index}">${tab}</button>`).join("")}
            </div>
            <div class="tab-panel" id="tabPanel">${tabText(0, product)}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-title reveal">
        <div>
          <p class="eyebrow">Cinematic selection</p>
          <h2>Sản phẩm liên quan</h2>
        </div>
      </div>
      <div class="related-track">
        ${related.map((item) => `
          <a class="related-card reveal" href="#product/${item.id}" data-link>
            <img src="${item.images[0]}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <div class="price">${item.price}</div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function tabText(index, product) {
  const text = [
    `${product.description} Thiết kế có form đeo nhẹ, hoàn thiện bóng gương và được kiểm định lần cuối bởi atelier Maison Élise.`,
    `${product.material}. Đá quý: ${product.stone}. Mỗi bề mặt kim loại được đánh bóng nhiều lớp để đạt độ phản chiếu mềm.`,
    "Miễn phí giao hàng bảo hiểm toàn quốc. Đơn hàng high jewelry được tư vấn lịch giao riêng với concierge.",
    "Bảo hành chế tác 24 tháng, vệ sinh và kiểm tra ổ đá định kỳ tại boutique Maison Élise."
  ];
  return text[index] || text[0];
}

function blogView() {
  return `
    <section class="page-hero" style="--page-img:${editorialImage}">
      <div>
        <p class="eyebrow">Luxury editorial</p>
        <h1>Journal</h1>
        <p>Những ghi chú về kim cương, nghi thức boutique, phong cách tối giản và cách trang sức trở thành một phần đời sống.</p>
      </div>
    </section>
    <section class="section">
      <div class="article-grid">
        ${posts.map((post) => `
          <a class="article-card reveal" href="#article/${post.id}" data-link>
            <figure><img src="${post.image}" alt="${post.title}" loading="lazy"></figure>
            <div>
              <span class="meta">${post.category} · ${post.date}</span>
              <h2>${post.title}</h2>
              <p>${post.excerpt}</p>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function articleView(id) {
  const post = posts.find((item) => item.id === id) || posts[0];
  const related = posts.filter((item) => item.id !== post.id).slice(0, 3);
  return `
    <article class="article">
      <img class="article-cover reveal" src="${post.image}" alt="${post.title}">
      <span class="meta">${post.category} · ${post.date}</span>
      <h1 class="reveal">${post.title}</h1>
      <div class="article-content reveal">
        <p>${post.excerpt} Trong thế giới trang sức cao cấp, vẻ đẹp thuyết phục nhất thường không cần quá nhiều chi tiết. Một đường cong đúng, một mặt đá sạch, một sắc vàng hợp da có thể thay đổi toàn bộ cảm giác của bộ trang phục.</p>
        <p>Maison Élise nhìn trang sức như một nghi thức cá nhân. Mỗi món đồ được chọn để sống cùng người đeo qua nhiều mùa, từ bữa tối trang trọng đến những buổi sáng giản dị với sơ mi trắng và cà phê đen.</p>
        <blockquote>Luxury is not louder. It is more precise.</blockquote>
        <p>Để chọn đúng, hãy bắt đầu bằng ánh sáng. Thử trang sức dưới ánh ngày, ánh đèn ấm và trong chuyển động tự nhiên của tay hoặc cổ. Một món đồ cao cấp sẽ giữ được chiều sâu, không chỉ lóe sáng trong khoảnh khắc đầu tiên.</p>
        <p>Sau cùng, món trang sức đẹp nhất là món làm người đeo thấy mình tinh gọn hơn, tự tin hơn và gần với phong thái riêng của mình hơn.</p>
      </div>
    </article>
    <section class="section">
      <div class="section-title reveal">
        <div>
          <p class="eyebrow">Related posts</p>
          <h2>Đọc tiếp</h2>
        </div>
      </div>
      <div class="article-grid">
        ${related.map((item) => `
          <a class="article-card reveal" href="#article/${item.id}" data-link>
            <figure><img src="${item.image}" alt="${item.title}" loading="lazy"></figure>
            <div>
              <span class="meta">${item.category}</span>
              <h2>${item.title}</h2>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function render() {
  const hash = window.location.hash.replace(/^#\/?/, "") || "home";
  const [route, param] = hash.split("/");

  if (route === "category") app.innerHTML = categoryView(param);
  else if (route === "product") app.innerHTML = productView(param);
  else if (route === "blog") app.innerHTML = blogView();
  else if (route === "article") app.innerHTML = articleView(param);
  else app.innerHTML = homeView();

  document.title = route === "home" ? "Maison Élise | Paris Fine Jewelry" : `Maison Élise | ${route}`;
  header.classList.toggle("solid", route !== "home");
  window.scrollTo({ top: 0, behavior: "instant" });
  closePanels();
  bindDynamicEvents();
  revealOnScroll();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      cartTotal += 1;
      cartCount.textContent = cartTotal;
      button.textContent = "Đã thêm";
      setTimeout(() => (button.textContent = button.matches(".premium-button") ? "Thêm vào giỏ hàng" : "Add to cart"), 1200);
    });
  });

  document.querySelectorAll("[data-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-thumb]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector("#mainProductImage").src = button.dataset.thumb;
    });
  });

  document.querySelectorAll("[data-size]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-size]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const zoom = document.querySelector("[data-zoom]");
  if (zoom) zoom.addEventListener("click", () => zoom.classList.toggle("zoomed"));

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const activeProductId = (window.location.hash.split("/")[1] || products[0].id);
      const product = products.find((item) => item.id === activeProductId) || products[0];
      document.querySelectorAll("[data-tab]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector("#tabPanel").textContent = tabText(Number(button.dataset.tab), product);
    });
  });

  document.querySelectorAll("[data-filter]").forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });
}

function applyFilters() {
  const selected = [...document.querySelectorAll("[data-filter]:checked")].map((item) => item.value);
  const cards = [...document.querySelectorAll("#catalogGrid .product-card")];

  cards.forEach((card) => {
    const text = `${card.dataset.collection} ${card.dataset.category} ${card.dataset.type} ${card.dataset.material} ${card.dataset.stone}`;
    const price = Number(card.dataset.price);
    const matches = selected.every((value) => {
      if (value === "Dưới 100M") return price < 100000000;
      if (value === "100M - 200M") return price >= 100000000 && price <= 200000000;
      if (value === "Trên 200M") return price > 200000000;
      return text.includes(value);
    });
    card.style.display = matches ? "" : "none";
  });

  const visible = cards.filter((card) => card.style.display !== "none").length;
  const count = document.querySelector("#catalogCount");
  if (count) count.textContent = `${visible} thiết kế`;
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function closePanels() {
  mobilePanel.classList.remove("open");
  searchModal.classList.remove("open");
  document.body.classList.remove("menu-open", "search-open");
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (link) closePanels();
});

document.querySelector("[data-menu-toggle]").addEventListener("click", () => {
  mobilePanel.classList.add("open");
  document.body.classList.add("menu-open");
});

document.querySelector("[data-menu-close]").addEventListener("click", closePanels);
document.querySelector("[data-search-open]").addEventListener("click", () => {
  searchModal.classList.add("open");
  document.body.classList.add("search-open");
  document.querySelector("#searchInput").focus();
});
document.querySelector("[data-search-close]").addEventListener("click", closePanels);

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Đã nhận";
  setTimeout(() => (button.textContent = "Đăng ký"), 1400);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
  const hero = document.querySelector(".hero");
  if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.18}px`;
});

window.addEventListener("hashchange", render);
window.addEventListener("load", () => {
  setTimeout(() => document.querySelector(".loader").classList.add("hidden"), 650);
  render();
});
