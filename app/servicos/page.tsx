import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { faqs } from '@/lib/faq';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Consultoria gastronômica completa: cardápios, precificação, POPs, treinamento e planejamento para negócios.'
};

export default function ServicosPage() {
  const deliverables = [
    'Diagnóstico completo com mapa de oportunidades e quick wins.',
    'Plano de ação com metas, indicadores e cronograma.',
    'Reengenharia de cardápio com foco em rentabilidade.',
    'Fichas técnicas e estrutura de CMV para controle contínuo.',
    'Padronização de processos e POPs críticos.',
    'Treinamento de equipe e acompanhamento da execução.'
  ];

  return (
    <div>
      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          level="h1"
          eyebrow="Serviços"
          title="Estratégia, operação e experiência de marca"
          description="Cada serviço é desenhado para gerar crescimento sustentável, padrão elevado e posicionamento premium."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Entregáveis"
          title="O que você recebe ao contratar"
          description="Tudo o que é necessário para transformar resultados em rotina, com foco em margem e experiência."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {deliverables.map((item) => (
            <div key={item} className="glass flex items-start gap-3 rounded-2xl p-5 text-sm text-white/80">
              <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-copper/20 text-copper">
                <Icon name="Check" className="h-4 w-4" />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que você precisa saber"
          description="Respostas rápidas para acelerar a tomada de decisão."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass rounded-2xl p-6">
              <p className="font-heading text-lg text-bone">{faq.question}</p>
              <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-6 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 rounded-full border border-copper/50 bg-graphite/80 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-bone shadow-glow backdrop-blur">
        <Link href="/contato" className="focus-ring inline-flex items-center justify-center">
          Agendar consultoria
        </Link>
      </div>
    </div>
  );
}
