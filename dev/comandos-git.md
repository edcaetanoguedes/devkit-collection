# Comandos Git

### Configurando o VSCode como editor git
`git config --global core-editor "code --wait"`

### Comparação de branches/commits

- Histórico de todas as branches em forma de grafo  
  `git log --oneline --graph --decorate --all`  
- Comparação dos commits remoto e local  
  `git log origin/HEAD..HEAD --oneline --graph --decorate`  
- Ver os commits que existem em uma branch e não em outra  
  `git log branch..branch2`  
- Ver a diferença de arquivos entre branches  
  `git diff branch..branch2`  
- Ver se há algo para ser mesclado entre as branches  
  `git log branch1..branch2 --oneline`  

### Mostra os arquivos alterados nos commits  
`diff --name-only origin/HEAD..HEAD`

### Criando um alias  

Exemplo: `git config --global alias.COMMIT_README "commit -m 'docs(readme): atualização de texto'"`

Execução: `git COMMIT_README`