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
          name: 'Infor',
          component: () => import('@/components/views/infor.vue')
        },
        {
          path: 'stream',
          name: 'Stream',
          component: () => import('@/components/views/stream.vue')
        },
        {
          path: 'personnel',
          name: 'Personnel',
          component: () => import('@/components/views/personnel.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/login/index.vue')
    }
  ]
})
