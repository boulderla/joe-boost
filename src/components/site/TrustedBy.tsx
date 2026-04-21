const brands = [
  "Westbrook Group",
  "Northstar Realty",
  "Halcyon Hotels",
  "Vertex Capital",
  "Meridian Co.",
  "Cobalt & Stone",
  "Aurora Studios",
  "Ironwood Dev",
];

export function TrustedBy() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by Leading Brands
        </p>

        <div className="mt-10 overflow-hidden reveal">
          <div className="marquee-track flex gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex items-center justify-center min-w-[180px] opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <span className="font-display text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
