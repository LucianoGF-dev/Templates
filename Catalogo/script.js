// ===== DATA MOCK - CATEGORÍAS Y PRECIOS (SIN MODIFICAR) =====
const products = [
    { name: "Laptop HP Victus", category: "laptop", price: 1200, img: "imgs/laptop.jpg", bestSeller: true, featured: false, isNew: false, sales: 245 },
    { name: "Microondas XION", category: "hogar", price: 1899, img: "imgs/microondas-xion.jpg", bestSeller: false, featured: false, isNew: true, sales: 189 },
    { name: "iPhone 15 Pro", category: "phone", price: 1099, img: "imgs/iphon15.jpg", bestSeller: true, featured: false, isNew: false, sales: 512 },
    { name: "Microfono Ledstar", category: "accessory", price: 999, img: "imgs/microfono-ledstar.jpg", bestSeller: false, featured: false, isNew: true, sales: 178 },
    { name: "Auriculares JBL Tune", category: "accessory", price: 150, img: "imgs/auriculares_jbl.jpg", bestSeller: true, featured: false, isNew: false, sales: 890 },
    { name: "Camara Seguridad", category: "hogar", price: 89, img: "imgs/camara-seguridad.jpg", bestSeller: false, featured: false, isNew: false, sales: 567 },
    { name: "Cargador Foneng", category: "accessory", price: 120, img: "imgs/Cargador-Foneng.jpg", bestSeller: true, featured: false, isNew: false, sales: 432 },
    { name: "Jarra Eléctrica Boma", category: "hogar", price: 300, img: "imgs/jarra-electrica-boma.jpg", bestSeller: false, featured: true, isNew: false, sales: 234 },
    { name: "Balanza Digital", category: "hogar", price: 150, img: "imgs/balanza-digital.jpg", bestSeller: false, featured: false, isNew: true, sales: 156 },
    { name: "Guitarra Eléctrica Fender", category: "musica", price: 850, img: "imgs/guitarra.jpg", bestSeller: false, featured: false, isNew: false, sales: 98 },
    { name: "Batería Electrónica", category: "musica", price: 1200, img: "imgs/bateria-electronica.jpg", bestSeller: false, featured: false, isNew: true, sales: 67 },
    { name: "iPad Air 5ta Gen", category: "laptop", price: 699, img: "imgs/ipad.jpg", bestSeller: false, featured: false, isNew: true, sales: 345 },
    { name: "Smartwatch Ultra", category: "accessory", price: 249, img: "imgs/smartwatch.jpg", bestSeller: false, featured: false, isNew: true, sales: 421 },
    { name: "Freidora XION", category: "musica", price: 799, img: "imgs/freidora-xion.jpg", bestSeller: false, featured: false, isNew: false, sales: 123 }
];

