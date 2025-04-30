import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me", "img.clerk.com"],

    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60, // 60 seconds
  },
  // Other Next.js config options...
};

export default nextConfig;
