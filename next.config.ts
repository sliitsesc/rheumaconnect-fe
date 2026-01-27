import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "rc-api-stage.matterofcode.dev",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "arthritislkbucket.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "api.arthritis.lk",
      },
    ],
  },
};

export default nextConfig;
