const FALLBACK_SITE_URL = "http://localhost:3000";

export const siteConfig = {
  name: "nextjs-vps-project",
  title: "nextjs-vps-project | VPS Deployment Verification",
  shortTitle: "VPS Deployment Verification",
  description:
    "Production verification homepage for a self-hosted Next.js App Router application on Oracle Cloud Infrastructure, served through Nginx, PM2, Certbot, Cloudflare, and DigitalPlat.",
  keywords: [
    "Next.js",
    "VPS deployment",
    "Oracle Cloud Infrastructure",
    "OCI",
    "self-hosted",
    "App Router",
    "Nginx",
    "PM2",
    "Certbot",
    "Cloudflare",
    "DigitalPlat",
    "SSR",
    "production",
  ],
  locale: "en_US",
  category: "technology",
} as const;

export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    FALLBACK_SITE_URL;

  return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
}
