import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/ipfs/**', // Allow any path under /ipfs/
      },
      // Add other allowed domains here if needed
    ],
  },
  webpack: (config) => {
    // Required for lucid-cardano WASM module
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    // Some configurations might also need output.webassemblyModuleFilename
    // config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';

    // Ensures WASM files are treated correctly
    config.resolve.fallback = { fs: false, path: false }; // Often needed for libraries interacting with fs/path

    return config;
  },
};

export default nextConfig;
