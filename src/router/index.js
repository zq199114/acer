import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: () => import('@/pages/home/home'),
      children: [{
        path: '',
        redirect: '/index'
      }, {
        path: '/index',
        name: 'index',
        component: () => import('@/pages/home/components/content')
      }, {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/home/components/news')
      }]
    }
  ]
})
