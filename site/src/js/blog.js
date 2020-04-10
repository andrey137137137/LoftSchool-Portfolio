const $ = require("jquery");
const { modules } = require("./pathes");

$(document).ready(function() {
  const scrollMenu = require(`${modules}/scroll-menu`);
  scrollMenu().init();
});
