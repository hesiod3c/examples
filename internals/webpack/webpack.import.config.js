const path = require('path');
const config = {
  module: {
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
        exclude: [
          path.resolve(__dirname, '../../shared/scss/06-components/table.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/autocomplete.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/tags-input.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/datetime-picker.scss')
        ]
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules=1&importLoaders=1&localIdentName=[local]!postcss!sass?sourceMap',
        include: [
          path.resolve(__dirname, '../../shared/scss/06-components/table.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/autocomplete.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/tags-input.scss'),
          path.resolve(__dirname, '../../shared/scss/06-components/datetime-picker.scss')
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader?jsx=1',
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, '../../shared/')
      },
      {
        test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf|svg)$/,
        include: path.resolve(__dirname, '../../shared/'),
        exclude: /(node_modules)/,
        loader: "file-loader"
      }
    ]
  }
};

module.exports = config;
