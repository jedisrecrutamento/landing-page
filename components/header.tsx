"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "border-b border-gray-200 shadow-md" : "border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105 duration-300">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
              <Image
                src="/images/logo-rhapido.png"
                alt="RHapido Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">RHapido</span>
          </div>

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
                className="text-gray-700 hover:text-red-600 font-medium transition relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 duration-300">
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden transition-transform hover:scale-110" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-red-600" /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3 animate-fade-in-up">
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
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium transition"
              >
                {item.name}
              </button>
            ))}
            <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-lg hover:shadow-red-600/50">
              Começar Agora
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
