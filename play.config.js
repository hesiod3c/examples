const path = require('path');

module.exports = {
  entry: {
    app: 'internals/play/app.js',
    preview: 'internals/play/preview.js'
  },
  dist: 'dist-play',
  port: 9001,
  // compile Vue template
  templateCompiler: true,
  webpack: {
    resolve: {
      modules: [
        path.resolve('../../shared')
      ]
    }
  },
  hmrEntry: ['preview'],
  // no code split for 3rd party libraries
  vendor: false,
  html: [{
    chunks: ['app'],
    filename: 'index.html'
  }, {
    chunks: ['preview'],
    filename: 'preview.html'
  }]
}
