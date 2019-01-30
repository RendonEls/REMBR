
const {User, Bookmark} = require("../models/User")
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      User.findOne({}).then(result => res.send(result._id))

    //This needs to display all data from User.bookmarks
    //Also needs to tie into show view

      // User.findOne({}).then(result => res.send(result))
      // res.send({ _id: req.params.id })
      // User.findOne({ _id: req.params.id })
      //   .populate("user.bookmark")
      //   //   {
      //   //   path: "user.bookmark",
      //   //   options: { limit: 5, sort: { createdAt: -1 } }
      //   // })
      //   .exec(function(err, user) {
      //     res.render("user/show", user);
      //   });
    },
    login: (req, res) => {
          res.render("user/login", { message: req.flash("loginMessage") });
    },
    createLogin: (req, res) => {
      const login = passport.authenticate("local-login", {
        successRedirect: "/user/show",  
        failureRedirect: "/user/login",
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
        failureRedirect: "/user/signup",
        failureFlash: true
      });
  
      return signupStrategy(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect("/");
    },
    update: (req, res) => {
      res.render("user/update", {message: req.flash("update here")})
    }
    //update user.bookmark function //also add route 
  };


  //add update and delete methods for user


  