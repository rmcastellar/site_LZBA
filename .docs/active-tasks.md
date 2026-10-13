# Tarefas Ativas - Construtora LZBA

## Sprint Atual: Estrutura Base de Rotas e Páginas Principais

- [x] Inicialização da governança de memória em `.docs/` (`project-state.md`, `active-tasks.md`, `schema-registry.md`)
- [x] Criação do Layout Mestre (`src/layouts/Layout.astro`) com Header institucional e Footer completo
- [x] Redesign da Home (`/`) estritamente adequado ao mockup fornecido (Hero sóbrio, Como Fazemos, Projetos com filtros e cards Luxury Living, Previsibilidade em 4 etapas, Faixa de métricas, FAQ com foto técnica, Banner final sobre alicerces sólidos e Footer em 3 colunas)
- [x] Modularização da `index.astro` em 7 componentes de seção reutilizáveis (`src/components/sections/`) para máxima manutenibilidade e performance
- [x] Padronização estrita da seção Projetos (`ProjetosSection.astro`) consumindo 100% das variáveis e classes de cores oficiais da marca LZBA (`--lzba-*` e classes semânticas em `src/styles/global.css`)
- [x] Padronização tipográfica global para Inter Bold (Títulos) e Inter Light (Parágrafos) via Google Fonts e tokens em `global.css` e `Layout.astro`
- [x] Transformação de "Oportunidades" no Header em botão com contorno e preenchimento, direcionando com scroll suave para a seção Projetos e ativando automaticamente o filtro "Lançamentos"
- [x] Validação com `npm run build` e typecheck sem erros (todas as 11 rotas estáticas renderizadas em < 400ms)

## Próximos Passos Sugeridos
- [ ] Refinamento e importação do acervo fotográfico histórico completo (31 edifícios)
- [ ] Implementação de página interativa de Linha do Tempo (`/linha-do-tempo`)
- [ ] Integração de envio de leads via API / Webhook (ex: CRM imobiliário, RD Station ou WhatsApp Cloud)
