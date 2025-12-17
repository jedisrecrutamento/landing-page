import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo-rhapido.png"
                  alt="RHapido Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-gray-900 font-bold text-lg">RHapido</span>
            </div>
            <p className="text-sm">O ATS completo para gerenciar todo seu processo de recrutamento.</p>
          </div>

          <div>
            <h4 className="text-red-600 font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#funcionalidades" className="hover:text-red-600 transition">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-red-600 transition">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#casos-de-uso" className="hover:text-red-600 transition">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-600 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-red-600 font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-red-600 font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 RHapido. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-700 hover:text-red-600 transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
