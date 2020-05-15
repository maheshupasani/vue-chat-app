import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueChatScroll from 'vue-chat-scroll';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Globally required components
import AppHeader from './views/layout/AppHeader.vue';
import AppFooter from './views/layout/AppFooter.vue';
Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);
Vue.use(VueChatScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
