const { User, Bookmark, Note } = require("../models/User");
const passport = require("passport");

module.exports = {
  show: (req, res) => {
    User.findOne(req.user).then(user => res.render("user/show", { user }));
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
  createBookmark: (req, res) => {
    User.findOne({})
    .then(result => res.render("user/newBookmark", { result }));
  },
  NewBookmark: (req, res) => {
    User.findById(req.user._id).then(user => {
      Bookmark.create({
        title: req.body.title,
        url: req.body.url,
        text: req.body.text
      })
        .then(newBookmark => {
        user.bookmark.push(newBookmark);
        user.save().then(()=> res.redirect("/user/show")
        );
      });
    });
  },
  ShowUpdate: (req, res) => {
    res.render('user/updateBookmark', {id: req.params.id})  //if this doesn't work try req.params.bookmark.id
  },
  UpdateBookmark: (req, res) => {
    User.findOneAndUpdate(
      {"_id": req.user._id, "bookmark._id": req.params.id},
      { "$set": {
          "bookmark.$.title": req.body.title,
          "bookmark.$.url": req.body.url,
          "bookmark.$.text": req.body.text
        },
      },{new: true}
    ).then(() => res.redirect('/user/show'))
  },
  DeleteBookmark: (req, res) => {
    User.findById(req.user._id)
    .then((user) => {
      user.bookmark.id(req.params.id).remove()
      user.save()
      res.redirect('/user/show')
  })
  },
  newNote:  (req, res) => {
    User.findOne({})
    .then(result => res.render("user/newNote", { result }));
  },
  createNote: (req, res) => {
    User.findById(req.user._id).then(user => {
      Note.create({
        title: req.body.title,
        note: req.body.note,
      })
        .then(addNote => {
        user.note.push(addNote);
        user.save().then(()=> res.redirect("/user/show")
        );
      });
    });
  }
 
}