module.exports = {
  devtool: 'source-map',
  entry: [
    './app/js/app.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: './app/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    ]
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api/*': 'http://localhost:3042'
    }
  }
};