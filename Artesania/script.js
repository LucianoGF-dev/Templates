/* ============================================
   ARTESANÍAS ALMA VIVA — JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== VARIABLES ====================
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const cartBtn = document.getElementById('cartBtn');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const backToTop = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  const promoForm = document.getElementById('promoForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const testimonialsDots = document.getElementById('testimonialsDots');

  // Carrito de compras
  let cart = [];

  // Slider testimonios
  let currentTestimonial = 0;
  const totalTestimonials = 4;

  // ==================== NAVBAR SCROLL ====================
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar con fondo al hacer scroll
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Botón volver arriba
    if (currentScroll > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Actualizar link activo del menú
    updateActiveNavLink();

    lastScroll = currentScroll;
  });

  // ==================== LINK ACTIVO ====================
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');
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
  }

  // ==================== MENÚ HAMBURGUESA ====================
  hamburgerBtn.addEventListener('click', () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
  });

  // Cerrar menú mobile al hacer clic en un enlace
  document.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // ==================== CARRITO ====================
  // Abrir carrito
  cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Cerrar carrito
  function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Agregar al carrito
  document.querySelectorAll('.product-card__add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const img = btn.dataset.img;

      addToCart(name, price, img);

      // Feedback visual
      btn.textContent = '✓ Agregado';
      btn.style.background = '#25D366';
      setTimeout(() => {
        btn.textContent = 'Agregar al carrito';
        btn.style.background = '';
      }, 1500);
    });
  });

  function addToCart(name, price, img) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, img, quantity: 1 });
    }

    updateCartUI();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
  }

  function updateQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }

  function updateCartUI() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Mostrar/ocultar items vacíos
    if (cart.length === 0) {
      cartEmpty.style.display = 'block';
      cartFooter.style.display = 'none';
      // Limpiar items renderizados
      const items = cartItems.querySelectorAll('.cart-item');
      items.forEach(item => item.remove());
    } else {
      cartEmpty.style.display = 'none';
      cartFooter.style.display = 'block';

      // Renderizar items
      const items = cartItems.querySelectorAll('.cart-item');
      items.forEach(item => item.remove());

      cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="cart-item__image">
          <div class="cart-item__info">
            <p class="cart-item__name">${item.name}</p>
            <p class="cart-item__price">$${(item.price * item.quantity).toFixed(2)}</p>
            <div class="cart-item__quantity">
              <button class="cart-item__qty-btn" onclick="window.updateQty(${index}, -1)" aria-label="Reducir cantidad">−</button>
              <span class="cart-item__qty-value">${item.quantity}</span>
              <button class="cart-item__qty-btn" onclick="window.updateQty(${index}, 1)" aria-label="Aumentar cantidad">+</button>
            </div>
            <button class="cart-item__remove" onclick="window.removeCartItem(${index})">Eliminar</button>
          </div>
        `;
        cartItems.appendChild(itemEl);
      });

      // Actualizar total
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotal.textContent = `$${total.toFixed(2)}`;
    }
  }

  // Exponer funciones al scope global para los onclick inline
  window.updateQty = updateQuantity;
  window.removeCartItem = removeFromCart;

  // Checkout
  checkoutBtn.addEventListener('click', () => {
    alert('¡Gracias por tu compra! 🎉\nTotal: ' + cartTotal.textContent + '\n\nEn una tienda real, aquí se redirigiría al proceso de pago.');
    cart = [];
    updateCartUI();
    closeCart();
  });

  // ==================== WISHLIST ====================
  document.querySelectorAll('.product-card__wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent === '♡') {
        btn.textContent = '♥';
        btn.style.color = '#E74C3C';
      } else {
        btn.textContent = '♡';
        btn.style.color = '';
      }
    });
  });

  // ==================== FILTROS DE PRODUCTOS ====================
  document.querySelectorAll('.products__filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón
      document.querySelectorAll('.products__filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const products = document.querySelectorAll('.product-card');

      products.forEach(product => {
        if (filter === 'todos' || product.dataset.category === filter) {
          product.style.display = '';
          product.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

  // ==================== ANIMACIONES AL SCROLL ====================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
  });

  // ==================== BOTÓN VOLVER ARRIBA ====================
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==================== VALIDACIÓN FORMULARIO ====================
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validar nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 2) {
      nameError.textContent = 'Por favor, ingresa tu nombre';
      name.classList.add('error');
      isValid = false;
    } else {
      nameError.textContent = '';
      name.classList.remove('error');
    }

    // Validar email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = 'Por favor, ingresa un correo válido';
      email.classList.add('error');
      isValid = false;
    } else {
      emailError.textContent = '';
      email.classList.remove('error');
    }

    // Validar mensaje
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim().length < 10) {
      messageError.textContent = 'El mensaje debe tener al menos 10 caracteres';
      message.classList.add('error');
      isValid = false;
    } else {
      messageError.textContent = '';
      message.classList.remove('error');
    }

    if (isValid) {
      // Mostrar éxito
      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';

      // Reset después de 5 segundos
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        contactSuccess.style.display = 'none';
      }, 5000);
    }
  });

  // Limpiar errores al escribir
  document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorEl = input.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.textContent = '';
    });
  });

  // ==================== FORMULARIO PROMO ====================
  promoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = promoForm.querySelector('input[type="email"]');
    alert(`🎉 ¡Cupón enviado a ${email.value}!\n\nTu código: ALMAVIVA10\n\n10% de descuento en tu primera compra.`);
    email.value = '';
  });

  // ==================== NEWSLETTER ====================
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]');
    alert(`✅ ¡Bienvenido/a a nuestra comunidad!\n\nRecibirás novedades en ${email.value}`);
    email.value = '';
  });

  // ==================== SLIDER TESTIMONIOS ====================
  function goToTestimonial(index) {
    if (index < 0) index = totalTestimonials - 1;
    if (index >= totalTestimonials) index = 0;

    currentTestimonial = index;
    testimonialsTrack.style.transform = `translateX(-${index * 100}%)`;

    // Actualizar dots
    document.querySelectorAll('.testimonials__dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => goToTestimonial(currentTestimonial - 1));
  nextBtn.addEventListener('click', () => goToTestimonial(currentTestimonial + 1));

  // Dots click
  document.querySelectorAll('.testimonials__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToTestimonial(parseInt(dot.dataset.index));
    });
  });

  // Auto-play slider
  let testimonialInterval = setInterval(() => {
    goToTestimonial(currentTestimonial + 1);
  }, 6000);

  // Pausar al hover
  const testimonialsSlider = document.querySelector('.testimonials__slider');
  testimonialsSlider.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
  testimonialsSlider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);
  });

  // Touch support para slider
  let touchStartX = 0;
  let touchEndX = 0;

  testimonialsSlider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  testimonialsSlider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToTestimonial(currentTestimonial + 1);
      } else {
        goToTestimonial(currentTestimonial - 1);
      }
    }
  }, { passive: true });

  // ==================== SMOOTH SCROLL PARA LINKS ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== ANIMACIÓN KEYFRAME DINÁMICA ====================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // ==================== LOG ====================
  console.log('%c🏺 Artesanías Alma Viva', 'font-size: 20px; font-weight: bold; color: #C67B5C;');
  console.log('%cHecho a mano con amor ❤️', 'font-size: 12px; color: #6B5E52;');

}); // Fin DOMContentLoaded