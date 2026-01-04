// ==============================================
// CONFIGURATION - EDIT THESE SETTINGS
// ==============================================
const CONFIG = {
    WHATSAPP_NUMBER: "2348160227731",
    CURRENCY_SYMBOL: "₦",
    SHOP_NAME: "Fikky's Collection",
    SHOP_LOCATION: "Dutse/Kuje Abuja",
    CEO_NAME: "Tosin Lawal",
    CEO_TITLE: "Founder & CEO",
    CEO_QUOTE: "Fashion is not just about clothing, it's about creating experiences that empower individuals to express their authentic selves.",
    
    // Store Information
    STORE_INFO: {
        address: "Dutse/Kuje Abuja",
        phone: "+234 816 022 7731",
        businessHours: "Mon-Sun: 9:00 AM - 8:00 PM",
        deliveryWeekdays: "6-7pm via dispatch rider",
        deliveryWeekends: "Saturday & Sunday delivery"
    }
};

// ==============================================
// PRODUCTS DATABASE - ADD YOUR PRODUCTS HERE
// ==============================================
// HOW TO ADD A NEW PRODUCT:
// 1. Copy the example below and paste it in the products array
// 2. Fill in the details
// 3. IMPORTANT: id must be unique (use next number in sequence)
// 4. Choose from these categories: 
//    - "Casual Wear" 
//    - "Accessories" 
//    - "Formal Wear"
//    - "Footwear" 
//    - "Knitwear" 
//    - "Outerwear" 
//    - "Inner Wear"
// 
// PRODUCT EXAMPLE:
// {
//     id: 36, // ← CHANGE THIS NUMBER (must be unique)
//     name: "Your Product Name",
//     category: "Casual Wear", // ← Choose from list above
//     price: 15000, // ← Price in numbers only (without ₦ symbol)
//     image: "your-image.jpg", // ← Your image filename or URL
//     description: "Describe your product here"
// },

