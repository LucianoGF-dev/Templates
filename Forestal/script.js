/* ============================================
   NEXUSCORP SOLUTIONS - MAIN SCRIPT
   ============================================
   Tabla de contenidos:
   1. Preloader
   2. Navbar scroll effect
   3. Menú hamburguesa
   4. Scroll suave entre secciones
   5. Animaciones al aparecer (Intersection Observer)
   6. Contador animado de estadísticas
   7. Validación del formulario
   8. Botón volver arriba
   9. Navbar activo según sección
   10. Inicialización
   ============================================ */


'use strict';


// ============================================
// 1. PRELOADER
// ============================================

const Preloader = {
    init() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        // Ocultar preloader cuando la página cargue
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.classList.remove('preloader-active');

                // Remover del DOM después de la transición
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }, 800);
        });

        // Si la página ya cargó antes de que el script se ejecute
        if (document.readyState === 'complete') {
            setTimeout(() => {
                preloader.classList.add('hidden');
                document.body.classList.remove('preloader-active');
            }, 800);
        }
    }
};


// ============================================
// 2. NAVBAR SCROLL EFFECT
// ============================================

const NavbarScroll = {
    navbar: null,

    init() {
        this.navbar = document.getElementById('navbar');
        if (!this.navbar) return;

        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    },

    handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
};


// ============================================
// 3. MENÚ HAMBURGUESA
// ============================================

const HamburgerMenu = {
    hamburger: null,
    menu: null,
    overlay: null,
    isOpen: false,

    init() {
        this.hamburger = document.getElementById('hamburger');
        this.menu = document.getElementById('navbar-menu');
        if (!this.hamburger || !this.menu) return;

        // Crear overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'navbar-overlay';
        document.body.appendChild(this.overlay);

        this.hamburger.addEventListener('click', () => this.toggle());
        this.overlay.addEventListener('click', () => this.close());

        // Cerrar al hacer click en un enlace del menú
        const links = this.menu.querySelectorAll('.navbar-link');
        links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    },

    toggle() {
        this.isOpen ? this.close() : this.open();
    },

    open() {
        this.isOpen = true;
        this.hamburger.classList.add('active');
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.menu.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close() {
        this.isOpen = false;
        this.hamburger.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.menu.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
};


// ============================================
// 4. SCROLL SUAVE ENTRE SECCIONES
// ============================================

const SmoothScroll = {
    init() {
        // Manejar todos los enlaces con hash
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();

                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};


// ============================================
// 5. ANIMACIONES AL APARECER
//    (Intersection Observer)
// ============================================

const ScrollAnimations = {
    observer: null,

    init() {
        // Seleccionar todos los elementos con clases de animación
        const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-in');
        if (animatedElements.length === 0) return;

        const options = {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Agregar delay escalonado para elementos hermanos
                    const siblings = entry.target.parentElement?.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-in');
                    let delay = 0;
                    if (siblings && siblings.length > 1) {
                        const siblingIndex = Array.from(siblings).indexOf(entry.target);
                        delay = siblingIndex * 100;
                    }

                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, delay);

                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        animatedElements.forEach(el => this.observer.observe(el));
    }
};


// ============================================
// 6. CONTADOR ANIMADO DE ESTADÍSTICAS
// ============================================

const CounterAnimation = {
    observer: null,

    init() {
        const counters = document.querySelectorAll('.hero-stat-number[data-count]');
        if ( counters.length === 0) return;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => this.observer.observe(counter));
    },

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // ~60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(updateCounter);
    }
};


// ============================================
// 7. VALIDACIÓN DEL FORMULARIO
// ============================================

const FormValidator = {
    form: null,
    submitBtn: null,
    successMessage: null,
    resetBtn: null,

    rules: {
        nombre: {
            required: true,
            minLength: 3,
            message: 'Por favor ingresa tu nombre completo (mínimo 3 caracteres).'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Por favor ingresa un correo electrónico válido.'
        },
        telefono: {
            required: false,
            pattern: /^[\d\s\-\+\(\)]{7,20}$/,
            message: 'Por favor ingresa un número de teléfono válido.'
        },
        asunto: {
            required: true,
            message: 'Por favor selecciona un asunto.'
        },
        mensaje: {
            required: true,
            minLength: 10,
            message: 'Por favor escribe un mensaje (mínimo 10 caracteres).'
        },
        privacidad: {
            required: true,
            message: 'Debes aceptar la política de privacidad.'
        }
    },

    init() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.successMessage = document.getElementById('form-success');
        this.resetBtn = document.getElementById('reset-form-btn');
        if (!this.form) return;

        // Validación en tiempo real al salir del campo
        const inputs = this.form.querySelectorAll('.form-input, input[type="checkbox"]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                // Limpiar error mientras escribe
                const errorEl = document.getElementById(`error-${input.id}`);
                if (errorEl) errorEl.textContent = '';
                input.classList.remove('error');
            });
        });

        // Submit del formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Reset
        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', () => this.resetForm());
        }
    },

    validateField(input) {
        const fieldName = input.id;
        const rule = this.rules[fieldName];
        if (!rule) return true;

        const errorEl = document.getElementById(`error-${fieldName}`);
        let isValid = true;
        let errorMessage = '';

        // Campo requerido
        if (rule.required) {
            if (input.type === 'checkbox') {
                if (!input.checked) {
                    isValid = false;
                    errorMessage = rule.message;
                }
            } else if (!input.value.trim()) {
                isValid = false;
                errorMessage = rule.message;
            }
        }

        // Longitud mínima
        if (rule.minLength && input.value.trim().length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message;
        }

        // Patrón
        if (rule.pattern && input.value.trim()) {
            if (!rule.pattern.test(input.value.trim())) {
                isValid = false;
                errorMessage = rule.message;
            }
        }

        // Actualizar UI
        if (errorEl) errorEl.textContent = errorMessage;
        input.classList.toggle('error', !isValid);
        input.classList.toggle('success', isValid && input.value.trim() !== '');

        return isValid;
    },

    validateAll() {
        const fields = ['nombre', 'email', 'telefono', 'asunto', 'mensaje', 'privacidad'];
        let allValid = true;

        fields.forEach(fieldName => {
            const input = this.form.querySelector(`#${fieldName}`);
            if (input) {
                const isValid = this.validateField(input);
                if (!isValid) allValid = false;
            }
        });

        return allValid;
    },

    handleSubmit(e) {
        e.preventDefault();

        if (!this.validateAll()) {
            // Enfocar el primer campo con error
            const firstError = this.form.querySelector('.form-input.error, input[type="checkbox"].error');
            if (firstError) firstError.focus();
            return;
        }

        // Simular envío
        this.setLoading(true);

        setTimeout(() => {
            this.setLoading(false);
            this.showSuccess();
        }, 1500);
    },

    setLoading(isLoading) {
        const btnText = this.submitBtn.querySelector('.btn-text');
        const btnLoading = this.submitBtn.querySelector('.btn-loading');

        if (isLoading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            this.submitBtn.disabled = true;
        } else {
            btnText.style.display = 'inline-flex';
            btnLoading.style.display = 'none';
            this.submitBtn.disabled = false;
        }
    },

    showSuccess() {
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';
    },

    resetForm() {
        this.form.reset();
        this.form.style.display = 'block';
        this.successMessage.style.display = 'none';

        // Limpiar clases de error/éxito
        this.form.querySelectorAll('.form-input').forEach(input => {
            input.classList.remove('error', 'success');
        });
        this.form.querySelectorAll('.form-error').forEach(error => {
            error.textContent = '';
        });
    }
};


