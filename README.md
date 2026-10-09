# Belle Skin & Wellness — Website Comercial & Catálogo Multi-Pages

Website estático moderno, elegante e de alta conversão para clínica de estética avançada, dermatologia e bem-estar, com catálogo dinâmico de procedimentos, carrinho integrado com persistência local (LocalStorage), validação inteligente de dados com consulta automática de endereço por CEP (ViaCEP) e envio direto de solicitações estruturadas para o WhatsApp.

---

## 🌟 Destaques & Funcionalidades

- **Design Premium & Visual WOW**: Paleta refinada com tons off-white, nude, rosé e dourado suave, tipografia elegante (*Cormorant Garamond* e *Montserrat*), microinterações e transições fluidas.
- **Arquitetura Multi-Pages Completa**:
  - `index.html`: Home com Hero impactante, diferenciais, 5 categorias com imagens ilustrativas, tratamentos em destaque, visão da clínica, depoimentos com carrossel interativo, marcas parceiras com ticker infinito, FAQ sanfonado e localização.
  - `sobre.html`: História, propósito, missão, visão e valores, pilares de excelência clínica e ambiente.
  - `servicos.html`: Catálogo dinâmico com procedimentos, filtros rápidos por categoria, busca textual instantânea, ordenação por preço e ordem alfabética.
  - `equipe.html`: Apresentação do corpo clínico multidisciplinar com foto, especialidades e registros (CRM/CRBM/CREFITO).
  - `contato.html`: Formulário rápido via WhatsApp, telefones, horários de atendimento, endereço e mapa Google Maps embed.
- **E-commerce & Carrinho de Atendimento**:
  - Adição/remoção de procedimentos com controle de quantidade.
  - Drawer lateral (*Cart Drawer*) com abertura suave e cálculo automático de valores em BRL (`Intl.NumberFormat`).
  - Persistência total entre páginas via `LocalStorage`.
- **Checkout & Integração WhatsApp**:
  - Modal de checkout em etapas sem cobrança financeira direta (foco em agendamento e consultoria).
  - Consulta automática de CEP via API pública **ViaCEP** preenchendo rua, bairro, cidade e estado.
  - Validação de campos obrigatórios com mensagens inline amigáveis.
  - Montagem de mensagem estruturada com emojis e redirecionamento seguro para a URL `wa.me/` com `encodeURIComponent()`.
- **Configuração Centralizada**:
  - Todos os dados institucionais (WhatsApp, telefone, e-mail, redes sociais, horários e endereço) centralizados em `js/config.js`.
  - Dados dos serviços centralizados em `js/services-data.js`.

---

## 🛠️ Tecnologias Utilizadas (Stack)

- **HTML5**: Semântico, acessível e otimizado para SEO.
- **CSS3 Vanilla**: Design system com CSS Custom Properties (variáveis), Flexbox, CSS Grid, animações `@keyframes` e responsividade completa.
- **JavaScript ES6+**: Manipulação do DOM, persistência em `LocalStorage`, integração assíncrona com `fetch` (ViaCEP API).
- **Fontes & Ícones**: Google Fonts (*Cormorant Garamond*, *Montserrat*) e Font Awesome 6.

---

## 📋 Pré-requisitos

Por ser uma aplicação web estática baseada em padrões web abertos (HTML/CSS/JS), **não há necessidade de compilação ou instalação de runtime obrigatório**.
- Qualquer navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
- (Opcional) Node.js, Python ou extensão *Live Server* do VS Code para servir localmente via HTTP.

---

## 📂 Estrutura do Projeto

```text
.
├── index.html                  # Página principal (Home de alta conversão)
├── sobre.html                  # História, missão, visão e valores
├── servicos.html               # Catálogo dinâmico com carrinho
├── equipe.html                 # Apresentação do corpo clínico
├── contato.html                # Informações, formulário e mapa
│
├── assets/
│   ├── images/
│   │   ├── hero-main.jpg       # Imagem principal do Hero
│   │   ├── category-laser.jpg  # Categoria Laser
│   │   ├── category-facial.jpg # Categoria Facial
│   │   ├── category-corporal.jpg # Categoria Corporal
│   │   ├── category-harmonizacao.jpg # Categoria Harmonização
│   │   └── category-bemestar.jpg # Categoria Bem-estar
│   ├── icons/
│   └── logos/
│
├── css/
│   └── styles.css              # Design system completo e estilos responsivos
│
├── js/
│   ├── config.js               # Configuração central da clínica
│   ├── services-data.js        # Lista de procedimentos e preços
│   ├── services.js             # Renderização, busca e filtros do catálogo
│   ├── cart.js                 # Lógica do carrinho, LocalStorage e drawer
│   ├── checkout.js             # Validação, ViaCEP e modal de finalização
│   ├── whatsapp.js             # Formatação da mensagem e envio wa.me
│   └── main.js                 # Header, menu mobile, scroll reveal, FAQ e carrossel
│
├── .gitignore                  # Arquivos e pastas ignorados pelo Git
└── README.md                   # Documentação do projeto
```

