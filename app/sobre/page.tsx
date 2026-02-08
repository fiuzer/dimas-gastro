import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre o consultor',
  description:
    'Conheça a trajetória, especializações e resultados do consultor gastronômico responsável pela Dimas Consultoria.'
};

export default function SobrePage() {
  return (
    <div>
      <section className="section-pad mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-copper/30 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
              alt="Consultor gastronômico em cozinha profissional"
              width={520}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="space-y-6">
          <SectionHeading
            level="h1"
            eyebrow="Sobre o consultor"
            title="Experiência prática, visão estratégica e paixão por excelência"
            description="Especialista em elevar negócios gastronômicos, com atuação em operações premium de São Paulo e capitais brasileiras."
          />
          <p className="text-sm text-white/70 md:text-base">
            Com mais de 12 anos no setor, {siteConfig.name} construiu uma trajetória sólida liderando projetos de
            reposicionamento, engenharia de cardápio, treinamento de equipes e estruturação de operações completas. A
            consultoria combina método, criatividade e foco em resultado para transformar restaurantes em referências de
            mercado.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Anos de experiência', value: '12+' },
              { label: 'Especializações', value: 'Gastronomia & Gestão' },
              { label: 'Resultados alcançados', value: '+35% margem' }
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4 text-center">
                <p className="font-heading text-2xl text-bone">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}