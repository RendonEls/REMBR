const mongoose = require("../db/connection")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const User = new Schema({
    email: String,
    password: String,
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bookmark"
      }
    ]
  });


  User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
  
  module.exports = mongoose.model("User", User);
  