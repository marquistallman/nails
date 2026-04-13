╔════════════════════════════════════════════════════════════════════════════════╗
║  📚 GITHUB PAGES + DOCKER - GUÍA COMPLETA PARA ESTE PROYECTO                    ║
╚════════════════════════════════════════════════════════════════════════════════╝

═════════════════════════════════════════════════════════════════════════════════
❓ PREGUNTA: ¿PUEDE GITHUB PAGES LEER ESTE PROYECTO?
═════════════════════════════════════════════════════════════════════════════════

✅ RESPUESTA CORTA: SÍ, TOTALMENTE

Este es un proyecto Vite/React completamente compatible con GitHub Pages.

═════════════════════════════════════════════════════════════════════════════════
🚀 OPCIÓN 1: DEPLOYMENT AUTOMÁTICO (Recomendado)
═════════════════════════════════════════════════════════════════════════════════

GitHub Actions hace TODO automáticamente cada vez que haces push:

PASO 1: Crear archivo de workflow
─────────────────────────────────

Crear: .github/workflows/deploy.yml

name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: |
          cd src/pages/home
          npm install
      
      - name: Build project
        run: |
          cd src/pages/home
          npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./src/pages/home/dist
          cname: tunombre.com  # (opcional, solo si tienes dominio)

PASO 2: Configurar GitHub Pages en tu repo
───────────────────────────────────────────

1. Ve a: Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)
5. Click Save

PASO 3: Hacer push
──────────────────

$ git add .
$ git commit -m "Initial commit"
$ git push origin main

✅ ¡GitHub Actions automáticamente:
   - Instala dependencias
   - Compila el proyecto
   - Genera dist/
   - Sube a gh-pages branch
   - Tu sitio está LIVE en ~2 minutos!

RESULTADO:
─────────
URL: https://tu-usuario.github.io/nails
O si tienes dominio: https://tunombre.com

═════════════════════════════════════════════════════════════════════════════════
🚀 OPCIÓN 2: DEPLOYMENT MANUAL (Sin Automatización)
═════════════════════════════════════════════════════════════════════════════════

Si prefieres hacer deploy manualmente:

PASO 1: Compilar localmente
─────────────────────────────

$ cd src/pages/home
$ npm run build

Genera carpeta: dist/

PASO 2: Crear rama gh-pages
─────────────────────────────

