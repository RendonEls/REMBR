// const { Bookmark } = require("../models/Bookmark");

// module.exports = {
//   show: (req, res) => {
//      Bookmark.findOne({_id: req.params.id})
//       .populate("author comments.author")
//       .exec(function(err, tweet) {
//        res.render("tweet/show", tweet);
//      })
//   },
//   new: (req, res) => {
//     res.render("tweet/new");
//   },
//   create: (req, res) => {
//     Bookmark.create({
//       content: req.body.tweet.content,
//       author: req.user._id
//     }).then(tweet => {
//       req.user.tweets.push(tweet);
//       req.user.save(err => {
//         res.redirect(`/tweet/${tweet._id}`);
//       });
//     });
//   },
//   update: (req, res) => {
//     let { content } = req.body;
//     Tweet.findOne({ _id: req.params.id }).then(tweet => {
//       tweet.comments.push({
//         content,
//         author: req.user._id
//       });
//       tweet.save(err => {
//         res.redirect(`/tweet/${tweet._id}`);
//       });
//     });
//   },
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };
