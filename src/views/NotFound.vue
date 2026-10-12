<script setup>
import IconHouse from '~icons/lucide/house'
import { useI18n } from '../translator'

const { t } = useI18n()
</script>

<template>
  <div class="page">
    <p class="code" aria-hidden="true">404</p>
    <h1 class="page-title">{{ t('notFoundTitle') }}</h1>
    <p class="text">{{ t('notFoundText') }}</p>
    <router-link to="/" class="home-link">
      <IconHouse class="icon" aria-hidden="true" /> {{ t('backToHome') }}
    </router-link>
  </div>
</template>

<style scoped>
.code {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin: 0 0 1rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-title {
  margin-bottom: 1rem;
}

.text {
  color: var(--text-muted);
  margin: 0 0 2rem;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-text);
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.home-link:hover {
  border-color: var(--accent);
  color: var(--accent-text-hover);
}
</style>
