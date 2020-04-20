import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import autofocus from 'vue-autofocus-directive'
// Vue.directive('autofocus', autofocus)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
