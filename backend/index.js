const connectToMongo = require("./db");
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

// available routes

app.use('/api/category',require('./routes/category'));

app.listen(port, () => {
  console.log(`Coders-Forum app listening on port ${port}`)
})
