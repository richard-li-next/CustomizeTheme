const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPlugin = require('ts-import-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
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
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
