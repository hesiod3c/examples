const webpack = require('webpack');
const yargs = require('yargs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const options = yargs
  .alias('p', 'optimize-minimize')
  .alias('d', 'debug')
  .option('port', {
    default: '8080',
    type: 'string'
  })
  .argv;

const baseConfig = {
  entry: {
    'blacksmith': './shared/index.js',
  },

  output: {
    path: './dist',
    filename: '[name].min.js'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      }
    }
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
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
        loader: ExtractTextPlugin.extract('style', 'css?modules=1&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?sourceMap'),
        include: path.resolve(__dirname, '../../shared/scss/'),
        exclude: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/
      },
      {
        test: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap')
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../../shared/'),
        exclude: /(node_modules)/,
        loader: 'svg-react-loader'
      },
      {
        test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf|svg)$/,
        include: path.resolve(__dirname, '../../shared/'),
        exclude: /(node_modules)/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
    new ExtractTextPlugin(`[name].min.css`, {
      allowChunks: true
    })
  ]
};

if (options.optimizeMinimize) {
  baseConfig.devtool = 'source-map';
}

module.exports =  baseConfig;
