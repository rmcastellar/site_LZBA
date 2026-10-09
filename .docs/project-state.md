# Estado do Projeto - Construtora & Incorporadora LZBA

## 1. Decisões Técnicas e Arquitetura
- **Framework:** Astro 7+ (Static Site Generation - SSG).
- **Estilização:** Tailwind CSS v4 via `@tailwindcss/vite` e `@import "tailwindcss";` em `src/styles/global.css`. Sem `tailwind.config.js`.
- **Linguagem & Tipagem:** TypeScript em modo estrito (`strict: true`).
- **Hidratação:** Zero-JS por padrão para renderização puramente estática e máxima pontuação em Core Web Vitals (LCP, CLS, INP). Interações mínimas com Vanilla JS ou ilhas controladas.
- **Tipografia:** Google Fonts (Outfit / Inter) com foco em sofisticação imobiliária, elegância e alta legibilidade.
- **Paleta de Cores:**
  - Dark Charcoal / Slate Profundo: `#0B0F17`, `#111827`, `#1F2937`
  - Dourado / Champanhe Acobreado: `#C5A880`, `#D4AF37`, `#E5C07B`
  - Acentos de Confiança: Azul Petróleo / Marinho Profundo `#0F2027`, `#203A43`
  - Neutros: Branco Puro `#FFFFFF`, Cinza Gelo `#F8FAFC`, Cinza Médio `#94A3B8`

## 2. Catálogo de Rotas
- `/`: Home Page (Hero com visual imponente, Quick-Bar com números reais da LZBA, destaques de empreendimentos, sobre resumido, pilares e CTAs).
- `/empreendimentos`: Portfólio com abas/filtros por status (*Lançamento*, *Em Obras*, *Entregues*).
- `/empreendimentos/[slug]`: Página detalhada do empreendimento com galeria de fotos, especificações, plantas, estágio de obras, localização e formulário/WhatsApp de contato.
- `/sobre`: Apresentação institucional, história da LZBA, proposta de valor, números consolidados, missão, visão e valores.
- `/trabalhe-conosco`: Canal de credenciamento e parceria para imobiliárias e corretores independentes.
- `/contato`: Fale Conosco, canais de atendimento, WhatsApp direto, formulário de mensagem e endereço.
- `/politica-de-privacidade`: Política de privacidade e conformidade com a LGPD.

## 3. Estrutura de Assets
- `public/images/logo.png`: Logo oficial da LZBA.
- `public/images/logo_season.png`: Logo do empreendimento Residencial Season.
- `public/images/hero-building.jpg`: Fachada/foto de destaque LZBA.
- `public/images/season-facade.jpg`: Fachada do Residencial Season.
