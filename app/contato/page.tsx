import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Solicite uma proposta de consultoria gastronômica e receba um plano personalizado para o seu negócio.'
};

export default function ContatoPage() {
  return (
    <div>
      <section className="section-pad mx-auto max-w-5xl">
        <SectionHeading
          level="h1"
          eyebrow="Contato"
          title="Vamos transformar sua operação gastronômica"
          description="Preencha o formulário e receba um diagnóstico inicial."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form
            className="glass space-y-4 rounded-2xl p-6"
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                Nome
                <input
                  name="nome"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white focus-ring"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                WhatsApp
                <input
                  name="whatsapp"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white focus-ring"
                />
              </label>
            </div>
            <label className="text-xs uppercase tracking-[0.2em] text-white/60">
              E-mail
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white focus-ring"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-white/60">
              Tipo de negócio
              <select
                name="tipo"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white focus-ring"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Restaurante</option>
                <option>Bar</option>
                <option>Café</option>
                <option>Hotel</option>
                <option>Delivery</option>
                <option>Outro</option>
              </select>
            </label>
            <label className="text-xs uppercase tracking-[0.2em] text-white/60">
              Mensagem
              <textarea
                name="mensagem"
                rows={5}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white focus-ring"
              />
            </label>
            <button
              type="submit"
              className="focus-ring w-full rounded-full bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-graphite transition hover:bg-gold"
            >
              Enviar solicitação
            </button>
          </form>

          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-copper/80">Contato direto</p>
              <p className="mt-2 text-sm text-white/70">WhatsApp imediato e agenda online para reuniões.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="focus-ring rounded-full border border-copper/40 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-bone"
                >
                  Falar no WhatsApp
                </Link>
                <Link
                  href="/contato"
                  className="focus-ring rounded-full bg-white/10 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-bone"
                >
                  Agendar reunião online
                </Link>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 text-sm text-white/70">
              <p className="font-heading text-lg text-bone">Atendimento premium</p>
              <p className="mt-2">
                Respostas em até 24h úteis. Atendimento personalizado para restaurantes, bares, hotéis e operações de alta
                gastronomia.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">{siteConfig.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}