//PHONENUMBER
const SELLER_PHONE = "254708466793";

// product data (same as yours)
const products = [
  {
    id: 1.1,
    category: "Laptop",
    type: "hp-laptop", // HP"
    name: "New Brand HP Envy X360",
    price: "Ksh.170,000",
    desc: "Intel Iris Xe Graphics, Backlight Keyboard, 14 inch FHD, 13th Gen Core i7, 16GB, 1TB SSD",
    img: "img/hp envy.jpg"
  },
    {
    id: 1.2,
    category: "Laptop",
    type: "hp-laptop", // HP"
    name: "HP EliteBook",
    price: "Ksh.30,000",
    desc: "Intel Core i7 10th Gen, 14 FHD 840 G5 - 8GB / 256GB",
    img: "img/new2.jpg"
  },
    {
    id: 1.3,
    category: "Laptop",
    type: "hp-laptop", // hp 
    name: "HP EliteBook",
    price: "Ksh.45,000",
    desc: "Intel Core i7 10th Gen, 14 FHD 840 G7 - 16GB / 512GB",
    img: "img/new.webp"
  },
    {
    id: 1.4,
    category: "Laptop",
    type: "hp-laptop", // hp 
    name: "HP EliteBook",
    price: "Ksh 25,000",
    desc: "Intel Core i5 10th Gen, 14 FHD 840 G7 - 8GB / 256GB",
    img: "img/hp.jpg"
  },
  {
    id: 1.5,
    category: "Laptop",
    type: "hp-laptop", // matches dropdown "hp"
    name: "HP EliteBook x360 g2 ",
    price: "Ksh.38,000",
    desc: "HP EliteBook x360 1030 G2 7th Gen Intel Core i7, 8GB RAM, 256GB SSD, 13.3-inch Touchscreen Convertible Laptop",
    img: "img/1030g2.jpg"
  },
  {
    id: 2.1,
    category: "Laptop",
    type: "lenovo-laptop", // matches dropdown "lenovo"
    name: "Lenovo IdeaPad",
    price: "Ksh.39,000",
    desc: "Lenovo IdeaPad Flex 5 : Integrated Intel Iris Xe graphics 512SSD / 16GB",
    img: "img/lenovo2.webp"
  },

  {
    id: 2.2,
    category: "Laptop",
    type: "lenovo-laptop", 
    name: "Lenovo Yoga",
    price: "Ksh.22,999",
    desc: "Lenovo Thinkpad X1 Yoga 256/8GB RAM Gen5 14 inch FHD, Touchscreen Laptop",
    img: "img/lenovo.webp"
  },
    {
    id: 2.3,
    category: "Laptop",
    type: "lenovo-laptop", // matches dropdown "Business"
    name: "Lenovo Thinkpad",
    price: "Ksh.14,999",
    desc: "lenovo thinkpad 4gb/128ssd coi5 6th gen intel processor speed 2.0ghz",
    img: "img/lenovo2.jpg"
  },
    {
    id: 3.1,
    category: "Laptop",
    type: "dell-laptop", // matches dropdown "dell"
    name: "Dell latitude",
    price: "Ksh.20,999",
    desc: "dell latitude 7490 |intel core i5| 8gb ram |256gb ssd |8th generation|14 inch display",
    img: "img/dell.jpg"
  },
   {
    id: 3.2,
    category: "Laptop",
    type: "dell-laptop", // matches dropdown "dell"
    name: "Dell Precision 5570 ",
    price: "Ksh.24,999",
    desc: "lenovo thinkpad 4gb/128ssd coi5 6th gen intel processor speed 2.0ghz",
    img: "img/dell.jpeg"
  },
  
  {
    id: 3.4,
    category: "Laptop",
    type: "dell-laptop", // matches dropdown "dell"
    name: "Dell Pentium chromebook",
    price: "Ksh.12,999",
    desc: "lenovo thinkpad 4gb/128ssd coi5 6th gen intel processor speed 2.0ghz",
    img: "img/pentium.jpg"
  },

  
   {
    id: 4.0,
    category: "Laptop",
    type: "macbook-laptop", // matches dropdown "macbook"
    name: "Macbook pro A1708 ",
    price: "Ksh.29,000",
    desc: "Apple Macbook Pro A1708 Intel Core i5-6360U 8GB RAM 256GB SSD ROM 13.3 LED IPS Display Intel Iris Graphics ",
    img: "img/Macbook2017.webp"
  },
     {
    id: 4.1,
    category: "Laptop",
    type: "macbook-laptop", // matches dropdown "macbook"
    name: "Macbook Retina",
    price: "Ksh.88,000",
    desc: "Macbook Pro 13” (2020) Intel Core I7 |13th gen| 32gb Ram | 512gb Ssd | Retina Display",
    img: "img/mac1.jpg"
  },
       {
    id: 5.1,
    category: "Laptop",
    type: "ultra-laptop", // matches "chromebook"
    name: "HP Chromebook",
    price: "Ksh.10,000",
    desc: "Hp Chromebook 11 G3 X360 Intel Celeron 4GB RAM 32GB SSD 11.6″ Touchscreen",
    img: "img/hpchrome.webp"
  },
      {
    id: 5.2,
    category: "Laptop",
    type: "ultra-laptop", // matches "chromebook"
    name: "Dell Chromebook",
    price: "Ksh.10,500",
    desc: "Dell Chromebook 11 3190 x360 Intel Celeron 4GB RAM 32GB SSD 11.6″ Touch Screen",
    img: "img/dellchrome.avif"
  },
   {
    id: 5.2,
    category: "Laptop",
    type: "dell-laptop", // matches "chromebook"
    name: "Dell 7480 Laptop",
    price: "Ksh.22,500",
    desc: "Dell Latitude 13.3 inch win11 pro, corei5 intel processor||speed 2.4ghz, 6 months warant″ Touch Screen",
    img: "img/refurbdell.jpg"
  },
  {
    id: 6.0,
    category: "Desktop",
    type: "hp-desktop", // matches dropdown "Office"
    name: "HP Desktop & 19inch Monitor",
    price: "Ksh.14,500",
    desc: "HP Desktop CPU Intel Core i5 3.40GHz 4GB Ram 500GB HDD 19″ TFT Keyboard & Mouse Complete set",
    img: "img/hp-desk.webp"
  },
   {
    id: 6.0,
    category: "Desktop",
    type: "hp-desktop", // matches dropdown "Office"
    name: "HP Desktop & 17inch Monitor",
    price: "Ksh.9,800",
    desc: "Hp desktop Intel core i3 2.8GHz 4GB 500GB HDD +  Monitor fullset",
    img: "img/HP-set.jpg"
  },
    {
    id: 6.1,
    category: "Desktop",
    type: "dell-desktop", // matches dropdown "Office"
    name: "Dell OptiPlex 7040 Desktop & 19 Monitor",
    price: "Ksh.24,999",
    desc: "Intel i5-6500, 8GB RAM, 500GB HDD",
    img: "img/dellopti.webp"
  },
   {
    id: 6.1,
    category: "Desktop",
    type: "dell-desktop", // matches dropdown "Office"
    name: "Dell 7040 Desktop",
    price: "Ksh.20,000",
    desc: "DELL optlex 7040 tower core i7 - 8gb ram,500gb hdd , 3.4GHZ speed",
    img: "img/dell-dsk.webp"
  },
    {
    id: 6.2,
    category: "Desktop",
    type: "allinone-desktop", // matches "allin on"
    name: "All in one Dell OptiPlex 7040 Desktop & 19 Monitor",
    price: "Ksh.24,999",
    desc: "Intel i5-6500, 8GB RAM, 500GB HDD",
    img: "img/HP-All-in-one-600.webp"
  },
   {
    id: 6.3,
    category: "Desktop",
    type: "allinone-desktop", // matches "allin one"
    name: "All in one hp 205",
    price: "Ksh.50,000",
    desc: "HP 205 G4 22 All in One 21.5 FHD AMD Ryzen 3050U 4GB RAM 1TB HDD Windows 10 Pro PC 1 Year Warranty",
    img: "img/hp-all.webp"
  },
   // gaming pcs /desktops
   {
    id: 6.3,
    category:"Desktops",
    type: "mini-pc", 
    name: "Lenovo mini-pc  ",
    price: "Kshs 18,500",
    desc: " Lenovo COMPLETE THINKCENTRE M710q MINI PC 8GB RAM 128 GB SSD Intel Ci5",
    img: "img/lenovo-mini.jpg"
  },
    {
    id: 6.4,
    category:"Desktops",
    type: "mini-pc", 
    name: "HP mini-pc  ",
    price: "Kshs 18,000",
    desc: " HP EliteDesk 705 G4 Mini PC - Ryzen 5 2400G, 16GB RAM, 256GB SSD",
    img: "img/hpdsk.webp"
  },
  {
    id: 6.5,
    category:"Desktops",
    type: "lenovo-desktop", 
    name: "Lenovo Desktop  ",
    price: "Kshs 15,000",
    desc: " Lenovo ThinkCentre desktop-core i5 8500 intel core i5 8th gen ,8gb ram,500gb",
    img: "img/lenovodsk.webp"
  },
    {
    id: 6.6,
    category:"Desktops",
    type: "gaming-desktop", 
    name: "Lenovo Gaming PC",
    price: "Kshs 46,000",
    desc: " Lenovo thinkstation p330 - Intel Xeon Processor W-2123 ,16gb ram,256gb 5gb grahic Nvidia quadro p2000",
    img: "img/gaming2.webp"
  },
    {
    id: 6.7,
    category:"Desktops",
    type: "gaming-desktop", 
    name: "Hp Gaming pc  ",
    price: "Kshs 60,000",
    desc: " HP Pavilion Gaming Pc Tg01 Brand New - Core I5 10400f 10th Generation 6 Cores, 16/512GB, 3.0GHZ",
    img: "img/gaming1.webp"
  },
  {
    id: 6.3,
    category: "Printer",
    type: "inkjet-printer", // matches dropdown "Inkjet"
    name: "HP Inkjet All-in-One",
    price: "Ksh.24,500",
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
  // projectors
    {
    id: 8,
    category: "Projector",
    type: "T5", // matches dropdown "Inkjet"
    name: "T5 wifi projector",
    price: "Ksh.25,999",
    desc: "T5 wifi projector with HD camera",
    img: "img/t5.webp"
  },
     {
    id: 8.2,
    category: "Projector",
    type: "Epson-projector", // matches dropdown "epson"
    name: "Epson EB-E01 XGA 3300 Lumens Projector",
    price: "Ksh.45,000",
    desc: "Epson EB-E01 XGA 3300 Lumens Projector, Portable and quick to set up",
    img: "img/espon.webp"
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
    id: 9.1,
    category: "Accessory",
    type: "storage", // matches dropdown "Storage"
    name: "External SSD Casing",
    price: "Ksh.3,000",
    desc: "Durable external NvMe SSD casing for storag| portable",
    img: "img/nvme.jpeg"
  },
  {
    id: 10,
    category: "Accessory",
    type: "storage", // matches dropdon "Storage.."
    name: "External SSD 2TB",
    price: "Ksh.23,000",
    desc: "Dahua T7 Portable SSD 2TB USB 3.2 Gen2",
    img: "img/external.jpeg"
  },
  {
    id: 11,
    category: "Printer",
    type: "Canon Printer", // matches dropdown "Inkjet"
    name: "Canon All-in-One",
    price: "Ksh.21,999",
    desc: "Canon printer, WIFI support",
    img: "img/canon25.png"
  },
  {
    id: 12,
    category: "Printer",
    type: "Epison Printer", // matches dropdown "Inkjet"
    name: "Epison Printer",
    price: "Ksh.20,999",
    desc: "Epison Printer  (WIFI/Bluetooth/USB enabled)",
    img: "img/epson-l3250.jpg"
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
    price: "Ksh 1,500",
    desc: "1080px for PC/laptop/Desktops",
    img: "img/HDMI-VGA.jpg"
  }
  ,
    {
    id: 14,
    category: "Accessory",
    type: "display", // matches dropdown "Disply"
    name: "HDMI 1.5M LONG",
    price: "Ksh 500",
    desc: "4K HDMI Cable 1.5 Metres, High Speed HDMI 2.0 Braided HDMI Cord, 4K 60Hz",
    img: "img/HDMI.png"
  }
  ,
  {
    id: 15,
    category: "Accessory",
    type: "keyboard", // matches dropdown "Display"
    name: " USB Keyboard",
    price: "Ksh 1,500",
    desc: "Logitech K120 Wired Keyboard for Windows, Plug and Play",
    img: "img/wired.jpg"
  }
  ,
   {
    id: 15.0,
    category: "Accessory",
    type: "keyboard", // Keyboard"
    name: " Wireless Keyboard",
    price: "Ksh 4,000",
    desc: "Hp-655-wireless-keyboard-and-mouse-combo",
    img: "img/keymouse.png"
  },
  {
    id: 15.1,
    category: "Accessory",
    type: "motherboard", 
    name: " Dell motherboard ",
    price: "Ksh,10,500",
    desc: "Dell latitude E5520 motherboard",
    img: "img/motherboard1.jpg"
  }
    ,
  {
    id: 15.2,
    category: "Accessory",
    type: "keyboard", 
    name: " PC Motherboard + fan",
    price: "Ksh,1,500",
    desc: "PC desktop motherboard with fan",
    img: "img/comp_repair.jpg"
  }
     ,
  {
    id: 15.3,
    category: "Accessory",
    type: "mice", 
    name: "wireless mouse",
    price: "Ksh,600",
    desc: "Wireless + Bluetooth mouse ",
    img: "img/mouse.webp"
  },
    {
    id: 15.4,
    category: "Accessory",
    type: "charger", 
    name: "Laptop Charger",
    price: "Ksh 1,500",
    desc: "HP 19.5V-2.31A 45W Blue Pin Adapter Original",
    img: "img/hpcharger.webp"
  }
  // networking

  ,
    {
    id: 16.0,
    category: "Network",
    type: "switch", 
    name: "DP-LINK POE SWITCH",
    price: "Ksh 48,500",
    desc: "D-Link DGS-1210-28P 28-Port Gigabit PoE Switch with 24-Port 10/100/1000BaseT PoE + 4 Combo 1000BaseT/SFP Ports ",
    img: "img/dlink.png"
  },
   {
    id: 16.1,
    category: "Network",
    type: "kit", 
    name: "Starlink Full kit",
    price: "Ksh 48,000",
    desc: "Standard Starlink kit version 4 gen3 ",
    img: "img/starlink.jpg"
  },
    {
    id: 16.2,
    category: "Network",
    type: "modems", 
    name: " 4G M-Wifi ",
    price: "Ksh 2,500",
    desc: "Portable SIM cars M-Wifi 4G ",
    img: "img/modem.webp"
  },
   {
    id: 16.3,
    category: "Network",
    type: "kit", 
    name: " Standard Starlink ",
    price: "Ksh 55,000",
    desc: "Starlink Gen 3 Standard Satellite ",
    img: "img/starlink1.webp"
  },
   {
    id: 16.4,
    category: "Network",
    type: "router", 
    name: " Mikrotik Router ",
    price: "Ksh 7,000",
    desc: "Mikrotik hEX Router RB750GR3 ",
    img: "img/mikrouter.webp"
  },//
  {
    id: 16.4,
    category: "Network",
    type: "router", 
    name: " Hikvision Cat6 Cables ",
    price: "Ksh 17,500",
    desc: " Hikvision DS-1LN6UZC0(O-STD) orange 305m CAT6 U/UTP Network Cable",
    img: "img/cat6.webp"
  },
    {
    id: 17.0,
    category: "Toners",
    type: "espon-ink", 
    name: " Epson ECOTANK ",
    price: "Kshs 1,500",
    desc: "Epson pure Cyan, Yellow, Majenta, Blue, Black econtank bottles ",
    img: "img/epsonink.webp"
  },
     {
    id: 17.0,
    category: "Toners",
    type: "kyocera", 
    name: " Kyocera Minolta Toner ",
    price: "Kshs 4,000",
    desc: "Konica Minolta Bizhub C220 /C280 /C360 Toner TN-216/319 ",
    img: "img/ky2.jpg"
  },
   {
    id: 17.0,
    category: "Toners",
    type: "lasertoner", 
    name: " LaserJet Toner ",
    price: "Kshs 12,000",
    desc: "HP 59A Black (CF259A) Original LaserJet Toner Cartridge ",
    img: "img/lasertoner.webp"
  },
  // accesories components
   {
    id: 18.0,
    category:"Accessories",
    type: "storage", 
    name: "Hard Disk Drive ",
    price: "Kshs 2,000",
    desc: "500GB SATA Drive",
    img: "img/storage1.jpeg"
  },
   {
    id: 18.1,
    category:"Accessories",
    type: "motherboard", 
    name: "ASUS PC Motherboard  ",
    price: "Kshs 2,000",
    desc: "ASUS PRIME B760M-A AX LGA 1700 DDR5 Micro-ATX Gaming Motherboard",
    img: "img/asusboard.jpg"
  },
  {
    id: 18.2,
    category:"Accessories",
    type: "monitor", 
    name: "hp elitebook screen   ",
    price: "Kshs 4,500",
    desc: "Hp elitebook 14 inch original Screen ",
    img: "img/screen.webp"
  },
   {
    id: 18.3,
    category:"Accessories",
    type: "storage", 
    name: " Lexar WD SSD 512GB ",
    price: "Kshs 8,500 ",
    desc: " Lexars WD M.2 NVMe SSD 512GB, High-speed Performance",
    img: "img/m.2.png"
  },
     {
    id: 18.4,
    category:"Accessories",
    type: "storage", 
    name: " Lexar SATA 2.5 SSD 512GB ",
    price: "Kshs 8,000 ",
    desc: " Lexars SATA 2.5 SSD 512GB, High-speed Performance",
    img: "img/lexar.png"
  },
    {
    id: 18.4,
    category:"Accessories",
    type: "storage", 
    name: " PC4 4GB RAM ",
    price: "Kshs 3,300 ",
    desc: "PC4 4GB RAM DDR4 2400MHz, High-speed Performance",
    img: "img/pc4.png"
  },
 
 
];

// accessories)


document.addEventListener("DOMContentLoaded", () => {
  //product sold  out
  const soldOutItems = [
    { name: "Lenovo ThinkPad X250", img: "img/lenovo2.webp" },
     { name: "Nvme casing with 256GB SSD", img: "img/nvme1.jpeg" },
    { name: "hp battery", img: "img/battery.webp" },
    { name: "HP 8200 Desktop", img: "img/Hp-8200-desktop.jpg" },
    { name: "Modem", img: "img/modem.webp" },
        { name: "Mac book", img: "img/mac1.jpg" },
        { name: "Hard Disk Drive SATA", img: "img/storage1.jpeg" },
        { name: "Mikrotik Router", img: "img/mikrotik.webp" },
        { name: "Computer Case with PSU", img: "img/case.webp" }
  ];

  const soldOutPopup = document.getElementById("sold-out-popup");
  let currentIndex = 0;

  function showSoldOutPopup() {
    const item = soldOutItems[currentIndex];
    soldOutPopup.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <span>${item.name} — <strong>SOLD OUT</strong></span>
    `;
    soldOutPopup.style.display = "flex";

    // Fade in
    setTimeout(() => {
      soldOutPopup.style.opacity = "1";
    }, 100);

    // Fade out after 2.5 seconds
    setTimeout(() => {
      soldOutPopup.style.opacity = "0";
    }, 2500);

    // Hide and show next item
    setTimeout(() => {
      soldOutPopup.style.display = "none";
      currentIndex = (currentIndex + 1) % soldOutItems.length;
      showSoldOutPopup();
    }, 3200);
  }

  // rotating automatically
  showSoldOutPopup();
});


// ==========================================

// 🧺 Initialize Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Update floating cart icon
function updateCartCount() {
  let cartIcon = document.getElementById("cart-icon");
  if (!cartIcon) {
    cartIcon = document.createElement("div");
    cartIcon.id = "cart-icon";
    cartIcon.style.position = "fixed";
    cartIcon.style.top = "20px";
    cartIcon.style.right = "20px";
    cartIcon.style.background = "#00a884";
    cartIcon.style.color = "white";
    cartIcon.style.padding = "10px 14px";
    cartIcon.style.borderRadius = "50%";
    cartIcon.style.fontWeight = "bold";
    cartIcon.style.cursor = "pointer";
    cartIcon.style.zIndex = "9999";
    cartIcon.addEventListener("click", showCartModal);
    document.body.appendChild(cartIcon);
  }
  cartIcon.innerHTML = `🛒 ${cart.length}`;
}

// Add to Cart
function addToCart(product) {
  if (!product || !product.name || !product.price) {
    alert("Error: Missing product details.");
    console.error("Invalid product:", product);
    return;
  }

  product.id = product.id || Date.now();
  const exists = cart.find((item) => item.name === product.name);

  if (exists) {
    alert(`${product.name} is already in your cart.`);
    return;
  }

  cart.push(product);
  saveCart();
  updateCartCount();
  alert(`${product.name} added to cart.`);
}

// ✅ Remove from Cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartCount();
  renderCartItems();
}

// ✅ Cart Modal
function showCartModal() {
  let modal = document.getElementById("cart-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cart-modal";
    modal.style.position = "fixed";
    modal.style.right = "20px";
    modal.style.top = "70px";
    modal.style.background = "white";
    modal.style.border = "1px solid #ccc";
    modal.style.borderRadius = "10px";
    modal.style.padding = "15px";
    modal.style.width = "300px";
    modal.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    modal.style.zIndex = "9999";

    modal.innerHTML = `
      <h5>Your Cart</h5>
      <ul id="cart-items" style="list-style:none; padding:0; max-height:200px; overflow-y:auto;"></ul>
      <p id="cart-total" style="font-weight:bold;">Total: Ksh.0</p>
      <div class="d-flex justify-content-between mt-2">
        <button id="order-cart" class="btn btn-sm btn-success">Order via WhatsApp</button>
        <button id="close-cart" class="btn btn-sm btn-danger">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("close-cart").onclick = () => (modal.style.display = "none");
    document.getElementById("order-cart").onclick = sendCartOrder;
  }

  renderCartItems();
  modal.style.display = "block";
}

// ✅ Render Cart Items
function renderCartItems() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "8px";
    li.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price}</span>
      <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">x</button>
    `;
    cartItems.appendChild(li);
    total += parseInt(item.price.replace(/\D/g, "")) || 0;
  });

  cartTotal.textContent = `Total: Ksh.${total.toLocaleString()}`;
}

// ✅ Send Cart Order to WhatsApp
function sendCartOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const phone = "254708466793";
  let message = "🛒 *Order Summary:*\n\n";
  cart.forEach((item, i) => {
    message += `${i + 1}. *${item.name}*\n💰 ${item.price}\n📃 ${item.desc}\n\n`;
  });

  const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace(/\D/g, "")), 0);
  message += `*Total: Ksh.${total.toLocaleString()}*\n\nThank you for shopping with VosterTech!`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ✅ Send WhatsApp order for one product
function sendWhatsAppOrder(product) {
  const phone = "254708466793";
  const message = `Hello, I'm interested in this item:\n\n🖥 *${product.name}*\n💰 ${product.price}\n📃 ${product.desc}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// ============================
// 🖼️ PRODUCT + POPUP + FILTER
// ============================

// Render products (with optional filter)
function renderProducts(filterType = null) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = products.filter((p) => !filterType || p.type === filterType);

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "col-md-3 col-sm-6";
    div.innerHTML = `
      <div class="card h-100 text-center shadow-sm">
        <img src="${p.img}" class="card-img-top product-img" 
             alt="${p.name}"
             data-name="${p.name}"
             data-price="${p.price}"
             data-desc="${p.desc}"
             data-img="${p.img}">
        <div class="card-body">
          <h6>${p.name}</h6>
          <p class="text-success fw-bold">${p.price}</p>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="alert alert-warning">No products found in this category.</div>`;
  }

  // Attach popup event for each image
  document.querySelectorAll(".product-img").forEach((img) => {
    img.addEventListener("click", () => {
      const product = {
        img: img.dataset.img,
        name: img.dataset.name,
        price: img.dataset.price,
        desc: img.dataset.desc,
      };
      showPopup(product);
    });
  });
}

// Show popup
function showPopup(product) {
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const popupName = document.getElementById("popup-name");
  const popupPrice = document.getElementById("popup-price");
  const popupDesc = document.getElementById("popup-desc");
  const popupButtons = document.getElementById("popup-buttons");

  popupImg.src = product.img;
  popupName.textContent = product.name;
  popupPrice.textContent = product.price;
  popupDesc.textContent = product.desc;

  popupButtons.innerHTML = `
    <button class="cart-btn" id="addCartBtn">🛒 Add to Cart</button>
    <a href="https://wa.me/254708466793?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(
      product.name
    )}%20priced%20at%20${encodeURIComponent(product.price)}"
       target="_blank"
       class="whatsapp-btn">💬 Chat on WhatsApp</a>
  `;

  document.getElementById("addCartBtn").addEventListener("click", () => addToCart(product));
  popup.style.display = "flex";
}

function hidePopup() {
  document.getElementById("image-popup").style.display = "none";
}

// ✅ Category filter event listeners
document.addEventListener("DOMContentLoaded", function () {
  renderProducts(); // Default render all
  updateCartCount();

  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const type = this.dataset.filter;
      renderProducts(type);
    });
  });
});
