/* =============================================
   AUTOELITE RENT - MAIN JAVASCRIPT
   Premium Rent-a-Car System
   ============================================= */

// ============ TRANSLATIONS ============
const translations = {
    es: {
        nav_home: "Inicio",
        nav_catalog: "Catálogo",
        nav_testimonials: "Testimonios",
        nav_faq: "FAQ",
        nav_contact: "Contacto",
        hero_badge: "★ Servicio Premium desde 2015",
        hero_title: 'Encuentra tu <span class="text-gradient">vehículo ideal</span> para cada momento',
        hero_subtitle: "La flota más exclusiva de la ciudad. Precios competitivos, servicio de primera y disponibilidad inmediata.",
        hero_btn_catalog: "Ver Catálogo",
        hero_btn_contact: "Contáctanos",
        stat_vehicles: "Vehículos",
        stat_clients: "Clientes felices",
        stat_years: "Años de experiencia",
        stat_support: "Soporte 24/7",
        scroll_down: "Desplázate",
        catalog_badge: "NUESTRA FLOTA",
        catalog_title: 'Vehículos <span class="text-gradient">Disponibles</span>',
        catalog_desc: "Explora nuestra selección premium y encuentra el auto perfecto para ti",
        filters_btn: "Filtros Avanzados",
        filter_brand: "Marca",
        filter_type: "Tipo",
        filter_year: "Año",
        filter_availability: "Disponibilidad",
        filter_price_min: "Precio Mín ($/día)",
        filter_price_max: "Precio Máx ($/día)",
        filter_all: "Todos",
        status_available: "Disponible",
        status_reserved: "Reservado",
        filter_search_placeholder: "Buscar por nombre o marca...",
        clear_filters: "Limpiar Filtros",
        no_results_title: "No se encontraron vehículos",
        no_results_desc: "Intenta ajustar los filtros de búsqueda",
        testimonials_badge: "TESTIMONIOS",
        testimonials_title: 'Lo que dicen nuestros <span class="text-gradient">clientes</span>',
        testimonial_1_text: '"Excelente servicio. El auto estaba impecable y el proceso de alquiler fue rapidísimo. Definitivamente volveré."',
        testimonial_1_role: "Empresario",
        testimonial_2_text: '"Los mejores precios de la zona y una atención al cliente de primera. La SUV que alquilamos fue perfecta para nuestras vacaciones."',
        testimonial_2_role: "Diseñadora",
        testimonial_3_text: '"Alquilé un deportivo para un evento especial y fue una experiencia increíble. Todo el proceso fue transparente y profesional."',
        testimonial_3_role: "Ingeniero",
        faq_badge: "FAQ",
        faq_title: 'Preguntas <span class="text-gradient">Frecuentes</span>',
        faq_q1: "¿Qué documentos necesito para alquilar?",
        faq_a1: "Necesitas licencia de conducir vigente, cédula de identidad o pasaporte, y una tarjeta de crédito para el depósito de garantía. Edad mínima: 21 años.",
        faq_q2: "¿Puedo cancelar mi reserva?",
        faq_a2: "Sí, puedes cancelar hasta 24 horas antes de la fecha de inicio sin penalización. Cancelaciones con menos de 24 horas tienen un cargo del 10%.",
        faq_q3: "¿El seguro está incluido?",
        faq_a3: "Todos nuestros vehículos incluyen seguro básico. Ofrecemos seguros premium y cobertura total como extras opcionales para tu tranquilidad.",
        faq_q4: "¿Puedo devolver el auto en otra ubicación?",
        faq_a4: "Sí, ofrecemos devolución en ubicaciones alternativas con un costo adicional que varía según la distancia. Consulta disponibilidad al momento de reservar.",
        faq_q5: "¿Cuál es la política de combustible?",
        faq_a5: "Entregamos el vehículo con tanque lleno y debe ser devuelto de la misma manera. De lo contrario, se cobrará el combustible faltante más un cargo de servicio.",
        contact_badge: "CONTACTO",
        contact_title: 'Encuéntranos <span class="text-gradient">aquí</span>',
        contact_address_title: "Dirección",
        contact_address: "Av. Principal #1234, Centro Empresarial, Piso 2",
        contact_phone_title: "Teléfono",
        contact_email_title: "Email",
        contact_hours_title: "Horario",
        contact_hours: "Lun - Sáb: 8:00 AM - 8:00 PM<br>Dom: 9:00 AM - 5:00 PM",
        contact_form_title: "Envíanos un mensaje",
        form_name: "Nombre",
        form_email: "Email",
        form_message: "Mensaje",
        form_send: "Enviar Mensaje",
        footer_desc: "Tu socio de confianza en alquiler de vehículos premium. Más de 9 años brindando la mejor experiencia de conducción.",
        footer_links: "Enlaces Rápidos",
        footer_services: "Servicios",
        footer_srv_rental: "Alquiler diario",
        footer_srv_weekly: "Alquiler semanal",
        footer_srv_monthly: "Alquiler mensual",
        footer_srv_corporate: "Corporativo",
        footer_legal: "Legal",
        footer_terms: "Términos y Condiciones",
        footer_privacy: "Política de Privacidad",
        footer_cookies: "Política de Cookies",
        footer_rights: "Todos los derechos reservados.",
        rental_title: "Solicitar Alquiler",
        form_full_name: "Nombre Completo *",
        form_phone: "Teléfono *",
        form_start_date: "Fecha de Inicio *",
        form_end_date: "Fecha de Devolución *",
        extras_title: "Extras Opcionales",
        extra_insurance: "Seguro Premium",
        extra_gps: "GPS Navegador",
        extra_child: "Silla para Niño",
        summary_title: "Resumen",
        summary_days: "Días:",
        summary_subtotal: "Subtotal:",
        summary_extras: "Extras:",
        summary_total: "Total:",
        btn_cancel: "Cancelar",
        btn_confirm_whatsapp: "✓ Confirmar por WhatsApp",
        btn_save: "Guardar",
        btn_rent: "Alquilar",
        btn_whatsapp: "WhatsApp",
        results_showing: "Mostrando",
        results_of: "de",
        results_vehicles: "vehículos",
        admin_title: "Panel Administrativo",
        admin_tab_vehicles: "Vehículos",
        admin_tab_reservations: "Reservas",
        admin_add_vehicle: "+ Agregar Vehículo",
        admin_form_new: "Nuevo Vehículo",
        admin_form_edit: "Editar Vehículo",
        admin_v_name: "Nombre",
        admin_v_brand: "Marca",
        admin_v_type: "Tipo",
        admin_v_year: "Año",
        admin_v_price: "Precio/día ($)",
        admin_v_status: "Estado",
        notif_success: "éxito",
        notif_rental_sent: "¡Solicitud enviada por WhatsApp!",
        notif_vehicle_added: "Vehículo agregado correctamente",
        notif_vehicle_updated: "Vehículo actualizado correctamente",
        notif_vehicle_deleted: "Vehículo eliminado",
        notif_contact_sent: "¡Mensaje enviado correctamente!",
        notif_fill_fields: "Por favor completa todos los campos requeridos",
        notif_dates: "La fecha de devolución debe ser posterior a la de inicio",
        notif_error: "Error",
        price_per_day: "/día",
        per_day: "/día",
        res_client: "Cliente",
        res_vehicle: "Vehículo",
        res_dates: "Fechas",
        res_total: "Total",
        res_no_reservations: "No hay reservas registradas aún",
        no_image: "Sin imagen",
        admin_delete_confirm: "¿Estás seguro de eliminar este vehículo?"
    },
    en: {
        nav_home: "Home",
        nav_catalog: "Catalog",
        nav_testimonials: "Testimonials",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_badge: "★ Premium Service since 2015",
        hero_title: 'Find your <span class="text-gradient">ideal vehicle</span> for every moment',
        hero_subtitle: "The most exclusive fleet in the city. Competitive prices, first-class service, and immediate availability.",
        hero_btn_catalog: "View Catalog",
        hero_btn_contact: "Contact Us",
        stat_vehicles: "Vehicles",
        stat_clients: "Happy clients",
        stat_years: "Years of experience",
        stat_support: "24/7 Support",
        scroll_down: "Scroll down",
        catalog_badge: "OUR FLEET",
        catalog_title: '<span class="text-gradient">Available</span> Vehicles',
        catalog_desc: "Explore our premium selection and find the perfect car for you",
        filters_btn: "Advanced Filters",
        filter_brand: "Brand",
        filter_type: "Type",
        filter_year: "Year",
        filter_availability: "Availability",
        filter_price_min: "Min Price ($/day)",
        filter_price_max: "Max Price ($/day)",
        filter_all: "All",
        status_available: "Available",
        status_reserved: "Reserved",
        filter_search_placeholder: "Search by name or brand...",
        clear_filters: "Clear Filters",
        no_results_title: "No vehicles found",
        no_results_desc: "Try adjusting your search filters",
        testimonials_badge: "TESTIMONIALS",
        testimonials_title: 'What our <span class="text-gradient">clients</span> say',
        testimonial_1_text: '"Excellent service. The car was spotless and the rental process was super fast. I will definitely come back."',
        testimonial_1_role: "Businessman",
        testimonial_2_text: '"The best prices in the area and first-class customer service. The SUV we rented was perfect for our vacation."',
        testimonial_2_role: "Designer",
        testimonial_3_text: '"I rented a sports car for a special event and it was an incredible experience. The whole process was transparent and professional."',
        testimonial_3_role: "Engineer",
        faq_badge: "FAQ",
        faq_title: '<span class="text-gradient">Frequently</span> Asked Questions',
        faq_q1: "What documents do I need to rent?",
        faq_a1: "You need a valid driver's license, ID card or passport, and a credit card for the security deposit. Minimum age: 21 years.",
        faq_q2: "Can I cancel my reservation?",
        faq_a2: "Yes, you can cancel up to 24 hours before the start date without penalty. Cancellations with less than 24 hours incur a 10% charge.",
        faq_q3: "Is insurance included?",
        faq_a3: "All our vehicles include basic insurance. We offer premium insurance and full coverage as optional extras for your peace of mind.",
        faq_q4: "Can I return the car at a different location?",
        faq_a4: "Yes, we offer returns at alternative locations with an additional cost that varies by distance. Check availability when booking.",
        faq_q5: "What is the fuel policy?",
        faq_a5: "We deliver the vehicle with a full tank and it should be returned the same way. Otherwise, missing fuel plus a service fee will be charged.",
        contact_badge: "CONTACT",
        contact_title: 'Find us <span class="text-gradient">here</span>',
        contact_address_title: "Address",
        contact_address: "1234 Main Ave, Business Center, Floor 2",
        contact_phone_title: "Phone",
        contact_email_title: "Email",
        contact_hours_title: "Hours",
        contact_hours: "Mon - Sat: 8:00 AM - 8:00 PM<br>Sun: 9:00 AM - 5:00 PM",
        contact_form_title: "Send us a message",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_send: "Send Message",
        footer_desc: "Your trusted partner in premium vehicle rental. Over 9 years providing the best driving experience.",
        footer_links: "Quick Links",
        footer_services: "Services",
        footer_srv_rental: "Daily rental",
        footer_srv_weekly: "Weekly rental",
        footer_srv_monthly: "Monthly rental",
        footer_srv_corporate: "Corporate",
        footer_legal: "Legal",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy Policy",
        footer_cookies: "Cookie Policy",
        footer_rights: "All rights reserved.",
        rental_title: "Rental Request",
        form_full_name: "Full Name *",
        form_phone: "Phone *",
        form_start_date: "Start Date *",
        form_end_date: "Return Date *",
        extras_title: "Optional Extras",
        extra_insurance: "Premium Insurance",
        extra_gps: "GPS Navigator",
        extra_child: "Child Seat",
        summary_title: "Summary",
        summary_days: "Days:",
        summary_subtotal: "Subtotal:",
        summary_extras: "Extras:",
        summary_total: "Total:",
        btn_cancel: "Cancel",
        btn_confirm_whatsapp: "✓ Confirm via WhatsApp",
        btn_save: "Save",
        btn_rent: "Rent",
        btn_whatsapp: "WhatsApp",
        results_showing: "Showing",
        results_of: "of",
        results_vehicles: "vehicles",
        admin_title: "Admin Panel",
        admin_tab_vehicles: "Vehicles",
        admin_tab_reservations: "Reservations",
        admin_add_vehicle: "+ Add Vehicle",
        admin_form_new: "New Vehicle",
        admin_form_edit: "Edit Vehicle",
        admin_v_name: "Name",
        admin_v_brand: "Brand",
        admin_v_type: "Type",
        admin_v_year: "Year",
        admin_v_price: "Price/day ($)",
        admin_v_status: "Status",
        notif_success: "success",
        notif_rental_sent: "Rental request sent via WhatsApp!",
        notif_vehicle_added: "Vehicle added successfully",
        notif_vehicle_updated: "Vehicle updated successfully",
        notif_vehicle_deleted: "Vehicle deleted",
        notif_contact_sent: "Message sent successfully!",
        notif_fill_fields: "Please fill in all required fields",
        notif_dates: "Return date must be after start date",
        notif_error: "Error",
        price_per_day: "/day",
        per_day: "/day",
        res_client: "Client",
        res_vehicle: "Vehicle",
        res_dates: "Dates",
        res_total: "Total",
        res_no_reservations: "No reservations registered yet",
        no_image: "No image",
        admin_delete_confirm: "Are you sure you want to delete this vehicle?"
    }
};