const products = [
    // ============== CASUAL WEAR ==============
    {
        id: 1,
        name: "Baggy Jeans",
        category: "Casual Wear",
        price: 27000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTsRphh6hoxI207o_gnFm10tC2Rd5yDC-qg&s",
        description: "Premium quality baggy jeans with perfect fit and comfort"
    },
    {
        id: 2,
        name: "Crop Tops",
        category: "Casual Wear",
        price: 7000,
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/9818082/1.jpg?5043",
        description: "Trendy crop tops in various designs"
    },
    {
        id: 3,
        name: "Luxury Sweatshirt",
        category: "Casual Wear",
        price: 29000,
        image: "https://www.cartrollers.com/wp-content/uploads/2024/12/QUALITY-CASUAL-DESIGNER-LONG-SLEEVE-SWEATSHIRTS.jpeg",
        description: "Premium quality luxury sweatshirt"
    },
    {
        id: 4,
        name: "Quality Tees",
        category: "Casual Wear",
        price: 17000,
        image: "IMG-20251119-WA0125.jpg",
        description: "High quality t-shirts collection"
    },
    {
        id: 5,
        name: "Premium Denim Jean",
        category: "Casual Wear",
        price: 45000,
        image: "IMG-20251119-WA0146.jpg",
        description: "Premium quality denim jeans"
    },
    {
        id: 6,
        name: "Joggers",
        category: "Casual Wear",
        price: 20000,
        image: "IMG-20251119-WA0148.jpg",
        description: "Comfortable and stylish joggers"
    },
    {
        id: 7,
        name: "Amapiano Joggers",
        category: "Casual Wear",
        price: 20000,
        image: "IMG-20251119-WA0161.jpg",
        description: "Trendy Amapiano style joggers"
    },
    {
        id: 8,
        name: "Trendy Cap",
        category: "Casual Wear",
        price: 10500,
        image: "IMG-20251121-WA0039.jpg",
        description: "Fashionable trendy caps"
    },
    {
        id: 9,
        name: "Luxury Hoodies",
        category: "Casual Wear",
        price: 35000,
        image: "IMG-20251119-WA0165.jpg",
        description: "Premium luxury hoodies collection"
    },
    {
        id: 10,
        name: "Armless Polo",
        category: "Casual Wear",
        price: 25000,
        image: "IMG-20251122-WA0044.jpg",
        description: "Luxury armless polo shirts"
    },
    {
        id: 11,
        name: "Armless Up and Down",
        category: "Casual Wear",
        price: 30000,
        image: "IMG-20251122-WA0039.jpg",
        description: "Stylish armless up and down set"
    },
    {
        id: 12,
        name: "Luxury Sweat Top",
        category: "Casual Wear",
        price: 29000,
        image: "IMG-20251124-WA0073.jpg",
        description: "Premium sweat tops collection"
    },
    {
        id: 13,
        name: "Luxury Crop Top",
        category: "Casual Wear",
        price: 27000,
        image: "IMG-20251124-WA0078.jpg",
        description: "Exclusive luxury crop tops"
    },
    {
        id: 14,
        name: "Combat Shorts",
        category: "Casual Wear",
        price: 23500,
        image: "IMG-20251124-WA0082.jpg",
        description: "Stylish luxury combat shorts"
    },
    {
        id: 15,
        name: "Round neck T-shirts",
        category: "Casual Wear",
        price: 24000,
        image: "WhatsApp Image 2025-12-29 at 13.02.36 (1).jpeg",
        description: "Standard round neck"
    },
    
    // ============== ACCESSORIES ==============
    {
        id: 16,
        name: "Hand Fans",
        category: "Accessories",
        price: 7000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Rt5C7yKcHaeFD6NCMRLM_WzNIMKx2jeJPg&s",
        description: "Elegant hand fans for style and comfort"
    },
    {
        id: 17,
        name: "Sunset Lamp",
        category: "Accessories",
        price: 10500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkNiZOLksA4w9T4t72f_PobEb3CASwJI8JA&s",
        description: "Beautiful sunset lamp for ambient lighting"
    },
    {
        id: 18,
        name: "Phone Holder with Amplifier",
        category: "Accessories",
        price: 16000,
        image: "IMG-20251119-WA0140.jpg",
        description: "F19 mobile phone holder with screen amplifier"
    },
    {
        id: 19,
        name: "Stanley Cup",
        category: "Accessories",
        price: 17000,
        image: "IMG-20251119-WA0141.jpg",
        description: "Premium Stanley cup collection"
    },
    {
        id: 20,
        name: "Hoddie",
        category: "Outerwear",
        price: 27000,
        image: "WhatsApp Image 2025-12-29 at 13.01.33.jpeg",
        description: "high quality luxury crop hoodie"
    },
    
    // ============== FORMAL WEAR ==============
    {
        id: 21,
        name: "Shirt",
        category: "Formal Wear",
        price: 7000,
        image: "https://i5.walmartimages.com/seo/George-Men-s-Assorted-Crew-T-Shirts-6-Pack_9a49c841-5808-4fe0-b7ab-15d040df38f4.d976930a03bcef0f6b055077f0ee3a77.jpeg",
        description: "Classic formal shirts for professional look"
    },
    {
        id: 22,
        name: "Quality tees",
        category: "Casual Wear",
        price: 19000,
        image: "WhatsApp Image 2025-12-29 at 12.59.42.jpeg",
        description: "Quality tees"
    },
    {
        id: 23,
        name: "Maxi gowns",
        category: "Formal Wear",
        price: 11000,
        image: "WhatsApp Image 2025-12-29 at 12.59.32.jpeg",
        description: "Quality Maxi gowns"
    },
    
    // ============== FOOTWEAR ==============
    {
        id: 24,
        name: "Premium Sneakers",
        category: "Footwear",
        price: 33000,
        image: "https://www.cartrollers.com/wp-content/uploads/2022/11/PREMIUM-UNISEX-FASHION-STELLAR-SNEAKERS-2.jpeg",
        description: "Luxury sneakers with premium materials"
    },
    {
        id: 25,
        name: "Luxury Big Tops",
        category: "Footwear",
        price: 15500,
        image: "IMG-20251119-WA0138.jpg",
        description: "Trendy luxury big tops"
    },
    {
        id: 26,
        name: "Luxury gown",
        category: "Formal Wear",
        price: 13900,
        image: "WhatsApp Image 2025-12-30 at 14.35.38.jpeg",
        description: "High quality luxury gown"
    },
    
    // ============== KNITWEAR ==============
    {
        id: 27,
        name: "Leggings",
        category: "Knitwear",
        price: 12000,
        image: "https://hips.hearstapps.com/hmg-prod/images/whm250110-digital-ecomm-leggingswithpockets-lululemon-4474-68deb0bcb4d87.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
        description: "Comfortable and stylish leggings"
    },
    {
        id: 28,
        name: "Joggers",
        category: "Knitwear",
        price: 14500,
        image: "WhatsApp Image 2025-12-29 at 12.57.13.jpeg",
        description: "Quality Joggers"
    },
    
    // ============== OUTERWEAR ==============
    {
        id: 29,
        name: "Designer Top",
        category: "Outerwear",
        price: 10000,
        image: "IMG-20251121-WA0018.jpg",
        description: "Exclusive designer top collection"
    },
    {
        id: 30,
        name: "NGM Collection",
        category: "Outerwear",
        price: 16000,
        image: "IMG-20251119-WA0170.jpg",
        description: "Exclusive NGM collection pieces"
    },
    {
        id: 31,
        name: "Ladies Shorts",
        category: "Outerwear",
        price: 10500,
        image: "IMG-20251119-WA0150.jpg",
        description: "Quality shorts for ladies"
    },
    {
        id: 32,
        name: "crop shirts",
        category: "Outerwear",
        price: 13000,
        image: "WhatsApp Image 2025-12-30 at 14.36.08.jpeg",
        description: "Trendy denim jacket for all seasons"
    },
    
    // ============== INNER WEAR ==============
    {
        id: 33,
        name: "Booty Shorts",
        category: "Inner Wear",
        price: 7500,
        image: "IMG-20251121-WA0049.jpg",
        description: "Stylish booty shorts"
    },

    
    // ============== NEWLY ADDED PRODUCTS (36-51) ==============
    {
        id: 36,
        name: "Luxury gown",
        category: "Outerwear",
        price: 20000,
        image: "WhatsApp Image 2026-01-02 at 02.51.06.jpeg",
        description: "High quality luxury gown"
    },
    {
        id: 37,
        name: "Luxury joggers",
        category: "casual Wear",
        price: 30000,
        image: "WhatsApp Image 2026-01-02 at 02.52.45 (1).jpeg",
        description: "Premium luxury joggers"
    },
    {
        id: 38,
        name: "luxury top",
        category: "outwear",
        price: 30000,
        image: "WhatsApp Image 2026-01-02 at 02.53.28 (1).jpeg",
        description: "high quality luxury top"
    },
    {
        id: 39,
        name: "sleeveless sweatshirt",
        category: "outwear",
        price: 2000,
        image: "WhatsApp Image 2026-01-02 at 02.55.33 (2).jpeg",
        description: "high quality sleevless sweatshirt"
    },
    {
        id: 40,
        name: "Valentino hand bag",
        category: "Accessories",
        price: 15000,
        image: "WhatsApp Image 2026-01-03 at 14.41.35.jpeg",
        description: "Valentino handbag available in black, white"
    },
    {
        id: 41,
        name: "NGM",
        category: "Formal wear",
        price: 18000,
        image: "WhatsApp Image 2026-01-03 at 14.43.23 (1).jpeg",
        description: "Premium luxury NGM"
    },
    {
        id: 42,
        name: "Luxury shirts available",
        category: "Outwear Wear",
        price: 35000,
        image: "WhatsApp Image 2026-01-03 at 14.44.18 (1).jpeg",
        description: "Quality luxury shirts available"
    },
    {
        id: 43,
        name: "Luxuxry armless ",
        category: "Knitwear",
        price: 29000,
        image: "WhatsApp Image 2026-01-03 at 14.44.32 (1).jpeg",
        description: "Quality luxury armless available"
    },
    {
        id: 44,
        name: "Luxury up and down",
        category: "Outwear",
        price: 35000,
        image: "WhatsApp Image 2026-01-03 at 14.45.33 (1).jpeg",
        description: "Quality luxury up and down available"
    },
    {
        id: 45,
        name: "Luxury jersey tops",
        category: "Outwear",
        price: 30000,
        image: "WhatsApp Image 2026-01-03 at 14.45.56 (2).jpeg",
        description: "Luxury jersey tops"
    },
    {
        id: 46,
        name: "NGM",
        category: "Casual Wear",
        price: 15000,
        image: "WhatsApp Image 2026-01-03 at 14.47.10.jpeg",
        description: "NGM"
    },
    {
        id: 47,
        name: "Designer Socks Set",
        category: "Casual Wear",
        price: 13000,
        image: "WhatsApp Image 2026-01-03 at 14.47.32.jpeg",
        description: "Premium designer socks 5-piece set"
    },
    {
        id: 48,
        name: "NGM",
        category: "Casual Wear",
        price: 24000,
        image: "WhatsApp Image 2026-01-03 at 14.48.21.jpeg",
        description: "NGM"
    },
    {
        id: 49,
        name: "Cartier jacket",
        category: "Casual wear",
        price: 39000,
        image: "WhatsApp Image 2026-01-04 at 17.06.26.jpeg",
        description: "Luxury cartier jacket"
    },
    {
        id: 50,
        name: "collar polo",
        category: "Outwear",
        price: 30000,
        image: "WhatsApp Image 2026-01-04 at 17.05.13.jpeg",
        description: "High quality luxury collar polo"
    },
    {
        id: 51,
        name: "Luxury 24 update top",
        category: "Casual Wear",
        price: 33000,
        image: "WhatsApp Image 2026-01-04 at 17.07.33.jpeg",
        description: "Luxury 24 update top"
    }
    
    // ============== ADD NEW PRODUCTS BELOW ==============
    // COPY THIS EXAMPLE, EDIT, AND ADD BELOW:
    // {
    //     id: 52, // ← Change this to next number (52, 53, 54, etc.)
    //     name: "Designer Blazer",
    //     category: "Formal Wear", // ← Must match category exactly
    //     price: 45000,
    //     image: "blazer.jpg", // ← Use your image filename
    //     description: "Premium designer blazer for formal occasions"
    // },
    
    // ADD YOUR NEW PRODUCTS HERE ↓↓↓
    // Example:
    // {
    //     id: 52,
    //     name: "Summer Dress",
    //     category: "Casual Wear",
    //     price: 18000,
    //     image: "summer-dress.jpg",
    //     description: "Light and comfortable summer dress"
    // }
];

