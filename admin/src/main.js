import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";
import axios from "axios";
import interceptor from "./../../server/helpers/interceptor";

interceptor(axios);

Vue.use(Vuelidate);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
