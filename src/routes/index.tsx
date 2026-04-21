import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Founder } from "@/components/site/Founder";
import { IntroVideo } from "@/components/site/IntroVideo";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyCallButton } from "@/components/site/StickyCallButton";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boulder Builders — Commercial & Residential Construction Done Right" },
      {
        name: "description",
        content:
          "Licensed & insured construction. Remodels, additions, painting & commercial build-outs. Built to last. Call (661) 287-0001 for a free quote.",
      },
      { property: "og:title", content: "Boulder Builders — Construction Done Right" },
      {
        property: "og:description",
        content:
          "Residential remodels, additions, painting, and commercial build-outs. Free quote: (661) 287-0001.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <TrustedBy />
        <Services />
        <Projects />
        <IntroVideo />
        <Founder />
        <Process />
        <FinalCTA />
      </main>
      <SiteFooter />
      <StickyCallButton />
    </div>
  );
}
