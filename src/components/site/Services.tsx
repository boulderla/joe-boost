import residentialImg from "@/assets/bb_residential.png";
import commercialImg from "@/assets/bb_commercial.png";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          <ServiceImageCard
            src={residentialImg}
            alt="Residential construction — kitchen and bathroom remodels, room additions, and painting"
          />
          <ServiceImageCard
            src={commercialImg}
            alt="Commercial construction — tenant improvements, restaurant build-outs, maintenance and renovations"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="reveal group relative overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all hover:shadow-elevated hover:-translate-y-1">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block w-full h-auto aspect-[3/4] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </div>
  );
}
