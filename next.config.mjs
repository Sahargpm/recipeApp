import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom Next.js configuration
  reactStrictMode: true,
  swcMinify: true,  // Enable SWC compiler minification for faster builds
  images: {
    domains: ['example.com'],  // Allow image domains
  },
  webpack(config) {
    // Add custom webpack rules here if needed
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],  // Handle SVG files as React components
    });

    return config;
  },
};

// Create the Vanilla Extract plugin instance
const withVanillaExtract = createVanillaExtractPlugin();

// Export the configuration using ES6 syntax
export default withVanillaExtract(nextConfig);
