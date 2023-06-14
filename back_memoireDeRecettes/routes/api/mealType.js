const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putMealType", async (req, res) => {
  console.log(req.body);
  const id = req.body.mealTypeId;
  const name = req.body.MEAL_TYPE_NAME;
  console.log(name);
  console.log(id);
  try {
    const sql = `UPDATE meal_type SET MEAL_TYPE_NAME = ? WHERE MEAL_TYPE_ID = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log("Origine alimentaire modifiée en base de données");
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteMealType:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const sqlDelete = `DELETE FROM meal_type WHERE MEAL_TYPE_ID = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    console.log("Origine alimentaire supprimée de la base de données");
    res.send(JSON.stringify(true));
  });
});

router.post("/createMealType", async (req, res) => {
  console.log(req.body);
  const name = req.body.newMealType;
  const sqlCreate = `INSERT INTO meal_type (MEAL_TYPE_NAME) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    console.log("Origine alimentaire ajoutée à la base de données");
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
