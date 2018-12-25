"use strict";

const $ = require("jquery"),
  myVars = {
    pathes: {
      modules: "./modules",
      components: "."
    }
  };

// module.exports = myVars;

$(document).ready(function() {
  const preloader = require(`${myVars.pathes.modules}/preloader`),
    parallax = require(`${myVars.pathes.modules}/parallax`);

  // require("picturefill");
  preloader().init();
  parallax().init();
});
