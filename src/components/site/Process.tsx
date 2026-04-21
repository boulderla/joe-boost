const steps = [
  { n: "01", title: "Call or Request Quote", desc: "Tell us about your project." },
  { n: "02", title: "Project Review", desc: "We assess scope and details." },
  { n: "03", title: "Fast Estimate", desc: "Clear pricing, no surprises." },
  { n: "04", title: "Start Work", desc: "Quality build, on schedule." },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Simple, fast, transparent.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 border border-background/10 rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal bg-foreground p-8 lg:p-10 hover:bg-background/5 transition-colors min-h-[220px] flex flex-col justify-between"
            >
              <span className="font-display text-5xl font-bold text-brand">{s.n}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-background mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-background/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
