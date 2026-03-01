<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from '../translator';

const { currentLang, t } = useI18n();
const profile = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/site-data.json');
    profile.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar perfil:', error);
  }
});

const biography = computed(() => {
  if (!profile.value || !profile.value[currentLang.value]) return '';
  return profile.value[currentLang.value].biography || '';
});
</script>

<template>
  <div class="about-page">
    <h1 class="title">{{ t('aboutTitle') }}</h1>
    <div v-if="profile && profile[currentLang]" class="bio-container">
      <p class="biography-text">
        {{ biography }}
      </p>
    </div>
    <div v-else class="loading">{{ t('loading') }}</div>
    
    <router-link to="/" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> {{ t('backToHome') }}
    </router-link>
  </div>
</template>

<style scoped>
/* Estilos mantidos */
.about-page {
  text-align: center;
  margin-top: 2rem;
  padding: 0 1.5rem;
  max-width: 700px;
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
.bio-container {
  background-color: #0a0a0a;
  border: 1px solid #1f1f23;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
}
.biography-text {
  color: #d4d4d8;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0;
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
@media (max-width: 480px) {
  .bio-container {
    padding: 1.5rem;
  }
  .biography-text {
    font-size: 1rem;
    text-align: left;
  }
}
</style>
