'use client';

import { Icon } from '@/components/Icon';
import { siteConfig } from '@/lib/site';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-xl text-bone" onClick={() => setIsOpen(false)}>
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === '/blog' ? pathname.startsWith('/blog') : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-copper ${
                  isActive ? 'text-copper' : 'text-white/70'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className="focus-ring rounded-full bg-copper px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-graphite transition hover:bg-gold"
          >
            Agendar consultoria
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:bg-white/5 hover:text-copper md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menu"
        >
          <Icon name={isOpen ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-6">
            {links.map((link) => {
              const isActive =
                link.href === '/blog' ? pathname.startsWith('/blog') : pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-white/5 py-4 text-sm font-medium uppercase tracking-[0.2em] transition hover:text-copper ${
                    isActive ? 'text-copper' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-6">
              <Link
                href="/contato"
                className="flex w-full justify-center rounded-full bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite transition hover:bg-gold"
              >
                Agendar Consultoria
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
