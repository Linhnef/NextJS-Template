/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};
