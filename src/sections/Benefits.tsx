import { CheckCircle, Zap, Lock, Smartphone } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Más Rápido',
      items: [
        'Automatización de procesos repetitivos',
        'Reducción de tiempo administrativo',
        'Aumento de capacidad de atención'
      ]
    },
    {
      icon: Lock,
      title: 'Más Seguro',
      items: [
        'Encriptación de datos médicos',
        'Cumplimiento con normativas HIPAA',
        'Copias de seguridad automáticas'
      ]
    },
    {
      icon: Smartphone,
      title: 'Más Accesible',
      items: [
        'Acceso desde cualquier dispositivo',
        'Aplicación móvil nativa',
        'Sincronización en tiempo real'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Más Confiable',
      items: [
        'Uptime garantizado del 99.9%',
        'Soporte técnico disponible 24/7',
        'Actualizaciones automáticas'
      ]
    }
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Beneficios Comprobados
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Miles de dentistas ya confían en ArmoniClick para mejorar su práctica
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-[#F2F1E7] border-2 border-slate-300 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-cyan-400 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
              40%
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-semibold">Aumento de productividad</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
              60%
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-semibold">Reducción de costos administrativos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
              95%
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-semibold">Satisfacción de clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
