/**
 * CONFIGURAÇÃO CENTRAL — AURECI SENA (TERAPEUTA HOLÍSTICA)
 * 
 * Todas as informações de contato, horários, redes sociais e textos institucionais
 * podem ser editadas diretamente neste arquivo.
 * 
 * INSTRUÇÕES:
 * 1. Para configurar o WhatsApp, insira apenas números com código do país (55) + DDD + telefone.
 *    Exemplo: "5511987654321". Se deixado vazio (""), o sistema exibirá uma mensagem amigável
 *    orientando o visitante a entrar em contato por outros canais.
 * 2. Se o atendimento presencial não tiver endereço físico confirmado, deixe 'address' como ""
 *    para que o mapa seja ocultado automaticamente e o site destaque o atendimento online.
 * 3. As redes sociais que não tiverem link definido ("") serão ocultadas automaticamente.
 */

const therapistConfig = {
    // Identificação da Terapeuta
    name: "Aureci Sena",
    title: "Terapeuta Holística & Cuidados Integrativos",
    slogan: "Acolhimento, equilíbrio e reconexão com a sua essência.",
    
    // Contato Principal
    // IMPORTANTE: Insira no padrão internacional 55 + DDD + número (somente dígitos)
    whatsapp: "5511999999999", // Exemplo configurável — altere para o número oficial
    phoneFormatted: "(11) 99999-9999",
    email: "contato@aurecisena.com.br",
    
    // Localização (Deixe em branco se for apenas atendimento online)
    address: "", // Se preenchido com endereço real, o mapa do Google Maps será ativado
    neighborhood: "",
    city: "São Paulo",
    state: "SP",
    
    // Modalidades de Atendimento Confirmadas
    modalities: [
        { id: "online", label: "Atendimento Online", active: true },
        { id: "presencial", label: "Atendimento Presencial", active: false } // Ativar quando houver consultório fixo
    ],

    // Horários de Atendimento para Contato / Sessões
    openingHours: {
        weekdays: "Segunda a Sexta: 09h às 19h",
        saturday: "Sábados: 09h às 13h (sob agendamento prévio)",
        sunday: "Domingos e feriados: Fechado"
    },

    // Redes Sociais (Deixe "" caso não utilize para que o ícone seja ocultado)
    social: {
        instagram: "https://instagram.com/",
        facebook: "",
        youtube: "",
        tiktok: ""
    },

    // Textos institucionais e missão
    presentation: "Um caminho sereno de escuta acolhedora, reequilíbrio energético e autoconhecimento. Cada sessão é personalizada para respeitar o seu ritmo e suas necessidades individuais.",
    
    // Aviso de Responsabilidade Terapêutica (Ética & Legislação)
    disclaimer: "Importante: As práticas integrativas e holísticas promovem bem-estar, equilíbrio e autoconhecimento. Elas atuam de forma complementar e não substituem avaliações, diagnósticos ou tratamentos médicos e psicológicos convencionais."
};

// Congelar objeto para evitar mutações acidentais em tempo de execução
if (typeof Object.freeze === "function") {
    Object.freeze(therapistConfig);
    Object.freeze(therapistConfig.modalities);
    Object.freeze(therapistConfig.openingHours);
    Object.freeze(therapistConfig.social);
}