---

## 🚀 Como Executar em Desenvolvimento

Basta abrir qualquer um dos arquivos `.html` no seu navegador ou utilizar um servidor local leve:

### Opção 1: VS Code Live Server
1. Abra o projeto no VS Code.
2. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.

### Opção 2: Python HTTP Server
```bash
python -m http.server 3000
```
Acesse no navegador: `http://localhost:3000`

### Opção 3: Node `npx serve`
```bash
npx -y serve .
```

---

## 🧪 Testes e Validação

Para validar o funcionamento do projeto:
1. **Navegação**: Verifique a transição entre todas as páginas (`index.html`, `sobre.html`, `servicos.html`, `equipe.html`, `contato.html`).
2. **Catálogo & Filtros**: Em `servicos.html`, teste os filtros por categoria (Facial, Corporal, Laser, etc.) e o campo de busca em tempo real.
3. **Fluxo do Carrinho**: Adicione serviços ao carrinho, altere quantidades e verifique a persistência ao recarregar a página ou navegar para outra aba.
4. **Checkout & CEP**: Abra o checkout, preencha um CEP válido (ex: `01310-100`) e confirme o preenchimento automático do endereço via ViaCEP.
5. **WhatsApp**: Finalize a solicitação e confira se a mensagem pré-formatada é gerada corretamente com os itens selecionados.

---

## ⚙️ Personalização dos Dados da Clínica

Para alterar o telefone, WhatsApp ou endereço da clínica, edite o arquivo [`js/config.js`](js/config.js):

```javascript
const clinicConfig = {
  name: "Belle Skin & Wellness",
  tagline: "Estética · Beleza · Bem-estar",
  whatsapp: "5511989603385", // Formato: 55 + DDD + Número (sem caracteres especiais)
  phone: "(11) 98960-3385",
  email: "contato@belleskin.com.br",
  address: "Rua Conde das Galveias, 27",
  city: "São Paulo",
  state: "SP",
  cep: "04125-000",
  instagram: "https://instagram.com/belleskin",
  facebook: "https://facebook.com/belleskin",
  openingHours: {
    weekdays: "Segunda a Sexta: 09:00 — 19:00",
    saturday: "Sábado: 09:00 — 14:00"
  }
};
```

---

## 💆‍♀️ Como Adicionar ou Alterar Serviços

Abra o arquivo [`js/services-data.js`](js/services-data.js) e insira ou modifique os procedimentos no array `servicesData`:

```javascript
{
  id: 16,
  category: "facial",
  categoryLabel: "Facial",
  name: "Novo Procedimento Glow",
  description: "Descrição do procedimento...",
  price: 299.90,
  image: "assets/images/category-facial.jpg",
  duration: "50 min",
  sessions: "Sessão única",
  featured: true
}
```

---

## 🌐 Deploy em Produção

O projeto pode ser publicado diretamente e gratuitamente em plataformas de hospedagem estática:

- **GitHub Pages**: Vá em *Settings > Pages* no repositório GitHub e selecione a branch `main` / `root`.
- **Vercel**: Conecte o repositório no dashboard da Vercel (Framework Preset: *Other*).
- **Netlify**: Arraste a pasta do projeto ou conecte via Git (Publish directory: `.`).

---

## 📱 Responsividade

Totalmente adaptado para:
- 📱 Smartphones (320px, 375px, 390px, 414px)
- 📱 Tablets (768px, 1024px)
- 💻 Notebooks e Desktops (1280px, 1440px, 1920px+)

---

© 2026 Belle Skin & Wellness. Todos os direitos reservados.
