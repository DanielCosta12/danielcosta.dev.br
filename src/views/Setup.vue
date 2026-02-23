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
    console.error('Erro ao carregar setup:', error);
  }
});

const setup = computed(() => {
  if (!profile.value || !profile.value[currentLang.value]) return null;
  return profile.value[currentLang.value].setup || null;
});
</script>

<template>
  <div class="setup-page">
    <h1 class="title">{{ t('setupTitle') }}</h1>
    
    <div v-if="setup" class="setup-container">
      <div class="setup-section">
        <h2><i class="fa-solid fa-microchip"></i> {{ t('hardware') }}</h2>
        <div class="setup-details">
          <p><strong>{{ t('processor') }}:</strong> {{ setup.hardware.processador }}</p>
          <p><strong>{{ t('gpu') }}:</strong> {{ setup.hardware.gpu }}</p>
          <p><strong>{{ t('ram') }}:</strong> {{ setup.hardware.ram }}</p>
          <div class="nested-list">
            <strong>{{ t('storage') }}:</strong>
            <ul>
              <li v-for="item in setup.hardware.armazenamento" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="setup-section">
        <h2><i class="fa-solid fa-desktop"></i> {{ t('monitors') }}</h2>
        <ul>
          <li v-for="monitor in setup.monitores" :key="monitor">{{ monitor }}</li>
        </ul>
      </div>

      <div class="setup-section">
        <h2><i class="fa-solid fa-keyboard"></i> {{ t('peripherals') }}</h2>
        <div class="setup-details">
          <div class="nested-list">
            <strong>{{ t('keyboards') }}:</strong>
            <ul>
              <li v-for="teclado in setup.perifericos.teclados" :key="teclado">{{ teclado }}</li>
            </ul>
          </div>
          <p><strong>{{ t('mouse') }}:</strong> {{ setup.perifericos.mouse }}</p>
          <p><strong>{{ t('mic') }}:</strong> {{ setup.perifericos.microfone }}</p>
        </div>
      </div>

      <div class="setup-section">
        <h2><i class="fa-solid fa-box"></i> {{ t('case') }}</h2>
        <p>{{ setup.gabinete }}</p>
      </div>

      <div class="setup-section">
        <h2><i class="fa-solid fa-code"></i> {{ t('software') }}</h2>
        <p><strong>OS:</strong> {{ setup.software.os.join(' & ') }}</p>
        <p><strong>IDE:</strong> {{ setup.software.ide }}</p>
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
.setup-page {
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
.setup-container {
  background-color: #0a0a0a;
  border: 1px solid #1f1f23;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
  text-align: left;
}
.setup-section {
  margin-bottom: 2rem;
  border-bottom: 1px solid #1f1f23;
  padding-bottom: 1.5rem;
}
.setup-section:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}
.setup-section h2 {
  color: #7c3aed;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.setup-details p {
  margin: 0.4rem 0;
  color: #d4d4d8;
}
.nested-list {
  margin-top: 0.5rem;
}
.nested-list strong {
  display: block;
  margin-bottom: 0.3rem;
  color: #ffffff;
}
.setup-section ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}
.setup-section li {
  color: #d4d4d8;
  margin-bottom: 0.4rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
}
.setup-section li::before {
  content: "→";
  color: #7c3aed;
  position: absolute;
  left: 0;
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
  .setup-container {
    padding: 1.5rem;
  }
}
</style>
