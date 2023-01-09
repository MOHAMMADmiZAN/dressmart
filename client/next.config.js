/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com']
  },
  distDir: 'build',
}

module.exports = nextConfig
