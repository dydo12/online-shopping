// Fictional brands & products — demo data only. Photos are free-to-use Unsplash images.
export const CATEGORIES = ['Tops', 'Outerwear', 'Shoes', 'Bags', 'Accessories']

const IMG = {
  tee: 'photo-1620799139507-2a76f79a2f4d',
  denimJacket: 'photo-1533230464445-e01ef07c65c5',
  blazer: 'photo-1593030089683-a9841767a610',
  sneaker: 'photo-1669671943625-e20799ee5f42',
  boots: 'photo-1777987601677-3059be0e1388',
  tote: 'photo-1567744875520-cf9c27fbb53b',
  duffel: 'photo-1758542988969-39a10168b2ce',
  satchel: 'photo-1517612228538-cefdbc2c01e7',
  backpack: 'photo-1622560480605-d83c853bc5c3',
  cardHolder: 'photo-1601592996763-f05c9c80a7f1',
  knitwear: 'photo-1475053181767-9b735f0b1689',
  belt: 'photo-1684510334550-0c4fa8aaffd1',
  sunWayfarer: 'photo-1473496169904-658ba7c44d8a',
  sunRound: 'photo-1456421385613-d0666bb96b78',
  chain: 'photo-1611107683227-e9060eccd846',
  hoopEarrings: 'photo-1677913842001-3941986ca979',
  goldEarring: 'photo-1680968921717-4abbbe793bb3',
  studEarrings: 'photo-1638734205377-f21045bf6ebe',
}

