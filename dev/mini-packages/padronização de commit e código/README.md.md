## Instalação rápida

- Execute 
`
npm install --save-dev commitizen prettier @commitlint/cli @commitlint/config-conventional lint-staged husky@8.0.0 eslint @eslint/json; npx commitizen init cz-conventional-changelog --save-dev --save-exact; npx husky install
`
## Resumo

- Todos os arquivos vão na raiz do projeto, exceto os arquivos do **husky**.
- Os arquivos **pre-commit** e **commit-msg** vão na raiz da pasta `.husky`.