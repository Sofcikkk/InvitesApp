# === Etap 1: Budowanie zoptymalizowanej aplikacji ===
FROM node:20-alpine AS builder
WORKDIR /app

# POPRAWKA: Kopiujemy pliki z podfolderu client_frontend
COPY client_frontend/package*.json ./
RUN npm install
# POPRAWKA: Kopiujemy całą zawartość z podfolderu client_frontend
COPY client_frontend/ .
RUN npm run build

# === Etap 2: Serwowanie gotowej aplikacji ===
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
