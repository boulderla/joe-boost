import { Play } from "lucide-react";
import thumb from "@/assets/video-thumbnail.jpg";

export function IntroVideo() {
  return (
    <section id="intro-video" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-12 reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Watch Our Story
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] text-balance">
            See how we <span className="text-brand">build it right.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A quick look inside Boulder Builders — our crew, our craft, our commitment.
          </p>
        </div>

        <button
          type="button"
          aria-label="Play company intro video"
          className="reveal group relative block w-full overflow-hidden rounded-3xl shadow-elevated focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/50"
        >
          <img
            src={thumb}
            alt="Boulder Builders company intro video thumbnail"
            className="h-full w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-brand/40 animate-ping" />
              <span className="relative inline-flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-elevated transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1" />
              </span>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4 text-left">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                Company Intro
              </p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-semibold text-white">
                Meet Boulder Builders
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-xs font-medium text-white border border-white/20">
              2:14
            </span>
          </div>
        </button>
      </div>
    </section>
  );
}
