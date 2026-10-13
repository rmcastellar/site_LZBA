export interface Empreendimento {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  /** Categoria arquitetônica do card (ex: 'Architecture – Luxury Living', 'Residencial Exclusivo') */
  categoria?: string;
  status: 'lancamento' | 'em_obras' | 'entregue';
  statusLabel: string;
  bairro: string;
  cidade: string;
  estado: string;
  endereco: string;
  metragem: string;
  dormitorios: string;
  suites: string;
  vagas: string;
  destaque: boolean;
  imagemCapa: string;
  galeria: string[];
  descricaoCurta: string;
  descricaoCompleta: string;
  diferenciais: string[];
  plantas: {
    titulo: string;
    metragem: string;
    descricao: string;
  }[];
  estagioObras?: {
    geral: number;
    fundacao: number;
    estrutura: number;
    alvenaria: number;
    acabamento: number;
  };
}

/**
 * ============================================================================
 * BASE DE DADOS CENTRAL DE EMPREENDIMENTOS DA LZBA
 * Para cadastrar um novo empreendimento, basta adicionar um novo objeto ao array abaixo.
 * Todas as páginas, cards, rotas dinâmicas (/empreendimentos/[slug]) e filtros
 * serão gerados e atualizados automaticamente.
 * ============================================================================
 */
