# Estado do Projeto - Construtora & Incorporadora LZBA

## 1. Decisões Técnicas e Arquitetura
- **Framework:** Astro 7+ (Static Site Generation - SSG).
- **Estilização:** Tailwind CSS v4 via `@tailwindcss/vite` e `@import "tailwindcss";` em `src/styles/global.css`. Sem `tailwind.config.js`.
- **Linguagem & Tipagem:** TypeScript em modo estrito (`strict: true`).
- **Hidratação:** Zero-JS por padrão para renderização puramente estática e máxima pontuação em Core Web Vitals (LCP, CLS, INP). Interações mínimas com Vanilla JS ou ilhas controladas.
- **Tipografia:** Google Fonts (Inter) padronizada:
  - Títulos: `Inter Bold` (`font-weight: 700`)
  - Parágrafos: `Inter Light` (`font-weight: 300`)
- **Paleta de Cores Centralizada (`src/styles/global.css`):**
  - `--color-lzba-red`: `#66000B` (Vinho / Bordô Institucional LZBA)
  - `--color-lzba-gold`: `#DBA725` (Dourado / Âmbar de Acento e Destaques)
  - `--color-lzba-light`: `#EDEDED` (Cinza Claro para Superfícies e Cards)
  - `--color-lzba-border`: `#DADADA` (Cinza para Contornos, Divisores e Bordas)
  - `--color-lzba-muted`: `#B2B2B2` (Cinza Médio para Textos Auxiliares e Legendas)
  - `--color-lzba-dark`: `#1A1A1A` (Preto Carvão Profundo para Fundo Escuro, Header e Footer)
  - Toda a manutenção de cores do projeto é realizada **exclusivamente** no bloco `@theme` e `:root` de `src/styles/global.css`.

## 2. Catálogo de Rotas
- `/`: Home Page (Hero com visual imponente, Quick-Bar com números reais da LZBA, destaques de empreendimentos, sobre resumido, pilares e CTAs). Modularizada em `src/components/sections/` (`HeroSection`, `DiferenciaisSection`, `ProjetosSection`, `PrevisibilidadeSection`, `NumerosSection`, `FaqSection`, `CtaSection`).
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
