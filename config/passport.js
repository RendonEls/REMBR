const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// const passport = require('passport')
// require('./config/passport')(passport)
// app.use(passport.initialize())
// app.use(passport.session())

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use( "local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        //find user by this email
        User.findOne({ 'local.email': email })        //local.email??
          .then(user => {
              //if user with email exists:
            if (user) {
              return callback(
                null,
                false,
                req.flash("signupMessage", "This email is already registered.")
              );
            } else {
                //there is no email registered
                //create new account
              let newUser = new User();
              newUser.email = email;
              newUser.password = newUser.encrypt(password);

              newUser.save(err => {
                if (err) throw err;
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, callback) {
        User.findOne({ username: username }, function(err, user) {
          if (err) return callback(err);

          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No user found")
            );
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Ooops, wrong password")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};
