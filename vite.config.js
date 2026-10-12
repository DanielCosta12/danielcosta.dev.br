import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { writeFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

const SITE_URL = 'https://danielcosta.dev.br'
// Páginas indexáveis (a /404 é gerada, mas fica fora do sitemap)
const sitemapRoutes = ['/', '/sobre', '/projetos', '/setup', '/homelab']

const writeSitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = sitemapRoutes
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  writeFileSync(fileURLToPath(new URL('./dist/sitemap.xml', import.meta.url)), xml)
}

export default defineConfig({
  plugins: [
    vue(),
    // Ícones SVG embutidos no bundle (só os usados), sem Font Awesome
    Icons({ compiler: 'vue3' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    // /sobre -> dist/sobre/index.html
    dirStyle: 'nested',
    formatting: 'minify',
    onFinished: writeSitemap
  }
})
