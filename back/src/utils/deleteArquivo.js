const s3 = require("../configs/awsSdk");

const excluirArquivo = async (path) => {
  await s3
    .deleteObject({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key: path,
    })
    .promise();
};
