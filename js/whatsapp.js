/**
 * INTEGRAÇÃO COM WHATSAPP — AURECI SENA
 * 
 * Constrói a mensagem padronizada de solicitação de atendimento de acordo
 * com a especificação (Seções 26, 27 e 28 do SPEC.md) e realiza o redirecionamento
 * seguro para a API do WhatsApp (wa.me).
 */

const WhatsAppService = {
    /**
     * Valida se o número configurado em therapistConfig é válido
     */
    isConfigured() {
        if (!therapistConfig || !therapistConfig.whatsapp) return false;
        const cleaned = therapistConfig.whatsapp.replace(/\D/g, "");
        return cleaned.length >= 10; // Código país + DDD + telefone
    },

    /**
     * Monta a mensagem estruturada com formatação elegante e emojis discretos
     * @param {Object} data Dados validados da solicitação
     * @returns {string} Mensagem em texto puro para WhatsApp
     */
    buildMessage(data) {
        const therapySelected = data.therapy && data.therapy.trim() !== "" 
            ? data.therapy 
            : "Gostaria de orientação para escolher a prática adequada";

        const emailLine = data.email && data.email.trim() !== ""
            ? `\n📧 E-mail:\n${data.email.trim()}\n`
            : "";

        const messageLine = data.message && data.message.trim() !== ""
            ? `\n💬 MENSAGEM\n${data.message.trim()}\n`
            : "";

        const dateLine = data.preferredDate && data.preferredDate.trim() !== ""
            ? data.preferredDate.trim()
            : "A combinar de acordo com a disponibilidade";

        const timeLine = data.preferredPeriod && data.preferredPeriod.trim() !== ""
            ? data.preferredPeriod.trim()
            : "Não tenho preferência de período";

        return (
`✨ SOLICITAÇÃO DE ATENDIMENTO ✨

Olá, Aureci! Gostaria de obter informações sobre um atendimento.

👤 MEUS DADOS
Nome: ${data.name.trim()}

📱 WhatsApp:
${data.phone.trim()}
${emailLine}
🌿 ATENDIMENTO DE INTERESSE
${therapySelected}

📍 MODALIDADE
${data.modality || "A combinar"}

📅 PREFERÊNCIA DE DIA
${dateLine}

🕐 PREFERÊNCIA DE HORÁRIO
${timeLine}
${messageLine}
Gostaria de receber mais informações sobre o atendimento e verificar a possibilidade de agendamento.

Obrigado(a)!`
        ).trim();
    },

    /**
     * Gera a URL completa para abertura no WhatsApp
     * @param {Object} data Dados validados do agendamento
     * @returns {string|null} URL codificada ou null caso não configurado
     */
    generateWhatsAppUrl(data) {
        if (!this.isConfigured()) return null;

        const phoneClean = therapistConfig.whatsapp.replace(/\D/g, "");
        const text = this.buildMessage(data);
        return `https://wa.me/${phoneClean}?text=${encodeURIComponent(text)}`;
    },

    /**
     * Redireciona o usuário para o WhatsApp ou abre em nova aba
     * @param {Object} data Dados validados do agendamento
     * @returns {boolean} True se abriu com sucesso, False caso contrário
     */
    send(data) {
        const url = this.generateWhatsAppUrl(data);
        if (!url) {
            console.warn("Número de WhatsApp de Aureci Sena ainda não configurado em config.js");
            return false;
        }

        window.open(url, "_blank", "noopener,noreferrer");
        return true;
    },

    /**
     * Abre conversa direta pelo WhatsApp (para botões flutuantes ou CTAs diretos)
     * @param {string} customGreeting Texto inicial opcional
     */
    openDirectChat(customGreeting = "Olá, Aureci! Gostaria de saber mais sobre os atendimentos terapêuticos.") {
        if (!this.isConfigured()) {
            alert("O WhatsApp da terapeuta ainda está sendo configurado. Por favor, utilize o formulário de contato ou envie um e-mail.");
            return;
        }
        const phoneClean = therapistConfig.whatsapp.replace(/\D/g, "");
        const url = `https://wa.me/${phoneClean}?text=${encodeURIComponent(customGreeting)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    }
};

// Expor globalmente para os componentes
window.WhatsAppService = WhatsAppService;
