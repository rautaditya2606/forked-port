import type { MetadataRoute } from "next";

import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { getExperienceSlugs } from "@/lib/experiences";
import { getInternalProjectSlugs } from "@/lib/projects";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getInternalProjectSlugs().map((slug) => ({
    changeFrequency: "monthly" as const,
    lastModified: new Date(),
    priority: 0.8,
    url: absoluteUrl(`${ROUTES.PROJECTS}/${slug}`),
  }));

  const experienceEntries = getExperienceSlugs().map((slug) => ({
    changeFrequency: "monthly" as const,
    lastModified: new Date(),
    priority: 0.7,
    url: absoluteUrl(`${ROUTES.EXPERIENCES}/${slug}`),
  }));

  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: SITE.URL,
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.9,
      url: absoluteUrl(ROUTES.PROJECTS),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.9,
      url: absoluteUrl(ROUTES.EXPERIENCES),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.9,
      url: absoluteUrl(ROUTES.USES),
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.9,
      url: absoluteUrl(ROUTES.STATS),
    },
    ...projectEntries,
    ...experienceEntries,
  ];
}
