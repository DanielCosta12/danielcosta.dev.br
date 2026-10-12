<script setup>
import IconExternal from '~icons/lucide/arrow-up-right'

defineProps({
  project: Object
})
</script>

<template>
  <article class="project-card">
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="description">{{ project.description }}</p>

    <ul v-if="project.skills" class="tag-list project-skills">
      <li v-for="skill in project.skills" :key="skill" class="tag">{{ skill }}</li>
    </ul>

    <div class="card-footer">
      <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
        {{ project.linkText }} <IconExternal class="icon" aria-hidden="true" />
      </a>
      <span v-else class="project-link-static">{{ project.linkText }}</span>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.1);
}

.project-title {
  color: var(--accent-text);
  font-size: 1.15rem;
  margin: 0 0 1rem;
  line-height: 1.4;
}

.description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1.5rem;
  flex-grow: 1;
}

.project-skills {
  margin-bottom: 1.5rem;
}

.project-skills .tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
}

.card-footer {
  margin-top: auto;
}

.project-link {
  color: var(--accent-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: var(--accent-text-hover);
  text-decoration: underline;
}

.project-link-static {
  color: var(--text-subtle);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
