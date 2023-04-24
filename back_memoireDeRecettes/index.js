const express = require("express");
const mysql = require("mysql");
const cookie = require("cookie-parser");
const app = express();
const routes = require("./routes");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipesmemory",
});

// middleware qui permet d'extraire les cookies
app.use(cookie());
// cela permet d'extraire le body qui est stringify au format object JS
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});

// Middleware pour gérer les requêtes JSON

app.use(routes);

// si la route n'a pas été trouvé cela renvoie un status 404
app.use('*', (req, res) => {
  res.status(404).end();
})

// on écoute sur le port 8000
app.listen(8000);


