/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    includePaths: [`./src/styles`],
  },
  publicRuntimeConfig: {
    modifiedDate: new Date().toISOString(),
  },
  images: {
    remotePatterns: [
      {
        protocol: `https`,
        hostname: `images.unsplash.com`,
        pathname: `**`,
      },
      {
        protocol: `https`,
        hostname: `cdn.underlost.net`,
        pathname: `**`,
      },
      {
        protocol: `https`,
        hostname: `www.gravatar.com`,
        pathname: `**`,
      },
      {
        protocol: `https`,
        hostname: `cdn.alifewellplayed.com`,
        pathname: `**`,
      },
    ],
  },
}

export default nextConfig
