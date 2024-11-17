// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Keep your external domains for images here
    // unoptimized: true,        // Disable image optimization for local images
  },
}

export default nextConfig;
