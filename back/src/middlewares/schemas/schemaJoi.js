const joi = require("joi");

const schemaCadastroUsuario = joi.object({
  cpf: joi.string().length(11).required().messages({
    "any.required": "O campo CPF é obrigatório!",
    "string.length": "O campo CPF deve contar 11 dígitos",
  }),
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório!",
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório!",
    "string.empty": "informe um email válido",
    "string.email": "O valor informado não é um e-mail válido",
  }),
  senha: joi.required().messages({
    "any.required": "O campo senha é obrigatório!",
  }),
  telefone: joi
    .string()
    .pattern(/^\d{10,11}$/)
    .allow("")
    .messages({
      "string.pattern.base":
        "O telefone informado não é válido. Use somente números (10 ou 11 dígitos).",
    }),
});

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório!",
    "string.empty": "informe um email válido",
    "string.email": "O valor informado não é um e-mail válido",
  }),
  senha: joi.required().messages({
    "any.required": "O campo senha é obrigatório!",
  }),
});

module.exports = {
  schemaCadastroUsuario,
  schemaLogin,
};
