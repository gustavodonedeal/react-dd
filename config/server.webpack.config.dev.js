const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  name: 'server',
  target: 'node',
  entry: [
    path.resolve(__dirname, '../server/render.js')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server'),
    publicPath: '/static/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new WriteFilePlugin(),    
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
