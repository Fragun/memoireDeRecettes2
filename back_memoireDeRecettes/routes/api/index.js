const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiRecette = require("./recette");
const apiUpdate = require("./update");
const apiRecipeModif = require("./recipeModif");
const apiCookingType = require("./cookingType");
const apiDietType = require("./dietType");
const apiMealType = require("./mealType");
const apiMoment = require("./moment");
const apiLove = require("./love");
const apiFilter = require("./filter");
const apiShopping = require("./shopping");
const apiLikeUser = require("./likeUser")

router.use("/users", apiUsers),
router.use('/auth', apiAuth),
router.use('/recette', apiRecette),
router.use("/update", apiUpdate),
router.use("/recipeModif", apiRecipeModif),
router.use("/cookingType", apiCookingType),
router.use("/dietType", apiDietType),
router.use("/mealType", apiMealType),
router.use("/moment", apiMoment),
router.use("/love", apiLove),
router.use("/filter", apiFilter),
router.use("/shopping", apiShopping),
router.use("/likeUser", apiLikeUser),

module.exports = router;
