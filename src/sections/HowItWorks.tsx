import { UserPlus, Settings, Rocket } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: '1',
      title: 'Regístrate',
      description: 'Crea tu cuenta en menos de 2 minutos. Solo necesitas tu email y listo, sin tarjeta de crédito.',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      icon: Settings,
      step: '2',
      title: 'Configura tu Consulta',
      description: 'Personaliza tu perfil profesional, configura tu horario de atención y comienza a agregar pacientes.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Rocket,
      step: '3',
      title: 'Comienza a Gestionar',
      description: 'Agenda citas, crea presupuestos, gestiona fichas clínicas y envía recordatorios. Todo en un solo lugar.',
      color: 'from-cyan-600 to-cyan-700'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comienza a usar ArmoniClick en 3 simples pasos
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700"
               style={{ top: '120px', left: '16.66%', right: '16.66%' }}>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-6 shadow-lg relative`}>
                    <Icon className="text-white" size={40} />
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-cyan-100">
                      <span className="text-cyan-600 font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-cyan-100 rounded-2xl px-8 py-6">
            <p className="text-cyan-900 font-semibold text-lg mb-2">
              ⏱️ Tiempo estimado de configuración: 15 minutos
            </p>
            <p className="text-cyan-700">
              Nuestro equipo te acompaña en cada paso del proceso
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
