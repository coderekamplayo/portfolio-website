import { ImageResponse } from "next/og";

export const alt = "Christian Derek S. Amplayo — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 20,
            letterSpacing: 2,
            color: "#a1a1aa",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#f97316",
            }}
          />
          SOFTWARE ENGINEER // SYSTEMS, AGENTS, BACKENDS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 54, fontWeight: 700, color: "#ffffff" }}>
            Christian Derek S. Amplayo
          </div>
          <div style={{ fontSize: 26, color: "#f97316" }}>
            Voice AI systems / Backend engineering / Enterprise workflows
          </div>
          <div style={{ fontSize: 22, color: "#a1a1aa", maxWidth: 900 }}>
            Node.js / TypeScript / Next.js / Prisma / SAP ABAP — TOPCIT Level 3
          </div>
        </div>

        <div style={{ fontSize: 20, color: "#71717a" }}>
          christianderek.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
