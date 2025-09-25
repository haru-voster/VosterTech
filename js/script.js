// seller phone (international format, no leading 0), your number: 0708466793 => 254708466793
const SELLER_PHONE = "254708466793";

// Product data — you can add or replace images with absolute URLs for WhatsApp preview
const products = [
  {
    id: 1,
    category: "Desktop",
    name: "Dell OptiPlex 7040 Desktop & 19\" Monitor",
    price: "Ksh.24,999",
    desc: "Intel i5-6500, 8GB RAM, 500GB HDD",
    img: "img/desktop1.jpg"
  },
  {
    id: 2,
    category: "Laptop",
    name: "HP EliteBook 840 G5 - 8GB / 256GB",
    price: "Ksh.26,999",
    desc: "Intel Core i5 8th Gen, 14\" FHD",
    img: "img/laptop1.jpg"
  },
  {
    id: 3,
    category: "Printer",
    name: "Canon Inkjet All-in-One",
    price: "Ksh.10,999",
    desc: "Inkjet, WIFI support",
    img: "img/printer1.jpg"
  },
  {
    id: 4,
    category: "Accessory",
    name: "SanDisk 128GB Flash",
    price: "Ksh.1,200",
    desc: "Durable USB flash drive",
    img: "img/accessory1.jpg"
  }
];

// accessory images for carousel (unique)
const accessories = [
  "img/accessory1.jpg",
  "img/accessory2.jpg",
  "img/accessory3.jpg",
  "img/accessory4.jpg"
];

function createProductCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const card = document.createElement("div");
  card.className = "product-card p-0";

  const img = document.createElement("img");
  img.className = "product-img";
  img.src = p.img;
  img.alt = p.name;

  const body = document.createElement("div");
  body.className = "p-3 card-body";

  const title = document.createElement("h6");
  title.className = "mb-1";
  title.textContent = p.name;

  const desc = document.createElement("p");
  desc.className = "mb-1 small text-muted";
  desc.textContent = p.desc;

  const price = document.createElement("div");
  price.className = "product-price mb-2";
  price.textContent = p.price;

  const btnRow = document.createElement("div");
  btnRow.className = "d-flex gap-2";

  const orderBtn = document.createElement("button");
  orderBtn.className = "btn btn-whatsapp flex-grow-1 btn-sm";
  orderBtn.innerHTML = '<i class="fa fa-whatsapp me-2"></i>Order via WhatsApp';
  orderBtn.onclick = () => sendWhatsAppOrder(p);

  btnRow.appendChild(orderBtn);

  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(price);
  body.appendChild(btnRow);

  card.appendChild(img);
  card.appendChild(body);
  col.appendChild(card);
  return col;
}

function sendWhatsAppOrder(product) {
  // create message - include absolute image URL if you host images publicly
  const productName = product.name;
  const price = product.price;
  const desc = product.desc;
  // If you have a hosted URL use it; else use relative path (preview may not show)
  const imageUrl = window.location.origin + "/" + product.img.replace(/^\.\//, "");

  const message =
    `Hello, I want to order *${productName}*\n\n` +
    `Description: ${desc}\n` +
    `Price: ${price}\n` +
    `Image: ${imageUrl}\n\n` +
    `Please confirm availability and delivery options.`;

  const url = `https://wa.me/${SELLER_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// render products
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(p => grid.appendChild(createProductCard(p)));
}

// build accessory carousel slides
function renderAccessories() {
  const inner = document.getElementById("accessoryInner");
  inner.innerHTML = "";
  accessories.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "carousel-item" + (i === 0 ? " active" : "");
    const img = document.createElement("img");
    img.src = src;
    img.alt = "accessory-" + (i+1);
    item.appendChild(img);
    inner.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderProducts();
  renderAccessories();

  // Bootstrap carousel auto-rotation is set using data-bs-interval="3000" in HTML,
  // but ensure it is activated for manual setup if needed:
  const myCarousel = document.querySelector('#accessoryCarousel');
  if (myCarousel) {
    // bootstrap will auto-run because data attributes present
  }
});
