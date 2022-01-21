const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    "apiUrl": `${process.env.apiHost}:${process.env.apiPort}`,
    "authCookie": "detailsCookie"
  },
  webpack: config => {
    const alias = config.resolve.alias || {};

    alias['~/enums'] = path.resolve(__dirname, './enums');
    alias['~/types'] = path.resolve(__dirname, './types');
    alias['~/interfaces'] = path.resolve(__dirname, './interfaces');

    config.resolve.alias = alias;

    return config;
  },
}
