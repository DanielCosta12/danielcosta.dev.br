import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue')
  },
  {
    path: '/homelab',
    name: 'Homelab',
    component: () => import('../views/Homelab.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
