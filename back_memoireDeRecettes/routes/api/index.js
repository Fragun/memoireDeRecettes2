const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiRecette = require("./recette");
const apiUpdate = require("./update");

router.use("/users", apiUsers);
router.use('/auth', apiAuth);
router.use('/recette', apiRecette);
router.use("/update", apiUpdate);


module.exports = router;
