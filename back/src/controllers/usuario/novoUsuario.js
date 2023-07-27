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
    const url = gerarUrl(req, "/auth/validarusuario", token);
    console.log(url);
    enviarEmail({
      to: email,
      subject: "Verifique sua conta!",
      templatePath: "src/templates/verificaEmail.html",
      body: {
        nome,
        validacaoLink: url,
      },
    });

    await transacao.query("COMMIT");

    console.log("Usuário e telefone(s) inseridos com sucesso.");
    return res.sendStatus(204);
  } catch (error) {
    await transacao.query("ROLLBACK");
    console.error("Erro ao inserir usuário e telefone(s):", error);
    return res.status(500).send("Ocorreu um erro. Por favor, tente novamente.");
  } finally {
    transacao.release();
  }
};

module.exports = novoUsuario;
