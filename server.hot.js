// require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.hot');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const compiler = webpack(config);
const port = process.env.PORT || 3000;

const wdm = webpackDevMiddleware(compiler, {
  // path: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
});

app.set('view engine', 'ejs');
app.set('views', '.');

app.use(wdm);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(port, (error) => {
  if(error) {
    console.log('Error with server.', error);
  } else {
    console.log('Listening to port', port);
  }
});

//
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config.hot');
//
// // Dev server with hot reload enabled
// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:3000');
// });
