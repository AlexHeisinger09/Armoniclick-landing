import { Check } from 'lucide-react'

export function Pricing() {
  const features = [
    'Gestión completa de pacientes',
    'Ficha clínica digital con fotos',
    'Generación de presupuestos',
    'Agenda de citas inteligente',
    'Firma digital de documentos',
    'Consentimientos informados digitales',
    'Recordatorios automáticos vía correo',
    'Panel de reportes y finanzas',
    'Almacenamiento seguro en la nube',
    'Soporte técnico prioritario',
    'Actualizaciones automáticas',
    'Sin límite de pacientes'
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Plan de Suscripción Simple y Transparente
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un único plan con todas las funcionalidades. Sin costos ocultos, sin sorpresas.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-cyan-400 to-cyan-600 p-1 shadow-2xl">
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-full text-sm font-semibold">
              Plan Completo
            </div>

            <h3 className="text-3xl font-bold text-slate-700 mb-4">
              Acceso Total a ArmoniClick
            </h3>

            <p className="text-slate-600 mb-8">
              Todas las funciones incluidas para gestionar tu consulta estética y odontológica
            </p>

            {/* Price */}
            <div className="mb-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-200">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">
                  $12.900
                </span>
                <span className="text-2xl text-slate-700 font-bold">+ IVA</span>
              </div>
              <p className="text-center text-slate-600 mt-2 text-lg font-semibold">por mes</p>
              <p className="text-center text-cyan-700 font-bold mt-4 text-sm">
                Sin contratos anuales • Cancela cuando quieras
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 rounded-xl font-bold text-lg bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-xl transition-all duration-200 mb-8 hover:scale-[1.02]">
              Suscríbete y comienza ahora
            </button>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-700 mb-4 text-lg">
                ✨ Todo incluido:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-cyan-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Note */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-center text-slate-600 text-sm font-semibold">
                💳 Demo de 15 días • 🔒 Pago seguro • 📞 Soporte en español
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4 font-semibold">
            ¿Necesitas más información sobre el plan?
          </p>
          <a
            href="https://wa.me/56963107627"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-bold text-lg"
          >
            Contáctanos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
