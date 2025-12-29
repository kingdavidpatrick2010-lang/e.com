// Configuration
const CONFIG = {
    WHATSAPP_NUMBER: "2348160227731",
    CURRENCY_SYMBOL: "",
    SHOP_NAME: "Fikky's Collection",
    SHOP_LOCATION: "Dutse/Kuje Abuja",
    CEO_NAME: "Tosin Lawal",
    CEO_TITLE: "Founder & CEO",
    CEO_QUOTE: "Fashion is not just about clothing, it's about creating experiences that empower individuals to express their authentic selves."
};

// Product Data
const products = [
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
        name: "Hand Fans",
        category: "Accessories",
        price: 7000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Rt5C7yKcHaeFD6NCMRLM_WzNIMKx2jeJPg&s",
        description: "Elegant hand fans for style and comfort"
    },
    {
        id: 3,
        name: "Crop Tops",
        category: "Casual Wear",
        price: 7000,
        image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/9818082/1.jpg?5043",
        description: "Trendy crop tops in various designs"
    },
    {
        id: 4,
        name: "Shirt",
        category: "Formal Wear",
        price: 7000,
        image: "https://i5.walmartimages.com/seo/George-Men-s-Assorted-Crew-T-Shirts-6-Pack_9a49c841-5808-4fe0-b7ab-15d040df38f4.d976930a03bcef0f6b055077f0ee3a77.jpeg",
        description: "Classic formal shirts for professional look"
    },
    {
        id: 5,
        name: "Premium Sneakers",
        category: "Footwear",
        price: 33000,
        image: "https://www.cartrollers.com/wp-content/uploads/2022/11/PREMIUM-UNISEX-FASHION-STELLAR-SNEAKERS-2.jpeg",
        description: "Luxury sneakers with premium materials"
    },
    {
        id: 6,
        name: "Leggings",
        category: "Knitwear",
        price: 12000,
        image: "https://hips.hearstapps.com/hmg-prod/images/whm250110-digital-ecomm-leggingswithpockets-lululemon-4474-68deb0bcb4d87.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
        description: "Comfortable and stylish leggings"
    },
    {
        id: 7,
        name: "Designer Top",
        category: "Outerwear",
        price: 10000,
        image: "IMG-20251121-WA0018.jpg",
        description: "Exclusive designer top collection"
    },
    {
        id: 8,
        name: "Sunset Lamp",
        category: "Accessories",
        price: 10500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkNiZOLksA4w9T4t72f_PobEb3CASwJI8JA&s",
        description: "Beautiful sunset lamp for ambient lighting"
    },
    {
        id: 9,
        name: "Luxury Sweatshirt",
        category: "Casual Wear",
        price: 29000,
        image: "https://www.cartrollers.com/wp-content/uploads/2024/12/QUALITY-CASUAL-DESIGNER-LONG-SLEEVE-SWEATSHIRTS.jpeg",
        description: "Premium quality luxury sweatshirt"
    },
    {
        id: 10,
        name: "NGM Collection",
        category: "Outerwear",
        price: 16000,
        image: "IMG-20251119-WA0170.jpg",
        description: "Exclusive NGM collection pieces"
    },
    {
        id: 11,
        name: "Quality Tees",
        category: "Casual Wear",
        price: 17000,
        image: "IMG-20251119-WA0125.jpg",
        description: "High quality t-shirts collection"
    },
    {
        id: 12,
        name: "Luxury Big Tops",
        category: "Footwear",
        price: 15500,
        image: "IMG-20251119-WA0138.jpg",
        description: "Trendy luxury big tops"
    },
    {
        id: 13,
        name: "Phone Holder with Amplifier",
        category: "Accessories",
        price: 16000,
        image: "IMG-20251119-WA0140.jpg",
        description: "F19 mobile phone holder with screen amplifier"
    },
    {
        id: 14,
        name: "Stanley Cup",
        category: "Accessories",
        price: 17000,
        image: "IMG-20251119-WA0141.jpg",
        description: "Premium Stanley cup collection"
    },
    {
        id: 15,
        name: "Premium Denim Jean",
        category: "Casual Wear",
        price: 45000,
        image: "IMG-20251119-WA0146.jpg",
        description: "Premium quality denim jeans"
    },
    {
        id: 16,
        name: "Joggers",
        category: "Casual Wear",
        price: 20000,
        image: "IMG-20251119-WA0148.jpg",
        description: "Comfortable and stylish joggers"
    },
    {
        id: 17,
        name: "Ladies Shorts",
        category: "Outerwear",
        price: 10500,
        image: "IMG-20251119-WA0150.jpg",
        description: "Quality shorts for ladies"
    },
    {
        id: 18,
        name: "Amapiano Joggers",
        category: "Casual Wear",
        price: 20000,
        image: "IMG-20251119-WA0161.jpg",
        description: "Trendy Amapiano style joggers"
    },
    {
        id: 19,
        name: "Booty Shorts",
        category: "Inner Wear",
        price: 7500,
        image: "IMG-20251121-WA0049.jpg",
        description: "Stylish booty shorts"
    },
    {
        id: 20,
        name: "Trendy Cap",
        category: "Casual Wear",
        price: 10500,
        image: "IMG-20251121-WA0039.jpg",
        description: "Fashionable trendy caps"
    },
    {
        id: 21,
        name: "Luxury Hoodies",
        category: "Casual Wear",
        price: 35000,
        image: "IMG-20251119-WA0165.jpg",
        description: "Premium luxury hoodies collection"
    },
    {
        id: 22,
        name: "Armless Polo",
        category: "Casual Wear",
        price: 25000,
        image: "IMG-20251122-WA0044.jpg",
        description: "Luxury armless polo shirts"
    },
    {
        id: 23,
        name: "Armless Up and Down",
        category: "Casual Wear",
        price: 30000,
        image: "IMG-20251122-WA0039.jpg",
        description: "Stylish armless up and down set"
    },
    {
        id: 24,
        name: "Luxury Sweat Top",
        category: "Casual Wear",
        price: 29000,
        image: "IMG-20251124-WA0073.jpg",
        description: "Premium sweat tops collection"
    },
    {
        id: 25,
        name: "Luxury Crop Top",
        category: "Casual Wear",
        price: 27000,
        image: "IMG-20251124-WA0078.jpg",
        description: "Exclusive luxury crop tops"
    },
    {
        id: 26,
        name: "Combat Shorts",
        category: "Casual Wear",
        price: 23500,
        image: "IMG-20251124-WA0082.jpg",
        description: "Stylish luxury combat shorts"
    }
];

