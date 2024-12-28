/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["lh3.googleusercontent.com","images.unsplash.com", "assets.aceternity.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
