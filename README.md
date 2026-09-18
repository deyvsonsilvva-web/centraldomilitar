# Central do Militar

Plataforma gratuita de consulta e ferramentas para as carreiras das Forças
Armadas brasileiras (Exército, Marinha e Aeronáutica).

Este repositório está, neste momento, na etapa de **fundação técnica**: a
aplicação roda, navega e publica corretamente no GitHub Pages, mas ainda não
contém nenhum dado militar factual (postos, interstícios, remuneração etc.).
Esses dados só entram depois de passar pelo ciclo de pesquisa documental
descrito nas instruções do projeto.

## Stack

- React 19 + TypeScript
- Vite 8 (bundler e dev server)
- React Router 7 (roteamento client-side)
- ESLint (flat config) com typescript-eslint

## Comandos

```bash
npm install     # instala as dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run lint     # verifica o código com ESLint
npm run build    # gera a build de produção em dist/
npm run preview  # serve a build de produção localmente para conferência
```

## Publicação no GitHub Pages

O projeto é publicado em `https://deyvsonsilvva-web.github.io/centraldomilitar/`,
ou seja, **não na raiz do domínio**. Por isso:

- `vite.config.ts` define `base: '/centraldomilitar/'`.
- `App.tsx` usa `import.meta.env.BASE_URL` como `basename` do React Router,
  para nunca ficar dessincronizado do `base` do Vite.
- `public/404.html` + o script no `<head>` de `index.html` implementam a
  técnica [spa-github-pages](https://github.com/rafgraph/spa-github-pages),
  necessária porque o GitHub Pages não sabe nativamente que
  `/centraldomilitar/carreiras/exercito` deve carregar a mesma aplicação — sem
  isso, atualizar a página (F5) em qualquer rota que não seja `/` resultaria
  em 404.

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`) a
cada push na branch `main`. **Configuração manual necessária uma única vez:**
em Settings → Pages do repositório, definir "Source" como **GitHub Actions**
(não "Deploy from a branch").

## Estrutura

```text
src/
├── components/   # componentes reutilizáveis (Header, Footer, ForceCard...)
├── data/         # dados estruturados (JSON) — ainda vazio nesta etapa
├── layouts/       # layout geral da aplicação (MainLayout)
├── pages/        # páginas roteadas (Home, Sobre, EmDesenvolvimento)
├── routes/       # definição das rotas (AppRoutes)
├── styles/       # CSS global e variáveis de design
├── types/        # tipos TypeScript compartilhados
└── utils/        # funções utilitárias puras — ainda vazio nesta etapa
```
