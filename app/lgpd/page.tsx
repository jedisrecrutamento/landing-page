import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LGPDPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conformidade com a LGPD</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            O RHapido está comprometido com a conformidade total com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Nossa Base Legal</h2>
          <p className="text-gray-600 mb-4">
            Processamos dados pessoais com base em: execução de contrato, consentimento, cumprimento de obrigação legal e legítimo interesse.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Direitos dos Titulares</h2>
          <p className="text-gray-600 mb-4">
            Conforme a LGPD, você tem direito a:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Confirmação da existência de tratamento de dados</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Portabilidade dos dados</li>
            <li>Eliminação dos dados pessoais tratados com consentimento</li>
            <li>Revogação do consentimento</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Como Exercer seus Direitos</h2>
          <p className="text-gray-600 mb-4">
            Para exercer qualquer um de seus direitos, entre em contato conosco através do e-mail: rhapido@jedis.com. Responderemos sua solicitação em até 15 dias.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Encarregado de Proteção de Dados (DPO)</h2>
          <p className="text-gray-600 mb-4">
            Nosso Encarregado de Proteção de Dados está disponível para questões relacionadas à LGPD através do e-mail: rhapido@jedis.com
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Medidas de Segurança</h2>
          <p className="text-gray-600 mb-4">
            Implementamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Retenção de Dados</h2>
          <p className="text-gray-600 mb-4">
            Mantemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, conforme exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Transferência de Dados</h2>
          <p className="text-gray-600 mb-4">
            Quando transferimos dados para terceiros, garantimos que eles também estejam em conformidade com a LGPD e mantenham padrões adequados de proteção.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Última atualização: Janeiro de 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

