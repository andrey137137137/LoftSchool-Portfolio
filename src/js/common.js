const $ = require("jquery");
$(document).ready(function() {
  const preloader = require("@modules/preloader");
  const parallax = require("@modules/parallax");
  preloader().init();
  parallax().init();
});
