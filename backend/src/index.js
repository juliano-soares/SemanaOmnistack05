const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect(
  "mongodb+srv://goweek:1234@cluster0-uad05.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.use(cors())
app.use(express.json())
app.use(require('./routes'))
  app.use((req, res, next) => {
  req.io = io
  return next()
})

app.listen(3000, () => {
  console.log('Server on start on 3000');
}) 