// **IMPORTANT: Replace this with your actual WhatsApp number (include country code, no + or spaces)**
const YOUR_WHATSAPP_NUMBER = "2348160227731" // Example: "14155552671" for US number

// Currency configuration for easy editing
const CURRENCY_SYMBOL = "₦" // Nigerian Naira
const CURRENCY_CODE = "NGN"

const CATEGORIES = [
  "Outerwear",
  "Dresses",
  "Accessories",
  "Formal Wear",
  "Footwear",
  "Knitwear",
  "Denim",
  "Casual Wear",
]

// Product Data - 20 Premium Fashion Items with Real Images
const products = [
  {
    id: 1,
    name: "baggy jeans",
    category: "casual wear",
    price: 27000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTsRphh6hoxI207o_gnFm10tC2Rd5yDC-qg&s",
  },
  {
    id: 2,
    name: "hand fans",
    category: "Accessories",
    price: 7000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Rt5C7yKcHaeFD6NCMRLM_WzNIMKx2jeJPg&s",
  },
  {
    id: 3,
    name: "croptops",
    category: "casual wear",
    price: 4000,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/9818082/1.jpg?5043",
  },
  {
    id: 4,
    name: "shirt",
    category: "Formal Wear",
    price: 7000,
    image: "https://i5.walmartimages.com/seo/George-Men-s-Assorted-Crew-T-Shirts-6-Pack_9a49c841-5808-4fe0-b7ab-15d040df38f4.d976930a03bcef0f6b055077f0ee3a77.jpeg",
  },
  {
    id: 5,
    name: "Premium Sneakers",
    category: "Footwear",
    price: 33000,
    image: "https://www.cartrollers.com/wp-content/uploads/2022/11/PREMIUM-UNISEX-FASHION-STELLAR-SNEAKERS-2.jpeg",
  },
  {
    id: 6,
    name: "leggings",
    category: "Knitwear",
    price: 12000,
    image: "https://hips.hearstapps.com/hmg-prod/images/whm250110-digital-ecomm-leggingswithpockets-lululemon-4474-68deb0bcb4d87.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 7,
    name: "Top",
    category: "outwears",
    price: 5000,
    image: "IMG-20251121-WA0018.jpg",
  },
  {
    id: 8,
    name: "Sunset lamp",
    category: "Accessories",
    price: 10500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkNiZOLksA4w9T4t72f_PobEb3CASwJI8JA&s",
  },
  {
    id: 9,
    name: "Luxury sweat shirt",
    category: "casual wear",
    price: 29000,
    image: "https://www.cartrollers.com/wp-content/uploads/2024/12/QUALITY-CASUAL-DESIGNER-LONG-SLEEVE-SWEATSHIRTS.jpeg",
  },
  {
    id: 10,
    name: "NGM",
    category: "Outerwear",
    price: 16000,
    image: "IMG-20251119-WA0170.jpg",
  },
  {
    id: 11,
    name: "Quality Tees",
    category: "Casual Wear",
    price: 17000,
    image: "IMG-20251119-WA0125.jpg",
  },
  {
    id: 12,
    name: "Luxury big Tops",
    category: "Footwear",
    price: 15500,
    image: "IMG-20251119-WA0138.jpg",
  },
  {
    id: 13,
    name: "F19 mobile phone holderwith screen amplifier",
    category: "Accessories",
    price: 16000,
    image: "IMG-20251119-WA0140.jpg",
  },
  {
    id: 14,
    name: "Stanley cup",
    category: "Accessories",
    price: 17000,
    image: "IMG-20251119-WA0141.jpg",
  },
  {
    id: 15,
    name: "Premium quality denim jean",
    category: "casual wear",
    price: 45000,
    image: "IMG-20251119-WA0146.jpg",
  },
  {
    id: 16,
    name: "joggers",
    category: "casual wear",
    price: 20000,
    image: "IMG-20251119-WA0148.jpg",
  },
  {
    id: 17,
    name: "Quality short for ladies",
    category: "outwears",
    price: 10500,
    image: "IMG-20251119-WA0150.jpg",
  },
  {
    id: 18,
    name: "Amapiano joggers",
    category: "Casual Wear",
    price: 20000,
    image: "IMG-20251119-WA0161.jpg",
  },
  {
    id: 19,
    name: "Booty shorts",
    category: "inner wears",
    price: 7500,
    image: "IMG-20251121-WA0049.jpg",
  },
  {
    id: 20,
    name: "trendy cap",
    category: "casual wear",
    price:10500,
    image:"IMG-20251121-WA0039.jpg",
  },
   {
    id: 21,
    name: "Luxury hoodies",
    category: "casual wear",
    price: 35000,
    image:"IMG-20251119-WA0165.jpg",
  },
     {
    id: 22,
    name: "Luxury Armless polo",
    category: "casual wear",
    price: 25000,
    image:"IMG-20251122-WA0044.jpg",
  },
    {
    id: 23,
    name: "Luxury Armless up and down",
    category: "casual wear",
    price: 30000,
    image:"IMG-20251122-WA0039.jpg",
  },
]

