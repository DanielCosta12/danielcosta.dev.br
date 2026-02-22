<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useI18n } from './translator'

const { t } = useI18n()
</script>

<template>
  <div id="app-container">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <footer class="site-footer">
      <p>© {{ new Date().getFullYear() }} Daniel Costa — {{ t('copyright') }}</p>
    </footer>
  </div>
</template>

<style>
/* Estilos globais mantidos */
@import './style.css';

#app-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Transições de Página */
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

#app-container > .view-content,
#app-container > .about-page,
#app-container > .setup-page,
#app-container > .homelab-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-footer {
  margin-top: 5rem;
  padding-bottom: 2rem;
  color: #52525b;
  font-size: 0.85rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
}

body {
  padding-top: 2rem !important;
}
</style>
