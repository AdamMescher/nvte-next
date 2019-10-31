// conf.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      }),
    ],
  },
};