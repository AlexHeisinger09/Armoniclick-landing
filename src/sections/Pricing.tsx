import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Para clínicas pequeñas',
      price: '29',
      period: 'mes',
      features: [
        'Hasta 100 pacientes',
        'Gestión de citas',
        'Base de datos de pacientes',
        'Soporte por email',
        '1 usuario'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'Para clínicas en crecimiento',
      price: '79',
      period: 'mes',
      features: [
        'Hasta 1,000 pacientes',
        'Todas las características Starter +',
        'Documentos con firma digital',
        'Historial de tratamientos',
        'Reportes y análisis',
        'Soporte prioritario',
        '5 usuarios',
        'Recordatorios automáticos'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Para grandes clínicas',
      price: 'Personalizado',
      period: '',
      features: [
        'Pacientes ilimitados',
        'Todas las características Professional +',
        'Integración personalizada',
        'API acceso completo',
        'Gestor de cuentas dedicado',
        'Soporte 24/7',
        'Usuarios ilimitados',
        'Garantía de uptime'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planes Transparentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan perfecto para tu clínica. Sin sorpresas ocultas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl'
                  : 'bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg'
              }`}
            >
              <div
                className={`rounded-2xl p-8 ${
                  plan.highlighted ? 'bg-white' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold transform translate-y-4 translate-x-4">
                    Más Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {plan.price !== 'Personalizado' && (
                    <p className="text-sm text-gray-500 mt-2">Primer mes gratis</p>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  {plan.price === 'Personalizado' ? 'Contactar' : 'Comenzar ahora'}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={
                          plan.highlighted
                            ? 'text-blue-500 flex-shrink-0 mt-0.5'
                            : 'text-green-500 flex-shrink-0 mt-0.5'
                        }
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            ¿Preguntas sobre nuestros planes?
          </h3>
          <p className="text-gray-600 mb-4">
            Todos los planes incluyen un período de prueba gratuito de 30 días. Sin tarjeta de crédito requerida.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Ver preguntas frecuentes →
          </button>
        </div>
      </div>
    </section>
  )
}
