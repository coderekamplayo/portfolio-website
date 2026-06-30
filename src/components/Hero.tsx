import { resumeData } from "@/data/resume";
import { StatusDot } from "@/components/ui/StatusDot";
import { ThemeToggle } from "@/components/ThemeToggle";

const RESUME_FILE = "Resume_Christian_Derek_Amplayo.pdf";

export function Hero() {
  const { contact } = resumeData;
  const rolePath = contact.title.toLowerCase().replace(/\s+/g, "-");
  const linkedInUrl = `https://${contact.linkedIn}`;

  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 dark:border-neutral-800">
          <StatusDot />
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Status: Active / Open to Select Opportunities
          </span>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-50">
          {contact.name}
        </h1>
        <p className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="text-neutral-400 dark:text-neutral-600">~/</span>
          {rolePath}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            {contact.email}
          </a>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">
            /
          </span>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            {contact.linkedIn}
          </a>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">
            /
          </span>
          <span>{contact.location}</span>
        </div>

        <a
          href={`/${RESUME_FILE}`}
          download={RESUME_FILE}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-600/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:border-emerald-400/30 dark:text-emerald-300"
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
          DOWNLOAD_CV.PDF
          <span className="font-normal text-emerald-600/70 dark:text-emerald-400/60">
            (780KB)
          </span>
        </a>
      </div>
    </header>
  );
}
