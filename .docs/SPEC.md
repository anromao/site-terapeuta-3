# PROMPT — DESENVOLVIMENTO DE SITE MULTI-PAGES PARA TERAPEUTA HOLÍSTICA

## 1. PAPEL

Atue como um **Engenheiro Frontend Sênior, UI/UX Designer e Especialista em desenvolvimento de websites institucionais e comerciais de alta conversão**, com experiência em:

- HTML5 semântico
- CSS3
- JavaScript moderno (ES6+)
- Tailwind CSS
- UI/UX
- Design responsivo
- Acessibilidade
- SEO técnico
- Performance
- Animações e microinterações
- Catálogo de atendimentos
- Formulários de solicitação e agendamento
- Modais e drawers
- Integração com WhatsApp
- Landing pages e sites institucionais
- Arquitetura frontend modular

Sua missão é **projetar e desenvolver um website completo, moderno, sofisticado, responsivo e orientado à conversão para uma terapeuta holística**, com foco em apresentar sua trajetória, explicar suas abordagens e facilitar o contato e o agendamento de sessões.

Não trate o projeto como clínica de estética, e-commerce ou plataforma de venda de procedimentos. A experiência deve ser institucional, acolhedora e voltada ao relacionamento entre a terapeuta e as pessoas interessadas nos atendimentos.

---

## 2. OBJETIVO DO PROJETO

Criar um website **MULTI-PAGES** para uma TERAPEUTA HOLÍSTICA.

Nome de referência do projeto: **Aureci Sena**.

O site deverá transmitir:

- Acolhimento
- Equilíbrio
- Bem-estar
- Autoconhecimento
- Tranquilidade
- Confiança
- Sensibilidade
- Espiritualidade, sem exageros visuais
- Profissionalismo
- Cuidado individualizado
- Renovação e qualidade de vida

O projeto deve possuir uma identidade visual premium, elegante e humana, adequada à apresentação de uma terapeuta holística e de suas práticas.

O resultado final deve parecer um **site profissional real, pronto para publicação**, e não um simples template.

Não inventar história, formação, certificações, experiência, depoimentos, endereço, modalidades oferecidas ou resultados terapêuticos. Quando alguma informação não tiver sido fornecida, utilizar configuração editável ou ocultar a seção até que os dados reais sejam inseridos.

---

## 3. TECNOLOGIAS OBRIGATÓRIAS

Utilize exclusivamente tecnologias frontend.

### Permitido

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- CSS Variables
- JavaScript ES6+
- SVG
- APIs nativas do navegador
- Google Maps Embed ou alternativa equivalente, somente quando houver endereço real
- Bibliotecas frontend leves, quando realmente necessárias

### NÃO UTILIZAR

- React
- Next.js
- Vue
- Angular
- Svelte
- Nuxt
- Node.js como aplicação
- Express
- PHP
- Python
- Backend
- Banco de dados
- SSR
- Frameworks backend
- Linguagens dinâmicas no servidor

O projeto deverá funcionar como um **website frontend estático**.

Não criar dependência de backend para o formulário. O envio de solicitação deverá ser realizado por meio de integração com WhatsApp, sem simular confirmação automática de consulta.

---

## 4. ARQUITETURA DO PROJETO

Estruture o projeto de forma profissional e organizada.

Sugestão:

```text
/
├── index.html
├── sobre.html
├── atendimentos.html
├── contato.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
│
├── css/
│   ├── styles.css
│   └── components.css
│
├── js/
│   ├── main.js
│   ├── therapies.js
│   ├── appointment.js
│   └── whatsapp.js
│
└── README.md
```

Caso considere outra estrutura mais eficiente, poderá adotá-la, desde que mantenha o projeto simples, modular e fácil de manter.

Não criar páginas desnecessárias. A página de atendimentos deverá funcionar como apresentação organizada das práticas efetivamente oferecidas pela terapeuta.

---

## 5. IDENTIDADE VISUAL

Crie uma identidade visual sofisticada para a terapeuta holística.

A direção visual deverá utilizar a paleta de cores definida para o projeto e, caso exista uma imagem de referência na pasta do projeto, utilizá-la como parâmetro principal para:

- Paleta de cores
- Tons predominantes
- Estilo dos ícones
- Elementos gráficos
- Linguagem visual
- Contraste
- Formas e ornamentos
- Estilo fotográfico

Não substituir a paleta de referência por uma identidade genérica.

A direção visual poderá trabalhar com:

- Cores claras e naturais
- Tons suaves
- Off-white
- Bege
- Verde natural ou sálvia, se compatível com a referência
- Rosé ou terracota suave, se compatível com a referência
- Dourado discreto, se compatível com a referência
- Contraste elegante

Evite excesso de cores, brilhos, efeitos neon, símbolos esotéricos exagerados e aparência de clínica médica.

A interface deve transmitir:

> Um espaço de acolhimento, equilíbrio, cuidado e autoconhecimento.

Utilize bastante espaço em branco, tipografia refinada, imagens grandes e composição visual serena.

---

## 6. TIPOGRAFIA

Escolha uma combinação de fontes elegante e legível.

### Títulos

Uma fonte serifada sofisticada, com personalidade e leitura confortável.

### Textos

Uma fonte sans-serif moderna, simples e extremamente legível.

Exemplo conceitual:

```text
Títulos:
Cormorant Garamond / Playfair Display

Textos:
Inter / Manrope / Montserrat
```

A escolha final pode ser adaptada para manter melhor performance e coerência visual com a imagem de referência.

Evitar fontes excessivamente ornamentadas em textos longos.

---

## 7. IMAGENS

O projeto deverá utilizar imagens de alta qualidade relacionadas a:

- Natureza
- Bem-estar
- Equilíbrio
- Autoconhecimento
- Serenidade
- Renovação
- Meditação
- Respiração consciente
- Elementos naturais
- Plantas e flores
- Luz natural
- Ambientes acolhedores
- Atendimento terapêutico humanizado

