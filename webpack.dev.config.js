const webpack = require('webpack');
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/app.js')
  ],
  output: {
    path: path.join(__dirname, '/app/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};