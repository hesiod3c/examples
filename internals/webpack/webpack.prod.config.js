  'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


const GLOBALS = {
  'process.env' : {
    NODE_ENV: '"production"',
  }
};

module.exports = validate({
  entry: {
    'blacksmith': path.resolve(__dirname, '../../shared/react/components/index.js')
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: `${process.env.JS}-[name].min.js`
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    root: [
      path.join(__dirname, '../../')
    ],
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css?modules=1&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?sourceMap'),
        exclude: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/
      },
      {
        test: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/,
        loader: ExtractTextPlugin.extract('style','css?modules=1&importLoaders=1&localIdentName=[local]!postcss!sass?sourceMap'),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      },
      {
        test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
    new ExtractTextPlugin(`${process.env.JS}-[name].min.css`, {
      allowChunks: true
    })
  ],
  externals: {
    'window': 'window'
  }
});
