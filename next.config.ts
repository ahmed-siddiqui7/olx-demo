import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://images.olx.com.pk/thumbnails/535914437-800x600.webp"),
    ],
  },
};

export default nextConfig;
