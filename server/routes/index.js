const express = require("express");
const waterfall = require("async/waterfall");
const mongoose = require("mongoose");
const User = mongoose.model("user");
const router = express.Router();

const ctrlHome = require("../controllers/home");
const ctrlWorks = require("../controllers/works");
const ctrlAbout = require("../controllers/about");
const ctrlBlog = require("../controllers/blog");
const ctrlAdmin = require("../controllers/admin");

router.get("/", ctrlHome.index);
// router.get("/", ctrlHome.login);
// router.post("/", ctrlHome.auth);

router.get("/works", ctrlWorks.index);

router.post("/mail", ctrlWorks.sendEmail);

router.get("/about", ctrlAbout.index);

router.get("/blog", ctrlBlog.index);
// router.post("/blog", ctrlBlog.insertPost);
// router.put("/blog/:id", ctrlBlog.updatePost);
// router.delete("/blog/:id", ctrlBlog.deletePost);

router.post("/login", (req, res, next) => {
  console.log(req.session);
  console.log(req.body);

  if (req.session.user) {
    return res.send(req.session.user);
  }

  const { username, password } = req.body;

  waterfall(
    [
      callback => {
        console.log(username);
        User.findOne({ username }, callback);
      },
      (user, callback) => {
        console.log(user);
        if (!user || !user.validatePassword(password)) {
          console.log(user);
          return res.status(400).send("Имя пользователя или пароль неверны");
        }

        callback(null, user);
      }
    ],
    (err, user) => {
      if (err) {
        next(err);
      }

      req.session.user = user._id;
      res.send(user);
    }
  );
});

router.get("/admin", ctrlAdmin.admin);

router.get("*", (req, res) => {
  res.status(404).json({ msg: "Not found", err: 404 });
});

module.exports = router;
