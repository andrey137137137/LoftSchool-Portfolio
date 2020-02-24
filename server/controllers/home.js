module.exports.index = function(req, res) {
  const sendObj = {
    title: "Главная страница",
    msg: req.query.msg,
    session: req.session
  };
  res.render("pages/index", Object.assign({}, sendObj));
};
