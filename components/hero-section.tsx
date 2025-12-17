"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/professional-office-environment-recruitment-team-w.jpg" type="video/mp4" />
        </video>
        {/* Máscara escura para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Gerencie suas vagas
              <br className="hidden sm:block" /> de forma rápida e eficiente
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              O ATS completo para empresas que querem otimizar seus processos de recrutamento e seleção. Publique vagas,
              organize candidatos e contrate os melhores talentos.
            </p>
          </div>

          {/* Secondary Message */}
          <p className="text-lg text-white font-medium max-w-2xl mx-auto drop-shadow-md">
            Da publicação da vaga à contratação. Tudo em um só lugar.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 pt-6">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105 duration-300 text-lg">
              Começar Agora
            </button>
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold border-2 border-red-600 hover:bg-red-50 transition transform hover:scale-105 duration-300 text-lg">
              Ver Demonstração
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">85%</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Redução no tempo de contratação</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">10x</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Mais produtividade no RH</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">500+</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Empresas confiam no RHapido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
