const $ = require("jquery");
$(document).ready(function() {
  const menuChecker = require("@modules/menu-checker");
  menuChecker().init();
});
