const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const { key, keyPub } = require("../../keys");


router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const sqlVerify = `SELECT * FROM user WHERE USER_EMAIL="${email}" AND USER_PASSWORD="${password}"`;

  connection.query(sqlVerify, (err, result) => {
    console.log(result);
    if (err) throw err;
    if (result.length === 0) {
      console.log("utilisateur non existant");
      result[0] = {};
      result[0].condition = false;
      res.send(JSON.stringify(result[0]));
    } else {
      console.log("utilisateur existant");
      const message = "utilisateur existant";
      result[0].message = message;
      result[0].condition = true;
      res.send(JSON.stringify(result[0]));
    }
  });
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    //const user = await UserModel.findOne({ email }).exec();
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jsonwebtoken.sign({}, key, {
          subject: user._id.toString(),
          expiresIn: 3600 * 24 * 30 * 6,
          algorithm: "RS256",
          //sameSite: 'none',
          //sameSite: 'Lax',
        });
        res.cookie("token", token);
        res.json(user);
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


router.get("/current", async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, keyPub, {
        algorithms: "RS256",
    });
      //const currentUser = await UserModel.findById(decodedToken.sub)
       // .select("-password -__v")
      //  .exec();
      if (currentUser) {
        return res.json(currentUser);
      } else {
        return res.json(1);
      }
    } catch (error) {
      return res.json(2);
    }
  } else {
    return res.json(3);
  }
});

module.exports = router;
