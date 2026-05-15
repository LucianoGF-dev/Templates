
        // ============================================
        // PRELOADER
        // ============================================
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').classList.add('hidden');
            }, 2200);
        });

        // ============================================
        // CUSTOM CURSOR
        // ============================================
        const cursorDot = document.getElementById('cursorDot');
        const cursorRing = document.getElementById('cursorRing');
        const mouseFollower = document.getElementById('mouseFollower');

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';

            mouseFollower.style.left = mouseX + 'px';
            mouseFollower.style.top = mouseY + 'px';
        });

        function animateCursor() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';

            followerX += (mouseX - followerX) * 0.05;
            followerY += (mouseY - followerY) * 0.05;

            mouseFollower.style.transform = `translate(${followerX - mouseX}px, ${followerY - mouseY}px)`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects for cursor
        const interactiveElements = document.querySelectorAll('a, button, .property-card, .benefit-card, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        document.addEventListener('mousedown', () => cursorDot.classList.add('click'));
        document.addEventListener('mouseup', () => cursorDot.classList.remove('click'));

        // ============================================
        // NAVBAR SCROLL EFFECT
        // ============================================
        const navbar = document.getElementById('navbar');
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

        // ============================================
        // HAMBURGER MENU - DESHABILITADO
        // ============================================
        // Funcionalidad de menú móvil deshabilitada

        // ============================================
        // HERO PARTICLES
        // ============================================
        const heroParticles = document.getElementById('heroParticles');

        function createParticles() {
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                particle.style.width = (Math.random() * 3 + 1) + 'px';
                particle.style.height = particle.style.width;
                heroParticles.appendChild(particle);
            }
        }
        createParticles();

        // ============================================
        // HERO PARALLAX
        // ============================================
        const heroBg = document.getElementById('heroBg');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
            }
        });

        // ============================================
        // PARALLAX SECTION
        // ============================================
        const parallaxBg = document.getElementById('parallaxBg');

        window.addEventListener('scroll', () => {
            const parallaxSection = document.querySelector('.parallax-section');
            const rect = parallaxSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrolled = (rect.top / window.innerHeight) * 50;
                parallaxBg.style.transform = `translateY(${scrolled}px) scale(1.1)`;
            }
        });

        // ============================================
        // COUNTER ANIMATION
        // ============================================
        function animateCounters() {
            const counters = document.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const start = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(eased * target) + '+';

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
            });
        }

        // Trigger counter when hero is visible
        let countersAnimated = false;
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    setTimeout(animateCounters, 1500);
                }
            });
        }, { threshold: 0.3 });

        heroObserver.observe(document.querySelector('.hero'));

        // ============================================
        // SCROLL REVEAL ANIMATIONS
        // ============================================
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // ============================================
        // PROPERTY FAVORITE TOGGLE - DESHABILITADO
        // ============================================
        // Funcionalidad de favoritos deshabilitada

        // ============================================
        // CONTACT FORM - DESHABILITADO
        // ============================================
        // Funcionalidad de formulario de contacto deshabilitada

        // ============================================
        // SMOOTH SCROLL FOR ANCHOR LINKS - DESHABILITADO
        // ============================================
        // Funcionalidad de smooth scroll deshabilitada

        // ============================================
        // NAVBAR ACTIVE LINK ON SCROLL
        // ============================================
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + current) {
                    link.style.color = '#c9a84c';
                }
            });
        });

        // ============================================
        // TILT EFFECT ON PROPERTY CARDS - DESHABILITADO
        // ============================================
        // Funcionalidad de tilt effect deshabilitada

        // ============================================
        // FORM INPUT ANIMATIONS - DESHABILITADO
        // ============================================
        // Funcionalidad de animaciones de formulario deshabilitada

        // ============================================
        // PERFORMANCE: REDUCE ANIMATIONS ON LOW-END
        // ============================================
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.particle, .scroll-line, .preloader-bar').forEach(el => {
                el.style.animation = 'none';
            });
        }