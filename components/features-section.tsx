"use client"

import { Zap, Brain, Users, BarChart3, Lock, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5])
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Triagem automática de currículos com machine learning para encontrar os melhores candidatos.",
    },
    {
      icon: Zap,
      title: "Automação Total",
      description: "Automatize workflows e reduza tarefas manuais em até 80% do seu tempo.",
    },
    {
      icon: Users,
      title: "Colaboração em Tempo Real",
      description: "Equipe inteira vê e comenta sobre candidatos simultaneamente.",
    },
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Relatórios completos sobre funil de recrutamento e métricas de desempenho.",
    },
    {
      icon: Lock,
      title: "Segurança LGPD",
      description: "Todos os dados protegidos com conformidade total com leis de privacidade.",
    },
    {
      icon: Clock,
      title: "Integração Rápida",
      description: "Conecte com suas ferramentas favoritas em minutos, sem código necessário.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Recursos Poderosos para Recrutadores</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar vagas, candidatos e hires em um único lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-500 group hover:scale-105 cursor-pointer ${
                  visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-red-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
