"use strict";

// const $ = require("jquery"),
//   myVars = require("./common");

$(document).ready(function() {
  const flip = require(`${myVars.pathes.modules}/flip`),
    formValidator = require(`${myVars.pathes.modules}/form-validator`);

  flip().init();
  formValidator().init("login_form");
});
