import { createContent } from "fuma-content/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "date-fns",
      "@base-ui/react",
      "shiki",
    ],
  },
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https",
      },
      {
        hostname: "github.com",
        protocol: "https",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "opengraph.githubassets.com",
        protocol: "https",
      },
    ],
  },
  redirects() {
    return [
      {
        destination: "/uses",
        permanent: true,
        source: "/stack",
      },
    ];
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

const withContent = await createContent();

export default withContent(nextConfig);
