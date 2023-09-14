const express = require("express");
const router = require("express").Router();
const connection = require("../../database/index");

router.get("/runReport", async (req, res) => {
  // const { GoogleAuth } = require("google-auth-library");
  // const { BetaAnalyticsDataClient } = require("@google-analytics/data");
  // // Créez une nouvelle instance de GoogleAuth
  // const auth = new GoogleAuth({
  //   keyFilename: "./memoiresderecettes-feb3cf3e35bd.json", // Remplacez par le chemin vers votre fichier de certificat de compte de service
  //   scopes: ["https://www.googleapis.com/auth/analytics"], // Adaptez la portée en fonction de vos besoins
  // });
  // // Obtenez le client authentifié
  // const authClient = await auth.getClient();
  // //console.log(authClient);
  // const analyticsDataClient = new BetaAnalyticsDataClient({ auth: authClient });
  // console.log({ analyticsDataClient });
  // const propertyId = "379094571";
  // // console.log(propertyId);
  // try {
  //   const response = await analyticsDataClient.runReport({
  //     property: `properties/${propertyId}`,
  //     dateRanges: [
  //       {
  //         startDate: "2023-06-03",
  //         endDate: "today",
  //       },
  //     ],
  //     dimensions: [
  //       {
  //         name: "city",
  //       },
  //     ],
  //     metrics: [
  //       {
  //         name: "activeUsers",
  //       },
  //     ],
  //   });
  //   console.log("Résultat du rapport :");
  //   response.rows.forEach((row) => {
  //     console.log(row.dimensionValues[0], row.metricValues[0]);
  //   });
  //   res.send(JSON.stringify(response.rows));
  // } catch (error) {
  //   console.error("Error Api google analytics");
  //   res.sendStatus(500);
  // }
});

router.delete("/deleteRecipe/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const values = [id];
  const sqlDeleteLove = `DELETE FROM love WHERE RECIPE_ID = ?`;
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
            connection.query(sqlDeleteLove, values, (err, result) => {
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
});

router.post("/modifyRecipe", (req, res) => {
  const modifiedValues = req.body;
  console.log(modifiedValues);

  // Parcourir les valeurs modifiées et mettre à jour la base de données
  Object.entries(modifiedValues).forEach(([recipeId, fields]) => {
    // recipeId est l'ID de la recette et fields est un objet contenant les champs modifiés

    // Accéder aux valeurs spécifiques
    const mealType = fields.RECIPE_MEAL_TYPE;
    const recipePrice = fields.RECIPE_PRICE;
    const difficultyRecipe = fields.RECIPE_DIFFICULTY;
    const recipeTitle = fields.RECIPE_TITLE;
    const recipeDescription = fields.RECIPE_DESCRIPTION;
    const cookingTime = fields.COOKING_TIME;
    const recipeMoment = fields.RECIPE_MOMENT;
    const prepTime = fields.PREP_TIME;
    const recipeDietType = fields.RECIPE_DIET_TYPE;
    const recipeSeason = fields.RECIPE_SEASON;
    const recipeCookingPrincipal = fields.RECIPE_COOKING_PRINCIPAL;

    console.log(`Recipe ID: ${recipeId}`);
    console.log(`Meal Type: ${mealType}`);
    console.log(recipePrice);
    console.log(difficultyRecipe);
    console.log(recipeTitle);
    console.log(recipeDescription);
    console.log(cookingTime);
    console.log(recipeMoment);
    console.log(prepTime);
    console.log(recipeDietType);
    console.log(recipeSeason);
    console.log(recipeCookingPrincipal);

    try {
      const sqlVerify = `SELECT * FROM recipe WHERE RECIPE_ID = '${recipeId}'`;
      connection.query(sqlVerify, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          const sql = `INSERT INTO recipe (RECIPE_TITLE, RECIPE_DESCRIPTION, RECIPE_DIFFICULTY, RECIPE_PRICE, PREP_TIME, COOKING_TIME,  ID_TYPE_DE_REPAS, MEAL_TYPE_ID, DIET_TYPE_ID, SEASON_ID, COOKING_TYPE_ID)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          WHERE RECIPE_ID = '${recipeId}'`;
        } else {
          console.log(
            "Cette recette est inexistante dans notre base de données"
          );
          res.send(JSON.stringify(false));
        }

        console.log("Recette changée en base de données");
        res.send(JSON.stringify(true));
      });
    } catch (error) {
      console.error(error);
    }
  });

  res.send(JSON.stringify(true));
});

module.exports = router;
