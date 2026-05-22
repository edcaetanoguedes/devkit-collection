# Recursos práticos do TypeScript em código

---

# 1. Tipagem de variáveis

## JavaScript

```js
let nome = 'Ednaldo'
nome = 10
```

JS aceita.

---

## TypeScript

```ts
let nome: string = 'Ednaldo'

nome = 10
```

Erro:

```txt
Type 'number' is not assignable to type 'string'
```

---

# 2. Tipagem de funções

## Sem TypeScript

```js
function somar(a, b) {
  return a + b
}

somar(10, '5')
```

Pode gerar comportamento inesperado:

```txt
105
```

---

## Com TypeScript

```ts
function somar(a: number, b: number): number {
  return a + b
}

somar(10, '5')
```

Erro imediato.

---

# 3. Interfaces

Muito usado para:

* APIs
* respostas JSON
* banco de dados
* Cypress

---

## Exemplo real de API

```ts
interface User {
  id: number
  nome: string
  email: string
  ativo: boolean
}
```

Uso:

```ts
const usuario: User = {
  id: 1,
  nome: 'Ednaldo',
  email: 'teste@email.com',
  ativo: true
}
```

---

## Erro detectado

```ts
const usuario: User = {
  id: 1,
  nome: 'Ednaldo'
}
```

Erro:

```txt
Property 'email' is missing
```

---

# 4. Optional Properties (?)

Muito usado em APIs.

```ts
interface User {
  nome: string
  telefone?: string
}
```

Agora o telefone é opcional:

```ts
const user: User = {
  nome: 'Ednaldo'
}
```

---

# 5. Arrays tipados

## JavaScript

```js
const lista = ['a', 1, true]
```

Tudo misturado.

---

## TypeScript

```ts
const lista: string[] = ['a', 'b', 'c']
```

Agora:

```ts
lista.push(10)
```

Erro.

---

# 6. Union Types

Permite múltiplos tipos.

```ts
let id: string | number

id = 10
id = 'abc'
```

Muito usado em APIs.

---

# 7. Literal Types

Restringe valores específicos.

```ts
type Status = 'success' | 'error' | 'loading'
```

Uso:

```ts
let status: Status

status = 'success'
```

---

## Erro

```ts
status = 'finished'
```

---

# 8. Type Alias

Cria tipos reutilizáveis.

```ts
type Usuario = {
  nome: string
  idade: number
}
```

---

# 9. Enum

Muito usado para status.

```ts
enum Perfil {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
```

Uso:

```ts
const perfil = Perfil.ADMIN
```

---

# 10. Generics

Um dos recursos mais poderosos.

---

## Sem generic

```ts
function retorno(valor: any) {
  return valor
}
```

Perde tipagem.

---

## Com generic

```ts
function retorno<T>(valor: T): T {
  return valor
}
```

Uso:

```ts
const nome = retorno<string>('Ednaldo')
const idade = retorno<number>(32)
```

---

# Exemplo REAL em Cypress

```ts
interface LoginResponse {
  token: string
  user: {
    id: number
    nome: string
  }
}

cy.request<LoginResponse>('POST', '/login')
  .then((response) => {
    response.body.token
    response.body.user.nome
  })
```

Autocomplete completo.

---

# 11. Classes

Muito usado em:

* Page Objects
* backend
* serviços

---

## Exemplo Page Object Cypress

```ts
class LoginPage {
  acessar() {
    cy.visit('/login')
  }

  preencherEmail(email: string) {
    cy.get('#email').type(email)
  }

  preencherSenha(senha: string) {
    cy.get('#password').type(senha)
  }
}
```

---

# 12. Access Modifiers

Controla acesso interno.

```ts
class Usuario {
  private senha: string

  constructor(senha: string) {
    this.senha = senha
  }
}
```

Agora:

```ts
usuario.senha
```

Erro.

---

# 13. Readonly

Impede alteração.

```ts
interface Config {
  readonly apiUrl: string
}
```

---

# 14. Partial<T>

Muito usado em updates.

```ts
interface User {
  nome: string
  email: string
}
```

---

## Sem Partial

```ts
const update: User = {
  nome: 'Novo'
}
```

Erro.

---

## Com Partial

```ts
const update: Partial<User> = {
  nome: 'Novo'
}
```

Agora funciona.

---

# 15. Async/Await tipado

```ts
async function buscarUsuario(): Promise<string> {
  return 'Ednaldo'
}
```

---

# 16. Narrowing

TS entende condições.

```ts
function imprimir(valor: string | number) {
  if (typeof valor === 'string') {
    console.log(valor.toUpperCase())
  }
}
```

O TS entende que dentro do if é string.

---

# 17. Record

Muito usado para mapas/configurações.

```ts
const status: Record<string, number> = {
  success: 200,
  error: 500
}
```

---

# 18. Inferência de tipos

TS muitas vezes descobre sozinho.

```ts
const nome = 'Ednaldo'
```

O TS entende automaticamente:

```ts
string
```

---

# Exemplo PRÁTICO COMPLETO

## JavaScript

```js
function criarUsuario(usuario) {
  return usuario.nome.toUpperCase()
}
```

Problemas:

* pode faltar nome
* pode vir número
* pode vir null

---

## TypeScript

```ts
interface Usuario {
  nome: string
  email: string
}

function criarUsuario(usuario: Usuario): string {
  return usuario.nome.toUpperCase()
}
```

Agora:

* autocomplete
* validação
* menos bugs
* documentação automática

---

# O que MAIS muda na prática

Quando o projeto cresce:

## JavaScript

Você depende de:

* memória
* documentação
* convenção
* atenção humana

---

## TypeScript

Você ganha:

* validação automática
* segurança
* autocomplete
* refatoração segura
* documentação viva

---

# Recursos MAIS usados no mercado

Os campeões absolutos:

1. interfaces
2. tipagem de funções
3. generics
4. union types
5. type alias
6. async/await tipado
7. classes
8. Partial / Record
9. enums
10. autocomplete forte

---

# Em automação Cypress

Os mais úteis são:

* interfaces
* custom commands tipados
* resposta de API tipada
* Page Objects com classes
* autocomplete
* generics em cy.request()

