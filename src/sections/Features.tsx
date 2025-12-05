import { Calendar, Users, FileText, TrendingUp, Bell, FileSignature } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Users,
      title: 'Gestión de Pacientes y Ficha Clínica',
      description: 'Almacena historial completo, fotos de tratamientos de botox, ácido hialurónico y armonización facial. Todo en un solo lugar.'
    },
    {
      icon: FileText,
      title: 'Generación de Presupuestos',
      description: 'Crea, envía y administra presupuestos de tratamientos estéticos y odontológicos de forma sencilla y profesional.'
    },
    {
      icon: Calendar,
      title: 'Agenda de Citas',
      description: 'Calendario fácil de usar con opción de agendar horas para procedimientos de estética facial y ver disponibilidad en tiempo real.'
    },
    {
      icon: Bell,
      title: 'Recordatorios Automáticos',
      description: 'Envía avisos automáticos por correo electrónico a tus pacientes sobre sus citas y seguimientos post-tratamiento.'
    },
    {
      icon: FileSignature,
      title: 'Consentimientos Informados Digitales',
      description: 'Firma digital de consentimientos para botox, ácido hialurónico y procedimientos odontológicos con validez legal completa.'
    },
    {
      icon: TrendingUp,
      title: 'Reportes y Finanzas',
      description: 'Panel de ingresos mensuales y seguimiento de tratamientos populares para optimizar tu consulta estética.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F1E7] relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.4), rgba(34, 211, 238, 0.1))' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.45), rgba(34, 211, 238, 0.12))' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Funcionalidades Diseñadas para Dentistas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas para administrar tu consulta de estética facial y odontología de manera profesional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white border-2 border-slate-300 rounded-xl p-6 sm:p-8 hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-200 group-hover:to-cyan-300 transition shadow-md">
                  <Icon className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
