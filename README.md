# 📞 DDD Brasil - Busca de Cidades por DDD

<p align="center">
  <img src="public/images/screenshot.png" alt="DDD Brasil - Interface da aplicação" width="850" style="border-radius: 6px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
</p>

## 🌐 Acesso Online

Você pode acessar a versão online do projeto [aqui](https://ddd.solidsistemas.com/).

## 🔎 Sobre o Projeto

O DDD Brasil é uma aplicação web moderna e intuitiva que permite aos usuários consultar rapidamente quais cidades pertencem a cada DDD (Discagem Direta à Distância) no território brasileiro.

Com uma interface clean e responsiva, o usuário pode simplesmente digitar um código DDD no campo de busca e obter instantaneamente uma lista completa de todas as cidades associadas àquele código de área telefônico.

Esta ferramenta é especialmente útil para:

- 🚚 Profissionais que trabalham com logística e entregas
- 📊 Equipes de marketing que planejam campanhas regionalizadas
- 🏢 Empresas com atendimento segmentado por região
- 👥 Qualquer pessoa que precise identificar a localização geográfica de um número telefônico

O sistema abrange todos os 67 DDDs brasileiros, desde grandes centros urbanos como São Paulo (11), Rio de Janeiro (21) e Belo Horizonte (31), até regiões mais remotas do território nacional.

## ✨ Recursos e Diferenciais

- **📱 Mobile First:** Design otimizado prioritariamente para dispositivos móveis, garantindo uma experiência perfeita em smartphones e tablets
- **🌙 Dark Theme:** Suporte completo a tema escuro, que se adapta automaticamente às preferências do sistema do usuário
- **🧹 Interface Minimalista:** Design limpo e intuitivo focado na usabilidade

## 🛠️ Tecnologias e Bibliotecas Utilizadas

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Zod](https://zod.dev/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Lefthook](https://github.com/evilmartians/lefthook)

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js 20+](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## 🚀 Instalação

Siga estes passos para configurar o ambiente de desenvolvimento:

1. Clone o repositório

   ```bash
   git clone git@github.com:henrique013/ddd.git
   ```

2. Navegue até o diretório do projeto

   ```bash
   cd ddd
   ```

3. Instale as dependências
   ```bash
   npm install
   ```

## 🔐 Configuração de Variáveis de Ambiente

Para que a aplicação funcione corretamente, é necessário configurar as variáveis de ambiente.

Copie o arquivo `.env.example` para um novo arquivo chamado `.env`:

```bash
cp .env.example .env
```

## ▶️ Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173)

## ⌨️ Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera uma versão otimizada para produção
- `npm run preview` - Previsualiza a versão de produção localmente _(requer execução prévia de `npm run build`)_
- `npm run compile` - Verifica se o código compila sem erros
- `npm run lint` - Executa a verificação de linting no código
- `npm run format` - Formata o código usando o Prettier
- `npm run tag` - Cria uma tag para o projeto seguindo o padrão SemVer (MAJOR.MINOR.PATCH). Ex: `npm run tag -- patch`
  - Dica: Se quiser resetar a versão para 1.0.0, você pode editar manualmente o campo "version" no package.json
- `npm run postinstall` - Executa scripts de pós-instalação

## 📁 Estrutura do Projeto

Estes são os principais arquivos e diretórios do projeto:

```
ddd/
├── public/             # Arquivos estáticos
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── container/      # Container de injeção de dependências
│   ├── contexts/       # Contextos React
│   ├── hooks/          # Custom hooks
│   ├── scripts/        # Scripts de inicialização e configuração
│   ├── services/       # Serviços e APIs
│   ├── utils/          # Utilitários
│   ├── env.ts          # Variáveis de ambiente
│   ├── errors.ts       # Erros personalizados
│   ├── index.css       # Estilos globais
│   └── main.tsx        # Ponto de entrada da aplicação
├── index.html          # Página HTML principal
└── ...                 # Arquivos de configuração
```

## 📧 Contato

- LinkedIn: [Henrique Alves](https://www.linkedin.com/in/henrique-alves-a44b99135)
- GitHub: [henrique013](https://github.com/henrique013)
