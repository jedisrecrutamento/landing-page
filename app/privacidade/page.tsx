import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Esta Política de Privacidade descreve como o RHapido coleta, usa e protege suas informações pessoais.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Informações que Coletamos</h2>
          <p className="text-gray-600 mb-4">
            Coletamos informações que você nos fornece diretamente, incluindo nome, e-mail, informações de contato e dados relacionados ao processo de recrutamento.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Como Usamos suas Informações</h2>
          <p className="text-gray-600 mb-4">
            Utilizamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações e comunicar com você.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Compartilhamento de Informações</h2>
          <p className="text-gray-600 mb-4">
            Não vendemos suas informações pessoais. Podemos compartilhar informações apenas conforme descrito nesta política ou com seu consentimento.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Segurança</h2>
          <p className="text-gray-600 mb-4">
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Seus Direitos</h2>
          <p className="text-gray-600 mb-4">
            Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato conosco.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contato</h2>
          <p className="text-gray-600 mb-4">
            Para questões sobre esta política, entre em contato através do e-mail: rhapido@jedis.com
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

