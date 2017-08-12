const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.base.conf');

let entry = config.entry;
for (let key in entry) {
    let val = entry[key]
    entry[key] = ['webpack-hot-middleware/client?reload=true?http://127.0.0.1:3123/'].concat(val)
}
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler))

// Serve the files on port 3000.
app.listen(3123, function () {
  console.log('Example app listening on port 3123!\n');
});