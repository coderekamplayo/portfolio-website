"use client";

import { Fragment, useRef, useState } from "react";
import {
  resumeData,
  type AevaRouteNode,
  type AevaTab,
} from "@/data/resume";
import { Card } from "@/components/ui/Card";

type TabId = AevaTab["id"];

const NODE_ICONS: Record<AevaRouteNode["id"], React.ReactNode> = {
  caller: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  vapi: (
    <>
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="7" x2="8" y2="17" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </>
  ),
  handler: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  cliniko: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  postmark: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </>
  ),
};

function RouteGraph({
  route,
  caption,
}: {
  route: AevaRouteNode[];
  caption: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch">
        {route.map((node, i) => (
          <Fragment key={node.id}>
            <div
              className={`flex flex-col items-center justify-center gap-1.5 rounded-md border px-4 py-3 text-center lg:min-w-32 ${
                node.emphasis
                  ? "border-accent/50 bg-panel-elevated"
                  : "border-border bg-panel-elevated"
              }`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={node.emphasis ? "text-accent" : "text-muted"}
              >
                {NODE_ICONS[node.id]}
              </svg>
              <span className="font-mono text-[11px] tracking-wider text-foreground">
                {node.title}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                {node.subtitle}
              </span>
            </div>

            {i < route.length - 1 ? (
              <div aria-hidden="true" className="flex items-center justify-center">
                {/* Horizontal dashed connector (desktop) */}
                <div className="relative hidden h-full min-w-14 flex-1 items-center justify-center lg:flex">
                  <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-border" />
                  {node.linkLabel ? (
                    <span className="relative bg-panel px-1.5 font-mono text-[8px] tracking-[0.14em] text-accent">
                      {node.linkLabel}
                    </span>
                  ) : null}
                </div>
                {/* Vertical dashed connector (mobile) */}
                <div className="flex flex-col items-center gap-1 py-1.5 lg:hidden">
                  <span className="h-3 border-l border-dashed border-border" />
                  {node.linkLabel ? (
                    <span className="font-mono text-[8px] tracking-[0.14em] text-accent">
                      {node.linkLabel}
                    </span>
                  ) : null}
                  <span className="h-3 border-l border-dashed border-border" />
                </div>
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>

      <p className="text-center font-mono text-[10px] tracking-[0.14em] text-muted">
        {caption}
      </p>
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
            {tab.id === "flow" ? (
              <RouteGraph route={aeva.route} caption={aeva.routeCaption} />
            ) : null}
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
