// conf.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ],
  },
};