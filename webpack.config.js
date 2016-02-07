var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './dist-server/router.js',
  output: { path: __dirname, filename: './dist/bundle.js' }
};