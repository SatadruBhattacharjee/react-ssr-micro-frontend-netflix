var webpack = require('webpack')

module.exports = {
  target:"web",
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8086/public/',
    filename: 'bundle.js'
  }
}
