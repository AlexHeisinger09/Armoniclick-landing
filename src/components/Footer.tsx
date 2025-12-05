import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white py-16 border-t-4 border-cyan-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/letras.PNG" alt="ArmoniClick Logo" className="h-10 w-auto mb-2" />
            </div>
            <p className="text-slate-400 font-medium">Gestión integral de clínicas dentales</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Producto</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Características</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Precios</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Documentación</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Empresa</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition font-medium">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Contacto</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-cyan-400" />
                <a href="mailto:info@armoniclick.com" className="hover:text-cyan-400 transition font-medium">info@armoniclick.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-cyan-400" />
                <a href="tel:+56912345678" className="hover:text-cyan-400 transition font-medium">+56 9 1234 5678</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-cyan-400" />
                <span className="font-medium">Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-medium">&copy; {currentYear} ArmoniClick. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition font-medium">Privacidad</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition font-medium">Términos</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition font-medium">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
