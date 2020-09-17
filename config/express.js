const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const con = require("../helpers/connection");

const rotasAtletas = require("../routes/rotaAtletas");

const dirPublico = path.join(__dirname, "../public");

module.exports = function () {
  const app = express();
  app.use(express.static(dirPublico));
  app.set("view engine", "html");
  app.engine("html", require("hbs").__express);

  app.use("/", require("../routes/viewsRoutes"));

  app.use(bodyParser.json());

  app.use("/rotaAtletas", rotasAtletas);

  app.get("/atletasBack", (req, res) => {
    con.query("SELECT * FROM atletas", (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
  return app;
};
