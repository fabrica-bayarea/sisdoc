function gerarNomeArquivo(cpf) {
  const numeroRandom = gerarNumeroRandom();
  const now = new Date();
  const ano = now.getFullYear();
  const mes = String(now.getMonth() + 1).padStart(2, "0");
  const dia = String(now.getDate()).padStart(2, "0");
  const horas = String(now.getHours()).padStart(2, "0");
  const minutos = String(now.getMinutes()).padStart(2, "0");
  const segundos = String(now.getSeconds()).padStart(2, "0");
  const cpfPrefix = cpf.slice(0, 3);
  const nomeArquivo = `${cpfPrefix}_${ano}${mes}${dia}_${horas}${minutos}${segundos}_${numeroRandom}`;
  return nomeArquivo;
}

function gerarNumeroRandom() {
  return Math.floor(Math.random() * 1000000);
}

module.exports = gerarNomeArquivo;
