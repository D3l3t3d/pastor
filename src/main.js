import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import db from './assets/firebase_conf.js';

import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = true;
Vue.use(Vuetify, {
  theme:{
    primary: '#909090'
    }
});

Vue.prototype.$FireBase = db;

new Vue({
  el: '#app',
  components: { App },
  template: "<App/>",
  render: h => h(App)
}).$mount('#app')
