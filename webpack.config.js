const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devServer: {
    open: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
    }),
  ],
};
