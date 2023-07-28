const s3 = require("../configs/awsSdk");

const uploadArquivo = async (path, buffer, mimetype) => {
  const arquivo = await s3
    .upload({
      Bucket: process.env.BUCKET_KEYNAME,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return {
    url: arquivo.Location,
    path: arquivo.Key,
  };
};

module.exports = uploadArquivo;
