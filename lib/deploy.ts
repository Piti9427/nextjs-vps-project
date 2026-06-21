import packageJson from "../package.json";

export type DeployInfo = {
  version: string;
  buildTime: string;
  gitSha: string | null;
  buildId: string;
};

function formatUtc(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function getDeployInfo(): DeployInfo {
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME ?? "unknown";
  const gitSha =
    process.env.NEXT_PUBLIC_GIT_SHA?.trim().slice(0, 7) ||
    process.env.GIT_SHA?.trim().slice(0, 7) ||
    null;

  const buildId =
    buildTime !== "unknown" ? buildTime.replace(/\D/g, "").slice(0, 14) : "dev";

  return {
    version: packageJson.version,
    buildTime,
    gitSha,
    buildId,
  };
}

export function formatBuildTime(iso: string): string {
  if (iso === "unknown") {
    return "Not set (run npm run build on deploy)";
  }

  return formatUtc(iso);
}
