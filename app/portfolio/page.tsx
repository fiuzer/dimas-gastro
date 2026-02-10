import Image from 'next/image';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { cases } from '@/lib/cases';

export const metadata: Metadata = {
  title: 'Portfólio e casos de sucesso',
  description:
    'Resultados reais em consultoria gastronômica: antes e depois, desafios e impacto operacional.'
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          level="h1"
          eyebrow="Portfólio"
          title="Casos de sucesso com resultados mensuráveis"
          description="Projetos entregues com foco em performance, padronização e experiência premium."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="glass flex flex-col rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={480}
                height={320}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-52 w-full object-cover"
              />
              <div className="flex h-full flex-col gap-4 p-6">
                <h3 className="font-heading text-xl text-bone">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Antes e depois</p>
                <p className="text-sm text-white/70">
                  <span className="text-xs uppercase tracking-[0.2em] text-copper/70">Desafio</span>
                  <br />
                  {item.challenge}
                </p>
                <p className="text-sm text-white/70">
                  <span className="text-xs uppercase tracking-[0.2em] text-copper/70">Resultado</span>
                  <br />
                  {item.result}
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-copper/70">
                  {item.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-copper/30 px-3 py-1">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