// ============ DEFAULT VEHICLES ============
const defaultVehicles = [
    {
        id: 1,
        name: "Model S Plaid",
        brand: "Tesla",
        type: "Sedan",
        year: 2024,
        price: 189,
        status: "available",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Range Rover Sport",
        brand: "Land Rover",
        type: "SUV",
        year: 2024,
        price: 220,
        status: "available",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f788a0664?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        name: "911 Carrera",
        brand: "Porsche",
        type: "Deportivo",
        year: 2024,
        price: 350,
        status: "available",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Corolla Hybrid",
        brand: "Toyota",
        type: "Económico",
        year: 2024,
        price: 45,
        status: "available",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        name: "F-150 Raptor",
        brand: "Ford",
        type: "Pickup",
        year: 2023,
        price: 165,
        status: "available",
        image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        name: "AMG GT",
        brand: "Mercedes-Benz",
        type: "Deportivo",
        year: 2024,
        price: 420,
        status: "reserved",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop"
    },
    {
        id: 7,
        name: "X5 xDrive",
        brand: "BMW",
        type: "SUV",
        year: 2024,
        price: 195,
        status: "available",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Civic Sport",
        brand: "Honda",
        type: "Sedan",
        year: 2024,
        price: 55,
        status: "available",
        image: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Crafter Van",
        brand: "Volkswagen",
        type: "Van",
        year: 2023,
        price: 130,
        status: "available",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Mustang GT",
        brand: "Ford",
        type: "Deportivo",
        year: 2024,
        price: 175,
        status: "available",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5f82b9583?w=600&h=400&fit=crop"
    },
    {
        id: 11,
        name: "RAV4 Hybrid",
        brand: "Toyota",
        type: "SUV",
        year: 2024,
        price: 85,
        status: "available",
        image: "https://images.unsplash.com/photo-1581540222194-7be631a15e68?w=600&h=400&fit=crop"
    },
    {
        id: 12,
        name: "Hilux SRX",
        brand: "Toyota",
        type: "Pickup",
        year: 2024,
        price: 95,
        status: "available",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&h=400&fit=crop"
    }
];

