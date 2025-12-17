import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Ao usar o RHapido, você concorda com estes Termos de Uso. Leia-os cuidadosamente.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-600 mb-4">
            Ao acessar e usar o RHapido, você aceita estar vinculado a estes Termos de Uso e a todas as leis e regulamentos aplicáveis.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Uso do Serviço</h2>
          <p className="text-gray-600 mb-4">
            Você concorda em usar o RHapido apenas para fins legais e de acordo com estes termos. É proibido usar o serviço de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Conta do Usuário</h2>
          <p className="text-gray-600 mb-4">
            Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem sob sua conta.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Propriedade Intelectual</h2>
          <p className="text-gray-600 mb-4">
            Todo o conteúdo do RHapido, incluindo textos, gráficos, logos e software, é propriedade do RHapido ou de seus licenciadores e está protegido por leis de direitos autorais.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Limitação de Responsabilidade</h2>
          <p className="text-gray-600 mb-4">
            O RHapido é fornecido "como está". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cancelamento</h2>
          <p className="text-gray-600 mb-4">
            Você pode cancelar sua conta a qualquer momento. O cancelamento entrará em vigor no final do período de faturamento atual.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Modificações</h2>
          <p className="text-gray-600 mb-4">
            Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre mudanças significativas.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contato</h2>
          <p className="text-gray-600 mb-4">
            Para questões sobre estes termos, entre em contato através do e-mail: rhapido@jedis.com
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

