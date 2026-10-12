<script setup>
import IconLinkedin from '~icons/simple-icons/linkedin'
import IconGithub from '~icons/simple-icons/github'
import IconMail from '~icons/lucide/mail'
import IconLink from '~icons/lucide/link'

defineProps({
  links: Array
})

const icons = {
  linkedin: IconLinkedin,
  github: IconGithub,
  email: IconMail
}

const isExternal = (url) => url.startsWith('http')
</script>

<template>
  <ul class="links-container">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.url"
        class="social-button"
        :target="isExternal(link.url) ? '_blank' : undefined"
        :rel="isExternal(link.url) ? 'noopener noreferrer' : undefined"
      >
        <component :is="icons[link.id] || IconLink" class="icon social-icon" aria-hidden="true" />
        <span>{{ link.label }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 440px;
  margin: 0 auto 3rem;
  padding: 0;
  list-style: none;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background-color: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  position: relative;
  width: 100%;
}

.social-button:hover {
  background-color: #18181b;
  border-color: var(--border-strong);
  transform: scale(1.01);
}

.social-icon {
  position: absolute;
  left: 1.5rem;
  width: 1.25rem;
  height: 1.25rem;
}
</style>
