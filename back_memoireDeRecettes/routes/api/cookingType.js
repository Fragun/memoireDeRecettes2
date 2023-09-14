const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putCookingType", async (req, res) => {
  const id = req.body.cookingTypeId;
  const name = req.body.COOKING_TYPE_NAME;
  try {
    const sql = `UPDATE cooking_type SET COOKING_TYPE_NAME = ? WHERE COOKING_TYPE_ID = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteCookingType:id", async (req, res) => {
  const id = req.params.id;
  const sqlDelete = `DELETE FROM cooking_type WHERE COOKING_TYPE_ID = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

router.post("/createCookingType", async (req, res) => {
  const name = req.body.newCookingType;
  const sqlCreate = `INSERT INTO cooking_type (COOKING_TYPE_NAME) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
