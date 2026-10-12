<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { useI18n } from '../translator'
import { useProfile } from '../store/profile'

const { t } = useI18n()
const { translatedData } = useProfile()
</script>

<template>
  <div class="page page--wide">
    <h1 class="page-title">{{ t('projectsTitle') }}</h1>

    <div class="projects-grid">
      <ProjectCard v-for="project in translatedData.projects" :key="project.title" :project="project" />
    </div>

    <h2 class="group-title">{{ t('contentTitle') }}</h2>
    <div class="projects-grid">
      <ProjectCard v-for="project in translatedData.content" :key="project.title" :project="project" />
    </div>
  </div>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.group-title {
  color: var(--text-muted);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 1rem 0 1.5rem;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
