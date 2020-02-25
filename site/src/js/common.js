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

// const regeneratorRuntime = require("regenerator-runtime");
const axios = require("axios");
const myConfig = require("./../../../server/config");

axios.interceptors.request.use(
  config => {
    config.baseURL = `${myConfig.server.protocol}://${myConfig.server.host}:${myConfig.server.port}/`;
    console.log(config.baseURL);
    config.timeout = 5000;
    config.headers = { "Content-Type": "application/json" };
    return config;
  },
  error => {
    console.log(error.response.status);
    return Promise.reject();
  }
);

console.log("Vue script included");

const form = new Vue({
  el: "#form",
  data: {
    username: "",
    password: ""
  },
  methods: {
    // handle: async function() {
    //   let response = await fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8"
    //     },
    //     body: JSON.stringify(this.$data)
    //   });
    //   let result = await response.json();
    // },
    handle() {
      axios.post("/login", this.$data).then(res => {
        console.log(res.data);
      });
    }
  }
});
