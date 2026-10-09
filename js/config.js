/**
 * ============================================================
 * BELLE SKIN & WELLNESS — CONFIGURAÇÃO CENTRAL
 * ============================================================
 * Altere aqui os dados da clínica. Não é necessário mexer
 * em nenhum outro arquivo para atualizar as informações abaixo.
 * ============================================================
 */

const clinicConfig = {
  // ── IDENTIDADE ──────────────────────────────────────────
  name: "Belle Skin & Wellness",
  tagline: "Estética · Beleza · Bem-estar",

  // ── CONTATO ──────────────────────────────────────────────
  whatsapp: "5511989603385",
  phone: "(11) 98960-3385",
  email: "contato@belleskin.com.br",

  // ── ENDEREÇO ─────────────────────────────────────────────
  address: "Rua Conde das Galveias, 27",
  city: "São Paulo",
  state: "SP",
  cep: "04125-000",

  // ── REDES SOCIAIS ─────────────────────────────────────────
  // TODO: Substitua pelos links reais
  instagram: "#",
  facebook: "#",
  tiktok: "#",

  // ── HORÁRIOS ──────────────────────────────────────────────
  openingHours: {
    weekdays: "Segunda a Sexta: 09:00 — 19:00",
    saturday: "Sábado: 09:00 — 14:00",
    sunday: "Domingo: Fechado",
  },
};

// Expor globalmente
window.clinicConfig = clinicConfig;
