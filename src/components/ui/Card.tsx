interface CardProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function Card({ children, className, label }: CardProps) {
  const base =
    "relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700";

  return (
    <div
      className={[base, label ? "pt-10" : null, className]
        .filter(Boolean)
        .join(" ")}
    >
      {label ? (
        <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}
