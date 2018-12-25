const axios = require("axios");

module.exports.index = function(req, res) {
  const sendObj = {
    title: "About Me"
    // msg: req.query.msg,
  };

  axios.get(`skill`).then(response => {
    res.render("pages/about", Object.assign({}, sendObj, response.data));
  });
};
