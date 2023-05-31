const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiRecette = require("./recette");
const apiUpdate = require("./update");
const apiRecipeModif = require("./recipeModif.js")

router.use("/users", apiUsers);
router.use('/auth', apiAuth);
router.use('/recette', apiRecette);
router.use("/update", apiUpdate);
router.use("/recipeModif", apiRecipeModif)

module.exports = router;
