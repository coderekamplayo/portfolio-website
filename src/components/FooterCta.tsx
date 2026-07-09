import { resumeData } from "@/data/resume";

export function FooterCta() {
  const { contact, resumeFile } = resumeData;
  const linkedInUrl = `https://${contact.linkedIn}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col items-center gap-4 border-t border-neutral-200 pt-10 dark:border-neutral-800"
    >
      <h2
        id="contact-heading"
        className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500"
      >
        /next-step
      </h2>
      <p className="max-w-md text-center font-sans text-sm text-neutral-600 dark:text-neutral-400">
        Open to select opportunities. Download the resume or reach out directly.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`/${resumeFile.filename}`}
          download={resumeFile.filename}
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:border-emerald-400/30 dark:text-emerald-300"
        >
          Download Resume
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 font-mono text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Contact Me
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 font-mono text-xs text-neutral-500 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
