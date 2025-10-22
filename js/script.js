// seller phone (international format, no leading 0)
const SELLER_PHONE = "254708466793";

// product data (same as yours)
const products = [
  {
    id: 1,
    category: "Laptop",
    type: "business-laptop", // matches dropdown "Office"
    name: "New Brand HP Envy X360",
    price: "Ksh.170,000",
    desc: "Intel Iris Xe Graphics, Backlight Keyboard, 14 inch FHD, 13th Gen Core i7, 16GB, 1TB SSD",
    img: "img/hp envy.jpg"
  },
  {
    id: 2,
    category: "Laptop",
    type: "business-laptop", // matches dropdown "Office"
    name: "Lenovo IdeaPad",
    price: "Ksh.39,000",
    desc: "Lenovo IdeaPad Flex 5 : Integrated Intel Iris Xe graphics 512SSD / 16GB",
    img: "img/lenovo2.webp"
  },
  {
    id: 3,
    category: "Laptop",
    type: "business-laptop", // matches dropdown "Business"
    name: "HP EliteBook",
    price: "Ksh.30,000",
    desc: "Intel Core i7 10th Gen, 14\" FHD 840 G5 - 8GB / 256GB",
    img: "img/new2.jpg"
  },
  {
    id: 4,
    category: "Laptop",
    type: "business-laptop", // matches dropdown "Business"
    name: "Lenovo Yoga",
    price: "Ksh.22,999",
    desc: "Lenovo Thinkpad X1 Yoga 256/8GB RAM Gen5 14 inch FHD, Touchscreen Laptop",
    img: "img/lenovo.webp"
  },
  {
    id: 5,
    category: "Desktop",
    type: "office-desktop", // matches dropdown "Office"
    name: "Dell OptiPlex 7040 Desktop & 19\" Monitor",
    price: "Ksh.24,999",
    desc: "Intel i5-6500, 8GB RAM, 500GB HDD",
    img: "img/dellopti.webp"
  },
  {
    id: 6,
    category: "Printer",
    type: "inkjet-printer", // matches dropdown "Inkjet"
    name: "HP Inkjet All-in-One",
    price: "Ksh.15,999",
    desc: "Inkjet, Ethernet WIFI support",
    img: "img/hp printer.webp"
  },
  {
    id: 7,
    category: "Printer",
    type: "Canon Printer", // matches dropdown "Inkjet"
    name: "Canon All-in-One (Pro)",
    price: "Ksh.23,999",
    desc: "Canon printer, Printing, photocopying/scanning",
    img: "img/canone2.webp"
  },
  {
    id: 8,
    category: "Printer",
    type: "Canon Printer", // matches dropdown "Inkjet"
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon.png"
  },
  {
    id: 9,
    category: "Accessory",
    type: "storage", // matches dropdown "Storage"
    name: "External Drive",
    price: "Ksh.3,200",
    desc: "Durable SSD Transcend",
    img: "img/storage2.jpeg"
  },
  {
    id: 10,
    category: "Accessory",
    type: "storage", // matches dropdown "Storage"
    name: "Plotter",
    price: "Ksh.43,000",
    desc: "Branding Combo Vinyl Cutting Plotter Contour 2 Feet",
    img: "img/plotter.png"
  },
  {
    id: 11,
    category: "Printer",
    type: "Canon Printer", // matches dropdown "Inkjet"
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon25.png"
  },
  {
    id: 12,
    category: "Printer",
    type: "Epison Printer", // matches dropdown "Inkjet"
    name: "Epison Printer L3250",
    price: "Ksh.10,999",
    desc: "Epison Printer L3250 (WIFI/Bluetooth/USB enabled)",
    img: "img/epison printer.jpeg"
  },
  {
    id: 13,
    category: "Accessory",
    type: "display", // matches dropdown "Display"
    name: "VGA Display",
    price: "Ksh.500",
    desc: "Computer-monitor VGA display 1M",
    img: "img/vga.jpg"
  },
  {
    id: 14,
    category: "Accessory",
    type: "display", // matches dropdown "Display"
    name: "HDMI to VGA Adapter",
    price: "Ksh.1,500",
    desc: "1080px for PC/laptop/Desktops",
    img: "img/HDMI-VGA.jpg"
  },
   {
    id: 14,
    category: "Accessory",
    type: "display", // matches dropdown "Display"
    name: "HDMI to VGA Adapter",
    price: "Ksh.1,500",
    desc: "1080px for PC/laptop/Desktops",
    img: "img/vga.jpg"
  }
];

// accessory images for carousel (unique)
const accessories = [
  "img/lenovo2.webp",
  "img/Hp-8200-desktop.jpg",
  "img/plotter.jpeg",
  "img/case.webp"
];


// 🛒 cart array
let cart = [];

// ---- Create Product Card ----
function createProductCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "product-card p-0";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "position-relative";

  const img = document.createElement("img");
  img.className = "product-img";
  img.src = p.img;
  img.alt = p.name;

  // 🛒 Add-to-Cart Icon
  const cartBtn = document.createElement("button");
  cartBtn.className =
    "btn btn-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle shadow-sm";
  cartBtn.innerHTML = "🛒";
  cartBtn.title = "Add to Cart";
  cartBtn.onclick = (e) => {
    e.stopPropagation();
    addToCart(p);
  };

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(cartBtn);

  const body = document.createElement("div");
  body.className = "p-3 card-body";

  const title = document.createElement("h6");
  title.className = "mb-1";
  title.textContent = p.name;

  const desc = document.createElement("p");
  desc.className = "mb-1 small text-muted";
  desc.textContent = p.desc;

  const price = document.createElement("div");
  price.className = "product-price mb-2 text-danger fw-bold";
  price.textContent = p.price;

  const btnRow = document.createElement("div");
  btnRow.className = "d-flex gap-2";

  const orderBtn = document.createElement("button");
  orderBtn.className = "btn btn-success flex-grow-1 btn-sm";
  orderBtn.innerHTML = 'Order via WhatsApp';
  orderBtn.onclick = () => sendWhatsAppOrder(p);

  btnRow.appendChild(orderBtn);

  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(price);
  body.appendChild(btnRow);

  card.appendChild(imgWrapper);
  card.appendChild(body);
  col.appendChild(card);
  return col;
}

// ---- Add to Cart Function ----
function addToCart(product) {
  cart.push(product);
  alert(`${product.name} added to cart! 🛒`);
  console.log("Cart items:", cart);
}

// ---- Send WhatsApp Order ----
function sendWhatsAppOrder(product) {
  const message =
    `Hello, I want to order *${product.name}*\n\n` +
    `Description: ${product.desc}\n` +
    `Price: ${product.price}\n\n` +
    `Please confirm availability and delivery options.`;

  const url = `https://wa.me/${SELLER_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ---- Render Products ----
function renderProducts(filterType = null) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products
    .filter((p) => !filterType || p.type === filterType)
    .forEach((p) => grid.appendChild(createProductCard(p)));

  if (grid.innerHTML === "") {
    grid.innerHTML = `<div class="alert alert-warning">No products found.</div>`;
  }
}

// ---- Render Accessories Carousel ----
function renderAccessories() {
  const inner = document.getElementById("accessoryInner");
  inner.innerHTML = "";
  accessories.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (i === 0 ? " active" : "");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "accessory-" + (i + 1);
    img.className = "d-block w-100";
    item.appendChild(img);
    inner.appendChild(item);
  });
}

// ---- Page Load ----
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  renderAccessories();

  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const type = this.dataset.filter;
      renderProducts(type);
    });
  });
});