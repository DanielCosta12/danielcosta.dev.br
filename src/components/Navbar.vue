<script setup>
import { useI18n } from '../translator'

const { currentLang, t, toggleLang } = useI18n()
</script>

<template>
  <nav class="main-nav">
    <router-link to="/" class="nav-link">{{ t('navHome') }}</router-link>
    <router-link to="/sobre" class="nav-link">{{ t('navAbout') }}</router-link>
    <router-link to="/projetos" class="nav-link">{{ t('navProjects') }}</router-link>
    <router-link to="/setup" class="nav-link">{{ t('navSetup') }}</router-link>
    <router-link to="/homelab" class="nav-link">{{ t('navHomelab') }}</router-link>
    
    <button @click="toggleLang" class="lang-switch">
      {{ currentLang === 'pt' ? 'EN' : 'PT' }}
    </button>
  </nav>
</template>

<style scoped>
.main-nav {
  margin: 1rem 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.nav-link {
  color: #52525b;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.router-link-active {
  color: #7c3aed;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #7c3aed, #db2777);
  border-radius: 2px;
}

.lang-switch {
  background: transparent;
  border: 1px solid #27272a;
  color: #a1a1aa;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.7rem;
  transition: all 0.2s ease;
}

.lang-switch:hover {
  border-color: #7c3aed;
  color: #ffffff;
}

@media (max-width: 480px) {
  .main-nav {
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
