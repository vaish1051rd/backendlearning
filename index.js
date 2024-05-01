require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('vaishnavidotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>hey you are doing fine </h1>')
})

app.get('/vaishnavi',(req,res) => {
    res.send('<h2>hii vaishnavi </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})