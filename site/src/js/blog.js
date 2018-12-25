"use strict";

// const $ = require("jquery"),
//   myVars = require("./common");

$(document).ready(function() {
  const scrollMenu = require(`${myVars.pathes.modules}/scroll-menu`);

  scrollMenu().init();
});
