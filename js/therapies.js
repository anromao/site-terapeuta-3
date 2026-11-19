/**
 * CATÁLOGO DE ATENDIMENTOS & PRÁTICAS INTEGRATIVAS — AURECI SENA
 * PALETA UNIVERSO CÓSMICA (VERMELHO, PRETO & ROXO)
 * 
 * Este arquivo contém a estrutura de dados das terapias oferecidas e as funções
 * de renderização, filtragem, busca, ordenação e exibição de ícones holísticos.
 */

const therapiesCategories = [
    { id: "all", name: "Todos os Atendimentos" },
    { id: "equilibrio-energetico", name: "Equilíbrio Energético" },
    { id: "terapias-naturais", name: "Terapias Naturais" },
    { id: "relaxamento", name: "Relaxamento & Respiração" },
    { id: "autoconhecimento", name: "Autoconhecimento & Meditação" },
    { id: "bem-estar", name: "Bem-estar & Integração" }
];

const therapiesData = [
    {
        id: 1,
        slug: "reiki-harmonizacao",
        category: "equilibrio-energetico",
        categoryName: "Equilíbrio Energético",
        icon: "assets/icons/icon-reiki.svg",
        name: "Reiki & Harmonização Energética",
        shortDescription: "Canalização suave de energia vital cósmica para restabelecer a tranquilidade, alinhar os chacras e promover relaxamento profundo.",
        fullDescription: "O Reiki é uma prática integrativa de origem oriental baseada na imposição suave das mãos sobre centros de energia (chacras). Seu propósito é facilitar o relaxamento, harmonizar o fluxo bioenergético do corpo e acolher emoções acumuladas.",
        objective: "Promover serenidade mental, redução dos níveis de estresse e resgate da harmonia energética interior.",
        howItWorks: "A pessoa permanece confortavelmente deitada ou sentada, vestida, em um ambiente silencioso e acolhedor. A terapeuta realiza toques sutis ou aproximação das mãos com foco e presença.",
        duration: "50 a 60 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/terapia-energia.jpg",
        active: true,
        confirmedByTherapist: true
    },
    {
        id: 2,
        slug: "aromaterapia-integrativa",
        category: "terapias-naturais",
        categoryName: "Terapias Naturais",
        icon: "assets/icons/icon-aromaterapia.svg",
        name: "Aromaterapia & Cuidado Sensorial",
        shortDescription: "Uso consciente de óleos essenciais puros como recurso terapêutico complementar para suporte emocional e equilíbrio vibracional.",
        fullDescription: "A Aromaterapia faz uso das propriedades sutis e aromáticas de óleos essenciais 100% puros e naturais. A partir de uma escuta cuidadosa, são selecionados aromas personalizados para auxiliar no alívio de sobrecargas emocionais, ansiedade e insônia.",
        objective: "Estimular o equilíbrio psicossensorial, o despertar da presença e a sensação de aconchego através do olfato.",
        howItWorks: "Inicia-se com um diálogo acolhedor para compreender as necessidades atuais. Em seguida, orienta-se a inalação consciente e são formuladas recomendações de sinergias aromáticas para o dia a dia.",
        duration: "50 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/terapia-aromaterapia.jpg",
        active: true,
        confirmedByTherapist: true
    },
    {
        id: 3,
        slug: "terapia-floral",
        category: "terapias-naturais",
        categoryName: "Terapias Naturais",
        icon: "assets/icons/icon-florais.svg",
        name: "Terapia Floral (Florais de Bach)",
        shortDescription: "Orientação e prescrição de essências florais sutis para harmonizar estados emocionais, fases de transição e momentos de angústia.",
        fullDescription: "Os Florais de Bach atuam suavemente nos campos emocionais e mentais, auxiliando na transmutação de padrões de medo, insegurança, sobrecarga e indecisão. É um suporte gentil para quem busca leveza interior.",
        objective: "Apoiar a regulação emocional, o discernimento e a superação de bloqueios em momentos de mudança.",
        howItWorks: "Sessão baseada em escuta ativa e acolhimento das queixas. Ao final, é indicada uma fórmula floral individualizada que pode ser aviada em farmácias de manipulação.",
        duration: "50 a 60 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/terapia-autoconhecimento.jpg",
        active: true,
        confirmedByTherapist: true
    },
    {
        id: 4,
        slug: "meditacao-guiada-mindfulness",
        category: "autoconhecimento",
        categoryName: "Autoconhecimento & Meditação",
        icon: "assets/icons/icon-meditacao.svg",
        name: "Meditação Guiada & Atenção Plena",
        shortDescription: "Práticas conduzidas de respiração consciente e foco no presente para desacelerar pensamentos e nutrir a clareza cósmica interior.",
        fullDescription: "Encontros focados em exercícios guiados de ancoragem no aqui-e-agora, visualizações acolhedoras e técnicas de respiração diafragmática. Indicado para quem busca aprender a meditar ou quer aprofundar sua rotina de autocuidado.",
        objective: "Desacelerar o fluxo mental, diminuir a reatividade emocional e desenvolver conexão com a sabedoria interior.",
        howItWorks: "Condução com voz suave, trilha sonora integrativa e acompanhamento passo a passo, adaptando o ritmo ao grau de experiência do participante.",
        duration: "45 a 60 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/terapia-relaxamento.jpg",
        active: true,
        confirmedByTherapist: true
    },
    {
        id: 5,
        slug: "respiracao-consciente-relaxamento",
        category: "relaxamento",
        categoryName: "Relaxamento & Respiração",
        icon: "assets/icons/icon-respiracao.svg",
        name: "Respiração Consciente & Relaxamento Guiado",
        shortDescription: "Técnicas de respiração e relaxamento neuromuscular para liberar couraças de tensão e renovar a vitalidade.",
        fullDescription: "O estresse contínuo costuma prender a respiração no peito e tensionar ombros e diafragma. Esta prática combina respirações reguladoras com comandos de relaxamento progressivo para liberar sobrecargas físicas.",
        objective: "Desarmar respostas corporais de alerta, melhorar a oxigenação e devolver sensação de repouso restaurador.",
        howItWorks: "Condução em postura de repouso com orientações de soltura muscular gradual e ritmos respiratórios calmantes.",
        duration: "50 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/hero-holistic.jpg",
        active: true,
        confirmedByTherapist: true
    },
    {
        id: 6,
        slug: "escuta-terapeutica-integrativa",
        category: "bem-estar",
        categoryName: "Bem-estar & Integração",
        icon: "assets/icons/icon-chakras.svg",
        name: "Sessão de Acolhimento & Orientação Holística",
        shortDescription: "Espaço confidencial e empático para compartilhar seu momento de vida e traçar um caminho integrado de autocuidado cósmico.",
        fullDescription: "Ideal para o primeiro contato ou para quem se sente desorientado e não sabe exatamente por onde começar. Realizamos uma conversa aprofundada para entender as raízes do seu momento e construir um plano gentil de acompanhamento.",
        objective: "Proporcionar alívio imediato através de um espaço seguro de fala, com direcionamento claro de cuidados.",
        howItWorks: "Diálogo aberto, sem julgamentos, mediado por perguntas reflexivas e técnicas de acolhimento sensível.",
        duration: "60 minutos",
        modalities: ["Online", "Presencial"],
        price: null,
        image: "assets/images/terapia-autoconhecimento.jpg",
        active: true,
        confirmedByTherapist: true
    }
];

