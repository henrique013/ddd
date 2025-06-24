# 📞 DDD Brasil - Busca de Cidades por DDD

<p align="center">
  <img src="public/images/screenshot.png" alt="DDD Brasil - Interface da aplicação" width="850" style="border-radius: 6px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
</p>

## 🌐 Acesso Online

Acesse a versão online do projeto [aqui](https://ddd.solidsistemas.com/).

## 🔎 Sobre o Projeto

O DDD Brasil é uma aplicação web moderna e intuitiva que permite consultar rapidamente quais cidades pertencem a cada DDD (Discagem Direta à Distância) no território brasileiro.

Com uma interface clean e responsiva, basta digitar um código DDD no campo de busca para obter instantaneamente uma lista completa de todas as cidades associadas àquele código de área telefônico.

Esta ferramenta é especialmente útil para:

- 🚚 Profissionais de logística e entregas
- 📊 Equipes de marketing com campanhas regionalizadas
- 🏢 Empresas com atendimento segmentado por região
- 👥 Pessoas que precisam identificar a localização geográfica de um número telefônico

O sistema abrange todos os 67 DDDs brasileiros, desde grandes centros urbanos como São Paulo (11), Rio de Janeiro (21) e Belo Horizonte (31), até regiões mais remotas do território nacional.

## ✨ Recursos e Diferenciais

Principais recursos e diferenciais do projeto:

- **📱 Mobile First:** Design otimizado prioritariamente para dispositivos móveis, garantindo uma experiência perfeita em smartphones e tablets
- **🌙 Dark Theme:** Suporte completo a tema escuro, que se adapta automaticamente às preferências do sistema
- **🧹 Interface Minimalista:** Design limpo e intuitivo focado na usabilidade

## 🛠️ Tecnologias e Bibliotecas

Principais tecnologias e bibliotecas utilizadas:

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Zod](https://zod.dev/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Lefthook](https://github.com/evilmartians/lefthook)

## 📋 Pré-requisitos

Para executar o projeto, você precisa ter instalado:

- [Node.js 20+](https://nodejs.org/)
- [Git](https://git-scm.com/)

## ⚙️ Instalação

Siga estes passos para configurar o ambiente:

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

## 🔐 Configuração de Ambiente

Para que a aplicação funcione corretamente, configure as variáveis de ambiente:

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

Comandos principais do projeto:

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera uma versão otimizada para produção
- `npm run preview` - Previsualiza a versão de produção localmente _(requer execução prévia de `npm run build`)_
- `npm run compile` - Verifica se o código compila sem erros
- `npm run lint` - Executa a verificação de linting no código
- `npm run format` - Formata o código usando o Prettier
- `npm run tag` - Cria uma tag para o projeto seguindo o padrão SemVer (MAJOR.MINOR.PATCH). Ex: `npm run tag -- patch`
  - Dica: Para resetar a versão para 1.0.0, edite manualmente o campo "version" no package.json
- `npm run postinstall` - Executa scripts de pós-instalação

## 📁 Estrutura do Projeto

Principais diretórios e arquivos:

```
ddd/
├── public/             # Arquivos estáticos
├── src/                # Código fonte
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

Entre em contato através das redes sociais:

- LinkedIn: [Henrique Alves](https://www.linkedin.com/in/henrique-alves-a44b99135)
- GitHub: [henrique013](https://github.com/henrique013)
