import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    qualities: [75, 90, 95],
  },
  basePath: "/portfolio",
};

export default nextConfig;