// ===== DOM ELEMENTS =====
// Productos
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");
const clearSearchBtn = document.getElementById("clearSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const resultsCountSpan = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

// 🔥 NUEVOS: Header Mejorado
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const headerNav = document.getElementById("headerNav");
const searchSuggestions = document.getElementById("searchSuggestions");
const navLinks = document.querySelectorAll(".nav-link");
const headerLinks = document.querySelectorAll(".header-link");
const cartCount = document.querySelector(".cart-count");

let currentView = "grid";
let cartItems = 3; // Simulación de carrito

// ===== FUNCIONES DEL HEADER MEJORADO =====

// Toggle menú móvil con animación
function toggleMobileMenu() {
    const isActive = mobileMenuToggle.classList.toggle("active");
    headerNav.classList.toggle("active", isActive);
    mobileMenuToggle.setAttribute("aria-expanded", isActive);
    
    // Efecto de scroll suave al abrir
    if (isActive && window.innerWidth <= 900) {
        headerNav.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Cerrar menú móvil al hacer click en un enlace (mobile)
function closeMobileMenuOnLinkClick() {
    if (window.innerWidth <= 900 && headerNav.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active");
        headerNav.classList.remove("active");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
}

// Generar sugerencias de búsqueda dinámicas
function renderSearchSuggestions(query) {
    if (!query || query.length < 2) {
        searchSuggestions.innerHTML = "";
        searchSuggestions.style.opacity = "0";
        searchSuggestions.style.visibility = "hidden";
        return;
    }

    const matches = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Máximo 5 sugerencias

    if (matches.length === 0) {
        searchSuggestions.innerHTML = `
            <div class="search-suggestion-item" style="cursor: default; opacity: 0.7;">
                <i class="fa-regular fa-face-frown"></i>
                <span>No encontramos "${query}"</span>
            </div>
        `;
        searchSuggestions.style.opacity = "1";
        searchSuggestions.style.visibility = "visible";
        return;
    }

    searchSuggestions.innerHTML = matches.map(p => `
        <div class="search-suggestion-item" data-product="${p.name}">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>${highlightMatch(p.name, query)}</span>
            <span style="margin-left: auto; font-size: 0.8rem; color: var(--primary);">$${p.price.toLocaleString('es-AR')}</span>
        </div>
    `).join("");

    searchSuggestions.style.opacity = "1";
    searchSuggestions.style.visibility = "visible";

    // Event listeners para las sugerencias
    searchSuggestions.querySelectorAll(".search-suggestion-item").forEach(item => {
        item.addEventListener("click", (e) => {
            if (item.style.cursor !== "default") {
                const productName = item.dataset.product;
                searchInput.value = productName;
                applyFilters();
                searchSuggestions.style.opacity = "0";
                searchSuggestions.style.visibility = "hidden";
                searchInput.blur();
            }
        });
    });
}

// Resaltar texto coincidente en sugerencias
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<strong style="color: var(--secondary);">$1</strong>');
}

// Ocultar sugerencias al hacer click fuera
function setupSearchSuggestionsBlur() {
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".header-search-wrapper")) {
            searchSuggestions.style.opacity = "0";
            searchSuggestions.style.visibility = "hidden";
        }
    });
}

// Actualizar contador del carrito con animación
function updateCartCount(newCount) {
    cartCount.textContent = newCount;
    cartCount.style.animation = "none";
    setTimeout(() => {
        cartCount.style.animation = "pulseCart 2s ease-in-out infinite";
    }, 10);
}

// Manejar clicks en enlaces del header (demo)
function handleHeaderLinkClick(e, linkType) {
    e.preventDefault();
    
    // Efecto visual de feedback
    const icon = e.currentTarget.querySelector("i");
    if (icon) {
        icon.style.transform = "scale(1.3)";
        setTimeout(() => icon.style.transform = "", 200);
    }
    
    // Mensaje contextual
    const messages = {
        "cuenta": "👤 Área de usuario - Próximamente disponible",
        "favoritos": "💖 Tu lista de deseos - Función en desarrollo",
        "carrito": `🛒 Tienes ${cartItems} productos en tu carrito`
    };
    
    showToast(messages[linkType] || "Función en desarrollo");
}

// Sistema de notificaciones toast (para feedback)
function showToast(message, duration = 3000) {
    // Remover toast anterior si existe
    const existing = document.getElementById("header-toast");
    if (existing) existing.remove();
    
    const toast = document.createElement("div");
    toast.id = "header-toast";
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--dark-800);
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: var(--radius-md);
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: var(--shadow-xl);
        z-index: 2000;
        display: flex;
        align-items: center;
        gap: 0.6rem;
        animation: slideInRight 0.3s ease-out;
        border-left: 4px solid var(--primary);
    `;
    toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--primary);"></i> ${message}`;
    
    // Animación de entrada
    const style = document.createElement("style");
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // Auto-remover
    setTimeout(() => {
        toast.style.animation = "slideOutRight 0.3s ease-in forwards";
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Manejar navegación activa
function setActiveNavLink(href) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === href) {
            link.classList.add("active");
        }
    });
}