// ============ APP STATE ============
let currentLang = localStorage.getItem('ael_lang') || 'es';
let vehicles = [];
let reservations = [];
let selectedVehicle = null;
let nextVehicleId = 100;

// ============ WHATSAPP NUMBER ============
const WHATSAPP_NUMBER = "15551234567";

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initLoader();
    initNavbar();
    initLanguage();
    initFilters();
    renderVehicles();
    initModal();
    initRentalForm();
    initAdmin();
    initFAQ();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
    initCountUp();
});

// ============ LOADER ============
function initLoader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 1200);
    });
    // Fallback
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 3000);
}

// ============ DATA MANAGEMENT ============
function loadData() {
    const storedVehicles = localStorage.getItem('ael_vehicles');
    vehicles = storedVehicles ? JSON.parse(storedVehicles) : [...defaultVehicles];

    const storedReservations = localStorage.getItem('ael_reservations');
    reservations = storedReservations ? JSON.parse(storedReservations) : [];

    // Ensure next ID
    if (vehicles.length > 0) {
        nextVehicleId = Math.max(...vehicles.map(v => v.id)) + 1;
    }
}

function saveVehicles() {
    localStorage.setItem('ael_vehicles', JSON.stringify(vehicles));
}

function saveReservations() {
    localStorage.setItem('ael_reservations', JSON.stringify(reservations));
}

