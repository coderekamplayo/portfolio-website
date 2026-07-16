import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

function BenchmarkTrack({ label, value }: { label: string; value: string }) {
  const pct = parseFloat(value);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="font-mono text-lg font-semibold tabular-nums text-foreground">
          {value}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="h-1 w-full overflow-hidden rounded-full bg-panel-elevated"
      >
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function TopcitCard({ className }: { className?: string }) {
  const cert = resumeData.certifications.find((c) => c.name.includes("TOPCIT"));

  if (!cert) return null;

  return (
    <Card
      label="BENCHMARK // VERIFIED COMPETENCY"
      title="TOPCIT LEVEL 3"
      meta={`${cert.issuer} — ${cert.date}`}
      status="verified"
      className={className}
    >
      <div className="flex flex-1 flex-col justify-center gap-5">
        {cert.metrics?.map((metric) => (
          <BenchmarkTrack
            key={metric.label}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>

      <p className="font-mono text-[10px] leading-relaxed text-muted">
        National ICT competency index administered by IITP, Korea.
      </p>
    </Card>
  );
}