Evitar imagens de procedimentos estéticos, equipamentos de estética, salas cirúrgicas, jalecos médicos, cosméticos, laser, Botox ou tratamentos dermatológicos.

### HERO

A Home deverá possuir uma seção HERO extremamente impactante.

Utilize uma imagem de fundo em tela cheia ou uma composição editorial de destaque.

A imagem deverá transmitir:

- Acolhimento
- Serenidade
- Confiança
- Equilíbrio
- Natureza
- Bem-estar
- Transformação pessoal

### IMPORTANTE

A imagem do Hero deverá ser criada/gerada ou selecionada de forma coerente com a identidade visual, não simplesmente representada por um placeholder.

Criar uma composição visual adequada para:

```text
Desktop
Tablet
Mobile
```

A imagem deverá possuir espaço visual suficiente para acomodar os textos e CTAs.

Se houver fotografia real da terapeuta na pasta do projeto, priorizá-la na apresentação pessoal, sem alterar artificialmente sua aparência.

---

## 8. NAVEGAÇÃO

Criar um Header profissional.

Desktop:

```text
LOGO / AURECI SENA

Home
Sobre
Atendimentos
Como funciona
Contato

[ Agendar Sessão ]
```

Mobile:

Utilizar menu hamburger.

O Header deverá:

- Ser sticky/fixed de forma elegante
- Alterar seu comportamento durante o scroll
- Possuir transição suave
- Manter excelente legibilidade
- Possuir CTA de agendamento
- Destacar a página atual
- Fechar o menu mobile após a seleção de um link

---

## 9. PÁGINAS

O projeto deverá possuir as seguintes páginas:

```text
/
├── Home
├── Sobre
├── Atendimentos
└── Contato
```

A navegação deverá ser simples e intuitiva.

Não criar página de equipe com profissionais fictícios. A apresentação deverá ser centrada na terapeuta.

---

## 10. HOME

A Home deverá ser uma página completa de apresentação e conversão para contato.

Estrutura sugerida:

```text
Header
↓
Hero
↓
Mensagem de acolhimento
↓
Benefícios / diferenciais da abordagem
↓
Atendimentos em destaque
↓
Sobre a terapeuta
↓
Como funciona uma sessão
↓
Depoimentos reais, se disponíveis
↓
FAQ
↓
CTA de agendamento
↓
Informações de contato
↓
Footer
```

A página deverá conduzir o visitante de forma natural: conhecer a terapeuta, compreender as abordagens, esclarecer dúvidas e solicitar um atendimento.

Não utilizar linguagem de venda agressiva.

---

## 11. HERO DA HOME

Criar uma seção hero full screen.

Elementos:

### Eyebrow

Algo como:

```text
ACOLHIMENTO • EQUILÍBRIO • AUTOCONHECIMENTO
```

### Headline

Criar uma headline acolhedora e impactante, por exemplo:

> Um caminho de cuidado, equilíbrio e reconexão com você.

Ou outra opção mais adequada à identidade visual e à comunicação da terapeuta.

### Texto

Criar uma descrição curta destacando:

- Atendimento individualizado
- Escuta acolhedora
- Práticas integrativas, quando efetivamente oferecidas
- Jornada de autoconhecimento
- Bem-estar e equilíbrio

Não prometer cura, solução garantida ou resultados específicos.

### CTAs

Botão principal:

```text
Agendar uma conversa
```

Botão secundário:

```text
Conhecer os atendimentos
```

Adicionar microanimações discretas.

---

## 12. CATEGORIAS DE ATENDIMENTOS

Criar uma seção apresentando as principais categorias de práticas que podem compor o trabalho de uma terapeuta holística.

As categorias abaixo são referências de modalidades encontradas no mercado e **não devem ser consideradas confirmação de que Aureci Sena oferece todas elas**.

### EQUILÍBRIO ENERGÉTICO

Possíveis práticas, somente se confirmadas pela terapeuta:

- Reiki
- Imposição de mãos
- Harmonização energética

### TERAPIAS NATURAIS E SENSORIAIS

Possíveis práticas:

- Aromaterapia
- Terapia floral
- Florais de Bach
- Cromoterapia

### RELAXAMENTO E CONSCIÊNCIA CORPORAL

Possíveis práticas:

- Reflexologia
- Massagem relaxante
- Práticas de respiração consciente
- Meditação guiada

### AUTOCONHECIMENTO E DESENVOLVIMENTO PESSOAL

Possíveis práticas:

- Constelação familiar
- Arteterapia
- Bioenergética
- Mindfulness

### BEM-ESTAR E INTEGRAÇÃO

Possíveis práticas:

- Relaxamento guiado
- Práticas contemplativas
- Exercícios de atenção plena

Não publicar modalidade sem confirmação da terapeuta e sem verificar sua formação ou qualificação para oferecê-la.

Criar cards visualmente sofisticados.

Cada categoria deve possuir:

- Imagem
- Nome
- Pequena descrição
- Lista de práticas confirmadas
- CTA

CTA:

```text
Conhecer abordagem
```

Não apresentar essas categorias como especialidades certificadas sem documentação ou informação fornecida.

---

## 13. PÁGINA DE ATENDIMENTOS

Esta é uma das partes MAIS IMPORTANTES do projeto.

A página:

```text
atendimentos.html
```

deverá funcionar como um **CATÁLOGO INFORMATIVO DE ATENDIMENTOS TERAPÊUTICOS**.

O objetivo é permitir que o visitante conheça as práticas, entenda a proposta de cada atendimento e solicite informações ou agendamento.

Não utilizar estrutura de loja virtual.

Não criar carrinho de compras, checkout comercial, pagamento fictício ou linguagem de compra de procedimentos.

---

