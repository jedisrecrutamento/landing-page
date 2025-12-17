"use client"

import { useEffect, useState } from "react"

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-12 transition-all duration-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Um ATS pensado para empresas que querem crescer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido por profissionais de RH que entendem os desafios reais do recrutamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Página de Carreiras Personalizada",
                description:
                  "Crie sua página de carreiras com a identidade visual da empresa. Atraia talentos e fortaleça sua marca empregadora.",
              },
              {
                title: "Experiência do Candidato",
                description:
                  "Proporcione uma jornada simples e profissional. Candidaturas em poucos cliques e comunicação transparente.",
              },
              {
                title: "Suporte Dedicado",
                description:
                  "Conte com nosso time de especialistas para implementação, treinamento e suporte contínuo.",
              },
            ].map((benefit, index) => (
              <div key={index} className="space-y-3 group bg-white p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
