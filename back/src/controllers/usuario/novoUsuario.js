require("dotenv").config();
const pool = require("../../configs/pgConexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const enviarEmail = require("../../utils/enviarEmail");
const gerarUrl = require("../../utils/gerarUrl");

const novoUsuario = async (req, res) => {
  const { cpf, nome, email, senha, telefone, tipo_telefone } = req.body;
  const transacao = await pool.connect();
  try {
    const token = jwt.sign({ email, cpf }, process.env.JWT_KEY, {
      expiresIn: "24h",
    });
    const senhaCrypt = await bcrypt.hash(senha, 10);

    await transacao.query("BEGIN");
    const queryUsuario =
      "INSERT INTO usuarios (cpf, nome, email, senha) VALUES ($1, $2, $3, $4)";
    const queryValidacao =
      "INSERT INTO verificacao_email (email_verificado, token, data_hora_expiracao_token, usuario_cpf) values ($1,$2,NOW() + interval '1 day',$3)";
    await transacao.query(queryUsuario, [cpf, nome, email, senhaCrypt]);
    await transacao.query(queryValidacao, [email, token, cpf]);
    if (telefone) {
      const queryTelefone =
        "INSERT INTO telefones (tipo, numero, usuario_cpf) VALUES ($1, $2, $3)";
      await transacao.query(queryTelefone, [
        tipo_telefone || null,
        telefone,
        cpf,
      ]);
    }
    const url = gerarUrl(req, "/app/usuario/validacao", token);
    enviarEmail({
      to: email,
      subject: "Verifique sua conta!",
      templatePath: "src/templates/verificaEmail.html",
      body: {
        nome,
        validacaoLink: url,
      },
    }).catch((error) => {
      throw new Error("Erro ao enviar o e-mail de validação do usuário");
    });
    await transacao.query("COMMIT");
    console.log("Usuário e telefone(s) inseridos com sucesso.");
    return res.status(201).json({
      mensagem:
        "É necessário validar o cadastro, foi enviado um e-mail ao endereço informado. Por favor clique em ativar para poder acessar o sistema!",
    });
  } catch (error) {
    await transacao.query("ROLLBACK");
    console.error("Erro ao inserir usuário e telefone(s):", error);
    return res.status(500).send("Ocorreu um erro. Por favor, tente novamente.");
  } finally {
    transacao.release();
  }
};

module.exports = novoUsuario;
