import type { NextConfig } from "next";

// Define the Next.js configuration
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