// ==============================================
// SAFE PRODUCT HELPER FUNCTIONS
// ==============================================

// Function to get the next available product ID
function getNextProductId() {
    if (products.length === 0) return 1;
    
    // Find the highest ID safely
    let maxId = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product && typeof product.id === 'number' && product.id > maxId) {
            maxId = product.id;
        }
    }
    return maxId + 1;
}

// Function to validate a product before adding
function validateProduct(product) {
    const errors = [];
    
    // Check required fields
    if (!product.name || product.name.trim() === '') {
        errors.push("Product name is required");
    }
    
    if (!product.category || product.category.trim() === '') {
        errors.push("Category is required");
    }
    
    // Validate price
    const priceNum = Number(product.price);
    if (isNaN(priceNum) || priceNum <= 0) {
        errors.push("Price must be a positive number");
    }
    
    // Validate ID
    if (typeof product.id !== 'number' || product.id <= 0) {
        errors.push("ID must be a positive number");
    }
    
    // Check for duplicate ID
    const existingId = products.find(p => p.id === product.id);
    if (existingId) {
        errors.push(`Product ID ${product.id} already exists. Use a unique ID.`);
    }
    
    // Validate category
    const validCategories = [
        "Casual Wear", 
        "Accessories", 
        "Formal Wear", 
        "Footwear", 
        "Knitwear", 
        "Outerwear", 
        "Inner Wear"
    ];
    
    if (!validCategories.includes(product.category)) {
        errors.push(`Category must be one of: ${validCategories.join(", ")}`);
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors,
        fixedProduct: {
            id: product.id,
            name: (product.name || '').trim(),
            category: (product.category || 'Casual Wear').trim(),
            price: Math.max(0, priceNum || 0),
            image: product.image || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
            description: (product.description || 'Premium quality fashion item from Fikky\'s Collection').trim()
        }
    };
}

// Function to add a new product (manual method - you can call this from console)
function addProductManually(productData) {
    console.log("=== ADDING NEW PRODUCT ===");
    
    // Auto-generate ID if not provided
    if (!productData.id) {
        productData.id = getNextProductId();
        console.log(`📝 Auto-assigned ID: ${productData.id}`);
    }
    
    // Validate the product
    const validation = validateProduct(productData);
    
    if (!validation.isValid) {
        console.error("❌ Product validation failed:");
        validation.errors.forEach(error => console.error(`  - ${error}`));
        
        // Show error toast
        showToast(`Failed to add product: ${validation.errors[0]}`, 'error');
        return false;
    }
    
    // Add the product
    products.push(validation.fixedProduct);
    
    console.log(`✅ Product "${validation.fixedProduct.name}" added successfully!`);
    console.log(`   ID: ${validation.fixedProduct.id}`);
    console.log(`   Category: ${validation.fixedProduct.category}`);
    console.log(`   Price: ₦${validation.fixedProduct.price.toLocaleString()}`);
    
    // Refresh the website display
    updateCategories();
    applyFilters();
    
    // Show success message
    showToast(`"${validation.fixedProduct.name}" added successfully!`, 'success');
    
    return true;
}

// Function to safely load products (handles invalid data)
function safelyLoadProducts() {
    const validProducts = [];
    const errors = [];
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        // Skip if product is null or undefined
        if (!product) {
            errors.push(`Product at index ${i} is empty`);
            continue;
        }
        
        // Validate product
        const validation = validateProduct(product);
        
        if (validation.isValid) {
            validProducts.push(validation.fixedProduct);
        } else {
            errors.push(`Product ID ${product.id || 'unknown'}: ${validation.errors.join(', ')}`);
        }
    }
    
    // Log any errors
    if (errors.length > 0) {
        console.warn("⚠️ Some products had issues:", errors);
        // REMOVED THE TOAST NOTIFICATION HERE
    }
    
    return validProducts;
}

// Function to update categories list safely
function updateCategories() {
    try {
        const uniqueCategories = new Set();
        
        // Collect categories from valid products
        products.forEach(product => {
            if (product && product.category) {
                uniqueCategories.add(product.category);
            }
        });
        
        categories = ["All Products", ...Array.from(uniqueCategories)];
        
        // Update the filter buttons
        renderCategoryFilters();
        
        return categories;
    } catch (error) {
        console.error("Error updating categories:", error);
        return ["All Products", "Casual Wear", "Accessories"];
    }
}

// ==============================================
// EASY PRODUCT ADDING - CONSOLE HELPER
// ==============================================

