import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Consultoria gastronômica completa: cardápios, precificação, POPs, treinamento e planejamento para negócios.'
};

export default function ServicosPage() {
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

      <div className="fixed bottom-6 left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 rounded-full border border-copper/50 bg-graphite/80 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-bone shadow-glow backdrop-blur">
        <Link href="/contato" className="focus-ring inline-flex items-center justify-center">
          Solicitar orçamento
        </Link>
      </div>
    </div>
  );
}