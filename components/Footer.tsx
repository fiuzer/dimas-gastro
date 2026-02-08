import Link from 'next/link';
import { navigation, siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-heading text-lg text-bone">{siteConfig.name}</p>
          <p className="text-sm text-white/70">{siteConfig.description}</p>
          <div className="text-sm text-white/70">
            <p>{siteConfig.address.city + ' · ' + siteConfig.address.region}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-bone">Navegação</p>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-bone">Contato rápido</p>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="block transition hover:text-white"
          >
            WhatsApp imediato
          </Link>
          <Link href="/contato" className="block transition hover:text-white">
            Formulário de contato
          </Link>
          <p className="text-xs text-white/40">© 2026. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}