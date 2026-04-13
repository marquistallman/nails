#!/bin/bash
# 📋 CHECKLIST: ARCHIVOS TEMPLATE QUE NECESITAS CREAR
# (Basados en el proyecto NailStudio actual)

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  📋 CHECKLIST DE TEMPLATES PARA AUTOMATIZACIÓN                ║"
echo "║     (Estos son todos los archivos a convertir en templates)   ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# PASO 1: Crear carpeta templates
echo "PASO 1: Crear carpeta templates/"
mkdir -p templates
echo "✅ ./templates/"
echo ""

# PASO 2: React Components (7 archivos)
echo "PASO 2: React Components"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/Header.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Header.jsx"
echo "    └─ Variables: {{negocio}}, {{color_primary}}"

echo ""
echo "[ ] templates/Hero.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Hero.jsx"
echo "    └─ Variables: {{negocio}}, {{descripcion}}"

echo ""
echo "[ ] templates/Services.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Services.jsx"
echo "    └─ Variables: {{servicios}} (array JSON)"

echo ""
echo "[ ] templates/Gallery.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Gallery.jsx"
echo "    └─ Variables: {{galeria}} (array JSON)"

echo ""
echo "[ ] templates/Team.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Team.jsx"
echo "    └─ Variables: {{testimonios}} (array JSON)"

echo ""
echo "[ ] templates/ContactForm.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/ContactForm.jsx"
echo "    └─ Variables: {{whatsapp}}, {{email}}, {{horarios}}, {{ubicacion}}"

echo ""
echo "[ ] templates/Footer.jsx.template"
echo "    ├─ Basado en: src/pages/home/components/Footer.jsx"
echo "    └─ Variables: {{negocio}}, {{redes}}, {{email}}, {{phone}}"

echo ""
echo "[ ] templates/App.jsx.template"
echo "    ├─ Basado en: src/pages/home/App.jsx"
echo "    └─ Variables: (ninguna especial)"

echo ""
echo "Total React: 8 archivos"
echo ""

# PASO 3: CSS (1 archivo)
echo "PASO 3: Estilos"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/App.css.template"
echo "    ├─ Basado en: src/pages/home/styles/App.css"
echo "    └─ Variables: {{color_primary}}, {{color_dark}}, {{color_secondary}}, {{color_accent}}"
echo ""

# PASO 4: HTML (1 archivo)
echo "PASO 4: HTML"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/index.html.template"
echo "    ├─ Basado en: src/pages/home/public/index.html"
echo "    └─ Variables: {{negocio}}, {{seo_title}}, {{seo_description}}, {{seo_keywords}}"
echo ""

# PASO 5: Config Files (4 archivos)
echo "PASO 5: Archivos de Configuración"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/package.json.template"
echo "    ├─ Basado en: src/pages/home/package.json"
echo "    └─ Variables: {{negocio}}"

echo ""
echo "[ ] templates/vite.config.js.template"
echo "    ├─ Basado en: src/pages/home/vite.config.js"
echo "    └─ Variables: (ninguna)"

echo ""
echo "[ ] templates/.gitignore.template"
echo "    ├─ Estándar Node
echo "    └─ Variables: (ninguna)"

echo ""
echo "[ ] templates/.dockerignore.template"
echo "    ├─ Estándar Node + Docker"
echo "    └─ Variables: (ninguna)"

echo ""

# PASO 6: Docker (2 archivos)
echo "PASO 6: Docker"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/Dockerfile.template"
echo "    ├─ Para producción"
echo "    ├─ Basado en: ./Dockerfile"
echo "    └─ Variables: (ninguna)"

echo ""
echo "[ ] templates/docker-compose.yml.template"
echo "    ├─ Para desarrollo local"
echo "    ├─ Basado en: ./docker-compose.yml"
echo "    └─ Variables: {{negocio}} (nombre del servicio)"

echo ""

# PASO 7: Otros (2 archivos)
echo "PASO 7: Otros Archivos"
echo "───────────────────────────────────────────────────"

echo "[ ] templates/config.json.template"
echo "    ├─ Plantilla de configuración"
echo "    └─ Usuarios lo personalizan"

echo ""
echo "[ ] templates/README.md.template"
echo "    ├─ Documentación del proyecto"
echo "    └─ Variables: {{negocio}}"

echo ""

