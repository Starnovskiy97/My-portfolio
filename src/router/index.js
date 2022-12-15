import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/homePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/portfolio/:id',
    name: 'detailPage',
    component: () => import('@/pages/portfolioDetailPage.vue')
  },
  {
    path: '/error',
    name: 'errorPage',
    component: () => import('@/pages/errorPage.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'errorPage'
    }
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
