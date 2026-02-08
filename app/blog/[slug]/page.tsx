import { getPost, postSlugs } from '@/lib/posts';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Gera os parâmetros estáticos para todas as postagens (SSG)
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = postSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Define o tipo das props, onde params é uma Promise (Next.js 15)
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Gera os metadados da página (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

// Componente da página do post
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Cabeçalho do Post */}
        <div className="mb-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-copper">
            {post.readTime} de leitura
          </div>
          <h1 className="font-heading text-3xl text-bone md:text-5xl">{post.title}</h1>
          <p className="text-lg text-white/60">{post.description}</p>
        </div>

        {/* Imagem de Capa */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Conteúdo do Post */}
        <div className="space-y-10">
          {post.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="font-heading text-2xl text-bone">{section.heading}</h2>
              <p className="text-white/80 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Rodapé do Post (Keywords) */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="text-xs text-white/40 uppercase tracking-wider">
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}