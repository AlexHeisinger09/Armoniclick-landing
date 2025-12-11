import { CloudinaryImage } from '../components/CloudinaryImage'

export function MultiPlatform() {
  return (
    <section id="multiplatform" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Diseño 100% Responsive
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Accede a tu consulta desde cualquier dispositivo: computadora, tablet o celular. Siempre con la misma potencia y facilidad de uso.
          </p>
        </div>

        {/* Main Content - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image - Left */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <CloudinaryImage
                publicId="responsive_omnfu6.png"
                alt="ArmoniClick responsive en todos los dispositivos - móvil, tablet y computadora"
                className="w-full h-auto object-contain drop-shadow-2xl"
                width={450}
                quality="auto:best"
              />
            </div>
          </div>

          {/* Text - Right con fondo beige */}
          <div className="bg-[#F2F1E7] rounded-2xl p-8 space-y-6">
            <h3 className="text-3xl font-bold text-slate-700">
              Se adapta a cualquier pantalla
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              ArmoniClick se adapta perfectamente a cualquier dispositivo. Ya sea que uses tu computadora en la consulta, tu tablet durante las atenciones, o tu celular en movimiento, siempre tendrás la mejor experiencia.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Una interfaz intuitiva que se ajusta automáticamente a tu dispositivo, permitiéndote trabajar con comodidad desde donde estés.
            </p>

            {/* Key Points */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-slate-700 font-medium">Diseño adaptativo en tiempo real</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-slate-700 font-medium">Optimizado para pantallas táctiles</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
                <span className="text-slate-700 font-medium">Misma funcionalidad en todos los dispositivos</span>
              </div>
            </div>
          </div>
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