// ===== FUNCIONES EXISTENTES (SIN MODIFICAR LÓGICA DE PRODUCTOS) =====

// ===== FUNCIÓN WHATSAPP =====
function initWhatsApp() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        setTimeout(() => {
            whatsappBtn.style.animation = 'float 3s ease-in-out infinite';
        }, 1000);
    }
}

// Obtener badge según el tipo de destacado
function getBadge(product) {
    if (product.bestSeller && product.sales > 200) {
        return '<span class="card-badge best-seller"><i class="fa-solid fa-fire"></i> Más vendido</span>';
    }
    if (product.featured) {
        return '<span class="card-badge featured"><i class="fa-solid fa-star"></i> Destacado</span>';
    }
    if (product.isNew) {
        return '<span class="card-badge new"><i class="fa-solid fa-bolt"></i> Nuevo</span>';
    }
    return '';
}

// Render productos con animación escalonada
function render(data) {
    if (!data.length) {
        grid.innerHTML = "";
        emptyState.style.display = "block";
        resultsCountSpan.textContent = "0";
        return;
    }

    emptyState.style.display = "none";
    resultsCountSpan.textContent = data.length;
    grid.innerHTML = "";

    data.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${index * 0.05}s`;

        // Icono según categoría
        let categoryIcon = "";
        switch (p.category) {
            case "laptop": categoryIcon = '<i class="fa-solid fa-laptop"></i>'; break;
            case "phone": categoryIcon = '<i class="fa-solid fa-mobile-screen"></i>'; break;
            case "accessory": categoryIcon = '<i class="fa-solid fa-headphones"></i>'; break;
            case "hogar": categoryIcon = '<i class="fa-solid fa-house"></i>'; break;
            case "musica": categoryIcon = '<i class="fa-solid fa-guitar"></i>'; break;
            default: categoryIcon = '<i class="fa-solid fa-box"></i>';
        }

        const badge = getBadge(p);

        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/3b82f6/white?text=TechStore&font=inter'">
            <div class="card-content">
                <h4>${p.name}</h4>
                <div class="category-tag">${categoryIcon} ${getCategoryName(p.category)}</div>
                <div class="price">$${p.price.toLocaleString('es-AR')}</div>
            </div>
            ${badge}
        `;

        card.addEventListener("click", () => {
            let extraInfo = "";
            if (p.bestSeller) extraInfo += "\n🔥 Más vendido";
            if (p.featured) extraInfo += "\n⭐ Destacado";
            if (p.isNew) extraInfo += "\n🆕 Nuevo producto";
            
            const message = `✨ *${p.name}*\n\n💰 *Precio:* $${p.price.toLocaleString('es-AR')}\n📦 *Categoría:* ${getCategoryName(p.category)}${extraInfo}\n\n¿Te interesa este producto? ¡Escríbenos por WhatsApp! 📱`;
            alert(message);
        });

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 50 + index * 30);

        grid.appendChild(card);
    });
}

// Obtener nombre legible de categoría
function getCategoryName(category) {
    const categories = {
        "laptop": "Laptop",
        "phone": "Celular",
        "accessory": "Accesorio",
        "hogar": "Hogar",
        "musica": "Música"
    };
    return categories[category] || category;
}