// Cart State
let cart = []
let filteredProducts = [...products]
let activeCategory = "all"
let searchQuery = ""

// DOM Elements
const productsGrid = document.getElementById("productsGrid")
const cartBtn = document.getElementById("cartBtn")
const cartOverlay = document.getElementById("cartOverlay")
const cartSidebar = document.getElementById("cartSidebar")
const closeCart = document.getElementById("closeCart")
const cartCount = document.getElementById("cartCount")
const cartItems = document.getElementById("cartItems")
const totalPrice = document.getElementById("totalPrice")
const checkoutBtn = document.getElementById("checkoutBtn")
const cartContent = document.getElementById("cartContent")
const checkoutForm = document.getElementById("checkoutForm")
const backToCart = document.getElementById("backToCart")
const orderForm = document.getElementById("orderForm")
const searchInput = document.getElementById("searchInput")
const categoryFilters = document.getElementById("categoryFilters")
const hamburgerMenu = document.getElementById("hamburgerMenu")
const navMenu = document.getElementById("navMenu")
const contactForm = document.getElementById("contactForm")

// Initialize App
function init() {
  renderCategoryFilters()
  renderProducts()
  updateCart()
  attachEventListeners()
  initAnimations()
}

function initAnimations() {
  // Hero Animation
  setTimeout(() => {
    document.querySelector(".hero-content").classList.add("visible")
  }, 100)

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })
}

