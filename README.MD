<div align="center">

# 🌐 danielcosta.dev.br

**Site pessoal e portfólio — desenvolvido com Vue 3 + Vite e hospedado no meu próprio homelab.**

[![Vue](https://img.shields.io/badge/Vue.js-3-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_Tunnel-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/products/tunnel/)

🔗 **[danielcosta.dev.br](https://danielcosta.dev.br)**

</div>

---

## 📸 Preview
<div align="center">
  <img src="./assets/danielcosta.dev.br.gif" alt="Preview do site danielcosta.dev.br" width="100%"/>
</div>

> *Acesse [danielcosta.dev.br](https://danielcosta.dev.br) para ver o site ao vivo.*

---

## ✨ Sobre o Projeto

Este é meu site pessoal e portfólio, onde apresento meus projetos, habilidades e formas de contato. O diferencial deste projeto está na **infraestrutura**: o site roda inteiramente no meu **homelab doméstico**, sem a necessidade de abrir portas no roteador ou contratar um servidor na nuvem — tudo exposto com segurança via **Cloudflare Tunnel**.

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | Vue 3 + Vite + CSS |
| Servidor Web | Nginx (servindo arquivos estáticos do build) |
| Containerização | Docker + Docker Compose |
| Gerenciamento | Portainer GitOps |
| Tunelamento | Cloudflare Tunnel |
| Infraestrutura | Proxmox (homelab) |

---

## 🏗️ Infraestrutura

O site é hospedado em um servidor doméstico (**homelab**) rodando **Proxmox** como hipervisor. O deploy é orquestrado via **Portainer GitOps** com dois containers principais, construídos a partir de um **multi-stage Dockerfile**:

```
┌─────────────────────────────────────────────────────┐
│                    HOMELAB                          │
│                                                     │
│  ┌───────────────────────┐    ┌──────────────────┐  │
│  │  danielcosta-site     │    │   cloudflared    │  │
│  │  (Nginx + Vue build)  │    │    (Tunnel)      │  │
│  └───────────────────────┘    └────────┬─────────┘  │
│                                        │             │
└────────────────────────────────────────┼─────────────┘
                                         │
                             ┌───────────▼───────────┐
                             │   Cloudflare Network   │
                             └───────────┬────────────┘
                                         │
                             ┌───────────▼────────────┐
                             │   danielcosta.dev.br   │
                             └────────────────────────┘
```

**Como funciona cada container:**

- **`danielcosta-site`** — Build multi-stage: Stage 1 usa Node 20 Alpine para instalar dependências e gerar o build do Vue. Stage 2 usa Nginx Alpine para servir os arquivos estáticos do `dist/`.
- **`cloudflared`** — Container oficial da Cloudflare que cria um túnel seguro entre o servidor doméstico e a internet, sem necessidade de IP público ou abertura de portas.

```yaml
services:
  site:
    build:
      context: .
      dockerfile: Dockerfile
    image: danielcosta-vue
    container_name: danielcosta-site
    restart: always
    networks:
      - app

  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    command: tunnel --no-autoupdate run
    environment:
      - TUNNEL_TOKEN=${KEY}
    restart: always
    networks:
      - app

networks:
  app:
    driver: bridge
```

---

## 🚀 Rodando Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/DanielCosta12/danielcosta.dev.br.git
cd danielcosta.dev.br

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Para gerar o build de produção
npm run build
```

---

## 📦 Deploy

O deploy é gerenciado pelo **Portainer GitOps**:

1. Portainer clona este repositório automaticamente
2. Faz o build multi-stage usando o `Dockerfile`
3. Sobe os containers `danielcosta-site` e `cloudflared`
4. O Cloudflare Tunnel expõe o site em `danielcosta.dev.br`

> **Nenhuma porta do roteador é aberta.** Todo o tráfego externo passa pelo Cloudflare Tunnel de forma segura e criptografada.

---

## 📬 Contato

<div align="center">

[![Site](https://img.shields.io/badge/Site-danielcosta.dev.br-0A66C2?style=for-the-badge&logo=googlechrome&logoColor=white)](https://danielcosta.dev.br)
[![GitHub](https://img.shields.io/badge/GitHub-DanielCosta12-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DanielCosta12)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-daniel--costa12-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-costa12)

</div>