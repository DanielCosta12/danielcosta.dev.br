import Home from '../views/Home.vue'

// Títulos e descrições de cada página ficam em translator.js (meta.<name>)
export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'About', component: () => import('../views/About.vue') },
  { path: '/projetos', name: 'Projects', component: () => import('../views/Projects.vue') },
  { path: '/setup', name: 'Setup', component: () => import('../views/Setup.vue') },
  { path: '/homelab', name: 'Homelab', component: () => import('../views/Homelab.vue') },
  // '/404' é pré-renderizado e servido pelo nginx para qualquer endereço inexistente
  { path: '/404', name: 'NotFound', component: () => import('../views/NotFound.vue') },
  { path: '/:pathMatch(.*)*', name: 'CatchAll', component: () => import('../views/NotFound.vue') }
]

export const scrollBehavior = (to, from, savedPosition) => savedPosition || { top: 0 }
