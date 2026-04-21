import kitchen from "@/assets/project-kitchen.jpg";
import bathroom from "@/assets/project-bathroom.jpg";
import commercial from "@/assets/project-commercial.jpg";
import addition from "@/assets/project-addition.jpg";
import painting from "@/assets/project-painting.jpg";
import adu from "@/assets/project-adu.jpg";

const projects = [
  { src: kitchen, alt: "Modern kitchen remodel", label: "Kitchen Remodel", span: "lg:col-span-2 lg:row-span-2" },
  { src: bathroom, alt: "Luxury bathroom remodel", label: "Bathroom Remodel", span: "" },
  { src: commercial, alt: "Commercial office build-out", label: "Office Build-Out", span: "" },
  { src: addition, alt: "Modern home addition", label: "Home Addition", span: "lg:col-span-2" },
  { src: painting, alt: "Interior painting project", label: "Interior Painting", span: "" },
  { src: adu, alt: "Backyard ADU", label: "ADU Build", span: "" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand mb-4">
            Recent Projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Quality work. Clean finishes. Built to last.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[260px] lg:auto-rows-[280px]">
          {projects.map((p) => (
            <figure
              key={p.label}
              className={`reveal group relative overflow-hidden rounded-2xl bg-muted ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block rounded-full bg-background/95 backdrop-blur px-4 py-1.5 text-xs font-semibold text-foreground tracking-tight">
                  {p.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
