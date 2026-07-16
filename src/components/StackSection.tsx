import { resumeData } from "@/data/resume";

export function StackSection() {
  const { skills } = resumeData;

  return (
    <section id="stack" aria-labelledby="stack-heading" className="flex flex-col gap-2">
      <h2
        id="stack-heading"
        className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
      >
        STACK <span className="text-muted">{"//"}</span> TECHNOLOGIES
      </h2>

      <div className="divide-y divide-border border-y border-border">
        {skills.map((category, i) => (
          <div
            key={category.name}
            className="grid gap-3 py-5 md:grid-cols-[220px_1fr] md:gap-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-sm font-medium text-soft">
                {category.name}
              </h3>
            </div>

            <ul className="flex flex-wrap items-center gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-panel px-3 py-1.5 font-mono text-xs text-soft transition-colors duration-150 hover:border-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