// Add this helper to the global scope for easy access
window.FikkyShop = {
    // Get help with adding products
    help: function() {
        console.log(`
🎯 HOW TO ADD PRODUCTS - FIKKY'S COLLECTION 🎯
============================================

📌 METHOD 1: EDIT THE CODE DIRECTLY (Easiest)
------------------------------------------------
1. Open the code editor
2. Find the 'products' array (around line 30)
3. Add your new product at the end (after id: 51)
4. Save and refresh the page

📌 METHOD 2: USE THE CONSOLE (Quick Test)
------------------------------------------
1. Open browser console (F12)
2. Copy and paste this:
   
   FikkyShop.add({
       name: "New Product",
       category: "Casual Wear",
       price: 15000,
       image: "product.jpg",
       description: "Description here"
   })

📌 PRODUCT TEMPLATE:
-------------------
{
    id: 52,                    // ← CHANGE THIS (must be unique)
    name: "Product Name",      // ← Your product name
    category: "Casual Wear",   // ← Choose from list below
    price: 15000,              // ← Numbers only (no ₦ symbol)
    image: "your-image.jpg",   // ← Your image file or URL
    description: "Description"
}

📌 AVAILABLE CATEGORIES:
-----------------------
- "Casual Wear"
- "Accessories"
- "Formal Wear"
- "Footwear"
- "Knitwear"
- "Outerwear"
- "Inner Wear"

📌 USEFUL COMMANDS:
------------------
FikkyShop.help()      - Show this help
FikkyShop.list()      - List all products
FikkyShop.count()     - Count products
FikkyShop.nextId()    - Get next available ID
FikkyShop.validateAll() - Check for errors

📌 COMMON MISTAKES TO AVOID:
---------------------------
✅ DO: Use unique IDs (52, 53, 54...)
❌ DON'T: Use duplicate IDs

✅ DO: Use exact category names
❌ DON'T: Make up new categories

✅ DO: Use numbers for price (15000)
❌ DON'T: Add ₦ symbol in price

✅ DO: Use .jpg, .png, or full URL
❌ DON'T: Forget image extension

💡 TIP: Always use FikkyShop.nextId() to get the correct next ID!
        `);
    },
    
    // Quick add product from console
    add: function(productData) {
        return addProductManually(productData);
    },
    
    // List all products
    list: function() {
        if (products.length === 0) {
            console.log("📭 No products found");
            return 0;
        }
        
        console.log(`📦 Total Products: ${products.length}`);
        console.table(products.map(p => ({
            ID: p.id,
            Name: p.name,
            Category: p.category,
            Price: `₦${p.price.toLocaleString()}`,
            Image: p.image ? p.image.substring(0, 30) + '...' : 'No image'
        })));
        return products.length;
    },
    
    // Count products
    count: function() {
        console.log(`📊 Total Products: ${products.length}`);
        console.log(`📁 Categories: ${[...new Set(products.map(p => p.category))].join(', ')}`);
        return products.length;
    },
    
    // Get next available ID
    nextId: function() {
        const nextId = getNextProductId();
        console.log(`🆔 Next available ID: ${nextId}`);
        console.log(`📝 Last product ID: ${nextId - 1}`);
        return nextId;
    },
    
    // Find duplicate IDs
    findDuplicates: function() {
        const ids = products.map(p => p.id);
        const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
        
        if (duplicates.length > 0) {
            console.error("❌ Duplicate IDs found:", [...new Set(duplicates)]);
            console.log("Affected products:");
            duplicates.forEach(id => {
                const dupProducts = products.filter(p => p.id === id);
                dupProducts.forEach(p => console.log(`  - ID ${id}: "${p.name}"`));
            });
        } else {
            console.log("✅ All IDs are unique");
        }
        return duplicates;
    },
    
    // Validate all products
    validateAll: function() {
        const errors = [];
        
        if (products.length === 0) {
            console.log("ℹ️ No products to validate");
            return [];
        }
        
        console.log(`🔍 Validating ${products.length} products...`);
        
        products.forEach((product, index) => {
            const validation = validateProduct(product);
            if (!validation.isValid) {
                errors.push({
                    index: index,
                    id: product.id,
                    name: product.name,
                    errors: validation.errors
                });
            }
        });
        
        if (errors.length > 0) {
            console.error(`❌ Found ${errors.length} validation error(s):`);
            errors.forEach(error => {
                console.error(`  Product #${error.index} (ID: ${error.id} - "${error.name}"):`);
                error.errors.forEach(err => console.error(`    - ${err}`));
            });
        } else {
            console.log("✅ All products are valid!");
        }
        
        return errors;
    },
    
    // Get product by ID
    get: function(id) {
        const product = products.find(p => p.id === id);
        if (product) {
            console.log(`🔍 Product found (ID: ${id}):`);
            console.log(`   Name: ${product.name}`);
            console.log(`   Category: ${product.category}`);
            console.log(`   Price: ₦${product.price.toLocaleString()}`);
            console.log(`   Image: ${product.image}`);
            console.log(`   Description: ${product.description}`);
            return product;
        } else {
            console.error(`❌ Product with ID ${id} not found`);
            return null;
        }
    },
    
    // Update a product
    update: function(id, updates) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error(`❌ Product with ID ${id} not found`);
            return false;
        }
        
        const updatedProduct = { ...products[index], ...updates, id: id };
        const validation = validateProduct(updatedProduct);
        
        if (!validation.isValid) {
            console.error("❌ Update failed:");
            validation.errors.forEach(error => console.error(`  - ${error}`));
            return false;
        }
        
        products[index] = validation.fixedProduct;
        console.log(`✅ Product ID ${id} updated successfully!`);
        
        // Refresh display
        updateCategories();
        applyFilters();
        
        return true;
    },
    
    // Remove a product
    remove: function(id) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error(`❌ Product with ID ${id} not found`);
            return false;
        }
        
        const productName = products[index].name;
        products.splice(index, 1);
        
        console.log(`🗑️ Product "${productName}" (ID: ${id}) removed successfully`);
        
        // Refresh display
        updateCategories();
        applyFilters();
        
        return true;
    }
};

// ==============================================
// APPLICATION SETUP (DO NOT EDIT BELOW THIS LINE)
// ==============================================

// Extract unique categories
let categories = ["All Products", ...new Set(products.map(p => p.category))];

// Cart State
let cart = JSON.parse(localStorage.getItem('fikky-cart')) || [];
let filteredProducts = [...products];
let activeCategory = "All Products";
let searchQuery = "";

