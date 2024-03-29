const s3 = require("../configs/awsSdk");

const uploadArquivo = async (path, buffer, mimetype) => {
  const arquivo = await s3
    .upload({
      Bucket: process.env.BUCKET_ENDPOINT,
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
