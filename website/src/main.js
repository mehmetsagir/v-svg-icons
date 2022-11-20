import Vue from "vue";
import App from "./App.vue";
import icons from "v-svg-icons";

Vue.config.productionTip = false;
Vue.component("v-icon", icons);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
