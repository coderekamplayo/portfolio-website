import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function CompetitiveCard({ className }: { className?: string }) {
  const hackathon = resumeData.hackathons[0];
  const research = resumeData.academicExperience[0];

  return (
    <Card label="sys.competency" className={className}>
      <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col gap-2 md:pr-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {hackathon.achievements.join(" / ")}
          </span>
          <h2 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
            {hackathon.name}
          </h2>
          <p className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
            {hackathon.role} / {hackathon.dates}
          </p>
          <p className="font-sans text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Led Team ATXI to the Top 25 Innovators. Presented social impact and
            feasibility directly to panels from Google and MCIA.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-200 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0 dark:border-neutral-800">
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Research / Representation
          </span>
          <h2 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
            {research.institution}
          </h2>
          <p className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
            {research.role} / {research.dates}
          </p>
          <p className="font-sans text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            University Representative at the UST International Research Forum.
            Defended technical architecture and gamification strategies.
          </p>
        </div>
      </div>
    </Card>
  );
}
