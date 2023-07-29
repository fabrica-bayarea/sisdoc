const jwt = require("jsonwebtoken");

const validarLogin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const validacao = jwt.verify(token, process.env.JWT_KEY);
    req.usuario = {
      cpf: validacao.cpf,
      email: validacao.email,
    };
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ mensagem: "Sessão expirada, efetue um novo login!" });
    }
    return res.status(500).json({ mensagem: "Erro interno do servidor!" });
  }
};

module.exports = validarLogin;
