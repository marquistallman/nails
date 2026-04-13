╔═══════════════════════════════════════════════════════════════════════════════╗
║  🐛 BUGS ENCONTRADOS Y CORREGIDOS                                             ║
║     (Incluir estos fixes en el generator de landing pages)                    ║
╚═══════════════════════════════════════════════════════════════════════════════╝

═══════════════════════════════════════════════════════════════════════════════════
🐛 BUG #1: main.js termina inmediatamente sin servidor
═══════════════════════════════════════════════════════════════════════════════════

PROBLEMA:
─────────
Docker reinicia constantemente el contenedor porque main.js:
1. Solo imprime un mensaje
2. Termina el proceso (exit code 0)
3. Docker ve que salió y reinicia

Output visible:
```
nails-app exited with code 0 (restarting)
nails-app  | 
nails-app  | > api@1.0.0 start
nails-app  | > node main.js
nails-app exited with code 0 (restarting)
```

CAUSA:
─────
main.js no tenía:
- Servidor Express escuchando
- Loop infinito
- Ningún servicio persistente

SOLUCIÓN APLICADA:
──────────────────

1. ✅ Actualizar main.js:

ANTES:
```javascript
console.log('Aplicación iniciada');
```

DESPUÉS:
```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor en http://localhost:${PORT}`);
});
```

2. ✅ Agregar express a package.json:

ANTES:
```json
"dependencies": { }
```

DESPUÉS:
```json
"dependencies": {
  "express": "^4.18.2"
}
```

RESULTADO:
──────────
✅ El contenedor NO reinicia
✅ El servidor queda escuchando en puerto 8000
✅ /health endpoint para verificar que está vivo

═══════════════════════════════════════════════════════════════════════════════════
📋 CHECKLIST PARA EVITAR EN EL GENERATOR
═══════════════════════════════════════════════════════════════════════════════════

[ ] main.js NO debe terminar después del console.log
[ ] main.js DEBE incluir servidor Express o similar
[ ] main.js DEBE escuchar en un puerto (al menos como fallback)
[ ] package.json DEBE incluir express en dependencies
[ ] Dockerfile EXPOSE debe coincidir con el puerto en main.js
[ ] El servidor debe tener un endpoint /health para health checks

═══════════════════════════════════════════════════════════════════════════════════
🔧 TEMPLATE PARA GENERATOR (main.js.template)
═══════════════════════════════════════════════════════════════════════════════════

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Health check - CRÍTICO para Docker
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    negocio: '{{negocio}}',
    timestamp: new Date().toISOString()
  });
});

// API raíz
app.get('/', (req, res) => {
  res.json({ 
    message: 'API de {{negocio}}',
    version: '1.0.0'
  });
});

// TODO: Agregar más rutas según necesidad

// IMPORTANTE: Sin este listen, Docker reinicia constantemente
app.listen(PORT, () => {
  console.log(`✅ {{negocio}} servidor ejecutándose en puerto ${PORT}`);
  console.log(`📝 Health check: http://localhost:${PORT}/health`);
});
```

═══════════════════════════════════════════════════════════════════════════════════
📝 CAMBIOS EN package.json.template
═══════════════════════════════════════════════════════════════════════════════════

ANTES (incorrecto):
```json
{
  "name": "api",
  "scripts": {
    "start": "node main.js"
  },
  "dependencies": { }
}
```

DESPUÉS (correcto):
```json
{
  "name": "{{negocio_slug}}",
  "version": "1.0.0",
  "description": "API para {{negocio}}",
  "scripts": {
    "start": "node main.js",
    "dev": "nodemon main.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

═══════════════════════════════════════════════════════════════════════════════════
🐳 VALIDACIÓN EN DOCKER
═══════════════════════════════════════════════════════════════════════════════════

Antes del fix:
```
nails-app exited with code 0 (restarting)
```

Después del fix:
```
✅ Servidor ejecutándose en http://localhost:8000
```

═══════════════════════════════════════════════════════════════════════════════════
⏱️ FECHA DEL FIX
═══════════════════════════════════════════════════════════════════════════════════

Fecha: 2026-04-12
Archivo: main.js
Cambios: 13 líneas reemplazadas
Impacto: CRÍTICO - Sin esto Docker falla

═══════════════════════════════════════════════════════════════════════════════════
✅ ARCHIVOS MODIFICADOS
═══════════════════════════════════════════════════════════════════════════════════

1. ✅ main.js
   - Reemplazado: console.log → servidor Express completo
   - Líneas: 3 → 20

2. ✅ package.json
   - Agregado: express en dependencies
   - Versión: 4.18.2

═══════════════════════════════════════════════════════════════════════════════════
🎯 BUG #2 AGREGADO ABAJO
═══════════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════════
🐛 BUG #3: HTTP 404 - Landing page no se sirve (Vite no encuentra index.html)
═══════════════════════════════════════════════════════════════════════════════════

PROBLEMA:
─────────
Usuario accede a http://localhost:5173 pero ve HTTP 404:

```
HTTP ERROR 404
No se puede encontrar esta página (localhost)
No se ha encontrado ninguna página web para la dirección http://localhost:5173/.
```

SÍNTOMA:
- Servidor Vite está corriendo (conecta correctamente)
- Pero 404 en raíz (/)
- Landing page no carga

CAUSA:
─────
Vite busca index.html en la RAÍZ del proyecto (donde está vite.config.js)
Pero el archivo estaba en src/pages/home/public/index.html

ROOT CAUSE:
├─ index.html ubicado incorrectamente en public/
├─ Vite no lo encuentra en raíz
└─ Devuelve 404

SOLUCIÓN APLICADA:
──────────────────

1. ✅ Crear index.html en raíz:
   - Ubicación antes: src/pages/home/public/index.html
   - Ubicación correcta: src/pages/home/index.html (RAÍZ del proyecto Vite)
   - Contenido: Idéntico, solo cambiar ubicación

ARCHIVO CREADO:
├─ src/pages/home/index.html (NUEVO en raíz)
│  └─ Vite ahora lo encuentra correctamente

ESTRUCTURA CORRECTA PARA VITE:
──────────────────────────────

src/pages/home/   ← Raíz del proyecto Vite
├── vite.config.js
├── index.html     ← AQUÍ (debe estar en raíz)
├── main.jsx
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Gallery.jsx
│   ├── Team.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── styles/
│   └── App.css
└── package.json

RESULTADO:
──────────
✅ Vite encuentra index.html en raíz
✅ Servidor responde con landing page
✅ http://localhost:5173 funciona
✅ Landing page visible en navegador

═══════════════════════════════════════════════════════════════════════════════════
🔧 TEMPLATES PARA GENERATOR
═══════════════════════════════════════════════════════════════════════════════════

ESTRUCTURA RECOMENDADA PARA GENERATOR:
───────────────────────────────────────

Cuando generes proyecto frontend:

Crear:
└─ proyecto/
   ├── vite.config.js ← raíz
   ├── index.html ← AQUÍ en raíz (no en public/)
   ├── main.jsx ← raíz
   ├── App.jsx ← raíz
   ├── package.json ← raíz
   ├── components/ ← raíz
   └── styles/ ← raíz

NO HACER:
└─ proyecto/
   ├── vite.config.js
   └── public/
       └── index.html ← ❌ MAL ubicación

═══════════════════════════════════════════════════════════════════════════════════
📋 CHECKLIST PARA EVITAR EN GENERATOR
═══════════════════════════════════════════════════════════════════════════════════

[ ] index.html DEBE estar en raíz del proyecto Vite (donde está vite.config.js)
[ ] NO poner index.html en carpeta public/
[ ] Dockerfile.frontend DEBE copiar TODO el proyecto (incluyendo index.html raíz)
[ ] vite.config.js debe estar en misma carpeta que index.html
[ ] main.jsx debe estar en raíz (referenciado en index.html)

═══════════════════════════════════════════════════════════════════════════════════
⏱️ FECHA DEL FIX
═══════════════════════════════════════════════════════════════════════════════════

Fecha: 2026-04-12
Archivo: src/pages/home/index.html (CREADO)
Impacto: CRÍTICO - Sin esto Vite devuelve 404

═══════════════════════════════════════════════════════════════════════════════════
🐛 BUG #2: Landing page no se ve (frontend no se sirve)
═══════════════════════════════════════════════════════════════════════════════════

PROBLEMA:
─────────
Usuario intenta acceder pero no ve nada:
- Solo backend (Express) en :8000
- Frontend (React/Vite) NO está siendo servido
- Landing page en src/pages/home/ nunca se levanta

SÍNTOMA:
```
No veo la página literalmente
```

CAUSA:
─────
1. docker-compose.yml solo levantaba backend (Express)
2. Frontend (React) en src/pages/home/ nunca se compilaba en Docker
3. Landing page nunca servida

ROOT CAUSE:
└─ docker-compose.yml: solo 1 servicio (backend), faltaba frontend

ACLARACIÓN IMPORTANTE:
──────────────────────
Una "landing page" es SOLO frontend (React/Vite).
NO necesita API backend.
El backend (Express) NO es necesario para landing pages.

SOLUCIÓN CORRECTA:
──────────────────

1. ✅ Simplificar docker-compose.yml:
   - SOLO frontend (React/Vite)
   - Puerto 5173
   - Sin backend

2. ✅ Crear Dockerfile.frontend:
   - Node 18 alpine
   - node_modules para React
   - Exponer 5173
   - npm run dev

3. ✅ Configurar vite.config.js:
   - host: '0.0.0.0' (escuchar en todas interfaces)
   - port: 5173
   - usePolling: true (hot-reload en Docker)

ARCHIVOS MODIFICADOS:
├─ docker-compose.yml
│  └─ SOLO servicio frontend + React
│
├─ Dockerfile.frontend
│  └─ NUEVO - Para servir React
│
└─ vite.config.js
   └─ Configuración para Docker

DOCKER COMPOSE CORRECTO (FINAL):
─────────────────────────────────

version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    container_name: nails-landing
    ports:
      - "5173:5173"
    volumes:
      - ./src/pages/home:/app/src/pages/home
      - /app/src/pages/home/node_modules
    command: npm run dev
    restart: unless-stopped

RESULTADO:
──────────
✅ Frontend accesible en http://localhost:5173
✅ Landing page visible
✅ Hot reload funcionando
✅ Solo React, sin backend innecesario

═══════════════════════════════════════════════════════════════════════════════════
🔧 TEMPLATES PARA GENERATOR
═══════════════════════════════════════════════════════════════════════════════════

docker-compose.yml.template:
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    container_name: {{negocio_slug}}-landing
    ports:
      - "5173:5173"
    volumes:
      - ./src/pages/home:/app/src/pages/home
      - /app/src/pages/home/node_modules
    command: npm run dev
    restart: unless-stopped
```

Dockerfile.frontend.template:
```dockerfile
FROM node:18-alpine

WORKDIR /app/src/pages/home

COPY src/pages/home/package*.json ./

RUN npm install

COPY src/pages/home .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

vite.config.js.template:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    }
  },
})
```

═══════════════════════════════════════════════════════════════════════════════════
📋 CHECKLIST PARA EVITAR EN GENERATOR
═══════════════════════════════════════════════════════════════════════════════════

[ ] Landing page = SOLO frontend (React/Vite)
[ ] docker-compose.yml DEBE servir FRONTENDen puerto 5173
[ ] Dockerfile.frontend DEBE existir y ser correcto
[ ] vite.config.js DEBE tener host: '0.0.0.0'
[ ] vite.config.js DEBE tener usePolling: true
[ ] NO incluir backend Express (innecesario para landing page)
[ ] NO tener múltiples servicios si no se necesitan

═══════════════════════════════════════════════════════════════════════════════════
⏱️ FECHA DEL FIX
═══════════════════════════════════════════════════════════════════════════════════

Fecha: 2026-04-12
Archivos: docker-compose.yml, Dockerfile.frontend, vite.config.js
Impacto: CRÍTICO - Sin esto la landing page no se ve

═══════════════════════════════════════════════════════════════════════════════════
