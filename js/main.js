/**
 * ============================================================
 * BELLE SKIN & WELLNESS — main.js
 * Responsável por: Menu · Header · Scroll · Animações · Geral
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── HEADER SCROLL BEHAVIOR ──────────────────────────────
  const header = document.getElementById('site-header');

  const handleScroll = () => {
    if (!header) return;
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.remove('header-transparent');
      header.classList.add('header-scrolled');
    } else {
      header.classList.add('header-transparent');
      header.classList.remove('header-scrolled');
    }
  };

  // Inicia transparente apenas na home (hero)
  const isHome = document.body.classList.contains('page-home');
  if (isHome && header) {
    header.classList.add('header-transparent');
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── ACTIVE NAV LINK ──────────────────────────────────────
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.endsWith(currentPage))) {
      link.classList.add('active');
    }
  });

  // ── MOBILE MENU ──────────────────────────────────────────
  const menuBtn = document.querySelector('.menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      menuBtn.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('no-scroll', !isOpen);

      // Acessibilidade
      menuBtn.setAttribute('aria-expanded', !isOpen);
      menuBtn.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    });

    // Fechar ao clicar em link
    mobileNav.querySelectorAll('.mobile-nav-link, .mobile-nav-cta').forEach(el => {
      el.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.classList.remove('no-scroll');
        menuBtn.setAttribute('aria-expanded', false);
      });
    });

    // Fechar com ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.classList.remove('no-scroll');
        menuBtn.setAttribute('aria-expanded', false);
        menuBtn.focus();
      }
    });
  }

  // ── SCROLL REVEAL ────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── BACK TO TOP ──────────────────────────────────────────
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── HERO SCROLL INDICATOR ────────────────────────────────
  const heroScroll = document.querySelector('.hero-scroll');
  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      const nextSection = document.querySelector('.hero + *');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ── FAQ ACCORDION ────────────────────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fechar todos
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          const otherBtn = other.querySelector('.faq-question');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle atual
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── TESTIMONIALS CAROUSEL ────────────────────────────────
  initTestimonialsCarousel();

  // ── BRANDS TICKER ────────────────────────────────────────
  initBrandsTicker();

  // ── POPULATE HEADER DATA ──────────────────────────────────
  populateHeaderData();

  // ── SMOOTH SCROLL for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

// ── TESTIMONIALS CAROUSEL ──────────────────────────────────────
function initTestimonialsCarousel() {
  const slides = document.querySelector('.testimonial-slides');
  if (!slides) return;

  let current = 0;
  const items = slides.querySelectorAll('.testimonial-slide');
  const total = items.length;
  const dotsContainer = document.querySelector('.testimonial-dots');

  if (total === 0) return;

  // Cria dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    items.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 't-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    dotsContainer?.querySelectorAll('.t-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  };

  const goTo = (idx) => {
    current = (idx + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
  };

  document.querySelector('.testimonial-prev')?.addEventListener('click', () => goTo(current - 1));
  document.querySelector('.testimonial-next')?.addEventListener('click', () => goTo(current + 1));

  // Auto play
  const interval = setInterval(() => goTo(current + 1), 5000);

  // Pause on hover
  slides.closest('.testimonials-carousel')?.addEventListener('mouseenter', () => clearInterval(interval));

  // Touch support
  let touchStartX = 0;
  slides.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  slides.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });
}

// ── BRANDS TICKER ────────────────────────────────────────────────
function initBrandsTicker() {
  const track = document.querySelector('.brands-track');
  if (!track) return;
  // Duplicar itens para scroll infinito
  const items = track.innerHTML;
  track.innerHTML += items;
}

// ── POPULATE HEADER DATA ──────────────────────────────────────────
function populateHeaderData() {
  if (!window.clinicConfig) return;
  const cfg = window.clinicConfig;

  // Atualiza nomes da clínica no header/footer
  document.querySelectorAll('[data-clinic-name]').forEach(el => {
    el.textContent = cfg.name;
  });
  document.querySelectorAll('[data-clinic-phone]').forEach(el => {
    el.textContent = cfg.phone;
    if (el.tagName === 'A') el.href = `tel:${cfg.whatsapp}`;
  });
  document.querySelectorAll('[data-clinic-email]').forEach(el => {
    el.textContent = cfg.email;
    if (el.tagName === 'A') el.href = `mailto:${cfg.email}`;
  });
  document.querySelectorAll('[data-clinic-address]').forEach(el => {
    el.textContent = `${cfg.address}, ${cfg.city} — ${cfg.state}`;
  });
  document.querySelectorAll('[data-clinic-hours-week]').forEach(el => {
    el.textContent = cfg.openingHours.weekdays;
  });
  document.querySelectorAll('[data-clinic-hours-sat]').forEach(el => {
    el.textContent = cfg.openingHours.saturday;
  });
  document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
    el.href = `https://wa.me/${cfg.whatsapp}`;
  });
  document.querySelectorAll('[data-instagram-link]').forEach(el => {
    el.href = cfg.instagram;
  });
  document.querySelectorAll('[data-facebook-link]').forEach(el => {
    el.href = cfg.facebook;
  });
  document.querySelectorAll('[data-tiktok-link]').forEach(el => {
    el.href = cfg.tiktok;
  });

  // Footer copyright
  document.querySelectorAll('[data-copyright]').forEach(el => {
    el.textContent = `© ${new Date().getFullYear()} ${cfg.name}. Todos os direitos reservados.`;
  });
}

// ── TOAST ─────────────────────────────────────────────────────────
function showToast(message, type = 'default', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span> ${message}`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// Expor globalmente
window.showToast = showToast;
