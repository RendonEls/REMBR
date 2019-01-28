const { Bookmark } = require("../models/Bookmark");

module.exports = {
//   show: (req, res) => {
//      Bookmark.findOne({_id: req.params.id})
//       .populate("author comments.author")
//       .exec(function(err, tweet) {
//        res.render("bookmark/show", bookmark);
//      })
//   },
  new: (req, res) => {
    res.render("bookmark/new");
  },
  create: (req, res) => {
    Bookmark.create({
      title: req.body.title,
      url: req.body.url,
      text: req.body.text
    }).then(create => {
      req.user.bookmarks.push(create);
      req.user.save(err => {
        res.redirect(`/bookmark/`);
      });
    });
  },

};
