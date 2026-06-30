import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function BioCard({ className }: { className?: string }) {
  const { skills } = resumeData;

  return (
    <Card label="sys.profile" className={className}>
      <div className="flex h-full flex-col gap-6">
        <p className="font-sans text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          Software engineer focused on production-grade Node.js/TypeScript
          backends, enterprise SAP ABAP, and pragmatic system architecture. I
          turn complex automations and real-time integrations into resilient,
          server-side systems.
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            /core-capabilities
          </h2>

          <div className="flex flex-col gap-4">
            {skills.map((category) => (
              <div key={category.name} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {category.name}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 font-mono text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