$ git checkout --orphan gh-pages
$ git rm -rf .
$ cp -r src/pages/home/dist/* .
$ git add .
$ git commit -m "Deploy website"
$ git push origin gh-pages

PASO 3: Volver a main
─────────────────────

$ git checkout main

✅ Tu sitio está en: https://tu-usuario.github.io/nails

═════════════════════════════════════════════════════════════════════════════════
🐳 OPCIÓN 3: DOCKER + GITHUB PAGES (Lo mejor de ambos mundos)
═════════════════════════════════════════════════════════════════════════════════

Usa Docker para garantizar que el build sea idéntico en cualquier lugar:

DOCKERFILE (src/pages/home/Dockerfile):
───────────────────────────────────────

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Opcional: servir local
EXPOSE 5173
CMD ["npm", "run", "preview"]

GITHUB WORKFLOW CON DOCKER:
──────────────────────────

name: Deploy with Docker

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Docker
        uses: docker/setup-buildx-action@v2
      
      - name: Build and extract dist
        run: |
          cd src/pages/home
          docker build -t landing-builder .
          docker create --name temp-container landing-builder
          docker cp temp-container:/app/dist ./dist
          docker rm temp-container
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./src/pages/home/dist

VENTAJAS:
─────────
✅ Build consistente (funciona igual en tu PC que en CI/CD)
✅ No dependerá de versiones de Node
✅ Aislado del sistema
✅ Reproducible

═════════════════════════════════════════════════════════════════════════════════
🐳 EJECUTAR LOCALMENTE CON DOCKER
═════════════════════════════════════════════════════════════════════════════════

DOCKER COMPOSE PARA DESARROLLO:
───────────────────────────────

docker-compose.yml:

version: '3.8'

services:
  landing:
    build:
      context: ./src/pages/home
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    volumes:
      - ./src/pages/home:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - VITE_HMR_HOST=localhost
    command: npm run dev

DEV DOCKERFILE:
───────────────

Crear: src/pages/home/Dockerfile.dev

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

EJECUTAR:
─────────

$ docker-compose up

Accede a: http://localhost:5173

✅ Hot reload incluido
✅ Cambios en vivo

═════════════════════════════════════════════════════════════════════════════════
🔄 FLUJO RECOMENDADO (DEVELOPMENT + DEPLOYMENT)
═════════════════════════════════════════════════════════════════════════════════

FLOW LOCAL (Tu PC):
───────────────────

$ docker-compose up              # Desarrollo en Docker
# Haces cambios...
# Hot reload automático
# Ctrl+C para detener

$ docker-compose down            # Detiene

FLOW DE PRODUCCIÓN (GitHub):
────────────────────────────

1. Push a main
   $ git push origin main

2. GitHub Actions automáticamente:
   - Clona tu repo
   - Corre Docker build
   - Genera dist/
   - Deploy a gh-pages
   - Sitio LIVE ✅

3. Tu sitio está en:
   https://tu-usuario.github.io/nails

═════════════════════════════════════════════════════════════════════════════════
📋 CONFIGURACIÓN RECOMENDADA PARA TI (TÚ USAS DOCKER)
═════════════════════════════════════════════════════════════════════════════════

ARCHIVO: docker-compose.yml (RAÍZ DEL PROYECTO)

version: '3.8'

services:
  landing:
    build:
      context: ./src/pages/home
      dockerfile: Dockerfile.dev
    ports:
      - "3000:5173"
    volumes:
      - ./src/pages/home:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev

  # Opcional: Builder para production
  builder:
    build:
      context: ./src/pages/home
      dockerfile: Dockerfile
    volumes:
      - ./dist:/app/dist
    command: npm run build

USAR:
─────

# Desarrollo
$ docker-compose up landing

# Compilar para producción
$ docker-compose run builder

# Todo en uno
$ docker-compose up

═════════════════════════════════════════════════════════════════════════════════
✅ CHECKLIST GITHUB PAGES + DOCKER
═════════════════════════════════════════════════════════════════════════════════

SETUP INICIAL (Una sola vez):
─────────────────────────────

[ ] Crear repo en GitHub
[ ] git init local
[ ] git add remote origin
[ ] Crear .github/workflows/deploy.yml
[ ] Crear Dockerfile en src/pages/home/
[ ] Crear docker-compose.yml
[ ] Hacer commit inicial
[ ] git push origin main
[ ] Verificar GitHub Actions
[ ] Esperar ~2 minutos
[ ] Sitio LIVE ✅

USO DIARIO:
───────────

[ ] docker-compose up              # Trabajo local
[ ] Hacen cambios
[ ] git add .
[ ] git commit -m "..."
[ ] git push origin main
[ ] GitHub Actions auto-deploya
[ ] Sitio actualizado en 1-2 min

═════════════════════════════════════════════════════════════════════════════════
🔗 URL FINAL EN GITHUB PAGES
═════════════════════════════════════════════════════════════════════════════════

TU PROYECTO ESTARÁ EN UNA DE ESTAS URLs:

OPCIÓN 1: Sin dominio personalizado
────────────────────────────────────
https://tu-usuario-github.github.io/nails

Ejemplo:
https://davir.github.io/nails

OPCIÓN 2: Con dominio personalizado
─────────────────────────────────────
https://miSalon.com

(Solo si compraste dominio y lo configuraste)

═════════════════════════════════════════════════════════════════════════════════
📞 TROUBLESHOOTING COMÚN
═════════════════════════════════════════════════════════════════════════════════

PROBLEMA: GitHub Actions falla
──────────────────────────────

Solución:
1. Ve a: Actions → Último workflow
2. Ver logs detallados
3. Comúnmente es falta de node_modules
4. Verifica que npm install esté en el workflow

PROBLEMA: Sitio no aparece
──────────────────────────

Solución:
1. Ve a: Settings → Pages
2. Verifica que Branch sea: gh-pages
3. Espera 5 minutos
4. Refresca la página
5. Limpia caché del navegador (Ctrl+Shift+Delete)

PROBLEMA: Assets no cargan (CSS, JS vacíos)
────────────────────────────────────────────

Solución:
1. Esto es por Vite base path
2. Edita vite.config.js:

   export default defineConfig({
     base: '/nails/',  // Agregar esto
     plugins: [react()],
   })

3. Rebuild y push

3. GitHub Actions auto-redeploy

PROBLEMA: "dist not found"
──────────────────────────

Solución:
1. Verifica que npm run build funcione local:

   $ cd src/pages/home
   $ npm run build
   $ ls dist/

2. Si funciona local, checkea el path en deploy.yml
3. Debe ser: publish_dir: ./src/pages/home/dist

═════════════════════════════════════════════════════════════════════════════════
⚡ RESUMEN RÁPIDO
═════════════════════════════════════════════════════════════════════════════════

¿GitHub Pages puede leer tu proyecto?

✅ SÍ
   - Es Vite/React
   - Genera dist/ (archivos estáticos)
   - GitHub Pages solo necesita archivos estáticos
   - Totalmente compatible

¿Necesitas hacer algo especial?

⚠️ SÍ - Pequeña configuración:
   1. Crear .github/workflows/deploy.yml ✅ (código arriba)
   2. vite.config.js agregar: base: '/nails/' 
   3. Git push
   4. Listo ✅

¿Qué con Docker?

✅ Funciona perfecto:
   - Desarrollo local: docker-compose up
   - GitHub Actions usa Docker en CI/CD
   - Builds consistentes
   - Reproducibles

Tiempo total setup:
   - 10 minutos primera vez
   - Luego es automático (solo git push)

═════════════════════════════════════════════════════════════════════════════════

Archivo de ejemplo deploy.yml listo → arriba en OPCIÓN 1 ⬆️
