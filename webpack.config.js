const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'production', // default
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: 'chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader' // option은 babel.config.js를 참조
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.json']
  }
};