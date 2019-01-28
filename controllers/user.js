
const User = require("../models/User")
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      User.findOne({ _id: req.params.id })
        .populate({
          path: "posts",
          options: { limit: 5, sort: { createdAt: -1 } }
        })
        .then(user => {
          res.render("user/show", { user });
        });
    },
    login: (req, res) => {
      res.render("user/login", { message: req.flash("loginMessage") });
    },
    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/",
        failureRedirect: "user/login",
        failureFlash: true
      });
  
      return login(req, res);
    },
    signUp: (req, res) => {
      res.render("user/signup", { message: req.flash("signupMessage") });
    },
    createSignUp: (req, res, next) => {
      //create new document in users collection from signup form
      
      const signupStrategy = passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "user/signup",
        failureFlash: true
      });
  
      return signupStrategy(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect("/");
    }
  };
