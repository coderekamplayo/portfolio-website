type CardStatus = "idle" | "active" | "verified";

type CardProps = {
  label?: string;
  title?: string;
  meta?: string;
  status?: CardStatus;
  interactive?: boolean;
  as?: "div" | "section" | "article";
  className?: string;
  children: React.ReactNode;
};

const STATUS_STYLES: Record<CardStatus, { text: string; className: string }> = {
  idle: { text: "IDLE", className: "text-muted" },
  active: { text: "ACTIVE", className: "text-accent" },
  verified: { text: "VERIFIED", className: "text-accent" },
};

export function Card({
  label,
  title,
  meta,
  status,
  interactive = false,
  as: Tag = "div",
  className,
  children,
}: CardProps) {
  const statusStyle = status ? STATUS_STYLES[status] : null;

  return (
    <Tag
      className={[
        "group relative flex flex-col gap-4 rounded-card border border-border bg-panel p-6 transition-colors duration-200 hover:border-muted",
        interactive ? "focus-within:border-accent" : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {interactive ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-5 top-0 h-px bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      ) : null}

      {label || statusStyle ? (
        <div className="flex items-center justify-between gap-4">
          {label ? <span className="terminal-label">{label}</span> : null}
          {statusStyle ? (
            <span
              className={`font-mono text-[10px] tracking-wider ${statusStyle.className}`}
            >
              <span aria-hidden="true">&#9679;&nbsp;</span>
              {statusStyle.text}
            </span>
          ) : null}
        </div>
      ) : null}

      {title || meta ? (
        <div className="flex flex-col gap-1">
          {title ? (
            <h2 className="font-sans text-base font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          ) : null}
          {meta ? <p className="font-mono text-[11px] text-muted">{meta}</p> : null}
        </div>
      ) : null}

      {children}
    </Tag>
  );
}
