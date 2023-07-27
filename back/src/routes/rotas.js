require("dotenv").config();
const express = require("express");
const route = express.Router();
const { testeApp } = require("../controllers/testeApp");
const { schemaCadastroUsuario } = require("../middlewares/schemas/schemaJoi");
const { emailExiste } = require("../middlewares/EmailExiste");
const novoUsuario = require("../controllers/usuario/novoUsuario");
const validarBody = require("../middlewares/validarBody");

route.get("/teste", testeApp);
route.post(
  "/usuario/novousuario",
  validarBody(schemaCadastroUsuario),
  emailExiste(true),
  novoUsuario
);

module.exports = route;
