const router = require("express").Router();
const connection = require("../../database/index");

router.post("/likedRecipe", async (req, res) => {
  const idRecipe = req.body[0];
  const idUser = req.body[1];
  const sql = `INSERT into love (USER_ID, RECIPE_ID) VALUES (?, ?)`;
  const values = [idUser, idRecipe];
  connection.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

router.delete("/deleteLikedRecipe/:idRecipe/:idUser", async (req, res) => {
  let idRecipe = req.params.idRecipe;
  let idUser = req.params.idUser;
  const sqlDelete = `DELETE FROM love WHERE USER_ID = ? AND RECIPE_ID = ?`;
  const values = [idUser, idRecipe];
  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

router.get("/likedRecipe/:idUser", async (req, res) => {
  const { idUser } = req.params;
  let sql = `SELECT * FROM love as l 
    WHERE l.USER_ID = ${idUser}`; 
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

module.exports = router;
