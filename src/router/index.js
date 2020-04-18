import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Hans from '@/components/Hans'
import Jinlun from '@/components/Jinlun'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
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
