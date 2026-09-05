export const GITHUB = {
  branch: "main",
  org: "deepset-ai",
  repo: "haystack-diagnostics",
  user: "rautaditya2606",
} as const;

const GITHUB_URL = `https://github.com/${GITHUB.user}`;

export const LINK = {
  BLUESKY: "https://bsky.app",
  CALENDLY: "https://cal.com/aditya-raut",
  CLARITY: "https://clarity.microsoft.com",
  DAILYDEV: "https://daily.dev",
  DISCORD: "https://discord.com",
  EMAIL: "rautaditya2606@gmail.com",
  GITHUB: GITHUB_URL,
  GITHUB_REPO: `https://github.com/${GITHUB.user}/${GITHUB.repo}`,
  LICENSE: `${GITHUB_URL}/blob/${GITHUB.branch}/LICENSE`,
  LINKEDIN: "https://www.linkedin.com/in/aditya-raut-3b4bba31b/",
  PEERLIST: "https://peerlist.io",
  SHADCN_LABS: "https://github.com/deepset-ai/haystack",
  SHADCN_UI: "https://github.com/run-llama/llama_index",
  SPONSOR: `https://github.com/sponsors/${GITHUB.user}`,
  TELEGRAM: "https://t.me",
  TOKSCALE: "https://tokscale.ai",
  TOPMATE: "https://topmate.io",
  TWITTER: "https://x.com/RautAditya2606",
  X: "https://x.com/RautAditya2606",
  X_SHADCN_LABS: "https://x.com/deepset_ai",
  YOUTUBE: "https://youtube.com",
} as const;

const STORAGE_URL =
  "https://yffrvzi8zwbljfuj.public.blob.vercel-storage.com/portfolio-website";

export const ASSETS = {
  CRUD_DIALOG_ANIMATION: `${STORAGE_URL}/crud_dialog_animation.mp4`,
  FIRE: `${STORAGE_URL}/fogonovo.gif`,
  FOUNDER_LETTER_ANIMATION: `${STORAGE_URL}/founder_letter_animation.mp4`,
  MACBOOK_AIR: `${STORAGE_URL}/macbook_air.webp`,
  SAMSUNG_MONITOR: `${STORAGE_URL}/samsung_monitor.avif`,
};
