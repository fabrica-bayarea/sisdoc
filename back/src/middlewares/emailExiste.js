const pool = require("../configs/pgConexao");

const emailExiste = (vlrEsperado) => async (req, res, next) => {
  const { email } = req.body;
  try {
    const query = "SELECT * FROM usuarios WHERE email = $1 LIMIT 1";
    const consulta = await pool.query(query, [email]);

    if (!!consulta.rowCount === vlrEsperado) {
      req.usuario = consulta.rows[0];
      next();
    } else {
      if (!consulta.rowCount) {
        return res.status(409).json({
          mensagem:
            "Não é possível prosseguir, o e-mail informado já existe em nossa base de dados!",
        });
      }
      if (!consulta.rowCount) {
        return res.status(401).json({
          mensagem:
            "O usuário informado não foi encontrado, verifique os dados e tente novamente!",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  emailExiste,
};
