import { Phone } from "lucide-react";

export function StickyCallButton() {
  return (
    <a
      href="tel:+16612870001"
      aria-label="Call Boulder Builders now"
      className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-bold text-brand-foreground shadow-elevated active:scale-95 transition-transform"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
