# Comandos Git

### Configurando o VSCode como editor git
`git config --global core-editor "code --wait"`

### Comparação dos commits remoto e local  
`git log origin/HEAD..HEAD --oneline --graph --decorate`

### Mostra os arquivos alterados nos commits  
`diff --name-only origin/HEAD..HEAD`

### Criando um alias  

Exemplo: `git config --global alias.COMMIT_README "commit -m 'docs(readme): atualização de texto'"`

Execução: `git COMMIT_README`