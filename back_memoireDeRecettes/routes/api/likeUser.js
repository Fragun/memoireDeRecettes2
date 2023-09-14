const router = require("express").Router();
const connection = require("../../database/index");

router.post("/likeUser", async (req, res) => {
  const idUser = req.body.idUser;
  const idUserLiked = req.body.idUserLiked;

  const sqlVerify = `SELECT * FROM user_likes WHERE USER_ID = ? AND USER_ID_LIKE LIKE ?`;
  const valuesVerify = [idUser, idUserLiked];
  connection.query(sqlVerify, valuesVerify, (err, result) => {
    if (result.length > 0) {
      console.error("déjà liké");
    } else {
      const sqlCreate = `INSERT INTO user_likes (USER_ID, USER_ID_LIKE) VALUES (?, ?)`;
      const values = [idUser, idUserLiked];
      connection.query(sqlCreate, values, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(true));
      });
    }
  });
});

router.delete("/deleteLikeUser/:idUser/:idUserLiked", async (req, res) => {
  const userId = req.params.idUser;
  const userIdLiked = req.params.idUserLiked;

  const sqlDelete = `DELETE FROM user_likes WHERE USER_ID = ? AND USER_ID_LIKE = ?`;
  const values = [userId, userIdLiked];

  connection.query(sqlDelete, values, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(true));
  });
});

router.get("/likedUsers/:idUser", async (req, res) => {
  const { idUser } = req.params;
  const sql = `SELECT * FROM user_likes 
               JOIN user ON user_likes.USER_ID_LIKE = user.USER_ID
               WHERE user_likes.USER_ID = ?`;

  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, idUser, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur lors de la récupération des utilisateurs aimés.",
    });
  }
});
module.exports = router;
