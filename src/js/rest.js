const $ = require("jquery");
const { modules } = require("./pathes");

$(document).ready(function() {
  const menuChecker = require(`${modules}/menu-checker`);
  menuChecker().init();
});
