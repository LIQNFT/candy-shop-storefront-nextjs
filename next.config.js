/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@blocto/sdk']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      stream: false,
    };

    return config;
  },
  images: {
    domains: ['arweave.net', 'www.arweave.net'],
  },
});
