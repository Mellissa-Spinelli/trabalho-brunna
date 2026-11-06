# TRABALHO BRUNNA

Site educacional interativo feito com React, JavaScript, CSS e Vite. O jogo funciona inteiramente no navegador, sem servidor ou banco de dados.

## Executar localmente

Instale o [Node.js](https://nodejs.org/) e rode na pasta do projeto:

```bash
npm install
npm run dev
```

O Vite mostrará o endereço local para abrir no navegador. Para gerar e conferir a versão de publicação:

```bash
npm run build
npm run preview
```

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a branch `main` (ou `master`).
2. No repositório, abra **Settings → Pages** e escolha **GitHub Actions** como fonte de publicação.
3. O fluxo em `.github/workflows/deploy.yml` instala as dependências, gera o site e publica a pasta `dist` a cada envio para a branch principal. A URL aparece em **Settings → Pages**.

O site usa caminhos relativos e navegação por hash (`#/` e `#/jogo`), compatíveis com repositórios de projeto no GitHub Pages.

## Personalizar

- Nome e texto da apresentação: `src/data/site.js`
- Perguntas, opções e respostas: `src/data/questions.js`
- Componentes: `src/components/`
- Páginas e regras do jogo: `src/pages/` e `src/hooks/useWheelGame.js`
- Cores, layout e animações: `src/styles/`