// Aplicar filtros y orden (LÓGICA ORIGINAL INTACTA)
function applyFilters() {
    let filtered = [...products];

    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    const sortType = sortFilter.value;

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    if (sortType === "featured_only") {
        filtered = filtered.filter(p => p.featured === true);
    } else if (sortType === "best_seller_only") {
        filtered = filtered.filter(p => p.bestSeller === true);
    } else if (sortType === "new_only") {
        filtered = filtered.filter(p => p.isNew === true);
    }

    if (sortType === "price_asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "price_desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === "default") {
        filtered.sort((a, b) => {
            const getPriority = (p) => {
                if (p.featured && p.bestSeller) return 1;
                if (p.featured) return 2;
                if (p.bestSeller) return 3;
                if (p.isNew) return 4;
                return 5;
            };
            return getPriority(a) - getPriority(b);
        });
    } else if (["featured_only", "best_seller_only", "new_only"].includes(sortType)) {
        filtered.sort((a, b) => {
            const getPriority = (p) => {
                if (p.featured && p.bestSeller) return 1;
                if (p.featured) return 2;
                if (p.bestSeller) return 3;
                if (p.isNew) return 4;
                return 5;
            };
            return getPriority(a) - getPriority(b);
        });
    }

    render(filtered);

    // Actualizar estado del botón limpiar búsqueda
    if (searchInput.value.length > 0) {
        clearSearchBtn.classList.add("visible");
    } else {
        clearSearchBtn.classList.remove("visible");
    }
    
    // 🔥 Actualizar sugerencias en tiempo real
    renderSearchSuggestions(searchInput.value);
}

// Limpiar todos los filtros
function clearAllFilters() {
    categoryFilter.value = "";
    sortFilter.value = "default";
    searchInput.value = "";
    applyFilters();
    searchInput.focus();
}

// Cambiar vista
function setView(view) {
    currentView = view;
    if (view === "list") {
        grid.classList.add("list-view");
    } else {
        grid.classList.remove("list-view");
    }

    document.querySelectorAll(".view-btn").forEach(btn => {
        if (btn.dataset.view === view) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    applyFilters();
}

// ===== EVENT LISTENERS DEL HEADER MEJORADO =====
function initHeaderEvents() {
    // Toggle menú móvil
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", toggleMobileMenu);
    }

    // Cerrar menú al hacer click en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            closeMobileMenuOnLinkClick();
            setActiveNavLink(link.getAttribute("href"));
        });
    });

    // Sugerencias de búsqueda
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderSearchSuggestions(e.target.value);
        });
        
        // Ocultar sugerencias con Escape
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                searchSuggestions.style.opacity = "0";
                searchSuggestions.style.visibility = "hidden";
                searchInput.blur();
            }
        });
    }
    
    setupSearchSuggestionsBlur();

    // Header links (Cuenta, Favoritos, Carrito)
    headerLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const ariaLabel = link.getAttribute("aria-label")?.toLowerCase() || "";
            let linkType = "generic";
            
            if (ariaLabel.includes("cuenta") || link.textContent.includes("Cuenta")) linkType = "cuenta";
            else if (ariaLabel.includes("deseos") || ariaLabel.includes("favoritos") || link.textContent.includes("Favoritos")) linkType = "favoritos";
            else if (ariaLabel.includes("carrito") || link.classList.contains("header-cart")) {
                linkType = "carrito";
                // Demo: agregar producto al carrito
                updateCartCount(++cartItems);
            }
            
            handleHeaderLinkClick(e, linkType);
        });
    });

    // Click en contador del carrito
    if (cartCount) {
        cartCount.addEventListener("click", (e) => {
            e.stopPropagation();
            showToast(`🛒 Ver ${cartItems} productos en tu carrito`);
        });
    }

    // Cerrar menú al redimensionar a desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900 && headerNav.classList.contains("active")) {
            mobileMenuToggle.classList.remove("active");
            headerNav.classList.remove("active");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
    // Event Listeners originales
    categoryFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);
    searchInput.addEventListener("input", applyFilters);
    
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        applyFilters();
        searchInput.focus();
    });
    
    clearFiltersBtn.addEventListener("click", clearAllFilters);

    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    // 🔥 Inicializar funcionalidades del header mejorado
    initHeaderEvents();

    // Inicializar
    applyFilters();
    setView("grid");
    
    // Inicializar WhatsApp
    initWhatsApp();
    
    // 🔥 Feedback inicial
    setTimeout(() => {
        showToast("✨ Bienvenido a MiTienda Tech", 2500);
    }, 800);
});

// Exportar para uso global
window.clearAllFilters = clearAllFilters;