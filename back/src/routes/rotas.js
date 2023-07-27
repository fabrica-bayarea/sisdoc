require("dotenv").config();
const express = require("express");
const route = express.Router();
const { testeApp } = require("../controllers/testeApp");
const { schemaCadastroUsuario } = require("../middlewares/schemas/schemaJoi");
const { emailExiste } = require("../middlewares/EmailExiste");
const novoUsuario = require("../controllers/usuario/novoUsuario");
const validarBody = require("../middlewares/validarBody");
const cpfExiste = require("../middlewares/cpfExiste");
const validarUsuario = require("../controllers/auth/validarUsuario");

route.get("/teste", testeApp);
route.post(
  "/usuario/novousuario",
  validarBody(schemaCadastroUsuario),
  cpfExiste,
  emailExiste(false),
  novoUsuario
);
route.get("/auth/validarusuario", validarUsuario);

module.exports = route;
