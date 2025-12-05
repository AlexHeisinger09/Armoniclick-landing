import { Briefcase, User, Sparkles } from 'lucide-react'

export function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Para Quién es ArmoniClick?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñado específicamente para dentistas y médicos dentales independientes que realizan procedimientos de estética facial
          </p>
        </div>

        {/* Target Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Dentistas Independientes
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Profesionales que trabajan de forma independiente y necesitan administrar su consulta sin la complejidad de sistemas empresariales costosos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Especialistas en Estética Facial
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Odontólogos que realizan botox terapéutico, ácido hialurónico, armonización facial y otros procedimientos de estética orofacial.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Consultas Privadas
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Profesionales que atienden en consulta privada y buscan una herramienta profesional para gestionar pacientes, citas y finanzas.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-cyan-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Si trabajas fuera de clínicas grandes y necesitas organizar tu consulta...
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              ArmoniClick es la herramienta perfecta para llevar tu práctica profesional al siguiente nivel. Sin complicaciones, sin costos ocultos, sin largos contratos.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <span className="text-cyan-600 font-bold text-xl">¿Listo para empezar?</span>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition">
                Solicita tu demo gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
