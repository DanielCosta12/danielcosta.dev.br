<script setup>
defineProps({
  links: Array
})

function getIcon(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes('linkedin')) return 'fa-brands fa-linkedin-in';
  if (lowerText.includes('github')) return 'fa-brands fa-github';
  if (lowerText.includes('gmail') || lowerText.includes('email') || lowerText.includes('e-mail')) return 'fa-solid fa-envelope';
  if (lowerText.includes('whatsapp')) return 'fa-brands fa-whatsapp';
  return 'fa-solid fa-link';
}
</script>

<template>
  <div class="links-container">
    <a 
      v-for="link in links" 
      :key="link.text"
      :href="link.url" 
      class="social-button" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i :class="getIcon(link.text)"></i>
      <span>{{ link.text }}</span>
    </a>
  </div>
</template>

<style scoped>
.links-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 440px;
  margin: 0 auto 3rem;
}
</style>
