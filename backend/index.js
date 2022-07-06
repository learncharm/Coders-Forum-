const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json());   // this middleware is used for req.body

// available routes

app.use('/api/category',require('./routes/category'));

app.listen(port, () => {
  console.log(`Coders-Forum app listening on port ${port}`)
})
