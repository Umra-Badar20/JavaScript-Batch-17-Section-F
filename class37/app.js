var beautyProducts = {
  skincare: {
    vaseline: {
      "lip balm": {
        name: "Vaseline Lip Balm",
        price: 500,
        src: "https://www.catchnpack.pk/wp-content/uploads/2024/12/Vaseline-Lip-Therapy-Creme-Brulee-Mini-7g.jpg",
        vol: 100,
        description:
          "Vaseline Pro VitaB3 Serum Burst Lotion Luminous Glow Healthy, Glowing Skin, Lightweight 10x Antioxidant Power of Vitamin C with Vitamin B3, Hyaluronic Acid & Vitamin E, 7.5 Fl Oz",
      },
      lotion: {
        name: "Vaseline Lotion",
        price: 500,
        src: "https://greenvalley.pk/cdn/shop/files/Vaseline_Body_Lotion_Total_Moisture_Nourishing_100Ml.webp?v=1754552311",
        vol: 100,
        description:
          "Vaseline Pro VitaB3 Serum Burst Lotion Luminous Glow Healthy, Glowing Skin, Lightweight 10x Antioxidant Power of Vitamin C with Vitamin B3, Hyaluronic Acid & Vitamin E, 7.5 Fl Oz",
      },
    },
    nivea: {
      name: "Nivea Skin care",
      price: 1500,
      src: "https://www.catchnpack.pk/wp-content/uploads/2025/01/NIVEA-Rose-Touch-Moisturising-Gel-Cream-50ml.jpg",
      vol: 200,
      description:
        "NIVEA Rose Touch Moisturizing Gel Cream hydrates your skin for 48 hours. Made with organic rose water and hyaluronic acid, it leaves your skin soft, smooth and refreshed. Shop online at CatchnPack for the best price in Pakistan!",
    },
    ponds: {
      name: "Ponds Skin care",
      price: 1500,
      src: "https://www.catchnpack.pk/wp-content/uploads/2025/01/Ponds-Bright-Miracle-Whip-Collagen-Foam-100ml-600x600.jpg",
      vol: 200,
      description:
        "Pond’s Bright Miracle Whip Collagen Foam deeply cleanses while improving skin clarity and firmness. Infused with collagen and Vitamin B3, it brightens your skin, leaving it soft and radiant. Shop online for fast delivery and the best price in Pakistan!",
    },
    CeraVe: {
      name: "CeraVe Skin care",
      price: 1500,
      src: "https://www.catchnpack.pk/wp-content/uploads/2024/05/1214215-1.jpg",
      vol: 200,
      description:
        "CeraVe Daily Moisturizing Lotion provides long-lasting hydration for normal to dry skin with its lightweight, non-greasy formula enriched with ceramides and hyaluronic acid.",
    },
    Cetaphil: {
      name: "Cetaphil Skin care",
      price: 1500,
      src: "https://www.cetaphil.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw8bf6aa21/0001-GC%20Pore%20Clearing%20Acne%20Cleanser%208oz%20Pump%20-%20Front.PNG",
      vol: 200,
      description:
        "Cetaphil Face & Body Moisturizer, Hydrating Moisturizing Cream for Dry to Very Dry, Sensitive Skin, NEW 16 oz 2 Pack, Fragrance Free, Non-Comedogenic, Non-Greasy",
    },
    Conatural: {
      name: "Conatural Skin care",
      price: 1500,
      src: "https://m.media-amazon.com/images/I/51-NpRk-V4L._SL1200_.jpg",
      vol: 200,
      description:
        "Conatural Niacinamide Serum 30ml 10% + Zinc 1% - Anti-Aging Skin Serum & Pore Minimizer, Vitamin Serum for Skin, Glowing Complexion, Effective Solution for Open Pores & Large Pores Reduction",
    },
    "Saeed Ghani": {
      name: "Saeed Ghani Skin care",
      price: 1500,
      src: "https://m.media-amazon.com/images/I/51M6T9e8EoL._SX466_.jpg",
      vol: 200,
      description:
        "Saeed Ghani Foot & Hand Cream gives your skin deep care and lasting softness. It is made with honey, papaya, lemon, and coconut to heal dry skin and make it soft, smooth, and glowing. ",
    },
    "AccuFix Cosmetics": {
      name: "AccuFix Skin care",
      price: 1500,
      src: "	https://m.media-amazon.com/images/I/610BA72+ASL._SX466_.jpg",
      vol: 200,
      description:
        "TOSOWOONG Alpha Arbutin 2% Rice Serum, Rice 746,074ppm, Alpha-Arbutin 20,000ppm, Glow, Glass skin, Pigmentation, Acne Marks, Dark Spots, Even Skin Tone, Hydrating, Korean Skin Care, 33ml / 1.11 fl.oz.",
    },
    Neutrogena: {
      name: "Neutrogena Skin care",
      price: 1500,
      src: "https://m.media-amazon.com/images/I/612Sk3idapL._SX466_.jpg",
      vol: 200,
      description:
        "Neutrogena Ultra Sheer Dry-Touch Sunscreen Lotion SPF 70, Broad Spectrum, Water Resistant 80 Min, Oil-Free, Oxybenzone-Free, Non-Comedogenic, Matte Finish, Body Sunscreen, Travel Size 3 Fl Oz",
    },
    "Organic traveler": {
      name: "Organic traveler Skin care",
      price: 1500,
      src: "https://m.media-amazon.com/images/I/61aKLa78jLL._AC_UL320_.jpg",
      vol: 200,
      description:
        "Beef Tallow Sunscreen SPF 50 with Mineral : Instant Sun Protection Non Nano Zinc Oxide Sunblock- Non Greasy Formula- Beach Jogging Outdoor Sports - 3 Fl oz, 85g",
    },
  },
  haircare: {},
  makeup: {},
  nailcare: {},
  accessories: {},
};
// console.log(beautyProducts.skincare.vaseline);
// var user = "vaseline"
// console.log(beautyProducts.skincare[user]);
var productMenu = document.getElementById("productMenu");
var allProducts = document.getElementById("allProducts");
for (product in beautyProducts) {
  console.log(product);
  productMenu.innerHTML += `
            <option value="${product}">${product.toUpperCase()}</option>

    `;
  for (brand in beautyProducts[product]) {
    // console.log(beautyProducts[product][brand].name);

    allProducts.innerHTML += `
 <div class="col">
          <div class="card">
            <img
              src=${beautyProducts[product][brand].src}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${beautyProducts[product][brand].name}</h5>
              <p class="card-text">${beautyProducts[product][brand].description}</p>
            </div>
            <div class="card-footer">
              <h5 class="price">Rs.${beautyProducts[product][brand].price}/- </h5>
            </div>
          </div>
        </div>`;
  }
}
var brandMenu = document.getElementById("brandMenu");
function productChange() {
  brandMenu.innerHTML = ` <option selected>Select Brand</option>`;
  console.log(beautyProducts[productMenu.value]);
  for (brand in beautyProducts[productMenu.value]) {
    // console.log(brand);
    brandMenu.innerHTML += `
                <option value="${brand}">${brand.toUpperCase()}</option>

    `;
  }
}
function viewAll() {
  console.log("all products");

  //   for(brand in beautyProducts[product]){
  //         console.log(beautyProducts[product][brand].name);

  // allProducts.innerHTML += `
  //  <div class="col">
  //           <div class="card">
  //             <img
  //               src=${beautyProducts[product][brand].src}
  //               class="card-img-top"
  //               alt="..."
  //             />
  //             <div class="card-body">
  //               <h5 class="card-title">${beautyProducts[product][brand].name}</h5>
  //               <p class="card-text">${beautyProducts[product][brand].description}</p>
  //             </div>
  //             <div class="card-footer">
  //               <h5 class="price">Rs.${beautyProducts[product][brand].price}/- </h5>
  //             </div>
  //           </div>
  //         </div>`

  //     }
}
function filterProduct() {
  allProducts.innerHTML = "";
  // console.log(beautyProducts[productMenu.value][brandMenu.value].name);
  var productData = beautyProducts[productMenu.value][brandMenu.value];
  allProducts.innerHTML += `
   
 <div class="col">
          <div class="card">
            <img
              src=${productData.src}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${productData.name}</h5>
              <p class="card-text">${productData.description}</p>
            </div>
            <div class="card-footer">
              <h5 class="price">Rs.${productData.price}/- </h5>
            </div>
          </div>
        </div>
         <div class="col btnCol">
        <button onclick="viewAll()" class="btn allBtn btn-outline-success" type="button">
                View All Products
              </button>
               </div>
        `;
}
