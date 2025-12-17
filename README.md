# RHapido - Landing Page

Landing page do RHapido, um ATS (Applicant Tracking System) completo para gerenciar processos de recrutamento e seleção.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd landing-page
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

Para iniciar o servidor de produção:

```bash
npm start
# ou
yarn start
# ou
pnpm start
```

### Linting

Para verificar o código com ESLint:

```bash
npm run lint
# ou
yarn lint
# ou
pnpm lint
```

## 📁 Estrutura do Projeto

```
landing-page/
├── app/                    # Páginas e rotas (Next.js App Router)
│   ├── page.tsx           # Página inicial
│   ├── layout.tsx          # Layout principal
│   ├── globals.css        # Estilos globais
│   ├── privacidade/       # Página de privacidade
│   ├── termos/            # Página de termos
│   ├── lgpd/              # Página LGPD
│   └── compliance/        # Página de compliance
├── components/             # Componentes React
│   ├── ui/                # Componentes de UI reutilizáveis
│   ├── header.tsx         # Cabeçalho
│   ├── footer.tsx         # Rodapé
│   ├── hero-section.tsx   # Seção hero
│   └── ...                # Outros componentes
├── public/                # Arquivos estáticos
│   ├── images/            # Imagens
│   └── videos/            # Vídeos
└── lib/                   # Utilitários
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 🌐 Deploy

O projeto está configurado para deploy na Vercel. Para fazer deploy:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático será feito a cada push na branch principal

## 📧 Contato

Para mais informações sobre o RHapido, entre em contato:
- Email: rhapido@jedis.com
- Website: [https://jedis.com.br/](https://jedis.com.br/)

