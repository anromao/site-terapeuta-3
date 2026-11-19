# Aureci Sena — Website Institucional & Catálogo de Cuidados Integrativos

Website multi-pages moderno, acolhedor e responsivo desenvolvido para a terapeuta holística **Aureci Sena**. O projeto combina apresentação da trajetória da profissional, catálogo informativo de práticas integrativas e fluxo de solicitação de atendimento integrado diretamente ao WhatsApp.

---

## 🌌 Visão Geral do Projeto & Identidade Cósmica

O site foi concebido com uma identidade visual cósmica, serena e sofisticada, inspirada nas cores do universo:
- **Tons Cósmicos:** Preto espacial (`#07030B`), Roxo nebulosa e Magenta astral (`#8E24AA`, `#A83279`, `#5C1363`), Vermelho e Rubi cósmico (`#D12845`, `#FF3366`, `#FF7597`).
- **Ícones & Imagens Holísticas:** Ícones dedicados em SVG para cada prática (Reiki, Aromaterapia, Florais de Bach, Meditação Guiada, Respiração Consciente e Alinhamento dos Chacras) e imagem oficial do universo com anéis e nebulosas (`assets/images/bg-universe.jpg`).
- **Natureza Institucional:** Não funciona como e-commerce ou clínica estética; é um espaço acolhedor, humano e sensível voltado ao reequilíbrio energético e ao autoconhecimento.

### Principais Funcionalidades:
- **Multi-pages Estruturado:**
  - `index.html` (Página inicial: apresentação, hero impactante, pilares integrativos, atendimentos em destaque, como funciona uma sessão, FAQ e CTAs).
  - `sobre.html` (Apresentação aprofundada de Aureci Sena, propósito, valores éticos e filosofia do cuidado holístico).
  - `atendimentos.html` (Catálogo informativo de práticas com filtro por categorias, busca textual e ordenação alfabética).
  - `contato.html` (Canais de contato, horários de atendimento, formulário inline e orientações geográficas).
- **Catálogo Informativo & Modal "Saiba Mais":** Cada atendimento oferece explicação clara sobre os objetivos da prática, duração média, modalidades e formato.
- **Fluxo de Solicitação com Modal/Drawer:** O visitante informa seus dados básicos, preferências de dia e período, revisa um resumo e é direcionado ao WhatsApp com mensagem estruturada.
- **Configuração Centralizada:** Todas as informações de contato, horários, redes sociais e textos da terapeuta estão em um único arquivo (`js/config.js`).
- **Acessibilidade & Responsividade:** Compatível com leitores de tela, navegação por teclado (ESC para fechar modais, foco visível) e suporte a `prefers-reduced-motion`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura clara, acessível e otimizada para SEO.
- **CSS3 Moderno + Tailwind CSS:** Design system com CSS Variables e estilização utilitária refinada.
- **JavaScript Moderno (ES6+):** Código modular sem dependência de frameworks pesados ou backend.
- **Google Fonts:** `Cormorant Garamond` (títulos clássicos e elegantes) e `Manrope` (leitura fluida e confortável).
- **SVG & Assets Otimizados:** Ícones vetoriais leves e imagens editoriais de alta resolução.

---

## 📁 Estrutura de Diretórios

```text
/
├── index.html                   # Página Inicial
├── sobre.html                   # Apresentação e Trajetória de Aureci Sena
├── atendimentos.html            # Catálogo de Práticas Integrativas
├── contato.html                 # Canais de Atendimento e Formulário
├── favicon.svg                  # Ícone da aba do navegador
├── README.md                    # Documentação do projeto
│
├── assets/
│   ├── images/                  # Fotografias editoriais do espaço e terapias
│   │   ├── hero-holistic.jpg
│   │   ├── therapist-portrait.jpg
│   │   ├── terapia-energia.jpg
│   │   ├── terapia-aromaterapia.jpg
│   │   ├── terapia-relaxamento.jpg
│   │   └── terapia-autoconhecimento.jpg
│   ├── icons/                   # Ícones complementares
│   └── logos/                   # Logotipo e símbolo em SVG
│
├── css/
│   ├── styles.css               # Design tokens, variáveis, base e animações
│   └── components.css           # Estilos de modais, drawers e formulários
│
└── js/
    ├── config.js                # Configuração central da terapeuta (dados e contato)
    ├── therapies.js             # Base de dados, filtros e renderização dos atendimentos
    ├── appointment.js           # Gerenciador do modal de agendamento e validação
    ├── whatsapp.js              # Serviço de montagem e envio da mensagem para WhatsApp
    └── main.js                  # Controle global: scroll, header, menu mobile e FAQ
```

