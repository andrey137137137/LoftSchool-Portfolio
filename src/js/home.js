const $ = require("jquery");
$(document).ready(function() {
  const flip = require("@modules/flip");
  const formValidator = require("@modules/form-validator");
  flip().init();
  formValidator().init("login_form");
});
