## Instalação rápida

- Execute `npm install --save-dev dotenv cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor`.

## Resumo

O arquivo cypress.config.js é gerado na primeira execução do cypress.
Antes disso adicione o trecho no package.json:

```
...,
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/support/step_definitions/**/*"
  }
```

Quando executar o cypress pela primeira vez, só precisa confirmar que o arquivo **cypress.config.js** foi gerado, então feche.

No editor troque o conteúdo deste arquivo pelo do modelo já preenchido.

Faça os ajustes de acordo o projeto.