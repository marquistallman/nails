# 💅 NailStudio - Landing Page Profesional

Una landing page moderna y hermosa para un salón de uñas, con diseños personalizados, galería de trabajos, servicios y sistema de reservas.

## ✨ Características

- ✅ **Hero Section** - Sección de impacto con call-to-action
- ✅ **Servicios** - Catálogo completo de servicios con precios
- ✅ **Galería** - Portfolio con filtros de diseños de uñas
- ✅ **Testimonios** - Reseñas de clientes satisfechos
- ✅ **Formulario de Contacto** - Integración con WhatsApp
- ✅ **Header Sticky** - Navegación siempre visible
- ✅ **Footer Profesional** - Enlaces rápidos y redes sociales
- ✅ **Responsive** - Diseño optimizado para móvil, tablet y desktop
- ✅ **Efectos Modernos** - Animaciones suaves y transiciones

## 🎨 Colores

- **Color Primario**: Rosa Profundo (#d4617f)
- **Color Secundario**: Rosa Suave (#f5a5c2)
- **Accent**: Dorado (#ffd700)
- **Fondos**: Degradados elegantes

## 📋 Secciones

1. **Hero** - Bienvenida con CTA principal
2. **Servicios** - 6 servicios diferentes con tarjetas interactivas
3. **Galería** - 8 diseños con sistema de filtros
4. **Testimonios** - 4 reseñas de clientes reales
5. **Contacto** - Formulario integrado con WhatsApp
6. **Footer** - Información de contacto y enlaces

## 🚀 Instalación y Uso

### Requisitos
- Node.js 14+
- npm o yarn

### Pasos

1. **Instalar dependencias**
```bash
cd src/pages/home
npm install
```

2. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:3000`

3. **Compilar para producción**
```bash
npm run build
```

4. **Vista previa de build**
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/pages/home/
├── components/
│   ├── Header.jsx          # Navegación sticky
│   ├── Hero.jsx            # Sección principal
│   ├── Services.jsx        # Catálogo de servicios
│   ├── Gallery.jsx         # Galería de diseños
│   ├── Team.jsx            # Testimonios
│   ├── ContactForm.jsx     # Formulario de reservas
│   └── Footer.jsx          # Pie de página
├── styles/
│   └── App.css             # Estilos compilados
├── App.jsx                 # Componente raíz
├── main.jsx                # Punto de entrada
├── vite.config.js          # Configuración Vite
└── package.json            # Dependencias
```

## 🎯 Personalización

### Cambiar Colores
Edita las variables CSS en [styles/App.css](styles/App.css):
```css
:root {
  --primary-color: #d4617f;
  --primary-dark: #b83d5f;
  --secondary-color: #f5a5c2;
  --accent: #ffd700;
}
```

### Actualizar Datos
- **Servicios**: Edita el array en [components/Services.jsx](components/Services.jsx)
- **Galería**: Modifica el array en [components/Gallery.jsx](components/Gallery.jsx)
- **Testimonios**: Actualiza en [components/Team.jsx](components/Team.jsx)
- **Contacto**: Cambia números/emails en [components/ContactForm.jsx](components/ContactForm.jsx)

### Agregar Imágenes Propias
La galería usa URLs de Unsplash. Para usar tus propias imágenes:
1. Copia las imágenes a `public/images/`
2. Actualiza las rutas en los componentes

## 📞 Contacto y WhatsApp

El formulario de contacto envía directamente a WhatsApp. Actualiza el número en [components/ContactForm.jsx](components/ContactForm.jsx):

```javascript
window.open(`https://wa.me/573001234567?text=${encodedMessage}`, '_blank');
```

## 🔍 SEO y Analytics

Para mejorar SEO:
1. Actualiza el título en `public/index.html`
2. Agrega meta descripciones
3. Implementa Google Analytics
4. Optimiza imágenes

## 📱 Responsividad

El sitio es totalmente responsive en:
- 📱 Móvil (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1200px+)

## 🎁 Características Especiales

- Menu hamburguesa automático en móvil
- Navegación suave con scroll
- Galería con efecto hover
- Formulario integrado con WhatsApp
- Efectos de gradiente y sombras modernas
- Iconos emoji para accesibilidad

## 📝 Licencia

Este proyecto es de código abierto y gratuito.

## 💡 Tips

- Reemplaza los números de WhatsApp con los tuyos
- Personaliza los precios de servicios
- Actualiza fotos de la galería
- Agrega tu logo en el header
- Vincula tus redes sociales en el footer

---

**Hecho con ❤️ para salones de belleza profesionales**
