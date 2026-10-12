import { ref } from 'vue'

// Sempre começa em 'pt' para o HTML pré-renderizado e a hidratação baterem;
// o idioma salvo é aplicado depois da montagem (initLang).
const currentLang = ref('pt')

const translations = {
  pt: {
    navHome: 'Home',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navSetup: 'Setup',
    navHomelab: 'Homelab',
    langSwitch: 'Mudar idioma para inglês',
    backToHome: 'Voltar ao início',
    copyright: 'Todos os direitos reservados.',
    setupTitle: 'Meu Setup',
    homelabTitle: 'Meu Homelab',
    projectsTitle: 'Meus Projetos',
    contentTitle: 'Criação de Conteúdo',
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
    activeServices: 'Serviços',
    aboutTitle: 'Sobre Mim',
    skillsTitle: 'Skills & Expertise',
    hostedOn: 'Hospedado em homelab pessoal via Cloudflare Tunnel',
    notFoundTitle: 'Página não encontrada',
    notFoundText: 'O endereço que você acessou não existe ou foi movido.',
    meta: {
      Home: {
        title: 'Daniel Costa | Desenvolvedor & Analista de Sistemas',
        description: 'Portfólio de Daniel Costa: desenvolvedor e analista de sistemas com foco em SQL, BI, automação e infraestrutura.'
      },
      About: {
        title: 'Sobre Mim | Daniel Costa',
        description: 'Formação, experiência e interesses de Daniel Costa em dados, BI, automação e infraestrutura.'
      },
      Projects: {
        title: 'Projetos | Daniel Costa',
        description: 'Projetos de automação, bots, self-hosting e infraestrutura desenvolvidos por Daniel Costa.'
      },
      Setup: {
        title: 'Meu Setup | Daniel Costa',
        description: 'Hardware, periféricos e software que Daniel Costa usa no dia a dia.'
      },
      Homelab: {
        title: 'Meu Homelab | Daniel Costa',
        description: 'O homelab com Proxmox onde este site e outros serviços self-hosted rodam.'
      },
      NotFound: {
        title: 'Página não encontrada | Daniel Costa',
        description: 'Página não encontrada.'
      }
    }
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navSetup: 'Setup',
    navHomelab: 'Homelab',
    langSwitch: 'Switch language to Portuguese',
    backToHome: 'Back to home',
    copyright: 'All rights reserved.',
    setupTitle: 'My Setup',
    homelabTitle: 'My Homelab',
    projectsTitle: 'My Projects',
    contentTitle: 'Content Creation',
    hardware: 'Hardware',
    monitors: 'Monitors',
    peripherals: 'Peripherals',
    case: 'Case',
    software: 'Software',
    processor: 'Processor',
    gpu: 'Graphics card',
    ram: 'RAM',
    storage: 'Storage',
    keyboards: 'Keyboards',
    mouse: 'Mouse',
    mic: 'Microphone',
    serverSpecs: 'Server Specifications',
    activeServices: 'Services',
    aboutTitle: 'About Me',
    skillsTitle: 'Skills & Expertise',
    hostedOn: 'Hosted on a personal homelab via Cloudflare Tunnel',
    notFoundTitle: 'Page not found',
    notFoundText: 'The address you tried does not exist or has been moved.',
    meta: {
      Home: {
        title: 'Daniel Costa | Developer & Systems Analyst',
        description: 'Portfolio of Daniel Costa: developer and systems analyst focused on SQL, BI, automation and infrastructure.'
      },
      About: {
        title: 'About Me | Daniel Costa',
        description: 'Background, experience and interests of Daniel Costa in data, BI, automation and infrastructure.'
      },
      Projects: {
        title: 'Projects | Daniel Costa',
        description: 'Automation, bots, self-hosting and infrastructure projects built by Daniel Costa.'
      },
      Setup: {
        title: 'My Setup | Daniel Costa',
        description: 'The hardware, peripherals and software Daniel Costa uses every day.'
      },
      Homelab: {
        title: 'My Homelab | Daniel Costa',
        description: 'The Proxmox homelab where this website and other self-hosted services run.'
      },
      NotFound: {
        title: 'Page not found | Daniel Costa',
        description: 'Page not found.'
      }
    }
  }
}

const saveLang = (lang) => {
  try {
    localStorage.setItem('lang', lang)
  } catch {
    // localStorage indisponível (modo privado, bloqueado etc.)
  }
}

export const initLang = () => {
  try {
    const lang = localStorage.getItem('lang')
    if (lang === 'pt' || lang === 'en') currentLang.value = lang
  } catch {
    // mantém 'pt'
  }
}

export const useI18n = () => {
  const t = (key) => translations[currentLang.value][key] ?? key

  const pageMeta = (routeName) => {
    const meta = translations[currentLang.value].meta
    return meta[routeName] || meta.Home
  }

  const toggleLang = () => {
    currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt'
    saveLang(currentLang.value)
  }

  return { currentLang, t, pageMeta, toggleLang }
}
