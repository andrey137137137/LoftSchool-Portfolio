import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import about from "./modules/about/about.js";
import blog from "./modules/blog/blog.js";

const store = new Vuex.Store({
  modules: {
    about,
    blog
  }
});

export default store;
