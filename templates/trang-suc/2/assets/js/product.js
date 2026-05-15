const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
});

const products = [
  {
    id: "aurora-ring",
    name: "Aurora Diamond Ring",
    slug: "aurora-diamond-ring",
    price: 12800000,
    collection: "Diamond Collection",
    material: "18K Gold",
    gemstone: "Diamond",
    gender: "Women",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85",
    description: "A luminous solitaire ring finished in warm gold with a refined high-jewelry silhouette."
  },
  {
    id: "celeste-bracelet",
    name: "Celeste Tennis Bracelet",
    slug: "celeste-tennis-bracelet",
    price: 18600000,
    collection: "Love Collection",
    material: "White Gold",
    gemstone: "Crystal",
    gender: "Women",
    badge: "New",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=85",
    description: "A fluid bracelet made for evening light, precise stacking, and everyday polish."
  },
  {
    id: "noir-panther",
    name: "Noir Panther Necklace",
    slug: "noir-panther-necklace",
    price: 24900000,
    collection: "Panther Collection",
    material: "Black Ceramic",
    gemstone: "Onyx",
    gender: "Women",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
    description: "Dark onyx, polished metal, and sculptural attitude in a Paris boutique profile."
  },
  {
    id: "trinity-hoops",
    name: "Trinity Gold Hoops",
    slug: "trinity-gold-hoops",
    price: 9200000,
    collection: "Trinity",
    material: "18K Gold",
    gemstone: "None",
    gender: "Women",
    badge: "",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=85",
    description: "Clean gold hoops with subtle volume and a soft champagne reflection."
  },
  {
    id: "rose-charm",
    name: "Rose Charm Bracelet",
    slug: "rose-charm-bracelet",
    price: 7600000,
    collection: "Love Collection",
    material: "Rose Gold",
    gemstone: "Crystal",
    gender: "Women",
    badge: "Best",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=900&q=85",
    description: "A romantic charm bracelet balanced with modern spacing and blush metal."
  },
  {
    id: "vendome-watch",
    name: "Vendome Noir Watch",
    slug: "vendome-noir-watch",
    price: 31500000,
    collection: "Diamond Collection",
    material: "Steel",
    gemstone: "Diamond",
    gender: "Unisex",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
    description: "A black-dial dress watch with jewelry-grade finishing and discreet brilliance."
  },
  {
    id: "pearl-drop",
    name: "Pearl Drop Earrings",
    slug: "pearl-drop-earrings",
    price: 11200000,
    collection: "Trinity",
    material: "White Gold",
    gemstone: "Pearl",
    gender: "Women",
    badge: "New",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=900&q=85",
    description: "Pearl drops with a soft architectural curve for quiet formal dressing."
  },
  {
    id: "etoile-stack",
    name: "Etoile Stack Ring",
    slug: "etoile-stack-ring",
    price: 6800000,
    collection: "Diamond Collection",
    material: "18K Gold",
    gemstone: "Diamond",
    gender: "Women",
    badge: "",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=85",
    image2: "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?auto=format&fit=crop&w=900&q=85",
    description: "A delicate stack ring with star-like pavé highlights and fine proportions."
  }
];

const blogs = [
  {
    title: "The Quiet Power of Champagne Gold",
    tag: "Style Notes",
    date: "15 May 2026",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=85",
    excerpt: "How warm gold became the modern language of understated evening jewelry."
  },
  {
    title: "Paris Boutique Rituals",
    tag: "Maison",
    date: "09 May 2026",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
    excerpt: "A closer look at the gestures, lighting, and edit that make jewelry feel personal."
  },
  {
    title: "How to Build a Timeless Stack",
    tag: "Guide",
    date: "02 May 2026",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Spacing, metal tone, and proportion rules for rings, charms, and bracelets."
  }
];

function productCard(product) {
  return `
    <article class="product-card reveal" data-product="${product.id}" data-collection="${product.collection}" data-material="${product.material}" data-gemstone="${product.gemstone}" data-gender="${product.gender}" data-price="${product.price}">
      <div class="product-media">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <a href="product-detail.html?slug=${product.slug}" aria-label="View ${product.name}">
          <img class="main-img" src="${product.image}" alt="${product.name}" loading="lazy">
          <img class="alt-img" src="${product.image2}" alt="${product.name} alternate view" loading="lazy">
        </a>
        <div class="product-actions">
          <button type="button" data-quick-view="${product.id}">Quick View</button>
          <button type="button" data-add-cart="${product.id}">Add</button>
        </div>
      </div>
      <h3 class="product-name"><a href="product-detail.html?slug=${product.slug}">${product.name}</a></h3>
      <div class="price">${money.format(product.price)}</div>
    </article>`;
}

function renderProducts(selector, items = products) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.innerHTML = items.map(productCard).join("");
  window.initReveal?.();
}

function findProduct(idOrSlug) {
  return products.find((item) => item.id === idOrSlug || item.slug === idOrSlug) || products[0];
}

window.products = products;
window.blogs = blogs;
window.money = money;
window.productCard = productCard;
window.renderProducts = renderProducts;
window.findProduct = findProduct;
