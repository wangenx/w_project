import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '',
      component: () => import('@/components/home.vue'),
      children: [
        {
          path: '',
          name: 'Index1',
          component: () => import('@/components/views/index1.vue')
        },
        {
          path: 'index2',
          name: 'Index2',
          component: () => import('@/components/views/index2.vue')
        },
        {
          path: 'index3',
          name: 'Index3',
          component: () => import('@/components/views/index3.vue')
        },
        {
          path: 'index4',
          name: 'Index4',
          component: () => import('@/components/views/index4.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Index',
      component: () => import('@/components/login/index.vue')
    }
  ]
})