// ============================================
// 8. BOTÓN VOLVER ARRIBA
// ============================================

const BackToTop = {
    button: null,

    init() {
        this.button = document.getElementById('back-to-top');
        if (!this.button) return;

        this.handleScroll = this.handleScroll.bind(this);
        window.addEventListener('scroll', this.handleScroll, { passive: true });

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }
};


// ============================================
// 9. NAVBAR ACTIVO SEGÚN SECCIÓN
// ============================================

const ActiveNavHighlight = {
    observer: null,
    navLinks: null,

    init() {
        this.navLinks = document.querySelectorAll('.navbar-link');
        if (this.navLinks.length === 0) return;

        const sections = document.querySelectorAll('section[id]');
        if (sections.length === 0) return;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    this.updateActiveLink(activeId);
                }
            });
        }, {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        });

        sections.forEach(section => this.observer.observe(section));
    },

    updateActiveLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    }
};


// ============================================
// 10. AÑO ACTUAL EN FOOTER
// ============================================

const FooterYear = {
    init() {
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }
};

/* ========================================
   WHATSAPP BUTTON ENHANCEMENTS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappBtn) {
        // Mostrar botón después del scroll (opcional)
        let whatsappVisible = true;
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Ocultar al bajar, mostrar al subir (solo en desktop)
            if (window.innerWidth > 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 300) {
                    whatsappBtn.style.transform = 'translateY(100px) scale(0.8)';
                    whatsappBtn.style.opacity = '0';
                    whatsappVisible = false;
                } else if (!whatsappVisible) {
                    whatsappBtn.style.transform = 'translateY(0) scale(1)';
                    whatsappBtn.style.opacity = '1';
                    whatsappVisible = true;
                }
            }
            lastScrollY = currentScrollY;
        });
        
        // Tracking de clics (opcional - para Google Analytics o similar)
        whatsappBtn.addEventListener('click', () => {
            // Ejemplo: gtag('event', 'whatsapp_click', { ... });
            console.log('WhatsApp button clicked');
            
            // Efecto visual de clic
            whatsappBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                whatsappBtn.style.transform = '';
            }, 150);
        });
        
        // Cambiar mensaje según la sección actual (opcional)
        const updateWhatsAppMessage = () => {
            const sections = ['inicio', 'empresa', 'servicios', 'seguridad', 'calidad', 'contacto'];
            const currentSection = sections.find(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            
            const messages = {
                'inicio': 'Hola NexusCorp, vi su página web y me gustaría más información.',
                'empresa': 'Hola, estoy interesado en conocer más sobre su empresa.',
                'servicios': 'Hola, me interesa contratar sus servicios de consultoría.',
                'seguridad': 'Hola, quiero saber más sobre sus protocolos de seguridad.',
                'calidad': 'Hola, tengo preguntas sobre sus certificaciones de calidad.',
                'contacto': 'Hola, ya estoy en la sección de contacto pero prefiero WhatsApp.'
            };
            
            const message = messages[currentSection] || messages['inicio'];
            const baseUrl = 'https://wa.me/573005550123';
            whatsappBtn.href = `${baseUrl}?text=${encodeURIComponent(message)}`;
        };
        
        // Actualizar mensaje al hacer scroll
        window.addEventListener('scroll', updateWhatsAppMessage, { passive: true });
        updateWhatsAppMessage(); // Ejecutar al cargar
    }
});


// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    Preloader.init();
    NavbarScroll.init();
    HamburgerMenu.init();
    SmoothScroll.init();
    ScrollAnimations.init();
    CounterAnimation.init();
    FormValidator.init();
    BackToTop.init();
    ActiveNavHighlight.init();
    FooterYear.init();
});