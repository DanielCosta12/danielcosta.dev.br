<script setup>
defineProps({
  name: String,
  image: String,
  headline: String,
  tagline: String
})
</script>

<template>
  <header class="profile-header">
    <div class="image-glow">
      <img :src="image" class="profile-pic" :alt="name" width="112" height="112" fetchpriority="high" />
    </div>
    <h1 class="name">{{ name }}</h1>
    <p class="headline">{{ headline }}</p>
    <p class="tagline">{{ tagline }}</p>
  </header>
</template>

<style scoped>
.profile-header {
  margin: 0 auto 2.5rem;
  width: 100%;
  max-width: 600px;
}

.image-glow {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  box-shadow: 0 0 40px 10px rgba(139, 92, 246, 0.4);
  padding: 4px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
}

.profile-pic {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--surface-2);
  border: 4px solid var(--bg);
}

.name {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 1rem 0 0.5rem;
  letter-spacing: -0.04em;
}

.headline {
  color: var(--accent-text);
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.tagline {
  color: var(--text-muted);
  max-width: 440px;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .name {
    font-size: 1.75rem;
  }
}
</style>
