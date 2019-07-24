import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import iview from 'iview'
import router from './router/router'
import elementUI from 'element-ui'

// import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(elementUI)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
