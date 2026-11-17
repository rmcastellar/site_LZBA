export interface Empreendimento {
  id: string;
  slug: string;
  ano: string,
  titulo: string;
  subtitulo: string;
  /** Categoria arquitetônica do card (ex: 'Architecture – Luxury Living', 'Residencial Exclusivo') */
  categoria?: string;
  status: 'lancamento' | 'em_obras' | 'entregue' | 'futuros';
  statusLabel: string;
  hotsite?: string;
  tourVirtual?: string;
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
  imagemFachada: string;
  galeria: string[];
  descricaoCurta: string;
  descricaoCompleta: string;
  diferenciais: string[];
  plantas: {
    titulo: string;
    metragem: string;
    descricao: string;
    imagem?: string;
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
    ano: '2025',
    slug: 'residencial-season',
    titulo: 'Residencial Season',
    subtitulo: 'A exclusividade que o seu estilo de vida merece',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: 'https://www.residencialseason.com.br/',
    tourVirtual: 'https://www.vertuality.com.br/tour/lzba/season/',
    bairro: 'Jardim São Paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Av. Mazzei, 326 - Vila Mazzei - São Paulo',
    metragem: '35m² a 52m²',
    dormitorios: '1 e 2 dormitórios',
    suites: 'com ou sem suíte',
    vagas: 'com ou sem vaga',
    destaque: true,
    imagemCapa: '/images/empreendimentos/season/img-season-guarita.jpg',
    imagemFachada: '/images/empreendimentos/season/img_season_fachada.jpg',
    galeria: [
      '/images/empreendimentos/season/img-season-guarita.jpg',
      '/images/empreendimentos/season/img-season-fachada1.jpg',
      '/images/empreendimentos/season/img-season-fachada2.jpg',
      '/images/empreendimentos/season/img-season-fachada5.jpg',
      '/images/empreendimentos/season/img_season_Espaço_Gourmet.jpg',
      '/images/empreendimentos/season/img_season_Brinquedoteca.jpg',
      '/images/empreendimentos/season/img_season_Academia.jpg',
      '/images/empreendimentos/season/img_season_Espaço_Grill.jpg',
      '/images/empreendimentos/season/img_season_Hall_de_Acesso.jpg',
      '/images/empreendimentos/season/img_season_Salao_de_Festas.jpg',
      '/images/empreendimentos/season/img_season_Salao_de_Jogos.jpg',
      '/images/empreendimentos/season/img_season_Piscina_Adulto.png',
      '/images/empreendimentos/season/img_season_Piscina_Infantil.jpg',
      '/images/empreendimentos/season/img_season_Playground.jpg',
      '/images/empreendimentos/season/img-season_Sauna.jpg'
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
        titulo: 'Apartamento - 2 Dorms',
        metragem: '52,76m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.',
        imagem: ''

      },
      {
        titulo: 'Apartamento - 2 Dorms',
        metragem: '44,16 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.',
        imagem: '/images/empreendimentos/season/img-planta-4416m2.png'
      },
            {
        titulo: 'Apartamento - 2 Dorms',
        metragem: '45,31 m²',
        descricao: '2 dormitórios (1 suíte), varanda Gourmet e 1 vaga.',
        imagem: ''
      },
      {
        titulo: 'Apartamento - 2 Dorms',
        metragem: '45,94 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.',
        imagem: ''
      },
      {
        titulo: 'Apartamento - 2 Dorms',
        metragem: '35,04 m²',
        descricao: '2 dormitórios',
        imagem: ''
      },
      {
        titulo: 'Apartamento - 2 Dorms',
        metragem: '46,16 m²',
        descricao: '2 dormitórios (1 suíte) e 1 vaga.',
        imagem: ''
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
    ano: '2028',
    slug: 'residencial-arbore',
    titulo: 'Residencial Arbore',
    subtitulo: 'Viva em sintonia com a natureza, a poucos passos de tudo',
    status: 'lancamento',
    statusLabel: 'Lançamento',
    hotsite: 'https://www.residencialarbore.com.br/',
    tourVirtual: '',
    bairro: 'Jardim São Paulo',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Parque Domingos Luís, 654 — Jardim São Paulo',
    metragem: '37m² a 58m²',
    dormitorios: '1 e 2 dormitórios',
    suites: 'com ou sem suíte',
    vagas: 'com ou sem vaga',
    destaque: true,
    imagemCapa: '/images/empreendimentos/arbore/img-arbore-fachada.jpg',
    imagemFachada: '/images/empreendimentos/arbore/img-arbore-fachada.webp',
    galeria: [
      '/images/empreendimentos/arbore/img-arbore-fachada.jpg',
      '/images/empreendimentos/arbore/img-arbore-lateral1.jpg',
      '/images/empreendimentos/arbore/img-arbore-lateral2.jpg',
      '/images/empreendimentos/arbore/img-arbore-frontal1.jpg',
      '/images/empreendimentos/arbore/img-arbore-frontal2.jpg',
      '/images/empreendimentos/arbore/img-arbore-frontal3.jpg',
      '/images/empreendimentos/arbore/img-arbore-frontal4.jpg',
      '/images/empreendimentos/arbore/img-arbore-academia.jpg',
      '/images/empreendimentos/arbore/img-arbore-brinquedoteca.jpg',
      '/images/empreendimentos/arbore/img-arbore-coworking.jpg',
      '/images/empreendimentos/arbore/img-arbore-delivery.jpg',
      '/images/empreendimentos/arbore/img-arbore-festas.jpg',
      '/images/empreendimentos/arbore/img-arbore-gourmet.jpg',
      '/images/empreendimentos/arbore/img-arbore-hall.jpg',
      '/images/empreendimentos/arbore/img-arbore-jogos.jpg',
      '/images/empreendimentos/arbore/img-arbore-piscina1.jpg',
      '/images/empreendimentos/arbore/img-arbore-piscina2.jpg',
      '/images/empreendimentos/arbore/img-arbore-piscina3.jpg',
      '/images/empreendimentos/arbore/img-arbore-piscina4.jpg',
      '/images/empreendimentos/arbore/img-arbore-loja1.jpg',
      '/images/empreendimentos/arbore/img-arbore-loja2.jpg',
      '/images/empreendimentos/arbore/img-arbore-loja3.jpg',
      '/images/empreendimentos/arbore/img-arbore-loja4.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Sanitario.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Sala02.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Sala01.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Dormitorio02.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Dormitorio01.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Dormitorio.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Cozinha01.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-Cozinha02.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-3-AreaDeServico.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Suite.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Sacada.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Living02.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Living01.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Dormitorio.jpg',
      '/images/empreendimentos/arbore/img-arbore-apto-1-Cozinha.jpg',
    ],
    descricaoCurta: 'O Residencial Arbore traduz a essência daquilo que permanece: raízes profundas, tradição e crescimento constante. Um conceito que valoriza a solidez, o bem-estar e a conexão com uma vida mais equilibrada.',
    descricaoCompleta: 'O Residencial Arbore traduz a essência daquilo que permanece: raízes profundas, tradição e crescimento constante. Um conceito que valoriza a solidez, o bem-estar e a conexão com uma vida mais equilibrada. Localizado em uma região arborizada e consolidada, o empreendimento combina a tranquilidade de um bairro tradicional com a conveniência de estar próximo a importantes centros comerciais, culturais e gastronômicos. Cada detalhe foi pensado para refletir solidez, qualidade e respeito ao espaço de quem deseja viver com equilíbrio e bem-estar.',
    diferenciais: [
      'Piscina adulto e infantil',
      'Academia',
      'Salão de Festas',
      'Salão de Jogos',
      'Espaço Gourmet',
      'Delivery',
      'Coworking',
      'Sauna',
      'Térreo Comercial',
      'Brinquedoteca'
      
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
      geral: 0,
      fundacao: 0,
      estrutura: 0,
      alvenaria: 0,
      acabamento: 0
    }
  },
  {
    id: 'edificio-mata-atlantica',
    ano: '1992',
    slug: 'edificio-mata-atlantica',
    titulo: 'Edificio Mata Atlântica',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jardim Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Guaratuba, 86',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-res-mata-atlantica.webp',
    imagemFachada: '/images/empreendimentos/img-res-mata-atlantica.webp', 
    galeria: [
      '/images/empreendimentos/img-res-mata-atlantica.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-peninsula-iberico',
    ano: '1996',
    slug: 'edificio-peninsula-iberico',
    titulo: 'Edificio Península e Ibérico',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Gal. Marcondes Salgado Filho, 71 e 81',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-peninsula-iberico.webp',
    imagemFachada: '/images/empreendimentos/img-peninsula-iberico.webp', 
    galeria: [
      '/images/empreendimentos/img-peninsula-iberico.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-tijuca',
    ano: '1996',
    slug: 'edificio-tijuca',
    titulo: 'Edificio Tijuca',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Forte',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Avenida Dr.Mauricio José Cardoso, 543',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-tijuca.webp',
    imagemFachada: '/images/empreendimentos/img-tijuca.webp', 
    galeria: [
      '/images/empreendimentos/img-tijuca.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-santiago',
    ano: '1996',
    slug: 'edificio-santiago',
    titulo: 'Edificio Santiago',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Gal. Marcondes Salgado Filho, 71 e 81',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-santiago.webp',
    imagemFachada: '/images/empreendimentos/img-santiago.webp', 
    galeria: [
      '/images/empreendimentos/img-santiago.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-la-coruna',
    ano: '1998',
    slug: 'edificio-la-coruna',
    titulo: 'Edificio La Coruña',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Tupy',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Guaranis, 154 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-la-coruna.webp',
    imagemFachada: '/images/empreendimentos/img-la-coruna.webp', 
    galeria: [
      '/images/empreendimentos/img-la-coruna.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-los-rosales',
    ano: '1999',
    slug: 'edificio-los-rosales',
    titulo: 'Edificio Los Rosales',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Pero Vaz de Caminha, 69',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-los-rosales.webp',
    imagemFachada: '/images/empreendimentos/img-los-rosales.webp', 
    galeria: [
      '/images/empreendimentos/img-los-rosales.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-barcelona',
    ano: '2000',
    slug: 'edificio-barcelona',
    titulo: 'Edificio Barcelona',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Forte',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Rui Barbosa, 143 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-barcelona.webp',
    imagemFachada: '/images/empreendimentos/img-barcelona.webp', 
    galeria: [
      '/images/empreendimentos/img-barcelona.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-asturias',
    ano: '2001',
    slug: 'edificio-asturias',
    titulo: 'Edificio Asturias',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Ophelia Caccetari Reis, 173',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-asturias.webp',
    imagemFachada: '/images/empreendimentos/img-asturias.webp', 
    galeria: [
      '/images/empreendimentos/img-asturias.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-marbela',
    ano: '2001',
    slug: 'edificio-marbela',
    titulo: 'Edificio Marbela',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Dr. João Sampaio, 197',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-marbela.webp',
    imagemFachada: '/images/empreendimentos/img-marbela.webp', 
    galeria: [
      '/images/empreendimentos/img-marbela.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-apolo',
    ano: '2001',
    slug: 'edificio-apolo',
    titulo: 'Edificio Apolo',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Gonzaga, 32',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-apolo.webp',
    imagemFachada: '/images/empreendimentos/img-apolo.webp', 
    galeria: [
      '/images/empreendimentos/img-apolo.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-leon',
    ano: '2004',
    slug: 'edificio-leon',
    titulo: 'Edificio Leon',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Peru, 210 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-leon.webp',
    imagemFachada: '/images/empreendimentos/img-leon.webp', 
    galeria: [
      '/images/empreendimentos/img-leon.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-gaudi',
    ano: '2006',
    slug: 'edificio-gaudi',
    titulo: 'Edificio gaudi',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Gal. Marcondes Salgado Filho, 212',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-gaudi.webp',
    imagemFachada: '/images/empreendimentos/img-gaudi.webp', 
    galeria: [
      '/images/empreendimentos/img-gaudi.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-valencia',
    ano: '2007',
    slug: 'edificio-valencia',
    titulo: 'Edificio Valencia',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Aviação',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Gal. Marcondes Salgado Filho, 212',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-valencia.webp',
    imagemFachada: '/images/empreendimentos/img-valencia.webp', 
    galeria: [
      '/images/empreendimentos/img-valencia.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-sevilha',
    ano: '2008',
    slug: 'edificio-sevilha',
    titulo: 'Edificio Sevilha',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Boqueirão',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Rui Barbosa, 187',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-sevilha.webp',
    imagemFachada: '/images/empreendimentos/img-sevilha.webp', 
    galeria: [
      '/images/empreendimentos/img-sevilha.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-avila',
    ano: '2009',
    slug: 'edificio-avila',
    titulo: 'Edificio Ávila',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Avenida Pres. Castelo Branco, 3400',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-avila.webp',
    imagemFachada: '/images/empreendimentos/img-avila.webp', 
    galeria: [
      '/images/empreendimentos/img-avila.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-tiwa',
    ano: '2011',
    slug: 'edificio-tiwa',
    titulo: 'Edificio Tiwa',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Forte',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Rui Barbosa, 116',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-tiwa.webp',
    imagemFachada: '/images/empreendimentos/img-tiwa.webp', 
    galeria: [
      '/images/empreendimentos/img-tiwa.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-balboa',
    ano: '2013',
    slug: 'edificio-balboa',
    titulo: 'Edificio Balboa',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Rua Leblon, 493',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-balboa.webp',
    imagemFachada: '/images/empreendimentos/img-balboa.webp', 
    galeria: [
      '/images/empreendimentos/img-balboa.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-atlantika',
    ano: '2017',
    slug: 'edificio-atlantika',
    titulo: 'Edificio Atlantika',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Ruadas Antilhas, 670',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-atlantika.webp',
    imagemFachada: '/images/empreendimentos/img-atlantika.webp', 
    galeria: [
      '/images/empreendimentos/img-atlantika.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-london',
    ano: '2006',
    slug: 'edificio-london',
    titulo: 'Edificio london',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Jd. Guilhermina',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Ruadas Antilhas, 670',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-london.webp',
    imagemFachada: '/images/empreendimentos/img-london.webp', 
    galeria: [
      '/images/empreendimentos/img-london.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-liverpool',
    ano: '2009',
    slug: 'edificio-liverpool',
    titulo: 'Edificio Liverpool',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Mazzei',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Sta. Leocádia, 79',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-liverpool.webp',
    imagemFachada: '/images/empreendimentos/img-liverpool.webp', 
    galeria: [
      '/images/empreendimentos/img-liverpool.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-wembley',
    ano: '2012',
    slug: 'edificio-wembley',
    titulo: 'Edificio Wembley',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Dom Pedro II',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Dona Gabriela, 291 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-wembley.webp',
    imagemFachada: '/images/empreendimentos/img-wembley.webp', 
    galeria: [
      '/images/empreendimentos/img-wembley.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-capricho',
    ano: '2012',
    slug: 'edificio-capricho',
    titulo: 'Edificio Capricho',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Nivi',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Capricho, 1046',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-capricho.webp',
    imagemFachada: '/images/empreendimentos/img-capricho.webp', 
    galeria: [
      '/images/empreendimentos/img-capricho.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-vista-inglesa',
    ano: '2014',
    slug: 'edificio-vista-inglesa',
    titulo: 'Edificio Vista Inglesa',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Dom Pedro II',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Dona Gabriela, 175 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-vista-inglesa.webp',
    imagemFachada: '/images/empreendimentos/img-vista-inglesa.webp', 
    galeria: [
      '/images/empreendimentos/img-vista-inglesa.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-vista-vicenza',
    ano: '2017',
    slug: 'edificio-vista-vicenza',
    titulo: 'Edificio Vista Vicenza',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Dom Pedro II',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua Vicenza, 136',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-vista-vicenza.webp',
    imagemFachada: '/images/empreendimentos/img-vista-vicenza.webp', 
    galeria: [
      '/images/empreendimentos/img-vista-vicenza.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-manchester',
    ano: '2020',
    slug: 'edificio-manchester',
    titulo: 'Edificio Manchester',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Vila Aurora',
    cidade: 'São Paulo',
    estado: 'SP',
    endereco: 'Rua João de Laet, 316 ',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-manchester.webp',
    imagemFachada: '/images/empreendimentos/img-vmanchester.webp', 
    galeria: [
      '/images/empreendimentos/img-manchester.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-mallet-garden',
    ano: '2021',
    slug: 'edificio-mallet-garden',
    titulo: 'Edificio Mallet Garden',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Canto do Forte',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Avenida Marechal Mallet, 1.457',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-mallet-garden.webp',
    imagemFachada: '/images/empreendimentos/img-vmallet-garden.webp', 
    galeria: [
      '/images/empreendimentos/img-mallet-garden.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
    id: 'edificio-jardim-sao-paulo',
    ano: '2023',
    slug: 'edificio-jardim-sao-paulo',
    titulo: 'Residencial Jardim São Paulo',
    subtitulo: '',
    status: 'entregue',
    statusLabel: 'Entregue',
    hotsite: '',
    tourVirtual: '',
    bairro: 'Canto do Forte',
    cidade: 'Praia Grande',
    estado: 'SP',
    endereco: 'Avenida Marechal Mallet, 1.457',
    metragem: '',
    dormitorios: '',
    suites: '',
    vagas: '',
    destaque: false,
    imagemCapa: '/images/empreendimentos/img-jardim-sao-paulo.webp',
    imagemFachada: '/images/empreendimentos/img-vjardim-sao-paulo.webp', 
    galeria: [
      '/images/empreendimentos/img-jardim-sao-paulo.webp'
    ],
    descricaoCurta: '',
    descricaoCompleta: '',
    diferenciais: [
      
    ],
    plantas: [
      {
        titulo: '',
        metragem: '',
        descricao: ''
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
  anosCarreira: String(new Date().getFullYear() - 1991),
  aptosEntregues: '1.343',
  obrasEntregues: '31',
  satisfacao: '99%'
};

export const CONTATO_LZBA = {
  telefone: '(11) 2691-9059',
  whatsapp: '(11) 99961-8125',
  whatsappLink: 'https://wa.me/5511919468027?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+os+empreendimentos+da+LZBA',
  email: 'atendimento@lzba.com.br',
  endereco: 'R. Augusto Tolle, 767 - Santana, São Paulo',
  enderecoWeb: 'https://maps.app.goo.gl/YnD1X72CRT26GNB98',
  horario: 'Segunda a Sexta, das 9h às 18h'
};
