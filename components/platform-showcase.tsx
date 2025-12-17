"use client"

import { useEffect, useState } from "react"
import { Briefcase, FileText, UserCheck, BarChart3 } from "lucide-react"

export function PlatformShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const showcase = [
    {
      title: "Gestão Completa de Vagas",
      description:
        "Crie, publique e gerencie todas as suas vagas em um único lugar. Mantenha o controle total do processo seletivo desde o início.",
      icon: Briefcase,
    },
    {
      title: "Organize Candidatos Facilmente",
      description:
        "Visualize todos os candidatos de forma organizada. Filtre, classifique e acompanhe o status de cada um no funil de recrutamento.",
      icon: FileText,
    },
    {
      title: "Avaliações Estruturadas",
      description:
        "Padronize a avaliação de candidatos com critérios claros. Garanta um processo justo e comparável entre todos os participantes.",
      icon: UserCheck,
    },
    {
      title: "Relatórios e Métricas",
      description:
        "Acompanhe indicadores importantes do seu processo seletivo. Tome decisões baseadas em dados e melhore continuamente.",
      icon: BarChart3,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para recrutar melhor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas completas para gerenciar cada etapa do seu processo seletivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {showcase.map((item, index) => (
            <div
              key={index}
              className={`flex gap-6 items-start transition-all duration-500 ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
                <item.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
