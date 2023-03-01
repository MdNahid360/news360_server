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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})