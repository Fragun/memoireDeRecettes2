const express = require("express");
const router = require("express").Router();

const connection = require("../../database/index");


router.post("/addNotice/:id/:idUser", (req, res) => {

  const astuce = req.body.astuce;
  const idRecipe = req.params.id;
  const idUser = req.params.idUser;
  const score = req.body.score;
  const notice = req.body.notice;

  const sqlInsert = `INSERT INTO notice
    ( NOTICE_TRICK_RECIPE, RECIPE_ID, USER_ID, NOTICE_STAR_NUMBER, NOTICE_RECIPE ) VALUES ( ?, ?, ?, ?, ?)`;
  const values = [ astuce, idRecipe, idUser, score, notice ];

  connection.query(sqlInsert, values, (err, result) => {
    if (err) throw err;
  });
});

router.post("/addRecipe", (req, res) => {
  console.log(req.body);

  const title = req.body.titleRecipe;
  const comment = req.body.commentRecipe;
  const price = req.body.priceEstimation;
  const difficulty = req.body.difficultyEstimation;
  const recipeDate = req.body.recipeCreationDate;
  const recipeNumberplate = req.body.coverNumberRecipe;
  const origin = req.body.origin;
  const prepaTime = req.body.prepaTime;
  const prepaTime2 = req.body.prepaTime2;
  const prepa = prepaTime + "h" + prepaTime2 + "min";
  const cookTime = req.body.cookTime;
  const cookTime2 = req.body.cookTime2;
  const cook = cookTime + " h" + cookTime2 + " min";
  const season = req.body.season;
  const cookType = req.body.cookType;
  const dietType = req.body.dietType;
  const mealType = req.body.mealType;
  const ustensils = req.body.ustensil;
  const ingredients = req.body.ingredient;
  const recipeExplication = req.body.descriptions;
  const idUserConnected = req.body.idUserConnected;
  const nameImage = req.body.nameImage;
  console.log(nameImage);
  console.log(idUserConnected);
  
  //const stageNum = req.body.numStage;
  //console.log(stageNum);
  console.log(recipeExplication);

  const sqlInsert = `INSERT INTO recipe
  (RECIPE_TITLE, RECIPE_DESCRIPTION, RECIPE_PRICE, RECIPE_DIFFICULTY, RECIPE_PUBLICATION_DATE, RECIPE_NUMBER_PLATE, MEAL_TYPE_ID, PREP_TIME, COOKING_TIME, SEASON_ID,	COOKING_TYPE_ID, DIET_TYPE_ID, ID_TYPE_DE_REPAS, USER_ID) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    title,
    comment,
    price,
    difficulty,
    recipeDate,
    recipeNumberplate,
    origin,
    prepa,
    cook,
    season,
    cookType,
    dietType,
    mealType,
    idUserConnected,
  ];

  connection.query(sqlInsert, values, (err, result) => {
    if (err) throw err;

    console.log("Recette ajoutée à la base de donnees");
    let resultBack = req.body;
    resultBack.id = result.insertId;

    Promise.all(
      ustensils.map((ustensil) => {
        const sqlVerifyId = `SELECT USTENSIL_ID FROM ustensil WHERE USTENSIL_ICON = '${ustensil}'`;
        return new Promise((resolve, reject) => {
          connection.query(sqlVerifyId, (err, rows, fields) => {
            if (err) {
              reject(err);
            } else {
              const ustensilId = rows[0].USTENSIL_ID;
              const sqlInsertUstensil = `INSERT INTO used (RECIPE_ID, USTENSIL_ID) VALUES (?, ?)`;
              const value = [result.insertId, ustensilId];
              connection.query(sqlInsertUstensil, value, (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  console.log("Ustensile ajouté à la recette");
                  resolve(result);
                }
              });
            }
          });
        });
      })
    )

    Promise.all(
      ingredients.map((ingredient) => {
        const sqlVerifyId = `SELECT INGREDIENT_ID FROM ingredient WHERE INGREDIENT_ICON = '${ingredient.id}'`;
        const quantitie = ingredient.quantities;
        const measure = ingredient.measure;
        return new Promise((resolve, reject) => {
          connection.query(sqlVerifyId, (err, rows, fields) => {
            if (err) {
              reject(err);
            } else {
              console.log(measure);
              console.log(quantitie);
              const ingredientId = rows[0].INGREDIENT_ID;
              const sqlInsertIngredient = `INSERT INTO contain (RECIPE_ID, INGREDIENT_ID, INGREDIENT_QUANTITY, MEASURE_UNITY) VALUES (?, ?, ?, ?)`;
              const value = [result.insertId, ingredientId, quantitie, measure];
              connection.query(sqlInsertIngredient, value, (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  console.log("Ingredient ajouté dans contain");
                  resolve(result);
                }
              });
            }
          });
        });
      })
    )
      .then(() => {
        res.send(JSON.stringify(true));
      })
      .catch((err) => {
        throw err;
      });

    
//Boucle pour parcourir les valeurs de recipeExplication
for(let i = 0; i < recipeExplication.length; i++) {
  const sqlInsertExplication = `INSERT INTO stage (STAGE_RECIPE_EXPLICATION, RECIPE_ID, STAGE_NUM) VALUES (?, ?, ?)`;
  const values = [
    recipeExplication[i],
    result.insertId, //récupération de l'ID de la recette précédemment insérée
    i+1
  ];
  connection.query(sqlInsertExplication, values, (err, result) => {
    if (err) throw err;
    console.log("Explication ajoutée à la base de donnees");
  });
}
try {
  const sql = `INSERT INTO photo (PHOTO_NAME, RECIPE_ID) VALUES ('${nameImage}', ${result.insertId}) `;
  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log("image ajouté");
  });
} catch (error) {
  console.error(error);
  res.send(false);
}
  });
});

router.post('/addImage', async (req, res) => {
  console.log(req.body); 
  // récupération de l'image envoyé dans le body
  const image = req.body.value;
  // insertion en base de données
  try {
    const sql = `INSERT INTO photo (PHOTO_NAME) VALUE ("${image}") `;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(true);
    });
  } catch (error) {
    console.error(error);
    res.send(false);
  }
})


{
  /*****************************************récup type repas, origin*******************************************************/
}
router.get("/getMealType", (req, res) => {
  const sql = `SELECT * FROM meal_type`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    //console.log("Récupération des origines du plat");
    res.send(JSON.stringify(result));
  });
});

{
  /*****************************************récup saison*******************************************************/
}
router.get("/getSeason", (req, res) => {
  const sql = `SELECT * FROM season`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

{
  /*****************************************récup type de cuisson*******************************************************/
}
router.get("/getCookType", (req, res) => {
  const sql = `SELECT * FROM cooking_type`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    //console.log("Récupération type de cuisson");
    res.send(JSON.stringify(result));
  });
});

{
  /*****************************************récup type de régime*******************************************************/
}
router.get("/getDietType", (req, res) => {
  const sql = `SELECT * FROM diet_type ORDER BY DIET_TYPE_NAME DESC`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    //console.log("Récupération type de régime");
    res.send(JSON.stringify(result));
  });
});

router.get("/getMealMoment", (req, res) => {
  const sql = `SELECT * FROM type_de_repas`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getUstensils", (req, res) => {
  const sqlUstensil = `SELECT * FROM ustensil`;
  connection.query(sqlUstensil, (err, result) => {
    if (err) throw err;
    //console.log("Récupération ustensil");
    res.send(JSON.stringify(result));
  });
});

router.get("/getIngredient", (req, res) => {
  const sqlIngredient = `SELECT * FROM ingredient`;
  connection.query(sqlIngredient, (err, result) => {
    if (err) throw err;
    //console.log("Récupération ingredient");
    res.send(JSON.stringify(result));
  });
});


router.get("/getRecipes", (req, res) => {
  const limit = req.query.limit;
  //console.log(limit);
  let sql;
  if (limit) {
    sql = `SELECT * FROM recipe as r 
       INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
       JOIN user ON r.USER_Id = user.USER_ID
       JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
       JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
       JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
       LIMIT ${limit}`;
  } else {
    sql = `SELECT * FROM recipe as r 
        INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
        JOIN user ON r.USER_Id = user.USER_ID
        JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
        JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
        JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
        `;
  }

  connection.query(sql, (err, result) => {
    if (err) throw err;
    //console.log("Récupération des recettes avec images");
    res.send(JSON.stringify(result));
  });
});

router.get("/getDaysRecipe/:currentSeason", (req, res) => {
  const currentSeason = req.params.currentSeason;
  //console.log(currentSeason);
  let sql = `SELECT * FROM recipe as r 
                 INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
                 JOIN user ON r.USER_Id = user.USER_ID
                 JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
                 JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
                 JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
                 WHERE SEASON_ID = ${currentSeason}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Récupération des recettes avec images");
    res.send(JSON.stringify(result));
  });
});

