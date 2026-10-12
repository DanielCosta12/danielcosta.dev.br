<script setup>
import { useI18n } from '../translator'

const { currentLang, t, toggleLang } = useI18n()

const links = [
  { to: '/', key: 'navHome' },
  { to: '/sobre', key: 'navAbout' },
  { to: '/projetos', key: 'navProjects' },
  { to: '/setup', key: 'navSetup' },
  { to: '/homelab', key: 'navHomelab' }
]
</script>

<template>
  <nav class="main-nav">
    <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">
      {{ t(link.key) }}
    </router-link>

    <button type="button" class="lang-switch" :aria-label="t('langSwitch')" @click="toggleLang">
      {{ currentLang === 'pt' ? 'EN' : 'PT' }}
    </button>
  </nav>
</template>

<style scoped>
.main-nav {
  margin: 0 0 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  width: 100%;
}

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--text);
}

/* exact-active: a Home não fica marcada em todas as páginas */
.nav-link.router-link-exact-active {
  color: var(--accent-text);
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 2px;
}

.lang-switch {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  font-size: 0.75rem;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.lang-switch:hover {
  border-color: var(--accent);
  color: var(--text);
}

@media (max-width: 480px) {
  .main-nav {
    gap: 0.25rem 1rem;
    margin-bottom: 2rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }
}
</style>