// Estado de filtragem e busca
const therapyFilterState = {
    category: "all",
    searchQuery: "",
    sortBy: "default"
};

/**
 * Retorna somente as terapias ativas e confirmadas pela terapeuta
 */
function getActiveTherapies() {
    return therapiesData.filter(t => t.active && t.confirmedByTherapist);
}

/**
 * Filtra e ordena as terapias conforme os critérios selecionados
 */
function getFilteredTherapies() {
    let list = getActiveTherapies();

    if (therapyFilterState.category !== "all") {
        list = list.filter(t => t.category === therapyFilterState.category);
    }

    if (therapyFilterState.searchQuery.trim() !== "") {
        const query = therapyFilterState.searchQuery.toLowerCase().trim();
        list = list.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.shortDescription.toLowerCase().includes(query) ||
            t.categoryName.toLowerCase().includes(query) ||
            (t.objective && t.objective.toLowerCase().includes(query))
        );
    }

    if (therapyFilterState.sortBy === "alpha-asc") {
        list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    } else if (therapyFilterState.sortBy === "alpha-desc") {
        list.sort((a, b) => b.name.localeCompare(a.name, 'pt-BR'));
    }

    return list;
}

/**
 * Renderiza os cards de atendimento com a nova identidade cósmica e ícones dedicados
 */
