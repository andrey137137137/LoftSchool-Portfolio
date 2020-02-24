"use strict";

// const $ = require("jquery"),
//   myVars = {
//     pathes: {
//       modules: "./modules",
//       components: "."
//     }
//   };

// $(document).ready(function() {
//   const preloader = require(`${myVars.pathes.modules}/preloader`),
//     parallax = require(`${myVars.pathes.modules}/parallax`);

//   preloader().init();
//   parallax().init();
// });

const regeneratorRuntime = require("regenerator-runtime");

console.log("Vue script included");

var form = new Vue({
  el: "#form",
  data: {
    username: "",
    password: ""
  },
  methods: {
    handle: async function() {
      let response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(this.$data)
      });
      let result = await response.json();
    }
  }
});
