const bcrypt = require("bcrypt");
const router = require("express").Router();

const connection = require("../../database/index");


router.post("/", async (req, res) => {
    //console.log(req.body);
    const { email, pseudo, firstname, name, condition, createdOn } = req.body;
    console.log(req.body);
    
    const pass = req.body.password ;
    const user = {email:email, pseudo:pseudo, firstname:firstname, name:name,condition:condition, createdOn:createdOn, 
      pass:await bcrypt.hash(pass, 8)}

    console.log(user);
     
    const sqlVerify = `SELECT * FROM user WHERE USER_EMAIL="${email}"`;
  
    connection.query(sqlVerify, (err, result) => { 
      if (err) throw err;
      if (result.length === 0) {
        console.log("utilisateur non existant");
        const sql = `INSERT INTO user (USER_NAME, USER_PSEUDO, USER_FIRSTNAME, USER_EMAIL, USER_PASSWORD, USER_UTILISATION_CONDITION, USER_DATETIME_CREATION) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const values = [name, pseudo, firstname, email, user.pass, condition, createdOn];
  
        connection.query(sql, values, (err, result) => {
          if (err) throw err;
          console.log("Utilisateur ajouté à la base de données");
          res.send(JSON.stringify(true));
        });
      } else {
        console.log("Cette adresse mail est déjà existante dans notre base de données");
        res.send(JSON.stringify(false));
      }
    }); 
  });   

// app.post("/deleteUser", (req, res) => {
//     console.log(req.body);
//     const id = req.body.id;

//     const sqlDelete = `DELETE FROM articles WHERE idArticles= ?`;
//     const values = id;
//     connection.query(sqlDelete, values, (err, result) => {
//         if (err) throw err;
//         console.log("Article supprimé de la base de données");
//         res.send(JSON.stringify(true));
//     });
// });

  module.exports = router;