// const webpack = require('webpack');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
// const withSass = require('@zeit/next-sass');

module.exports = withPlugins(
  [withCss],
  {
    /* webpack: (config, { dev, isServer }) => {
      config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }));

      return config;
    }, */
  },
); // withCss(withSass());
