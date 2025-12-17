"use client"

import { useEffect, useState } from "react"

export function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-red-600 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center justify-center space-y-6 transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center">
            Pronto para transformar seu recrutamento?
          </h2>

          <p className="text-xl text-red-100 max-w-2xl text-center leading-relaxed">
            Junte-se a empresas líderes que já estão acelerando sua jornada de recrutamento com RHapido.
          </p>

          <div className="pt-2">
            <a 
              href="https://wa.me/553198819071?text=Ol%C3%A1%21%20Tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ATS%20RHapido.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pela%20landing%20page%20do%20RHapido%20e%20quero%20entender%20melhor%20como%20a%20solu%C3%A7%C3%A3o%20pode%20ajudar%20nos%20processos%20de%20recrutamento.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition hover:shadow-xl transform hover:scale-105 duration-300 text-lg inline-block text-center min-w-[200px]"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
