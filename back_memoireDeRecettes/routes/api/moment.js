const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putMoment", async (req, res) => {
  const id = req.body.momentId;
  const name = req.body.NOM_TYPE_DE_REPAS;
  try {
    const sql = `UPDATE type_de_repas SET NOM_TYPE_DE_REPAS = ? WHERE ID_TYPE_DE_REPAS = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteMoment:id", async (req, res) => {
  const id = req.params.id;
  const sqlDelete = `DELETE FROM type_de_repas WHERE ID_TYPE_DE_REPAS = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

router.post("/createMoment", async (req, res) => {
  const name = req.body.newMoment;
  const sqlCreate = `INSERT INTO type_de_repas (NOM_TYPE_DE_REPAS) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
