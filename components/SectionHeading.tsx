type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  level = 'h2'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left';
  const HeadingTag = level;

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-copper/80">
          <span className="h-px w-10 bg-copper/40" />
          {eyebrow}
        </div>
      ) : null}
      <HeadingTag className="font-heading text-3xl leading-tight text-bone md:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="max-w-2xl text-sm text-white/70 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