// DOM Elements
const elements = {
    // Main elements
    loadingScreen: document.getElementById('loadingScreen'),
    particles: document.getElementById('particles'),
    header: document.querySelector('.header'),
    
    // Navigation
    hamburgerMenu: document.getElementById('hamburgerMenu'),
    navMenu: document.getElementById('navMenu'),
    
    // Cart
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartSidebar: document.getElementById('cartSidebar'),
    closeCart: document.getElementById('closeCart'),
    cartItems: document.getElementById('cartItems'),
    totalPrice: document.getElementById('totalPrice'),
    cartContent: document.getElementById('cartContent'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    continueShopping: document.getElementById('continueShopping'),
    
    // Checkout
    checkoutForm: document.getElementById('checkoutForm'),
    backToCart: document.getElementById('backToCart'),
    orderForm: document.getElementById('orderForm'),
    
    // Products
    productsGrid: document.getElementById('productsGrid'),
    categoryFilters: document.getElementById('categoryFilters'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    
    // Filters
    filterToggle: document.getElementById('filterToggle'),
    mobileFilterOverlay: document.getElementById('mobileFilterOverlay'),
    closeFilter: document.getElementById('closeFilter'),
    mobileCategories: document.querySelector('.mobile-categories'),
    
    // Quick View
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewClose: document.getElementById('quickViewClose'),
    quickViewBody: document.getElementById('quickViewBody'),
    
    // Forms
    contactForm: document.getElementById('contactForm'),
    newsletterForm: document.getElementById('newsletterForm'),
    
    // Toast
    toast: document.getElementById('toast'),
    
    // Back to top
    backToTop: document.getElementById('backToTop'),
    
    // Track order
    trackOrderBtn: document.getElementById('trackOrderBtn'),
    trackOrderLink: document.getElementById('trackOrderLink')
};

// ==============================================
// INITIALIZATION FUNCTIONS
// ==============================================

// Initialize App
function init() {
    // First, ensure body is visible
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    
    // Show loading screen
    showLoadingScreen();
    
    // Initialize after loading
    setTimeout(() => {
        // Safely load products first
        console.log("🛍️ Loading products...");
        
        // Validate all products on startup (without showing toast)
        const invalidProducts = window.FikkyShop.validateAll();
        
        // REMOVED: No longer shows toast for product issues
        
        // Show product count
        console.log(`📊 Loaded ${products.length} products`);
        
        hideLoadingScreen();
        initParticles();
        renderCategoryFilters();
        renderProducts();
        updateCart();
        setupEventListeners();
        initAnimations();
        initScrollAnimations();
        initStatsCounter();
        
        // Make sure all sections are visible
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '1';
            section.style.visibility = 'visible';
        });
        
        // Show helper message
        console.log("💡 Tip: Type 'FikkyShop.help()' in console for product management help");
        
    }, 1500);
}

function showLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function hideLoadingScreen() {
    if (elements.loadingScreen) {
        elements.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            elements.loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

function initParticles() {
    if (!elements.particles) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}vw`;
        particle.style.top = `${y}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        
        elements.particles.appendChild(particle);
    }
}

function renderCategoryFilters() {
    // Update categories list
    categories = ["All Products", ...new Set(products.map(p => p.category))];
    
    if (elements.categoryFilters) {
        elements.categoryFilters.innerHTML = categories.map(category => `
            <button class="category-btn ${category === "All Products" ? "active" : ""}" 
                    data-category="${category}">
                ${category}
            </button>
        `).join("");
    }
    
    if (elements.mobileCategories) {
        elements.mobileCategories.innerHTML = categories.map(category => `
            <button class="category-btn ${category === "All Products" ? "active" : ""}" 
                    data-category="${category}">
                ${category}
            </button>
        `).join("");
    }
}

function filterByCategory(category, isMobile = false) {
    activeCategory = category;
    
    // Update active state
    const selector = isMobile ? elements.mobileCategories : elements.categoryFilters;
    if (selector) {
        selector.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });
    }
    
    // Add click animation
    const activeBtn = selector?.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.style.transform = 'scale(0.95)';
        setTimeout(() => activeBtn.style.transform = '', 150);
    }
    
    // Close mobile filter if open
    if (isMobile) {
        closeMobileFilter();
    }
    
    applyFilters();
}

function searchProducts(query) {
    searchQuery = query.toLowerCase();
    
    // Show/hide clear button
    if (elements.searchClear) {
        elements.searchClear.style.display = query.length > 0 ? 'flex' : 'none';
    }
    
    applyFilters();
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        if (!product) return false;
        
        const matchCategory = activeCategory === "All Products" || product.category === activeCategory;
        const matchSearch = 
            (product.name && product.name.toLowerCase().includes(searchQuery)) || 
            (product.category && product.category.toLowerCase().includes(searchQuery)) ||
            (product.description && product.description.toLowerCase().includes(searchQuery));
        return matchCategory && matchSearch;
    });

    renderProducts();
}

function renderProducts() {
    if (!elements.productsGrid) return;
    
    if (filteredProducts.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 48px; color: var(--color-text-muted); margin-bottom: 20px;"></i>
                <h3 style="color: var(--color-text-muted); margin-bottom: 10px;">No products found</h3>
                <p style="color: var(--color-text-muted); margin-bottom: 30px;">
                    Try a different search or browse all categories
                </p>
                <button class="hero-btn secondary" onclick="resetFilters()" style="border: none;">
                    <span>Show All Products</span>
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        `;
        return;
    }
    
    elements.productsGrid.innerHTML = filteredProducts.map((product, index) => {
        // Safe defaults for product data
        const safeProduct = {
            id: product.id || 0,
            name: product.name || 'Unnamed Product',
            category: product.category || 'Uncategorized',
            price: product.price || 0,
            image: product.image || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80',
            description: product.description || 'Premium quality fashion item from Fikky\'s Collection'
        };
        
        return `
        <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <img src="${safeProduct.image}" alt="${safeProduct.name}" class="product-image" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80'">
            <div class="product-info">
                <span class="product-category">${safeProduct.category}</span>
                <h3 class="product-name">${safeProduct.name}</h3>
                <p class="product-description">${safeProduct.description}</p>
                <div class="product-price">${CONFIG.CURRENCY_SYMBOL}${safeProduct.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${safeProduct.id})" 
                            data-tooltip="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Add to Cart</span>
                    </button>
                    <button class="quick-view-btn" onclick="showQuickView(${safeProduct.id})" 
                            data-tooltip="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join("");
    
    // Make sure grid is visible
    elements.productsGrid.style.opacity = '1';
    elements.productsGrid.style.visibility = 'visible';
}

function resetFilters() {
    activeCategory = "All Products";
    searchQuery = "";
    if (elements.searchInput) elements.searchInput.value = "";
    if (elements.searchClear) elements.searchClear.style.display = 'none';
    
    // Reset active buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === "All Products") {
            btn.classList.add('active');
        }
    });
    
    applyFilters();
    showToast('Filters reset successfully', 'success');
}

