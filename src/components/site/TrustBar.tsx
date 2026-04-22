import { ShieldCheck, MapPin, Hammer } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Serving the Local Area" },
  { icon: Hammer, label: "Quality Workmanship" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 reveal">
            <Icon className="h-5 w-5 text-brand shrink-0" />
            <span className="text-sm font-semibold text-foreground tracking-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
