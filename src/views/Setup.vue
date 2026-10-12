<script setup>
import IconCpu from '~icons/lucide/cpu'
import IconMonitor from '~icons/lucide/monitor'
import IconKeyboard from '~icons/lucide/keyboard'
import IconBox from '~icons/lucide/box'
import IconCode from '~icons/lucide/code'
import { useI18n } from '../translator'
import { useProfile } from '../store/profile'

const { t } = useI18n()
const { globalData, translatedData } = useProfile()
const setup = globalData.setup
</script>

<template>
  <div class="page">
    <h1 class="page-title">{{ t('setupTitle') }}</h1>

    <div class="card">
      <section class="setup-section">
        <h2 class="section-title"><IconCpu class="icon" aria-hidden="true" /> {{ t('hardware') }}</h2>
        <dl class="details">
          <dt>{{ t('processor') }}</dt><dd>{{ setup.hardware.processor }}</dd>
          <dt>{{ t('gpu') }}</dt><dd>{{ setup.hardware.gpu }}</dd>
          <dt>{{ t('ram') }}</dt><dd>{{ setup.hardware.ram }}</dd>
          <dt>{{ t('storage') }}</dt>
          <dd>
            <ul class="arrow-list">
              <li v-for="item in setup.hardware.storage" :key="item">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </section>

      <section class="setup-section">
        <h2 class="section-title"><IconMonitor class="icon" aria-hidden="true" /> {{ t('monitors') }}</h2>
        <ul class="arrow-list">
          <li v-for="monitor in setup.monitors" :key="monitor">{{ monitor }}</li>
        </ul>
      </section>

      <section class="setup-section">
        <h2 class="section-title"><IconKeyboard class="icon" aria-hidden="true" /> {{ t('peripherals') }}</h2>
        <dl class="details">
          <dt>{{ t('keyboards') }}</dt>
          <dd>
            <ul class="arrow-list">
              <li v-for="keyboard in setup.peripherals.keyboards" :key="keyboard">{{ keyboard }}</li>
            </ul>
          </dd>
          <dt>{{ t('mouse') }}</dt><dd>{{ setup.peripherals.mouse }}</dd>
          <dt>{{ t('mic') }}</dt><dd>{{ setup.peripherals.mic }}</dd>
        </dl>
      </section>

      <section class="setup-section">
        <h2 class="section-title"><IconBox class="icon" aria-hidden="true" /> {{ t('case') }}</h2>
        <p class="plain">{{ setup.case }} ({{ translatedData.caseColor }})</p>
      </section>

      <section class="setup-section">
        <h2 class="section-title"><IconCode class="icon" aria-hidden="true" /> {{ t('software') }}</h2>
        <dl class="details">
          <dt>OS</dt><dd>{{ setup.software.os.join(' & ') }}</dd>
          <dt>IDE</dt><dd>{{ setup.software.ide }}</dd>
        </dl>
      </section>
    </div>
  </div>
</template>

<style scoped>
.setup-section {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1.5rem;
}

.setup-section:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.details {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.4rem 1rem;
  margin: 0;
}

.details dt {
  color: var(--text);
  font-weight: 600;
}

.details dd {
  margin: 0;
  color: var(--text-secondary);
}

.plain {
  margin: 0;
  color: var(--text-secondary);
}

.arrow-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arrow-list li {
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
  padding-left: 1.5rem;
  position: relative;
  font-size: 0.95rem;
}

.arrow-list li::before {
  content: "→";
  color: var(--accent-text);
  position: absolute;
  left: 0;
}

@media (max-width: 480px) {
  .details {
    grid-template-columns: 1fr;
    gap: 0.1rem;
  }

  .details dd {
    margin-bottom: 0.6rem;
  }
}
</style>
