#!/bin/bash
# AUTOMATIZACIÓN - Generar Landing Page para Negocios de Belleza
# Script para crear un proyecto completo en 1 comando

# Uso: ./create-landing-page.sh "NombreDelNegocio" "color-primario" "color-acento"
# Ejemplo: ./create-landing-page.sh "MiSalon" "#d4617f" "#ffd700"

NEGOCIO=${1:-"NailStudio"}
COLOR_PRIMARY=${2:-"#d4617f"}
COLOR_ACCENT=${3:-"#ffd700"}

echo "🚀 Creando Landing Page para: $NEGOCIO"

# 1. Crear estructura de carpetas
mkdir -p "$NEGOCIO-landing/src/pages/home/components"
mkdir -p "$NEGOCIO-landing/src/pages/home/styles"
mkdir -p "$NEGOCIO-landing/src/pages/home/public/images"
mkdir -p "$NEGOCIO-landing/public"

cd "$NEGOCIO-landing"

# 2. Crear package.json
cat > package.json << 'EOF'
{
  "name": "landing-page-negocio",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
  }
}
EOF

# 3. Crear vite.config.js
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
EOF

# 4. Crear carpetas y archivos base
echo "✅ Estructura creada"
echo "📦 Instala dependencias: cd $NEGOCIO-landing && npm install"
echo "🚀 Ejecuta: npm run dev"