router.get("/getRecipeClicked/:id", (req, res) => {
  const idRecipe = req.params.id;
  let sql = `SELECT * FROM recipe as r 
                 JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
                 JOIN user ON r.USER_Id = user.USER_ID
                 JOIN season ON r.SEASON_ID = season.SEASON_ID
                 JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
                 JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
                 JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
                 JOIN cooking_type ON r.COOKING_TYPE_ID = cooking_type.COOKING_TYPE_ID               
                 WHERE r.RECIPE_ID = ${idRecipe}`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("Récupération de la recette pour la page recette");
    res.send(JSON.stringify(result));
  });
});

router.get("/getUstensilsByIdRecipe/:id", (req, res) => {
  const idRecipe = req.params.id;
  console.log(idRecipe);
  const sqlUstensil = `SELECT * FROM used as u 
                        LEFT JOIN ustensil ON u.USTENSIL_ID = ustensil.USTENSIL_ID
                        WHERE u.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlUstensil, (err, result) => {
    if (err) throw err;
    console.log("Récupération ustensil");
    res.send(JSON.stringify(result));
  });
});


router.get("/getIngredientByIdRecipe/:id", (req, res) => {
  const idRecipe = req.params.id;
  console.log(idRecipe);
  const sqlIngredient = `SELECT * FROM contain as c
                        LEFT JOIN ingredient ON c.INGREDIENT_ID = ingredient.INGREDIENT_ID
                        WHERE c.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlUstensil, (err, result) => {
    if (err) throw err;
    console.log("Récupération ingredient");
    res.send(JSON.stringify(result));
  });
});