// Extract unique categories
const categories = ["All Products", ...new Set(products.map(p => p.category))];

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
    trackOrderBtn: document.getElementById('trackOrderBtn')
};

// Initialize App
function init() {
    // First, ensure body is visible
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    
    // Show loading screen
    showLoadingScreen();
    
    // Initialize after loading
    setTimeout(() => {
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
        
        // Force products grid visibility
        if (elements.productsGrid) {
            elements.productsGrid.style.opacity = '1';
            elements.productsGrid.style.visibility = 'visible';
        }
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
        if (query.length > 0) {
            elements.searchClear.style.display = 'flex';
        } else {
            elements.searchClear.style.display = 'none';
        }
    }
    
    applyFilters();
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        const matchCategory = activeCategory === "All Products" || product.category === activeCategory;
        const matchSearch = 
            product.name.toLowerCase().includes(searchQuery) || 
            product.category.toLowerCase().includes(searchQuery) ||
            (product.description && product.description.toLowerCase().includes(searchQuery));
        return matchCategory && matchSearch;
    });

    renderProducts();
}

function renderProducts() {
    if (!elements.productsGrid) return;
    
    console.log(`Rendering ${filteredProducts.length} products`);
    
    if (filteredProducts.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <i class="fas fa-search"></i>
                <p>No products found. Try a different search or category.</p>
                <button class="hero-btn secondary" onclick="resetFilters()">
                    <span>Reset Filters</span>
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        `;
        return;
    }
    
    elements.productsGrid.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80'">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description || 'Premium quality fashion item from Fikky\'s Collection'}</p>
                <div class="product-price">${CONFIG.CURRENCY_SYMBOL}${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" 
                            data-tooltip="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Add to Cart</span>
                    </button>
                    <button class="quick-view-btn" onclick="showQuickView(${product.id})" 
                            data-tooltip="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
    
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

function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !elements.quickViewBody) return;
    
    elements.quickViewBody.innerHTML = `
        <div class="quick-view-content-inner">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'">
            </div>
            <div class="quick-view-details">
                <span class="product-category">${product.category}</span>
                <h2 class="product-name">${product.name}</h2>
                <p class="product-description">${product.description || 'Premium quality fashion item from Fikky\'s Collection'}</p>
                <div class="product-price">${CONFIG.CURRENCY_SYMBOL}${product.price.toLocaleString()}</div>
                <div class="quick-view-actions">
                    <button class="add-to-cart-btn large" onclick="addToCart(${product.id}); closeQuickView();">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Add to Cart</span>
                    </button>
                    <button class="whatsapp-btn" onclick="shareProduct(${product.id})">
                        <i class="fab fa-whatsapp"></i>
                        <span>Share on WhatsApp</span>
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
    
    if (elements.quickViewModal) {
        elements.quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeQuickView() {
    if (elements.quickViewModal) {
        elements.quickViewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Check out this amazing product from ${CONFIG.SHOP_NAME}!\n\n` +
                   `*${product.name}*\n` +
                   `Category: ${product.category}\n` +
                   `Price: ${CONFIG.CURRENCY_SYMBOL}${product.price.toLocaleString()}\n` +
                   `Description: ${product.description || 'Premium quality fashion item'}\n\n` +
                   `Shop now at Fikky's Collection! 🛍️`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    showToast('Product shared on WhatsApp!', 'success');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
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
                <button class="hero-btn secondary" onclick="closeCartSidebar()">
                    <span>Continue Shopping</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        if (elements.cartFooter) {
            elements.cartFooter.style.display = "none";
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
    }
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
    message += `🚚 Weekday Delivery: 6-7pm via dispatch rider\n`;
    message += `📦 Weekend Delivery: Saturday & Sunday\n`;
    
    message += `\n📅 *Order Date:* ${new Date().toLocaleDateString('en-NG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}\n`;
    
    message += `\n💖 *Thank you for shopping with Fikky's Collection!* 💖`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showToast("Order sent to WhatsApp! 📱 Please check your messages.", "success");
    
    // Clear cart and close sidebar
    setTimeout(() => {
        cart = [];
        updateCart();
        if (elements.orderForm) elements.orderForm.reset();
        closeCartSidebar();
    }, 1500);
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
    
    // Quick view
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
    
    // Track order
    if (elements.trackOrderBtn) {
        elements.trackOrderBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const message = encodeURIComponent(`*TRACK ORDER*\n\nHello, I would like to track my order from ${CONFIG.SHOP_NAME}.`);
            window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`, '_blank');
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