// QUICK VIEW FUNCTION
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !elements.quickViewBody) return;
    
    // Safe defaults
    const safeProduct = {
        id: product.id || 0,
        name: product.name || 'Unnamed Product',
        category: product.category || 'Uncategorized',
        price: product.price || 0,
        image: product.image || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
        description: product.description || 'Premium quality fashion item from Fikky\'s Collection'
    };
    
    elements.quickViewBody.innerHTML = `
        <div class="quick-view-content-inner">
            <div class="quick-view-image">
                <img src="${safeProduct.image}" alt="${safeProduct.name}" 
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'">
            </div>
            <div class="quick-view-details">
                <span class="product-category">${safeProduct.category}</span>
                <h2 class="product-name">${safeProduct.name}</h2>
                <p class="product-description">${safeProduct.description}</p>
                <div class="product-price">${CONFIG.CURRENCY_SYMBOL}${safeProduct.price.toLocaleString()}</div>
                
                <div class="quick-view-actions">
                    <button class="add-to-cart-btn large" onclick="addToCart(${safeProduct.id}); closeQuickView();" 
                            data-tooltip="Add to cart and close">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Add to Cart</span>
                    </button>
                    <button class="whatsapp-btn" onclick="shareProduct(${safeProduct.id})" 
                            data-tooltip="Share on WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                        <span>Share</span>
                    </button>
                </div>
                
                <div class="product-features">
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Premium Quality</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-shipping-fast"></i>
                        <span>Fast Delivery</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-undo"></i>
                        <span>Easy Returns</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    if (elements.quickViewModal) {
        elements.quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        setTimeout(() => {
            elements.quickViewModal.style.opacity = '1';
        }, 10);
    }
}

function closeQuickView() {
    if (elements.quickViewModal) {
        // Remove active class with animation
        elements.quickViewModal.style.opacity = '0';
        
        setTimeout(() => {
            elements.quickViewModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            elements.quickViewModal.style.opacity = '1';
        }, 300);
    }
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `🌟 *Check out this amazing product from ${CONFIG.SHOP_NAME}!* 🌟\n\n` +
                   `*${product.name}*\n` +
                   `💰 Price: ${CONFIG.CURRENCY_SYMBOL}${product.price.toLocaleString()}\n` +
                   `📂 Category: ${product.category}\n` +
                   `📝 Description: ${product.description || 'Premium quality fashion item'}\n\n` +
                   `Shop now at ${CONFIG.SHOP_NAME}!\n` +
                   `📍 Location: ${CONFIG.SHOP_LOCATION}\n` +
                   `📞 Contact: +${CONFIG.WHATSAPP_NUMBER}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    showToast('Product shared on WhatsApp! 📱', 'success');
    closeQuickView();
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showToast("Product not found", "error");
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showToast(`${product.name} added to cart! 🛒`, 'success');

    // Cart button animation
    if (elements.cartBtn) {
        elements.cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            if (elements.cartBtn) elements.cartBtn.style.transform = '';
        }, 300);
    }
}

function updateCart() {
    // Save to localStorage
    localStorage.setItem('fikky-cart', JSON.stringify(cart));
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (elements.cartCount) {
        elements.cartCount.textContent = totalItems;
    }
    
    // Render cart items if sidebar is open
    if (elements.cartSidebar && elements.cartSidebar.classList.contains("active")) {
        renderCartItems();
    }
}

function renderCartItems() {
    if (!elements.cartItems) return;
    
    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p class="cart-empty-message" style="color: var(--color-text-muted); font-size: 14px; margin-top: 10px;">
                    Add some products to get started!
                </p>
                <button class="hero-btn secondary" onclick="closeCartSidebar()" style="border: none; margin-top: 20px;">
                    <span>Continue Shopping</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        if (elements.cartFooter) {
            elements.cartFooter.style.display = "none";
        }
        
        // Ensure total is set to ₦0
        if (elements.totalPrice) {
            elements.totalPrice.textContent = `${CONFIG.CURRENCY_SYMBOL}0`;
        }
        return;
    }

    if (elements.cartFooter) {
        elements.cartFooter.style.display = "block";
    }
    
    elements.cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80'">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${CONFIG.CURRENCY_SYMBOL}${item.price.toLocaleString()} × ${item.quantity}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (elements.totalPrice) {
        elements.totalPrice.textContent = `${CONFIG.CURRENCY_SYMBOL}${total.toLocaleString()}`;
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
            showToast(`Updated ${item.name} quantity to ${item.quantity}`, 'info');
        }
    }
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        showToast(`${item.name} removed from cart`, 'error');
        
        // Check if cart is empty after removal
        if (cart.length === 0) {
            // If cart is empty, reset the total display
            setTimeout(() => {
                if (elements.totalPrice) {
                    elements.totalPrice.textContent = `${CONFIG.CURRENCY_SYMBOL}0`;
                }
                
                // Also update the cart count animation
                if (elements.cartCount) {
                    elements.cartCount.textContent = '0';
                }
                
                // Show empty cart message
                showToast("Cart is now empty", "info");
            }, 100);
        }
    }
}

