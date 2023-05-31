const express = require("express");
const router = require("express").Router();
const connection = require("../../database/index");

router.delete("/deleteRecipe/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const values = [id];
  const sqlDeleteStage = `DELETE FROM stage WHERE RECIPE_ID = ?`;
  const sqlDelete = `DELETE FROM recipe WHERE RECIPE_ID = ?`;
  const sqlDeleteUstensil = `DELETE FROM used WHERE RECIPE_ID = ?`;
  const sqlDeleteIngredient = `DELETE FROM contain WHERE RECIPE_ID = ?`;
  const sqlDeleteNotice = `DELETE FROM notice WHERE RECIPE_ID = ?`;
  const sqlDeletePhoto = `DELETE FROM photo WHERE RECIPE_ID = ?`;
  connection.query(sqlDeletePhoto, values, (err, result) => {
    connection.query(sqlDeleteNotice, values, (err, result) => {
      connection.query(sqlDeleteIngredient, values, (err, result) => {
        if (err) throw err;
        connection.query(sqlDeleteUstensil, values, (err, result) => {
          if (err) throw err;
          connection.query(sqlDeleteStage, values, (err, result) => {
            if (err) throw err;
            connection.query(sqlDelete, values, (err, result) => {
              if (err) throw err;
              console.log("Recette supprimée de la base de données");
              res.send(JSON.stringify(true));
            });
          });
        });
      });
    });
  });
});


router.post("/modifyRecipe", (req, res) => {
console.log(req.body);
});

module.exports = router;
