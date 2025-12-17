"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona a implementação do RHapido?",
      answer:
        "Temos um time completo dedicado que faz a implementação completa do RHapido na sua empresa. Você não precisa se preocupar com nada - cuidamos de todo o processo para você.",
    },
    {
      question: "Como funciona o suporte?",
      answer:
        "Nos orgulhamos de ter um dos melhores atendimentos do mercado; nossa média de tempo para a primeira resposta é abaixo de 10 minutos! Caso tenha alguma dúvida, entre em contato conosco através do e-mail rhapido@jedis.com, que estamos prontos para atendê-lo(a).",
    },
    {
      question: "Como funciona a extensão do RHapido no Chrome?",
      answer:
        "Essa funcionalidade é uma extensão do Chrome, que fica conectada ao seu LinkedIn, independentemente de ser uma conta paga ou gratuita. Solicite uma demonstração e veja como funciona, é como mágica.",
    },
    {
      question: "Quais são os planos?",
      answer:
        "Fugimos das práticas do mercado de cobrar por vaga, pois isso incentiva um comportamento desnecessário e contrário ao uso de dados. Aqui no RHapido, nós cobramos pelo nível de personalização que oferecemos.",
    },
    {
      question: "Qual o diferencial do RHapido?",
      answer:
        "Por ser um software de recrutamento e seleção desenvolvido com anos de experiência de recrutadores, temos pleno conhecimento sobre o que funciona e o que não funciona em um ATS. Cada funcionalidade foi cuidadosamente pensada para otimizar o trabalho diário.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Perguntas frequentes sobre o RHapido</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-red-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
