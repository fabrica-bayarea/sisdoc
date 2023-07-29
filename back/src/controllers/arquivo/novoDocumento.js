const uploadArquivo = require("../../utils/uploadArquivo");
const gerarNomeArquivo = require("../../utils/gerarNomeArquivo");
const pool = require("../../configs/pgConexao");

const novoDocumento = async (req, res) => {
  const { buffer, mimetype } = req.file;
  const { nome, descricao } = req.body;
  const { cpf } = req.usuario;
  const nomeInterno = gerarNomeArquivo(cpf);
  try {
    const upload = await uploadArquivo(nomeInterno, buffer, mimetype);
    const query =
      "INSERT INTO documentos (nome_documento, descricao, nome_interno, url, path, usuario_cpf) values ($1,$2,$3,$4,$5,$6) returning *";
    const insert = await pool.query(query, [
      nome,
      descricao,
      nomeInterno,
      upload.url,
      upload.path,
      cpf,
    ]);
    return res.status(201).json(insert.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor!" });
  }
};

module.exports = novoDocumento;
