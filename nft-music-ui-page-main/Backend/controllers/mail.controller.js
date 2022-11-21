const nodemailer = require("nodemailer");
const { emailTheme } = require("../controllers/mailoption");


exports.sendMail = async (req, res) => {
  var email = req.body.email;
  var address = req.body.address;
  var privatekey= req.body.privatekey;
  try {
    if (email == "") {
      return res.status(400).send({
        status: false,
        error: "Email required ",
      });
    }

    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "developer@espsofttech.com",
        pass: "Yd32r&DXa",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
console.log(req.body)
    let mailOptions = {
      from: "developer@espsofttech.com",
      to: `${email}`,
      subject: "Congratulations - Wallet Created",
      html: "<h3>Your Ethereum wallet details</h3><br/><h4>Wallet Address : "+address+"</h4><h4>Wallet PrivateKey : "+privatekey+"</h4>"
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(200).send({
          status: false,
          error: error,
        });
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);

        return res.status(200).send({
          status: true,
          message: "Check your email for a link to reset your password",
        });
      }
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: "user not registered due to internal error",
      error: err,
    });
  }
};