// ============ LANGUAGE SYSTEM ============
function initLanguage() {
    setLanguage(currentLang);

    document.getElementById('btnES').addEventListener('click', () => setLanguage('es'));
    document.getElementById('btnEN').addEventListener('click', () => setLanguage('en'));
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ael_lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = translations[lang];

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update document language
    document.documentElement.lang = lang;

    // Re-render vehicles to update button texts
    renderVehicles();
}

function t(key) {
    return translations[currentLang][key] || key;
}

// ============ NAVBAR ============
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Admin toggle
    document.getElementById('btnAdminToggle').addEventListener('click', () => {
        openAdminModal();
    });
}

// ============ COUNT UP ANIMATION ============
function initCountUp() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.count);
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsEl = document.querySelector('.hero-stats');
    if (statsEl) observer.observe(statsEl);
}

function animateCounter(el, target) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString() + (target >= 100 ? '+' : '');
    }, 25);
}

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .testimonial-card, .contact-card, .faq-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ============ BACK TO TOP ============
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============ FILTERS ============
function initFilters() {
    const toggle = document.getElementById('filtersToggle');
    const panel = document.getElementById('filtersPanel');

    toggle.addEventListener('click', () => {
        panel.classList.toggle('active');
    });

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    document.getElementById('resetFiltersBtn').addEventListener('click', () => {
        clearFilters();
        renderVehicles();
    });

    // Real-time filtering
    const filterElements = [
        'filterBrand', 'filterType', 'filterYear',
        'filterAvailability', 'filterPriceMin', 'filterPriceMax', 'filterSearch'
    ];

    filterElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', renderVehicles);
            el.addEventListener('change', renderVehicles);
        }
    });
}

function clearFilters() {
    document.getElementById('filterBrand').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterYear').value = '';
    document.getElementById('filterAvailability').value = '';
    document.getElementById('filterPriceMin').value = '';
    document.getElementById('filterPriceMax').value = '';
    document.getElementById('filterSearch').value = '';
    renderVehicles();
}

