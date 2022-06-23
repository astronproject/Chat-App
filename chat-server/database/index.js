const mongoose = require('mongoose')

const URL =
  'mongodb+srv://octavio:octavio123@cluster0.haet0.mongodb.net/chatApp?retryWrites=true&w=majority'

mongoose.connect(URL)

module.exports = mongoose
