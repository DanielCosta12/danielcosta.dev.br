import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Daniel Costa | Software Engineer' }
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: 'Sobre Mim | Daniel Costa' }
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: { title: 'Projetos | Daniel Costa' }
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue'),
    meta: { title: 'Meu Setup | Daniel Costa' }
  },
  {
    path: '/homelab',
    name: 'Homelab',
    component: () => import('../views/Homelab.vue'),
    meta: { title: 'Meu Homelab | Daniel Costa' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Daniel Costa'
  next()
})

export default router
