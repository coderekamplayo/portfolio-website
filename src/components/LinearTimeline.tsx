import { resumeData } from "@/data/resume";

export function LinearTimeline() {
  const { experience } = resumeData;

  return (
    <section id="timeline" className="space-y-6">
      <h2 className="font-mono text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
        /experience-timeline
      </h2>

      <ol className="ml-4 space-y-10 border-l border-neutral-200 dark:border-neutral-800">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative pl-6">
            <span
              aria-hidden="true"
              className="absolute left-[-5px] top-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-neutral-50 dark:bg-emerald-400 dark:ring-neutral-950"
            />

            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
                {item.role}
              </h3>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {item.company} / {item.dates}
                {item.location ? ` / ${item.location}` : ""}
              </p>

              <ul className="mt-1 list-disc space-y-1 pl-4 font-sans text-sm leading-relaxed text-neutral-700 marker:text-emerald-500 dark:text-neutral-300 dark:marker:text-emerald-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <ul className="mt-2 flex flex-wrap gap-1.5">
                {item.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-neutral-200 bg-neutral-100/30 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900/30"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
