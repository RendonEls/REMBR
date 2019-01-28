const User = require("../models/User")
const passport = require("passport")

module.exports = {

createSignUp: (req, res) => {
    var signup = passport.authenticate('local-signup', {
      successRedirect : '/',
      failureRedirect : '/signup',
      failureFlash : true
    });
  
    return signup(req, res);
  }
}

