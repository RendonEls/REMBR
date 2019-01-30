const {Bookmark, User} = require("../models/User")


module.exports = {
    index: (req, res) => {
      res.render('index', { message: req.flash("signupMessage") })
    }
  }
  

  //can probably remove this entire page