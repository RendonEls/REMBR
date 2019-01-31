const mongoose = require("../db/connection")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const Note = new Schema ({
  title: String,
  note: String
})

const Bookmark = new Schema ({
  title: String,
  url: String,
  text: String,
  createdAt: {
      type:Date,
      default: Date.now()
  }
})

const User = new Schema({
    email: String,
    password: String,
    bookmark: [Bookmark],
    // note: [Note]
  });



  User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  module.exports = {
    User: mongoose.model("User", User),
    Bookmark: mongoose.model("Bookmark", Bookmark)
  }
