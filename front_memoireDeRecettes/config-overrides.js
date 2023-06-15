const webpack = require("webpack");

module.exports = function override(config, env) {
  // Ajoutez le fallback pour le module "buffer"
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve("buffer/"),
    util: require.resolve("util/"),
  };

  // Ajoutez un plugin Webpack pour ignorer les dépendances de type "fs" (si nécessaire)
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^fs$/,
    })
  );

  return config;
};

const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
};