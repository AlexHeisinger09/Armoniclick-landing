# Guía de Personalización - Landing Page ArmoniClick

## 1. Información de Contacto

### Dónde cambiar:
**Archivo:** `src/components/Footer.tsx`

Busca y reemplaza:
- Email: `info@armoniclick.com` → tu email
- Teléfono: `+56 9 1234 5678` → tu teléfono
- Ubicación: `Santiago, Chile` → tu ubicación

**Archivo:** `src/sections/CTA.tsx`

Busca y reemplaza:
- Email en mailto link
- Teléfono en tel link

## 2. Colores de Marca

**Archivo:** `tailwind.config.js`

Personaliza los colores en la sección `extend.colors`:
```javascript
colors: {
  primary: '#0EA5E9',      // Blue principal
  secondary: '#06B6D4',    // Cyan secundario
  accent: '#EC4899',       // Rosa para acentos
},
```

Ejemplos:
- Para un verde profesional: `primary: '#10B981'`
- Para un púrpura: `primary: '#A855F7'`

## 3. Contenido Principal

### Hero Section
**Archivo:** `src/sections/Hero.tsx`

Cambiar:
- Título principal
- Descripción
- Badges/tags
- Números de estadísticas

### Features (Características)
**Archivo:** `src/sections/Features.tsx`

En el array `features`:
- Títulos de características
- Descripciones
- Puedes cambiar los iconos usando lucide-react

Ejemplo de iconos disponibles:
- `Settings`, `Shield`, `Zap`, `Users`, `Chart`, etc.
- Ver: https://lucide.dev/

### Beneficios
**Archivo:** `src/sections/Benefits.tsx`

Personaliza:
- Títulos de beneficios
- Items de cada beneficio
- Estadísticas (40%, 60%, 95%)

### Planes de Pricing
**Archivo:** `src/sections/Pricing.tsx`

En el array `plans`:
- Nombres de planes
- Descripciones
- Precios
- Features por plan
- Marcar el plan más popular con `highlighted: true`

### Testimonios
**Archivo:** `src/sections/Testimonials.tsx`

En el array `testimonials`:
- Nombres de clientes
- Roles/títulos
- Emojis de avatar (puedes cambiar)
- Testimonio (comilla)
- Calificación (1-5 estrellas)

## 4. Logo y Branding

### Cambiar logo en Navbar y Footer

**Archivos:** 
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`

Busca el elemento con `className="w-10 h-10 bg-gradient-to-br..."`

Opción 1: Usar texto
```tsx
<span className="text-white font-bold text-lg">A</span>
```

Opción 2: Usar imagen
```tsx
<img src="/tu-logo.png" alt="Logo" className="w-10 h-10" />
```

## 5. Enlaces y URLs

### Links de navegación
**Archivo:** `src/components/Navbar.tsx`

Busca `href="#features"` y actualiza según tus secciones

### Botones CTA
Todos los botones `onClick` o `href` apuntan a `#` o son placeholders.

Conectar a:
- Tu aplicación web
- Página de registro
- Sistema de reservas

## 6. Agregar Imágenes

### Estructura de carpetas
```
public/
├── logo.png
├── hero-image.png
└── feature-icon.png
```

### Usar en componentes
```tsx
<img src="/logo.png" alt="Descripción" />
```

## 7. SEO y Meta Tags

**Archivo:** `index.html`

Actualiza:
```html
<title>ArmoniClick - Gestión de Clínicas Dentales</title>
<meta name="description" content="Tu descripción aquí">
```

## 8. Scripts y Tracking

### Google Analytics
En `index.html`, después de `<title>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Facebook Pixel
En `index.html`, en `<head>`:
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};...}
</script>
```

## 9. Email Marketing

### Mailchimp Integration
En `src/sections/CTA.tsx`, función `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Enviar a tu servidor o servicio de email
  // await fetch('/api/subscribe', { body: JSON.stringify({ email }) })
}
```

## 10. Deployment

### Netlify
1. Push a GitHub
2. Conecta con Netlify
3. Deploy automático en push

### Vercel
1. Push a GitHub
2. Importa en Vercel
3. Deploy automático

### Variables de Entorno
Si necesitas:
```
VITE_API_URL=https://tu-api.com
```

En `.env.local` para desarrollo
En dashboard de Netlify/Vercel para producción

## 11. Funcionalidad de Formulario

El formulario en CTA envía un email pero está mockeado.

Para hacerlo funcional, necesitas:

### Opción 1: Netlify Functions
```typescript
// netlify/functions/subscribe.ts
export const handler = async (event) => {
  const { email } = JSON.parse(event.body)
  // Enviar email o guardar a BD
  return { statusCode: 200 }
}
```

### Opción 2: Servicio externo (Mailchimp, SendGrid)
Integrar su SDK en el formulario

## 12. Responsive Design

Ya está optimizado para mobile/tablet/desktop.

Para ajustar breakpoints:
- En clases TailwindCSS: `md:`, `lg:`, `xl:`
- `md:` = 768px
- `lg:` = 1024px
- `xl:` = 1280px

## Checklist de Personalización

- [ ] Cambiar email de contacto
- [ ] Cambiar teléfono
- [ ] Actualizar colores de marca
- [ ] Cambiar contenido de Hero
- [ ] Cambiar características
- [ ] Actualizar planes y precios
- [ ] Cambiar testimonios
- [ ] Agregar logo
- [ ] Actualizar meta tags SEO
- [ ] Configurar Google Analytics
- [ ] Conectar formulario a email service
- [ ] Actualizar links CTA a tu app
- [ ] Probar en mobile
- [ ] Deploy

## Soporte

Preguntas sobre TailwindCSS: https://tailwindcss.com/docs
Preguntas sobre React: https://react.dev/learn
Iconos disponibles: https://lucide.dev/
