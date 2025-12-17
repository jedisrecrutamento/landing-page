export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Poste a Vaga",
      description: "Crie uma descrição de vaga em minutos. IA sugere melhorias automáticas.",
    },
    {
      number: "2",
      title: "Candidatos Chegam",
      description: "Aplicações fluem automaticamente do seu site, LinkedIn e portais de emprego.",
    },
    {
      number: "3",
      title: "IA Faz Triagem",
      description: "Algoritmos analisam currículos, qualificações e fit. Ranking automático criado.",
    },
    {
      number: "4",
      title: "Você Entrevista",
      description: "Revise apenas os melhores candidatos. Agende entrevistas em um clique.",
    },
    {
      number: "5",
      title: "Feedback & Decisão",
      description: "Equipe colabora, deixa notas e vota. Transparência total do processo.",
    },
    {
      number: "6",
      title: "Hire & Onboard",
      description: "Oferta, aceição e integração. Tudo documentado e automatizado no RHapido.",
    },
  ]

  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Simples Como 1, 2, 3, 4, 5, 6</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seu fluxo de recrutamento funcionará como um relógio suíço
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 h-full">
                <div className="absolute top-0 left-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg -translate-y-1/2">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-red-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
