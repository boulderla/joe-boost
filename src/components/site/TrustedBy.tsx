import baskinRobbins from "@/assets/brands/baskin-robbins.png";
import makenna from "@/assets/brands/makenna.png";
import mcdonalds from "@/assets/brands/mcdonalds.png";
import petco from "@/assets/brands/petco.png";
import wellsFargo from "@/assets/brands/wells-fargo.png";

const brands = [
  { name: "Baskin Robbins", src: baskinRobbins },
  { name: "Makenna Koffee Company", src: makenna },
  { name: "McDonald's", src: mcdonalds },
  { name: "Petco", src: petco },
  { name: "Wells Fargo", src: wellsFargo },
];

export function TrustedBy() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Trusted by Leading Brands
        </p>

        <div className="mt-10 overflow-hidden reveal">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center min-w-[180px] h-20 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="max-h-16 max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
