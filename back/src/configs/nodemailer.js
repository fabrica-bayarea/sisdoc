require("dotenv").config();
const nodemailer = require("nodemailer");
const { MAIL_PASS, MAIL_SERVICE, MAIL_USER } = process.env;
const transporter = nodemailer.createTransport({
  service: MAIL_SERVICE,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
});

module.exports = transporter;
