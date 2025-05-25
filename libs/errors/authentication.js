
class APIParamNotFound extends Error {
    constructor(message) {
        super("Paramêtros não encontrados!")
        this.name = APIParamNotFound.name
    }
}

class TokenAuthError extends Error {
    constructor(message) {
        super("Usuário ou Senha incorretos!")
        this.name = "TokenAuthError"
    }
}

class TokenCorruptError extends Error {
    constructor(message) {
        super("Token inválido! Necessário autenticação!");
        this.name = "TokenCorruptError";
    }
}

class TokenExpiredError extends Error {
    constructor(message) {
        super("Token expirou! Necessário autenticação!");
        this.name = "TokenExpiredError";
    }
}

class TokenAttackError extends Error {
    constructor(message) {
        super("Token inválido! Necessário autenticação!");
        this.name = "TokenAttackError";
        this.log = "Provável tentativa de ataque via token!";
    }
}

module.exports = {
    TokenAuthError, TokenCorruptError, TokenExpiredError, TokenAttackError,
    APIParamNotFound,
};