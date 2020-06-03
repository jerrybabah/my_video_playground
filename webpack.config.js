const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('webpack'); //to access built-in plugins

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
      // css-loader로 main.ts의 상단에 import한 css파일을 읽어들이고
      // mini-css-extract-plugin 동봉 loader로 읽어들인 css 텍스트를 별도의 css 파일로 만들어준다.
      // 복붙하는 느낌이지만 webpack에서 읽어들인 후, html-webpack-plugin 같은 다른 플러그인에서 활용하여 자동으로 index.html에 link태그가 삽입된다.
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
        { from: 'public', to: '' } // index.html도 같이 복사될 텐데, html-webpack-plugin에서 만든 index.html과 중복이니 복사 안된다.
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