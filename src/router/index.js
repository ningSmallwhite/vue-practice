import Vue from 'vue'
import VueRouter from 'vue-router'
import VforView from '../views/VforView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VforView',
    component: VforView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/onclick',
    name: 'onclick',
    component: () => import('../views/OnclickView.vue')
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: () => import('../views/ParentComponent.vue')
  },
  {
    path: '/PropsView',
    name: 'PropsView',
    component: () => import('../views/PropsView.vue')
  },
  {
    path: '/SlotView',
    name: 'SlotView',
    component: () => import('../views/SlotView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
