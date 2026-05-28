// Product Data Array (Simulating a Database)
const productsData = [
    {
        id: "P1",
        name: "Clean Whey Concentrate",
        size: "1kg",
        protein: "23.5g",
        flavor: "Unflavoured",
        serves: 30,
        serveSize: "33g",
        price: 2700,
        image: "p1.png"
    },
    {
        id: "P2",
        name: "Clean Whey Isolate",
        size: "500g",
        protein: "24g",
        flavor: "Unflavoured",
        serves: 16,
        serveSize: "31g",
        price: 2000,
        image: "p2.png"
    },
    {
        id: "P3",
        name: "Clean Whey Concentrate",
        size: "1kg",
        protein: "23.5g",
        flavor: "Cocoa Flavour",
        serves: 30,
        serveSize: "33g",
        price: 2700,
        image: "p3.png"
    },
    {
        id: "P4",
        name: "Clean Whey Isolate",
        size: "500g",
        protein: "24g",
        flavor: "Unflavoured",
        serves: 16,
        serveSize: "31g",
        price: 2000,
        image: "p4.png"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');

// Utility: Format currency (Indian Rupee)
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
};

// Function to render products to the DOM
const renderProducts = (products) => {
    productsGrid.innerHTML = '';

    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--secondary-color);">No products found matching your search.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-details">
                <p><strong>Size:</strong> ${product.size} (${product.serves} serves)</p>
                <p><strong>Protein:</strong> ${product.protein} / serve (${product.serveSize})</p>
                <p><strong>Flavor:</strong> ${product.flavor}</p>
            </div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <button class="btn-add-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
        `;

        productsGrid.appendChild(productCard);
    });
};

// Interactive Functionality: Search Filter
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredProducts = productsData.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) || 
               product.flavor.toLowerCase().includes(searchTerm);
    });

    renderProducts(filteredProducts);
});

// Interactive Functionality: Add to Cart interaction
const addToCart = (productId) => {
    const product = productsData.find(p => p.id === productId);
    if(product) {
        // Simulating a cart addition in a frontend-only environment
        alert(`Added ${product.name} (${product.flavor}) to your cart!`);
    }
};

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
});