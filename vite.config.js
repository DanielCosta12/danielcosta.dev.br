import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import { fileURLToPath, URL } from 'node:url'

const routes = ['/sobre', '/projetos', '/setup', '/homelab']

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://danielcosta.dev.br',
      dynamicRoutes: routes,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