# RESUMEN
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  RESUMEN DE TEMPLATES A CREAR                                 ║"
echo "╠════════════════════════════════════════════════════════════════╣"
echo "║  React Components      → 8 archivos                           ║"
echo "║  Estilos               → 1 archivo                            ║"
echo "║  HTML                  → 1 archivo                            ║"
echo "║  Config                → 4 archivos                           ║"
echo "║  Docker                → 2 archivos                           ║"
echo "║  Otros                 → 2 archivos                           ║"
echo "║  ────────────────────────────────                             ║"
echo "║  TOTAL                 → 18 archivos                          ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# INSTRUCCIONES PASO A PASO
echo "📝 CÓMO CREAR LOS TEMPLATES (Paso a paso)"
echo "═════════════════════════════════════════════════════════════════<<"
echo ""

echo "PASO 1: Copiar archivos actuales"
echo "─────────────────────────────────"
echo "$ cp src/pages/home/components/Header.jsx templates/Header.jsx.template"
echo "$ cp src/pages/home/components/Hero.jsx templates/Hero.jsx.template"
echo "$ # ... copiar todos"
echo ""

echo "PASO 2: Editar cada template"
echo "─────────────────────────────"
echo "Abrir: templates/Header.jsx.template"
echo "Buscar: 'NailStudio'"
echo "Reemplazar por: '{{negocio}}'"
echo ""
echo "Buscar: '#d4617f' (color)"
echo "Reemplazar por: '{{color_primary}}'"
echo ""

echo "PASO 3: Hacer lo mismo para todos"
echo "───────────────────────────────────"
echo "VARIABLES CLAVE A REEMPLAZAR:"
echo ""
echo "  {{negocio}}           → 'NailStudio'"
echo "  {{color_primary}}     → '#d4617f'"
echo "  {{color_dark}}        → '#b83d5f'"
echo "  {{color_secondary}}   → '#f5a5c2'"
echo "  {{color_accent}}      → '#ffd700'"
echo "  {{whatsapp}}          → '+57...'"
echo "  {{email}}             → 'hola@...'"
echo "  {{phone}}             → '+57...'"
echo "  {{ubicacion}}         → 'Calle...'"
echo "  {{horarios}}          → JSON object"
echo "  {{servicios}}         → JSON array"
echo "  {{galeria}}           → JSON array"
echo "  {{testimonios}}       → JSON array"
echo "  {{redes}}             → JSON object"
echo "  {{seo_title}}         → '💅 MiSalon'"
echo "  {{seo_description}}   → 'Descripción...'"
echo ""

echo "PASO 4: Crear config.json de ejemplo"
echo "─────────────────────────────────────"
echo "Copia: RESUMEN_EJECUTIVO.md (busca la sección config.json)"
echo "Archivo: templates/config.json.template"
echo ""

echo "PASO 5: Crear el Generator Script"
echo "──────────────────────────────────"
echo "Archivo: scripts/create-landing-page.js"
echo "Código base en: AUTOMATIZACION_COMPLETA.md"
echo ""

echo "PASO 6: Probar"
echo "───────────────"
echo "$ node scripts/create-landing-page.js --name 'PruebaSalon'"
echo "✅ Debe crear: ./generated-projects/PruebaSalon/"
echo ""

echo "═════════════════════════════════════════════════════════════════"
echo ""

echo "🎁 BONUS: Variables que pueden ir en App.css.template"
echo "───────────────────────────────────────────────────────"
echo ""
echo "En el :root {...}:"
echo ""
echo "  --primary-color: {{color_primary}};        /* #d4617f */"
echo "  --primary-dark: {{color_dark}};            /* #b83d5f */"
echo "  --secondary-color: {{color_secondary}};    /* #f5a5c2 */"
echo "  --accent: {{color_accent}};                /* #ffd700 */"
echo ""

echo "═════════════════════════════════════════════════════════════════"
echo ""
echo "✅ CUANDO TERMINES, EJECUTA:"
echo ""
echo "$ node scripts/create-landing-page.js --name 'MiSalon'"
echo ""
echo "Y listo! Landing creado automáticamente 🚀"
echo ""

# Crear estructura de carpetas
echo "════════════════════════════════════════════════════════════════="
echo ""
echo "CREANDO ESTRUCTURA..."
echo ""

mkdir -p templates
mkdir -p scripts
mkdir -p generated-projects

echo "✅ Carpetas creadas:"
echo "   - ./templates/"
echo "   - ./scripts/"
echo "   - ./generated-projects/"
echo ""
echo "Tema de comenzar! 🚀"
