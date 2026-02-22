import { ref } from 'vue'

const getSavedLang = () => {
  try {
    const lang = localStorage.getItem('lang')
    return (lang === 'pt' || lang === 'en') ? lang : 'pt'
  } catch (e) {
    return 'pt'
  }
}

const currentLang = ref(getSavedLang())

const translations = {
  pt: {
    navHome: 'Home',
    navAbout: 'Sobre',
    navSetup: 'Setup',
    navHomelab: 'Homelab',
    backToHome: 'Voltar ao Início',
    loading: 'Carregando...',
    copyright: 'Todos os direitos reservados.',
    setupTitle: 'Meu Setup',
    homelabTitle: 'Meu Homelab',
    hardware: 'Hardware',
    monitors: 'Monitores',
    peripherals: 'Periféricos',
    case: 'Gabinete',
    software: 'Software',
    processor: 'Processador',
    gpu: 'Placa de vídeo',
    ram: 'Memória RAM',
    storage: 'Armazenamento',
    keyboards: 'Teclados',
    mouse: 'Mouse',
    mic: 'Microfone',
    serverSpecs: 'Especificações do Servidor',
    activeServices: 'Serviços Ativos',
    aboutTitle: 'Sobre Mim',
    skillsTitle: 'SKILLS & EXPERTISE',
    hostedOn: 'Hospedado em homelab pessoal via Cloudflare Tunnel'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navSetup: 'Setup',
    navHomelab: 'Homelab',
    backToHome: 'Back to Home',
    loading: 'Loading...',
    copyright: 'All rights reserved.',
    setupTitle: 'My Setup',
    homelabTitle: 'My Homelab',
    hardware: 'Hardware',
    monitors: 'Monitors',
    peripherals: 'Peripherals',
    case: 'Case',
    software: 'Software',
    processor: 'Processor',
    gpu: 'Graphics Card',
    ram: 'RAM',
    storage: 'Storage',
    keyboards: 'Keyboards',
    mouse: 'Mouse',
    mic: 'Microphone',
    serverSpecs: 'Server Specifications',
    activeServices: 'Active Services',
    aboutTitle: 'About Me',
    skillsTitle: 'SKILLS & EXPERTISE',
    hostedOn: 'Hosted on personal homelab via Cloudflare Tunnel'
  }
}

export const useI18n = () => {
  const t = (key) => {
    const langObj = translations[currentLang.value] || translations.pt
    return langObj[key] || key
  }
  
  const toggleLang = () => {
    currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt'
    try {
      localStorage.setItem('lang', currentLang.value)
    } catch (e) {
      console.warn('LocalStorage not available')
    }
    // Força atualização do título
    const titleKey = document.title.split(' | ')[0]
    // Opcional: recarregar ou forçar re-render se necessário
  }

  return { currentLang, t, toggleLang }
}
