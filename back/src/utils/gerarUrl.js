require("dotenv").config();
console.log(process.env.NODE_ENV);

const gerarUrl = (req, path, token) => {
  const host = req.headers.host;
  const protocolo = "http";
  const url = `${protocolo}://${host}${path}?token=${token}`;
  return url;
};

module.exports = gerarUrl;
