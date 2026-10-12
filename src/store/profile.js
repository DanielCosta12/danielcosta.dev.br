import { computed } from 'vue'
import { useI18n } from '../translator'
// Importado no build: o conteúdo entra no HTML pré-renderizado, sem fetch em tempo de execução
import siteData from '../data/site.json'

export const useProfile = () => {
  const { currentLang } = useI18n()

  // Dados que mudam com o idioma
  const translatedData = computed(() => siteData[currentLang.value])

  // Dados que não dependem de idioma
  const globalData = {
    name: siteData.name,
    image: siteData.image,
    socialLinks: siteData.socialLinks,
    setup: siteData.setup,
    homelab: siteData.homelab
  }

  return { translatedData, globalData }
}
