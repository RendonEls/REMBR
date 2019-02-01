const express = require('express')
const hbs = require("hbs")
const flash = require("connect-flash")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const app = express()


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(express.static("public"));
app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

// app.listen(4000, () => {
//     console.log("app listening on port 4000")
//   })