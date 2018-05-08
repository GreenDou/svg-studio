const merge = require('webpack-merge');

const cfg_common = require('./webpack/common');

module.exports = function(env) {
  // TODO Add env
  const cfg_dev = require('./webpack/dev');
  return merge(cfg_common, cfg_dev);
} 
