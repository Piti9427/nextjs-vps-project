import { ImageResponse } from "next/og";
import { ogColors } from "@/lib/og-colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ogColors.bg,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            border: `3px solid ${ogColors.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: ogColors.surface,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: ogColors.accent,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
