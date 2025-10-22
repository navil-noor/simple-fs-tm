/** @type {import('next').NextConfig} */
const nextConfig = {
  // The async redirects method to handle proxying
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any path starting with /api/
        destination: 'http://localhost:5000/:path*', // Proxy it to the Express server
      },
    ];
  },
};

module.exports = nextConfig;