const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const { key, keyPub } = require("../../keys");

const connection = require("../../database/index");


router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const sqlVerify = `SELECT * FROM user WHERE USER_EMAIL="${email}"`;
console.log(sqlVerify);

  connection.query(sqlVerify, (err, result) => {
    console.log(result[0].USER_PASSWORD);
    

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



router.get("/current", async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, key);
    console.log({decodedToken});
      const currentUser = await UserModel.findById(decodedToken.sub)
        .select("-password -__v")
        .exec();
      if (currentUser) {
        return res.json(currentUser);
      } else {
        return res.json(null);
      }
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
})

module.exports = router;