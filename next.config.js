/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`,
     
    ],
  },
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
module.exports = nextConfig;
