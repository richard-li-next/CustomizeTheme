const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPlugin = require('ts-import-plugin');
const theme = require('./theme');

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
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPlugin({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, './src')],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: theme,
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
