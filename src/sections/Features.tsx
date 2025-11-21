import { Calendar, Users, FileText, TrendingUp, Clock, Bell } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Gestión de Citas',
      description: 'Sistema de reservas inteligente con notificaciones automáticas y confirmación de pacientes.'
    },
    {
      icon: Users,
      title: 'Base de Datos de Pacientes',
      description: 'Manejo completo de perfiles de pacientes con historial médico y seguimiento.'
    },
    {
      icon: FileText,
      title: 'Documentos Digitales',
      description: 'Genera, firma y gestiona documentos médicos con seguridad y conformidad legal.'
    },
    {
      icon: TrendingUp,
      title: 'Análisis y Reportes',
      description: 'Dashboards intuitivos con métricas de desempeño y análisis de negocio.'
    },
    {
      icon: Clock,
      title: 'Control de Tratamientos',
      description: 'Registro detallado de procedimientos con seguimiento de progreso y resultados.'
    },
    {
      icon: Bell,
      title: 'Sistema de Recordatorios',
      description: 'Notificaciones automáticas por email y SMS para citas próximas.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Características Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para administrar tu clínica dental de manera eficiente
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-cyan-200 transition">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
