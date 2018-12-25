// const http = require("request");
const axios = require("axios");
// const config = require("../config");

module.exports.index = function(req, res) {
  // const requestOptions = {
  //   url: `${config.server.protocol}://${config.server.host}:${
  //     config.server.port
  //   }/db/post`,
  //   method: "GET",
  //   json: {}
  // };
  const sendObj = {
    title: "My Blog"
    // msg: req.query.msg,
  };

  // http(requestOptions, function(error, response, body) {
  //   if (error) {
  //     console.log(error);
  //   }
  //   res.render("pages/blog", Object.assign({}, sendObj, body));
  // });

  axios.get(`post`).then(response => {
    res.render("pages/blog", Object.assign({}, sendObj, response.data));
  });
};
