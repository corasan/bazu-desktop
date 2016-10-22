var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    './dist/styles.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `http://localhost:3000/`
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }    ],
    query: {
      presets: ['react', 'es2015', 'stage-0']
    }
  }
};
