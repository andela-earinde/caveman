const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.config');

const path = require('path');

const data = require('./venues.json');

const app = express();

const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const updates = {};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/venue/:venueID', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/venues', (req, res) => {
  res.json(data.map(d => Object.assign({}, d, updates[d.id] || {})));
});

app.put('/api/venues/:id', (req, res) => {
  updates[req.params.id] = Object.assign({}, updates[req.params.id] || {}, req.body);
  res.json({ok: true});
});

const server = app.listen(3042, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Backend is running at http://%s:%s', host, port);
});
