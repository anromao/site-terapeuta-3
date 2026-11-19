/**
 * SCRIPT PRINCIPAL — AURECI SENA (TERAPEUTA HOLÍSTICA)
 * PALETA UNIVERSO CÓSMICA (VERMELHO, PRETO & ROXO)
 * 
 * Gerencia o comportamento global:
 * - Header sticky com efeito backdrop-blur cósmico ao rolar
 * - Menu mobile acessível (abertura, fechamento com ESC, clique externo)
 * - Indicador de página ativa na navegação com brilho estelar
 * - Accordion de Perguntas Frequentes (FAQ) com animações suaves
 * - Animações de revelação ao rolar (IntersectionObserver)
 * - Botão flutuante de WhatsApp e Botão Voltar ao Topo
 * - Suporte a prefers-reduced-motion
 */

document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileMenu();
    initActiveNavLinks();
    initFaqAccordion();
    initScrollAnimations();
    initBackToTop();
    initDirectContactForm();
    initDynamicContactDetails();
});

/**
 * Altera aparência do Header quando o usuário rola a página
 */
function initHeaderScroll() {
    const header = document.getElementById("main-header");
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add("header-scrolled", "bg-[#0C0614]/95", "backdrop-blur-md", "shadow-2xl", "py-3");
            header.classList.remove("py-5", "bg-transparent");
        } else {
            header.classList.remove("header-scrolled", "bg-[#0C0614]/95", "backdrop-blur-md", "shadow-2xl", "py-3");
            header.classList.add("py-5");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
}

/**
 * Menu mobile acessível com drawer/overlay
 */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("mobile-menu-close");
    const backdrop = document.getElementById("mobile-menu-backdrop");

    if (!toggleBtn || !mobileMenu) return;

    const openMenu = () => {
        mobileMenu.classList.remove("translate-x-full");
        if (backdrop) backdrop.classList.remove("hidden", "opacity-0");
        toggleBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        if (closeBtn) closeBtn.focus();
    };

    const closeMenu = () => {
        mobileMenu.classList.add("translate-x-full");
        if (backdrop) backdrop.classList.add("opacity-0");
        setTimeout(() => {
            if (backdrop) backdrop.classList.add("hidden");
        }, 300);
        toggleBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        toggleBtn.focus();
    };

    toggleBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !mobileMenu.classList.contains("translate-x-full")) {
            closeMenu();
        }
    });

    const navLinks = mobileMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
}

/**
 * Destaca o link correspondente à página atual com brilho cósmico
 */
function initActiveNavLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        const linkPath = href.split("/").pop() || "index.html";

        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("text-[#FF7597]", "font-semibold");
            link.classList.remove("text-purple-200");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("text-[#FF7597]", "font-semibold");
            link.classList.add("text-purple-200");
            link.removeAttribute("aria-current");
        }
    });
}

/**
 * FAQ Accordion com animação suave e acessibilidade
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        if (!button || !answer) return;

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherBtn = otherItem.querySelector(".faq-question");
                    const otherAns = otherItem.querySelector(".faq-answer");
                    const otherIcon = otherItem.querySelector(".faq-icon");
                    if (otherBtn && otherAns) {
                        otherBtn.setAttribute("aria-expanded", "false");
                        otherAns.style.maxHeight = null;
                        otherItem.classList.remove("active");
                        if (otherIcon) otherIcon.classList.remove("rotate-180");
                    }
                }
            });

            if (isExpanded) {
                button.setAttribute("aria-expanded", "false");
                answer.style.maxHeight = null;
                item.classList.remove("active");
                if (icon) icon.classList.remove("rotate-180");
            } else {
                button.setAttribute("aria-expanded", "true");
                answer.style.maxHeight = answer.scrollHeight + "px";
                item.classList.add("active");
                if (icon) icon.classList.add("rotate-180");
            }
        });
    });
}

/**
 * Animação de revelação suave com IntersectionObserver
 */
function initScrollAnimations() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".reveal-on-scroll").forEach(el => {
            el.classList.add("is-revealed");
        });
        return;
    }

    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));
}

/**
 * Botão Voltar ao Topo
 */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
            btn.classList.add("opacity-100", "translate-y-0");
        } else {
            btn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
            btn.classList.remove("opacity-100", "translate-y-0");
        }
    }, { passive: true });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/**
 * Formulário da página de contato dedicado
 */
function initDirectContactForm() {
    const contactForm = document.getElementById("direct-contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("contact-name");
        const phoneInput = document.getElementById("contact-phone");
        const emailInput = document.getElementById("contact-email");
        const therapyInput = document.getElementById("contact-therapy");
        const modalityInput = document.getElementById("contact-modality");
        const messageInput = document.getElementById("contact-message");

        if (!nameInput.value.trim() || phoneInput.value.replace(/\D/g, "").length < 10) {
            alert("Por favor, preencha seu nome e um telefone com DDD válido.");
            return;
        }

        const data = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput ? emailInput.value.trim() : "",
            therapy: therapyInput ? therapyInput.value : "Gostaria de orientação",
            modality: modalityInput ? modalityInput.value : "A combinar",
            preferredDate: "A combinar",
            preferredPeriod: "Sem preferência de período",
            message: messageInput ? messageInput.value.trim() : ""
        };

        if (window.WhatsAppService) {
            window.WhatsAppService.send(data);
        }
    });
}

function initDynamicContactDetails() {
    if (typeof therapistConfig === "undefined") return;

    document.querySelectorAll("[data-config='name']").forEach(el => {
        el.textContent = therapistConfig.name;
    });

    document.querySelectorAll("[data-config='phone']").forEach(el => {
        if (therapistConfig.phoneFormatted) {
            el.textContent = therapistConfig.phoneFormatted;
        }
    });

    document.querySelectorAll("[data-config='email']").forEach(el => {
        if (therapistConfig.email) {
            el.textContent = therapistConfig.email;
            if (el.tagName === "A") {
                el.href = `mailto:${therapistConfig.email}`;
            }
        }
    });

    document.querySelectorAll("[data-config='city']").forEach(el => {
        if (therapistConfig.city) {
            el.textContent = `${therapistConfig.city}${therapistConfig.state ? ` - ${therapistConfig.state}` : ''}`;
        }
    });

    const instaLink = document.getElementById("social-instagram");
    if (instaLink) {
        if (therapistConfig.social && therapistConfig.social.instagram) {
            instaLink.href = therapistConfig.social.instagram;
        } else {
            instaLink.classList.add("hidden");
        }
    }

    const faceLink = document.getElementById("social-facebook");
    if (faceLink) {
        if (therapistConfig.social && therapistConfig.social.facebook) {
            faceLink.href = therapistConfig.social.facebook;
        } else {
            faceLink.classList.add("hidden");
        }
    }
}
