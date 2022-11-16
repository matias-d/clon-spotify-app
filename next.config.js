/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.scdn.co', 'storage.googleapis.com', 'www.google.com']
  }
}

module.exports = nextConfig
