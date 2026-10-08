/**
 * ============================================================
 * BELLE SKIN & WELLNESS — whatsapp.js
 * Responsável por: Construção da mensagem · Encode · Redirecionamento
 * ============================================================
 */

function formatWhatsAppMessage(orderData) {
  const { customer, items, total } = orderData;

  const servicesText = items.map(item => {
    const unitPrice = window.formatBRL ? window.formatBRL(item.price * item.qty) : `R$ ${(item.price * item.qty).toFixed(2)}`;
    return `• ${item.name}\n  Quantidade: ${item.qty}\n  Valor: ${unitPrice}`;
  }).join('\n\n');

  const totalFormatted = window.formatBRL ? window.formatBRL(total) : `R$ ${total.toFixed(2)}`;

  let addressBlock = '';
  if (customer.street) {
    const compText = customer.complement ? ` - ${customer.complement}` : '';
    addressBlock = `📍 ENDEREÇO\n\n${customer.street}, ${customer.number}${compText}\nBairro ${customer.neighborhood || ''}\n${customer.city || ''} - ${customer.state || ''}\nCEP ${customer.cep || ''}\n\n`;
  }

  const message = `✨ NOVO AGENDAMENTO / PEDIDO ✨

Olá! Gostaria de solicitar os seguintes serviços:

🧴 SERVIÇOS

${servicesText}

💰 TOTAL: ${totalFormatted}

👤 DADOS DO CLIENTE

Nome: ${customer.name}
Idade: ${customer.age} anos

📱 Telefone:
${customer.phone}

📧 E-mail:
${customer.email}

${addressBlock}🕐 PREFERÊNCIA DE HORÁRIO

${customer.timePreference || 'Não tenho preferência'}

💖 Gostaria de receber informações para confirmação do meu atendimento.

Obrigado(a)!`;

  return message;
}

function sendToWhatsApp(orderData) {
  const cfg = window.clinicConfig || { whatsapp: '5511999999999' };
  const message = formatWhatsAppMessage(orderData);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${cfg.whatsapp}?text=${encoded}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}

// Expor globalmente
window.formatWhatsAppMessage = formatWhatsAppMessage;
window.sendToWhatsApp = sendToWhatsApp;
