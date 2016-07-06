const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const context = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'source-map',
  context: context,
  entry: {
    "app": path.join(context, 'src', 'app')
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
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ],
    postLoaders: [ {
      test: /\.js$/,
      loaders: [ 'es3ify' ]
    } ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: true,
      minimize: true
    })
  ]
};
