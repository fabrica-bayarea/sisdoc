const s3 = require("../configs/awsSdk");

const excluirArquivo = async (path) => {
  await s3
    .deleteObject({
      Bucket: process.env.BUCKET_KEYNAME,
      Key: path,
    })
    .promise();
};
