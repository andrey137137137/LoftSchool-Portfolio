const $ = require("jquery");
const { modules } = require("./pathes");

$(document).ready(function() {
  const slider = require(`${modules}/slider`);
  const formValidator = require(`${modules}/form-validator`);
  slider().init();
  formValidator().init("login_form");
});
