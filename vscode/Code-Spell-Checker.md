### Code Spell Checker
**Extensão VSCode de Correção ortográfica**
- Múltiplos idiomas (incluindo português).
- Sublima palavras incorretas.
- Permite adicionar ao dicionário personalizado.

#### Instalação

Via VSCode:
- Execute `code --install-extension streetsidesoftware.code-spell-checker
`
- Para instalar o idioma pt-BR execute `code --install-extension streetsidesoftware code-spell-checker-portuguese-brazilian`
- 

#### Configure o idioma no settings.json

- Abra o `settings.json` com `Ctrl + Shift + P` → **"Preferences: Open Settings (JSON)"** e adicione:

```
...
"cSpell.language": "pt,pt-BR",
"cSpell.dictionaries": [
  "pt-BR"
]
```

- Reinicie o VS Code
Após salvar o settings.json, reinicie o VS Code para aplicar corretamente o dicionário.

#### Dica extra:

É possível adicionar palavras personalizadas (ex: nomes próprios ou termos técnicos) usando:

```
...
"cSpell.userWords": [
  "JavaScript",
  "Nodejs"
]
```