/**
 * ============================================================
 * BELLE SKIN & WELLNESS — services.js
 * Responsável por: Catálogo · Filtros · Busca · Renderização
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('services-grid');
  if (!grid || !window.servicesData) return;

  let activeFilter = 'all';
  let searchQuery = '';
  let sortOrder = 'default';

  // ── RENDER ────────────────────────────────────────────────
  function renderServices() {
    let filtered = [...window.servicesData];

    // Filtro por categoria
    if (activeFilter !== 'all') {
      filtered = filtered.filter(s => s.category === activeFilter);
    }

    // Busca por nome/descrição
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Ordenação
    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'alpha') {
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <p>Nenhum serviço encontrado para "<strong>${searchQuery}</strong>".</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map(service => `
      <article class="service-card reveal" data-category="${service.category}" data-id="${service.id}">
        <div class="service-card-img">
          <img src="${service.image}" alt="${service.name}" loading="lazy">
          <span class="service-card-badge">${service.categoryLabel}</span>
          ${service.featured ? '<span class="service-card-featured">⭐ Destaque</span>' : ''}
        </div>
        <div class="service-card-body">
          <h3 class="service-card-name">${service.name}</h3>
          <p class="service-card-desc">${service.description}</p>
          <div class="service-card-meta">
            <span class="meta-tag">⏱ ${service.duration}</span>
            <span class="meta-tag">🗓 ${service.sessions}</span>
          </div>
          <div class="service-card-footer">
            <div class="service-price">${window.formatBRL ? window.formatBRL(service.price) : 'R$ ' + service.price.toFixed(2).replace('.', ',')}</div>
            <button
              class="btn-add-cart"
              id="add-cart-${service.id}"
              aria-label="Adicionar ${service.name} ao carrinho"
              onclick="handleAddToCart(${service.id})"
            >
              + Adicionar
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Scroll reveal para novos elementos
    grid.querySelectorAll('.reveal').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }

  // ── FILTROS ──────────────────────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      renderServices();
    });
  });

  // ── BUSCA ────────────────────────────────────────────────
  const searchInput = document.getElementById('search-services');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value;
      renderServices();
    });
  }

  // ── ORDENAÇÃO ────────────────────────────────────────────
  const sortSelect = document.getElementById('sort-services');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortOrder = sortSelect.value;
      renderServices();
    });
  }

  // ── RENDER INICIAL ───────────────────────────────────────
  renderServices();
});

// ── ADD TO CART COM FEEDBACK VISUAL ──────────────────────────────
function handleAddToCart(serviceId) {
  const btn = document.getElementById(`add-cart-${serviceId}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Adicionado';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '+ Adicionar';
    }, 2000);
  }
  window.addToCart?.(serviceId);
}

window.handleAddToCart = handleAddToCart;
