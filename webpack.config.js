"use strict";
let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  webpack: webpack,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/main.jsx'
  ],

  target: 'web',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
 
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html'
      //favicon: 'public/favi.ico'
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules"]
  },

  module: {
    loaders: [

      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },

      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }

};
