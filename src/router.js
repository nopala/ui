import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cal from './views/Calendar.vue'
import isu from './views/isu.vue'
import lr from './views/list-rapat.vue'
import vc from './views/view-calendar.vue'
import User from './views/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/cal',
      name: 'cal',
      component: cal
    },
    {
      path: '/lr',
      name: 'lr',
      component: lr
    },
    {
      path: '/vc',
      name: 'vc',
      component: vc
    },
    {
      path: '/isu',
      name: 'isu',
      component: isu
    },
  ]
})