export const products = [
  // Tops
  { id: 1, name: 'Essential Crewneck Tee', brand: 'Northline', category: 'Tops', price: 32, hue: 210, image: IMG.tee, desc: 'Soft cotton tee with a relaxed everyday fit.' },
  { id: 2, name: 'Ribbed Knit Top', brand: 'Verra Studio', category: 'Tops', price: 58, hue: 340, image: IMG.tee, desc: 'Fitted rib-knit top with a flattering stretch.' },
  { id: 3, name: 'Oxford Button-Down', brand: 'Halden & Co.', category: 'Tops', price: 68, hue: 25, image: IMG.tee, desc: 'Crisp woven oxford for work or weekend.' },
  { id: 4, name: 'Heavyweight Hoodie', brand: 'Marlo Supply', category: 'Tops', price: 74, hue: 150, image: IMG.tee, desc: 'Brushed fleece hoodie built for layering.' },
  { id: 5, name: 'Linen Blend Shirt', brand: 'Coast & Pine', category: 'Tops', price: 64, hue: 45, image: IMG.tee, desc: 'Breathable linen-cotton shirt for warm days.' },
  { id: 6, name: 'Classic Polo', brand: 'Northline', category: 'Tops', price: 42, hue: 195, image: IMG.tee, desc: 'Pique cotton polo with a clean tailored collar.' },

  // Outerwear
  { id: 7, name: 'Wool Overcoat', brand: 'Verra Studio', category: 'Outerwear', price: 228, hue: 20, image: IMG.blazer, desc: 'Tailored wool-blend overcoat for cold-weather polish.' },
  { id: 8, name: 'Quilted Field Jacket', brand: 'Halden & Co.', category: 'Outerwear', price: 148, hue: 90, image: IMG.denimJacket, desc: 'Lightweight quilted jacket with a utility fit.' },
  { id: 9, name: 'Denim Trucker Jacket', brand: 'Marlo Supply', category: 'Outerwear', price: 98, hue: 215, image: IMG.denimJacket, desc: 'Classic denim jacket, washed for a worn-in feel.' },
  { id: 10, name: 'Packable Rain Shell', brand: 'Coast & Pine', category: 'Outerwear', price: 86, hue: 175, image: IMG.denimJacket, desc: 'Featherweight waterproof shell that packs into its own pocket.' },
  { id: 11, name: 'Sherpa-Lined Bomber', brand: 'Northline', category: 'Outerwear', price: 118, hue: 30, image: IMG.denimJacket, desc: 'Cozy sherpa lining with a classic bomber silhouette.' },
  { id: 12, name: 'Tailored Blazer', brand: 'Verra Studio', category: 'Outerwear', price: 168, hue: 230, image: IMG.blazer, desc: 'Structured blazer that transitions from desk to dinner.' },

  // Shoes
  { id: 13, name: 'Leather Chelsea Boot', brand: 'Halden & Co.', category: 'Shoes', price: 158, hue: 15, image: IMG.boots, desc: 'Sleek leather Chelsea boot with an elastic side panel.' },
  { id: 14, name: 'Canvas Low-Top Sneaker', brand: 'Marlo Supply', category: 'Shoes', price: 54, hue: 0, image: IMG.sneaker, desc: 'Lightweight canvas sneaker for everyday wear.' },
  { id: 15, name: 'Everyday Runner', brand: 'Northline', category: 'Shoes', price: 78, hue: 205, image: IMG.sneaker, desc: 'Cushioned runner designed for all-day comfort.' },
  { id: 16, name: 'Suede Desert Boot', brand: 'Coast & Pine', category: 'Shoes', price: 128, hue: 35, image: IMG.boots, desc: 'Soft suede desert boot with a crepe sole.' },
  { id: 17, name: 'Slip-On Loafer', brand: 'Verra Studio', category: 'Shoes', price: 112, hue: 350, image: IMG.boots, desc: 'Polished loafer that pairs with tailored or casual looks.' },
  { id: 18, name: 'Trail Hiker', brand: 'Halden & Co.', category: 'Shoes', price: 134, hue: 110, image: IMG.boots, desc: 'Rugged hiker with reinforced toe and grippy outsole.' },

  // Bags
  { id: 19, name: 'Canvas Tote', brand: 'Marlo Supply', category: 'Bags', price: 48, hue: 50, image: IMG.tote, desc: 'Durable canvas tote with reinforced handles.' },
  { id: 20, name: 'Weekender Duffel', brand: 'Northline', category: 'Bags', price: 98, hue: 200, image: IMG.duffel, desc: 'Spacious duffel built for short trips.' },
  { id: 21, name: 'Structured Crossbody', brand: 'Verra Studio', category: 'Bags', price: 88, hue: 330, image: IMG.satchel, desc: 'Compact crossbody with a structured silhouette.' },
  { id: 22, name: 'Leather Belt Bag', brand: 'Coast & Pine', category: 'Bags', price: 64, hue: 18, image: IMG.satchel, desc: 'Hands-free belt bag in smooth leather.' },
  { id: 23, name: 'Commuter Backpack', brand: 'Halden & Co.', category: 'Bags', price: 118, hue: 220, image: IMG.backpack, desc: 'Padded laptop backpack for daily commuting.' },

  // Accessories
  { id: 24, name: 'Ribbed Beanie', brand: 'Northline', category: 'Accessories', price: 24, hue: 240, image: IMG.knitwear, desc: 'Snug ribbed-knit beanie for cold days.' },
  { id: 25, name: 'Silk Scarf', brand: 'Verra Studio', category: 'Accessories', price: 46, hue: 300, image: IMG.knitwear, desc: 'Lightweight silk scarf with a hand-rolled edge.' },
  { id: 26, name: 'Woven Belt', brand: 'Marlo Supply', category: 'Accessories', price: 34, hue: 60, image: IMG.belt, desc: 'Adjustable woven belt with a matte buckle.' },
  { id: 27, name: 'Aviator Sunglasses', brand: 'Coast & Pine', category: 'Accessories', price: 58, hue: 185, image: IMG.sunWayfarer, desc: 'Classic aviator frames with UV-protective lenses.' },
  { id: 28, name: 'Leather Card Holder', brand: 'Halden & Co.', category: 'Accessories', price: 38, hue: 10, image: IMG.cardHolder, desc: 'Slim leather card holder with four card slots.' },

  // Accessories — chains, earrings, sunglasses
  { id: 29, name: 'Curb Chain Necklace', brand: 'Halden & Co.', category: 'Accessories', price: 48, hue: 42, image: IMG.chain, desc: 'Bold curb-link chain in a warm gold finish.' },
  { id: 30, name: 'Box Chain Necklace', brand: 'Verra Studio', category: 'Accessories', price: 42, hue: 48, image: IMG.chain, desc: 'Sleek box-link chain for everyday layering.' },
  { id: 31, name: 'Layered Chain Set', brand: 'Northline', category: 'Accessories', price: 56, hue: 38, image: IMG.chain, desc: 'Two-piece layered chain set, ready to stack.' },
  { id: 32, name: 'Hoop Earrings', brand: 'Verra Studio', category: 'Accessories', price: 28, hue: 280, image: IMG.hoopEarrings, desc: 'Classic silver-tone hoops with a textured finish.' },
  { id: 33, name: 'Drop Earrings', brand: 'Marlo Supply', category: 'Accessories', price: 32, hue: 44, image: IMG.goldEarring, desc: 'Lightweight gold-tone drop earrings for everyday wear.' },
  { id: 34, name: 'Stud Earrings Set', brand: 'Coast & Pine', category: 'Accessories', price: 24, hue: 6, image: IMG.studEarrings, desc: 'Sparkling floral stud earrings, sold as a set.' },
  { id: 35, name: 'Round Sunglasses', brand: 'Northline', category: 'Accessories', price: 52, hue: 28, image: IMG.sunRound, desc: 'Retro round frames with UV-protective lenses.' },
  { id: 36, name: 'Square Frame Sunglasses', brand: 'Halden & Co.', category: 'Accessories', price: 62, hue: 12, image: IMG.sunWayfarer, desc: 'Bold square frames for everyday sun protection.' },

  // Not part of any filterable category — only visible by scrolling "All"
  { id: 37, name: 'dydo', brand: 'Happy Shop', category: 'Unlisted', price: 10000, hue: 100, image: 'https://e1.pngegg.com/pngimages/649/608/png-clipart-3d-yoshi-yoshi-3d-illustration.png', desc: 'A rare find.' },
  { id: 38, name: 'baobao', brand: 'Happy Shop', category: 'Unlisted', price: 10000, hue: 150, image: 'https://www.hopscotchstore.com/cdn/shop/files/JellyCat-Allexi-Alligator-Plush-Stuffed-Animals-JellyCat.jpg?v=1751256344&width=900', desc: 'A rare find.' },
  { id: 39, name: 'panda', brand: 'Happy Shop', category: 'Unlisted', price: 10000, hue: 0, image: 'https://www.destinationbabykids.com/cdn/shop/products/L3PD.jpg?v=1633064545&width=900', desc: 'A rare find.' },
  { id: 40, name: 'sakura', brand: 'Happy Shop', category: 'Unlisted', price: 10000, hue: 340, image: 'https://cuteasbuttons.com/cdn/shop/files/IMG-2321.jpg?width=900', desc: 'A rare find.' },
]
