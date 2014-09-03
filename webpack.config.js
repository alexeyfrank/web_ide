/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

module.exports = {
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: './src/scripts/<%= pkg.mainInput %>.js',

  stats: {
    colors: true,
    reasons: true
  },

  devServer: {
      publicPath: "/assets/",
      contentBase: "./dev"
  },

  externals: {
    'react': 'React',
    'react/bootstrap': 'ReactBootstrap',
    'lodash': '_',
    'jquery': 'JQuery'
  },

  resolve: {
    extensions: ['','.js','.jsx'],
    modulesDirectories: [ './src/scripts/' ],
    alias: {
      'ide': __dirname + '/src/scripts',
      'css': __dirname + '/src/styles',
      'img': __dirname + '/src/images'
    },
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.gif/,
      loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.png/,
      loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
      test: /\.jsx$/,
      loader: 'jsx-loader'
    }]
  }
};
