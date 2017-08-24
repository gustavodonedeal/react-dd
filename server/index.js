require('babel-polyfill');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const webpackConfig = require('./webpackConfig');
const publicPath = webpackConfig.client.output.publicPath;
const outputPath = webpackConfig.client.output.path;

const initDevelopmentServer = () => {
  return new Promise((resolve, reject) => {
    const app = express();
    const multiCompiler = webpack([webpackConfig.client, webpackConfig.server]);
    const [ clientCompiler ] = multiCompiler.compilers;
    app.use(webpackDevMiddleware(multiCompiler, { publicPath }));
    app.use(webpackHotMiddleware(clientCompiler));
    app.use(webpackHotServerMiddleware(multiCompiler, { serverRendererOptions: { outputPath }}));
    multiCompiler.plugin('done', () => resolve(app));
  });
};

const startServer = async () => {
  const app = await initDevelopmentServer();
  app.listen(4002, () => console.log(`✌️ Application listening on port 4002.`));  
};

startServer();