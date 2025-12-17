"use client"

import { useEffect, useState } from "react"

export function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-red-600 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Pronto para transformar seu recrutamento?</h2>

          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Junte-se a empresas líderes que já estão acelerando sua jornada de recrutamento com RHapido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition hover:shadow-xl transform hover:scale-105 duration-300 text-lg">
              Solicitar Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105 duration-300 text-lg">
              Teste Grátis
            </button>
          </div>

          <p className="text-red-100 text-sm">Sem cartão de crédito necessário</p>
        </div>
      </div>
    </section>
  )
}
