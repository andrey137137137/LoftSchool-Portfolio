const express = require("express");
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

router.get("/admin", ctrlAdmin.admin);

router.get("*", (req, res) => {
  res.status(404).json({ msg: "Not found", err: 404 });
});

module.exports = router;
