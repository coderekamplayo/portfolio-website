import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/Card";

const RADIUS = 16;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~100.53

function RadialMeter({ label, value }: { label: string; value: string }) {
  const pct = parseFloat(value);
  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <svg viewBox="0 0 36 36" className="h-20 w-20" role="img" aria-label={`${label}: ${value}`}>
        <circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
          className="stroke-neutral-200 dark:stroke-neutral-800"
        />
        <circle
          cx="18"
          cy="18"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 18 18)"
          className="stroke-emerald-500 dark:stroke-emerald-400"
        />
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="6"
          className="fill-neutral-900 font-mono font-semibold dark:fill-neutral-50"
        >
          {value}
        </text>
      </svg>
      <span className="font-mono text-[11px] leading-tight text-neutral-600 dark:text-neutral-400">
        {label}
      </span>
    </div>
  );
}

export function TopcitCard({ className }: { className?: string }) {
  const cert = resumeData.certifications.find((c) => c.name.includes("TOPCIT"));

  if (!cert) return null;

  const sysArch = cert.metrics?.find((m) => m.label === "System Architecture");
  const itBiz = cert.metrics?.find((m) => m.label === "IT Business & Ethics");

  return (
    <Card label="sys.credential" className={className}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
            {cert.name}
          </h2>
          <p className="font-mono text-[10px] leading-tight text-neutral-500 dark:text-neutral-400">
            {cert.issuer}
          </p>
          <p className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
            Validated {cert.date}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-around gap-2">
          {sysArch ? (
            <RadialMeter label="System Architecture" value={sysArch.value} />
          ) : null}
          {itBiz ? (
            <RadialMeter label="IT Business & Ethics" value={itBiz.value} />
          ) : null}
        </div>
      </div>
    </Card>
  );
}
