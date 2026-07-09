"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const FRAME =
  "inline-flex min-w-[15ch] items-center justify-center rounded border border-neutral-300 px-2.5 py-1 text-xs font-mono transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900";

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
