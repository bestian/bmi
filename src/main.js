import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '@/components/Start'
import Hans from '@/components/Hans'
import Jinlun from '@/components/Jinlun'
import Example from '@/components/Example'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import autofocus from 'vue-autofocus-directive'

Vue.directive('autofocus', autofocus)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/h',
      name: 'Hans',
      component: Hans
    },
    {
      path: '/j',
      name: 'Jinlun',
      component: Jinlun
    },
    {
      path: '/e',
      name: 'Example',
      component: Example
    }
  ]
})

Vue.use(VueRouter)

Vue.use(VueGtag, {
  config: { id: 'UA-26178243-17' }
}, router)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
