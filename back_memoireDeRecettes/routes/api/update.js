const connection = require("../../database/index");
const jsonwebtoken = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const saltRounds = 10;
const { key, keyPub } = require("../../keys"); 

router.post("/", (req, res) => {
  const email = req.body.user_mail;
  console.log(email);
  try {
    const sql = `SELECT * FROM user WHERE USER_EMAIL= "${email}"`;
    connection.query(sql, async (err, result) => {
      if (err) throw err;
      if (result[0]) {
        const token = jsonwebtoken.sign(
          { email: result[0].user_mail, id: result[0].user_id },
          key,
          {
            expiresIn: "5m",
            algorithm: "RS256",
          }
        );
        const link = `http://localhost:8000/api/update/${result[0].user_id}/${token}`;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "memoirederecettes@yahoo.com",
                pass: "jecree1site.",
            },
        });
        console.log("email :" + email);
        console.log("link :" + link);
        const mailOptions = {
            from: "memoirederecettes@yahoo.com",
            to: email,
            subject: "Sending Email using Node.js",
            text: link,
        };
        
        let info = transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        console.log("Message sent: %s", info);
        res.send(JSON.stringify(true));
      } else {
        res.status(400).send(JSON.stringify("Utilisateur Inconnu"));
      }
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  // console.log("id : " + id + " token : " + token);
  try {
    const verify = jsonwebtoken.verify(token, keyPub);
    res.render("index", { email: verify.email, status: false, same: false });
  } catch (error) {
    res.send("Not Verified");
  }
});

router.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log(password);
  console.log(req.body);
  const sql = `SELECT * FROM user WHERE user_id = "${id}"`;
  connection.query(sql, async (err, result) => {
    if (err) throw err;
    if (result[0]) {
      try {
        const Userpassword = await bcrypt.hash(password, saltRounds);
        const verify = jsonwebtoken.verify(token, keyPub);
        const same = bcrypt.compareSync(password, result[0].user_password);
        if (same) {
          res.render("index", {
            email: verify.email,
            status: false,
            same: true,
          });
        } else {
          const sql = `UPDATE user SET user_password = "${Userpassword}" WHERE user_id = "${id}"`;
          connection.query(sql, (err, result) => {
            if (err) throw err;
            res.render("index", {
              email: verify.email,
              status: true,
              same: false,
            });
          });
        }
      } catch (error) {
        console.log(error);
        res.send(JSON.stringify(false));
      }
    } else {
      res.send(JSON.stringify(false));
    }
  });
});

module.exports = router;
