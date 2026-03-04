import { ref, computed } from 'vue'
import { useI18n } from '../translator'

// Estado global (fora da função useProfile para persistir entre navegações)
const profileData = ref(null)
const loading = ref(false)
const error = ref(null)

export const useProfile = () => {
  const { currentLang } = useI18n()

  const loadProfile = async () => {
    // Se já temos os dados, não busca novamente (Cache)
    if (profileData.value) return

    loading.value = true
    error.value = null
    
    try {
      const response = await fetch('/site-data.json')
      if (!response.ok) throw new Error('Falha ao carregar dados do perfil')
      profileData.value = await response.json()
    } catch (err) {
      console.error('Erro no useProfile:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // Helper para pegar os dados traduzidos automaticamente
  const translatedData = computed(() => {
    if (!profileData.value || !profileData.value[currentLang.value]) return null
    return profileData.value[currentLang.value]
  })

  // Retorna os metadados globais (nome, imagem, links) que não mudam com idioma
  const globalData = computed(() => {
    if (!profileData.value) return null
    return {
      name: profileData.value.name,
      image: profileData.value.image,
      socialLinks: profileData.value.socialLinks
    }
  })

  return {
    profileData,
    translatedData,
    globalData,
    loading,
    error,
    loadProfile
  }
}
