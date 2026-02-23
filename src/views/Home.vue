<script setup>
import { ref, onMounted, computed } from 'vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import SocialLinks from '../components/SocialLinks.vue';
import SkillsExpertise from '../components/SkillsExpertise.vue';
import { useI18n } from '../translator';

const { currentLang, t } = useI18n();

const profileData = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/profile.json');
    profileData.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
  }
});

const skills = computed(() => {
  if (!profileData.value || !profileData.value[currentLang.value]) return [];
  return profileData.value[currentLang.value].skills || [];
});
</script>

<template>
  <div v-if="profileData" class="view-content">
    <ProfileHeader 
      :name="profileData.name" 
      :image="profileData.image" 
    />
    
    <SocialLinks :links="profileData.socialLinks" />
    
    <SkillsExpertise :skills="skills" />
  </div>
  <div v-else class="loading">{{ t('loading') }}</div>
</template>

<style scoped>
.loading {
  color: #a1a1aa;
  margin-top: 4rem;
}
.view-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
