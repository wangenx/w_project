import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home.vue'),
      children: [
        {
          path: 'index1',
          name: 'Index1',
          component: () => import('@/components/view/index1.vue')
        },
        {
          path: 'index2',
          name: 'Index2',
          component: () => import('@/components/view/index2.vue')
        },
        {
          path: 'index3',
          name: 'Index3',
          component: () => import('@/components/view/index3.vue')
        },
        {
          path: 'index4',
          name: 'Index4',
          component: () => import('@/components/view/index4.vue')
        }
      ]
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/login/index.vue')
    }
  ]
})
