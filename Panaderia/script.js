/* ========================================
   LA DORADA PANADERÍA - JAVASCRIPT
   Premium Bakery Website
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ============ LOADER ============
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2200);
    });

    // Fallback: hide loader after 4 seconds max
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 4000);

    // ============ AOS INIT ============
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: 'mobile'
    });

    // ============ NAVBAR ============
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveLink = () => {
        const scrollPos = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);

    // ============ HERO PARTICLES ============
    const particlesContainer = document.getElementById('heroParticles');
    
    const createParticles = () => {
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 6 + 3}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 10 + 8}s`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
            particlesContainer.appendChild(particle);
        }
    };
    
    createParticles();

    // ============ COUNTER ANIMATION ============
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        
        const heroStats = document.querySelector('.hero-stats');
        if (!heroStats) return;
        
        const rect = heroStats.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString('es-AR');
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString('es-AR') + '+';
                    }
                };
                
                updateCounter();
            });
        }
    };

    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // ============ PRODUCT FILTER ============
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ============ PROMO COUNTDOWN TIMER ============
    const timerHours = document.getElementById('timerHours');
    const timerMinutes = document.getElementById('timerMinutes');
    const timerSeconds = document.getElementById('timerSeconds');

    // Set deadline to end of current day
    const getDeadline = () => {
        const now = new Date();
        const deadline = new Date(now);
        deadline.setHours(23, 59, 59, 999);
        return deadline.getTime();
    };

    let deadline = getDeadline();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            deadline = getDeadline();
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerHours.textContent = hours.toString().padStart(2, '0');
        timerMinutes.textContent = minutes.toString().padStart(2, '0');
        timerSeconds.textContent = seconds.toString().padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);

    // ============ TESTIMONIALS SLIDER ============
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dotsContainer = document.getElementById('sliderDots');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentSlide = 0;
    let cardWidth = 0;
    let visibleCards = 1;
    let autoSlideInterval;

    const getVisibleCards = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const getMaxSlide = () => {
        return Math.max(0, cards.length - visibleCards);
    };

    const createDots = () => {
        dotsContainer.innerHTML = '';
        const maxSlide = getMaxSlide();
        for (let i = 0; i <= maxSlide; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    const goToSlide = (index) => {
        const maxSlide = getMaxSlide();
        currentSlide = Math.min(Math.max(0, index), maxSlide);
        
        cardWidth = cards[0].offsetWidth + 28; // card width + gap
        track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
        updateDots();
    };

    const nextSlide = () => {
        const maxSlide = getMaxSlide();
        if (currentSlide >= maxSlide) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        goToSlide(currentSlide);
    };

    const prevSlide = () => {
        const maxSlide = getMaxSlide();
        if (currentSlide <= 0) {
            currentSlide = maxSlide;
        } else {
            currentSlide--;
        }
        goToSlide(currentSlide);
    };

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoSlide();
        }
    }, { passive: true });

    const initSlider = () => {
        visibleCards = getVisibleCards();
        currentSlide = Math.min(currentSlide, getMaxSlide());
        createDots();
        goToSlide(currentSlide);
    };

    initSlider();
    startAutoSlide();
    window.addEventListener('resize', initSlider);

    // ============ GALLERY LIGHTBOX ============
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    let currentImageIndex = 0;
    const galleryImages = [];

    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        
        galleryImages.push({
            src: img.src.replace('w=500', 'w=1200').replace('w=800', 'w=1200'),
            caption: caption ? caption.textContent : ''
        });

        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });

    const openLightbox = () => {
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // ============ FAQ ACCORDION ============
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ============ CONTACT FORM ============
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Build WhatsApp message
        let whatsappMessage = `¡Hola La Dorada! 🍞\n\n`;
        whatsappMessage += `*Nombre:* ${name}\n`;
        whatsappMessage += `*Email:* ${email}\n`;
        if (phone) whatsappMessage += `*Teléfono:* ${phone}\n`;
        whatsappMessage += `*Asunto:* ${subject}\n`;
        whatsappMessage += `*Mensaje:* ${message}`;

        const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Show success feedback
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>¡Enviado! ✓</span>';
        submitBtn.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            contactForm.reset();
        }, 1000);
    });

    // ============ BACK TO TOP ============
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============ PARALLAX EFFECT ON HERO ============
    const heroBg = document.querySelector('.hero-bg img');
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            if (heroBg && scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
            }
        }
    });

    // ============ INTERSECTION OBSERVER FOR ANIMATIONS ============
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for additional animations
    document.querySelectorAll('.product-card, .why-card, .promo-card, .contact-card').forEach(el => {
        observer.observe(el);
    });

    // ============ PERFORMANCE: LAZY LOAD IMAGES ============
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============ CONSOLE BRANDING ============
    console.log(
        '%c🍞 La Dorada Panadería %c\nHecho con ❤️ y mucho pan',
        'color: #8B5E3C; font-size: 20px; font-weight: bold; font-family: serif;',
        'color: #6B6560; font-size: 12px;'
    );

});