// Clear Cart Function
function clearCart() {
    // Clear cart array
    cart = [];
    
    // Save to localStorage
    localStorage.setItem('fikky-cart', JSON.stringify(cart));
    
    // Update cart count to 0
    if (elements.cartCount) {
        elements.cartCount.textContent = '0';
        // Add animation for visual feedback
        elements.cartCount.style.transform = 'scale(1.5)';
        setTimeout(() => {
            elements.cartCount.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Update total price to ₦0
    if (elements.totalPrice) {
        elements.totalPrice.textContent = `${CONFIG.CURRENCY_SYMBOL}0`;
    }
    
    // Update cart display if sidebar is open
    if (elements.cartSidebar && elements.cartSidebar.classList.contains("active")) {
        renderCartItems();
    }
    
    // Show success message
    showToast("Cart cleared successfully", "success");
}

function openCart() {
    renderCartItems();
    if (elements.cartOverlay) elements.cartOverlay.classList.add("active");
    if (elements.cartSidebar) elements.cartSidebar.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Ensure cart view is shown
    if (elements.cartContent) elements.cartContent.style.display = "block";
    if (elements.checkoutForm) {
        elements.checkoutForm.style.display = "none";
        elements.checkoutForm.classList.remove("active");
    }
}

function closeCartSidebar() {
    if (elements.cartOverlay) elements.cartOverlay.classList.remove("active");
    if (elements.cartSidebar) elements.cartSidebar.classList.remove("active");
    document.body.style.overflow = "auto";
}

function showCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }

    if (!elements.cartContent || !elements.checkoutForm) return;

    // Hide cart items and show checkout form with animation
    elements.cartContent.style.opacity = "0";
    elements.cartContent.style.transform = "translateX(-20px)";
    
    setTimeout(() => {
        elements.cartContent.style.display = "none";
        
        elements.checkoutForm.style.display = "block";
        elements.checkoutForm.classList.add("active");
        elements.checkoutForm.style.opacity = "0";
        elements.checkoutForm.style.transform = "translateX(20px)";
        
        setTimeout(() => {
            elements.checkoutForm.style.opacity = "1";
            elements.checkoutForm.style.transform = "none";
            
            // Focus on first input
            const customerName = document.getElementById("customerName");
            if (customerName) customerName.focus();
        }, 50);
    }, 300);
}

function backToCartView() {
    if (!elements.checkoutForm || !elements.cartContent) return;

    // Hide checkout form
    elements.checkoutForm.style.opacity = "0";
    elements.checkoutForm.style.transform = "translateX(20px)";
    
    setTimeout(() => {
        elements.checkoutForm.style.display = "none";
        elements.checkoutForm.classList.remove("active");
        
        // Show cart items again
        elements.cartContent.style.display = "block";
        elements.cartContent.style.opacity = "0";
        elements.cartContent.style.transform = "translateX(-20px)";
        
        setTimeout(() => {
            elements.cartContent.style.opacity = "1";
            elements.cartContent.style.transform = "none";
        }, 50);
    }, 300);
}

// Form Handlers
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("customerName")?.value.trim();
    const phone = document.getElementById("customerPhone")?.value.trim();
    const email = document.getElementById("customerEmail")?.value.trim();
    const address = document.getElementById("customerAddress")?.value.trim();
    const notes = document.getElementById("customerNotes")?.value.trim();
    
    // Validate required fields
    if (!name || !phone || !address) {
        showToast("Please fill in all required fields", "error");
        return;
    }
    
    // Validate phone number
    const cleanPhone = phone.replace(/\D/g, '');
    if (!/^234\d{10}$/.test(cleanPhone)) {
        showToast("Please enter a valid Nigerian phone number (234XXXXXXXXXX)", "error");
        return;
    }
    
    // Create order message
    let message = `*🛍️ NEW ORDER - ${CONFIG.SHOP_NAME}*\n\n`;
    message += `*Customer Details:*\n`;
    message += `👤 *Name:* ${name}\n`;
    message += `📱 *Phone:* ${phone}\n`;
    if (email) message += `📧 *Email:* ${email}\n`;
    message += `📍 *Address:* ${address}\n`;
    
    message += `\n*Order Summary:*\n`;
    let orderTotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        orderTotal += itemTotal;
        message += `\n*${index + 1}. ${item.name}*\n`;
        message += `   Category: ${item.category}\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: ${CONFIG.CURRENCY_SYMBOL}${item.price.toLocaleString()}\n`;
        message += `   Total: ${CONFIG.CURRENCY_SYMBOL}${itemTotal.toLocaleString()}\n`;
    });
    
    message += `\n*💰 Order Total: ${CONFIG.CURRENCY_SYMBOL}${orderTotal.toLocaleString()}*\n`;
    
    if (notes) {
        message += `\n*📝 Customer Notes:*\n${notes}\n`;
    }
    
    message += `\n*Delivery Information:*\n`;
    message += `📍 Location: ${CONFIG.SHOP_LOCATION}\n`;
    message += `🚚 Weekday Delivery: ${CONFIG.STORE_INFO.deliveryWeekdays}\n`;
    message += `📦 Weekend Delivery: ${CONFIG.STORE_INFO.deliveryWeekends}\n`;
    
    message += `\n📅 *Order Date:* ${new Date().toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}\n`;
    
    message += `\n💖 *Thank you for shopping with ${CONFIG.SHOP_NAME}!* 💖`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Show loading state on the WhatsApp button
    const whatsappBtn = elements.orderForm?.querySelector('.whatsapp-btn');
    const originalBtnText = whatsappBtn?.innerHTML;
    
    if (whatsappBtn) {
        whatsappBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        whatsappBtn.disabled = true;
    }
    
    // Open WhatsApp in new tab
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Show success message
        showToast("Order sent to WhatsApp! 📱 Cart has been cleared.", "success");
        
        // Clear cart and reset total
        clearCart();
        
        // Reset the form
        if (elements.orderForm) elements.orderForm.reset();
        
        // Go back to cart view
        backToCartView();
        
        // Reset WhatsApp button
        setTimeout(() => {
            if (whatsappBtn) {
                whatsappBtn.innerHTML = originalBtnText;
                whatsappBtn.disabled = false;
            }
            
            // Close cart sidebar after a delay
            setTimeout(() => {
                closeCartSidebar();
            }, 2000);
        }, 1000);
        
    }, 1000);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("contactName")?.value.trim();
    const email = document.getElementById("contactEmail")?.value.trim();
    const phone = document.getElementById("contactPhone")?.value.trim();
    const subject = document.getElementById("contactSubject")?.value.trim();
    const message = document.getElementById("contactMessage")?.value.trim();
    
    if (!name || !email || !message || !subject) {
        showToast("Please fill in all required fields", "error");
        return;
    }
    
    // Create WhatsApp message
    let whatsappMessage = `*📞 CONTACT FORM - ${CONFIG.SHOP_NAME}*\n\n`;
    whatsappMessage += `*Subject:* ${subject}\n\n`;
    whatsappMessage += `*Customer Details:*\n`;
    whatsappMessage += `👤 *Name:* ${name}\n`;
    whatsappMessage += `📧 *Email:* ${email}\n`;
    if (phone) whatsappMessage += `📱 *Phone:* ${phone}\n`;
    
    whatsappMessage += `\n*Message:*\n${message}\n`;
    whatsappMessage += `\n📅 *Submitted:* ${new Date().toLocaleDateString('en-NG')}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Show loading state
    const submitBtn = elements.contactForm?.querySelector(".submit-btn");
    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Open WhatsApp after delay
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            if (elements.contactForm) elements.contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            showToast("Message sent to WhatsApp! We'll respond shortly.", "success");
        }, 800);
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    if (!elements.newsletterForm) return;
    
    const emailInput = elements.newsletterForm.querySelector('input[type="email"]');
    const email = emailInput?.value.trim();
    
    if (!email) {
        showToast("Please enter your email address", "error");
        return;
    }
    
    // Simulate API call
    const submitBtn = elements.newsletterForm.querySelector('button');
    if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            if (emailInput) emailInput.value = '';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            showToast("Thank you for subscribing! 🎉", "success");
        }, 1500);
    }
}

// Toast Notification
function showToast(message, type = "info") {
    if (!elements.toast) return;
    
    elements.toast.textContent = message;
    elements.toast.className = `toast ${type}`;
    elements.toast.classList.add('show');
    
    // Add icon based on type
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    
    elements.toast.innerHTML = `<i class="${icon}"></i> ${message}`;
    
    // Auto hide
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// Mobile Filter
function openMobileFilter() {
    if (elements.mobileFilterOverlay) {
        elements.mobileFilterOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileFilter() {
    if (elements.mobileFilterOverlay) {
        elements.mobileFilterOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Mobile Menu
function toggleMobileMenu() {
    if (elements.hamburgerMenu && elements.navMenu) {
        elements.hamburgerMenu.classList.toggle("active");
        elements.navMenu.classList.toggle("active");
        document.body.style.overflow = elements.navMenu.classList.contains("active") ? "hidden" : "auto";
    }
}

// Animations
function initAnimations() {
    // Hero content animation
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) heroContent.classList.add('visible');
    }, 100);
    
    // Animate header on scroll
    window.addEventListener('scroll', () => {
        if (elements.header) {
            if (window.scrollY > 50) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
        }
        
        // Show/hide back to top button
        if (elements.backToTop) {
            if (window.scrollY > 300) {
                elements.backToTop.classList.add('visible');
            } else {
                elements.backToTop.classList.remove('visible');
            }
        }
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Event Listeners
function setupEventListeners() {
    // Cart functionality
    if (elements.cartBtn) elements.cartBtn.addEventListener("click", openCart);
    if (elements.cartOverlay) elements.cartOverlay.addEventListener("click", closeCartSidebar);
    if (elements.closeCart) elements.closeCart.addEventListener("click", closeCartSidebar);
    if (elements.checkoutBtn) elements.checkoutBtn.addEventListener("click", showCheckout);
    if (elements.continueShopping) elements.continueShopping.addEventListener("click", closeCartSidebar);
    if (elements.backToCart) elements.backToCart.addEventListener("click", backToCartView);
    
    // Order form
    if (elements.orderForm) elements.orderForm.addEventListener("submit", handleOrderSubmit);
    
    // Search functionality
    if (elements.searchInput) {
        elements.searchInput.addEventListener("input", (e) => searchProducts(e.target.value));
    }
    
    if (elements.searchClear) {
        elements.searchClear.addEventListener("click", () => {
            if (elements.searchInput) elements.searchInput.value = '';
            elements.searchClear.style.display = 'none';
            searchProducts('');
        });
    }
    
    // Category filters
    if (elements.categoryFilters) {
        elements.categoryFilters.addEventListener("click", (e) => {
            if (e.target.classList.contains('category-btn')) {
                filterByCategory(e.target.dataset.category);
            }
        });
    }
    
    // Mobile categories
    if (elements.mobileCategories) {
        elements.mobileCategories.addEventListener("click", (e) => {
            if (e.target.classList.contains('category-btn')) {
                filterByCategory(e.target.dataset.category, true);
            }
        });
    }
    
    // Filter toggle
    if (elements.filterToggle) {
        elements.filterToggle.addEventListener("click", openMobileFilter);
    }
    
    if (elements.closeFilter) {
        elements.closeFilter.addEventListener("click", closeMobileFilter);
    }
    
    // Quick View
    if (elements.quickViewClose) {
        elements.quickViewClose.addEventListener("click", closeQuickView);
    }
    
    if (elements.quickViewModal) {
        elements.quickViewModal.addEventListener("click", (e) => {
            if (e.target === elements.quickViewModal) {
                closeQuickView();
            }
        });
    }
    
    // Mobile menu
    if (elements.hamburgerMenu) {
        elements.hamburgerMenu.addEventListener("click", toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (elements.navMenu && elements.hamburgerMenu) {
            if (!elements.navMenu.contains(e.target) && 
                !elements.hamburgerMenu.contains(e.target) && 
                elements.navMenu.classList.contains("active")) {
                toggleMobileMenu();
            }
        }
    });
    
    // Close mobile menu when clicking nav links
    if (elements.navMenu) {
        elements.navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", toggleMobileMenu);
        });
    }
    
    // Forms
    if (elements.contactForm) {
        elements.contactForm.addEventListener("submit", handleContactSubmit);
    }
    
    if (elements.newsletterForm) {
        elements.newsletterForm.addEventListener("submit", handleNewsletterSubmit);
    }
    
    // Back to top
    if (elements.backToTop) {
        elements.backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Track order - Direct to WhatsApp
    function trackOrder() {
        const whatsappURL = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
        window.open(whatsappURL, '_blank');
    }
    
    if (elements.trackOrderBtn) {
        elements.trackOrderBtn.addEventListener("click", (e) => {
            e.preventDefault();
            trackOrder();
        });
    }
    
    if (elements.trackOrderLink) {
        elements.trackOrderLink.addEventListener("click", (e) => {
            e.preventDefault();
            trackOrder();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = elements.header ? elements.header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close cart with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (elements.cartSidebar && elements.cartSidebar.classList.contains("active")) closeCartSidebar();
            if (elements.navMenu && elements.navMenu.classList.contains("active")) toggleMobileMenu();
            if (elements.quickViewModal && elements.quickViewModal.classList.contains("active")) closeQuickView();
            if (elements.mobileFilterOverlay && elements.mobileFilterOverlay.classList.contains("active")) closeMobileFilter();
        }
    });
    
    // Auto-fill Nigeria phone code
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener("focus", function() {
            if (!this.value.startsWith("234")) {
                this.value = "234";
            }
        });
        
        input.addEventListener("input", function() {
            // Remove any non-numeric characters except leading +
            this.value = this.value.replace(/[^\d+]/g, '');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure body is visible immediately
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    
    // Call init
    init();
    
    // Fallback: Make sure products render on window load
    window.addEventListener('load', function() {
        setTimeout(() => {
            renderProducts();
            
            // Force visibility of all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.opacity = '1';
                section.style.visibility = 'visible';
            });
        }, 1000);
    });
});

// Add tooltip functionality
document.addEventListener('mouseover', function(e) {
    if (e.target.hasAttribute('data-tooltip')) {
        const tooltip = e.target.getAttribute('data-tooltip');
        if (tooltip) {
            e.target.setAttribute('title', tooltip);
        }
    }
});
