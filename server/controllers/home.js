module.exports.index = function(req, res) {
  const sendObj = {
    title: "Главная страница",
    msg: req.query.msg,
    visitNumber: req.session.visitNumber
  };
  res.render("pages/index", Object.assign({}, sendObj));
};
