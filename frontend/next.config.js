const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  async redirects() {
    return [
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/services/:path*', destination: '/#services', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react']
  }
}

module.exports = nextConfig
