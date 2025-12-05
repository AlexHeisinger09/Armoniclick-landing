import { useState, useEffect } from 'react'
import { DemoSignUpModal } from '../components/DemoSignUpModal'

export function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

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

  const getBackgroundImage = () => {
    if (isMobile && isLandscape) return 'url(/armoni-fondo-movil-landscape.webp)'
    if (isMobile) return 'url(/armoni-fondo-movil.webp)'
    return 'url(/armoni-fondo-triangu.webp)'
  }

  return (
    <section
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-start"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="px-3 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-1 gap-8 md:gap-12">
            {/* Left Content - Alineado a la izquierda */}
            <div className="text-left md:max-w-2xl">
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                ✨ Software líder para dentistas independientes
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Administra tu consulta estética y odontológica en un solo lugar
              </h1>

              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Software diseñado para dentistas independientes: gestiona pacientes, ficha clínica, agenda, presupuestos, consentimientos informados, firma digital y recordatorios automáticos por WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start mb-8 sm:mb-12">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-xl transition text-sm sm:text-lg"
                >
                  Solicita tu demo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 text-xs sm:text-sm text-white/80 justify-start flex-wrap">
                <div className="text-left">
                  <p className="font-semibold text-white text-base sm:text-lg">500+</p>
                  <p>Profesionales dentales</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-base sm:text-lg">50k+</p>
                  <p>Pacientes gestionados</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white text-base sm:text-lg">4.9/5</p>
                  <p>Calificación promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Sign Up Modal */}
      <DemoSignUpModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  )
}
