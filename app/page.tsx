import { Icon } from '@/components/Icon';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { helpTopics, services } from '@/lib/services';
import { clients, testimonials } from '@/lib/testimonials';
import Image from 'next/image';
import Link from 'next/link';

const segments = [
  'Restaurantes autorais',
  'Bares premium',
  'Hotéis & resorts',
  'Cafés boutique',
  'Operações delivery',
  'Grupos gastronômicos'
];

export default function HomePage() {
  return (
    <div>
      <section className="hero-grid noise relative overflow-hidden">
        <div className="section-pad mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-copper/80">
              Consultoria Gastronômica Premium
            </div>
            <h1 className="font-heading text-4xl leading-tight text-bone md:text-6xl">
              Transformando experiências gastronômicas em negócios de alta margem.
            </h1>
            <p className="max-w-xl text-base text-white/70 md:text-lg">
              Estratégia, execução e encantamento para restaurantes, bares, hotéis e empreendedores que querem liderar o
              mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="focus-ring rounded-full bg-copper px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-graphite transition hover:bg-gold"
              >
                Agendar consultoria
              </Link>
              <Link
                href="/servicos"
                className="focus-ring rounded-full border border-white/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-bone transition hover:border-copper"
              >
                Ver serviços
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '+12 anos', label: 'Em operações premium' },
                { value: '+80 projetos', label: 'Resultados comprovados' },
                { value: '+35% margem', label: 'Média nos clientes' }
              ].map((item) => (
                <div key={item.value} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-heading text-2xl text-bone">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-copper/40 via-transparent to-transparent blur-3xl" />
            <div className="relative grid gap-4">
              <div className="glass relative overflow-hidden rounded-[28px] p-3">
                <div className="absolute right-6 top-6 rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white/60">
                  São Paulo
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Consultor gastronômico em ambiente profissional"
                  width={520}
                  height={680}
                  className="h-full w-full rounded-[22px] object-cover"
                  priority
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Reestruturação completa', 'Padrão operacional', 'Experiência premium', 'Posicionamento'].map((item) => (
                  <div
                    key={item}
                    className="glass rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black/20 py-6">
        <div className="mx-auto flex max-w-6xl overflow-hidden px-6">
          <div className="marquee flex items-center gap-8 text-xs uppercase tracking-[0.4em] text-white/60">
            {[...segments, ...segments].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-center">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            eyebrow="Prova social"
            title="Resultados que constroem autoridade"
            description="Depoimentos reais de operações que elevaram margem, padronização e experiência do cliente."
          />
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
            <span className="h-px w-10 bg-white/20" />
            Cases selecionados
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-2xl p-6">
              <p className="text-sm text-white/80">“{item.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-copper/80">
                {item.name}
              </p>
              <p className="text-xs text-white/50">{item.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40">
          {clients.map((client) => (
            <span key={client} className="flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-center">
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Como posso te ajudar"
          title="Consultoria completa para cada etapa do seu negócio"
          description="Da engenharia de cardápio até a operação diária, cada frente é trabalhada com estratégia e precisão."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helpTopics.map((topic) => (
            <div
              key={topic.title}
              className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-white/80"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-copper/20 text-copper">
                <Icon name={topic.icon as Parameters<typeof Icon>[0]['name']} className="h-5 w-5" />
              </span>
              <span>{topic.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Método exclusivo"
              title="Uma consultoria em três atos"
              description="Diagnóstico profundo, plano cirúrgico e execução acompanhada para virar a chave do negócio."
            />
            <div className="space-y-4 text-sm text-white/70">
              {[
                {
                  title: 'Ato 1 · Diagnóstico e oportunidades',
                  body: 'Levantamento de dados, fluxo de cozinha, mix de vendas e percepção do cliente.'
                },
                {
                  title: 'Ato 2 · Estratégia e reposicionamento',
                  body: 'Reengenharia de cardápio, precificação e desenho da experiência.'
                },
                {
                  title: 'Ato 3 · Implementação e padrão',
                  body: 'Treinamento, POPs e acompanhamento de indicadores-chave.'
                }
              ].map((item) => (
                <div key={item.title} className="glass rounded-2xl p-5">
                  <p className="font-heading text-lg text-bone">{item.title}</p>
                  <p className="mt-2 text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
            <div className="glass flex flex-col justify-between rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-copper/80">Conversão</p>
              <p className="mt-3 text-lg text-bone">
                Receba um plano com metas, indicadores e cronograma de ganhos rápidos.
              </p>
              <Link
                href="/contato"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-copper"
              >
                Agendar diagnóstico
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Serviços estratégicos"
          title="Soluções que aumentam performance e reputação"
          description="Cada entrega é pensada para gerar resultado mensurável e posicionamento premium."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/servicos"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-copper/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-bone transition hover:bg-copper/20"
          >
            Conheça todos os serviços
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}