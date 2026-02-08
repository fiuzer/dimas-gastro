import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}`}
      className="focus-ring fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-copper/50 bg-copper/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-bone shadow-glow backdrop-blur transition hover:bg-copper/40"
      aria-label="Falar no WhatsApp"
    >
      WhatsApp
    </Link>
  );
}