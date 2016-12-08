const {resolve} = require('path');
const webpackValidator = require('webpack-validator');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
//Backend Apps with Webpack (Part I) boilerplate code
var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = env => {
  const {ifProd, ifNotProd, ifDev} = getIfUtils(env);

  return webpackValidator({
      entry: {
        app: './client/javascripts/bootstrap.js'
      },
      target: 'node',
      output: {
        path: resolve('build'),
        publicPath: '/build/',
        filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
        pathinfo: ifNotProd() //so in dev i can know what files to reference
      },
      externals: ifDev(nodeModules), //if dev make sure webpack doesn't touch node_modules
      devtool: ifProd('source-map', 'eval'), //in prod don't have source map inline
      module: {
        loaders: [
          {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
            })
          },
          {test: /index.pug$/, loader: 'pug-loader', exclude: /node_modules/}
        ]
      },
      plugins: removeEmpty([
        new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
        ifProd(new InlineManifestWebpackPlugin()),
        ifProd(new webpack.optimize.CommonsChunkPlugin({ //don't need chunking for dev or test
          name: ['vendor', 'manifest']
        })),
        new HtmlWebpackPlugin({
          template: './server/views/index.pug'
        })
      ])
    });
}