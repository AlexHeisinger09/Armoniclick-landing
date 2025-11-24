import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comienza Hoy Mismo
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a cientos de clínicas dentales que ya están transformando su práctica con ArmoniClick.
            Primer mes gratis, sin tarjeta de crédito.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Registrarse gratis
              <ArrowRight size={20} />
            </button>
          </form>

          {submitted && (
            <p className="text-green-600 font-semibold animate-pulse">
              ¡Gracias! Recibirás un email con instrucciones en breve.
            </p>
          )}

          <p className="text-gray-500 text-sm">
            No requiere tarjeta de crédito • Acceso inmediato • Cancela en cualquier momento
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <p className="text-3xl mb-2">📞</p>
            <h3 className="font-semibold text-gray-900 mb-2">Habla con nosotros</h3>
            <p className="text-gray-600 text-sm mb-4">
              ¿Quieres una demostración personalizada?
            </p>
            <a href="tel:+56912345678" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Agendar llamada →
            </a>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <p className="text-3xl mb-2">💬</p>
            <h3 className="font-semibold text-gray-900 mb-2">Chat en vivo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Habla con nuestro equipo en tiempo real
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Iniciar chat →
            </a>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
            <p className="text-3xl mb-2">📧</p>
            <h3 className="font-semibold text-gray-900 mb-2">Envía un email</h3>
            <p className="text-gray-600 text-sm mb-4">
              Contáctanos con preguntas o sugerencias
            </p>
            <a href="mailto:info@armoniclick.com" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Enviar email →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
