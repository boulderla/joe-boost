import { Phone } from "lucide-react";
import joe from "@/assets/joe-founder.jpeg";

const PHONE = "(661) 287-0001";
const PHONE_HREF = "tel:+16612870001";

export function Founder() {
  return (
    <section id="founder" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-brand/10 rounded-3xl -z-10" />
            <img
              src={joe}
              alt="Joe — Founder of Boulder Builders"
              className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-elevated"
              width={760}
              height={1280}
            />
          </div>

          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Meet the Founder
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] text-balance">
              Built on craft. <span className="text-brand">Run by Joe.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Boulder Builders is owner-operated. When you call, you talk to Joe — not a call
              center. Every project gets hands-on attention from quote to final walkthrough.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Licensed, insured, and accountable. The work is done right because Joe's name
              is on it.
            </p>

            <div className="mt-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-card"
              >
                <Phone className="h-5 w-5" />
                Talk to Joe — {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
