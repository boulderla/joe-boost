import { Phone } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="quote" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 lg:px-20 lg:py-32 text-center">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-background text-balance max-w-3xl mx-auto">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto">
              One call. Free quote. Quality construction you can count on.
            </p>
            <div className="mt-12">
              <a
                href="tel:+16612870001"
                className="group inline-flex items-center gap-3 rounded-full bg-brand px-10 py-5 text-lg font-bold text-brand-foreground hover:bg-brand/90 transition-all hover:scale-[1.03] shadow-elevated"
              >
                <Phone className="h-6 w-6" />
                Call Now (661) 287-0001
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
