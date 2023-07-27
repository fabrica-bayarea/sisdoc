require("dotenv").config();
const express = require("express");
const route = express.Router();
const { testeApp } = require("../controllers/testeApp");
const {
  schemaCadastroUsuario,
  schemaLogin,
} = require("../middlewares/schemas/schemaJoi");
const { emailExiste } = require("../middlewares/EmailExiste");
const novoUsuario = require("../controllers/usuario/novoUsuario");
const validarBody = require("../middlewares/validarBody");
const cpfExiste = require("../middlewares/cpfExiste");
const validarUsuario = require("../controllers/usuario/validarUsuario");
const login = require("../controllers/auth/login");

route.get("/teste", testeApp);
route.post(
  "/app/usuario/cadastro",
  validarBody(schemaCadastroUsuario),
  cpfExiste,
  emailExiste(false),
  novoUsuario
);
route.get("/app/usuario/validacao", validarUsuario);
route.post(
  "/app/auth/login",
  validarBody(schemaLogin),
  emailExiste(true),
  login
);

module.exports = route;
