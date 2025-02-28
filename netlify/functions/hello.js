exports.handler = async function (event, context) {
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_USERNAME,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  console.log(event, context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      envvar: process.env.EMAIL_PASSWORD,
    }),
  };
};
