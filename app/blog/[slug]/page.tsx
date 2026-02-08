import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPost, postSlugs } from '@/lib/posts';
import { siteConfig } from '@/lib/site';

export async function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado'
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [post.cover]
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="section-pad mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-3xl text-bone">Artigo não encontrado</h1>
        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-bone"
        >
          Voltar ao blog
        </Link>
      </div>
    );
  }

  return (
    <article className="section-pad mx-auto max-w-3xl space-y-8">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-copper/80">Artigo estratégico</p>
        <h1 className="font-heading text-4xl text-bone">{post.title}</h1>
        <p className="text-sm text-white/70">{post.description}</p>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
          <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
          <span>{post.readTime} leitura</span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image src={post.cover} alt={post.title} width={960} height={520} className="w-full" />
        </div>
      </header>

      <div className="space-y-6">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-heading text-2xl text-bone">{section.heading}</h2>
            <p className="text-sm text-white/70 md:text-base">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 text-center">
        <h3 className="font-heading text-2xl text-bone">
          Quer aplicar essas estratégias no seu negócio?
        </h3>
        <p className="mt-3 text-sm text-white/70">
          Agende uma consultoria e receba um plano personalizado para elevar margem e experiência do cliente.
        </p>
        <Link
          href="/contato"
          className="mt-5 inline-flex rounded-full bg-copper px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite"
        >
          Agendar consultoria
        </Link>
      </div>
    </article>
  );
}