function getFilteredVehicles() {
    const brand = document.getElementById('filterBrand').value;
    const type = document.getElementById('filterType').value;
    const year = document.getElementById('filterYear').value;
    const availability = document.getElementById('filterAvailability').value;
    const priceMin = parseFloat(document.getElementById('filterPriceMin').value) || 0;
    const priceMax = parseFloat(document.getElementById('filterPriceMax').value) || Infinity;
    const search = document.getElementById('filterSearch').value.toLowerCase().trim();

    return vehicles.filter(v => {
        if (brand && v.brand !== brand) return false;
        if (type && v.type !== type) return false;
        if (year && v.year !== parseInt(year)) return false;
        if (availability && v.status !== availability) return false;
        if (v.price < priceMin) return false;
        if (v.price > priceMax) return false;
        if (search && !v.name.toLowerCase().includes(search) && !v.brand.toLowerCase().includes(search)) return false;
        return true;
    });
}

// ============ RENDER VEHICLES ============
function renderVehicles() {
    const grid = document.getElementById('vehiclesGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    // Populate filter options
    populateFilters();

    // Get filtered vehicles
    const filtered = getFilteredVehicles();

    // Results count
    resultsCount.textContent = `${t('results_showing')} ${filtered.length} ${t('results_of')} ${vehicles.length} ${t('results_vehicles')}`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    grid.innerHTML = filtered.map((vehicle, index) => `
        <div class="vehicle-card ${vehicle.status === 'reserved' ? 'reserved' : ''}" style="transition-delay: ${index * 0.05}s">
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy"
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22><rect fill=%22%231e293b%22 width=%22600%22 height=%22400%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%2364748b%22 font-size=%2220%22>${vehicle.name}</text></svg>'">
                <span class="vehicle-badge ${vehicle.status === 'available' ? 'badge-available' : 'badge-reserved'}">
                    ${vehicle.status === 'available' ? t('status_available') : t('status_reserved')}
                </span>
                <span class="vehicle-type-badge">${vehicle.type}</span>
            </div>
            <div class="vehicle-info">
                <h3 class="vehicle-name">${vehicle.name}</h3>
                <p class="vehicle-brand">${vehicle.brand} · ${vehicle.year}</p>
                <div class="vehicle-specs">
                    <span class="spec"><span class="spec-icon">📅</span> ${vehicle.year}</span>
                    <span class="spec"><span class="spec-icon">🏷️</span> ${vehicle.type}</span>
                    <span class="spec"><span class="spec-icon">⚡</span> ${vehicle.brand}</span>
                </div>
                <div class="vehicle-price-row">
                    <div class="vehicle-price">$${vehicle.price}<span>${t('per_day')}</span></div>
                    <div class="vehicle-actions">
                        <button class="btn btn-primary btn-sm btn-rent" onclick="openRentalModal(${vehicle.id})"
                                ${vehicle.status === 'reserved' ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                            ${t('btn_rent')}
                        </button>
                        <button class="btn-wa-vehicle" onclick="openWhatsAppVehicle(${vehicle.id})" title="WhatsApp">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Animate cards
    setTimeout(() => {
        document.querySelectorAll('.vehicle-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 80);
        });
    }, 50);
}

function populateFilters() {
    // Brands
    const brands = [...new Set(vehicles.map(v => v.brand))].sort();
    const brandSelect = document.getElementById('filterBrand');
    const currentBrand = brandSelect.value;
    brandSelect.innerHTML = `<option value="">${t('filter_all')}</option>` +
        brands.map(b => `<option value="${b}" ${b === currentBrand ? 'selected' : ''}>${b}</option>`).join('');

    // Types
    const types = [...new Set(vehicles.map(v => v.type))].sort();
    const typeSelect = document.getElementById('filterType');
    const currentType = typeSelect.value;
    typeSelect.innerHTML = `<option value="">${t('filter_all')}</option>` +
        types.map(tp => `<option value="${tp}" ${tp === currentType ? 'selected' : ''}>${tp}</option>`).join('');

    // Years
    const years = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a);
    const yearSelect = document.getElementById('filterYear');
    const currentYear = yearSelect.value;
    yearSelect.innerHTML = `<option value="">${t('filter_all')}</option>` +
        years.map(y => `<option value="${y}" ${y === parseInt(currentYear) ? 'selected' : ''}>${y}</option>`).join('');
}

// ============ RENTAL MODAL ============
function initModal() {
    const modal = document.getElementById('rentalModal');
    const closeBtn = document.getElementById('modalClose');
    const cancelBtn = document.getElementById('modalCancel');

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Set min dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('rentalStartDate').min = today;
    document.getElementById('rentalEndDate').min = today;

    // Update end date min when start date changes
    document.getElementById('rentalStartDate').addEventListener('change', function() {
        document.getElementById('rentalEndDate').min = this.value;
        if (document.getElementById('rentalEndDate').value < this.value) {
            document.getElementById('rentalEndDate').value = '';
        }
        calculateTotal();
    });

    // Calculate on date change
    document.getElementById('rentalEndDate').addEventListener('change', calculateTotal);

    // Calculate on extras change
    document.querySelectorAll('.extra-item input').forEach(input => {
        input.addEventListener('change', calculateTotal);
    });
}

function openRentalModal(vehicleId) {
    selectedVehicle = vehicles.find(v => v.id === vehicleId);
    if (!selectedVehicle) return;

    if (selectedVehicle.status === 'reserved') {
        showNotification(t('notif_error'), t('status_reserved'), 'error');
        return;
    }

    const modal = document.getElementById('rentalModal');
    const info = document.getElementById('rentalVehicleInfo');

    info.innerHTML = `
        <img src="${selectedVehicle.image}" alt="${selectedVehicle.name}"
             onerror="this.style.background='var(--bg-tertiary)';this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 60%22><rect fill=%22%23334155%22 width=%2280%22 height=%2260%22/></svg>'">
        <div>
            <h4>${selectedVehicle.name}</h4>
            <p>${selectedVehicle.brand} · ${selectedVehicle.year} · ${selectedVehicle.type} · $${selectedVehicle.price}${t('per_day')}</p>
        </div>
    `;

    // Reset form
    document.getElementById('rentalForm').reset();
    document.getElementById('summaryDays').textContent = '0';
    document.getElementById('summarySubtotal').textContent = '$0.00';
    document.getElementById('summaryExtras').textContent = '$0.00';
    document.getElementById('summaryTax').textContent = '$0.00';
    document.getElementById('summaryTotal').textContent = '$0.00';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function calculateTotal() {
    if (!selectedVehicle) return;

    const startDate = document.getElementById('rentalStartDate').value;
    const endDate = document.getElementById('rentalEndDate').value;

    if (!startDate || !endDate) {
        document.getElementById('summaryDays').textContent = '0';
        document.getElementById('summarySubtotal').textContent = '$0.00';
        document.getElementById('summaryExtras').textContent = '$0.00';
        document.getElementById('summaryTax').textContent = '$0.00';
        document.getElementById('summaryTotal').textContent = '$0.00';
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));

    const subtotal = selectedVehicle.price * days;

    // Extras
    let extrasTotal = 0;
    document.querySelectorAll('.extra-item input:checked').forEach(input => {
        extrasTotal += parseFloat(input.dataset.price) * days;
    });

    const tax = (subtotal + extrasTotal) * 0.16;
    const total = subtotal + extrasTotal + tax;

    document.getElementById('summaryDays').textContent = days;
    document.getElementById('summarySubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summaryExtras').textContent = `$${extrasTotal.toFixed(2)}`;
    document.getElementById('summaryTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;
}

// ============ RENTAL FORM SUBMISSION ============
function initRentalForm() {
    document.getElementById('rentalForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('rentalName').value.trim();
        const phone = document.getElementById('rentalPhone').value.trim();
        const startDate = document.getElementById('rentalStartDate').value;
        const endDate = document.getElementById('rentalEndDate').value;

        // Validation
        let hasError = false;

        if (!name) {
            document.getElementById('errorName').textContent = t('notif_fill_fields');
            hasError = true;
        } else {
            document.getElementById('errorName').textContent = '';
        }

        if (!phone) {
            document.getElementById('errorPhone').textContent = t('notif_fill_fields');
            hasError = true;
        } else {
            document.getElementById('errorPhone').textContent = '';
        }

        if (!startDate || !endDate) {
            showNotification(t('notif_error'), t('notif_fill_fields'), 'error');
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end <= start) {
            showNotification(t('notif_error'), t('notif_dates'), 'error');
            return;
        }

        if (hasError) return;

        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        const subtotal = selectedVehicle.price * days;

        let extrasTotal = 0;
        const extrasList = [];
        document.querySelectorAll('.extra-item input:checked').forEach(input => {
            const price = parseFloat(input.dataset.price) * days;
            extrasTotal += price;
            const label = input.closest('.extra-item').querySelector('.extra-name').textContent;
            extrasList.push(`${label}: $${price.toFixed(2)}`);
        });

        const tax = (subtotal + extrasTotal) * 0.16;
        const total = subtotal + extrasTotal + tax;

        // Save reservation
        const reservation = {
            id: Date.now(),
            name,
            phone,
            vehicleName: selectedVehicle.name,
            vehicleBrand: selectedVehicle.brand,
            startDate,
            endDate,
            days,
            subtotal,
            extrasTotal,
            tax,
            total,
            extras: extrasList,
            createdAt: new Date().toISOString()
        };

        reservations.push(reservation);
        saveReservations();

        // Build WhatsApp message
        let message = `🚗 *${currentLang === 'es' ? 'Solicitud de Alquiler' : 'Rental Request'}*\n\n`;
        message += `👤 ${currentLang === 'es' ? 'Nombre' : 'Name'}: ${name}\n`;
        message += `📞 ${currentLang === 'es' ? 'Teléfono' : 'Phone'}: ${phone}\n`;
        message += `🚘 ${currentLang === 'es' ? 'Vehículo' : 'Vehicle'}: ${selectedVehicle.brand} ${selectedVehicle.name} (${selectedVehicle.year})\n`;
        message += `📅 ${currentLang === 'es' ? 'Fechas' : 'Dates'}: ${startDate} → ${endDate}\n`;
        message += `⏱️ ${currentLang === 'es' ? 'Días' : 'Days'}: ${days}\n\n`;

        if (extrasList.length > 0) {
            message += `📦 ${currentLang === 'es' ? 'Extras' : 'Extras'}:\n`;
            extrasList.forEach(ex => { message += `   • ${ex}\n`; });
            message += `\n`;
        }

        message += `💰 ${currentLang === 'es' ? 'Subtotal' : 'Subtotal'}: $${subtotal.toFixed(2)}\n`;
        message += `📋 ${currentLang === 'es' ? 'Extras' : 'Extras'}: $${extrasTotal.toFixed(2)}\n`;
        message += `🏷️ IVA (16%): $${tax.toFixed(2)}\n`;
        message += `✅ *${currentLang === 'es' ? 'Total' : 'Total'}: $${total.toFixed(2)}*\n\n`;
        message += `${currentLang === 'es' ? '¡Gracias! Espero confirmación.' : 'Thank you! Awaiting confirmation.'}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl ="";

        // Close modal and redirect
        document.getElementById('rentalModal').classList.remove('active');
        document.body.style.overflow = '';

        showNotification('✅', t('notif_rental_sent'), 'success');

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 500);
    });
}

