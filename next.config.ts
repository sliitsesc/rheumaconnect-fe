import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "rc-api-stage.matterofcode.dev",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
