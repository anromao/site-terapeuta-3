/**
 * ============================================================
 * BELLE SKIN & WELLNESS — DADOS DOS SERVIÇOS
 * ============================================================
 * Adicione, remova ou edite serviços aqui.
 * Preços em número (ex: 189.90). A formatação BRL é automática.
 * ============================================================
 */

const servicesData = [
  // ── LASER ──────────────────────────────────────────────────
  {
    id: 1,
    category: "laser",
    categoryLabel: "Laser",
    name: "Depilação a Laser",
    description:
      "Tecnologia de ponta para remoção definitiva de pelos. Segura, eficaz e indolor para todos os fototipos de pele.",
    price: 249.9,
    image: "assets/images/category-laser.jpg",
    duration: "60 min",
    sessions: "6 a 10 sessões",
    featured: true,
  },
  {
    id: 2,
    category: "laser",
    categoryLabel: "Laser",
    name: "Fototerapia Rejuvenescedora",
    description:
      "Tratamento a laser para manchas, rugas finas e textura irregular. Pele visivelmente renovada a cada sessão.",
    price: 390.0,
    image: "assets/images/category-laser.jpg",
    duration: "45 min",
    sessions: "4 a 6 sessões",
    featured: false,
  },
  // ── FACIAL ────────────────────────────────────────────────
  {
    id: 3,
    category: "facial",
    categoryLabel: "Facial",
    name: "Limpeza de Pele Premium",
    description:
      "Protocolo completo de limpeza profunda com vapor, extração e máscara revitalizante. Pele limpa, luminosa e equilibrada.",
    price: 189.9,
    image: "assets/images/category-facial.jpg",
    duration: "75 min",
    sessions: "Sessão única",
    featured: true,
  },
  {
    id: 4,
    category: "facial",
    categoryLabel: "Facial",
    name: "Peeling Químico",
    description:
      "Renovação celular com ácidos selecionados para tratar manchas, acne e envelhecimento. Resultados visíveis e duradouros.",
    price: 280.0,
    image: "assets/images/category-facial.jpg",
    duration: "50 min",
    sessions: "4 a 6 sessões",
    featured: false,
  },
  {
    id: 5,
    category: "facial",
    categoryLabel: "Facial",
    name: "Microagulhamento",
    description:
      "Estimulação do colágeno natural da pele para redução de cicatrizes, poros e flacidez. Pele mais firme e jovem.",
    price: 350.0,
    image: "assets/images/category-facial.jpg",
    duration: "60 min",
    sessions: "3 a 5 sessões",
    featured: true,
  },
  {
    id: 6,
    category: "facial",
    categoryLabel: "Facial",
    name: "Radiofrequência Facial",
    description:
      "Tecnologia que estimula o colágeno e elástico da pele, promovendo lifting e firmeza sem procedimentos invasivos.",
    price: 320.0,
    image: "assets/images/category-facial.jpg",
    duration: "50 min",
    sessions: "6 a 8 sessões",
    featured: false,
  },
  // ── CORPORAL ──────────────────────────────────────────────
  {
    id: 7,
    category: "corporal",
    categoryLabel: "Corporal",
    name: "Drenagem Linfática",
    description:
      "Massagem terapêutica que ativa o sistema linfático, reduzindo inchaço, toxinas e promovendo leveza corporal.",
    price: 159.9,
    image: "assets/images/category-corporal.jpg",
    duration: "60 min",
    sessions: "10 sessões recomendadas",
    featured: true,
  },
  {
    id: 8,
    category: "corporal",
    categoryLabel: "Corporal",
    name: "Ultrassom Modelador",
    description:
      "Tratamento que rompe células de gordura localizada e auxilia na redução de medidas. Seguro e não invasivo.",
    price: 220.0,
    image: "assets/images/category-corporal.jpg",
    duration: "45 min",
    sessions: "8 a 12 sessões",
    featured: false,
  },
  {
    id: 9,
    category: "corporal",
    categoryLabel: "Corporal",
    name: "Tratamento Anticelulite",
    description:
      "Protocolo combinado com tecnologias exclusivas para redução da celulite e melhora da textura da pele.",
    price: 270.0,
    image: "assets/images/category-corporal.jpg",
    duration: "60 min",
    sessions: "10 a 15 sessões",
    featured: false,
  },
  // ── HARMONIZAÇÃO ──────────────────────────────────────────
  {
    id: 10,
    category: "harmonizacao",
    categoryLabel: "Harmonização",
    name: "Toxina Botulínica (Botox)",
    description:
      "Relaxamento muscular para suavizar rugas de expressão. Resultado natural, seguro e com duração de 4 a 6 meses.",
    price: 750.0,
    image: "assets/images/category-harmonizacao.jpg",
    duration: "30 min",
    sessions: "Procedimento único",
    featured: true,
  },
  {
    id: 11,
    category: "harmonizacao",
    categoryLabel: "Harmonização",
    name: "Preenchimento Labial",
    description:
      "Volume e definição natural para os lábios com ácido hialurônico de última geração. Resultado harmonioso e sutil.",
    price: 890.0,
    image: "assets/images/category-harmonizacao.jpg",
    duration: "40 min",
    sessions: "Procedimento único",
    featured: true,
  },
  {
    id: 12,
    category: "harmonizacao",
    categoryLabel: "Harmonização",
    name: "Bioestimuladores de Colágeno",
    description:
      "Tratamento que estimula a produção natural de colágeno para restaurar volume e firmeza de forma progressiva.",
    price: 1200.0,
    image: "assets/images/category-harmonizacao.jpg",
    duration: "50 min",
    sessions: "2 a 3 sessões",
    featured: false,
  },
  // ── BEM-ESTAR ─────────────────────────────────────────────
  {
    id: 13,
    category: "bemestar",
    categoryLabel: "Bem-estar",
    name: "Massagem Relaxante",
    description:
      "Massagem corporal com óleos essenciais selecionados para aliviar tensões, reduzir o estresse e promover bem-estar total.",
    price: 179.9,
    image: "assets/images/category-bemestar.jpg",
    duration: "60 min",
    sessions: "Sessão única",
    featured: true,
  },
  {
    id: 14,
    category: "bemestar",
    categoryLabel: "Bem-estar",
    name: "Massagem Modeladora",
    description:
      "Técnica de massagem que ativa a circulação, quebra nódulos de gordura e define o contorno corporal com eficiência.",
    price: 199.9,
    image: "assets/images/category-bemestar.jpg",
    duration: "60 min",
    sessions: "10 sessões recomendadas",
    featured: false,
  },
  {
    id: 15,
    category: "bemestar",
    categoryLabel: "Bem-estar",
    name: "Protocolo Spa Completo",
    description:
      "Experiência sensorial completa com esfoliação, máscara corporal e massagem. Uma tarde de cuidado e renovação.",
    price: 320.0,
    image: "assets/images/category-bemestar.jpg",
    duration: "120 min",
    sessions: "Sessão única",
    featured: false,
  },
];

// Expor globalmente
window.servicesData = servicesData;
