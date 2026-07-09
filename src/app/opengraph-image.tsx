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
          backgroundColor: "#09090b",
          color: "#e4e4e7",
          padding: "64px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            color: "#34d399",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#10b981",
            }}
          />
          STATUS: ACTIVE
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#fafafa" }}>
            Christian Derek S. Amplayo
          </div>
          <div style={{ fontSize: 28, color: "#34d399" }}>
            ~/software-engineer
          </div>
          <div style={{ fontSize: 24, color: "#a3a3a3", maxWidth: 900 }}>
            Backend development and AI-integrated systems — Node.js/TypeScript
            and SAP ABAP.
          </div>
        </div>

        <div style={{ fontSize: 20, color: "#737373" }}>
          christianderek.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
