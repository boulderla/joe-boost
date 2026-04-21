import { useState } from "react";
import { Play, X } from "lucide-react";
import thumb from "@/assets/video-thumbnail.jpg";

const YOUTUBE_ID = "28f9BDfd_ho";

export function IntroVideo() {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(true)}
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
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Company intro video"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Boulder Builders Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
