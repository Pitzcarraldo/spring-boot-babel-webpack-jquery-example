'use strict';
const Express = require('express');
const proxy = require('express-http-proxy');
const url = require('url');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./devServer.config');

const compiler = webpack(webpackConfig);
const server = new Express();

server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: webpackConfig.output.publicPath
}));
server.use(webpackHotMiddleware(compiler));
server.use(proxy(`localhost:8080`, {
  forwardPath: function (req) {
    return url.parse(req.url).path;
  }
}));

var listener = server.listen(3000, function () {
  let host = listener.address().address;
  let port = listener.address().port;
  console.log('Webpack Dev Server listening at http://%s:%s', host, port);
});
