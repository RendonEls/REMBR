const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/rembr", { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose

