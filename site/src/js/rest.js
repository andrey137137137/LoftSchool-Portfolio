"use strict";

// const $ = require("jquery"),
//   myVars = require("./common");

module.exports = myVars;

$(document).ready(function() {
  const menuChecker = require(`${myVars.pathes.modules}/menu-checker`),;

  menuChecker().init();
});
