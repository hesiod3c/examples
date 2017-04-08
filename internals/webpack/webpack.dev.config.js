const webpack = require('webpack');
const yargs = require('yargs');
const path = require('path');
const autoprefixer = require('autoprefixer');
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
        loader: 'eslint-loader'
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
        loader: 'style!css?modules=1&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?sourceMap',
        include: path.resolve(__dirname, '../../shared/scss/'),
        exclude: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/
      },
      {
        test: /(table.scss|autocomplete.scss|tags-input.scss|datetime-picker.scss)/,
        loader: 'style!css!postcss!sass?sourceMap'
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader'
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    })
  ]
};

if (options.optimizeMinimize) {
  baseConfig.devtool = 'source-map';
}

module.exports =  baseConfig;
