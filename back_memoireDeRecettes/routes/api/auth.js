const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const { key, keyPub } = require("../../keys");

const connection = require("../../database/index");

router.post("/userModify", async(req, res) => {
  const name = req.body.name;
  const pseudo = req.body.pseudo;
  const firstname = req.body.firstname;
  const birthday = req.body.birthday;
  const avatar = req.body.avatarUser;

  console.log(pseudo);
});


router.post("/", async (req, res) => {
  const email = req.body.email;
  const passwordEnter = req.body.password;

  const sqlVerify = `SELECT * FROM user WHERE USER_EMAIL="${email}"`;
  connection.query(sqlVerify, (err, result) => {
    //console.log(result[0].USER_PASSWORD);
    //console.log(result);
    try {
      if (result[0].length != 0) {
        let userPasswordDatabase = result[0].USER_PASSWORD;
        const userId = result[0].USER_ID;
        //console.log(userId);
        if (bcrypt.compareSync(passwordEnter, userPasswordDatabase)) {
          //console.log(result);

          const token = jsonwebtoken.sign({}, key, {
            subject: userId.toString(),
            expiresIn: 3600 * 24 * 30 * 6,
            algorithm: "RS256",
          });
          //console.log(token);
          res.cookie("token", token);
          res.json(result);
        } else {
          res.status(400).json("Email et/ou mot de passe incorrect");
        }
      } else {
        res.status(400).json("Email et/ou mot de passe incorrect");
      }
    } catch (error) {
      res.status(400).json("Email et/ou mot de passe incorrect");
    }
  });
});

router.get("/current", async (req, res) => {
  const { token } = req.cookies;
  //console.log(token);
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, key);
      //console.log({ decodedToken });
      const sqlVerify = `SELECT * FROM user WHERE USER_id=${decodedToken.sub}`;
      connection.query(sqlVerify, (err, result) => {
        if (result) {
          return res.json(result);
        } else {
          return res.json(null);
        }
      });
    } catch (error) {
      return res.json(null);
    }
  } else {
    return res.json(null);
  }
});

router.delete("/", (req, res) => {
  res.clearCookie("token");
  res.end();
});

module.exports = router;
