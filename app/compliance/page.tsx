import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Compliance e Segurança</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            O RHapido está comprometido com os mais altos padrões de segurança, conformidade e proteção de dados.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Conformidade Regulatória</h2>
          <p className="text-gray-600 mb-4">
            Estamos em conformidade com as leis e regulamentações aplicáveis ao setor de recrutamento e proteção de dados, incluindo a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Segurança</h2>
          <p className="text-gray-600 mb-4">
            Implementamos medidas de segurança técnicas e organizacionais para proteger os dados e informações de nossos clientes, incluindo criptografia, controles de acesso e monitoramento contínuo.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Retenção de Dados</h2>
          <p className="text-gray-600 mb-4">
            Mantemos dados apenas pelo tempo necessário para cumprir finalidades legítimas e requisitos legais. Dados são excluídos de forma segura quando não são mais necessários.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Contato</h2>
          <p className="text-gray-600 mb-4">
            Para questões sobre compliance e segurança, entre em contato através do e-mail: rhapido@jedis.com
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

