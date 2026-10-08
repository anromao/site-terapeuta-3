/**
 * ============================================================
 * BELLE SKIN & WELLNESS — checkout.js
 * Responsável por: Modal de Checkout · Formulário · Validação · ViaCEP · Resumo
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('checkout-modal-overlay');
  const modalClose = document.getElementById('checkout-modal-close');
  const checkoutForm = document.getElementById('checkout-form');
  const btnNextToConfirm = document.getElementById('btn-next-confirm');
  const btnBackToForm = document.getElementById('btn-back-to-form');
  const btnSubmitWA = document.getElementById('btn-submit-whatsapp');
  const cepInput = document.getElementById('cust-cep');

  if (!modalOverlay) return;

  // Estado transitório do pedido pronto para envio
  let pendingOrderData = null;

  // ── ABRIR E FECHAR MODAL ──────────────────────────────────────
  function openCheckoutModal() {
    const cart = window.getCart?.() || [];
    if (cart.length === 0) {
      window.showToast?.('Seu carrinho está vazio.', 'default');
      return;
    }

    renderCheckoutSummary();
    showStep(1);
    modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');

    // Foco no primeiro campo após abertura
    setTimeout(() => {
      document.getElementById('cust-name')?.focus();
    }, 150);
  }

  function closeCheckoutModal() {
    modalOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // ── CONTROLE DE ETAPAS (1: Formulário/Resumo, 2: Confirmação) ──
  function showStep(stepNumber) {
    document.querySelectorAll('.checkout-step').forEach(step => {
      step.classList.remove('active');
    });
    const activeStep = document.getElementById(`checkout-step-${stepNumber}`);
    if (activeStep) {
      activeStep.classList.add('active');
    }
  }

  // ── RENDERIZAR RESUMO NO CHECKOUT ─────────────────────────────
  function renderCheckoutSummary() {
    const container = document.getElementById('checkout-summary-items');
    const totalEl = document.getElementById('checkout-summary-total');
    if (!container) return;

    const cart = window.getCart?.() || [];
    const services = window.servicesData || [];

    const detailedItems = cart.map(item => {
      const s = services.find(srv => srv.id === item.id);
      return {
        id: item.id,
        name: s ? s.name : 'Serviço',
        category: s ? s.categoryLabel : '',
        price: s ? s.price : 0,
        qty: item.qty
      };
    });

    container.innerHTML = detailedItems.map(item => `
      <div class="summary-item">
        <div class="summary-item-left">
          <h4>${item.name}</h4>
          <span>${item.qty}x • ${item.category}</span>
        </div>
        <div class="summary-item-right">
          ${window.formatBRL ? window.formatBRL(item.price * item.qty) : 'R$ ' + (item.price * item.qty).toFixed(2)}
        </div>
      </div>
    `).join('');

    const total = window.getCartTotal?.() || 0;
    if (totalEl) {
      totalEl.textContent = window.formatBRL ? window.formatBRL(total) : 'R$ ' + total.toFixed(2);
    }
  }

  // ── AUTO-PREENCHIMENTO DE CEP (ViaCEP) ─────────────────────────
  if (cepInput) {
    cepInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 5) {
        v = v.substring(0, 5) + '-' + v.substring(5, 8);
      }
      e.target.value = v;
    });

    cepInput.addEventListener('blur', () => {
      const cep = cepInput.value.replace(/\D/g, '');
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then(res => res.json())
          .then(data => {
            if (!data.erro) {
              const street = document.getElementById('cust-street');
              const neigh = document.getElementById('cust-neighborhood');
              const city = document.getElementById('cust-city');
              const state = document.getElementById('cust-state');
              const number = document.getElementById('cust-number');

              if (street) street.value = data.logradouro || '';
              if (neigh) neigh.value = data.bairro || '';
              if (city) city.value = data.localidade || '';
              if (state) state.value = data.uf || '';
              if (number) number.focus();

              clearFieldError(cepInput);
            } else {
              setFieldError(cepInput, 'CEP não encontrado.');
            }
          })
          .catch(() => {
            // Falha silenciosa no ViaCEP
          });
      }
    });
  }

  // ── MÁSCARA TELEFONE ──────────────────────────────────────────
  const phoneInput = document.getElementById('cust-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      if (v.length > 10) {
        v = `(${v.substring(0, 2)}) ${v.substring(2, 7)}-${v.substring(7)}`;
      } else if (v.length > 6) {
        v = `(${v.substring(0, 2)}) ${v.substring(2, 6)}-${v.substring(6)}`;
      } else if (v.length > 2) {
        v = `(${v.substring(0, 2)}) ${v.substring(2)}`;
      }
      e.target.value = v;
    });
  }

  // ── VALIDAÇÃO E ERROS ─────────────────────────────────────────
  function setFieldError(field, message) {
    field.classList.add('error');
    const errEl = field.parentElement?.querySelector('.field-error');
    if (errEl) {
      errEl.textContent = message;
      errEl.classList.add('visible');
    }
  }

  function clearFieldError(field) {
    field.classList.remove('error');
    const errEl = field.parentElement?.querySelector('.field-error');
    if (errEl) {
      errEl.textContent = '';
      errEl.classList.remove('visible');
    }
  }

  function validateForm() {
    let isValid = true;

    // Nome
    const name = document.getElementById('cust-name');
    if (!name || name.value.trim().length < 3) {
      setFieldError(name, 'Informe seu nome completo (mínimo 3 caracteres).');
      isValid = false;
    } else {
      clearFieldError(name);
    }

    // Idade
    const age = document.getElementById('cust-age');
    const ageVal = parseInt(age?.value, 10);
    if (!age || isNaN(ageVal) || ageVal < 12 || ageVal > 120) {
      setFieldError(age, 'Informe uma idade válida entre 12 e 120 anos.');
      isValid = false;
    } else {
      clearFieldError(age);
    }

    // Telefone
    const phone = document.getElementById('cust-phone');
    const phoneRaw = phone?.value.replace(/\D/g, '') || '';
    if (!phone || phoneRaw.length < 10) {
      setFieldError(phone, 'Informe um telefone/WhatsApp válido com DDD.');
      isValid = false;
    } else {
      clearFieldError(phone);
    }

    // Email
    const email = document.getElementById('cust-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      setFieldError(email, 'Informe um endereço de e-mail válido.');
      isValid = false;
    } else {
      clearFieldError(email);
    }

    // CEP
    const cep = document.getElementById('cust-cep');
    const cepRaw = cep?.value.replace(/\D/g, '') || '';
    if (!cep || cepRaw.length !== 8) {
      setFieldError(cep, 'Informe um CEP válido (8 dígitos).');
      isValid = false;
    } else {
      clearFieldError(cep);
    }

    // Rua
    const street = document.getElementById('cust-street');
    if (!street || street.value.trim().length < 2) {
      setFieldError(street, 'Informe a rua / logradouro.');
      isValid = false;
    } else {
      clearFieldError(street);
    }

    // Número
    const number = document.getElementById('cust-number');
    if (!number || number.value.trim().length < 1) {
      setFieldError(number, 'Informe o número.');
      isValid = false;
    } else {
      clearFieldError(number);
    }

    // Bairro
    const neighborhood = document.getElementById('cust-neighborhood');
    if (!neighborhood || neighborhood.value.trim().length < 2) {
      setFieldError(neighborhood, 'Informe o bairro.');
      isValid = false;
    } else {
      clearFieldError(neighborhood);
    }

    // Cidade
    const city = document.getElementById('cust-city');
    if (!city || city.value.trim().length < 2) {
      setFieldError(city, 'Informe a cidade.');
      isValid = false;
    } else {
      clearFieldError(city);
    }

    // Estado
    const state = document.getElementById('cust-state');
    if (!state || state.value.trim().length < 2) {
      setFieldError(state, 'Informe o estado (UF).');
      isValid = false;
    } else {
      clearFieldError(state);
    }

    return isValid;
  }

  // Limpar erro no input ao digitar
  document.querySelectorAll('#checkout-form input, #checkout-form select').forEach(input => {
    input.addEventListener('input', () => clearFieldError(input));
    input.addEventListener('change', () => clearFieldError(input));
  });

  // ── AVANÇAR PARA A ETAPA DE CONFIRMAÇÃO ───────────────────────
  if (btnNextToConfirm) {
    btnNextToConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) {
        window.showToast?.('Por favor, preencha corretamente os campos destacados.', 'default');
        return;
      }

      const cart = window.getCart?.() || [];
      const services = window.servicesData || [];

      const detailedItems = cart.map(item => {
        const s = services.find(srv => srv.id === item.id);
        return {
          id: item.id,
          name: s ? s.name : 'Serviço',
          price: s ? s.price : 0,
          qty: item.qty
        };
      });

      pendingOrderData = {
        customer: {
          name: document.getElementById('cust-name').value.trim(),
          age: document.getElementById('cust-age').value.trim(),
          phone: document.getElementById('cust-phone').value.trim(),
          email: document.getElementById('cust-email').value.trim(),
          cep: document.getElementById('cust-cep').value.trim(),
          street: document.getElementById('cust-street').value.trim(),
          number: document.getElementById('cust-number').value.trim(),
          complement: document.getElementById('cust-complement')?.value.trim() || '',
          neighborhood: document.getElementById('cust-neighborhood').value.trim(),
          city: document.getElementById('cust-city').value.trim(),
          state: document.getElementById('cust-state').value.trim(),
          timePreference: document.getElementById('cust-time-preference')?.value || 'Não tenho preferência'
        },
        items: detailedItems,
        total: window.getCartTotal?.() || 0
      };

      showStep(2);
    });
  }

  // ── VOLTAR PARA O FORMULÁRIO ──────────────────────────────────
  if (btnBackToForm) {
    btnBackToForm.addEventListener('click', () => {
      showStep(1);
    });
  }

  // ── ENVIAR PARA O WHATSAPP ────────────────────────────────────
  if (btnSubmitWA) {
    btnSubmitWA.addEventListener('click', () => {
      if (!pendingOrderData) return;

      // Disparar WhatsApp
      window.sendToWhatsApp?.(pendingOrderData);

      // Limpar formulário e carrinho após conclusão com sucesso
      checkoutForm?.reset();
      window.clearCart?.();
      closeCheckoutModal();

      window.showToast?.('✨ Redirecionando para o WhatsApp da clínica!', 'success');
      pendingOrderData = null;
    });
  }

  // ── LISTENERS DE FECHAMENTO DO MODAL ─────────────────────────
  if (modalClose) modalClose.addEventListener('click', closeCheckoutModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeCheckoutModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeCheckoutModal();
    }
  });

  // Expor globalmente
  window.openCheckoutModal = openCheckoutModal;
  window.closeCheckoutModal = closeCheckoutModal;
});
