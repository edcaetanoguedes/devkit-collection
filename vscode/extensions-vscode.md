## Extensões VSCode

- #### Prettier  
  ➤ Formatador de código opinativo que mantém o estilo consistente automaticamente.

- #### ESLint  
  ➤ Analisa seu código JavaScript/TypeScript em busca de erros e más práticas com base em regras configuráveis.

- #### Bracket Pair Colorizer 2  
  ➤ Colore pares de colchetes/chaves para facilitar a leitura do código, especialmente em estruturas aninhadas.

- #### Path Intellisense  
  ➤ Autocompleta caminhos de arquivos no seu projeto enquanto você digita importações.

- #### Auto Rename Tag  
  ➤ Renomeia automaticamente a tag de fechamento ao editar a tag de abertura (e vice-versa).

- #### Auto Close Tag  
  ➤ Insere automaticamente a tag de fechamento ao digitar a tag de abertura.

- #### TagOut  
  ➤ Permite deletar ou recortar rapidamente tags HTML/JSX inteiras com um único comando.

- #### Regex Previewer
  ➤ Permite testar suas expressões regulares no VSCode, sem precisar abrir mil abas no navegador.  Abra o preview: `Cmd/Ctrl + Shift + P` → Regex Previewer: Toggle

- #### Code Spell Checker <sup>[Ver detalhes](./Code-Spell-Checker.md)</sup>
  ➤ Correção ortográfica: Múltiplos idiomas (incluindo português), sublima palavras incorretas e permite adicionar ao dicionário personalizado.
---

- #### HTML CSS Support  
  ➤ Suporte aprimorado a CSS em arquivos HTML, incluindo autocompletar e ir para definição.

- #### CSS Modules  
  ➤ Adiciona suporte a `.module.css` e `.module.scss` com IntelliSense para classes em projetos React e similares.

- #### SCSS Intellisense  
  ➤ Fornece sugestões inteligentes e navegação para variáveis, mixins e funções SCSS.

- #### React Developer Tools  
  ➤ Ferramentas de inspeção de componentes React diretamente no navegador (requer instalação fora do VS Code também).

- #### Javascript (ES6) code snippets  
  ➤ Coleção de snippets para acelerar a escrita de código moderno JavaScript/ES6.

---

- #### Python (oficial da Microsoft)  
  ➤ Suporte completo a desenvolvimento em Python com linting, depuração e execução.

- #### Jupyter  
  ➤ Permite criar, editar e executar notebooks Jupyter (.ipynb) diretamente no VS Code.

- #### Pylance  
  ➤ Motor de linguagem para Python com análise de tipo rápida e inteligente (recomendado junto com a extensão Python).

---

- #### SQLTools  
  ➤ Cliente SQL no VS Code que permite conectar, executar queries e navegar por bancos de dados.

- #### SQLite  
  ➤ Integração com bancos de dados SQLite para explorar e executar comandos diretamente do editor.

---

- #### Markdown All in One  
  ➤ Conjunto completo de melhorias para Markdown: visualização, atalhos, sumário automático, etc.

- #### Markdown Preview Enhanced  
  ➤ Pré-visualização avançada de Markdown com suporte a gráficos, LaTeX, diagramas e mais.

---
- #### GitLens  
  ➤ Melhora a integração com Git: mostra histórico, autor de cada linha (blame), comparações e insights poderosos no código.
- #### Git Graph  
  ➤ Exibe uma visualização gráfica interativa de commits, branches e merges do seu repositório Git.
- #### Github Copilot  
  ➤ Assistente de codificação com IA que sugere trechos de código em tempo real com base no contexto.
---

- #### Mintlify
  ➤ Gera a documentação automaticamente do seu código.
---

### Comando para a instalação de todas as extenções
Copie o bloco inteiro, cole no terminal do **VScode** e tecle `Enter`.

```
code --install-extension esbenp.prettier-vscode;
code --install-extension dbaeumer.vscode-eslint;
code --install-extension CoenraadS.bracket-pair-colorizer-2;
code --install-extension christian-kohler.path-intellisense;
code --install-extension formulahendry.auto-rename-tag;
code --install-extension formulahendry.auto-close-tag;
code --install-extension algebra.tabout;
code --install-extension streetsidesoftware.code-spell-checker;
code --install-extension chrmarti.regex;
code --install-extension ecmel.vscode-html-css;
code --install-extension pranaygp.vscode-css-modules;
code --install-extension mrmlnc.vscode-scss;
code --install-extension xabikos.JavaScriptSnippets;
code --install-extension ms-python.python;
code --install-extension ms-toolsai.jupyter;
code --install-extension ms-python.vscode-pylance;
code --install-extension mtxr.sqltools;
code --install-extension alexcvzz.vscode-sqlite;
code --install-extension yzhang.markdown-all-in-one;
code --install-extension shd101wyy.markdown-preview-enhanced;
code --install-extension eamodio.gitlens;
code --install-extension mhutchie.git-graph;
code --install-extension vector-of-bool.gitflow;
code --install-extension mintlify.document;
```