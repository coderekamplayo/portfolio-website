"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/Card";

type TabId = "blueprint" | "architecture" | "pipeline";

const TABS: { id: TabId; label: string }[] = [
  { id: "blueprint", label: "Blueprint" },
  { id: "pipeline", label: "Pipeline" },
  { id: "architecture", label: "Architecture" },
];

function PipelineDiagram() {
  const nodes = [
    "Legacy Make.com Blueprint",
    "Migration Engine",
    "Server-Side Node.js / TypeScript",
  ];

  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
      {nodes.map((node, i) => (
        <div key={node} className="flex flex-col items-center gap-3 md:flex-1 md:flex-row">
          <div className="w-full rounded-lg border border-neutral-200 bg-neutral-100/60 px-4 py-3 text-center font-mono text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
            {node}
          </div>
          {i < nodes.length - 1 ? (
            <span
              aria-hidden="true"
              className="rotate-90 text-emerald-500 md:rotate-0 dark:text-emerald-400"
            >
              &rarr;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

const PANELS: Record<TabId, React.ReactNode> = {
  blueprint: (
    <p className="font-sans text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
      9 complex automations running on no-code, causing synchronization issues
      and vendor delays.
    </p>
  ),
  pipeline: <PipelineDiagram />,
  architecture: (
    <p className="font-sans text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
      Deep Cliniko Practice Management System integrations for multi-location
      booking, high-performance VAPI handlers, and a custom Postmark wrapper
      processing 13+ transactional types.
    </p>
  ),
};

export function AevaFlowCard({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<TabId>("pipeline");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = TABS.findIndex((t) => t.id === activeTab);
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % TABS.length;
    else if (e.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = TABS.length - 1;

    if (nextIndex !== null) {
      e.preventDefault();
      const nextId = TABS[nextIndex].id;
      setActiveTab(nextId);
      tabRefs.current[nextId]?.focus();
    }
  };

  return (
    <Card label="sys.case-study: aeva" className={className}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-sans text-base font-semibold text-neutral-900 dark:text-neutral-50">
            Project AEVA &mdash; AI-Powered Voice Agent Platform
          </h2>
          <p className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            Software Engineer at Concisium. Leading the migration of 9 complex
            automation blueprints to Node.js/TypeScript.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="AEVA migration views"
          onKeyDown={handleKeyDown}
          className="flex w-fit gap-1 rounded-lg border border-neutral-200 p-1 dark:border-neutral-800"
        >
          {TABS.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                role="tab"
                id={`aeva-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`aeva-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-3 py-1 font-mono text-xs transition-colors ${
                  selected
                    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                    : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`aeva-panel-${tab.id}`}
              aria-labelledby={`aeva-tab-${tab.id}`}
              hidden={tab.id !== activeTab}
            >
              {PANELS[tab.id]}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
