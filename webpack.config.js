var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.less',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  // debug: true,
  devtool: 'source-map',
  module: {
    rules: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0'],
            plugins: ["transform-decorators-legacy"],
          }
        }
      },
      { 
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader', 
          'autoprefixer-loader', 
          'less-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
