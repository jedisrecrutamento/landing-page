"use client"

import { useEffect, useState } from "react"

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState(false)

  useEffect(() => {
    setVisibleCards(true)
  }, [])

  const testimonials = [
    {
      text: "Me candidatei a uma vaga através do RHapido e fiquei impressionado com a clareza do processo. Consegui acompanhar cada etapa da seleção, recebi feedbacks rápidos e a experiência foi muito mais profissional do que em outros processos que participei.",
      author: "Guilherme Silveira",
      role: "Candidato",
      company: "Desenvolvedor Full Stack",
      industry: "Tecnologia",
    },
    {
      text: "O RHapido transformou completamente nossa rotina de recrutamento. Conseguimos gerenciar múltiplas vagas simultaneamente, organizar candidatos de forma estruturada e reduzir drasticamente o tempo de cada processo seletivo. A plataforma é intuitiva e nos dá total controle.",
      author: "Giselle Nonato",
      role: "Recrutadora",
      company: "Tech Recruiter",
      industry: "Recrutamento e Seleção",
    },
    {
      text: "Como recrutadora, preciso de agilidade e organização. O RHapido me entrega isso com maestria. Consigo visualizar todo o funil de candidatos, fazer avaliações estruturadas e gerar relatórios para os gestores em poucos cliques. Indispensável no meu dia a dia.",
      author: "Stephanie Bamberg",
      role: "Recrutadora",
      company: "Talent Acquisition Specialist",
      industry: "Recursos Humanos",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Quem usa o RHapido aprova</h2>
          <p className="text-xl text-gray-600">Veja o que recrutadores e candidatos falam sobre a plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 flex flex-col justify-between ${
                visibleCards ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
