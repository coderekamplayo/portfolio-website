import { resumeData } from "@/data/resume";

interface LogEvent {
  dates: string;
  category: string;
  org: string;
  role: string;
  summary: string;
  tech?: string[];
}

export function LinearTimeline() {
  const { experience, education } = resumeData;

  const events: LogEvent[] = [
    ...experience.map((item) => ({
      dates: item.dates,
      category: item.category,
      org: item.company,
      role: item.role,
      summary: item.summary,
      tech: item.techStack,
    })),
    ...education.map((entry) => ({
      dates: entry.dates,
      category: "EDUCATION",
      org: entry.institution,
      role: entry.degree,
      summary: entry.location,
    })),
  ];

  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="flex flex-col gap-8">
      <h2
        id="timeline-heading"
        className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
      >
        EVENT LOG <span className="text-muted">{"//"}</span> EXPERIENCE
      </h2>

      <ol className="ml-1 flex flex-col gap-10 border-l border-border">
        {events.map((event) => (
          <li key={`${event.org}-${event.role}`} className="relative pl-6">
            <span
              aria-hidden="true"
              className="absolute left-[-3.5px] top-1.5 h-1.5 w-1.5 bg-accent"
            />

            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-[11px] tabular-nums text-muted">
                [{event.dates}]
              </p>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {event.category} <span className="text-muted">{"//"}</span>{" "}
                {event.org}
              </p>
              <h3 className="font-sans text-sm font-medium text-soft">
                {event.role}
              </h3>
              <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted">
                {event.summary}
              </p>
              {event.tech ? (
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {event.tech.join(" · ")}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