## 14. CATÁLOGO DE ATENDIMENTOS

Cada atendimento confirmado deverá ser apresentado em um card.

Cada card deverá possuir:

```text
Imagem
Categoria
Nome do atendimento
Descrição curta
Objetivo ou proposta da prática
Duração, se informada
Modalidade presencial/online, se informada
Valor, somente se fornecido
Botão "Saiba mais"
Botão "Agendar atendimento"
```

Exemplo visual:

```text
┌──────────────────────────────┐
│                              │
│            IMAGEM            │
│                              │
├──────────────────────────────┤
│ EQUILÍBRIO ENERGÉTICO        │
│                              │
│ Nome do atendimento          │
│                              │
│ Breve descrição da prática,  │
│ com linguagem clara e        │
│ responsável.                 │
│                              │
│ Duração: se informada        │
│                              │
│ [ Saiba mais ]               │
│ [ Agendar atendimento ]      │
└──────────────────────────────┘
```

Não inventar duração, preço, contraindicações, resultados ou características específicas.

Quando o valor não tiver sido informado, não exibir preço fictício. Utilizar:

```text
Consulte informações
```

ou simplesmente omitir o campo.

---

## 15. FILTROS

Adicionar filtros para facilitar a navegação, caso a quantidade de atendimentos justifique.

Filtros sugeridos:

```text
Todos
Equilíbrio energético
Terapias naturais
Relaxamento
Autoconhecimento
Bem-estar
```

Adicionar também:

- Busca por nome
- Busca por palavra-chave
- Ordenação alfabética

Tudo deverá funcionar utilizando JavaScript.

Não adicionar ordenação por preço quando os preços não estiverem disponíveis.

---

## 16. DADOS DOS ATENDIMENTOS

Não hardcode os atendimentos diretamente em dezenas de elementos HTML.

Criar uma estrutura JavaScript organizada.

Exemplo conceitual:

```javascript
const therapies = [
    {
        id: 1,
        category: "equilibrio-energetico",
        name: "Nome da prática",
        description: "Descrição informativa e responsável.",
        duration: null,
        modality: [],
        price: null,
        image: "assets/images/atendimento-exemplo.webp",
        active: false,
        confirmedByTherapist: false
    }
];
```

O sistema deverá utilizar esses dados para gerar os cards.

As modalidades sugeridas na seção 12 devem permanecer desativadas (`active: false`) até que a terapeuta confirme quais realmente oferece.

Não publicar cards de exemplo, dados fictícios ou modalidades não confirmadas.

Isso facilitará futuras alterações.

---

## 17. SOLICITAÇÃO DE ATENDIMENTO

Ao clicar:

```text
Agendar atendimento
```

o visitante deverá iniciar o fluxo de solicitação de agendamento.

O sistema deverá permitir selecionar o atendimento de interesse, quando houver uma modalidade confirmada.

Não utilizar carrinho de compras.

Não tratar sessões como produtos ou itens de compra.

O visitante deverá poder solicitar informações mesmo sem escolher uma modalidade específica.

---

## 18. PAINEL LATERAL OU MODAL DE AGENDAMENTO

Ao clicar em um CTA de agendamento, poderá ser aberto um modal ou drawer.

Utilizar um:

```text
Appointment Modal / Appointment Drawer
```

O componente deverá surgir de forma elegante, sem prejudicar a navegação.

Exemplo:

```text
┌───────────────────────────────┐
│ Solicitar atendimento       X │
├───────────────────────────────┤
│                               │
│ Atendimento de interesse      │
│                               │
│ Nome                          │
│                               │
│ Telefone / WhatsApp           │
│                               │
│ Modalidade                    │
│                               │
│ Preferência de dia            │
│                               │
│ Preferência de horário        │
│                               │
│ Mensagem                      │
│                               │
│ [ Enviar solicitação ]        │
└───────────────────────────────┘
```

O modal deverá ser responsivo e confortável para uso em dispositivos móveis.

---

## 19. FUNCIONALIDADES DO AGENDAMENTO

O visitante deverá conseguir:

- Selecionar um atendimento, quando disponível
- Solicitar informações gerais
- Informar seus dados básicos de contato
- Indicar preferência de modalidade
- Indicar dia de preferência
- Indicar período de preferência
- Escrever uma mensagem opcional
- Revisar a solicitação
- Enviar a solicitação pelo WhatsApp

Não implementar pagamento.

Não apresentar horários como disponíveis sem integração real com agenda.

O envio representa uma solicitação, não uma reserva confirmada.

---

## 20. BOTÃO FLUTUANTE DE CONTATO

Adicionar um botão flutuante de WhatsApp.

Exemplo:

```text
WhatsApp
```

O botão deverá:

- Permanecer acessível durante a navegação
- Utilizar ícone reconhecível
- Possuir contraste adequado
- Abrir a conversa com o número configurado
- Ter tooltip ou texto acessível
- Não cobrir elementos importantes em telas pequenas

Não utilizar botão de carrinho.

---

## 21. FLUXO DE AGENDAMENTO

Ao clicar:

```text
Agendar atendimento
```

abrir o modal ou formulário de solicitação.

O formulário deverá apresentar os campos de maneira clara e organizada.

Não utilizar checkout.

Não utilizar termos como:

- Finalizar compra
- Comprar agora
- Produto
- Pedido de compra
- Subtotal
- Total da compra

Utilizar termos como:

- Solicitar atendimento
- Agendar uma conversa
- Tenho interesse
- Enviar solicitação

---

## 22. RESUMO DA SOLICITAÇÃO

Antes de abrir o WhatsApp, apresentar um resumo.

Exemplo:

```text
Resumo da solicitação

Atendimento de interesse:
Nome da prática, se selecionada

Modalidade:
Presencial / Online / A combinar

Preferência de dia:
Informação preenchida

Preferência de horário:
Informação preenchida

Mensagem:
Texto informado pelo visitante
```

