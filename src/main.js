import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueMeta from 'vue-meta'
import vClickOutside from 'v-click-outside'
import './registerServiceWorker'

Vue.use(vClickOutside)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
