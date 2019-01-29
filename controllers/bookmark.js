const Bookmark = require("../models/Bookmark");

module.exports = {
//   show: (req, res) => {
//      Bookmark.findOne({_id: req.params.id})
//       .exec(function(err, bookmark) {
//        res.render("user/show", user);
//      })
//   },
  newBookmark: (req, res) => {
    res.render("bookmark/new");
    console.log('test newbookmark')
  },
  createBookmark: (req, res) => {
    console.log("is it hiting this function??")  
    Bookmark.create({
      title: req.body.bookmark.title,
      url: req.body.url,
      text: req.body.text
    }).then(create => {
        console.log("is it hiting this .then push function??")
      req.user.bookmarks.push(create);
        res.redirect('/')
      req.user.save(err => {
        res.redirect('/bookmark');
      });
    });
  },
//   update: (req, res) => {
//     let { content } = req.body;
//     Bookmark.findOne({ _id: req.params.id }).then(bookmark => {
//       bookmark.title.push({
//         title,
//         author: req.user._id
//       });
//       tweet.save(err => {
//         res.redirect(`/bookmark/${bookmark._id}`);
//       });
//     });
//   },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};
