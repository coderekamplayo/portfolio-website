import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

interface Signal {
  id: string;
  org: string;
  achievement: string;
  date: string;
  note: string;
}

export function CompetitiveCard({ className }: { className?: string }) {
  const hackathon = resumeData.hackathons[0];
  const research = resumeData.academicExperience[0];

  const signals: Signal[] = [
    {
      id: "SIGNAL-01",
      org: "Google / CEB-I Hacks",
      achievement: hackathon.achievements.join(" / "),
      date: hackathon.dates,
      note: "Led Team ATXI and presented solution feasibility to Google and MCIA panels.",
    },
    {
      id: "SIGNAL-02",
      org: "ICMFS 2025",
      achievement: "Research Presenter at the University of Santo Tomas",
      date: research.dates,
      note: "Represented USPF and defended technical architecture and gamification strategies to academic panels.",
    },
  ];

  return (
    <Card label="SIGNALS // EXTERNAL VALIDATION" className={className}>
      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
        {signals.map((signal, i) => (
          <article
            key={signal.id}
            className={
              i > 0
                ? "flex flex-col gap-2 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0"
                : "flex flex-col gap-2 md:pr-6"
            }
          >
            <span className="font-mono text-[10px] tracking-wider text-accent">
              {signal.id}
            </span>
            <h3 className="font-sans text-base font-semibold tracking-tight text-foreground">
              {signal.org}
            </h3>
            <p className="font-mono text-xs text-soft">{signal.achievement}</p>
            <p className="font-mono text-[10px] text-muted">{signal.date}</p>
            <p className="font-sans text-sm leading-relaxed text-muted">
              {signal.note}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
