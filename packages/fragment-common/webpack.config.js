var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8086/public/',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  }
}