export const EMPREENDIMENTOS: Empreendimento[] = [
  {
    id: 'residencial-season',
    slug: 'residencial-season',
    titulo: 'Residencial Season',
    subtitulo: 'A exclusividade que o seu estilo de vida merece',
    status: 'entregue',
    statusLabel: 'Concluído',
    bairro: 'Jardim São Paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Av. Mazzei, 326 - Vila Mazzei - São Paulo',
    metragem: '35m² a 52m²',
    dormitorios: '1 e 2 dormitórios',
    suites: 'com ou sem suíte',
    vagas: 'com ou sem vaga',
    destaque: true,
    imagemCapa: '/images/img_season_capa.jpg',
    galeria: [
      '/images/img_season_capa.jpg',
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'Um projeto de alto padrão que une sofisticação, conforto e localização privilegiada. Desfrute de ambientes planejados para o seu bem-estar e de uma experiência de moradia exclusiva.',
    descricaoCompleta: 'O Residencial Season foi concebido para redefinir o conceito de viver bem. Localizado em uma das regiões mais desejadas, o empreendimento traduz o compromisso da Construtora Lzba com a excelência arquitetônica, o rigor técnico e o acabamento de alto padrão. Cada detalhe foi pensado para proporcionar máxima funcionalidade, iluminação natural e conforto térmico, entregando espaços amplos e integrados que atendem às necessidades de famílias que valorizam exclusividade e sofisticação.',
    diferenciais: [
      'Piscina adulto e infantil',
      'Espaço Gourmet',
      'Academia',
      'Brinquedoteca',
      'Playground',
      'Salão de Festas',
      'Salão de Jogos',
      'Espaço Grill',
      'Sauna'
    ],
    plantas: [
      {
        titulo: 'Apartamento Tipo 1 - 2 Dorms',
        metragem: '52,76m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 2 - 2 Dorms',
        metragem: '44,16 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
            {
        titulo: 'Apartamento Tipo 3 - 2 Dorms',
        metragem: '45,31 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 4 - 2 Dorms',
        metragem: '45,94 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 5 - 2 Dorms',
        metragem: '35,04 m²',
        descricao: '2 dormitórios'
      },
      {
        titulo: 'Apartamento Tipo 6 - 2 Dorms',
        metragem: '46,16 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.'
      }
    ],
    estagioObras: {
      geral: 100,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 100,
      acabamento: 100
    }
  },
    {
    id: 'residencial-arbore',
    slug: 'residencial-arbore',
    titulo: 'Residencial Arbore',
    subtitulo: 'Viva em sintonia com a natureza, a poucos passos de tudo',
    status: 'lancamento',
    statusLabel: 'Lançamento',
    bairro: 'Jardim São Paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Parque Domingos Luís, 654 — Jardim São Paulo',
    metragem: '37m² a 58m²',
    dormitorios: '1 e 2 dormitórios',
    suites: 'com ou sem suíte',
    vagas: 'com ou sem vaga',
    destaque: true,
    imagemCapa: '/images/img-arbore-capa.webp',
    galeria: [
      '/images/img-arbore-capa.webp',
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'O Residencial Arbore traduz a essência daquilo que permanece: raízes profundas, tradição e crescimento constante. Um conceito que valoriza a solidez, o bem-estar e a conexão com uma vida mais equilibrada.',
    descricaoCompleta: 'O Residencial Arbore traduz a essência daquilo que permanece: raízes profundas, tradição e crescimento constante. Um conceito que valoriza a solidez, o bem-estar e a conexão com uma vida mais equilibrada. Localizado em uma região arborizada e consolidada, o empreendimento combina a tranquilidade de um bairro tradicional com a conveniência de estar próximo a importantes centros comerciais, culturais e gastronômicos. Cada detalhe foi pensado para refletir solidez, qualidade e respeito ao espaço de quem deseja viver com equilíbrio e bem-estar.',
    diferenciais: [
      'Piscina adulto e infantil',
      'Academia'
    ],
    plantas: [
      {
        titulo: 'Apartamento Tipo 1 - 2 Dorms',
        metragem: '52,76m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 2 - 2 Dorms',
        metragem: '44,16 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
            {
        titulo: 'Apartamento Tipo 3 - 2 Dorms',
        metragem: '45,31 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 4 - 2 Dorms',
        metragem: '45,94 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.'
      },
      {
        titulo: 'Apartamento Tipo 5 - 2 Dorms',
        metragem: '35,04 m²',
        descricao: '2 dormitórios'
      },
      {
        titulo: 'Apartamento Tipo 6 - 2 Dorms',
        metragem: '46,16 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.'
      }
    ],
    estagioObras: {
      geral: 100,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 100,
      acabamento: 100
    }
  },
  {
    id: 'residencial-vista-vicenza',
    slug: 'residencial-vista-vicenza',
    titulo: 'Residencial Vista Vicenza',
    subtitulo: 'Elegância e amplitude com vista privilegiada',
    status: 'em_obras',
    statusLabel: 'Em Obras',
    bairro: 'Santana',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Voluntários da Pátria - Santana',
    metragem: '74m² a 118m²',
    dormitorios: '3 dormitórios',
    suites: '2 suítes',
    vagas: '2 vagas demarcadas',
    destaque: true,
    imagemCapa: '/images/hero-building.jpg',
    galeria: [
      '/images/hero-building.jpg',
      '/images/season-facade.jpg'
    ],
    descricaoCurta: 'Obras avançadas com alto padrão de acabamento e plantas confortáveis para toda a família.',
    descricaoCompleta: 'Com localização privilegiada no coração de Santana, o Residencial Vista Vicenza une a conveniência dos melhores colégios e gastronomia a uma estrutura de clube privativo. Construção sólida com assinatura e garantia de qualidade LZBA.',
    diferenciais: [
      'Terraço panorâmico envidraçado',
      'Complexo aquático com raia coberta',
      'Espaço Mulher / SPA e sauna seca',
      'Quadra poliesportiva oficial',
      'Bicicletário com oficina compartilhada',
      'Gerador de emergência para elevadores e áreas comuns'
    ],
    plantas: [
      {
        titulo: 'Planta Premium - 3 Dorms',
        metragem: '74 m²',
        descricao: 'Living com 2 ambientes, varanda espaçosa, suíte e excelente aproveitamento de armários.'
      },
      {
        titulo: 'Planta Master - 3 Suítes',
        metragem: '118 m²',
        descricao: 'Hall privativo, varanda gourmet com churrasqueira, 3 suítes plenas e lavabo.'
      }
    ],
    estagioObras: {
      geral: 68,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 92,
      acabamento: 45
    }
  },
  {
    id: 'residencial-capricho',
    slug: 'residencial-capricho',
    titulo: 'Residencial Capricho',
    subtitulo: 'Tranquilidade e sofisticação junto à natureza',
    status: 'entregue',
    statusLabel: 'Pronto / Entregue',
    bairro: 'Tremembé',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Avenida Nova Cantareira - Tremembé',
    metragem: '65m² a 95m²',
    dormitorios: '2 e 3 dormitórios',
    suites: '1 suíte',
    vagas: '1 a 2 vagas',
    destaque: false,
    imagemCapa: '/images/hero-building.jpg',
    galeria: [
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'Empreendimento 100% entregue no prazo, consolidando a satisfação dos proprietários.',
    descricaoCompleta: 'Mais uma entrega de excelência concluída com sucesso pela LZBA. O Residencial Capricho oferece qualidade de vida em região arborizada, com segurança 24h e infraestrutura impecável.',
    diferenciais: [
      'Entregue rigorosamente dentro do prazo',
      'Áreas comuns decoradas e climatizadas',
      'Salão de jogos e brinquedoteca',
      'Jardins planejados com paisagismo exuberante'
    ],
    plantas: [
      {
        titulo: 'Planta Conforto - 2 Dorms',
        metragem: '65 m²',
        descricao: 'Planta funcional com suíte e varanda integrada.'
      }
    ],
    estagioObras: {
      geral: 100,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 100,
      acabamento: 100
    }
  },
  {
    id: 'residencial-liverpool',
    slug: 'residencial-liverpool',
    titulo: 'Residencial Liverpool',
    subtitulo: 'Design moderno e qualidade construtiva atemporal',
    status: 'entregue',
    statusLabel: 'Pronto / Entregue',
    bairro: 'Parada Inglesa',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Guupira - Parada Inglesa',
    metragem: '58m² a 82m²',
    dormitorios: '2 dormitórios',
    suites: '1 suíte',
    vagas: '1 vaga',
    destaque: false,
    imagemCapa: '/images/hero-building.jpg',
    galeria: [
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'Sucesso de vendas e valorização imobiliária garantida para os moradores e investidores.',
    descricaoCompleta: 'Entregue com padrão de ponta LZBA, a passos do metrô e com excelente infraestrutura de comércio e serviços.',
    diferenciais: [
      'Elevadores inteligentes de alta velocidade',
      'Piscina adulto e infantil',
      'Espaço gourmet mobiliado',
      'Excelente liquidez e valorização'
    ],
    plantas: [
      {
        titulo: 'Planta Urbana - 2 Dorms',
        metragem: '58 m²',
        descricao: 'Otimização inteligente para a vida moderna.'
      }
    ],
    estagioObras: {
      geral: 100,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 100,
      acabamento: 100
    }
  },
  {
    id: 'residencial-london',
    slug: 'residencial-london',
    titulo: 'Residencial London',
    subtitulo: 'Elegância britânica com o acolhimento paulistano',
    status: 'entregue',
    statusLabel: 'Pronto / Entregue',
    bairro: 'Santana',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Conselheiro Moreira de Barros - Santana',
    metragem: '70m² a 105m²',
    dormitorios: '3 dormitórios',
    suites: '1 ou 2 suítes',
    vagas: '2 vagas',
    destaque: false,
    imagemCapa: '/images/hero-building.jpg',
    galeria: [
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'Referência de moradia e acabamentos premium na Zona Norte.',
    descricaoCompleta: 'Concluído e entregue com padrão de acabamento refinado, demonstrando a consistência e solidez técnica dos 34 anos da LZBA.',
    diferenciais: [
      'Ambientes amplos e arejados',
      'Segurança armada monitorada',
      'Academia climatizada',
      'Salão gourmet'
    ],
    plantas: [
      {
        titulo: 'Planta Família - 3 Dorms',
        metragem: '70 m²',
        descricao: 'Conforto acústico e excelente ventilação cruzada.'
      }
    ],
    estagioObras: {
      geral: 100,
      fundacao: 100,
      estrutura: 100,
      alvenaria: 100,
      acabamento: 100
    }
  }
];

export const NUMEROS_LZBA = {
  anosCarreira: '34',
  aptosEntregues: '1.343',
  obrasEntregues: '31',
  satisfacao: '99%'
};

export const CONTATO_LZBA = {
  telefone: '(11) 2691-9059',
  whatsapp: '(11) 99961-8125',
  whatsappLink: 'https://wa.me/5511999618125?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+os+empreendimentos+da+LZBA',
  email: 'atendimento@lzba.com.br',
  endereco: 'Rua Capitão Rabelo, 560 - Jardim São Paulo - São Paulo',
  horario: 'Segunda a Sexta, das 9h às 18h'
};
