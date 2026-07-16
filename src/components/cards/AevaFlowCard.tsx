"use client";

import { useRef, useState } from "react";
import { resumeData, type AevaTab } from "@/data/resume";
import { Card } from "@/components/ui/Card";

type TabId = AevaTab["id"];

function RouteGraph({ route }: { route: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
      {route.map((node, i) => (
        <div
          key={node}
          className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"
        >
          <div className="w-full rounded-md border border-border bg-panel-elevated px-3 py-2.5 text-center font-mono text-[11px] tracking-wider text-foreground">
            {node}
          </div>
          {i < route.length - 1 ? (
            <span
              aria-hidden="true"
              className="rotate-90 px-1 text-accent lg:rotate-0"
            >
              &rarr;
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function AevaFlowCard({ className }: { className?: string }) {
  const { aeva } = resumeData;
  const [activeTab, setActiveTab] = useState<TabId>("flow");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = aeva.tabs.findIndex((t) => t.id === activeTab);
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") nextIndex = (currentIndex + 1) % aeva.tabs.length;
    else if (e.key === "ArrowLeft")
      nextIndex = (currentIndex - 1 + aeva.tabs.length) % aeva.tabs.length;
    else if (e.key === "Home") nextIndex = 0;
    else if (e.key === "End") nextIndex = aeva.tabs.length - 1;

    if (nextIndex !== null) {
      e.preventDefault();
      const nextId = aeva.tabs[nextIndex].id;
      setActiveTab(nextId);
      tabRefs.current[nextId]?.focus();
    }
  };

  return (
    <Card
      label="AGENT-01 // AEVA EXECUTION"
      title={aeva.title}
      meta={aeva.meta}
      status="active"
      interactive
      as="article"
      className={className}
    >
      <div
        role="tablist"
        aria-label="AEVA system views"
        onKeyDown={handleKeyDown}
        className="flex flex-wrap gap-1 border-b border-border"
      >
        {aeva.tabs.map((tab) => {
          const selected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              type="button"
              role="tab"
              id={`aeva-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`aeva-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              className={`-mb-px min-h-11 border-b-2 px-4 font-mono text-xs tracking-wider transition-colors duration-150 ${
                selected
                  ? "border-accent bg-panel-elevated/60 text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-44 md:min-h-36">
        {aeva.tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`aeva-panel-${tab.id}`}
            aria-labelledby={`aeva-tab-${tab.id}`}
            hidden={tab.id !== activeTab}
            className="flex flex-col gap-4"
          >
            {tab.id === "flow" ? <RouteGraph route={aeva.route} /> : null}
            <ul className="flex flex-col gap-2">
              {tab.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 font-sans text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden="true" className="font-mono text-soft">
                    &ndash;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}
