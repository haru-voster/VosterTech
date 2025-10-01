// seller phone (international format, no leading 0), your number: 0708466793 => 254708466793
const SELLER_PHONE = "254708466793";

// Product data — you can add or replace images with absolute URLs for WhatsApp preview
const products = [
   {
    id: 1,
    category: "Laptop",
    type: "business-laptop",   // matches dropdown "Office"
    name: "New Brand HP Envy X360 ",
    price: "Ksh.170,000",
    desc: " Intel Iris Xe Graphics, Backlight Keyboard, 14 inch FHD, 13th Gen Core i7, 16GB, 1TB SSD",
    img: "img/hp envy.jpg"
  },
  {
    id: 1,
    category: "Laptop",
    type: "business-laptop",   // matches dropdown "Office"
    name: "Lenovo IdeaPad ",
    price: "Ksh.39,000",
    desc: "Lenovo IdeaPad Flex 5 : Integrated Intel Iris Xe graphics 512SSD \ 16gb",
    img: "img/lenovo2.webp"
  },

  {
    id: 3,
    category: "Laptop",
    type: "business-laptop",  // matches dropdown "Business"
    name: "HP EliteBook ",
    price: "Ksh.30,000",
    desc: "Intel Core i7 10th Gen, 14\" FHD 840 G5 - 8GB / 256GB",
    img: "img/new2.jpg"
  },
    {
    id: 4,
    category: "Laptop",
    type: "business-laptop",  // matches dropdown "Business"
    name: "Lenovo Yoga",
    price: "Ksh.22,999",
    desc: "Lenovo Thinkpad X1 Yoga 256/8gb ram Gen5 14 inch FHD, Touchscreen Laptop",
    img: "img/lenovo.webp"
  },
    {
    id: 2,
    category: "Desktop",
    type: "office-desktop",   // matches dropdown "Office"
    name: "Dell OptiPlex 7040 Desktop & 19\" Monitor",
    price: "Ksh.24,999",
    desc: "Intel i5-6500, 8GB RAM, 500GB HDD",
    img: "img/dellopti.webp"
  },
  
  {
    id: 5,
    category: "Printer",
    type: "inkjet-printer",   //  
    name: "HP Inkjet All-in-One",
    price: "Ksh.15,999",
    desc: "Inkjet, Ethernet WIFI support",
    img: "img/hp printer.webp"
  },
    {
    id: 6,
    category: "Printer",
    type: "Canon Printer",   //  
    name: "canon All-in-One",
    price: "Ksh.23,999",
    desc: "Canon printer, Printing, photocopying/scanning",
    img: "img/canone2.webp"
  },
   {
    id: 7,
    category: "Printer",
    type: "Canon Printer",   //  
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon.png",
  },
  {
    id: 8,
    category: "Accessory",
    type: "storage",          // matches dropdown "Storage"
    name: "External Drive",
    price: "Ksh.3,200",
    desc: "Durable SSD Transcend ",
    img: "img/storage2.jpeg"
  },
    {
    id: 9,
    category: "Accessory",
    type: "storage",          // matches dropdown "Storage"
    name: "Plotter",
    price: "Ksh.43,000",
    desc: "Branding Combo Vinyl Cutting Plotter Contour 2 Feet",
    img: "img/plotter.png"
  },
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
    name: "Canon All-in-One",
    price: "Ksh.10,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon.png",
  },
     {
    id: 12,
    category: "Printer",
    type: "Epison Printer",   //  
    name: "Epison Printer ",
    price: "Ksh.10,999",
    desc: "Epison Printer l3250, (WIFI/bluetooth/USB enabled)",
    img: "img/epison printer.jpeg",
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
    img: "img/vga.jpg",
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
    img: "img/HDMI-VGA.jpg",
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
  "img/plotter.jpeg",
  "img/lap4.jpeg",
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
  orderBtn.innerHTML = 'Order via WhatsApp';
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

//filter script for headers

function renderProducts(filterType = null) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products
    .filter(p => !filterType || p.type === filterType)
    .forEach(p => grid.appendChild(createProductCard(p)));

  if (grid.innerHTML === "") {
    grid.innerHTML = `<div class="alert alert-warning">No products found.</div>`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts(); // show all initially

  document.querySelectorAll(".filter-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const type = this.dataset.filter;
      renderProducts(type);
    });
  });
});
//product depsly

function showPopup(imgSrc) {
  document.getElementById("popup-img").src = imgSrc;
  document.getElementById("image-popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("image-popup").style.display = "none";
}

