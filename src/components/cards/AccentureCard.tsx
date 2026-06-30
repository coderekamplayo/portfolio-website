import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function AccentureCard({ className }: { className?: string }) {
  const role = resumeData.experience.find((e) => e.company === "Accenture");

  if (!role) return null;

  return (
    <Card label="sys.enterprise" className={className}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
            {role.role} | {role.company}
          </h2>
          <p className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
            {role.dates}
            {role.location ? ` / ${role.location}` : ""}
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {role.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 font-mono text-xs leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              <span aria-hidden="true" className="text-emerald-500 dark:text-emerald-400">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
