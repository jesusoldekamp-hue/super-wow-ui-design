import type { NextConfig } from "next"
import path from "node:path"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  transpilePackages: ["@workspace/effects", "@workspace/ui", "three"],
  turbopack: {
    root: path.resolve(process.cwd(), "../.."),
  },
}

export default nextConfig
