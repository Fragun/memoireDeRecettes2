const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putCookingType", async (req, res) => {
  console.log(req.body);
  const id = req.body.cookingTypeId;
  const name = req.body.COOKING_TYPE_NAME;
  console.log(name);
  console.log(id);
  try {
    const sql = `UPDATE cooking_type SET COOKING_TYPE_NAME = ? WHERE COOKING_TYPE_ID = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log("Mode de cuisson modifié en base de données");
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteCookingType:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const sqlDelete = `DELETE FROM cooking_type WHERE COOKING_TYPE_ID = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    console.log("Mode de cuisson supprimé de la base de données");
    res.send(JSON.stringify(true));
  });
});

router.post("/createCookingType", async (req, res) => {
  console.log(req.body);
  const name = req.body.newCookingType;
  const sqlCreate = `INSERT INTO cooking_type (COOKING_TYPE_NAME) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    console.log("Mode de cuisson ajouté à la base de données");
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
