const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'production', // default
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), // 절대경로, 번들된 모든 자원을 위치시킬 디렉토리 경로
    filename: 'js/[name].js', // ouputDir 밑에 js 폴더 만들어 이 밑에 js 파일 두기
    // chunkFilename: 'chunk.js',
    publicPath: '/', // 상대경로, 본 application(builded sources in dist folder)을 배포시킬 domain의 base url
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader' // option은 babel.config.js를 참조
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css' // ouputDir 밑에 css 폴더 만들어 이 밑에 css 파일 두기
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '' } // index.html은 알아서 빼주네?? 왜지? to에 임의의 경로를 지정하면 이때는 index.html도 복사되는데?
      ]
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9000
  }
};