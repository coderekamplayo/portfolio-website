import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { LinearTimeline } from "@/components/LinearTimeline";
import { jsonLd } from "@/data/jsonld";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-12 md:py-24">
        <Hero />
        <BentoGrid />
        <LinearTimeline />

        <footer className="flex flex-col items-center gap-1 pt-8 text-center font-mono text-[11px] text-neutral-400 dark:text-neutral-600">
          <p>&copy; 2026 Christian Derek S. Amplayo</p>
          <p>[ STACK: NEXTJS / TAILWIND V4 ]</p>
        </footer>
      </div>
    </main>
  );
}
