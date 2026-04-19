import type { NextConfig } from "next";

// Zet DEPLOY_TARGET om de build-output te bepalen:
//   DEPLOY_TARGET=ghpages  → GitHub Pages preview (basePath /LSRBuilding)
//   DEPLOY_TARGET=prod     → eigen webserver / domein (geen basePath)
//   (leeg)                 → zelfde als 'ghpages' voor backwards compat
const target = process.env.DEPLOY_TARGET ?? "ghpages";
const basePath = target === "prod" ? "" : "/LSRBuilding";

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
