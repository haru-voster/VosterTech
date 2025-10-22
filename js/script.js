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
<<<<<<< HEAD
    type: "inkjet-printer", // matches dropdown "Inkjet"
=======
    type: "inkjet-printer",   //  
>>>>>>> 92ab51bf2c5d8fa0d3e4e86f9f2ae1a843959b8d
    name: "HP Inkjet All-in-One",
    price: "Ksh.15,999",
    desc: "Inkjet, Ethernet WIFI support",
    img: "img/hp printer.webp"
  },
  {
    id: 7,
    category: "Printer",
<<<<<<< HEAD
    type: "Canon Printer", // matches dropdown "Inkjet"
    name: "Canon All-in-One (Pro)",
=======
    type: "Canon Printer",   //  
    name: "canon All-in-One",
>>>>>>> 92ab51bf2c5d8fa0d3e4e86f9f2ae1a843959b8d
    price: "Ksh.23,999",
    desc: "Canon printer, Printing, photocopying/scanning",
    img: "img/canone2.webp"
  },
  {
    id: 8,
    category: "Printer",
<<<<<<< HEAD
    type: "Canon Printer", // matches dropdown "Inkjet"
=======
    type: "Canon Printer",   //  
>>>>>>> 92ab51bf2c5d8fa0d3e4e86f9f2ae1a843959b8d
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
<<<<<<< HEAD
  {
    id: 11,
    category: "Printer",
    type: "Canon Printer", // matches dropdown "Inkjet"
=======
       {
    id: 10,
    category: "Printer",
    type: "Canon Printer",   //  
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon25.png",
  },
     {
    id: 11,
    category: "Printer",
    type: "Canon Printer",   //  
>>>>>>> 92ab51bf2c5d8fa0d3e4e86f9f2ae1a843959b8d
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon25.png"
  },
  {
    id: 12,
    category: "Printer",
    type: "Epison Printer",   //  
    name: "Epison Printer ",
    price: "Ksh.10,999",
    desc: "Epison Printer L3250 (WIFI/Bluetooth/USB enabled)",
    img: "img/epison printer.jpeg"
  },
   {
    id: 13.0,
    category: "Network",
    type: "kit",   //  
    name: "Starlink mini-Kit ",
    price: "Ksh.28,000",
    desc: "Dual-band Wi-Fi (2.4GHz & 5GHz) Mini Kit with lower power consumption",
    img: "img/starlink1.webp",
  },
     {
    id: 13.1,
    category: "Network",
    type: "kit",   //  
    name: "Starlink Kit ",
    price: "Ksh.47,000",
    desc: "Starlink Standard gen 3 kit v4 Wider 110-degree field of view ",
    img: "img/starlink.jpg",
  },
   {
    id: 13,
    category: "Network",
    type: "modems",   // mifi modems  
    name: "5G mi-fi ",
    price: "Ksh.4,500",
    desc: "OLAX MT10 MIFI Wifi Router 5g Lte",
    img: "img/modem.webp",
  },
  
   {
    id: 13.0,
    category: "Network",
    type: "router",   //  
    name: "Mikrotik Router",
    price: "Ksh.37,000",
    desc: "mikrotik RB4011iGS+RM Gigabit Router-(RB4011iGS-RM)",
    img: "img/mikrotik1.webp",
  },
   {
    id: 13.1,
    category: "Network",
    type: "router",   //  
    name: " MiFi Portable Wi-Fi Router",
    price: "Ksh.6,000",
    desc: "TP-LINK M7200 4G LTE MiFi Portable Wi-Fi Router 8 Hours Long Lasting Battery Black - TL-M7200",
    img: "img/mikrotik.webp",
  },
  {
    id: 13,
    category: "Network",
    type: "switch",   //  
    name: "D-Link switch",
    price: "Ksh.7,000",
    desc: "D-LINK DGS-1024D- 24-Port Gigabit Unmanaged Desktop Switch",
    img: "img/dlink.png",
  },
  {
    id: 13.0,
    category: "Network",
    type: "tools",   //  accessories and tools under networks
    name: " Ethernet cable ",
    price: "Ksh.300",
    desc: "1M ETHERNET CABLE PATCH CABLE (High quality)",
    img: "img/ethernet.jpg",
  },
  {
    id: 13.1,
    category: "Network",
    type: "tools",   //  accessories and tools under networks
    name: "Ethernet Cables ",
    price: "Ksh.7,000",
    desc: "Cat 6 ethernet cables - 305 M long box",
    img: "img/cat6.webp",
  },
    {
    id: 14,
    category: "Accessory",
    type: "display",   //  
    name: "VGA display",
    price: "Ksh.500",
    desc: "Computer-monitor VGA display 1M",
    img: "img/vga.jpg"
  },
  // TONERS AND CARTRIDGES
    {
    id: 15,
    category: "Toner",
    type: "epson-toner",     
    name: "Epson Toner/ink ",
    price: "ksh. 500",
    desc: "Epson 103 EcoTank Yellow, Cyan, Magenta Ink Bottles",
    img: "img/epink.jpg",
  },
       {
    id: 15,
    category: "Toner",
    type: "kyocera",   
    name: "kyocera catridge/toner",
    price: "Ksh.17,000",
    desc: " Konica Minolta TNP-41 Black Toner Cartridge- color black Page Yield with 5% Coverage",
    img: "img/minolta.webp",
  },
       {
    id: 15,
    category: "Toner",
    type: "kyocera",   
    name: "Konica minolta laser toner cartridge",
    price: "Ksh.5,000",
    desc: "Konica Minolta TN-217/414 Toner",
    img: "img/ky2.jpg",
  },
    
      {
    id: 15,
    category: "Toner",
    type: "lasertoner",  
    name: "HDMI to VGA adapter ",
    price: "Ksh.",
    desc: "1080px for PC/laptop/Desktops",
    img: "img/HDMI-VGA.jpg"
  },
      {
    id: 15,
    category: "Toner",
    type: "canon-toner",   
    name: "Canon Toner ",
    price: "Ksh. 6,000-6,500",
    desc: "Canon C-EXV29 / NPG-46 / GPR-31 Toners (Black, Yellow, cyan and magenta)",
    img: "img/canontoner.jpg",
  },
  // ACCESSORIES
  {
    id: 16.0,
    category: "Accessories",
    type: "storage",   
    name: "HDD DRIVE",
    price: "ksh. 3,000",
    desc: "Seegate SATA 500gb Dektop drive",
    img: "img/storage1.jpeg",
  },
   {
    id: 16.1,
    category: "Accessories",
    type: "storage",   
    name: "FlashDisk",
    price: "ksh. 2,000",
    desc: "SanDisk 32GB Cruzer Blade USB Flash Drive",
    img: "img/scandidk.jpg",
  },
  {
    id: 17.0,
    category: "Accessories",
    type: "monitor",   
    price: "ksh. 5,500",
    desc: "HP Elitebook 840 G5/G7 14inch laptop Screen",
    img: "img/screen.webp",
  },
  {
    id: 18.0,
    category: "Accessories",
    type: "keyboards",   
    name: "",
    price: "",
    desc: "",
    img: "img/",
  },
    {
    id: 19.0,
    category: "Accessories",
    type: "battery",   
    name: "Lenovo Battery",
    price: "Ksh.4,500",
    desc: "T470 / T480 Series Original Battery( EXTERNAL)",
    img: "img/battery.webp",
  },
    {
    id: 20.0,
    category: "Accessories",
    type: "display",   
    price: "",
    desc: "",
    img: "img/",
  },
    {
    id: 21.0,
    category: "Accessories",
    type: "mouse",  
    name: "",
    price: "",
    desc: "",
    img: "img/",
  },
    {
    id: 22.0,
    category: "Accessories",
    type: "motherboard", 
    name: "",
    price: "",
    desc: "",
    img: "img/",
  },
   {
    id: 22.1,
    category: "Accessories",
    type: "charger", 
    name: "",
    price: "",
    desc: "",
    img: "img/",
  },
  {
    id: 22.1,
    category: "Accessories",
    type: "charger", 
    name: "",
    price: "",
    desc: "",
    img: "img/",
  },
];

// accessory images for carousel (unique)
const accessories = [
  "img/lenovo2.webp",
  "img/pentium.jpg",
  "img/modem.webp",
  "img/lap4.jpeg",
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