'use strict';

const webpackConfig = require('./webpack.base.config.js');
const newConfig = {};

newConfig.module.loaders = (newConfig.module.loaders || []).concat(webpackConfig.module.loaders);

module.exports = newConfig;
