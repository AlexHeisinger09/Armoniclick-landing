import { useState } from 'react'
import { X, Loader, Check, AlertCircle } from 'lucide-react'

interface DemoSignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoSignUpModal({ isOpen, onClose }: DemoSignUpModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    trialDays: 15,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'trialDays' ? parseInt(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Usar la URL del backend de ArmoniClick (ajusta según tu configuración)
      // Nota: Usar www.armoniclick.cl para evitar redirects que rompen CORS preflight
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://www.armoniclick.cl/.netlify/functions'

      const response = await fetch(`${backendUrl}/auth/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          trialDays: formData.trialDays,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Error al crear la cuenta de demostración')
        return
      }

      setSuccess(true)
      setFormData({
        name: '',
        lastName: '',
        email: '',
        trialDays: 15,
      })

      // Cerrar modal después de 3 segundos
      setTimeout(() => {
        onClose()
        setSuccess(false)
      }, 3000)
    } catch (err) {
      setError('Error de conexión. Por favor intenta de nuevo.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Prueba ArmoniClick
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success State */}
        {success ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Check size={32} className="text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¡Cuenta creada exitosamente!
            </h3>
            <p className="text-gray-600 mb-2">
              Te hemos enviado un email a <strong>{formData.email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Revisa tu correo para las credenciales de acceso. Tu prueba durará {formData.trialDays} días.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-gray-600 text-sm mb-6">
              Crea tu cuenta de prueba gratuita por {formData.trialDays} días. Sin tarjeta de crédito requerida.
            </p>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Pérez"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Trial Days Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duración de prueba
              </label>
              <select
                name="trialDays"
                value={formData.trialDays}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option value={7}>7 días</option>
                <option value={15}>15 días</option>
                <option value={30}>30 días</option>
                <option value={60}>60 días</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                'Crear cuenta de demostración'
              )}
            </button>

            {/* Footer */}
            <p className="text-center text-gray-500 text-xs">
              Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
