/**
 * FLUXO DE SOLICITAÇÃO DE ATENDIMENTO — AURECI SENA
 * 
 * Gerencia o Modal/Drawer de agendamento, validação de campos, máscara de telefone,
 * visualização do resumo da solicitação e disparo para o WhatsApp.
 * 
 * Em conformidade rigorosa com SPEC.md:
 * - Não simula confirmação automática de consulta
 * - Não coleta dados de saúde sensíveis
 * - Respeita acessibilidade (ESC, foco, aria-modal, bloqueio de scroll)
 */

const AppointmentManager = {
    modalEl: null,
    formEl: null,
    summaryContainerEl: null,
    activeTrigger: null,
    currentStep: 1, // 1: Formulário, 2: Resumo, 3: Confirmação WhatsApp
    formData: {},

    init() {
        this.modalEl = document.getElementById("appointment-modal");
        this.formEl = document.getElementById("appointment-form");
        this.summaryContainerEl = document.getElementById("appointment-summary");

        if (!this.modalEl || !this.formEl) return;

        this.bindEvents();
        this.populateTherapiesSelect();
        this.setupPhoneMask();
        this.setupDatePickerMin();
    },

    bindEvents() {
        // Fechar ao clicar no botão X ou overlay
        const closeButtons = this.modalEl.querySelectorAll("[data-close-modal]");
        closeButtons.forEach(btn => {
            btn.addEventListener("click", () => this.close());
        });

        this.modalEl.addEventListener("click", (e) => {
            if (e.target === this.modalEl) {
                this.close();
            }
        });

        // Fechar ao teclar ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !this.modalEl.classList.contains("hidden")) {
                this.close();
            }
        });

        // Submissão do formulário (avanço para o Resumo)
        this.formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Botão voltar do resumo
        const backBtn = document.getElementById("summary-back-btn");
        if (backBtn) {
            backBtn.addEventListener("click", () => this.goToStep(1));
        }

        // Botão confirmar e abrir WhatsApp
        const confirmBtn = document.getElementById("summary-confirm-btn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", () => this.proceedToWhatsApp());
        }
    },

    /**
     * Preenche as opções de atendimento no select do modal
     */
    populateTherapiesSelect() {
        const select = document.getElementById("appointment-therapy");
        if (!select) return;

        select.innerHTML = `
            <option value="">Ainda não sei / Gostaria de orientação</option>
        `;

        if (typeof therapiesData !== "undefined" && Array.isArray(therapiesData)) {
            const activeOnes = therapiesData.filter(t => t.active && t.confirmedByTherapist);
            activeOnes.forEach(therapy => {
                const opt = document.createElement("option");
                opt.value = therapy.name;
                opt.textContent = `${therapy.name} (${therapy.categoryName})`;
                select.appendChild(opt);
            });
        }
    },

    /**
     * Aplica máscara de telefone brasileiro: (XX) XXXXX-XXXX
     */
    setupPhoneMask() {
        const phoneInput = document.getElementById("appointment-phone");
        if (!phoneInput) return;

        phoneInput.addEventListener("input", (e) => {
            let v = e.target.value.replace(/\D/g, "");
            if (v.length > 11) v = v.substring(0, 11);

            if (v.length > 10) {
                // Celular 9 dígitos: (11) 98888-7777
                v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
            } else if (v.length > 6) {
                // Fixo ou celular digitando: (11) 8888-7777
                v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
            } else if (v.length > 2) {
                v = v.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
            } else if (v.length > 0) {
                v = v.replace(/^(\d{0,2})$/, "($1");
            }
            e.target.value = v;
        });
    },

    /**
     * Impede seleção de datas passadas no seletor de dia
     */
    setupDatePickerMin() {
        const dateInput = document.getElementById("appointment-date");
        if (!dateInput) return;

        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    },

    /**
     * Abre o modal de agendamento, opcionalmente pré-selecionando atendimento e modalidade
     */
    open(preselectedTherapy = "", preselectedModality = "") {
        this.activeTrigger = document.activeElement;
        this.goToStep(1);

        if (preselectedTherapy) {
            const therapySelect = document.getElementById("appointment-therapy");
            if (therapySelect) {
                therapySelect.value = preselectedTherapy;
            }
        }

        if (preselectedModality) {
            const modalitySelect = document.getElementById("appointment-modality");
            if (modalitySelect) {
                modalitySelect.value = preselectedModality;
            }
        }

        this.modalEl.classList.remove("hidden");
        this.modalEl.classList.add("flex");
        document.body.style.overflow = "hidden";

        // Foco no primeiro campo após transição
        setTimeout(() => {
            const firstInput = document.getElementById("appointment-name");
            if (firstInput) firstInput.focus();
        }, 100);
    },

    /**
     * Fecha o modal e devolve o foco ao elemento original
     */
    close() {
        this.modalEl.classList.add("hidden");
        this.modalEl.classList.remove("flex");
        document.body.style.overflow = "";

        if (this.activeTrigger && typeof this.activeTrigger.focus === "function") {
            this.activeTrigger.focus();
        }
    },

    /**
     * Transiciona entre os passos (Formulário -> Resumo -> Confirmação)
     */
    goToStep(stepNumber) {
        this.currentStep = stepNumber;

        const stepForm = document.getElementById("modal-step-form");
        const stepSummary = document.getElementById("modal-step-summary");
        const stepSuccess = document.getElementById("modal-step-success");

        if (stepForm) stepForm.classList.toggle("hidden", stepNumber !== 1);
        if (stepSummary) stepSummary.classList.toggle("hidden", stepNumber !== 2);
        if (stepSuccess) stepSuccess.classList.toggle("hidden", stepNumber !== 3);
    },

    /**
     * Validação minuciosa dos campos do formulário
     */
    validateForm() {
        let isValid = true;

        // Nome
        const nameInput = document.getElementById("appointment-name");
        const nameError = document.getElementById("appointment-name-error");
        if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
            this.showError(nameInput, nameError, "Por favor, informe seu nome completo.");
            isValid = false;
        } else {
            this.clearError(nameInput, nameError);
        }

        // Telefone
        const phoneInput = document.getElementById("appointment-phone");
        const phoneError = document.getElementById("appointment-phone-error");
        const digits = phoneInput.value.replace(/\D/g, "");
        if (digits.length < 10) {
            this.showError(phoneInput, phoneError, "Informe um telefone/WhatsApp válido com DDD.");
            isValid = false;
        } else {
            this.clearError(phoneInput, phoneError);
        }

        // E-mail (opcional, mas se preenchido precisa ter formato válido)
        const emailInput = document.getElementById("appointment-email");
        const emailError = document.getElementById("appointment-email-error");
        if (emailInput && emailInput.value.trim() !== "") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                this.showError(emailInput, emailError, "Por favor, informe um endereço de e-mail válido.");
                isValid = false;
            } else {
                this.clearError(emailInput, emailError);
            }
        } else if (emailError) {
            this.clearError(emailInput, emailError);
        }

        return isValid;
    },

    showError(inputEl, errorEl, message) {
        if (inputEl) inputEl.classList.add("border-rose-400", "focus:ring-rose-400");
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.remove("hidden");
        }
    },

    clearError(inputEl, errorEl) {
        if (inputEl) inputEl.classList.remove("border-rose-400", "focus:ring-rose-400");
        if (errorEl) {
            errorEl.textContent = "";
            errorEl.classList.add("hidden");
        }
    },

    /**
     * Processa a submissão, monta os dados e exibe o resumo para revisão
     */
    handleFormSubmit() {
        if (!this.validateForm()) return;

        const name = document.getElementById("appointment-name").value.trim();
        const phone = document.getElementById("appointment-phone").value.trim();
        const email = document.getElementById("appointment-email").value.trim();
        const therapy = document.getElementById("appointment-therapy").value;
        const modality = document.getElementById("appointment-modality").value;
        const dateRaw = document.getElementById("appointment-date").value;
        const period = document.getElementById("appointment-period").value;
        const message = document.getElementById("appointment-message").value.trim();

        // Formatação legível da data
        let formattedDate = "A combinar";
        if (dateRaw) {
            const parts = dateRaw.split("-");
            if (parts.length === 3) {
                formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
        }

        this.formData = {
            name,
            phone,
            email,
            therapy: therapy || "Gostaria de orientação para escolher a prática adequada",
            modality: modality || "A combinar",
            preferredDate: formattedDate,
            preferredPeriod: period || "Sem preferência de período",
            message
        };

        // Renderiza no container de resumo
        this.renderSummary();
        this.goToStep(2);
    },

    /**
     * Renderiza o resumo da solicitação
     */
    renderSummary() {
        document.getElementById("summary-name").textContent = this.formData.name;
        document.getElementById("summary-phone").textContent = this.formData.phone;
        
        const emailRow = document.getElementById("summary-email-row");
        if (this.formData.email) {
            emailRow.classList.remove("hidden");
            document.getElementById("summary-email").textContent = this.formData.email;
        } else {
            emailRow.classList.add("hidden");
        }

        document.getElementById("summary-therapy").textContent = this.formData.therapy;
        document.getElementById("summary-modality").textContent = this.formData.modality;
        document.getElementById("summary-date").textContent = this.formData.preferredDate;
        document.getElementById("summary-period").textContent = this.formData.preferredPeriod;

        const msgRow = document.getElementById("summary-message-row");
        if (this.formData.message) {
            msgRow.classList.remove("hidden");
            document.getElementById("summary-message").textContent = this.formData.message;
        } else {
            msgRow.classList.add("hidden");
        }
    },

    /**
     * Envia para o WhatsApp e mostra tela de sucesso/confirmação
     */
    proceedToWhatsApp() {
        if (!WhatsAppService.isConfigured()) {
            alert("O WhatsApp da terapeuta ainda não foi configurado em config.js. Por favor, utilize os demais canais de contato informados na página.");
            return;
        }

        // Dispara abertura do WhatsApp
        WhatsAppService.send(this.formData);

        // Exibe tela amigável de conclusão e limpa formulário
        this.goToStep(3);
        this.formEl.reset();
    }
};

// Expor função global de abertura para cliques em cards e headers
window.openAppointmentModal = function(therapyName = "", modality = "") {
    AppointmentManager.open(therapyName, modality);
};

// Inicialização automática quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    AppointmentManager.init();
});
