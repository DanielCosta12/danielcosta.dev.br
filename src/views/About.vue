<script setup>
import { useI18n } from '../translator'
import { useProfile } from '../store/profile'

const { t } = useI18n()
const { translatedData } = useProfile()
</script>

<template>
  <div class="page">
    <h1 class="page-title">{{ t('aboutTitle') }}</h1>
    <div class="card">
      <p v-for="(paragraph, i) in translatedData.biography" :key="i" class="biography-text">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.biography-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 1.25rem;
}

.biography-text:last-child {
  margin-bottom: 0;
}

@media (max-width: 480px) {
  .biography-text {
    font-size: 1rem;
  }
}
</style>
