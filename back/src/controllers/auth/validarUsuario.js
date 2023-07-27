const validarUsuario = async (req, res) => {
  const { token } = req.query;
  try {
    console.log(token);
  } catch (error) {}
};

module.exports = validarUsuario;
