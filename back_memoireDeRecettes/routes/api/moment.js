const router = require("express").Router();
const connection = require("../../database/index");

router.put("/putMoment", async (req, res) => {
  console.log(req.body);
  const id = req.body.momentId;
  const name = req.body.NOM_TYPE_DE_REPAS;
  console.log(name);
  console.log(id);
  try {
    const sql = `UPDATE type_de_repas SET NOM_TYPE_DE_REPAS = ? WHERE ID_TYPE_DE_REPAS = ?`;
    const values = [name, id];
    connection.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log("Type de repas modifié en base de données");
      res.send(JSON.stringify(true));
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteMoment:id", async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const sqlDelete = `DELETE FROM type_de_repas WHERE ID_TYPE_DE_REPAS = ?`;
  const values = id;

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    console.log("Type de repas supprimé de la base de données");
    res.send(JSON.stringify(true));
  });
});

router.post("/createMoment", async (req, res) => {
  console.log(req.body);
  const name = req.body.newMoment;
  const sqlCreate = `INSERT INTO type_de_repas (NOM_TYPE_DE_REPAS) VALUES (?)`;
  const values = [name];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;
    console.log("Type de repas ajouté à la base de données");
    res.send(JSON.stringify(true));
  });
});

module.exports = router;
