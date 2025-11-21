# 🚀 Inicio Rápido - Landing Page ArmoniClick

## Setup en 2 minutos

### 1. Instalar dependencias
```bash
cd ArmoniClick-landing
npm install
```

### 2. Correr localmente
```bash
npm run dev
```

Abre: http://localhost:5173

### 3. Editar y ver cambios en tiempo real
Los cambios se reflejan automáticamente mientras escribes.

## Estructura de Archivos

```
src/
├── App.tsx                 # Componente principal
├── components/
│   ├── Navbar.tsx         # Barra de navegación
│   └── Footer.tsx         # Pie de página
├── sections/
│   ├── Hero.tsx           # Sección principal
│   ├── Features.tsx       # Características (6 items)
│   ├── Benefits.tsx       # Beneficios (4 bloques)
│   ├── Pricing.tsx        # Planes (3 opciones)
│   ├── Testimonials.tsx   # Opiniones (4 clientes)
│   └── CTA.tsx            # Call to action final
├── main.tsx               # Entrada de React
└── index.css              # Estilos globales
```

## Cambios Comunes

### Cambiar título principal
**Archivo:** `src/sections/Hero.tsx`

```tsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
  Tu nuevo título aquí
</h1>
```

### Cambiar email de contacto
**Archivo:** `src/components/Footer.tsx`

```tsx
<a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a>
```

### Cambiar colores
**Archivo:** `tailwind.config.js`

```javascript
colors: {
  primary: '#TU_COLOR_HEX',
  secondary: '#OTRO_COLOR_HEX',
},
```

Luego en componentes, usa `from-primary to-secondary`

### Cambiar planes y precios
**Archivo:** `src/sections/Pricing.tsx`

Edita el array `plans`:
```tsx
const plans = [
  {
    name: 'Mi Plan',
    price: '99',
    features: ['Feature 1', 'Feature 2'],
  },
  // ...
]
```

### Cambiar testimonios
**Archivo:** `src/sections/Testimonials.tsx`

Edita el array `testimonials`:
```tsx
{
  name: 'Nombre Cliente',
  role: 'Su cargo',
  image: '👨‍⚕️',
  content: 'Su testimonio aquí...',
  rating: 5
}
```

## Scripts Disponibles

```bash
npm run dev      # Desarrollo con hot reload
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Validar código
```

## Componentes Útiles

### Botón azul grande
```tsx
<button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition">
  Texto del botón
</button>
```

### Tarjeta con hover
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
  Contenido aquí
</div>
```

### Icono + Texto
```tsx
import { Users } from 'lucide-react'

<div className="flex items-center gap-3">
  <Users className="text-blue-600" size={24} />
  <span>Mis usuarios</span>
</div>
```

## Iconos Disponibles

Lucide React tiene 400+ iconos. Algunos populares:

- `Calendar`, `Clock`, `Users`, `Settings`, `Shield`
- `TrendingUp`, `Home`, `Mail`, `Phone`, `MapPin`
- `Star`, `Check`, `X`, `Menu`, `Search`

Ver más: https://lucide.dev/

## Colores de TailwindCSS

Usa directamente en clases:

```tsx
bg-blue-500          // Fondo azul
text-gray-900        // Texto gris oscuro
border-gray-200      // Borde gris claro
text-white           // Texto blanco
```

## Deploy a Netlify en 3 pasos

1. Push a GitHub
2. En https://netlify.com: "New site from Git"
3. Selecciona tu repositorio
4. Deploy automático ✨

## Deploy a Vercel en 3 pasos

1. Push a GitHub
2. En https://vercel.com: "New Project"
3. Selecciona tu repositorio
4. Deploy automático ✨

## Troubleshooting

### El sitio se ve roto
- Reinicia: `npm run dev`
- Limpia caché: Ctrl+Shift+Delete en navegador

### Errores de TypeScript
- Revisa la terminal mientras escribes
- El build falla si hay errores

### Cambios no aparecen
- Espera a que Vite recompile (1-2 seg)
- Recarga el navegador (F5)

## Próximos Pasos

1. Personaliza todo según la guía: `GUIA_PERSONALIZACION.md`
2. Agrega tu logo en `public/`
3. Prueba en mobile (F12 → móvil)
4. Crea tu cuenta en Netlify/Vercel
5. Conecta GitHub y haz push
6. ¡Deploy! 🎉

## ¿Necesitas Ayuda?

- React: https://react.dev
- TailwindCSS: https://tailwindcss.com
- Lucide Icons: https://lucide.dev
- Vite: https://vite.dev
