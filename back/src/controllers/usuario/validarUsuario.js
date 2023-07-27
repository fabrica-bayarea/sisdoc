require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("../../configs/pgConexao");
const JWT_KEY = process.env.JWT_KEY;

const validarUsuario = async (req, res) => {
  const { token } = req.query;
  try {
    const { email, cpf } = jwt.verify(token, JWT_KEY);
    const query =
      "SELECT u.ativacao, v.token FROM usuarios as u JOIN verificacao_email as v on u.cpf = v.usuario_cpf WHERE u.cpf = $1 AND u.email = $2 AND v.token = $3 LIMIT 1";
    const consulta = await pool.query(query, [cpf, email, token]);
    if (!consulta.rowCount) {
      return res.status(401).json({ mensagem: "Token inválido ou expirado!" });
    }
    if (consulta.rows[0].ativacao) {
      return res.status(401).json({ mensagem: "O usuário já foi verificado!" });
    }
    await pool.query("UPDATE usuarios SET ativacao = true");
    await pool.query(
      "UPDATE verificacao_email SET data_hora_verificacao = NOW()"
    );
    return res.status(200).json({
      mensagem:
        "Bem vindo ao DocMente! Seu cadastro foi ativado com sucesso você e já pode aproveitar a plataforma!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor!" });
  }
};

module.exports = validarUsuario;
