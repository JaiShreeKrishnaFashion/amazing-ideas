const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// view engine setup
app.engine(
  "handlebars",
  exphbs({ extname: "hbs", defaultLayout: false, layoutsDir: "views/ " })
);
app.set("view engine", "handlebars");

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("contact");
});

var email;

var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",

  auth: {
    user: "Your mail",
    pass: "Your pass",
  },
});

app.post("/send", function (req, res) {
  email = req.body.email;

  // send mail with defined transport object
  var mailOptions = {
    to: req.body.email,
    subject: "Otp for registration is: ",
    html:
      "<h3>OTP for account verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      otp +
      "</h1>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("otp");
  });
});

app.post("/verify", function (req, res) {
  if (req.body.otp == otp) {
    res.send("You has been successfully registered");
  } else {
    res.render("otp", { msg: "otp is incorrect" });
  }
});

app.post("/resend", function (req, res) {
  var mailOptions = {
    to: email,
    subject: "Otp for registration is: ",
    html:
      "<h3>OTP for account verification is </h3>" +
      "<h1 style='font-weight:bold;'>" +
      otp +
      "</h1>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("otp", { msg: "otp has been sent" });
  });
});
<<<<<<< HEAD

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`app is live at ${PORT}`);
=======
app.get("/movieProducts", function (req, res) {
  fs.readFile(
    __dirname + "/" + "responseData/movieProduct.json",
    "utf8",
    function (err, data) {
      //console.log(data);
      res.end(data);
    }
  );
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  //console.log("APU listening port ", host, port);
>>>>>>> 55a423e200a5f0035c63d7ed2a09ce7e531dd860
});
