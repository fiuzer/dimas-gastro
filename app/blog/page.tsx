import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { allPosts, formatPostDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Conteúdos estratégicos de gestão, cardápio, precificação e tendências gastronômicas.'
};

export default function BlogPage() {
  const posts = allPosts();

  return (
    <div>
      <section className="section-pad mx-auto max-w-6xl">
        <SectionHeading
          level="h1"
          eyebrow="Blog"
          title="Conteúdos prontos para gerar autoridade"
          description="Artigos com SEO estruturado para atrair gestores e empreendedores do setor gastronômico."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="glass overflow-hidden rounded-2xl">
              <Image
                src={post.cover}
                alt={post.title}
                width={640}
                height={420}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-52 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                  <span>{formatPostDate(post.date)}</span>
                  <span>{post.readTime} leitura</span>
                </div>
                <h2 className="font-heading text-2xl text-bone">{post.title}</h2>
                <p className="text-sm text-white/70">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="focus-ring inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper"
                >
                  Ler artigo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
