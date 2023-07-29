const pool = require("../../configs/pgConexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const query = "SELECT nome,cpf, senha FROM usuarios WHERE email=$1";
    const usuario = (await pool.query(query, [email])).rows[0];
    const verificaSenha = await bcrypt.compare(senha, usuario.senha);
    if (!verificaSenha) {
      return res.status(401).json({
        mensagem: "Senha ou e-mail incorreto, por favor tente novamente",
      });
    }
    const token = jwt.sign({ email, cpf: usuario.cpf }, process.env.JWT_KEY, {
      expiresIn: "2h",
    });
    return res.status(200).json({
      cpf: usuario.cpf,
      nome: usuario.nome,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor!" });
  }
};

module.exports = login;
