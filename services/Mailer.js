require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_KEY);

// const contactInfo = {
//   first: "Mike",
//   last: "Upton",
//   email: "uptonm@wit.edu"
// };

module.exports = (to, contactInfo) => {
  const msg = {
    to: to,
    from: "uptonm@wit.edu",
    subject: "A new user has requested to contact you",
    text: `Here is his contact information \n
            First Name: ${contactInfo.first}\n 
            Last Name: ${contactInfo.last}\n 
            Email: ${contactInfo.email}\n`,
    html: `<div style="text-align:center;">
              <p>Here is his contact information<br>
              <strong>First Name: </strong>${contactInfo.first}<br>
              <strong>Last Name: </strong>${contactInfo.last}<br> 
              <strong>Email: </strong>${contactInfo.email}</p>
            </div>`
  };
  sgMail.send(msg);
};
