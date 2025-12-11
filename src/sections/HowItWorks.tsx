import { UserPlus, Settings, Rocket } from 'lucide-react'
import { CloudinaryImage } from '../components/CloudinaryImage'

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: '1',
      title: 'Regístrate',
      description: 'Suscríbete a nuestra plataforma y obtén acceso inmediato. Crea tu demo de prueba de 15 días completamente gratis, sin necesidad de tarjeta de crédito.',
      color: 'from-cyan-400 to-cyan-500',
      images: []
    },
    {
      icon: Settings,
      step: '2',
      title: 'Configura tu Consulta',
      description: 'Personaliza tu perfil, configura tus prestaciones, establece bloqueos de horarios y comparte tu link de agenda pública con tus pacientes.',
      color: 'from-cyan-500 to-cyan-600',
      images: [
        { publicId: 'configConsulta2_qkehdg.png', alt: 'Configuración de perfil', label: 'Perfil' },
        { publicId: 'configConsulta_u7lgi2.png', alt: 'Configuración de firma digital', label: 'Firma Digital' },
        { publicId: 'configConsulta3_iezstb.png', alt: 'Link público y bloqueo de agenda', label: 'Agenda Pública' },
        { publicId: 'configConsulta4_buxf5p.png', alt: 'Mantenedor de prestaciones y servicios', label: 'Prestaciones' }
      ]
    },
    {
      icon: Rocket,
      step: '3',
      title: 'Comienza a Gestionar',
      description: 'Agenda citas, crea presupuestos, gestiona fichas clínicas y envía recordatorios automáticos. Todo el control de tu consulta en un solo lugar.',
      color: 'from-cyan-600 to-cyan-700',
      images: []
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F1E7] relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-20 left-10 w-28 h-28 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.45), rgba(34, 211, 238, 0.12))' }}></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.4), rgba(34, 211, 238, 0.1))' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3">
            Comienza a usar ArmoniClick en 3 simples pasos
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
            <span className="text-lg">⏱️</span>
            <span className="text-sm font-semibold text-cyan-700">Configuración: 15 minutos</span>
          </div>
        </div>

        {/* Steps - Timeline Horizontal */}
        <div className="relative mb-16 px-4 md:px-8">
          {/* Línea horizontal - Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" style={{ left: '15%', right: '15%' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl mb-6 relative z-10 ring-4 ring-white`}>
                    <Icon className="text-white" size={40} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md z-20">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Arrow - Mobile only */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <div className="text-cyan-500 text-3xl">↓</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Step 2 Images - Horizontal Scrollable */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">
              Configura tu Consulta en Minutos
            </h3>
            <p className="text-slate-600">
              Personaliza todos los aspectos de tu consulta dental
            </p>
          </div>

          {/* Scrollable Carousel - Mobile */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-3 min-w-max">
                {steps[1].images.map((image, imgIndex) => (
                  <div key={imgIndex} className="flex flex-col items-center flex-shrink-0">
                    {/* Image Container */}
                    <div className="relative">
                      <div className="rounded-lg overflow-hidden shadow-md ring-1 ring-cyan-200 bg-white w-[200px] h-[140px] flex items-center justify-center p-0.5">
                        <CloudinaryImage
                          publicId={image.publicId}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                          width={200}
                          quality="auto:best"
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="mt-2 px-3 py-1 bg-cyan-50 rounded-full">
                      <p className="text-[11px] font-bold text-cyan-700">{image.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {steps[1].images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-cyan-300"
                ></div>
              ))}
            </div>
          </div>

          {/* Static Grid - Desktop */}
          <div className="hidden md:flex justify-center items-center gap-3 flex-wrap max-w-5xl mx-auto">
            {steps[1].images.map((image, imgIndex) => (
              <div key={imgIndex} className="flex flex-col items-center">
                {/* Image Container */}
                <div className="relative group cursor-pointer">
                  <div className="rounded-lg overflow-hidden shadow-md ring-1 ring-cyan-200 transform transition-all duration-300 group-hover:scale-105 group-hover:ring-cyan-400 group-hover:shadow-lg bg-white w-[200px] h-[140px] flex items-center justify-center p-0.5">
                    <CloudinaryImage
                      publicId={image.publicId}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      width={200}
                      quality="auto:best"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Label */}
                <div className="mt-2 px-3 py-1 bg-cyan-50 rounded-full">
                  <p className="text-[11px] font-bold text-cyan-700">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
