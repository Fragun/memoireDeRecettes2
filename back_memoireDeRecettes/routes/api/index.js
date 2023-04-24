const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiRequete = require("./recette");

router.use("/users", apiUsers);
router.use('/auth', apiAuth);
router.use('/recette', apiRequete);

module.exports = router;
