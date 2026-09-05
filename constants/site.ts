import type { NavGroup, NavItem } from "@/types/nav";

import { ROUTES } from "./routes";
import { getBaseUrl } from "./url";
import { NAME, USER } from "./user";

const baseUrl = getBaseUrl();

export const SITE = {
  AUTHOR: {
    AVATAR: USER.avatar,
    NAME,
    TWITTER: "@RautAditya2606",
  },
  DESCRIPTION: {
    LONG: "Generative AI Engineer and ML Systems builder based in Pune, India. Building production RAG pipelines, LLM applications, and ML systems. Open source contributor to Haystack and LlamaIndex with edge AI quantization research.",
    SHORT:
      "GenAI Engineer Intern with 6 merged PRs to Haystack & LlamaIndex; building RAG pipelines, LLM applications, and ML systems.",
  },
  KEYWORDS: [
    "Aditya Raut",
    "Generative AI Engineer",
    "ML Systems Engineer",
    "Machine Learning Engineer",
    "RAG",
    "Haystack",
    "LlamaIndex",
    "PyTorch",
    "FastAPI",
    "Docker",
    "ONNX",
    "TensorRT",
    "Edge AI",
    "Jetson Nano",
    "Portfolio",
  ],
  NAME,
  URL: baseUrl,
} as const;

export const META_THEME_COLORS = {
  dark: "#0a0a0a",
  light: "#ffffff",
};

export const UTM_PARAMS = {
  utm_source: new URL(baseUrl).hostname,
};

export const NAV_STANDALONE: NavItem[] = [
  {
    href: ROUTES.HOME,
    id: "home",
    label: "home",
  },
  {
    href: ROUTES.CONTACT,
    id: "contact",
    label: "contact",
  },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "work",
    items: [
      {
        href: ROUTES.USES,
        id: "uses",
        label: "uses",
      },
      {
        href: ROUTES.PROJECTS,
        id: "projects",
        label: "projects",
      },
      {
        href: ROUTES.EXPERIENCES,
        id: "experiences",
        label: "experience",
      },
    ],
    label: "work",
  },
  {
    id: "extras",
    items: [
      {
        href: ROUTES.STATS,
        id: "stats",
        label: "stats",
      },
      {
        href: ROUTES.FAVORITES,
        id: "favorites",
        label: "favorites",
      },
    ],
    label: "extras",
  },
];
