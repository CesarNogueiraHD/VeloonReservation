import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3333",
      },
    ],
  },
};

export default nextConfig;
