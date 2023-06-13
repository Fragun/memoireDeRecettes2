const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiRecette = require("./recette");
const apiUpdate = require("./update");
const apiRecipeModif = require("./recipeModif");
const apiCookingType = require("./cookingType");
const apiDietType = require("./dietType");

router.use("/users", apiUsers);
router.use('/auth', apiAuth);
router.use('/recette', apiRecette);
router.use("/update", apiUpdate);
router.use("/recipeModif", apiRecipeModif)
router.use("/cookingType", apiCookingType),
router.use("/dietType", apiDietType),

module.exports = router;
