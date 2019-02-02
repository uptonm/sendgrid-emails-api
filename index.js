const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const mailClient = require("./services/Mailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/api/mailer", async (req, res) => {
  let contactInfo = {
    first: req.body.first,
    last: req.body.last,
    email: req.body.email
  };
  let toEmail = req.query.to;
  mailClient(toEmail, contactInfo);
  res.status(200).send("Mail Sent");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${process.env.PORT || 8080}`);
});
