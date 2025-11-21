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
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beneficios Comprobados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de dentistas ya confían en ArmoniClick para mejorar su práctica
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              40%
            </p>
            <p className="text-gray-600">Aumento de productividad</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              60%
            </p>
            <p className="text-gray-600">Reducción de costos administrativos</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
              95%
            </p>
            <p className="text-gray-600">Satisfacción de clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