router.get("/getNotice/:id", (req, res) => {
  const idRecipe = req.params.id;
  console.log(idRecipe);
  const sqlNotice = `SELECT * FROM notice 
                      JOIN user ON notice.USER_Id = user.USER_ID
                        WHERE notice.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlNotice, (err, result) => {
    if (err) throw err;
    console.log("Récupération notice");
    res.send(JSON.stringify(result));
  });
});

router.get("/getStage/:id", (req, res) => {
  const idRecipe = req.params.id;
  console.log(idRecipe);
  const sqlNotice = `SELECT * FROM stage
                        WHERE stage.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlNotice, (err, result) => {
    if (err) throw err;
    console.log("Récupération stage");
    res.send(JSON.stringify(result));
  });
});

router.get("/getImageRecipe/:id", (req,res) => {
  const idRecipe =req.params.id;
  console.log(idRecipe);
  const sql = `SELECT PHOTO_NAME FROM photo WHERE photo.RECIPE_ID = ${idRecipe}`;
  connection.query(sql, (err, result) => {

    if (err) throw err;
    console.log("Récupération photo recette");
    res.send(result[0]);
  });
});

//  app.post("/toggleLiked", (req, res) => {
//   const liked = req.body.liked === true ? "1" : "0";
//   const id = req.body.id;
//   const sql = `UPDATE love SET liked ="${liked}" WHERE id=${id}`;

//   connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     connection.query(
//       `SELECT * FROM recipes WHERE id=${id}`,
//       (err, result) => {
//         if (err) throw err;
//         result[0].liked == 0
//           ? (result[0].liked = false)
//           : (result[0].liked = true);
//         res.send(JSON.stringify(result[0]));
//       }
//     );
//   });
// });

module.exports = router;
