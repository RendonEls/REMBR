const {Bookmark} = require("../models/Bookmark")


module.exports = {
    index: (req, res) => {
      res.render('index', { message: req.flash("signupMessage") })
    }
  }
  