import { Icon } from '@/components/Icon';

type ServiceCardProps = {
  title: string;
  description: string;
  benefit?: string;
  icon: Parameters<typeof Icon>[0]['name'];
};

export function ServiceCard({ title, description, benefit, icon }: ServiceCardProps) {
  return (
    <div className="group glass flex h-full flex-col gap-4 rounded-2xl p-6 transition hover:-translate-y-1 hover:border-copper/40">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/20 text-copper transition group-hover:bg-copper group-hover:text-graphite">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-xl text-bone">{title}</h3>
      </div>
      <p className="text-sm text-white/70">{description}</p>
      {benefit ? (
        <div className="mt-auto flex items-start gap-2 text-sm text-white/80">
          <Icon name="Check" className="mt-0.5 h-4 w-4 text-copper" />
          <span>{benefit}</span>
        </div>
      ) : null}
    </div>
  );
}
