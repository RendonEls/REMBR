const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Bookmark = new Schema ({
    title: String,
    url: String,
    text: String,
    createdAt: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Bookmark", Bookmark)  //DOES THIS NEED TO BE {}