Não exibir valores ou totais quando não houver preço confirmado.

Permitir que o visitante revise as informações antes de enviar.

---

## 23. FORMULÁRIO DO VISITANTE

Apresentar formulário com os campos:

### Nome

```text
Nome completo
```

### Telefone

```text
Telefone / WhatsApp
```

### E-mail

```text
E-mail (opcional)
```

### Atendimento de interesse

```text
Selecione um atendimento
```

Permitir também a opção:

```text
Ainda não sei / Gostaria de orientação
```

### Modalidade

```text
Presencial
Online
A combinar
```

Exibir somente as opções realmente oferecidas pela terapeuta. Se a modalidade não estiver confirmada, manter "A combinar".

### Mensagem

```text
Conte brevemente como podemos ajudar (opcional)
```

Não solicitar idade, endereço residencial, documentos ou informações de saúde sensíveis sem necessidade.

Não pedir que o visitante descreva diagnósticos, histórico clínico ou situações íntimas no formulário público.

---

## 24. PREFERÊNCIA DE HORÁRIO

Criar campos de preferência:

```text
Preferência de dia
Preferência de horário

Manhã
Tarde
Noite
Não tenho preferência
```

O campo de dia poderá utilizar um seletor de data.

Não exibir horários como livres ou confirmados.

Adicionar uma observação:

```text
A preferência informada será considerada na solicitação.
A confirmação do atendimento será realizada diretamente pela terapeuta.
```

---

## 25. VALIDAÇÃO

Validar os campos obrigatórios.

Validar:

- Nome
- Telefone
- Formato do e-mail, quando preenchido
- Atendimento de interesse, quando aplicável
- Preferência de contato, se houver

Não exigir informações que não sejam necessárias para iniciar o contato.

Não permitir envio com informações inválidas.

Exibir mensagens de erro amigáveis e específicas.

Garantir que os campos tenham labels e instruções claras.

---

## 26. WHATSAPP

Após o preenchimento e confirmação:

```text
Enviar solicitação pelo WhatsApp
```

o sistema deverá montar automaticamente uma mensagem estruturada.

A mensagem deverá conter emojis com moderação.

Exemplo:

```text
✨ SOLICITAÇÃO DE ATENDIMENTO ✨

Olá, Aureci! Gostaria de obter informações sobre um atendimento.

👤 MEUS DADOS

Nome: [nome]

📱 WhatsApp:
[telefone]

📧 E-mail:
[e-mail, se informado]

🌿 ATENDIMENTO DE INTERESSE

[atendimento selecionado ou "Gostaria de orientação"]

📍 MODALIDADE

[modalidade]

📅 PREFERÊNCIA DE DIA

[data ou preferência informada]

🕐 PREFERÊNCIA DE HORÁRIO

[período]

💬 MENSAGEM

[mensagem opcional]

Gostaria de receber mais informações sobre o atendimento e verificar a possibilidade de agendamento.

Obrigado(a)!
```

Não incluir informações sensíveis ou desnecessárias na mensagem.

---

## 27. CONFIGURAÇÃO DO WHATSAPP

Não colocar o número do WhatsApp espalhado pelo código.

Criar uma variável/configuração centralizada:

```javascript
const therapistConfig = {
    name: "Aureci Sena",
    whatsapp: ""
};
```

Deixar claramente indicado onde o número deverá ser alterado.

O número deverá utilizar o padrão internacional:

```text
55 + DDD + número
```

Sem espaços, parênteses ou caracteres especiais.

Não inventar número de telefone.

---

## 28. ENCODING DA MENSAGEM

Utilizar:

```javascript
encodeURIComponent()
```

para transformar a mensagem em uma URL válida para WhatsApp.

Exemplo conceitual:

```javascript
const url = `https://wa.me/${therapistConfig.whatsapp}?text=${encodeURIComponent(message)}`;
```

Abrir o WhatsApp em uma nova aba/janela.

Validar se o número foi configurado antes de tentar abrir o link.

---

## 29. CONFIRMAÇÃO FINAL

Antes de abrir o WhatsApp, apresentar uma confirmação:

```text
Tudo pronto!

Sua solicitação foi preparada.

Ao continuar, você será direcionado(a) para o WhatsApp
para conversar diretamente com a terapeuta e verificar
a disponibilidade do atendimento.

[ Voltar e revisar ]

[ Continuar para o WhatsApp ]
```

Não afirmar que a sessão foi agendada ou confirmada automaticamente.

---

## 30. PÁGINA SOBRE

Criar:

```text
sobre.html
```

Conteúdo:

- Apresentação da terapeuta
- História e trajetória, somente com informações fornecidas
- Propósito
- Filosofia de trabalho
- Formação e qualificações, quando informadas
- Experiência profissional, quando informada
- Abordagem de acolhimento
- Valores
- Como compreende o cuidado integral
- CTA para contato

Adicionar imagens editoriais sofisticadas.

Criar uma narrativa visual humana e acolhedora.

Não inventar biografia, títulos, certificações, anos de experiência ou histórias pessoais.

Se os dados ainda não estiverem disponíveis, criar estrutura configurável e deixar os campos claramente identificados para preenchimento posterior.

---

## 31. APRESENTAÇÃO DA TERAPEUTA

A apresentação deverá ser centrada em Aureci Sena.

Não criar equipe fictícia.

Criar uma seção de apresentação com:

```text
Foto da terapeuta
Nome
Apresentação
Formação, se informada
Abordagens confirmadas
Trajetória, se informada
Mensagem pessoal, se fornecida
```

Adicionar efeitos hover discretos, sem transformar a apresentação em um catálogo de profissionais.

Criar uma seção destacando uma mensagem acolhedora, sem atribuir frases ou declarações à terapeuta que não tenham sido fornecidas.

---

## 32. DEPOIMENTOS

Adicionar uma seção de depoimentos na Home somente se existirem depoimentos reais e autorizados.

Criar carousel/slideshow.

Cada depoimento poderá apresentar:

```text
Nome ou identificação autorizada
Depoimento
```

Adicionar navegação:

```text
← →
```

Adicionar indicadores.

O carousel deverá funcionar sem depender de backend.

Não inventar depoimentos, avaliações, notas, resultados ou fotografias de clientes.

Se não houver depoimentos reais, substituir a seção por uma mensagem sobre a experiência de acolhimento e a filosofia de atendimento, sem simular relatos de clientes.

---

## 33. FAQ

Criar FAQ utilizando Accordion.

Perguntas relacionadas a:

- Como funciona o primeiro contato?
- Como funciona o agendamento?
- Os atendimentos podem ser presenciais ou online?
- Quanto tempo dura uma sessão?
- Preciso escolher uma prática antes de entrar em contato?
- Como saber qual atendimento é adequado para mim?
- Como funciona o pagamento?
- Como remarcar ou cancelar?
- O que devo esperar de uma sessão?
- Como entrar em contato?

As respostas deverão utilizar somente informações confirmadas.

Quando não houver informação, utilizar resposta neutra orientando o visitante a entrar em contato.

Adicionar uma explicação responsável de que práticas integrativas e holísticas não substituem avaliação, diagnóstico ou tratamento médico ou psicológico quando estes forem necessários.

O accordion deverá possuir animações suaves.

---

## 34. ABORDAGENS E PRÁTICAS

Criar uma seção:

```text
Conheça as abordagens
```

Apresentar as práticas efetivamente oferecidas pela terapeuta, organizadas por categoria.

Possíveis modalidades para avaliação e confirmação:

- Reiki
- Aromaterapia
- Terapia floral / Florais de Bach
- Cromoterapia
- Reflexologia
- Meditação guiada
- Mindfulness
- Respiração consciente
- Constelação familiar
- Arteterapia
- Bioenergética
- Relaxamento guiado

Essas modalidades são referências de práticas encontradas no mercado. Não significa que a terapeuta ofereça todas elas.

Não utilizar nomes de associações, selos, marcas, certificações ou instituições como se houvesse parceria.

Não apresentar práticas que a terapeuta não tenha confirmado ou para as quais não possua qualificação adequada.

Para cada prática confirmada, apresentar:

- Nome
- Descrição objetiva
- Como funciona, conforme informações fornecidas
- Duração, se informada
- Modalidade, se informada
- CTA para obter informações

Não prometer cura, diagnóstico, tratamento de doenças ou resultados garantidos.

---

## 35. LOCALIZAÇÃO

Adicionar seção de localização somente se houver endereço de atendimento presencial confirmado.

Layout:

```text
┌───────────────────────────┬──────────────────────┐
│                           │                      │
│                           │  Onde estamos        │
│          MAPA             │                      │
│                           │  Endereço            │
│                           │                      │
│                           │  [Como chegar]       │
│                           │                      │
└───────────────────────────┴──────────────────────┘
```

Como os dados reais podem ainda não estar disponíveis, utilizar dados configuráveis.

Criar uma configuração:

```javascript
const therapistConfig = {
    name: "Aureci Sena",
    address: "",
    city: "",
    whatsapp: "",
    instagram: "",
    facebook: ""
};
```

Não inventar endereço ou localização.

Se o atendimento for exclusivamente online ou o endereço não tiver sido informado, ocultar o mapa e apresentar apenas os canais de contato disponíveis.

---

## 36. REDES SOCIAIS

Adicionar links para:

- Instagram
- Facebook
- WhatsApp
- TikTok, se aplicável

Utilizar ícones coerentes com a identidade visual.

Não inventar URLs reais.

Deixar os links configuráveis.

Ocultar redes sociais sem endereço/URL confirmado.

---

## 37. CTA DE AGENDAMENTO

O CTA deverá aparecer em diversos pontos do site.

Exemplos:

```text
Agendar atendimento
```

```text
Quero conhecer as abordagens
```

```text
Quero conversar
```

```text
Falar pelo WhatsApp
```

```text
Solicitar informações
```

Todos devem possuir comportamento funcional.

Os CTAs de agendamento deverão abrir o formulário ou direcionar para o WhatsApp, conforme o contexto.

Não utilizar linguagem de compra ou contratação de produtos.

---

## 38. FOOTER

Criar footer completo.

Colunas:

### Sobre

- Conheça a terapeuta
- Filosofia de trabalho
- Atendimentos
- Contato

### Atendimento

- Solicitar atendimento
- WhatsApp
- Modalidades disponíveis, se confirmadas
- Horários, se informados

### Abordagens

- Práticas confirmadas
- Como funciona
- Perguntas frequentes

### Redes sociais

- Instagram
- Facebook
- WhatsApp

Adicionar:

```text
© 2026 Aureci Sena
Todos os direitos reservados.
```

Não inventar dados de contato, endereço, registro profissional ou informações institucionais.

---

## 39. RESPONSIVIDADE

O site deve funcionar perfeitamente em:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px+
```

Priorizar Mobile First.

Testar:

- Header
- Menu
- Hero
- Cards
- Carrosséis
- Modais
- Formulários
- FAQ
- Footer
- Botão flutuante de WhatsApp

Garantir que textos, imagens e botões não fiquem cortados ou sobrepostos.

---

## 40. ANIMAÇÕES

Adicionar animações elegantes e discretas.

Utilizar:

- Fade in
- Fade up
- Scale
- Slide
- Hover
- Parallax leve
- Reveal on scroll
- Microinterações

Evitar excesso.

A animação deverá transmitir:

> Serenidade, sofisticação e fluidez.

Não utilizar animações agressivas, efeitos piscantes ou movimentos que prejudiquem a leitura.

