"use strict";

var express = require('express');

var app = express();
var port = 8000;

var category = require('./data/category.json');

var news = require('./data/news.json');

var cors = require('cors');

app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/new-category', function (req, res) {
  res.send(category);
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});