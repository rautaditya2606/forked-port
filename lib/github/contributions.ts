import "server-only";
import { execSync } from "node:child_process";

import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/about/contribution-graph";
import { GITHUB } from "@/constants/links";
import { env } from "@/env";

interface GitHubContributionsResponse {
  contributions: Activity[];
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(
        `${env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${GITHUB.user}?y=last`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (!res.ok) {
        return [];
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions ?? [];
    } catch {
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86_400 }
);

let cachedLastUpdated: string | null = null;

export const getLastUpdated = (): string => {
  if (cachedLastUpdated) {
    return cachedLastUpdated;
  }

  try {
    const date = execSync("git log -1 --format=%cd", {
      encoding: "utf-8",
      timeout: 2000,
    }).trim();

    cachedLastUpdated = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    cachedLastUpdated = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return cachedLastUpdated;
};
