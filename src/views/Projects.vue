<script setup>
import { onMounted, computed } from 'vue';
import { useI18n } from '../translator';
import { useProfile } from '../store/profile';

const { t } = useI18n();
const { translatedData, loading, error, loadProfile } = useProfile();

onMounted(loadProfile);

const projects = computed(() => {
  return translatedData.value?.projects || [];
});
</script>

<template>
  <div class="projects-page">
    <h1 class="title">{{ t('projectsTitle') }}</h1>
    
    <div v-if="projects.length > 0" class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <h3>{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        
        <div v-if="project.skills" class="skills-container">
          <span v-for="skill in project.skills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>

        <div class="card-footer">
          <a v-if="project.link !== '#'" :href="project.link" target="_blank" class="project-link">
            {{ project.linkText }} <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <span v-else class="project-link-static">
            {{ project.linkText }}
          </span>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="loading">{{ error }}</div>
    <div v-else-if="loading" class="loading">{{ t('loading') }}</div>

    <router-link to="/" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> {{ t('backToHome') }}
    </router-link>
  </div>
</template>

<style scoped>
.projects-page {
  text-align: center;
  margin-top: 2rem;
  padding: 0 1.5rem;
  max-width: 1000px;
  width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #ffffff, #a1a1aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  text-align: left;
}

.project-card {
  background-color: #0a0a0a;
  border: 1px solid #1f1f23;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: #7c3aed;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.1);
}

.project-card h3 {
  color: #7c3aed; /* Cor roxa igual ao h2 do setup */
  font-size: 1.15rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.description {
  color: #d4d4d8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: flex-start;
}

.skill-tag {
  background-color: #111111;
  color: #a1a1aa;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  border: 1px solid #1f1f23;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  color: #ffffff;
  border-color: #7c3aed;
}

.card-footer {
  margin-top: auto;
}

.project-link {
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #a78bfa;
}

.project-link-static {
  color: #52525b;
  font-weight: 600;
  font-size: 0.9rem;
}

.loading {
  color: #a1a1aa;
  margin: 2rem 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.back-link:hover {
  transform: translateX(-5px);
  color: #a78bfa;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
