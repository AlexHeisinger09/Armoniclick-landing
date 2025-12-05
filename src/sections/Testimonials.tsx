import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Dra. María González',
      role: 'Odontóloga Especialista en Estética Facial',
      image: '👩‍⚕️',
      content: 'ArmoniClick transformó mi consulta de estética facial. Gestiono todos mis pacientes de botox y ácido hialurónico con fichas detalladas y fotos. Los recordatorios automáticos vía correo han reducido las inasistencias al mínimo.',
      rating: 5
    },
    {
      name: 'Dr. Carlos Rodríguez',
      role: 'Dentista Independiente - Armonización Facial',
      image: '👨‍⚕️',
      content: 'Como dentista independiente que realiza armonización facial, necesitaba un software específico. Con ArmoniClick puedo generar presupuestos profesionales y obtener firmas digitales en consentimientos. Mi consulta ahora es 100% digital.',
      rating: 5
    },
    {
      name: 'Dra. Laura Méndez',
      role: 'Especialista en Odontología y Estética Orofacial',
      image: '👩‍⚕️',
      content: 'La función de consentimientos informados digitales es espectacular. Mis pacientes firman antes de cada procedimiento de botox o ácido hialurónico, todo con validez legal. Además, puedo llevar el seguimiento fotográfico completo.',
      rating: 5
    },
    {
      name: 'Dr. Roberto Sáenz',
      role: 'Odontólogo - Consulta Privada Estética Dental',
      image: '👨‍⚕️',
      content: 'El panel de reportes me permite saber exactamente qué tratamientos estéticos son más rentables. La agenda es súper intuitiva y los recordatorios vía correo mantienen a mis pacientes informados. Mejor inversión para mi consulta.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F1E7] relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.18))' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Dentistas Independientes Confían en ArmoniClick
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Profesionales de estética facial y odontología que han transformado su consulta
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-cyan-400 border-2 border-slate-300 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-cyan-500 text-cyan-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-slate-700">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-cyan-500 rounded-2xl p-8 sm:p-12 text-white shadow-xl border-2 border-cyan-400">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold mb-2">4.9/5</p>
            <p className="text-sm sm:text-base font-semibold">Calificación promedio</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
            <p className="text-sm sm:text-base font-semibold">Dentistas activos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold mb-2">98%</p>
            <p className="text-sm sm:text-base font-semibold">Satisfacción de clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
