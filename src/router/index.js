import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/homePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/portfolio/:id',
    name: 'DetailPage',
    component: () => import('@/views/portfolioDetailPage.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
