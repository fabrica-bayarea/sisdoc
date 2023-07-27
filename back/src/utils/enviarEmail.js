require("dotenv").config();
const transporter = require("../configs/nodemailer");
const fs = require("fs/promises");
const handlebars = require("handlebars");

const enviarEmail = async (params) => {
  try {
    const { to, subject, templatePath, body } = params;
    const htmlString = (await fs.readFile(templatePath)).toString();
    const compile = handlebars.compile(htmlString);
    const compiledHtml = compile(body);
    console.log(process.env.MAIL_USER);
    const mailOptions = {
      from: `DocMente <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: compiledHtml,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = enviarEmail;
