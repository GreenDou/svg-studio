const merge = require('webpack-merge');

const cfg_common = require('./webpack/common');
const cfg_dev = require('./webpack/dev');

module.exports = merge(cfg_common, cfg_dev);
