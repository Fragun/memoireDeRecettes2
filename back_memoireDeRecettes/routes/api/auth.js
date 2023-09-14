const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const { key, keyPub } = require("../../keys");
const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 15, 
  },
});
const connection = require("../../database/index");

router.put("/modifUser", upload.single('avatarUser'), async (req, res) => {
 
  const name = req.body.name;
  const pseudo = req.body.pseudo;
  const firstname = req.body.firstname;
  const userId = req.body.userId;
  const avatar = req.body.avatarUser;
   try {
    let sql;
    let values;
    
    if (avatar === null) {
      sql = `UPDATE user SET USER_NAME = ?, USER_PSEUDO = ?, USER_FIRSTNAME = ? WHERE USER_ID = ?`;
      values = [name, pseudo, firstname, userId];
    } else {
      sql = `UPDATE user SET USER_NAME = ?, USER_PSEUDO = ?, USER_FIRSTNAME = ?, USER_PHOTO = ? WHERE USER_ID = ?`;
      values = [name, pseudo, firstname, avatar, userId];
    }

    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
   }
  })

router.post("/", async (req, res) => {
  const email = req.body.email;
  const passwordEnter = req.body.password;

  const sqlVerify = `SELECT * FROM user WHERE USER_EMAIL="${email}"`;
  connection.query(sqlVerify, (err, result) => {
    try {
      if (result[0].length != 0) {
        let userPasswordDatabase = result[0].USER_PASSWORD;
        const userId = result[0].USER_ID;
        if (bcrypt.compareSync(passwordEnter, userPasswordDatabase)) {
          const token = jsonwebtoken.sign({}, key, {
            subject: userId.toString(),
            expiresIn: 3600 * 24 * 30 * 6,
            algorithm: "RS256",
          });
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
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, key);
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

router.get("/fetchUsers", async (req, res) => {
  try {
    const sqlUsers = `SELECT * FROM user ORDER BY USER_DATETIME_CREATION DESC`;
    connection.query(sqlUsers, (err, result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.json(null);
      }
    });
  } catch (error) {
    console.error(error);
    return res.json(null);
  }
});

module.exports = router;
