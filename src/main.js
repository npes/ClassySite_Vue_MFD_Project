// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VeeValidate from 'vee-validate'
import VueCarousel from 'vue-carousel'
import Tabs from 'vue-tabs-component'

Vue.use(VeeValidate);
Vue.use(VueCarousel);
Vue.use(Tabs);
Vue.config.productionTip = false

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {

   },
  router,
  components: { App },
  template: '<App/>',
})
