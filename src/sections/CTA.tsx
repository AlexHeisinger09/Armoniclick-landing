import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'
import { DemoSignUpModal } from '../components/DemoSignUpModal'

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F1E7] relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.18))' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="bg-white border-2 border-cyan-300 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 mb-6">
            Comienza Hoy Mismo
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Únete a cientos de clínicas dentales que ya están transformando su práctica con ArmoniClick.
            Primer mes gratis, sin tarjeta de crédito.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Crear demo gratis
              <ArrowRight size={20} />
            </button>
            <form onSubmit={handleSubmit} className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                required
              />
            </form>
          </div>

          {submitted && (
            <p className="text-cyan-600 font-bold animate-pulse">
              ¡Gracias! Recibirás un email con instrucciones en breve.
            </p>
          )}

          <p className="text-slate-500 text-sm font-semibold">
            No requiere tarjeta de crédito • Acceso inmediato • Cancela en cualquier momento
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 sm:p-8 rounded-xl bg-white border-2 border-slate-300 hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-2">📞</p>
            <h3 className="font-bold text-slate-700 mb-2">Habla con nosotros</h3>
            <p className="text-slate-600 text-sm mb-4">
              ¿Quieres una demostración personalizada?
            </p>
            <a href="tel:+56912345678" className="text-cyan-600 hover:text-cyan-700 font-bold text-sm">
              Agendar llamada →
            </a>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-white border-2 border-slate-300 hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-2">💬</p>
            <h3 className="font-bold text-slate-700 mb-2">Chat en vivo</h3>
            <p className="text-slate-600 text-sm mb-4">
              Habla con nuestro equipo en tiempo real
            </p>
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-bold text-sm">
              Iniciar chat →
            </a>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-white border-2 border-slate-300 hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
            <p className="text-3xl mb-2">📧</p>
            <h3 className="font-bold text-slate-700 mb-2">Envía un email</h3>
            <p className="text-slate-600 text-sm mb-4">
              Contáctanos con preguntas o sugerencias
            </p>
            <a href="mailto:info@armoniclick.com" className="text-cyan-600 hover:text-cyan-700 font-bold text-sm">
              Enviar email →
            </a>
          </div>
        </div>

        {/* Demo Sign Up Modal */}
        <DemoSignUpModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      </div>
    </section>
  )
}
