
const {User, Bookmark} = require("../models/User")
const passport = require("passport");

module.exports = {
    show: (req, res) => {
      res.send("you made it")
      // User.findOne({ _id: req.params.id })
      //   .populate({
      //     path: "bookmarks",
      //     options: { limit: 5, sort: { createdAt: -1 } }
      //   })
      //   .then(user => {
      //     res.render("/user/show", { user });
      //   });
    },
    login: (req, res) => {
      res.render("user/login", { message: req.flash("loginMessage") });
    },
    createLogin: (req, res) => {
      // let newName = ""

      //   User.findOne({"email": req.body.email }).then(user => {
      //     newName = user
      //     return newName
        // })
        // res.redirect(`/user/show/${newName._id}`)

      const login = passport.authenticate("local-login", {
        successRedirect: `/user/new/:id`,  //user/show 
        failureRedirect: "/user/login",
        failureFlash: true
      });
  
      return login(req, res, next);

      //I need the user id to be fed through to the url path id: = user id


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

    updateBookmark: (req, res) => {
      res.render("bookmark/:id")
      console.log('new bookmark update')
      User.find({_id: req.params.id }).then(hi => {
        hi.bookmark.push(
          req.body
        )
      }
      )
    }
  };


  //add update and delete methods for user