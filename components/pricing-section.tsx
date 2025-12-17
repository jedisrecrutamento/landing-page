import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 499",
      period: "/mês",
      description: "Para equipes começando com recrutamento digital",
      features: ["Até 3 vagas ativas", "Triagem com IA", "Até 5 usuários", "Relatórios básicos", "Chat com candidatos"],
      cta: "Começar Teste Grátis",
    },
    {
      name: "Professional",
      price: "R$ 1.299",
      period: "/mês",
      description: "Mais vagas, mais poder, mais resultados",
      features: [
        "Vagas ilimitadas",
        "IA avançada",
        "Até 15 usuários",
        "Analytics completo",
        "Integrações",
        "Suporte prioritário",
        "Custom workflows",
      ],
      cta: "Começar Teste Grátis",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Para grandes equipes com necessidades específicas",
      features: [
        "Tudo do Professional",
        "Usuários ilimitados",
        "SSO & controles avançados",
        "Dedicado Account Manager",
        "Integrações customizadas",
        "SLA garantido",
        "Training & onboarding",
      ],
      cta: "Fale com Vendas",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Preços Simples e Transparentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que se adequa ao seu crescimento. Sem surpresas, cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border transition ${
                plan.highlighted ? "border-red-600 bg-white shadow-xl scale-105" : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  MAIS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border-2 border-red-600 text-red-600 hover:bg-red-50"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem <strong>7 dias grátis de teste</strong> com acesso completo. Sem cartão de crédito
            necessário.
          </p>
        </div>
      </div>
    </section>
  )
}
