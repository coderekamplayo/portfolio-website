import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

export function AccentureCard({ className }: { className?: string }) {
  const role = resumeData.experience.find((e) => e.company === "Accenture");

  if (!role) return null;

  const rows = [
    { term: "SCOPE", value: "ABAP Open SQL / DDIC / ALV reporting" },
    { term: "DOMAIN", value: "Enterprise ERP backend development" },
  ];

  return (
    <Card
      label="FOUNDATION // SAP ABAP"
      title={`${role.role} — ${role.company}`}
      meta={role.dates}
      className={className}
    >
      <p className="font-sans text-sm leading-relaxed text-muted">
        Built enterprise backend foundations: DDIC configuration, custom ABAP
        reports, and ALV programs over Open SQL.
      </p>

      <dl className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-col gap-0.5">
            <dt className="terminal-label">{row.term}</dt>
            <dd className="font-mono text-xs text-soft">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
