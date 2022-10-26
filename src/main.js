import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import AppButton from './components/AppButton'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.component('AppButton', AppButton)
Vue.use(PiniaVuePlugin)

Vue.config.productionTip = false
const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
