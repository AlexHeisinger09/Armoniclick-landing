# ArmoniClick Landing Page

Landing page profesional para promocionar y vender la aplicación ArmoniClick - Gestión integral de clínicas dentales.

## Características

✨ Página de presentación moderna y responsiva
- Sección Hero con CTA principal
- Características destacadas (6 secciones)
- Beneficios comprobados con estadísticas
- Planes de pricing con 3 opciones
- Testimonios de clientes reales
- Formulario de registro/newsletter
- Footer con información de contacto

## Tech Stack

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **TailwindCSS** - Utility-first CSS
- **Lucide React** - Iconos SVG

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Build para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx       # Navegación fija con menú móvil
│   └── Footer.tsx       # Pie de página con contacto
├── sections/
│   ├── Hero.tsx         # Sección principal con CTA
│   ├── Features.tsx     # 6 características principales
│   ├── Benefits.tsx     # Beneficios con iconos
│   ├── Pricing.tsx      # 3 planes de precios
│   ├── Testimonials.tsx # Opiniones de clientes
│   └── CTA.tsx          # Call to action final
├── App.tsx              # Componente principal
├── index.css            # Estilos TailwindCSS
└── main.tsx             # Entrada de React
```

## Personalización

### Colores
Los colores primarios están definidos en `tailwind.config.js`:
- Primary: #0EA5E9 (Blue)
- Secondary: #06B6D4 (Cyan)
- Accent: #EC4899 (Pink)

### Contenido
Edita el contenido en cada archivo de sección:
- Textos, descripciones
- Planes y precios
- Testimonios
- Enlaces de contacto

### Email y Contact
Actualiza en Footer.tsx y CTA.tsx:
- Email: info@armoniclick.com
- Teléfono: +56 9 1234 5678

## Deploy

### Netlify
```bash
npm run build
# Sube la carpeta 'dist/' a Netlify
```

### Vercel
```bash
npm run build
# Sube el proyecto a Vercel
```

## Desarrollo Futuro

- Agregar blog/recursos
- Integración con email marketing
- Chat en vivo
- Analytics
- Dark mode
- Multi-idioma

© 2024 ArmoniClick. Todos los derechos reservados.
