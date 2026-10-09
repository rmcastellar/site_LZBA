# Registro de Schemas e Dados - Construtora LZBA

## Coleção: `empreendimentos`
Coleção de conteúdo via Content Layer do Astro (`src/content.config.ts`) com validação Zod:

```typescript
export interface EmpreendimentoSchema {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  status: 'lancamento' | 'em_obras' | 'entregue';
  localizacao: {
    bairro: string;
    cidade: string;
    estado: string;
    enderecoCompleto: string;
  };
  caracteristicas: {
    metragem: string; // Ex: "68m² a 112m²"
    dormitorios: string; // Ex: "2 e 3 dorms"
    suites: string; // Ex: "1 a 2 suítes"
    vagas: string; // Ex: "1 a 2 vagas"
  };
  destaque: boolean;
  imagemCapa: string;
  galeria: string[];
  plantas: {
    titulo: string;
    imagem: string;
    metragem: string;
  }[];
  estagioObras?: {
    geral: number; // 0-100
    fundacao: number;
    estrutura: number;
    alvenaria: number;
    acabamento: number;
  };
  diferenciais: string[];
  descricao: string;
}
```

## Dados Institucionais Básicos (LZBA)
- **Anos de história:** 34 anos
- **Apartamentos entregues:** 1.343
- **Empreendimentos entregues:** 31
- **Telefone:** (11) 2691-9059
- **WhatsApp:** (11) 99961-8125
- **E-mail:** atendimento@lzba.com.br
- **Razão Social:** LZBA Incorporadora de Imóveis Ltda.
