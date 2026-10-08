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
  // TODO: Substitua pelo número real no formato: 55 + DDD + número (sem espaços)
  whatsapp: "5511999999999",
  phone: "(11) 99999-9999",
  email: "contato@belleskin.com.br",

  // ── ENDEREÇO ─────────────────────────────────────────────
  address: "Rua das Flores, 320 — Jardins",
  city: "São Paulo",
  state: "SP",
  cep: "01427-000",

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
