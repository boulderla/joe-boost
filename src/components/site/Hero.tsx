import { Phone, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-construction.jpg";

const PHONE_HREF = "tel:+16612870001";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Modern luxury home built by Boulder Builders"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-24 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 mb-8 reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Licensed & Insured Contractor
          </div>

          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] text-balance drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Commercial & Residential <span className="text-brand">Construction</span> Done Right.
          </h1>

          <p className="reveal mt-8 text-lg sm:text-xl text-white/90 max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Remodels. Additions. Painting. Built to last.
          </p>

          <div className="reveal mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-brand-foreground hover:bg-brand/90 transition-all hover:scale-[1.02] shadow-elevated"
            >
              <Phone className="h-5 w-5" />
              Call Now (661) 287-0001
            </a>
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/5 backdrop-blur px-8 py-4 text-base font-semibold text-background hover:bg-background hover:text-foreground transition-all"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
