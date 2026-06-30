import { BioCard } from "@/components/cards/BioCard";
import { TopcitCard } from "@/components/cards/TopcitCard";
import { AccentureCard } from "@/components/cards/AccentureCard";
import { CompetitiveCard } from "@/components/cards/CompetitiveCard";
import { AevaFlowCard } from "@/components/cards/AevaFlowCard";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <BioCard className="md:col-span-1 md:row-span-2" />
      <TopcitCard className="md:col-span-1" />
      <AccentureCard className="md:col-span-1" />
      <CompetitiveCard className="md:col-span-2" />
      <AevaFlowCard className="md:col-span-3" />
    </div>
  );
}
