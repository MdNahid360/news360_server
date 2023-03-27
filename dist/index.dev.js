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
app.get('/news/:id', function (req, res) {
  var nsId = req.params;
  var findNews = news.find(function (nws) {
    return nws._id === nsId.id;
  });
  res.send(findNews);
});
app.get('/category/:id', function (req, res) {
  var ctId = req.params.id;

  if (ctId === "08") {
    res.send(news);
  } else {
    var cNews = news.filter(function (ns) {
      return ns.category_id === ctId;
    });
    res.send(cNews);
  }
});
app.get('/news', function (req, res) {
  res.send(news);
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});