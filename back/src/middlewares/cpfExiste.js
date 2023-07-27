const pool = require("../configs/pgConexao");

const cpfExiste = async (req, res, next) => {
  try {
    const { cpf } = req.body;
    const query = "SELECT * FROM usuarios WHERE cpf = $1 LIMIT 1";
    const consulta = await pool.query(query, [cpf]);
    if (consulta.rowCount) {
      return res
        .status(409)
        .json({ mensagem: "Já existe um usuário com esse cpf cadastrado!" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = cpfExiste;
