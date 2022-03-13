/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    backend_url: process.env.backend_url,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  reactStrictMode: true,
};
