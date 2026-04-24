import { Home, Building2, Check } from "lucide-react";

const residential = [
  "Kitchen & Bathroom Remodels",
  "Room Additions & ADUs",
  "Painting",
];

const commercial = [
  "Tenant Improvements",
  "Office Build-Outs",
  "Maintenance & Renovations",
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand mb-4">
            What We Build
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Superior Craftsmanship, <br />
            Commercial or Residential
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            icon={Home}
            tag="Residential"
            title="Built for the way you live."
            items={residential}
          />
          <ServiceCard
            icon={Building2}
            tag="Commercial"
            title="Built for the way you work."
            items={commercial}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  tag,
  title,
  items,
}: {
  icon: typeof Home;
  tag: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl bg-background border border-border p-8 lg:p-12 transition-all hover:shadow-elevated hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {tag}
        </span>
      </div>

      <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-balance mb-10">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-base text-foreground">
            <Check className="h-5 w-5 text-brand shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors" />
    </div>
  );
}
