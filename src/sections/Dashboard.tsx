import { useState, useEffect, useRef } from 'react'
import { CloudinaryImage } from '../components/CloudinaryImage'

export function Dashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2, // Se activa cuando el 20% de la sección es visible
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="dashboard" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Tu Panel de Control
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interfaz intuitiva y poderosa para dentistas independientes
          </p>
        </div>

        {/* Dashboard Preview - Multiple Screenshots with Animation */}
        {/* Desktop: 3 imágenes superpuestas */}
        <div className="hidden md:block relative h-[600px] overflow-visible">
          {/* Imagen Principal (Centro) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-1 backdrop-blur-sm w-full max-w-2xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <CloudinaryImage
                  publicId="Dashboard2_ivp9fo.png"
                  alt="Panel de control ArmoniClick - Dashboard principal"
                  className="w-full h-auto object-contain"
                  width={1000}
                  quality="auto:best"
                />
              </div>
            </div>
          </div>

          {/* Imagen Izquierda - Dashboard 4 (Aparece con scroll) */}
          <div className={`absolute top-16 left-0 z-20 w-[35%] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0 animate-slide-in-left' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-1 backdrop-blur-sm transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <CloudinaryImage
                  publicId="Dashboard4_joam4z.png"
                  alt="Vista de agenda ArmoniClick"
                  className="w-full h-auto object-contain"
                  width={700}
                  quality="auto:best"
                />
              </div>
            </div>
          </div>

          {/* Imagen Derecha - Dashboard 3 (Aparece con scroll) */}
          <div className={`absolute bottom-16 right-0 z-20 w-[35%] transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0 animate-slide-in-right' : 'opacity-0 translate-x-20'
          }`}>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-1 backdrop-blur-sm transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <CloudinaryImage
                  publicId="Dashboard3_lklbxe.png"
                  alt="Vista de pacientes ArmoniClick"
                  className="w-full h-auto object-contain"
                  width={700}
                  quality="auto:best"
                />
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-8 left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs z-30 border-2 border-cyan-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Tiempo Real</p>
                <p className="text-sm text-slate-500">Datos actualizados al instante</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Una sola imagen principal */}
        <div className="md:hidden">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-1 backdrop-blur-sm">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                publicId="Dashboard2_ivp9fo.png"
                alt="Panel de control ArmoniClick - Dashboard principal"
                className="w-full h-auto object-contain"
                width={800}
                quality="auto:best"
              />
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Control Financiero Completo
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Monitorea tus ingresos en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Controla ingresos potenciales de presupuestos pendientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Acceso rápido a todas las funcionalidades desde un solo lugar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Métricas de desempeño y productividad actualizadas al instante</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Acceso y Gestión Eficiente
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Navegación intuitiva entre todas las secciones del sistema</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Consulta todas tus citas del día rápidamente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Compatible con computadores, tablets y smartphones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-600">Sincronización automática en la nube</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
