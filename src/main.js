import Vue from "vue";
import App from "./App.vue";
import TaillWind from "./plugins/index.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App, TaillWind),
}).$mount("#app");