Respeitar `prefers-reduced-motion`.

---

## 41. ACESSIBILIDADE

Implementar boas práticas:

- HTML semântico
- Labels nos formulários
- aria-label quando necessário
- Navegação por teclado
- Focus states
- Contraste adequado
- Alt text
- Botões semanticamente corretos
- Fechamento de modais pelo ESC
- Controle de foco nos modais
- Estados de foco visíveis
- Mensagens de validação acessíveis

Garantir que o site possa ser utilizado sem depender exclusivamente de cores, imagens ou movimentos.

---

## 42. SEO

Implementar SEO básico em todas as páginas.

Cada página deve possuir:

```html
<title>
<meta name="description">
<meta name="keywords">
<meta name="viewport">
<meta name="robots">
```

Utilizar:

```text
H1
H2
H3
```

de maneira hierárquica.

Adicionar Open Graph:

```text
og:title
og:description
og:image
og:url
```

Criar URLs amigáveis.

Utilizar termos de busca relacionados a terapeuta holística, terapias integrativas, atendimentos e bem-estar somente quando forem coerentes com os serviços reais.

Não inserir palavras-chave de modalidades que a terapeuta não oferece.

---

## 43. PERFORMANCE

Priorizar performance.

Implementar:

- Lazy loading de imagens
- Imagens otimizadas
- WebP quando possível
- SVG para ícones
- CSS otimizado
- JavaScript modular
- Evitar bibliotecas desnecessárias
- Evitar scripts pesados
- Evitar bloqueio de renderização
- Carregamento adequado de fontes
- Dimensões de imagens para evitar layout shift

---

## 44. MODAIS

Todos os modais deverão:

- Ter overlay
- Possuir animação
- Fechar no botão X
- Fechar com ESC
- Fechar ao clicar fora, quando apropriado
- Bloquear scroll da página
- Ser responsivos
- Possuir foco acessível
- Retornar o foco ao elemento que abriu o modal

No mobile, adaptar o comportamento para uma experiência confortável.

---

## 45. UX DO AGENDAMENTO

A experiência de solicitação deverá ser muito bem trabalhada.

Quando o visitante iniciar um agendamento:

1. Mostrar o formulário adequado.
2. Permitir selecionar uma prática confirmada ou solicitar orientação.
3. Coletar somente os dados necessários.
4. Validar as informações.
5. Exibir resumo.
6. Permitir revisar os dados.
7. Abrir o WhatsApp com a mensagem preparada.

Exibir também uma pequena confirmação:

```text
✓ Sua solicitação está pronta para envio pelo WhatsApp.
```

Não apresentar a solicitação como agendamento confirmado.

---

## 46. VALORES E DURAÇÃO

Não utilizar valores fictícios/demonstrativos.

Deixar preços centralizados no objeto JavaScript dos atendimentos para facilitar atualização, caso a terapeuta decida divulgá-los.

Exemplo:

```javascript
price: null,
duration: null
```

Quando o valor não for fornecido, ocultar o preço ou utilizar:

```text
Consulte informações
```

Formatar valores confirmados para o padrão brasileiro:

```text
R$ 199,90
```

Utilizar:

```javascript
new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
```

Não criar promoções, descontos, pacotes ou condições comerciais sem autorização.

---

## 47. DADOS CONFIGURÁVEIS

Criar um arquivo de configuração central.

Exemplo:

```javascript
const therapistConfig = {
    name: "Aureci Sena",
    professionalTitle: "",
    whatsapp: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    instagram: "",
    facebook: "",
    openingHours: {
        monday: "",
        saturday: ""
    },
    modalities: [],
    biography: "",
    presentation: ""
};
```

O objetivo é permitir que todas as informações da terapeuta sejam alteradas em um único local.

Não preencher os campos vazios com dados inventados.

---

## 48. ARQUITETURA JAVASCRIPT

Organizar o JavaScript de forma modular.

Criar responsabilidades claras:

```text
main.js
```

Responsável por:

- Menu
- Header
- Scroll
- Animações
- Componentes gerais

```text
therapies.js
```

Responsável por:

- Catálogo de atendimentos
- Categorias
- Filtros
- Busca
- Renderização dos cards
- Exibição somente de modalidades confirmadas e ativas

```text
appointment.js
```

Responsável por:

- Formulário
- Validação
- Resumo da solicitação
- Preferências de dia e horário
- Abertura e fechamento do modal

```text
whatsapp.js
```

Responsável por:

- Construção da mensagem
- Encode
- Validação do número configurado
- Redirecionamento para WhatsApp

Não criar módulos de carrinho, estoque, compra ou pagamento.

---

## 49. COMPONENTES REUTILIZÁVEIS

Mesmo utilizando HTML estático, criar componentes de interface consistentes.

Exemplos:

- Header
- Footer
- Therapy Card
- About Section
- Testimonial Card
- FAQ Item
- Modal
- Appointment Drawer
- Buttons
- Badges
- Section Headers
- Contact Card

Manter consistência visual.

---

## 50. MICROCOPY

Não utilizar textos genéricos de template.

Criar textos naturais em português brasileiro.

A comunicação deverá ser:

- Acolhedora
- Respeitosa
- Humana
- Elegante
- Profissional
- Serena
- Clara
- Inspiradora, sem exageros

Evitar linguagem de venda agressiva.

Evitar frases genéricas como:

> "Lorem ipsum"

ou:

> "Somos referência absoluta no mercado."

Não criar afirmações não comprovadas sobre resultados, experiência ou reconhecimento profissional.

Utilizar linguagem responsável, sem promessas de cura ou garantias.

---

## 51. IMAGENS E ASSETS

Sempre que possível:

- Criar imagens próprias para o projeto
- Utilizar imagens coerentes entre si
- Manter consistência de iluminação
- Manter estética acolhedora
- Evitar imagens claramente artificiais ou genéricas
- Respeitar a identidade visual de referência
- Utilizar imagens com licença ou autorização adequada

