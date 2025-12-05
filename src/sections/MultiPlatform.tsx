import { Smartphone, Tablet, Laptop } from 'lucide-react'

export function MultiPlatform() {
  const platforms = [
    {
      icon: Smartphone,
      title: 'Móvil',
      description: 'Gestiona tu consulta desde cualquier lugar con tu smartphone',
      image: '/movil.png',
      color: 'from-cyan-400 to-cyan-500'
    },
    {
      icon: Tablet,
      title: 'Tablet',
      description: 'Experiencia optimizada para tablets, perfecta para la consulta',
      image: '/tablet.png',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Laptop,
      title: 'Computadora',
      description: 'Acceso completo desde tu escritorio con todas las funcionalidades',
      image: '/laptop.png',
      color: 'from-cyan-600 to-cyan-700'
    }
  ]

  return (
    <section id="multiplatform" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 right-1/4 w-40 h-40 rounded-full shadow-lg" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(34, 211, 238, 0.15))' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full shadow-md" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.55), rgba(34, 211, 238, 0.18))' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Accede Desde Cualquier Dispositivo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ArmoniClick se adapta perfectamente a tu forma de trabajar. Usa tu celular, tablet o computadora sin problemas. Tu información siempre sincronizada en la nube.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <div
                key={index}
                className="bg-[#F2F1E7] border-2 border-slate-300 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-700 mb-4 text-center">
                  {platform.title}
                </h3>

                {/* Image with border */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={platform.image}
                    alt={`Dentista usando ArmoniClick en ${platform.title}`}
                    className="w-full max-w-xs h-auto object-contain rounded-xl border-4 border-white shadow-lg"
                  />
                </div>

                {/* Description */}
                <p className="text-slate-600 text-center leading-relaxed font-medium">
                  {platform.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Feature Highlight */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl border-2 border-cyan-400">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">☁️</div>
                <h4 className="font-bold text-lg mb-2">100% en la Nube</h4>
                <p className="text-sm text-cyan-50">
                  Tus datos seguros y accesibles desde cualquier lugar
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">🔄</div>
                <h4 className="font-bold text-lg mb-2">Sincronización Automática</h4>
                <p className="text-sm text-cyan-50">
                  Cambios en tiempo real en todos tus dispositivos
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">📱</div>
                <h4 className="font-bold text-lg mb-2">Diseño Responsivo</h4>
                <p className="text-sm text-cyan-50">
                  Interfaz adaptada perfectamente a cada pantalla
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
