const express = require("express");
const router = require("express").Router();
const connection = require("../../database/index");

router.post("/createShoppingList", async (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const ingredients = req.body.listIngredients;
  const titleList = req.body.title;

  // Insérez ici la logique pour ajouter les données dans votre base de données
  const sqlCreate = `INSERT INTO shopping (USER_ID, SHOPPING_NAME) VALUES (?, ?)`;
  const values = [userId, titleList];

  connection.query(sqlCreate, values, (err, result) => {
    if (err) throw err;

    const shoppingId = result.insertId;

    const ingredientName = [];
    const measureUnits = [];
    const measureQuantities = [];

    // Parcours des ingrédients et extraction des données
    ingredients.forEach((ingredient) => {
      ingredientName.push(ingredient.INGREDIENT_FR_NAME);
      measureUnits.push(ingredient.MEASURE_UNITY);
      measureQuantities.push(ingredient.INGREDIENT_QUANTITY);
    });

    // Vous pouvez maintenant utiliser les tableaux extraites dans votre logique métier
    console.log("INGREDIENT_NAME:", ingredientName);
    console.log("MEASURE_UNITY:", measureUnits);
    console.log("MEASURE_QUANTITY:", measureQuantities);

    const measureUnitToId = {
      Millilitres: 1,
      Centilitres: 2,
      Litres: 3,
      Grammes: 4,
      Kilogrammes: 5,
      "Cuillères à soupe": 6,
      "Cuillères à café": 7,
      Verre: 8,
      Tasse: 9,
      Pincée: 10,
      Unité: 11,
      Yaourt: 12,
    };
    function mapMeasureUnitToId(unit) {
      return measureUnitToId[unit] || null; // Renvoie null si aucune correspondance n'est trouvée
    }

    // Utilisez la fonction mapMeasureUnitToId pour mapper les valeurs
    const newMeasureUnits = measureUnits.map(mapMeasureUnitToId);
    console.log("====================================");
    console.log(newMeasureUnits);
    console.log("====================================");
    const sqlCreate2 = `INSERT INTO ingredient_list (INGREDIENT_LIST_NAME, SHOPPING_ID, MEASURE_LIST_ID, INGREDIENT_QUANTITY) VALUES (?,?,?,?)`;

    ingredients.forEach((ingredient, index) => {
      const measureUnitId = mapMeasureUnitToId(ingredient.MEASURE_UNITY);
      console.log("====================================");
      console.log(ingredient);
      console.log("====================================");
      const values2 = [
        ingredient.INGREDIENT_FR_NAME,
        shoppingId,
        measureUnitId,
        measureQuantities[index],
      ];

      connection.query(sqlCreate2, values2, (err2, result2) => {
        if (err2) {
          console.error(err2);
          // Gérez l'erreur d'insertion de l'ingrédient (vous pouvez choisir de continuer l'insertion des autres ingrédients)
        }
      });
    });

    console.log("Liste de courses ajoutée à la base de données");
    res.status(200).json({ message: "Liste de courses créée avec succès" });
  });
});

router.get("/getShoppingList/:userId", (req, res) => {
  const userId = req.params.userId;

  const sql = `SELECT * FROM shopping AS s
    JOIN ingredient_list as i ON s.SHOPPING_ID = i.SHOPPING_ID
    JOIN measure_list as m ON i.MEASURE_LIST_ID = M.MEASURE_LIST_ID
    WHERE s.USER_ID = ${userId}
    `;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    res.send(JSON.stringify(result));
  });
});

router.delete("/deleteShopping/:idShopping", async (req, res) => {
  let idShopping = req.params.idShopping;

  const sqlDeleteShopping = `DELETE FROM shopping WHERE SHOPPING_ID = ?`;
  const sqlDeleteIngredientList = `DELETE FROM ingredient_list WHERE SHOPPING_ID = ?`;

  connection.beginTransaction((err) => {
    if (err) {
      throw err;
    }

    connection.query(
      sqlDeleteIngredientList,
      [idShopping],
      (err, resultIngredientList) => {
        if (err) {
          connection.rollback(() => {
            throw err;
          });
        }
        connection.query(
          sqlDeleteShopping,
          [idShopping],
          (err, resultShopping) => {
            if (err) {
              connection.rollback(() => {
                throw err;
              });
            }
            connection.commit((err) => {
              if (err) {
                connection.rollback(() => {
                  throw err;
                });
              }

              console.log("Liste supprimée");
              res.send(JSON.stringify(true));
            });
          }
        );
      }
    );
  });
});

module.exports = router;
