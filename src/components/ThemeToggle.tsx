"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const FRAME =
  "inline-flex min-h-11 min-w-[15ch] items-center justify-center rounded-md border border-border px-2.5 py-1 text-xs font-mono text-muted transition-colors duration-150 hover:border-muted hover:text-foreground";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  // Reserve identical box dimensions during SSR / first paint to prevent CLS.
  if (!mounted) {
    return (
      <button type="button" className={FRAME} aria-hidden="true" disabled>
        <span className="opacity-0">[ MODE: LIGHT ]</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={FRAME}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? "[ MODE: DARK ]" : "[ MODE: LIGHT ]"}
    </button>
  );
}
