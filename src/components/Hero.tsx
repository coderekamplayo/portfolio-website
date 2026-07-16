import { resumeData } from "@/data/resume";
import { StatusDot } from "@/components/ui/StatusDot";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Hero() {
  const { contact, hero, resumeFile } = resumeData;
  const linkedInUrl = `https://${contact.linkedIn}`;

  return (
    <header className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2.5 rounded-md border border-border px-3 py-2">
          <StatusDot />
          <span className="status-blink terminal-label">{hero.availability}</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          {hero.overline}
        </p>
        <h1 className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {hero.heading}{" "}
          <span className="text-muted">{hero.headingMuted}</span>
        </h1>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
          {hero.supporting}
        </p>
        <p className="font-mono text-xs text-soft">
          {contact.name} — {contact.location}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`/${resumeFile.filename}`}
          download={resumeFile.filename}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-xs font-semibold text-[#09090b] transition-colors duration-150 hover:bg-selection"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          DOWNLOAD RÉSUMÉ
          <span className="font-normal opacity-70">({resumeFile.sizeLabel})</span>
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors duration-150 hover:border-muted hover:bg-panel-elevated"
        >
          LINKEDIN
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors duration-150 hover:border-muted hover:bg-panel-elevated"
        >
          EMAIL
        </a>
      </div>

      <div className="proof-marquee overflow-hidden border-y border-border py-3">
        <div className="proof-marquee-track">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              aria-label={
                duplicate ? undefined : "Selected credentials and engagements"
              }
              aria-hidden={duplicate || undefined}
              className="flex shrink-0 items-center gap-6 pr-6 font-mono text-[11px] tracking-wider text-soft"
            >
              {hero.proofStrip.map((item) => (
                <li key={item} className="flex items-center gap-2 whitespace-nowrap">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </header>
  );
}
