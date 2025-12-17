"use client"

import { useEffect, useState } from "react"
import { Briefcase, Users, CheckCircle, FileText, BarChart3, Zap } from "lucide-react"

export function MainFeaturesSection() {
  const [visibleCards, setVisibleCards] = useState(false)

  useEffect(() => {
    setVisibleCards(true)
  }, [])

  const features = [
    {
      title: "Gestão Completa de Vagas",
      description:
        "Crie, publique e gerencie todas as suas vagas em um único lugar. Controle status, prazos e responsáveis de cada processo seletivo.",
      icon: Briefcase,
    },
    {
      title: "Organização de Candidatos",
      description:
        "Visualize todos os candidatos por vaga, etapa do processo e qualificação. Filtre, busque e organize de forma intuitiva.",
      icon: Users,
    },
    {
      title: "Funil de Recrutamento",
      description:
        "Acompanhe cada candidato através das etapas do processo: triagem, entrevistas, testes e aprovação final.",
      icon: CheckCircle,
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para gerenciar vagas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um ATS completo com todas as funcionalidades essenciais para otimizar seu processo de recrutamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                visibleCards ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="bg-white p-8 rounded-xl border border-gray-200 h-full hover:border-red-300 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 group-hover:-translate-y-2">
                <feature.icon className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
