/**
 * ============================================================
 * BELLE SKIN & WELLNESS — cart.js
 * Responsável por: Carrinho · LocalStorage · Quantidades · Totais · Drawer
 * ============================================================
 */

const CART_KEY = 'belle_cart_v1';

// ── ESTADO ──────────────────────────────────────────────────────
let cart = loadCart();

// ── PERSISTÊNCIA ────────────────────────────────────────────────
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ── OPERAÇÕES ───────────────────────────────────────────────────
function addToCart(serviceId) {
  const service = window.servicesData?.find(s => s.id === serviceId);
  if (!service) return;

  const existing = cart.find(item => item.id === serviceId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: service.id, qty: 1 });
  }

  saveCart();
  updateCartUI();
  openCartDrawer();
  window.showToast?.('✓ Serviço adicionado ao seu atendimento', 'success');
}

function removeFromCart(serviceId) {
  cart = cart.filter(item => item.id !== serviceId);
  saveCart();
  updateCartUI();
}

function updateQty(serviceId, delta) {
  const item = cart.find(i => i.id === serviceId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(serviceId);
    return;
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const service = window.servicesData?.find(s => s.id === item.id);
    return total + (service ? service.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

// ── UI UPDATES ──────────────────────────────────────────────────
function updateCartUI() {
  updateCartCounter();
  renderCartDrawer();
}

function updateCartCounter() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function renderCartDrawer() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Encontre um tratamento ideal para você.</p>
        <a href="servicos.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Ver serviços</a>
      </div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  // Items
  body.innerHTML = `<div class="cart-items">
    ${cart.map(item => {
      const service = window.servicesData?.find(s => s.id === item.id);
      if (!service) return '';
      return `
        <div class="cart-item" data-id="${service.id}">
          <div class="cart-item-img">
            <img src="${service.image}" alt="${service.name}" loading="lazy">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-category">${service.categoryLabel}</div>
            <div class="cart-item-name">${service.name}</div>
            <div class="cart-item-controls">
              <div class="cart-qty">
                <button class="qty-btn" aria-label="Diminuir quantidade" onclick="updateQty(${service.id}, -1)">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" aria-label="Aumentar quantidade" onclick="updateQty(${service.id}, 1)">+</button>
              </div>
              <div class="cart-item-price">${formatBRL(service.price * item.qty)}</div>
              <button class="cart-item-remove" aria-label="Remover" onclick="removeFromCart(${service.id})" title="Remover">✕</button>
            </div>
          </div>
        </div>`;
    }).join('')}
  </div>`;

  // Footer
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatBRL(getCartTotal());
}

// ── DRAWER ──────────────────────────────────────────────────────
function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.classList.add('no-scroll');
  document.getElementById('cart-close')?.focus();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

// ── LISTENERS GLOBAIS ───────────────────────────────────────────
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('.cart-btn, [data-open-cart], #btn-cart-toggle');
  if (openBtn) {
    e.preventDefault();
    openCartDrawer();
    return;
  }

  const closeBtn = e.target.closest('#cart-close, #cart-overlay');
  if (closeBtn) {
    e.preventDefault();
    closeCartDrawer();
  }
});

// ── INICIALIZAÇÃO ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Limpar carrinho
  document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
    if (confirm('Deseja remover todos os serviços do carrinho?')) clearCart();
  });

  // Botão finalizar
  document.getElementById('btn-checkout')?.addEventListener('click', () => {
    if (cart.length === 0) {
      window.showToast?.('Adicione ao menos um serviço antes de finalizar.', 'default');
      return;
    }
    closeCartDrawer();
    window.openCheckoutModal?.();
  });

  // ESC fecha drawer
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCartDrawer();
  });
});

// ── EXPOR GLOBALMENTE ────────────────────────────────────────────
window.addToCart        = addToCart;
window.removeFromCart   = removeFromCart;
window.updateQty        = updateQty;
window.clearCart        = clearCart;
window.getCartTotal     = getCartTotal;
window.getCartCount     = getCartCount;
window.getCart          = () => cart;
window.openCartDrawer   = openCartDrawer;
window.closeCartDrawer  = closeCartDrawer;
window.formatBRL        = formatBRL;
