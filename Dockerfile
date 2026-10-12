# ===== STAGE 1 — BUILD =====
FROM node:24-alpine AS build

WORKDIR /app

# npm ci: instala exatamente o que está no package-lock.json
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ===== STAGE 2 — NGINX (sem root) =====
FROM nginxinc/nginx-unprivileged:1.31-alpine

# Config do site + cabeçalhos de segurança
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security-headers.conf /etc/nginx/snippets/security-headers.conf

# Build estático (páginas pré-renderizadas)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
