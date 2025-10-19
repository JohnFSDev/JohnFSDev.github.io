import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90, 95],
  },
  ...(isProd && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),
};

export default nextConfig;