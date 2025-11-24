import { ArrowRight, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < 768
  const isLandscape = windowSize.width > windowSize.height

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: isMobile
          ? 'url(/armoni-fondo-movil.webp)'
          : 'url(/armoni-fondo-triangu.webp)',
        backgroundSize: isLandscape && isMobile ? 'auto 100%' : 'cover',
        backgroundPosition: isLandscape && isMobile ? 'center center' : 'center center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="px-3 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20 w-full">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-1 gap-8 md:gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left md:max-w-2xl">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              ✨ Solución líder en Chile
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Gestiona tu clínica dental con
              <span className="text-white"> ArmoniClick</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Simplifica la administración de pacientes, citas, tratamientos y más. Aumenta tu productividad hasta un 40% con nuestra plataforma inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center md:justify-start mb-8 sm:mb-12">
              <button className="bg-white text-blue-600 px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base">
                Comenzar gratis
                <ArrowRight size={18} className="hidden sm:block" />
              </button>
              <button className="border-2 border-white text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm sm:text-base">
                <Play size={18} />
                Ver demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 justify-center md:justify-start flex-wrap">
              <div className="text-center md:text-left">
                <p className="font-semibold text-white text-base sm:text-lg">500+</p>
                <p>Clínicas activas</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-white text-base sm:text-lg">50k+</p>
                <p>Pacientes gestionados</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-white text-base sm:text-lg">4.9/5</p>
                <p>Calificación promedio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