// ============ WHATSAPP VEHICLE BUTTON ============
function openWhatsAppVehicle(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;

    const message = currentLang === 'es'
        ? `Hola, me interesa alquilar el ${vehicle.brand} ${vehicle.name} (${vehicle.year}) a $${vehicle.price}/día. ¿Está disponible?`
        : `Hello, I'm interested in renting the ${vehicle.brand} ${vehicle.name} (${vehicle.year}) at $${vehicle.price}/day. Is it available?`;

    
}

// ============ FAQ ============
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============ CONTACT FORM ============
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !message) {
            showNotification(t('notif_error'), t('notif_fill_fields'), 'error');
            return;
        }

        // Simulate sending
        showNotification('✅', t('notif_contact_sent'), 'success');
        this.reset();
    });
}

// ============ ADMIN PANEL ============
function initAdmin() {
    // Tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab === 'vehicles' ? 'tabVehicles' : 'tabReservations').classList.add('active');

            if (tab.dataset.tab === 'vehicles') renderAdminVehicles();
            if (tab.dataset.tab === 'reservations') renderAdminReservations();
        });
    });

    // Add vehicle
    document.getElementById('btnAddVehicle').addEventListener('click', () => {
        document.getElementById('adminVehicleForm').style.display = 'block';
        document.getElementById('adminFormTitle').textContent = t('admin_form_new');
        document.getElementById('adminVehicleId').value = '';
        document.getElementById('adminVName').value = '';
        document.getElementById('adminVBrand').value = '';
        document.getElementById('adminVType').value = 'Sedan';
        document.getElementById('adminVYear').value = new Date().getFullYear();
        document.getElementById('adminVPrice').value = '';
        document.getElementById('adminVStatus').value = 'available';
        document.getElementById('adminVImage').value = '';
    });

    // Cancel vehicle form
    document.getElementById('adminCancelVehicle').addEventListener('click', () => {
        document.getElementById('adminVehicleForm').style.display = 'none';
    });

    // Save vehicle
    document.getElementById('adminSaveVehicle').addEventListener('click', saveVehicle);

    // Close admin modal
    document.getElementById('adminModalClose').addEventListener('click', closeAdminModal);
    document.getElementById('adminModal').addEventListener('click', function(e) {
        if (e.target === this) closeAdminModal();
    });
}

