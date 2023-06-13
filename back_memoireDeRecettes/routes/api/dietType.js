const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putDietType", async (req, res) => {
  console.log(req.body);
  const id = req.body.dietTypeId;
  const name = req.body.DIET_TYPE_NAME;
  console.log(name);
  console.log(id);
  try {
    const sql = `UPDATE diet_type SET DIET_TYPE_NAME = ? WHERE DIET_TYPE_ID = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log("Type de régime modifié en base de données");
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteDietType:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const sqlDelete = `DELETE FROM diet_type WHERE DIET_TYPE_ID = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    console.log("Type de régime supprimé de la base de données");
    res.send(JSON.stringify(true));
  });
});

router.post("/createDietType", async (req, res) => {
  console.log(req.body);
  const name = req.body.newDietType;
  const sqlCreate = `INSERT INTO diet_type (DIET_TYPE_NAME) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    console.log("Type de régime ajouté à la base de données");
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
