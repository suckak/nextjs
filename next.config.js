/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    loader: 'imgix',
    path: 'https:/media-cdn.tripadvisor.com'
  }
};
