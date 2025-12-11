import { Briefcase, User, Sparkles } from 'lucide-react'

export function TargetAudience() {
  return (
    <section id="target-audience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-36 h-36 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.18))' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            ¿Para Quién es ArmoniClick?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Diseñado específicamente para dentistas y médicos dentales independientes que realizan procedimientos de estética facial
          </p>
        </div>

        {/* Target Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-[#F2F1E7] border-2 border-slate-300 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-4 text-center">
              Dentistas Independientes
            </h3>
            <p className="text-slate-600 text-center leading-relaxed font-medium">
              Profesionales que trabajan de forma independiente y necesitan administrar su consulta sin la complejidad de sistemas empresariales costosos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F2F1E7] border-2 border-slate-300 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-4 text-center">
              Especialistas en Estética Facial
            </h3>
            <p className="text-slate-600 text-center leading-relaxed font-medium">
              Odontólogos que realizan botox terapéutico, ácido hialurónico, armonización facial y otros procedimientos de estética orofacial.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F2F1E7] border-2 border-slate-300 rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-4 text-center">
              Consultas Privadas
            </h3>
            <p className="text-slate-600 text-center leading-relaxed font-medium">
              Profesionales que atienden en consulta privada y buscan una herramienta completa para gestionar pacientes, citas y finanzas.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border-2 border-cyan-300">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">
              Si trabajas fuera de clínicas grandes y necesitas organizar tu consulta...
            </h3>
            <p className="text-lg text-slate-600 mb-6 font-semibold">
              ArmoniClick es la herramienta perfecta para llevar tu consulta al siguiente nivel. Sin complicaciones, sin costos ocultos, sin largos contratos.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <span className="text-cyan-600 font-bold text-xl">¿Listo para empezar?</span>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
                Solicita tu demo gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
