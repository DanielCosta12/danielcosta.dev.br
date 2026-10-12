<script setup>
import { useI18n } from '../translator'

const { t } = useI18n()

defineProps({
  skills: Array
})
</script>

<template>
  <section class="skills-section" aria-labelledby="skills-title">
    <h2 id="skills-title" class="skills-header">{{ t('skillsTitle') }}</h2>
    <ul class="tag-list skills-container">
      <li v-for="skill in skills" :key="skill" class="tag">{{ skill }}</li>
    </ul>
  </section>
</template>

<style scoped>
.skills-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.skills-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1.5rem;
  color: var(--text-subtle);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.skills-header::before,
.skills-header::after {
  content: "";
  height: 1px;
  flex-grow: 1;
  background-color: #27272a;
}

.skills-container {
  justify-content: center;
}
</style>
