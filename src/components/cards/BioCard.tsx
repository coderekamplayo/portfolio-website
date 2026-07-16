import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function BioCard({ className }: { className?: string }) {
  const { contact, identity, skills } = resumeData;

  const rows = [
    { term: "ROLE", value: contact.title },
    { term: "FOCUS", value: identity.focus },
    { term: "LOCATION", value: contact.location },
    { term: "CORE", value: identity.core },
  ];

  return (
    <Card label="IDENTITY // RUNTIME" title={contact.name} className={className}>
      <dl className="flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-col gap-0.5">
            <dt className="terminal-label">{row.term}</dt>
            <dd className="font-sans text-sm leading-relaxed text-foreground">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="font-sans text-sm leading-relaxed text-muted">
        {identity.summary}
      </p>

      <div className="flex flex-col gap-2 border-t border-border pt-4">
        <h3 className="terminal-label">STACK</h3>
        <dl className="flex flex-col gap-2">
          {skills.map((category) => (
            <div key={category.name} className="flex flex-col gap-0.5">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {category.name}
              </dt>
              <dd className="font-mono text-xs leading-relaxed text-soft">
                {category.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Card>
  );
}
