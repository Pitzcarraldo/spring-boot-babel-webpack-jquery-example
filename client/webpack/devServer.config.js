const webpack = require('webpack');
const path = require('path');
const context = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'inline-source-map',
  context: context,
  entry: {
    "app": [
      'webpack-hot-middleware/client',
      path.join(context, 'src', 'app')
    ]
  },
  output: {
    path: path.join(context, '..', 'src', 'main', 'resources', 'static', 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ],
    postLoaders: [ {
      test: /\.js$/,
      loaders: [ 'es3ify' ]
    } ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
