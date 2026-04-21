import logo from "@/assets/bb-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Boulder Builders"
            className="h-9 w-9 rounded-md object-cover"
            width={36}
            height={36}
            loading="lazy"
          />
          <span className="font-display font-bold text-foreground">Boulder Builders</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <span>Construction Services</span>
          <span className="hidden md:inline text-border">•</span>
          <span>Serving the Local Area</span>
          <span className="hidden md:inline text-border">•</span>
          <a href="tel:+16612870001" className="font-semibold text-foreground hover:text-brand transition-colors">
            (661) 287-0001
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Boulder Builders. Licensed & Insured.
      </p>
    </footer>
  );
}
