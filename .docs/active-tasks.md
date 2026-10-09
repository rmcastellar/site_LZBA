# Tarefas Ativas - Construtora LZBA

## Sprint Atual: Estrutura Base de Rotas e Páginas Principais

- [x] Inicialização da governança de memória em `.docs/` (`project-state.md`, `active-tasks.md`, `schema-registry.md`)
- [x] Criação do Layout Mestre (`src/layouts/Layout.astro`) com Header institucional e Footer completo
- [x] Implementação de `/` (Home com Hero imponente, Quick-Bar de números: 34 anos, 1.343 aptos, 31 empreendimentos, destaques, sobre e CTAs)
- [x] Implementação de `/empreendimentos` (Catálogo com abas/filtros Lançamento, Em Obras, Entregues)
- [x] Implementação de `/empreendimentos/[slug]` (Página de detalhe de empreendimento dinâmico com galeria, plantas, evolução de obra e CTA)
- [x] Implementação de `/sobre` (História da LZBA, Proposta de Valor, Missão, Visão e Valores)
- [x] Implementação de `/trabalhe-conosco` (Canal de credenciamento para imobiliárias e corretores parceiros com formulário)
- [x] Implementação de `/contato` (Canais de atendimento, telefones, WhatsApp, formulário e localização)
- [x] Implementação de `/politica-de-privacidade` (Termos de privacidade e conformidade LGPD)
- [x] Validação com `npm run build` e typecheck sem erros (todas as 11 rotas estáticas renderizadas em < 500ms)

## Próximos Passos Sugeridos
- [ ] Refinamento e importação do acervo fotográfico histórico completo (31 edifícios)
- [ ] Implementação de página interativa de Linha do Tempo (`/linha-do-tempo`)
- [ ] Integração de envio de leads via API / Webhook (ex: CRM imobiliário, RD Station ou WhatsApp Cloud)
