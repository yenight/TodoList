import Vue from 'vue'
import App from './App.vue'
import store from './store'
import iview from 'iview'
import router from './router/router'

import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(iview)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
