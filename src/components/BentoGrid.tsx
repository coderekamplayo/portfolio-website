import { BioCard } from "@/components/cards/BioCard";
import { TopcitCard } from "@/components/cards/TopcitCard";
import { AccentureCard } from "@/components/cards/AccentureCard";
import { CompetitiveCard } from "@/components/cards/CompetitiveCard";
import { AevaFlowCard } from "@/components/cards/AevaFlowCard";

/* DOM order matches the mobile reading order (flagship first).
   Desktop uses md:order-* + spans to compose the bento layout:
   row 1: Bio / TOPCIT / Accenture — row 2: Competitive — row 3: AEVA. */
export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <AevaFlowCard className="md:order-5 md:col-span-3" />
      <TopcitCard className="md:order-2" />
      <BioCard className="md:order-1" />
      <CompetitiveCard className="md:order-4 md:col-span-3" />
      <AccentureCard className="md:order-3" />
    </div>
  );
}
