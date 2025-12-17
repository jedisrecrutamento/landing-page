"use client"

import { useEffect, useState } from "react"
import { Building2, Rocket, Factory } from "lucide-react"

export function UseCasesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const useCases = [
    {
      icon: Rocket,
      title: "Startups e Scale-ups",
      description:
        "Contrate rápido sem perder qualidade. Gerencie múltiplas vagas simultaneamente e escale seu time com agilidade.",
      benefits: ["Setup rápido em minutos", "Processos ágeis e flexíveis", "Preço acessível para crescimento"],
    },
    {
      icon: Building2,
      title: "Empresas Mid-Market",
      description:
        "Estruture processos de recrutamento profissionais com governança e controle. Dashboards e relatórios para tomada de decisão.",
      benefits: ["Processos estruturados", "Colaboração entre times", "Métricas detalhadas"],
    },
    {
      icon: Factory,
      title: "Grandes Corporações",
      description:
        "Gerencie alto volume de vagas com eficiência. Integração com sistemas corporativos e controles avançados de segurança.",
      benefits: ["Gestão de múltiplas unidades", "Integrações corporativas", "Segurança e compliance"],
    },
  ]

  return (
    <section id="casos-de-uso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Para empresas de todos os tamanhos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O RHapido se adapta às necessidades da sua empresa, seja ela pequena, média ou grande
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-8 hover:border-red-300 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <useCase.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
