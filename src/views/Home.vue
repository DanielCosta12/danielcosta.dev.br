<script setup>
import { onMounted, computed } from 'vue';
import ProfileHeader from '../components/ProfileHeader.vue';
import SocialLinks from '../components/SocialLinks.vue';
import SkillsExpertise from '../components/SkillsExpertise.vue';
import { useI18n } from '../translator';
import { useProfile } from '../store/profile';

const { t } = useI18n();
const { globalData, translatedData, loading, loadProfile } = useProfile();

onMounted(loadProfile);

const skills = computed(() => {
  return translatedData.value?.skills || [];
});
</script>

<template>
  <div v-if="globalData" class="view-content">
    <ProfileHeader 
      :name="globalData.name" 
      :image="globalData.image" 
    />
    
    <SocialLinks :links="globalData.socialLinks" />
    
    <SkillsExpertise :skills="skills" />
  </div>
  <div v-else-if="loading" class="loading">{{ t('loading') }}</div>
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
