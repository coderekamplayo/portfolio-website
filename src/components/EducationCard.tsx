import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function EducationCard() {
  const primary = resumeData.education.find((entry) =>
    entry.institution.includes("University of Southern Philippines Foundation"),
  );
  const prior = resumeData.education.find((entry) =>
    entry.institution.includes("STI"),
  );

  if (!primary) return null;

  const graduationYear = primary.dates.split("–").pop()?.trim() ?? primary.dates;

  return (
    <section id="education" aria-labelledby="education-heading">
      <Card label="sys.education">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1">
            <h2
              id="education-heading"
              className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500"
            >
              /education
            </h2>
            <p className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
              {primary.degree}
            </p>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {primary.institution}
            </p>
            <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
              {primary.location} / Graduating {graduationYear}
            </p>
          </div>

          {prior ? (
            <p className="font-mono text-[11px] leading-relaxed text-neutral-400 dark:text-neutral-500 sm:max-w-xs sm:text-right">
              Prior: {prior.institution} ({prior.dates})
            </p>
          ) : null}
        </div>
      </Card>
    </section>
  );
}
