/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com","images.unsplash.com", "assets.aceternity.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
