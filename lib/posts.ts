export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
  readTime: string;
  sections: { heading: string; body: string }[];
  keywords: string[];
};

export const formatPostDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('pt-BR', {
    timeZone: 'UTC'
  });

const posts: Post[] = [
  {
    slug: 'como-melhorar-cardapio-restaurante',
    title: 'Como melhorar o cardápio do seu restaurante',
    description:
      'Passo a passo para criar um cardápio rentável, claro e alinhado ao posicionamento da casa.',
    date: '2026-01-20',
    cover: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min',
    keywords: ['cardápio', 'engenharia de menu', 'rentabilidade'],
    sections: [
      {
        heading: 'Diagnóstico de rentabilidade',
        body:
          'Mapeie os pratos mais vendidos e a margem de contribuição. Foque no que sustenta o caixa e reveja itens com baixa saída.'
      },
      {
        heading: 'Arquitetura visual do menu',
        body:
          'Organize os itens em blocos lógicos, destaque carros-chefe e evite excesso de opções que geram indecisão.'
      },
      {
        heading: 'Narrativa e experiência',
        body:
          'Traduza o conceito do restaurante no texto e nas descrições. O cardápio é parte da experiência, não apenas uma lista.'
      }
    ]
  },
  {
    slug: 'erros-comuns-gestao-de-cozinha',
    title: 'Erros comuns na gestão de cozinha',
    description:
      'Os principais pontos que travam produtividade e como corrigir antes que impactem o cliente.',
    date: '2025-12-05',
    cover: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min',
    keywords: ['gestão de cozinha', 'produtividade', 'processos'],
    sections: [
      {
        heading: 'Falta de processos claros',
        body:
          'Sem POPs definidos, cada turno trabalha de um jeito. A padronização reduz erros e dá previsibilidade.'
      },
      {
        heading: 'Compras sem planejamento',
        body:
          'Planeje compras com base no cardápio e na previsão de vendas. Estoque parado é custo invisível.'
      },
      {
        heading: 'Treinamento insuficiente',
        body:
          'Cozinhas performam melhor quando a equipe domina técnicas, porções e tempos de serviço.'
      }
    ]
  },
  {
    slug: 'como-precificar-pratos-corretamente',
    title: 'Como precificar pratos corretamente',
    description:
      'Aprenda a calcular custos e construir preços que sustentam a operação sem perder competitividade.',
    date: '2025-11-10',
    cover: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min',
    keywords: ['precificação', 'CMV', 'fichas técnicas'],
    sections: [
      {
        heading: 'Construa fichas técnicas completas',
        body:
          'Registre ingredientes, gramaturas e custos atualizados. Sem ficha técnica, não existe margem controlada.'
      },
      {
        heading: 'Defina CMV alvo',
        body:
          'Estabeleça uma meta realista de CMV. Em geral, operações saudáveis trabalham com faixa entre 28% e 35%.'
      },
      {
        heading: 'Valide com o posicionamento',
        body:
          'Preço também comunica valor. Ajuste a percepção do cliente com apresentação, serviço e storytelling.'
      }
    ]
  },
  {
    slug: 'tendencias-gastronomicas-2025',
    title: 'Tendências gastronômicas para 2025',
    description:
      'Movimentos de mercado e oportunidades para atrair novos públicos e fidelizar clientes.',
    date: '2025-10-18',
    cover: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min',
    keywords: ['tendências', 'mercado', 'inovação'],
    sections: [
      {
        heading: 'Experiências imersivas',
        body:
          'Clientes buscam experiências sensoriais completas. Invista em ambientação e serviço coreografado.'
      },
      {
        heading: 'Menus autorais e locais',
        body:
          'Produtos regionais e histórias autênticas fortalecem diferenciação e reduzem custos logísticos.'
      },
      {
        heading: 'Sustentabilidade prática',
        body:
          'Aproveitamento integral, redução de desperdício e fornecedores responsáveis são decisivos.'
      }
    ]
  },
  {
    slug: 'como-reduzir-custos-sem-perder-qualidade',
    title: 'Como reduzir custos no restaurante sem perder qualidade',
    description:
      'Estratégias práticas para proteger margem e manter a experiência premium.',
    date: '2025-09-22',
    cover: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min',
    keywords: ['custos', 'eficiência', 'margem'],
    sections: [
      {
        heading: 'Controle de perdas',
        body:
          'Meça desperdício e estabeleça indicadores diários. Pequenas perdas somadas são grandes prejuízos.'
      },
      {
        heading: 'Simplificação do cardápio',
        body:
          'Menos itens significa menos estoque e mais velocidade. Priorize o que realmente vende.'
      },
      {
        heading: 'Negociação com fornecedores',
        body:
          'Revisite contratos e crie parcerias de longo prazo com fornecedores estratégicos.'
      }
    ]
  }
];

export const allPosts = () => posts;

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export const postSlugs = () => posts.map((post) => post.slug);
