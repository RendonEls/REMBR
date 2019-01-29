const LocalStrategy = require("passport-local").Strategy;
const {User} = require("../models/User");


module.exports = function(passport) {
    //keeps user logged in by serializing ID to save it to the session
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });
  //deserialize info to check if info matches the DB
  passport.deserializeUser(function(id, callback) {
        //receive value stored in cookie 
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
        User.findOne({ 'email': email })
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
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        User.findOne({ 'email': email }, function(err, user) {
          if (err) return callback(err);

          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No email found")
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
