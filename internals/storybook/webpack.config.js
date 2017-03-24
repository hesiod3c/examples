const kadiraWebpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const webpackConfig = require('../webpack/webpack.base.config.js');

module.exports = function (config, env) {
  const newConfig = kadiraWebpackConfig(config, env);

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(webpackConfig.module.preLoaders);
  newConfig.module.loaders = (newConfig.module.loaders || []).concat(webpackConfig.module.loaders);
  newConfig.postcss = webpackConfig.postcss;

  return newConfig;
};
