"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 10)
      
      // Verifica se está sobre o hero-section
      const heroSection = document.getElementById("hero-section")
      if (!heroSection) {
        // Se não há hero-section (páginas legais), sempre com fundo branco
        setIsOverHero(false)
        return
      }
      
      // Se estiver no topo, sempre transparente
      if (scrollY === 0) {
        setIsOverHero(true)
        return
      }
      
      const heroRect = heroSection.getBoundingClientRect()
      const heroBottom = heroRect.bottom
      // Fica transparente enquanto o hero ainda está visível na tela
      setIsOverHero(heroBottom > 100) // 100px de margem para transição suave
    }
    
    // Aguarda um pouco para garantir que o DOM está pronto
    const timeoutId = setTimeout(() => {
      handleScroll()
    }, 100)
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverHero 
          ? "bg-transparent border-b border-transparent" 
          : "bg-white border-b border-gray-200 shadow-md"
      }`}
      style={isOverHero ? { backgroundColor: 'transparent', backdropFilter: 'none' } : { backgroundColor: 'white' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="/#hero-section" 
            className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105 duration-300"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
              <Image
                src="/images/logo-rhapido.png"
                alt="RHapido Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${isOverHero ? "text-white" : "text-gray-900"}`}>
              RHapido
            </span>
          </a>

          <nav className="hidden md:flex gap-8">
            {[
              { name: "Funcionalidades", id: "funcionalidades" },
              { name: "Benefícios", id: "beneficios" },
              { name: "Casos de Uso", id: "casos-de-uso" },
              { name: "Depoimentos", id: "depoimentos" },
              { name: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition relative group ${
                  isOverHero 
                    ? "text-white hover:text-red-300" 
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isOverHero ? "bg-red-300" : "bg-red-600"
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <a 
              href="https://wa.me/553198819071?text=Ol%C3%A1%21%20Tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ATS%20RHapido.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pela%20landing%20page%20do%20RHapido%20e%20quero%20entender%20melhor%20como%20a%20solu%C3%A7%C3%A3o%20pode%20ajudar%20nos%20processos%20de%20recrutamento.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 duration-300 inline-block text-center"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden transition-transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} className={isOverHero ? "text-white" : "text-red-600"} />
            ) : (
              <Menu size={24} className={isOverHero ? "text-white" : "text-gray-900"} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={`md:hidden border-t py-4 space-y-3 animate-fade-in-up ${
            isOverHero 
              ? "border-white/20 bg-black/80 backdrop-blur-md" 
              : "border-gray-200 bg-white"
          }`}>
            {[
              { name: "Funcionalidades", id: "funcionalidades" },
              { name: "Benefícios", id: "beneficios" },
              { name: "Casos de Uso", id: "casos-de-uso" },
              { name: "Depoimentos", id: "depoimentos" },
              { name: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left font-medium transition py-2 px-2 rounded ${
                  isOverHero 
                    ? "text-white hover:text-red-300 hover:bg-white/10" 
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <a 
              href="https://wa.me/553198819071?text=Ol%C3%A1%21%20Tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ATS%20RHapido.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pela%20landing%20page%20do%20RHapido%20e%20quero%20entender%20melhor%20como%20a%20solu%C3%A7%C3%A3o%20pode%20ajudar%20nos%20processos%20de%20recrutamento.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-lg hover:shadow-red-600/50 inline-block text-center"
            >
              Começar Agora
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