function renderTherapyCards(containerId = "therapies-container") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const therapies = getFilteredTherapies();

    if (therapies.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-16 px-6 text-center bg-[#150921]/70 backdrop-blur-md rounded-3xl border border-pink-500/20">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-900/30 border border-pink-500/40 flex items-center justify-center text-pink-300">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <h3 class="font-serif text-2xl text-white mb-2">Nenhum atendimento encontrado</h3>
                <p class="text-purple-200 max-w-md mx-auto mb-6 text-sm">
                    Tente ajustar os filtros ou a palavra-chave. Se preferir, converse diretamente com Aureci Sena para saber mais sobre as práticas.
                </p>
                <button onclick="resetTherapyFilters()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-cosmos-secondary">
                    Ver todos os atendimentos
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = therapies.map(therapy => {
        const durationHtml = therapy.duration 
            ? `<div class="flex items-center gap-1.5 text-xs text-purple-300">
                 <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span>${therapy.duration}</span>
               </div>` 
            : "";

        const modalitiesHtml = therapy.modalities && therapy.modalities.length > 0
            ? `<div class="flex items-center gap-1 text-xs text-purple-300">
                 <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                 </svg>
                 <span>${therapy.modalities.join(" • ")}</span>
               </div>`
            : "";

        return `
            <article class="therapy-card group flex flex-col h-full transform hover:-translate-y-1">
                <!-- Imagem com Overlay Cósmico e Ícone Holístico -->
                <div class="relative h-56 w-full overflow-hidden rounded-t-[1.7rem] bg-[#0C0614]">
                    <img 
                        src="${therapy.image}" 
                        alt="${therapy.name}" 
                        loading="lazy" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
                        onerror="this.src='assets/images/bg-universe.jpg'"
                    />
                    <!-- Overlay Gradiente Vermelho/Roxo/Preto -->
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0C0614] via-[#0C0614]/40 to-transparent"></div>
                    
                    <!-- Badge de Categoria Cósmica -->
                    <span class="absolute top-4 left-4 badge-category backdrop-blur-md shadow-sm">
                        ${therapy.categoryName}
                    </span>

                    <!-- Ícone Holístico Flutuante -->
                    <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#13071E]/90 border border-pink-500/40 p-1.5 shadow-[0_0_15px_rgba(209,40,69,0.35)] backdrop-blur-md">
                        <img src="${therapy.icon || 'assets/icons/icon-reiki.svg'}" alt="" class="w-full h-full object-contain" />
                    </div>
                </div>

                <!-- Conteúdo do Card -->
                <div class="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 class="font-serif text-2xl text-white group-hover:text-pink-300 transition-colors mb-3">
                        ${therapy.name}
                    </h3>
                    
                    <p class="text-purple-200 text-sm leading-relaxed mb-5 flex-grow font-light">
                        ${therapy.shortDescription}
                    </p>

                    <!-- Meta Informações (Duração e Modalidade) -->
                    <div class="pt-4 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-2 mb-6">
                        ${durationHtml}
                        ${modalitiesHtml}
                    </div>

                    <!-- Rodapé do Card com Ações -->
                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button 
                            type="button" 
                            onclick="openTherapyDetailModal(${therapy.id})" 
                            class="w-full py-2.5 px-3 rounded-full text-xs sm:text-sm font-medium btn-cosmos-secondary text-center focus:outline-none focus:ring-2 focus:ring-pink-500/40"
                            aria-label="Saiba mais sobre ${therapy.name}"
                        >
                            Saiba mais
                        </button>

                        <button 
                            type="button" 
                            onclick="handleRequestSession('${therapy.name.replace(/'/g, "\\'")}', '${(therapy.modalities && therapy.modalities[0]) || 'A combinar'}')" 
                            class="w-full py-2.5 px-3 rounded-full text-xs sm:text-sm font-medium btn-cosmos-primary text-center focus:outline-none focus:ring-2 focus:ring-pink-500/40"
                            aria-label="Solicitar agendamento de ${therapy.name}"
                        >
                            Solicitar Sessão
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

/**
 * Renderiza os botões de filtro de categoria com tema cósmico
 */
function renderCategoryFilters(containerId = "category-filters-container") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = therapiesCategories.map(cat => {
        const isSelected = therapyFilterState.category === cat.id;
        const activeClass = isSelected 
            ? "bg-gradient-to-r from-[#D12845] to-[#8E24AA] text-white shadow-[0_0_18px_rgba(209,40,69,0.5)] border border-pink-400/50 font-medium" 
            : "bg-[#150921]/80 text-purple-200 hover:bg-[#200F31] hover:text-white border border-pink-500/20";

        return `
            <button 
                type="button"
                onclick="setTherapyCategoryFilter('${cat.id}')"
                class="px-4 py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400/40 ${activeClass}"
                aria-pressed="${isSelected}"
            >
                ${cat.name}
            </button>
        `;
    }).join("");
}

function setTherapyCategoryFilter(categoryId) {
    therapyFilterState.category = categoryId;
    renderCategoryFilters();
    renderTherapyCards();
}

function resetTherapyFilters() {
    therapyFilterState.category = "all";
    therapyFilterState.searchQuery = "";
    therapyFilterState.sortBy = "default";

    const searchInput = document.getElementById("therapy-search-input");
    if (searchInput) searchInput.value = "";

    const sortSelect = document.getElementById("therapy-sort-select");
    if (sortSelect) sortSelect.value = "default";

    renderCategoryFilters();
    renderTherapyCards();
}

function initTherapyFilters() {
    const searchInput = document.getElementById("therapy-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            therapyFilterState.searchQuery = e.target.value;
            renderTherapyCards();
        });
    }

    const sortSelect = document.getElementById("therapy-sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            therapyFilterState.sortBy = e.target.value;
            renderTherapyCards();
        });
    }

    renderCategoryFilters();
    renderTherapyCards();
}

function openTherapyDetailModal(therapyId) {
    const therapy = therapiesData.find(t => t.id === therapyId);
    if (!therapy) return;

    const modal = document.getElementById("therapy-detail-modal");
    if (!modal) return;

    document.getElementById("modal-therapy-category").textContent = therapy.categoryName;
    document.getElementById("modal-therapy-name").textContent = therapy.name;
    document.getElementById("modal-therapy-description").textContent = therapy.fullDescription;
    document.getElementById("modal-therapy-objective").textContent = therapy.objective;
    document.getElementById("modal-therapy-how-it-works").textContent = therapy.howItWorks;
    document.getElementById("modal-therapy-duration").textContent = therapy.duration || "Duração personalizada";
    document.getElementById("modal-therapy-modalities").textContent = therapy.modalities ? therapy.modalities.join(" ou ") : "A combinar";
    
    const imgEl = document.getElementById("modal-therapy-image");
    if (imgEl) {
        imgEl.src = therapy.image;
        imgEl.alt = therapy.name;
    }

    const actionBtn = document.getElementById("modal-therapy-schedule-btn");
    if (actionBtn) {
        actionBtn.onclick = () => {
            closeTherapyDetailModal();
            handleRequestSession(therapy.name, (therapy.modalities && therapy.modalities[0]) || "A combinar");
        };
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    const closeBtn = modal.querySelector(".modal-close-btn");
    if (closeBtn) closeBtn.focus();
}

function closeTherapyDetailModal() {
    const modal = document.getElementById("therapy-detail-modal");
    if (!modal) return;

    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
}

function handleRequestSession(therapyName, modality) {
    if (typeof window.openAppointmentModal === "function") {
        window.openAppointmentModal(therapyName, modality);
    } else {
        window.location.href = `contato.html?therapy=${encodeURIComponent(therapyName)}`;
    }
}
