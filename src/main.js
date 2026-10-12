import { ViteSSG } from 'vite-ssg'
import '@fontsource-variable/inter/wght.css'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(App, { routes, scrollBehavior })
