const db = require("../models");
const Bookmark = db.bookmark;
const Diary = db.diary;
const Community = db.community;

// Create a new bookmark
exports.create = (req, res) => {
  // Create a community
  const bookmark = new Bookmark({
    communityid: req.body.communityid,
    date: req.body.date,
    username: req.body.username
  });

  // Save community in the database
  bookmark
  .save(bookmark)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while bookmarking."
      });
  });
};

// List of bookmark
exports.findAll = (req, res) => {
  Bookmark.find({
    communityid: req.body.communityid,
    username: req.body.username
  }).exec((err, bookmarks) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      let datelist = [];

      
      for (let i=0; i<bookmarks.length; i++) {
        datelist.push(bookmarks[i].date);

        if (i === bookmarks.length-1) {
          res.status(200).send({ bookmarklist: datelist });
        }
      }
    });
};

exports.findOne = (req, res) => {
  Diary.findOne({date: req.body.date})
    .exec((err, diary) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (diary) {
        
      }
    });
};