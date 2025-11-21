import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Dra. María González',
      role: 'Odontóloga, Clínica Smile',
      image: '👩‍⚕️',
      content: 'ArmoniClick ha revolucionado mi consulta. Ahora administro todo desde mi teléfono y mis pacientes están más satisfechos con las notificaciones automáticas.',
      rating: 5
    },
    {
      name: 'Dr. Carlos Rodríguez',
      role: 'Director, Centro Dental Plus',
      image: '👨‍⚕️',
      content: 'La mejor inversión que hice para mi clínica. Redujo mis costos administrativos en un 60% y aumentó la retención de pacientes significativamente.',
      rating: 5
    },
    {
      name: 'Dra. Laura Méndez',
      role: 'Especialista, Clínica Dental Premier',
      image: '👩‍⚕️',
      content: 'El sistema de documentos con firma digital es increíble. Mis pacientes pueden firmar desde casa y tengo todo registro digital. Muy profesional.',
      rating: 5
    },
    {
      name: 'Dr. Roberto Sáenz',
      role: 'Propietario, Consultorio Dental Integral',
      image: '👨‍⚕️',
      content: 'Excelente soporte técnico. Mi equipo aprendió a usar la plataforma en menos de una semana. Los reportes me ayudan a tomar mejores decisiones.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de profesionales odontológicos confían en ArmoniClick
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-white">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">4.9/5</p>
            <p className="text-blue-100">Calificación promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-blue-100">Clínicas activas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-blue-100">Tasa de retención</p>
          </div>
        </div>
      </div>
    </section>
  )
}
