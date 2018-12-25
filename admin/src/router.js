import Vue from "vue";
import VueRouter from "vue-router";

import About from "./components/About";
import Blog from "./components/Blog";
import PageCmp from "./components/PageCmp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    component: About
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/page/:pageId",
    component: PageCmp,
    props: true
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