O Hero deve ser especialmente impactante.

Criar também imagens adequadas para:

- Natureza
- Bem-estar
- Equilíbrio
- Terapias confirmadas
- Apresentação da terapeuta
- Sobre
- Ambiente de atendimento
- Contato

Não gerar imagens que representem uma modalidade específica se ela não tiver sido confirmada.

---

## 52. SEGURANÇA

Como o projeto é exclusivamente frontend:

- Não armazenar dados pessoais desnecessariamente.
- Não simular pagamento.
- Não criar processamento financeiro real.
- Não armazenar dados pessoais do formulário permanentemente no LocalStorage.
- Limpar os dados do formulário após concluir o fluxo, quando apropriado.
- Não expor chaves privadas.
- Não solicitar dados sensíveis sem necessidade.
- Não transmitir dados do visitante para serviços não informados.

O formulário representa uma solicitação de contato/agendamento, não um sistema de prontuário ou cadastro clínico.

Não coletar informações de saúde detalhadas pelo formulário público.

---

## 53. IMPORTANTE SOBRE O AGENDAMENTO

O botão:

```text
Agendar atendimento
```

não deverá confirmar automaticamente uma sessão.

Ele deverá apenas:

1. Exibir formulário.
2. Solicitar dados básicos de contato.
3. Permitir informar preferências.
4. Validar informações.
5. Montar resumo da solicitação.
6. Montar mensagem.
7. Abrir WhatsApp.

Utilizar linguagem de UX adequada.

Quando necessário, pode utilizar:

```text
Solicitar atendimento
```

ou:

```text
Enviar solicitação
```

para evitar a impressão de que existe confirmação automática.

---

## 54. ESTADOS DA INTERFACE

Implementar estados:

### Formulário vazio

```text
Preencha as informações para solicitar um atendimento.
```

### Formulário preenchido

Mostrar os dados informados e permitir revisão.

### Formulário inválido

Mostrar mensagens específicas.

### Solicitação pronta

Mostrar confirmação antes do WhatsApp.

### WhatsApp não configurado

```text
O canal de WhatsApp ainda não foi configurado.
Entre em contato pelos canais disponíveis.
```

### Nenhum atendimento cadastrado

```text
As informações sobre os atendimentos estão sendo atualizadas.
Entre em contato para saber mais.
```

Não deixar cards fictícios visíveis.

---

## 55. DETALHES DE UI

Adicionar:

- Bordas arredondadas moderadas
- Sombras muito suaves
- Cards elegantes
- Hover discreto
- Botões com microinterações
- Ícones minimalistas
- Espaçamentos generosos
- Imagens com border-radius
- Gradientes muito sutis quando necessário
- Elementos gráficos naturais e discretos

Não utilizar estética excessivamente "tech".

O site deve parecer:

> Premium + Holístico + Natural + Acolhedor + Bem-estar.

Evitar aparência de clínica de estética, loja virtual ou instituição médica.

---

## 56. MOBILE

No mobile:

- Header compacto
- Menu fullscreen ou drawer
- Hero adaptado
- Cards em uma coluna
- Carrosséis touch-friendly
- Modal de agendamento otimizado para telas pequenas
- Inputs confortáveis
- Botões com área de toque adequada
- WhatsApp flutuante sem sobrepor conteúdo
- Textos com tamanho e espaçamento adequados

Garantir boa experiência em telas pequenas.

---

## 57. CONTATO

Criar uma seção de contato com:

```text
WhatsApp
E-mail
Horário de atendimento
Redes sociais
Endereço, se informado
Modalidades de atendimento, se confirmadas
```

Adicionar CTA:

```text
Falar pelo WhatsApp
```

e:

```text
Solicitar atendimento
```

Não exibir campos sem dados reais.

Se não houver endereço presencial confirmado, não apresentar mapa.

---

## 58. EXPERIÊNCIA DE NAVEGAÇÃO

A navegação deve ser fluida.

Adicionar:

- Smooth scroll
- Breadcrumbs nas páginas internas quando fizer sentido
- Links entre páginas
- CTAs consistentes
- Botão "Voltar ao topo"
- Destaque de navegação atual
- Estados de carregamento quando necessários

Garantir que todos os links internos apontem para páginas ou seções existentes.

---

## 59. PÁGINAS INTERNAS

As páginas internas devem possuir:

### Sobre

Hero interno + apresentação + trajetória + filosofia + qualificações confirmadas + CTA.

### Atendimentos

Hero interno + categorias + práticas confirmadas + descrições + CTA de solicitação.

### Contato

Hero interno + informações de contato + formulário/WhatsApp + redes sociais + mapa, somente se houver endereço real.

Não criar página de equipe ou páginas individuais de profissionais fictícios.

---

## 60. QUALIDADE VISUAL

O projeto final deverá parecer desenvolvido por uma agência profissional.

Evitar:

- Layouts genéricos
- Excesso de cards
- Espaçamento inconsistente
- Cores aleatórias
- Tipografia sem hierarquia
- Botões genéricos
- Imagens incompatíveis
- Componentes desalinhados
- Design padrão de Tailwind sem personalização
- Símbolos esotéricos em excesso
- Textos com promessas terapêuticas
- Informações profissionais inventadas

Utilizar Tailwind como base, mas criar uma identidade visual própria.

---

## 61. TESTES

Antes de considerar o projeto concluído, testar:

### Navegação

- Todos os links
- Todas as páginas
- Menu desktop
- Menu mobile

### Atendimentos

- Categorias
- Filtros
- Busca
- Cards
- Exibição somente de práticas confirmadas
- Botões de informação e agendamento

### Agendamento

- Abrir e fechar modal
- Campos
- Validação
- Resumo
- Preferência de dia e horário
- Estado de formulário vazio
- Estado de formulário inválido

