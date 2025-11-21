export function Dashboard() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu Panel de Control
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interfaz intuitiva y poderosa diseñada para profesionales dentales
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-1 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                    <p className="text-sm text-gray-500">Bienvenido, Dr. García</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="h-2 w-16 bg-blue-300 rounded mb-3"></div>
                    <div className="h-3 w-12 bg-blue-400 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-blue-200 rounded"></div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="h-2 w-16 bg-green-300 rounded mb-3"></div>
                    <div className="h-3 w-12 bg-green-400 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-green-200 rounded"></div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <div className="h-2 w-16 bg-purple-300 rounded mb-3"></div>
                    <div className="h-3 w-12 bg-purple-400 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-purple-200 rounded"></div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <div className="h-2 w-16 bg-orange-300 rounded mb-3"></div>
                    <div className="h-3 w-12 bg-orange-400 rounded mb-2"></div>
                    <div className="h-2 w-20 bg-orange-200 rounded"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* List Section */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-3 w-32 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-gray-200 rounded"></div>
                      <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                      <div className="h-2 w-4/5 bg-gray-200 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="h-3 w-32 bg-gray-300 rounded mb-4"></div>
                    <div className="flex items-end gap-2 h-32">
                      <div className="flex-1 bg-blue-300 rounded-t h-1/2"></div>
                      <div className="flex-1 bg-blue-300 rounded-t h-3/4"></div>
                      <div className="flex-1 bg-blue-300 rounded-t h-2/3"></div>
                      <div className="flex-1 bg-blue-300 rounded-t h-4/5"></div>
                      <div className="flex-1 bg-blue-300 rounded-t h-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 right-4 bg-white rounded-xl shadow-lg p-4 max-w-xs z-10 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Tiempo Real</p>
                <p className="text-sm text-gray-500">Datos actualizados al instante</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Panel Intuitivo
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Visualiza todas tus citas del día</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Acceso rápido a información de pacientes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Métricas de desempeño en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Notificaciones de eventos importantes</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Acceso Desde Cualquier Lugar
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Compatible con todos los dispositivos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Sincronización automática en la nube</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Funciona sin conexión a internet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-600">Sincronización automática al conectar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
