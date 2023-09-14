const express = require("express");
const router = require("express").Router();
const connection = require("../../database/index");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { isNumberObject } = require("util/types");
// Configuration du stockage des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // ici le chemin du dossier de destination
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname); // path.extname() est une méthode "path" de Node.js. Elle prend un chemin de fichier en argument et retourne l'extension du fichier(JPEG,PNG..).
    const fileName = file.fieldname + uniqueSuffix + fileExtension;
    cb(null, fileName); // Utilisez un nom de fichier unique
  },
});

const upload = multer({ storage });

router.get("/image/:filename", (req, res) => {
  const { filename } = req.params;
  const readStream = fs.createReadStream(`images/${filename}`);
  readStream.pipe(res);
});

router.post("/addRecipe", upload.single("image"), (req, res) => {
  const data = JSON.parse(req.body.data);
  const image = req.file;

  const title = data.titleRecipe;
  const comment = data.commentRecipe;
  const price = data.priceEstimation;
  const difficulty = data.difficultyEstimation;
  const recipeDate = data.recipeCreationDate;
  const recipeNumberplate = data.coverNumberRecipe;
  const origin = data.origin;
  const prepaTime = data.prepaTime;
  const prepaTime2 = data.prepaTime2;
  const prepa = prepaTime + "h" + prepaTime2 + "min";
  const cookTime = data.cookTime;
  const cookTime2 = data.cookTime2;
  const cook = cookTime + " h" + cookTime2 + " min";
  const season = data.season;
  const cookType = data.cookType;
  const dietType = data.dietType;
  const mealType = data.mealType;
  const ustensils = data.ustensil;
  const ingredients = data.ingredient;
  const recipeExplication = data.descriptions;
  const idUserConnected = data.idUserConnected;
  const nameImage = image.filename;

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
    let resultBack = req.body;
    resultBack.id = result.insertId;

    ustensils.map((ustensil) => {
      const sqlInsertUstensil = `INSERT INTO used (RECIPE_ID, USTENSIL_ID) VALUES (?, ?)`;
      const value = [result.insertId, ustensil];

      return new Promise((resolve, reject) => {
        connection.query(sqlInsertUstensil, value, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });
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
              const ingredientId = rows[0].INGREDIENT_ID;
              const sqlInsertIngredient = `INSERT INTO contain (RECIPE_ID, INGREDIENT_ID, INGREDIENT_QUANTITY, MEASURE_UNITY) VALUES (?, ?, ?, ?)`;
              const value = [result.insertId, ingredientId, quantitie, measure];
              connection.query(sqlInsertIngredient, value, (err, result) => {
                if (err) {
                  reject(err);
                } else {
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
    for (let i = 0; i < recipeExplication.length; i++) {
      const sqlInsertExplication = `INSERT INTO stage (STAGE_RECIPE_EXPLICATION, RECIPE_ID, STAGE_NUM) VALUES (?, ?, ?)`;
      const values = [
        recipeExplication[i],
        result.insertId, //récupération de l'ID de la recette précédemment insérée
        i + 1,
      ];
      connection.query(sqlInsertExplication, values, (err, result) => {
        if (err) throw err;
      });
    }
    try {
      const sql = `INSERT INTO photo (PHOTO_NAME, RECIPE_ID) VALUES ('${nameImage}', ${result.insertId}) `;
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    } catch (error) {
      console.error(error);
      res.send(false);
    }
  });
});

{
  /*****************************************récup type repas, origin*******************************************************/
}
router.get("/getMealType", (req, res) => {
  const sql = `SELECT * FROM meal_type`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
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
    res.send(JSON.stringify(result));
  });
});

{
  /*****************************************récup type de régime*******************************************************/
}
router.get("/getDietType", (req, res) => {
  const sql = `SELECT * FROM diet_type ORDER BY DIET_TYPE_ID DESC`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
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
    res.send(JSON.stringify(result));
  });
});

