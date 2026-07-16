import { resumeData } from "@/data/resume";

export function FooterCta() {
  const { contact, resumeFile } = resumeData;
  const linkedInUrl = `https://${contact.linkedIn}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col items-center gap-4 border-t border-border pt-10"
    >
      <h2 id="contact-heading" className="terminal-label">
        STATUS // NEXT STEP
      </h2>
      <p className="max-w-md text-center font-sans text-sm text-muted">
        Available for software engineering opportunities. Download the résumé
        or reach out directly.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`/${resumeFile.filename}`}
          download={resumeFile.filename}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-xs font-semibold text-[#09090b] transition-colors duration-150 hover:bg-selection"
        >
          DOWNLOAD RÉSUMÉ
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex min-h-11 items-center rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors duration-150 hover:border-muted hover:bg-panel-elevated"
        >
          EMAIL
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors duration-150 hover:border-muted hover:bg-panel-elevated"
        >
          LINKEDIN
        </a>
      </div>
      <p className="font-mono text-[11px] text-muted">{contact.email}</p>
    </section>
  );
}
