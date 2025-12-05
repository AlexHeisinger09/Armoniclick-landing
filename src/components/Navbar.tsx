import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-[#F2F1E7]/95 backdrop-blur-sm z-50 shadow-sm border-b border-cyan-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/letras.PNG" alt="ArmoniClick Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-cyan-600 transition font-semibold">Características</a>
            <a href="#benefits" className="text-slate-700 hover:text-cyan-600 transition font-semibold">Beneficios</a>
            <a href="#pricing" className="text-slate-700 hover:text-cyan-600 transition font-semibold">Precios</a>
            <a href="#testimonials" className="text-slate-700 hover:text-cyan-600 transition font-semibold">Testimonios</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
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
            <a href="#features" className="block text-slate-700 hover:text-cyan-600 py-2 font-semibold">Características</a>
            <a href="#benefits" className="block text-slate-700 hover:text-cyan-600 py-2 font-semibold">Beneficios</a>
            <a href="#pricing" className="block text-slate-700 hover:text-cyan-600 py-2 font-semibold">Precios</a>
            <a href="#testimonials" className="block text-slate-700 hover:text-cyan-600 py-2 font-semibold">Testimonios</a>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200">
              Comenzar gratis
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
