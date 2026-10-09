export interface Empreendimento {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
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

export const EMPREENDIMENTOS: Empreendimento[] = [
  {
    id: 'residencial-season',
    slug: 'residencial-season',
    titulo: 'Residencial Season',
    subtitulo: 'A exclusividade que o seu estilo de vida merece',
    status: 'lancamento',
    statusLabel: 'Lançamento',
    bairro: 'Jardim São Paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Pedro Doll, 550 - Santana / Jardim São Paulo',
    metragem: '52m² a 87m²',
    dormitorios: '2 e 3 dormitórios',
    suites: '1 a 2 suítes',
    vagas: '1 a 2 vagas demarcadas',
    destaque: true,
    imagemCapa: '/images/season-facade.jpg',
    galeria: [
      '/images/season-facade.jpg',
      '/images/hero-building.jpg'
    ],
    descricaoCurta: 'Empreendimento de alto padrão com arquitetura contemporânea e lazer completo em localização nobre.',
    descricaoCompleta: 'O Residencial Season é a celebração do equilíbrio entre sofisticação, mobilidade e bem-estar. Projetado nos mínimos detalhes pela Construtora LZBA, cada apartamento possui plantas inteligentes pensadas para valorizar a iluminação natural e o conforto térmico. Com varanda gourmet integrada à cozinha e área de lazer equipada e decorada com requinte.',
    diferenciais: [
      'Piscina aquecida com solarium e deck molhado',
      'Espaço Gourmet com churrasqueira a carvão e forno de pizza',
      'Fitness Center com equipamentos de ponta',
      'Coworking integrado para trabalho remoto',
      'Salão de Festas com pé-direito duplo',
      'Portaria blindada com controle de acesso biométrico',
      'Infraestrutura para tomada de carro elétrico',
      'Pet Place e Playground lúdico'
    ],
    plantas: [
      {
        titulo: 'Apartamento Tipo - 2 Dorms',
        metragem: '52 m²',
        descricao: 'Living integrado à varanda, 1 suíte espaçosa, cozinha americana e área de serviço ventilada.'
      },
      {
        titulo: 'Apartamento Família - 3 Dorms',
        metragem: '87 m²',
        descricao: 'Opção de living ampliado, varanda gourmet com churrasqueira, suíte master com closet.'
      }
    ],
    estagioObras: {
      geral: 15,
      fundacao: 85,
      estrutura: 20,
      alvenaria: 5,
      acabamento: 0
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
  endereco: 'São Paulo - SP',
  horario: 'Segunda a Sexta, das 9h às 18h'
};