router.get("/getIngredient", (req, res) => {
  const sqlIngredient = `SELECT * FROM ingredient`;
  connection.query(sqlIngredient, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getRecipes", (req, res) => {
  const limit = req.query.limit;
  let sql = `SELECT * FROM recipe as r 
  INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
  JOIN user ON r.USER_Id = user.USER_ID
  JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
  JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
  JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
  JOIN season ON r.SEASON_ID = season.SEASON_ID
  JOIN cooking_type ON r.COOKING_TYPE_ID = cooking_type.COOKING_TYPE_ID`;
  sql += ` ORDER BY r.RECIPE_PUBLICATION_DATE DESC`;
if (limit) {
 sql += ` LIMIT ${limit}`;
}


  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getRecipesByUser/:userId", (req, res) => {
  const limit = req.query.limit;
  const user = req.params.userId;
  let sql;
  if (limit) {
    sql = `SELECT * FROM recipe as r 
       INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
       JOIN user ON r.USER_Id = user.USER_ID
       JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
       JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
       JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
       JOIN season ON r.SEASON_ID = season.SEASON_ID
       JOIN cooking_type ON r.COOKING_TYPE_ID = cooking_type.COOKING_TYPE_ID
       WHERE r.USER_ID = ${user}
       LIMIT ${limit}
       
       `;
  } else {
    sql = `SELECT * FROM recipe as r 
        INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
        JOIN user ON r.USER_Id = user.USER_ID
        JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
        JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
        JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
        JOIN season ON r.SEASON_ID = season.SEASON_ID
        JOIN cooking_type ON r.COOKING_TYPE_ID = cooking_type.COOKING_TYPE_ID
        WHERE r.USER_ID = ${user}
        `;
  }

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getDaysRecipe/:currentSeason", (req, res) => {
  const currentSeason = req.params.currentSeason;

  let sql = `SELECT * FROM recipe as r 
                 INNER JOIN photo ON r.RECIPE_ID = photo.RECIPE_ID
                 JOIN user ON r.USER_Id = user.USER_ID
                 JOIN type_de_repas ON r.ID_TYPE_DE_REPAS = type_de_repas.ID_TYPE_DE_REPAS
                 JOIN meal_type ON r.MEAL_TYPE_ID = meal_type.MEAL_TYPE_ID 
                 JOIN diet_type ON r.DIET_TYPE_ID = diet_type.DIET_TYPE_ID
                 JOIN season ON r.SEASON_ID = season.SEASON_ID
                 WHERE r.SEASON_ID = ${currentSeason}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
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
    res.send(JSON.stringify(result));
  });
});

router.get("/getRecipeByUser/:idUser", (req, res) => {
  const idUser = req.params.idUser;
  const limit = req.query.limit;
  
  let sql = `
  SELECT r.*, p.*, u.*, s.*, t.*, m.*, d.*, c.*, GROUP_CONCAT(stage.STAGE_RECIPE_EXPLICATION ) AS stages
  FROM love AS l
  JOIN recipe AS r ON l.RECIPE_ID = r.RECIPE_ID
  JOIN photo AS p ON r.RECIPE_ID = p.RECIPE_ID
  JOIN user AS u ON r.USER_Id = u.USER_ID
  JOIN season AS s ON r.SEASON_ID = s.SEASON_ID
  JOIN type_de_repas AS t ON r.ID_TYPE_DE_REPAS = t.ID_TYPE_DE_REPAS
  JOIN meal_type AS m ON r.MEAL_TYPE_ID = m.MEAL_TYPE_ID 
  JOIN diet_type AS d ON r.DIET_TYPE_ID = d.DIET_TYPE_ID
  JOIN cooking_type AS c ON r.COOKING_TYPE_ID = c.COOKING_TYPE_ID
  LEFT JOIN stage ON r.RECIPE_ID = stage.RECIPE_ID
  WHERE l.USER_ID = ${idUser}
  GROUP BY r.RECIPE_ID`;
  sql += ` ORDER BY r.RECIPE_PUBLICATION_DATE DESC`;
  if (limit !== 'NaN') {
   sql += ` LIMIT ${limit}`; 
  }
  
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.send(JSON.stringify(result));
  });
});

router.get("/getUstensilsByIdRecipe/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sqlUstensil = `SELECT * FROM used as u 
                        LEFT JOIN ustensil ON u.USTENSIL_ID = ustensil.USTENSIL_ID
                        WHERE u.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlUstensil, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getIngredientsByIdRecipe/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sqlIngredient = `SELECT * FROM contain as c
                        LEFT JOIN ingredient ON c.INGREDIENT_ID = ingredient.INGREDIENT_ID
                        WHERE c.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlIngredient, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getNotice/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sqlNotice = `SELECT * FROM notice 
                      JOIN user ON notice.USER_Id = user.USER_ID
                        WHERE notice.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlNotice, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/rating/:recipeId", (req, res) => {
  const idRecipe = req.params.recipeId;
  const sqlNotice = `SELECT AVG(NOTICE_STAR_NUMBER) AS AVERAGE_SCORE
                     FROM notice
                     WHERE RECIPE_ID = ?`;

  connection.query(sqlNotice, [idRecipe], (err, result) => {
    if (err) {
      throw err;
    }

    if (result.length === 0) {
      res.status(404).send("Recette non trouvée");
      return;
    }
    const averageScore = result[0].AVERAGE_SCORE;
    const sqlUpdateRecipe = `UPDATE recipe SET AVERAGE_SCORE = ? WHERE RECIPE_ID = ?`;
    connection.query(
      sqlUpdateRecipe,
      [averageScore, idRecipe],
      (updateErr, updateResult) => {
        if (updateErr) {
          throw updateErr;
        }
        res.send("Moyenne des notes mise à jour avec succès !");
      }
    );
  });
});

router.get("/getStage/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sqlNotice = `SELECT * FROM stage
                        WHERE stage.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlNotice, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.get("/getImageRecipe/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sql = `SELECT PHOTO_NAME FROM photo WHERE photo.RECIPE_ID = ${idRecipe}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

router.post("/addTrickRecipe/:id/:idUser", (req, res) => {
  const idRecipe = req.params.id;
  const idUser = req.params.idUser;
  const astuce = req.body.astuce;

  const sqlCheckExistingTrick = `SELECT * FROM trick_recipe
  WHERE RECIPE_ID = ? AND USER_ID = ?`;

  const checkValues = [idRecipe, idUser];

  connection.query(
    sqlCheckExistingTrick,
    checkValues,
    (checkErr, checkResult) => {
      if (checkErr) {
        throw checkErr;
      }
      if (checkResult.length > 2) {
        res
          .status(200)
          .send("Vous avez déjà posté 3 astuces pour cette recette.");
      } else {
        const sqlInsert = `INSERT INTO trick_recipe
  (RECIPE_ID, USER_ID, TRICK_RECIPE_TEXT) VALUES (?, ?, ?)`;
        const values = [idRecipe, idUser, astuce];

        connection.query(sqlInsert, values, (insertErr, insertResult) => {
          if (insertErr) {
            throw insertErr;
          }
          res.status(200).send("Astuce ajoutée avec succès !");
        });
      }
    }
  );
});

router.get("/getTrick/:id", (req, res) => {
  const idRecipe = req.params.id;
  const sqlTrick = `SELECT * FROM trick_recipe as tr
                      JOIN user ON tr.USER_Id = user.USER_ID
                        WHERE tr.RECIPE_ID = ${idRecipe}`;
  connection.query(sqlTrick, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.post("/addNotice/:id/:idUser", (req, res) => {
  const idRecipe = req.params.id;
  const idUser = req.params.idUser;
  const score = req.body.score;
  const notice = req.body.notice;

  const sqlCheckExistingNotice = `SELECT * FROM notice
  WHERE RECIPE_ID = ? AND USER_ID = ?`;
  const checkValues = [idRecipe, idUser];
  connection.query(
    sqlCheckExistingNotice,
    checkValues,
    (checkErr, checkResult) => {
      if (checkErr) {
        throw checkErr;
      }
      if (checkResult.length > 0) {
        res
          .status(400)
          .send("L'utilisateur a déjà posté une note pour cette recette.");
      } else {
        const sqlInsert = `INSERT INTO notice
      (RECIPE_ID, USER_ID, NOTICE_STAR_NUMBER, NOTICE_RECIPE) VALUES (?, ?, ?, ?)`;
        const values = [idRecipe, idUser, score, notice];

        connection.query(sqlInsert, values, (insertErr) => {
          if (insertErr) {
            throw insertErr;
          }
          res.status(200).send("Note ajoutée avec succès !");
        });
      }
    }
  );
});

module.exports = router;
