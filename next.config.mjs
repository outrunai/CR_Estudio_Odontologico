/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false,
    cpus: 1,
  },
  webpack: (config, { isServer }) => {
    config.parallelism = 1;
    return config;
  },
};

export default nextConfig;
