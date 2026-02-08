# Dimas Consultoria Gastronômica

Website institucional desenvolvido para a **Dimas Consultoria Gastronômica**, focado em apresentar serviços de consultoria estratégica para restaurantes, bares e hotéis. O projeto utiliza **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS** para garantir alta performance, SEO otimizado e uma experiência de usuário premium.

## 🚀 Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)**: Framework React para produção, utilizando App Router e Server Components.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e manutenibilidade.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida e consistente.
- **Ícones SVG**: Sistema de ícones otimizado e leve (`components/Icon.tsx`).
- **Vercel OG**: Geração dinâmica de imagens para redes sociais (Open Graph).

## ✨ Funcionalidades

- **Landing Page de Alta Conversão**: Seções de herói, serviços, prova social e chamadas para ação (CTA).
- **Blog Integrado**: Sistema de blog estático otimizado para SEO.
- **SEO & Metatags**: Configuração completa de metadados, incluindo Open Graph e Twitter Cards dinâmicos.
- **Design Responsivo**: Layout adaptável para dispositivos móveis, tablets e desktops.
- **Botão Flutuante do WhatsApp**: Facilita o contato direto com o consultor.
- **Componentes Reutilizáveis**: Arquitetura modular com componentes como `Header`, `Footer`, `ServiceCard`, etc.

## 📂 Estrutura do Projeto

```bash
├── app/                # Rotas e páginas do Next.js (App Router)
│   ├── blog/           # Página do blog e posts individuais
│   ├── sobre/          # Página "Sobre"
│   ├── layout.tsx      # Layout raiz da aplicação
│   ├── page.tsx        # Página inicial (Home)
│   └── globals.css     # Estilos globais do Tailwind
├── components/         # Componentes React reutilizáveis (Header, Footer, UI)
├── lib/                # Dados estáticos e configurações
│   ├── site.ts         # Configurações globais do site (nome, contatos, links)
│   ├── posts.ts        # Dados dos artigos do blog
│   ├── services.ts     # Dados dos serviços oferecidos
│   ├── testimonials.ts # Depoimentos e lista de clientes
│   └── cases.ts        # Estudos de caso
└── public/             # Arquivos estáticos (imagens, ícones)
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js 18.17 ou superior
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dimas-consultoria.git
   cd dimas-consultoria
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra http://localhost:3000 no seu navegador.

## ⚙️ Personalização

A maior parte do conteúdo é gerenciada através de arquivos na pasta `lib/`, facilitando a manutenção sem necessidade de alterar componentes complexos:

- **Informações do Site**: Edite `lib/site.ts` para alterar nome, descrição, telefone, email e links de navegação.
- **Serviços**: Edite `lib/services.ts` para adicionar ou remover serviços exibidos na home.
- **Blog**: Adicione novos artigos em `lib/posts.ts`.
- **Depoimentos**: Atualize `lib/testimonials.ts` com novos feedbacks de clientes.

## 🚀 Deploy

O projeto é otimizado para deploy na **Vercel**:

1. Faça o push do código para um repositório Git (GitHub, GitLab, Bitbucket).
2. Importe o projeto na Vercel.
3. O deploy será automático.