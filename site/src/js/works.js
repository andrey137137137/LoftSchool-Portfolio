"use strict";

// const $ = require("jquery"),
//   myVars = require("./common");

$(document).ready(function() {
  const slider = require(`${myVars.pathes.modules}/slider`),
    formValidator = require(`${myVars.pathes.modules}/form-validator`);

  slider().init();
  formValidator().init("login_form");
});
