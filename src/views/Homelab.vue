<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from '../translator';

const { currentLang, t } = useI18n();
const profile = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/profile.json');
    profile.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar homelab:', error);
  }
});

const homelab = computed(() => {
  if (!profile.value || !profile.value[currentLang.value]) return null;
  return profile.value[currentLang.value].homelab || null;
});
</script>

<template>
  <div class="homelab-page">
    <h1 class="title">{{ t('homelabTitle') }}</h1>
    
    <div v-if="homelab" class="homelab-container">
      <div class="homelab-section">
        <h2><i class="fa-solid fa-server"></i> {{ t('serverSpecs') }}</h2>
        <div class="specs-grid">
          <div class="spec-item">
            <span class="spec-label">CPU:</span>
            <span class="spec-value">{{ homelab.specs.cpu }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">RAM:</span>
            <span class="spec-value">{{ homelab.specs.ram }}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">OS:</span>
            <span class="spec-value">{{ homelab.specs.os }}</span>
          </div>
        </div>
      </div>

      <div class="homelab-section">
        <h2><i class="fa-solid fa-microchip"></i> {{ t('activeServices') }}</h2>
        <div class="services-list">
          <div v-for="service in homelab.services" :key="service" class="service-tag">
            {{ service }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading">{{ t('loading') }}</div>

    <router-link to="/" class="back-link">
      <i class="fa-solid fa-arrow-left"></i> {{ t('backToHome') }}
    </router-link>
  </div>
</template>

<style scoped>
/* Estilos mantidos */
.homelab-page {
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
.homelab-container {
  background-color: #0a0a0a;
  border: 1px solid #1f1f23;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
  text-align: left;
}
.homelab-section {
  margin-bottom: 2.5rem;
}
.homelab-section:last-child {
  margin-bottom: 0;
}
.homelab-section h2 {
  color: #7c3aed;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid #1f1f23;
  padding-bottom: 0.5rem;
}
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}
.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.spec-label {
  color: #52525b;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.spec-value {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
}
.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.service-tag {
  background-color: #111111;
  color: #d4d4d8;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  border: 1px solid #1f1f23;
  transition: all 0.2s ease;
}
.service-tag:hover {
  border-color: #7c3aed;
  color: #ffffff;
  transform: translateY(-2px);
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
  .homelab-container {
    padding: 1.5rem;
  }
  .specs-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
