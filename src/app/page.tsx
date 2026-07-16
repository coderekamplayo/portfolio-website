import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { StackSection } from "@/components/StackSection";
import { LinearTimeline } from "@/components/LinearTimeline";
import { FooterCta } from "@/components/FooterCta";
import { jsonLd } from "@/data/jsonld";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 md:space-y-20 md:py-20">
        <Hero />
        <BentoGrid />
        <StackSection />
        <LinearTimeline />
        <FooterCta />

        <footer className="flex flex-col items-center gap-1 pt-4 text-center font-mono text-[11px] text-muted">
          <p>&copy; 2026 {resumeData.contact.name}</p>
          <p>[ STACK: NEXTJS / TAILWIND V4 ]</p>
        </footer>
      </div>
    </main>
  );
}
