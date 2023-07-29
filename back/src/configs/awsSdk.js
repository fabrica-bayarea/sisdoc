require("dotenv").config();
const aws = require("aws-sdk");
const { BUCKET_KEYID, BUCKET_APPKEY, BUCKET_ENDPOINT } = process.env;

const s3 = new aws.S3({
  endpoint: new aws.Endpoint(BUCKET_ENDPOINT),
  credentials: {
    accessKeyId: BUCKET_KEYID,
    secretAccessKey: BUCKET_APPKEY,
  },
});

module.exports = s3;
