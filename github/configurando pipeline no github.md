# Pipeline

Uma pipeline é uma sequência automatizada de etapas para construir, testar, e implantar (deployar) uma aplicação.

## Contexto

Dois repositórios, um da aplicação (**RepoApp**) e outro de testes (**RepoTests**).

No repositório de testes:

> ## Github Actions  
> 
> ### Permissões necessárias  
> **RepoTests** precisa de permissão de leitura ao **RepoApp**.  
> **Obs**: Configurado como se o **RepoApp** fosse privado.  
> 
> ####  Objetivo: criar um token pessoal com permissão **repo** e salve como secret (ex: **GH_PERSONAL_TOKEN**).  
> ### Procedimentos:  
>> Em **RepoTests** vá para **Settings**  
>> => **Secrets and variables** => **Actions** => **New repository secret**  
>> => Preencha o nome da variável (ex: `GH_PERSONAL_TOKEN`)  
>> O valor do token é exibido apenas uma vez, e é acessado na pipeline via declaração `${{ secrets.GH_PERSONAL_TOKEN }}`  
> 
> **Obs:** O token `${{ secrets.GH_PERSONAL_TOKEN }}` funciona se os dois repositórios estiverem no mesmo GitHub org e públicos ou com permissão cruzada.  
> 
>> Em **RepoTests**
>> Crie o arquivo YAML na raiz `./github/workflow/pipeline.yml`  
>> Configure o roteiro da pipeline ([exemplo](./backend-e2e-workflow-test.yml))  
>> Execute `npm install --save-dev wait-on` (recurso para aguardar a endpoint estar rodando).  
>
> 
> Suba a pipeline para o github. Exemplo:  
>> Execute `git add .github/workflows/pipeline.yml`  
>> Execute `git commit -m "chore(pipeline): Adiciona pipeline de testes E2E do backend"`  
>> Execute `git push origin <BRANCH>`, a branch pode ser **main**, **develop**, etc.  
>
>  **Obs:** Você só precisa configurar um secret se for necessário clonar outro repositório privado.  
> Se os dois repositórios forem públicos, o secrets.GITHUB_TOKEN padrão do GitHub já é suficiente para clonar outro repositório da mesma conta/organização.   
