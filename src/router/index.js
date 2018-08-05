import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果设置了锚点就要用下面的代码，不设置刷新后就会不现实当前页面了
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
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
      }, {
        path: '/shop',
        name: 'shop',
        component: () => import('@/pages/shop/shop')
      }, {
        path: '/show',
        name: 'show',
        component: () => import('@/pages/show/show')
      }]
    }
  ]
})
