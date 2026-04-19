import type { NextConfig } from "next";

// Zet DEPLOY_TARGET om de build-output te bepalen:
//   DEPLOY_TARGET=ghpages  → GitHub Pages preview (basePath /LSRBuilding)
//   DEPLOY_TARGET=prod     → eigen webserver / domein (geen basePath)
//   (leeg)                 → zelfde als 'ghpages' voor backwards compat
const target = process.env.DEPLOY_TARGET ?? "ghpages";
const basePath = target === "prod" ? "" : "/LSRBuilding";

// We exposen basePath als public env var zodat componenten handmatig
// asset-paden kunnen prefixen (next/image doet dit niet automatisch
// in combinatie met output: "export" + unoptimized).
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
