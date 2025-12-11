import { useState } from 'react'
import { DemoSignUpModal } from '../components/DemoSignUpModal'
import { CloudinaryImage } from '../components/CloudinaryImage'

export function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)


  return (
    <section
      className="h-screen w-full relative overflow-hidden flex items-center justify-start"
      style={{
        backgroundColor: '#F2F1E7'
      }}
    >
      {/* Burbujas decorativas cyan - similar al login */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.6), rgba(34, 211, 238, 0.2))' }}></div>
        <div className="absolute top-1/3 left-5 w-20 h-20 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.18))' }}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.6), rgba(34, 211, 238, 0.2))' }}></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-full shadow-sm" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.12))' }}></div>
        <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute top-1/4 right-1/2 w-28 h-28 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.45), rgba(34, 211, 238, 0.1))' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-18 h-18 rounded-full shadow-sm" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content - Texto */}
            <div className="text-left order-1">
              <div className="inline-block mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 bg-cyan-500/20 text-slate-700 rounded-full text-xs sm:text-xs font-semibold backdrop-blur-sm border border-cyan-300">
                ✨ Software líder para dentistas independientes
              </div>

              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-700 mb-2 sm:mb-3 leading-tight">
                Administra tu consulta estética y odontológica en un solo lugar
              </h1>

              <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                Software diseñado para dentistas independientes: gestiona pacientes, ficha clínica, agenda, presupuestos, consentimientos informados, firma digital y recordatorios automáticos vía correo.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-start mb-3 sm:mb-6">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-10 py-2.5 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-lg"
                >
                  Solicita tu demo
                </button>
                <a
                  href="#pricing"
                  className="bg-white hover:bg-slate-50 text-cyan-600 border-2 border-cyan-500 px-6 sm:px-10 py-2.5 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-sm sm:text-lg text-center"
                >
                  Ver planes y suscribirse
                </a>
              </div>

              <div className="hidden sm:flex flex-col sm:flex-row items-start gap-4 sm:gap-8 text-xs sm:text-sm text-slate-500 justify-start flex-wrap">
                <div className="text-left">
                  <p className="font-bold text-slate-700 text-base sm:text-lg">500+</p>
                  <p>Dentistas independientes</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-700 text-base sm:text-lg">50k+</p>
                  <p>Pacientes gestionados</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-700 text-base sm:text-lg">4.9/5</p>
                  <p>Calificación promedio</p>
                </div>
              </div>
            </div>

            {/* Right Content - Imagen de dentista */}
            <div className="flex justify-center items-center order-2 md:order-2 md:mt-16">
              <CloudinaryImage
                publicId="dentHero_wpaiyq.png"
                alt="Dentista independiente usando ArmoniClick"
                className="w-[200px] sm:w-[280px] md:w-[370px] h-auto object-contain drop-shadow-2xl"
                width={370}
                quality="auto:best"
                eager={true}
              />
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
