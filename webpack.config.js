module.exports = {
  devtool: 'source-map',
  entry: [
    './app/js/app.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    path: './app/js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: ['babel'], exclude: /node_modules/}
    ]
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api/*': 'http://localhost:3042'
    }
  }
};