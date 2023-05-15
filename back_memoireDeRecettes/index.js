const express = require("express");
const cookie = require("cookie-parser");

const bodyParser = require("body-parser");

// on initialise l'application
const app = express();
const routes = require("./routes");
// Middleware pour éviter les problèmes de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// middleware qui permet d'extraire les cookies
app.use(cookie());
// cela permet d'extraire le body qui est stringify au format object JS
app.use(bodyParser.json({ limit: "50mb" }));
// Middleware pour gérer les requêtes JSON
app.use(routes);
// si la route n'a pas été trouvé cela renvoie un status 404
app.use('*', (req, res) => {
  res.status(404).end();
})
// on écoute sur le port 8000
app.listen(8000);