function openAdminModal() {
    document.getElementById('adminModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderAdminVehicles();
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('adminVehicleForm').style.display = 'none';
}

function renderAdminVehicles() {
    const list = document.getElementById('adminVehiclesList');

    if (vehicles.length === 0) {
        list.innerHTML = `<div class="admin-empty">${currentLang === 'es' ? 'No hay vehículos' : 'No vehicles'}</div>`;
        return;
    }

    list.innerHTML = vehicles.map(v => `
        <div class="admin-vehicle-item">
            <div class="v-info">
                <img src="${v.image}" alt="${v.name}"
                     onerror="this.style.background='var(--bg-tertiary)';this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 50 40%22><rect fill=%22%23334155%22 width=%2250%22 height=%2240%22/></svg>'">
                <div>
                    <div class="v-name">${v.name}</div>
                    <div class="v-details">${v.brand} · ${v.type} · ${v.year} · $${v.price}/día · <span style="color:${v.status === 'available' ? 'var(--success)' : 'var(--danger)'}">${v.status === 'available' ? t('status_available') : t('status_reserved')}</span></div>
                </div>
            </div>
            <div class="v-actions">
                <button class="btn-toggle" onclick="toggleVehicleStatus(${v.id})" title="Toggle Status">🔄</button>
                <button class="btn-edit" onclick="editVehicle(${v.id})" title="Edit">✏️</button>
                <button class="btn-delete" onclick="deleteVehicle(${v.id})" title="Delete">🗑️</button>
            </div>
        </div>
    `).join('');
}

function saveVehicle() {
    const id = document.getElementById('adminVehicleId').value;
    const name = document.getElementById('adminVName').value.trim();
    const brand = document.getElementById('adminVBrand').value.trim();
    const type = document.getElementById('adminVType').value;
    const year = parseInt(document.getElementById('adminVYear').value);
    const price = parseFloat(document.getElementById('adminVPrice').value);
    const status = document.getElementById('adminVStatus').value;
    const image = document.getElementById('adminVImage').value.trim();

    if (!name || !brand || !year || isNaN(price)) {
        showNotification(t('notif_error'), t('notif_fill_fields'), 'error');
        return;
    }

    if (id) {
        // Update
        const idx = vehicles.findIndex(v => v.id === parseInt(id));
        if (idx !== -1) {
            vehicles[idx] = { ...vehicles[idx], name, brand, type, year, price, status, image: image || vehicles[idx].image };
            showNotification('✏️', t('notif_vehicle_updated'), 'success');
        }
    } else {
        // Create
        vehicles.push({
            id: nextVehicleId++,
            name, brand, type, year, price, status,
            image: image || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop'
        });
        showNotification('➕', t('notif_vehicle_added'), 'success');
    }

    saveVehicles();
    document.getElementById('adminVehicleForm').style.display = 'none';
    renderAdminVehicles();
    renderVehicles();
}

function editVehicle(id) {
    const v = vehicles.find(v => v.id === id);
    if (!v) return;

    document.getElementById('adminVehicleForm').style.display = 'block';
    document.getElementById('adminFormTitle').textContent = t('admin_form_edit');
    document.getElementById('adminVehicleId').value = v.id;
    document.getElementById('adminVName').value = v.name;
    document.getElementById('adminVBrand').value = v.brand;
    document.getElementById('adminVType').value = v.type;
    document.getElementById('adminVYear').value = v.year;
    document.getElementById('adminVPrice').value = v.price;
    document.getElementById('adminVStatus').value = v.status;
    document.getElementById('adminVImage').value = v.image;
}

function deleteVehicle(id) {
    if (!confirm(t('admin_delete_confirm'))) return;

    vehicles = vehicles.filter(v => v.id !== id);
    saveVehicles();
    renderAdminVehicles();
    renderVehicles();
    showNotification('🗑️', t('notif_vehicle_deleted'), 'info');
}

function toggleVehicleStatus(id) {
    const v = vehicles.find(v => v.id === id);
    if (!v) return;

    v.status = v.status === 'available' ? 'reserved' : 'available';
    saveVehicles();
    renderAdminVehicles();
    renderVehicles();
}

function renderAdminReservations() {
    const list = document.getElementById('adminReservationsList');

    if (reservations.length === 0) {
        list.innerHTML = `<div class="admin-empty">${t('res_no_reservations')}</div>`;
        return;
    }

    list.innerHTML = reservations.map(r => `
        <div class="admin-reservation-item">
            <h4>📋 #${r.id}</h4>
            <p><strong>${t('res_client')}:</strong> ${r.name} · ${r.phone}</p>
            <p><strong>${t('res_vehicle')}:</strong> ${r.vehicleBrand} ${r.vehicleName}</p>
            <p><strong>${t('res_dates')}:</strong> ${r.startDate} → ${r.endDate} (${r.days} ${currentLang === 'es' ? 'días' : 'days'})</p>
            ${r.extras.length > 0 ? `<p><strong>Extras:</strong> ${r.extras.join(', ')}</p>` : ''}
            <p class="res-total"><strong>${t('res_total')}:</strong> $${r.total.toFixed(2)}</p>
        </div>
    `).join('');
}

// ============ NOTIFICATIONS ============
function showNotification(icon, text, type = 'info') {
    const notif = document.getElementById('notification');
    const iconEl = notif.querySelector('.notification-icon');
    const textEl = notif.querySelector('.notification-text');

    iconEl.textContent = icon;
    textEl.textContent = text;

    notif.className = 'notification ' + type;

    // Show
    setTimeout(() => notif.classList.add('show'), 10);

    // Hide after 4 seconds
    setTimeout(() => {
        notif.classList.remove('show');
    }, 4000);
}