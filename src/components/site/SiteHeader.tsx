import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logo from "@/assets/bb-logo.jpeg";

const PHONE = "(661) 287-0001";
const PHONE_HREF = "tel:+16612870001";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Boulder Builders logo"
            className="h-11 w-11 rounded-md object-cover"
            width={44}
            height={44}
          />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Boulder Builders
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#process" className="hover:text-foreground transition-colors">
            Process
          </a>
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-card"
        >
          <Phone className="h-4 w-4" />
          <span>{PHONE}</span>
        </a>
      </div>
    </header>
  );
}
