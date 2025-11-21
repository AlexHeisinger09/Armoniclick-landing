import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/letras.PNG" alt="ArmoniClick Logo" className="h-10 w-auto mb-2" />
            </div>
            <p className="text-gray-400">Gestión integral de clínicas dentales</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Características</a></li>
              <li><a href="#" className="hover:text-white transition">Precios</a></li>
              <li><a href="#" className="hover:text-white transition">Documentación</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:info@armoniclick.com" className="hover:text-white transition">info@armoniclick.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+56912345678" className="hover:text-white transition">+56 9 1234 5678</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {currentYear} ArmoniClick. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
