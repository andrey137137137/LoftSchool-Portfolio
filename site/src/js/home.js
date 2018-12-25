"use strict";

// Vue.component("parallax-item", {
//   props: ["index"],
//   template: `<li class="parallax__layer"><img class="parallax__img" :src="'img/parallax/layer_' + index + '.png'" /></li>`
// });

// var parallax = new Vue({
//   el: "#parallax"
// });

// const $ = require("jquery"),
//   myVars = require("./common");

$(document).ready(function() {
  const flip = require(`${myVars.pathes.modules}/flip`),
    formValidator = require(`${myVars.pathes.modules}/form-validator`);

  flip().init();
  formValidator().init("login_form");
});
