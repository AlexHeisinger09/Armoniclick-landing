import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/letras.PNG" alt="ArmoniClick Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Características</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition">Beneficios</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Precios</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonios</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Iniciar sesión</a>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
              Comenzar gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-blue-600 py-2">Características</a>
            <a href="#benefits" className="block text-gray-700 hover:text-blue-600 py-2">Beneficios</a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600 py-2">Precios</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 py-2">Testimonios</a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg hover:shadow-lg transition">
              Comenzar gratis
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
