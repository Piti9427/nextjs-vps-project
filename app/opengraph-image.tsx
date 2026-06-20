import { ImageResponse } from "next/og";
import { ogColors } from "@/lib/og-colors";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        background: ogColors.bg,
        color: ogColors.ink,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
          fontSize: 22,
          color: ogColors.muted,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: ogColors.accent,
          }}
        />
        <div>Status: Active (Production)</div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginBottom: 20,
        }}
      >
        {siteConfig.name}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 28,
          lineHeight: 1.4,
          color: ogColors.muted,
          maxWidth: 820,
          marginBottom: 40,
        }}
      >
        {siteConfig.shortTitle} on Oracle Cloud, Nginx, PM2, Certbot,
        Cloudflare, and DigitalPlat.
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 20,
          color: ogColors.primary,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        Next.js App Router · SSR verification
      </div>
    </div>,
    { ...size },
  );
}
