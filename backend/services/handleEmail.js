const nodemailer = require("nodemailer");

exports.sendEmail = async (email, subject, message) => {
  var mailTransporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "wardlinkedin96@gmail.com",
      pass: "apzzqmlrhrhexylv",
    },
  });
  let mailDetails = {
    from: "wardlinkedin96@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };
  return await mailTransporter.sendMail(mailDetails);
};
