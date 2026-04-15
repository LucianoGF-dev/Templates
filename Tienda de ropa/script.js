/* ============================================================
   ÉLAN — Premium Fashion Store
   Archivo: script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===================== NAVBAR SCROLL =====================
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  /**
   * Maneja el comportamiento de la navbar al hacer scroll:
   - Agrega clase 'scrolled' cuando se baja más de 50px
   - Muestra/oculta el botón "volver arriba"
   */
  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Botón volver arriba
    if (scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Actualizar link activo en navbar
    updateActiveNav();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ===================== ACTIVE NAV LINK =====================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  function updateActiveNav() {
    const scrollY = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ===================== MENÚ HAMBURGUESA =====================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Cerrar menú al hacer click en un link
  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ===================== SCROLL SUAVE =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetEl.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===================== BOTÓN VOLVER ARRIBA =====================
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ===================== ANIMACIONES AL SCROLL =====================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clases de animación
  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
  });

  // ===================== FILTRO DE PRODUCTOS =====================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Actualizar botón activo
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      productCards.forEach(card => {
        const category = card.dataset.category;

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          // Re-trigger animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ===================== SLIDER DE TESTIMONIOS =====================
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('testimonials-dots');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  let currentTestimonial = 0;
  let testimonialInterval;

  // Crear dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('testimonials__dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Testimonio ${index + 1}`);
    dot.addEventListener('click', () => goToTestimonial(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.testimonials__dot');

  function goToTestimonial(index) {
    // Ocultar actual
    testimonials[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');

    // Calcular nuevo índice
    currentTestimonial = (index + testimonials.length) % testimonials.length;

    // Mostrar nuevo
    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
  }

  function nextTestimonial() {
    goToTestimonial(currentTestimonial + 1);
  }

  function prevTestimonial() {
    goToTestimonial(currentTestimonial - 1);
  }

  prevBtn.addEventListener('click', () => {
    prevTestimonial();
    resetAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoSlide();
  });

  // Auto-slide cada 5 segundos
  function startAutoSlide() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function resetAutoSlide() {
    clearInterval(testimonialInterval);
    startAutoSlide();
  }

  startAutoSlide();

  // ===================== COUNTDOWN =====================
  // Configurar fecha objetivo: 7 días desde ahora
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7);

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const diff = countdownDate - now;

    if (diff <= 0) {
      // Reiniciar countdown
      countdownDate.setDate(countdownDate.getDate() + 7);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ===================== VALIDACIÓN DEL FORMULARIO =====================
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  const validators = {
    name: {
      el: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: (value) => {
        if (!value.trim()) return 'Por favor ingresa tu nombre';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      }
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Por favor ingresa tu correo electrónico';
        if (!emailRegex.test(value)) return 'Ingresa un correo electrónico válido';
        return '';
      }
    },
    message: {
      el: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (value) => {
        if (!value.trim()) return 'Por favor escribe un mensaje';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';
      }
    }
  };

  // Validación en tiempo real
  Object.values(validators).forEach(({ el, error, validate }) => {
    el.addEventListener('input', () => {
      const errorMsg = validate(el.value);
      if (errorMsg) {
        error.textContent = errorMsg;
        el.classList.add('error');
      } else {
        error.textContent = '';
        el.classList.remove('error');
      }
    });

    el.addEventListener('blur', () => {
      const errorMsg = validate(el.value);
      error.textContent = errorMsg;
      if (errorMsg) el.classList.add('error');
      else el.classList.remove('error');
    });
  });

  // Submit del formulario
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validar todos los campos
    Object.values(validators).forEach(({ el, error, validate }) => {
      const errorMsg = validate(el.value);
      error.textContent = errorMsg;
      if (errorMsg) {
        el.classList.add('error');
        isValid = false;
      } else {
        el.classList.remove('error');
      }
    });

    if (!isValid) return;

    // Simular envío exitoso
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      formSuccess.style.display = 'block';
      submitBtn.textContent = 'Enviar Mensaje';
      submitBtn.disabled = false;

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 5000);
    }, 1500);
  });

  // ===================== INICIALIZACIÓN =====================
  // Ejecutar handleScroll al cargar
  handleScroll();

  // Log para desarrollo
  console.log('🚀 ÉLAN Fashion Store loaded successfully');
});