---

## 🚀 Como Executar o Projeto Localmente

Por se tratar de uma aplicação frontend 100% estática, não há necessidade de compilação, Node.js ou instalação de pacotes:

1. **Abrir diretamente:** Basta abrir o arquivo `index.html` em qualquer navegador web (Google Chrome, Edge, Firefox, Safari).
2. **Utilizando servidor local (opcional/recomendado para testes):**
   - No VS Code, clique com o botão direito em `index.html` e selecione **Open with Live Server**.
   - Ou via terminal com Python: `python -m http.server 8000` e acesse `http://localhost:8000`.

---

## ⚙️ Guia de Customização e Atualização

### 1. Como alterar o número do WhatsApp
Abra o arquivo `js/config.js` e localize a linha `whatsapp`:
```javascript
const therapistConfig = {
    // Insira apenas números: código do país (55) + DDD (2 dígitos) + número
    whatsapp: "5511999999999", 
    phoneFormatted: "(11) 99999-9999",
    ...
};
```
> **Nota:** Se deixado vazio (`""`), o sistema informará de forma amigável que o canal está em configuração e orientará o usuário a usar os outros canais disponíveis.

### 2. Como alterar dados de contato, horários e redes sociais
No mesmo arquivo `js/config.js`, edite os campos desejados:
```javascript
email: "seuemail@aurecisena.com.br",
city: "São Paulo",
state: "SP",

openingHours: {
    weekdays: "Segunda a Sexta: 09h às 19h",
    saturday: "Sábados: 09h às 13h (conforme agenda)",
    sunday: "Fechado"
},

social: {
    instagram: "https://instagram.com/seu.perfil",
    facebook: "" // Deixe "" para ocultar o ícone automaticamente
}
```

### 3. Como ativar, desativar ou adicionar um atendimento
Abra o arquivo `js/therapies.js`. Cada atendimento possui um objeto com suas propriedades:
- Para **ativar** uma modalidade já confirmada: defina `active: true` e `confirmedByTherapist: true`.
- Para **desativar temporariamente** uma modalidade: defina `active: false`.
```javascript
{
    id: 1,
    slug: "reiki-harmonizacao",
    category: "equilibrio-energetico",
    categoryName: "Equilíbrio Energético",
    name: "Reiki & Harmonização Energética",
    shortDescription: "Canalização suave de energia vital...",
    duration: "50 a 60 minutos",
    modalities: ["Online", "Presencial"],
    price: null, // Deixe null para exibir 'Consulte informações'
    active: true,
    confirmedByTherapist: true
}
```

### 4. Como substituir fotografias e imagens
Basta substituir os arquivos na pasta `assets/images/` mantendo as dimensões e nomes de arquivo recomendados:
- `hero-holistic.jpg`: Imagem ampla (16:9) do espaço de acolhimento.
- `therapist-portrait.jpg`: Foto da terapeuta (proporção 4:5 ou retrato).
- `terapia-*.jpg`: Imagens temáticas de cada modalidade integrativa.

---

## 🌐 Como Publicar (Deploy)

Como o projeto é estático, a publicação é simples e gratuita em qualquer serviço de hospedagem estática:
1. **GitHub Pages:**
   - Faça push dos arquivos para seu repositório no GitHub.
   - Acesse **Settings** > **Pages** e selecione a branch `main` e a pasta `/ (root)`.
2. **Vercel / Netlify:**
   - Arraste a pasta do projeto diretamente para o painel de deploy do Netlify ou conecte com seu repositório no GitHub na Vercel. Não há necessidade de build command nem output directory.

---

## ⚖️ Conformidade e Responsabilidade Ética

O website respeita rigorosamente as diretrizes éticas para terapeutas holísticos e integrativos:
- Não contém promessas de cura ou diagnósticos milagrosos.
- Exibe de forma transparente que as práticas integrativas são complementares e não substituem tratamentos médicos ou psicológicos convencionais.
- Respeita a privacidade dos interagentes, não coletando dados clínicos em formulários públicos.
