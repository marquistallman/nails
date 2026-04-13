#!/bin/bash
# INICIO RÁPIDO - AUTOMATIZACIÓN DE LANDING PAGES
# Lee este archivo para entender qué hacer

echo "📚 GUÍA DE INICIO RÁPIDO - AUTOMATIZACIÓN"
echo "═════════════════════════════════════════"
echo ""

# 1. ENTENDER QUÉ FALTABA
echo "PASO 1: Leer documentación"
echo "├─ QUE_FALTABA_REFERENCIA.md (EMPIEZA AQUÍ ⭐)"
echo "├─ AUTOMATIZACION_COMPLETA.md"
echo "├─ GITHUB_PAGES_DOCKER_GUIA.md"
echo "└─ ESTRUCTURA_PROYECTO.txt"
echo ""

# 2. CREAR EL GENERATOR
echo "PASO 2: Crear tu generador (3 opciones)"
echo "├─ Opción A: ./scripts/create-landing-page.js (RECOMENDADO ⭐)"
echo "├─ Opción B: ./scripts/create-landing-page.sh"
echo "└─ Opción C: ./scripts/create-landing-page.ps1"
echo ""

# 3. CREAR TEMPLATES
echo "PASO 3: Crear templates"
echo "├─ ./templates/Header.jsx.template"
echo "├─ ./templates/Hero.jsx.template"
echo "├─ ./templates/Services.jsx.template"
echo "├─ ./templates/Gallery.jsx.template"
echo "├─ ./templates/Team.jsx.template"
echo "├─ ./templates/ContactForm.jsx.template"
echo "├─ ./templates/Footer.jsx.template"
echo "├─ ./templates/App.css.template"
echo "├─ ./templates/index.html.template"
echo "└─ ... otros templates"
echo ""

# 4. CREAR CONFIG JSON
echo "PASO 4: Crear config.json template"
echo "Ubicación: ./templates/config.json.template"
echo "Ejemplo de uso:"
echo "  $ node scripts/create-landing-page.js --config mi-config.json"
echo ""

# 5. PROBAR
echo "PASO 5: Probar el generator"
echo "  $ node scripts/create-landing-page.js --name 'MiSalon' --primary '#d4617f'"
echo ""

echo "═════════════════════════════════════════"
echo ""
echo "ESTRUCTURA RECOMENDADA:"
echo ""
echo "proyecto-landings/"
echo "├── scripts/"
echo "│   ├── create-landing-page.js    ← GENERADOR (PRINCIPAL)"
echo "│   ├── create-landing-page.sh    (Alternativa bash)"
echo "│   └── helpers.js                (Funciones auxiliares)"
echo "│"
echo "├── templates/"
echo "│   ├── Header.jsx.template"
echo "│   ├── Hero.jsx.template"
echo "│   ├── Services.jsx.template"
echo "│   ├── Gallery.jsx.template"
echo "│   ├── Team.jsx.template"
echo "│   ├── ContactForm.jsx.template"
echo "│   ├── Footer.jsx.template"
echo "│   ├── App.jsx.template"
echo "│   ├── App.css.template"
echo "│   ├── index.html.template"
echo "│   ├── package.json.template"
echo "│   ├── vite.config.js.template"
echo "│   ├── Dockerfile.template"
echo "│   ├── docker-compose.yml.template"
echo "│   ├── .dockerignore.template"
echo "│   └── config.json.template"
echo "│"
echo "├── generated-projects/          ← Aquí se crean nuevos proyectos"
echo "│   ├── MiSalon/"
echo "│   ├── OtroSalon/"
echo "│   └── ..."
echo "│"
echo "├── .github/workflows/"
echo "│   └── auto-deploy.yml          (Para CI/CD)"
echo "│"
echo "└── README.md"
echo ""

echo "═════════════════════════════════════════"
echo ""
echo "ALGORITMO DEL GENERATOR (JavaScript):"
echo ""
echo "1. Parsear argumentos"
echo "   --name, --primary, --accent, --config"
echo ""
echo "2. Leer config.json (si existe) o crear desde args"
echo "   {negocio, colores, contacto, servicios, ...}"
echo ""
echo "3. Crear carpetas"
echo "   ./generated-projects/NombreProyecto/{src,public,.github}"
echo ""
echo "4. Para CADA template:"
echo "   a. Leer ./templates/archivo.template"
echo "   b. Reemplazar {{variable}} con valor de config"
echo "   c. Escribir ./generated-projects/.../archivo"
echo "   d. Log: '✅ Generado: archivo'"
echo ""
echo "5. Copiar archivos binarios"
echo "   .gitignore, .dockerignore"
echo ""
echo "6. Inicializar Git"
echo "   git init → git add . → git commit"
echo ""
echo "7. Mostrar instrucciones finales"
echo "   cd nombre-proyecto && npm install && npm run dev"
echo ""

echo "═════════════════════════════════════════"
echo ""
echo "CÓDIGO BASE DEL GENERATOR:"
echo ""
cat > scripts/generator-template.js << 'GENERATOR_CODE'
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LandingPageGenerator {
  constructor(config) {
    this.config = config;
    this.projectName = config.negocio.replace(/\s+/g, '-').toLowerCase();
    this.projectPath = path.join(process.cwd(), 'generated-projects', this.projectName);
  }

  // Crear estructura
  createDirectories() {
    const dirs = [
      'src/pages/home/components',
      'src/pages/home/styles',
      'src/pages/home/public',
      '.github/workflows',
    ];
    
    dirs.forEach(dir => {
      fs.mkdirSync(path.join(this.projectPath, dir), { recursive: true });
      console.log(`✅ ${dir}`);
    });
  }

  // Reemplazar variables en template
  processTemplate(templateName, outputPath) {
    const templatePath = path.join(__dirname, '..', 'templates', templateName + '.template');
    let content = fs.readFileSync(templatePath, 'utf8');
    
    // Reemplazar {{variables}}
    Object.keys(this.config).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      const value = typeof this.config[key] === 'object' 
        ? JSON.stringify(this.config[key])
        : this.config[key];
      content = content.replace(regex, value);
    });
    
    const fullPath = path.join(this.projectPath, outputPath);
    fs.writeFileSync(fullPath, content);
    console.log(`✅ ${outputPath}`);
  }

  // Generar todo
  generate() {
    console.log(`\n🚀 Generando: ${this.config.negocio}\n`);
    
    this.createDirectories();
    
    // Procesar componentes
    ['Header.jsx', 'Hero.jsx', 'Services.jsx', 'Gallery.jsx', 'Team.jsx', 'ContactForm.jsx', 'Footer.jsx'].forEach(comp => {
      this.processTemplate(comp, `src/pages/home/components/${comp}`);
    });
    
    // Procesar otros archivos
    this.processTemplate('App.css', 'src/pages/home/styles/App.css');
    this.processTemplate('index.html', 'src/pages/home/public/index.html');
    
    console.log(`\n✅ ¡Proyecto creado en: ${this.projectPath}\n`);
  }
}

module.exports = LandingPageGenerator;
GENERATOR_CODE

echo ""
echo "═════════════════════════════════════════"
echo ""
echo "PRÓXIMO PASO: LEE QUE_FALTABA_REFERENCIA.md"
echo ""
