import "server-only";
import { unstable_cache } from "next/cache";

import type { GlimpseData } from "./types";

const TITLE_REGEX = /<title[^>]*>([^<]+)<\/title>/u;
const OG_TITLE_REGEX = /<meta[^>]*property="og:title"[^>]*content="([^"]+)"/u;
const DESCRIPTION_REGEX = /<meta[^>]*name="description"[^>]*content="([^"]+)"/u;
const OG_DESCRIPTION_REGEX =
  /<meta[^>]*property="og:description"[^>]*content="([^"]+)"/u;
const OG_IMAGE_REGEX = /<meta[^>]*property="og:image"[^>]*content="([^"]+)"/u;

const GH_REPO_REGEX =
  /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)\/?$/u;
const GH_PR_REGEX =
  /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/u;

const EMPTY_GLIMPSE: GlimpseData = {
  description: null,
  image: null,
  title: null,
};

const FETCH_TIMEOUT_MS = 1500;
// 7 days
const CACHE_REVALIDATE_SECONDS = 604_800;

const memoryCache = new Map<string, Promise<GlimpseData>>();

const resolveUrl = (baseUrl: string, relativeUrl: string): string => {
  try {
    return new URL(relativeUrl, baseUrl).href;
  } catch {
    return relativeUrl;
  }
};

const extractContent = (match: RegExpMatchArray | null): string | null =>
  match?.at(1) ?? null;

const resolveFastGlimpse = (url: string): GlimpseData | null => {
  // LinkedIn blocks automated crawlers with HTTP 999
  if (url.includes("linkedin.com")) {
    return EMPTY_GLIMPSE;
  }

  // Instant deterministic GitHub OpenGraph image resolution (0ms, no network scraping required)
  const repoMatch = url.match(GH_REPO_REGEX);
  if (repoMatch) {
    const [, owner, repo] = repoMatch;
    return {
      description: null,
      image: `https://opengraph.githubassets.com/1/${owner}/${repo}`,
      title: `${owner}/${repo} · GitHub`,
    };
  }

  const prMatch = url.match(GH_PR_REGEX);
  if (prMatch) {
    const [, owner, repo, pr] = prMatch;
    return {
      description: null,
      image: `https://opengraph.githubassets.com/1/${owner}/${repo}/pull/${pr}`,
      title: `${owner}/${repo}#${pr} · GitHub`,
    };
  }

  return null;
};

const fetchGlimpse = async (url: string): Promise<GlimpseData> => {
  const fast = resolveFastGlimpse(url);
  if (fast) {
    return fast;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LinkPreview/1.0)" },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return EMPTY_GLIMPSE;
    }

    const data = await response.text();
    const titleMatch = data.match(TITLE_REGEX) || data.match(OG_TITLE_REGEX);
    const descriptionMatch =
      data.match(DESCRIPTION_REGEX) || data.match(OG_DESCRIPTION_REGEX);
    const imageMatch = data.match(OG_IMAGE_REGEX);

    const imageUrl = extractContent(imageMatch);
    const resolvedImageUrl = imageUrl
      ? resolveUrl(url, imageUrl)
      : "https://placehold.co/1200x630?text=Preview+Not+Found";

    return {
      description: extractContent(descriptionMatch),
      image: resolvedImageUrl,
      title: extractContent(titleMatch),
    };
  } catch {
    // Silently handle fetch errors and cache empty result to prevent repeated timeouts
    return EMPTY_GLIMPSE;
  }
};

const getPersistentGlimpse = unstable_cache(
  async (url: string): Promise<GlimpseData> => await fetchGlimpse(url),
  ["glimpse-preview-v2"],
  { revalidate: CACHE_REVALIDATE_SECONDS }
);

export const glimpse = async (url: string): Promise<GlimpseData> => {
  if (!url) {
    return EMPTY_GLIMPSE;
  }

  const cached = memoryCache.get(url);
  if (cached) {
    return await cached;
  }

  const promise = (async () => {
    try {
      return await getPersistentGlimpse(url);
    } catch {
      return await fetchGlimpse(url);
    }
  })();

  memoryCache.set(url, promise);
  return await promise;
};

export const prefetchGlimpses = async (
  urls: string[]
): Promise<Record<string, GlimpseData>> => {
  const uniqueUrls = [...new Set(urls.filter(Boolean))];
  const entries = await Promise.all(
    uniqueUrls.map(async (url) => [url, await glimpse(url)] as const)
  );

  return Object.fromEntries(entries);
};