function renderCategoryFilters() {
  const categories = ["all", ...CATEGORIES]

  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button class="category-btn ${category === "all" ? "active" : ""}" data-category="${category}">
            ${category === "all" ? "All Products" : category}
        </button>
    `,
    )
    .join("")

  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => filterByCategory(btn.dataset.category, btn))
  })
}

function filterByCategory(category, btnElement) {
  activeCategory = category

  document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"))
  btnElement.classList.add("active")

  btnElement.style.transform = "scale(1.05)"
  setTimeout(() => (btnElement.style.transform = ""), 300)

  applyFilters()
}

function searchProducts(query) {
  searchQuery = query.toLowerCase()
  applyFilters()
}

function applyFilters() {
  filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory
    const matchSearch =
      product.name.toLowerCase().includes(searchQuery) || product.category.toLowerCase().includes(searchQuery)
    return matchCategory && matchSearch
  })

  renderProducts()
}

function renderProducts() {
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <p>No products found. Try a different search or category.</p>
            </div>
        `
    return
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product, index) => `
        <div class="product-card animate-on-scroll" style="animation-delay: ${index * 100}ms">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${CURRENCY_SYMBOL}${product.price.toLocaleString("en-NG")}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  updateCart()

  const btn = event.target
  btn.style.transform = "scale(0.95)"
  setTimeout(() => (btn.style.transform = "scale(1)"), 100)

  const originalText = btn.textContent
  btn.textContent = "Added!"
  btn.style.background = "var(--color-primary)"
  btn.style.color = "var(--color-background)"

  setTimeout(() => {
    btn.textContent = originalText
    btn.style.background = ""
    btn.style.color = ""
  }, 1000)
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 2L7 6H3l3 14h12l3-14h-4L15 2H9z"/>
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="18" cy="21" r="1"/>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `
    checkoutBtn.disabled = true
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${CURRENCY_SYMBOL}${(item.price * item.quantity).toLocaleString("en-NG")}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `,
      )
      .join("")
    checkoutBtn.disabled = false
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  totalPrice.textContent = `${CURRENCY_SYMBOL}${total.toLocaleString("en-NG")}`
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      updateCart()
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCart()
}

function openCart() {
  cartOverlay.classList.add("active")
  cartSidebar.classList.add("active")
  cartContent.style.display = "block"
  checkoutForm.classList.remove("active")
}

function closeCartSidebar() {
  cartOverlay.classList.remove("active")
  cartSidebar.classList.remove("active")
}

function showCheckout() {
  if (cart.length === 0) return

  // Hide cart items and footer
  const cartFooter = document.getElementById("cartFooter")
  cartFooter.style.display = "none"

  document.getElementById("cartItems").style.opacity = "0"
  document.getElementById("cartItems").style.transform = "translateX(-20px)"
  document.getElementById("cartItems").style.transition = "all 0.3s ease"

  setTimeout(() => {
    document.getElementById("cartItems").style.display = "none"
    document.getElementById("cartItems").style.opacity = "1"
    document.getElementById("cartItems").style.transform = "none"

    // Show checkout form with smooth animation
    checkoutForm.classList.add("active")
    checkoutForm.style.opacity = "0"
    checkoutForm.style.transform = "translateX(20px)"
    checkoutForm.style.transition = "all 0.3s ease"

    setTimeout(() => {
      checkoutForm.style.opacity = "1"
      checkoutForm.style.transform = "none"
      document.getElementById("customerName").focus()
    }, 50)
  }, 300)
}

function backToCartView() {
  // Hide checkout form
  checkoutForm.style.opacity = "0"
  checkoutForm.style.transform = "translateX(20px)"

  setTimeout(() => {
    checkoutForm.classList.remove("active")

    // Show cart items again
    const cartFooter = document.getElementById("cartFooter")
    cartFooter.style.display = "block"

    const cartItems = document.getElementById("cartItems")
    cartItems.style.display = "block"
    cartItems.style.opacity = "0"
    cartItems.style.transform = "translateX(-20px)"

    setTimeout(() => {
      cartItems.style.opacity = "1"
      cartItems.style.transform = "none"
    }, 50)
  }, 300)
}

function handleOrderSubmit(e) {
  e.preventDefault()

  const name = document.getElementById("customerName").value
  const phone = document.getElementById("customerPhone").value
  const email = document.getElementById("customerEmail").value
  const address = document.getElementById("customerAddress").value
  const notes = document.getElementById("customerNotes").value

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  let message = `*Hello Fikky😊 I would like to place an order*\n\n`
  message += `*Customer Details:*\n`
  message += `Name: ${name}\n`
  message += `Phone: ${phone}\n`
  message += `Email: ${email}\n`
  message += `Address: ${address}\n\n`

  message += `*Order Items:*\n`
  cart.forEach((item) => {
    message += `• ${item.name} x${item.quantity} - ${CURRENCY_SYMBOL}${(item.price * item.quantity).toLocaleString("en-NG")}\n`
  })

  message += `\n*Total: ${CURRENCY_SYMBOL}${total.toLocaleString("en-NG")}*\n`

  if (notes) {
    message += `\n*Notes:* ${notes}`
  }

  const encodedMessage = encodeURIComponent(message)
  const whatsappURL = `https://wa.me/${2348160227731}?text=${encodedMessage}`

  window.open(whatsappURL, "_blank")

  cart = []
  updateCart()
  closeCartSidebar()
  orderForm.reset()

  alert("Order sent to WhatsApp! Please complete the payment details in the chat.")
}

function handleContactSubmit(e) {
  e.preventDefault()

  const name = document.getElementById("contactName").value
  const email = document.getElementById("contactEmail").value
  const message = document.getElementById("contactMessage").value

  const encodedMessage = encodeURIComponent(
    `*New Contact Form Message from Fikky*\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`,
  )
  const whatsappURL = `https://wa.me/${2348160227731}?text=${encodedMessage}`

  // Show success feedback
  const btn = contactForm.querySelector(".contact-form-submit")
  const originalText = btn.textContent
  btn.textContent = "Redirecting to WhatsApp..."
  btn.style.background = "var(--color-primary-hover)"
  btn.disabled = true

  setTimeout(() => {
    window.open(whatsappURL, "_blank")
    contactForm.reset()
    btn.textContent = originalText
    btn.style.background = ""
    btn.disabled = false
  }, 800)
}

function attachEventListeners() {
  cartBtn.addEventListener("click", openCart)
  cartOverlay.addEventListener("click", closeCartSidebar)
  closeCart.addEventListener("click", closeCartSidebar)
  checkoutBtn.addEventListener("click", showCheckout)
  backToCart.addEventListener("click", backToCartView)
  orderForm.addEventListener("submit", handleOrderSubmit)
  searchInput.addEventListener("input", (e) => searchProducts(e.target.value))

  hamburgerMenu.addEventListener("click", toggleMobileMenu)

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerMenu.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Close menu when overlay is clicked
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      hamburgerMenu.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }
}

function toggleMobileMenu() {
  hamburgerMenu.classList.toggle("active")
  navMenu.classList.toggle("active")
}

// Start App
init()


