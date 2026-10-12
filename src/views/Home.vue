<script setup>
import ProfileHeader from '../components/ProfileHeader.vue'
import SocialLinks from '../components/SocialLinks.vue'
import SkillsExpertise from '../components/SkillsExpertise.vue'
import { useProfile } from '../store/profile'

const { globalData, translatedData } = useProfile()
</script>

<template>
  <div class="view-content">
    <ProfileHeader
      :name="globalData.name"
      :image="globalData.image"
      :headline="translatedData.headline"
      :tagline="translatedData.tagline"
    />

    <SocialLinks :links="globalData.socialLinks" />

    <SkillsExpertise :skills="translatedData.skills" />
  </div>
</template>

<style scoped>
.view-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
