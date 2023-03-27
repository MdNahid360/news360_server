const express = require('express')
const app = express()
const port = 8000
const category = require('./data/category.json')
const news = require('./data/news.json')
const cors = require('cors');


app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/new-category', (req, res)=>{
    res.send(category)
});

app.get('/news/:id', (req, res)=>{
  const nsId = req.params;
  const findNews = news.find(nws => nws._id === nsId.id);
  res.send(findNews )
})

app.get('/category/:id', (req, res)=>{
  const ctId = req.params.id;
    if (ctId === "08") {
      res.send(news)
    }else{
      const cNews = news.filter(ns => ns.category_id === ctId);
      res.send(cNews);
    }
})

app.get('/news', (req, res)=>{
  res.send(news)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})