<script setup>
import IconServer from '~icons/lucide/server'
import IconCpu from '~icons/lucide/cpu'
import { useI18n } from '../translator'
import { useProfile } from '../store/profile'

const { t } = useI18n()
const { globalData, translatedData } = useProfile()
const specs = globalData.homelab.specs
</script>

<template>
  <div class="page">
    <h1 class="page-title">{{ t('homelabTitle') }}</h1>

    <div class="card">
      <section class="homelab-section">
        <h2 class="section-title"><IconServer class="icon" aria-hidden="true" /> {{ t('serverSpecs') }}</h2>
        <dl class="specs-grid">
          <div class="spec-item">
            <dt class="spec-label">CPU</dt>
            <dd class="spec-value">{{ specs.cpu }}</dd>
          </div>
          <div class="spec-item">
            <dt class="spec-label">RAM</dt>
            <dd class="spec-value">{{ specs.ram }}</dd>
          </div>
          <div class="spec-item">
            <dt class="spec-label">OS</dt>
            <dd class="spec-value">{{ specs.os }}</dd>
          </div>
        </dl>
      </section>

      <section class="homelab-section">
        <h2 class="section-title"><IconCpu class="icon" aria-hidden="true" /> {{ t('activeServices') }}</h2>
        <ul class="services-list">
          <li v-for="service in translatedData.homelabServices" :key="service" class="service-tag">
            {{ service }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.homelab-section {
  margin-bottom: 2.5rem;
}

.homelab-section:last-child {
  margin-bottom: 0;
}

.homelab-section .section-title {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 0;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spec-label {
  color: var(--text-subtle);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.spec-value {
  margin: 0;
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 500;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.service-tag {
  background-color: var(--surface-2);
  color: var(--text-secondary);
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  border: 1px solid var(--border);
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.service-tag:hover {
  border-color: var(--accent);
  color: var(--text);
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .specs-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
