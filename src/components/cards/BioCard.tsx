import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function BioCard({ className }: { className?: string }) {
  const { contact, identity } = resumeData;

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
    </Card>
  );
}
