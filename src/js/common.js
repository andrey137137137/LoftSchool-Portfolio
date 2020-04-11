// require("module-alias/register");

const $ = require("jquery");
const { modules } = require("./pathes");

$(document).ready(function() {
  const preloader = require(`${modules}/preloader`);
  const parallax = require(`${modules}/parallax`);
  preloader().init();
  parallax().init();
});