### WhatsApp

- Construção da mensagem
- Encoding
- Emojis
- Dados básicos de contato
- Número configurado
- Abertura correta do WhatsApp

### Responsividade

Testar desktop, tablet e mobile.

### Conteúdo

- Não existem modalidades não confirmadas publicadas.
- Não existem depoimentos fictícios.
- Não existem qualificações inventadas.
- Não existem promessas de cura.
- Não existem dados de contato fictícios.

---

## 62. CRITÉRIO DE CONCLUSÃO

O projeto somente deverá ser considerado concluído quando:

- Todas as páginas estiverem implementadas.
- Todos os links funcionarem.
- O design estiver consistente.
- O site estiver responsivo.
- O catálogo informativo funcionar.
- Os filtros funcionarem, quando aplicáveis.
- Somente atendimentos confirmados estiverem publicados.
- O formulário funcionar.
- A validação funcionar.
- O resumo da solicitação funcionar.
- A mensagem do WhatsApp funcionar.
- O menu mobile funcionar.
- FAQ funcionar.
- Depoimentos reais forem exibidos somente se fornecidos e autorizados.
- Mapa estiver implementado somente se houver endereço confirmado.
- CTAs estiverem funcionando.
- Não existirem erros no console.
- Não existirem placeholders visíveis desnecessários.
- Não existirem links quebrados.
- O projeto estiver organizado e documentado.

---

## 63. README

Criar um README.md contendo:

- Nome do projeto
- Descrição
- Tecnologias
- Estrutura
- Como executar
- Como alterar dados da terapeuta
- Como alterar atendimentos
- Como ativar ou desativar uma prática
- Como alterar número do WhatsApp
- Como alterar redes sociais
- Como alterar endereço
- Como substituir imagens
- Como publicar

Explicar de forma simples onde editar cada informação.

---

## 64. RESULTADO ESPERADO

Entregar um website:

> **MULTI-PAGES + PREMIUM + RESPONSIVO + FRONTEND STATIC + APRESENTAÇÃO DA TERAPEUTA + CATÁLOGO INFORMATIVO DE ATENDIMENTOS + AGENDAMENTO VIA WHATSAPP**

O projeto deve combinar:

```text
Holistic Wellness
+
Well-being
+
Self-knowledge
+
Human Care
+
Premium UX
+
Accessibility
+
Conversion
```

O usuário deve conseguir entrar na Home, conhecer a terapeuta, compreender sua proposta de trabalho, visualizar os atendimentos confirmados, consultar informações, preencher uma solicitação e continuar a conversa diretamente pelo WhatsApp.

O site não deverá funcionar como e-commerce.

---

## 65. ORDEM DE EXECUÇÃO

Execute o projeto nesta ordem:

### FASE 1

Analisar requisitos, arquivos existentes, imagem de referência e definir arquitetura.

### FASE 2

Criar identidade visual e design system.

### FASE 3

Criar estrutura HTML das páginas.

### FASE 4

Implementar Tailwind + CSS personalizado.

### FASE 5

Criar e inserir imagens coerentes com a identidade holística.

### FASE 6

Implementar JavaScript geral.

### FASE 7

Implementar catálogo informativo de atendimentos.

### FASE 8

Implementar filtros e busca, se necessários.

### FASE 9

Implementar formulário e fluxo de solicitação de atendimento.

### FASE 10

Implementar integração WhatsApp.

### FASE 11

Implementar animações e microinterações.

### FASE 12

Implementar SEO e acessibilidade.

### FASE 13

Testar responsividade.

### FASE 14

Testar todos os fluxos.

### FASE 15

Corrigir erros.

### FASE 16

Fazer revisão visual final.

### FASE 17

Documentar no README.md.

---

## 66. REGRA FINAL

Não faça apenas uma demonstração visual.

Construa o projeto como se ele fosse ser entregue para uma cliente real.

Priorize:

1. UX
2. UI
3. Clareza da comunicação
4. Performance
5. Responsividade
6. Acessibilidade
7. Organização do código
8. Manutenibilidade
9. SEO
10. Integração funcional com WhatsApp

Não utilize React, Next.js, Node.js ou backend.

Toda a experiência deve funcionar utilizando apenas:

```text
HTML
CSS
JavaScript
Tailwind CSS
APIs frontend/nativas
```

O resultado deve ser visualmente sofisticado, funcional e pronto para receber os dados reais da terapeuta.

**REGRA DE PRESERVAÇÃO DO PROJETO:** antes de desenvolver, analise os arquivos existentes e a imagem de referência. Preserve a estrutura técnica definida, a paleta e os elementos visuais de referência que forem compatíveis com o novo objetivo. Remova integralmente referências a clínica de estética, beleza estética, procedimentos dermatológicos, laser, Botox, harmonização, cosméticos, carrinho, checkout comercial, marcas de estética e equipe fictícia. Não faça alterações fora do escopo sem necessidade.

**REGRA DE CONTEÚDO E RESPONSABILIDADE:** não invente formação, certificações, registros, experiência, depoimentos, endereço, preços ou atendimentos. As modalidades sugeridas neste prompt são possibilidades de mercado, não serviços confirmados de Aureci Sena. Mantenha cada modalidade desativada até confirmação expressa da terapeuta. Não prometa cura, diagnóstico ou substituição de tratamentos médicos ou psicológicos.

**Observação importante**

A estrutura original de catálogo, carrinho e checkout foi convertida em catálogo informativo e solicitação de atendimento. O site continua oferecendo uma experiência organizada para conhecer as práticas e iniciar o agendamento, mas sem simular uma loja virtual ou confirmação automática de sessão.

Os dados da terapeuta, WhatsApp, endereço, redes sociais, horários, biografia e atendimentos devem ficar centralizados em configurações para facilitar atualizações futuras.
