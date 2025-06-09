# Pipeline
### Github Actions

Uma pipeline é uma sequência automatizada de etapas para construir, testar, e implantar (deployar) uma aplicação.

## Contexto

Dois repositórios, um da aplicação (**RepoApp**) e outro de testes (**RepoTests**).  
**RepoApp** executará os testes contidos em **RepoTests** assim que receber um push na `branch develop`.

## Resumo  

- Token com permissão repo e workflow.
- Configuração do Secret, usando o Token, nos repositórios envolvidos.
- Criação da pipeline com a secret.

## Explicação detalhada  

> ### Permissões necessárias  
>
> - Criação de Token  
> - Configuração de Secret  
> 
> **RepoTests** precisa de permissão de leitura ao **RepoApp**.  
> **Obs**: Configurado como se o **RepoApp** fosse privado.  
> 
> ### Criar Token de permissões.  
> 
>> Em `https://github.com/settings/tokens`:  
>> No campo nome preencha com algo que identifique o propósito.   
>> Tenha em mente que serão necessárias as permissões **repo** e **workflow**.  
>> Ao gerar o token, **COPIE**, pois este só aparecerá uma vez. Será usado futuramente.  
>
> ### Configuração de Secret (ex: **GH_PERSONAL_TOKEN**)
>
>> Em ambos os repositórios, faça:  
>> => **Settings** => **Secrets and variables** => **Actions** => **New repository secret**  
>> => Preencha o nome da variável (ex: `GH_PERSONAL_TOKEN`)  
>> => Preencha o token com o copiado antes.
>> O valor do token é exibido apenas uma vez, e é acessado na pipeline via declaração `${{ secrets.GH_PERSONAL_TOKEN }}`  
> Faça a config do secret nos 2 repositórios.  
> 
> **Obs:** O token `${{ secrets.GH_PERSONAL_TOKEN }}` funciona se os dois repositórios estiverem no mesmo GitHub org e públicos ou com permissão cruzada.  
> 
>> Em **RepoTests**  
>> Crie o arquivo YAML na raiz `./github/workflow/pipeline.yml`.  
>> Objetivo: execução dos testes de **RepoTests** em **RepoApp**
>> Configure o roteiro da pipeline ([exemplo](./pipeline-of-repo-tests.yml)).  
>> Execute `npm install --save-dev wait-on` (recurso para aguardar a endpoint estar rodando).  
>
>> Em **RepoApp**  
>> Crie o arquivo YAML também na raiz.  
>> Objetivo: um trigger para executar em **RepoApp** os testes de **RepoTests**.  
>> Configure o roteiro da pipeline ([exemplo(backend)](./pipeline-trigger-of-repo-app.yml)).  
>
> 
> Suba as pipelines em seus respectivos repositórios no github. Exemplo:  
>> Execute `git add .github/workflows/pipeline.yml`  
>> Execute `git commit -m "chore(pipeline): Adiciona workflow de testes E2E do backend"`  
>> Execute `git push origin <BRANCH>`, a branch pode ser **main**, **develop**, etc.  
>
>  **Obs:** Você só precisa configurar um secret se for necessário clonar outro repositório privado.  
> Se os dois repositórios forem públicos, o secrets.GITHUB_TOKEN padrão do GitHub já é suficiente para clonar outro repositório da mesma conta/organização.  
