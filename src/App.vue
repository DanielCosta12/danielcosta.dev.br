<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import Navbar from './components/Navbar.vue'
import { useI18n, initLang } from './translator'

const SITE_URL = 'https://danielcosta.dev.br'

const route = useRoute()
const { t, currentLang, pageMeta } = useI18n()

onMounted(initLang)

const meta = computed(() => pageMeta(route.name === 'CatchAll' ? 'NotFound' : route.name))
const isNotFound = computed(() => route.name === 'NotFound' || route.name === 'CatchAll')
const canonical = computed(() => SITE_URL + route.path)

useHead({
  htmlAttrs: { lang: () => (currentLang.value === 'pt' ? 'pt-BR' : 'en') },
  title: () => meta.value.title,
  meta: [
    { name: 'description', content: () => meta.value.description },
    { name: 'robots', content: () => (isNotFound.value ? 'noindex' : 'index, follow') },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Daniel Costa' },
    { property: 'og:locale', content: () => (currentLang.value === 'pt' ? 'pt_BR' : 'en_US') },
    { property: 'og:title', content: () => meta.value.title },
    { property: 'og:description', content: () => meta.value.description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: `${SITE_URL}/og-image.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Daniel Costa — Desenvolvedor & Analista de Sistemas' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => meta.value.title },
    { name: 'twitter:description', content: () => meta.value.description },
    { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }
  ],
  link: computed(() => (isNotFound.value ? [] : [{ rel: 'canonical', href: canonical.value }]))
})
</script>

<template>
  <div class="app-container">
    <Navbar />
    <main class="app-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <p v-if="route.name === 'Home'">{{ t('hostedOn') }}</p>
      <p>© {{ new Date().getFullYear() }} Daniel Costa — {{ t('copyright') }}</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.app-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-footer {
  margin-top: 4rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
}

.site-footer p {
  margin: 0.25rem 0;
}

/* Transições de página */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
