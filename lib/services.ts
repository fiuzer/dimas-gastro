import { IconName } from '@/components/Icon';

export const services: {
  title: string;
  description: string;
  benefit: string;
  icon: IconName;
}[] = [
  {
    title: 'Consultoria para restaurantes',
    description:
      'Diagnóstico completo do negócio, definição de metas e plano de ação para elevar o desempenho financeiro.',
    benefit: 'Aumente margem e ticket médio com decisões orientadas por dados.',
    icon: 'ChefHat'
  },
  {
    title: 'Otimização de cardápios',
    description:
      'Engenharia de cardápio, análise de rentabilidade e criação de narrativas gastronômicas irresistíveis.',
    benefit: 'Cardápio enxuto, vendável e alinhado ao posicionamento do restaurante.',
    icon: 'Menu'
  },
  {
    title: 'Planejamento para novos negócios',
    description:
      'Do conceito ao layout operacional, definindo proposta de valor, mix de produtos e processos.',
    benefit: 'Acelere a abertura com segurança e diferenciação.',
    icon: 'Compass'
  },
  {
    title: 'Treinamento de equipe',
    description:
      'Capacitação de cozinha e atendimento com foco em padrão, produtividade e hospitalidade.',
    benefit: 'Equipe alinhada, motivada e orientada a resultados.',
    icon: 'Users'
  },
  {
    title: 'Implementação de POPs',
    description:
      'Mapeamento e documentação dos processos críticos para garantir consistência.',
    benefit: 'Controle operacional e qualidade replicável.',
    icon: 'ClipboardList'
  },
  {
    title: 'Precificação e controle de custos',
    description:
      'Fichas técnicas precisas, controle de CMV e estratégias para proteger a lucratividade.',
    benefit: 'Mais previsibilidade e margem saudável.',
    icon: 'Calculator'
  },
  {
    title: 'Experiência do cliente',
    description:
      'Criação de jornadas sensoriais e diferenciação da marca no ponto de venda.',
    benefit: 'Clientes encantados e promotores da marca.',
    icon: 'Sparkles'
  }
];

export const helpTopics: { title: string; icon: IconName }[] = [
  { title: 'Desenvolvimento de Cardápio', icon: 'Menu' },
  { title: 'Estruturação de Cozinha', icon: 'Utensils' },
  { title: 'Treinamento de Equipe', icon: 'Users' },
  { title: 'Gestão de Custos e Fichas Técnicas', icon: 'Calculator' },
  { title: 'Padrão Operacional (POP)', icon: 'ClipboardCheck' },
  { title: 'Experiência do Cliente', icon: 'Sparkles' }
];