const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const con = require("../helpers/banco");
const express = require("express");
const app = express();
const path = require("path");
// const rotasTeste = require("../routes/rotasTeste");
const rotasAtletas = require("../routes/rotasAtletas");
const rotasUsuarios = require("../routes/rotasUsuarios");
const rotasEquipes = require("../routes/rotasEquipes");

module.exports = function () {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static('public'))
  app.use(cookieParser());

  const indexRoute = require("../routes/index");
  app.use("/", indexRoute);

  app.use("/rotasAtletas", rotasAtletas);

  app.use("/rotasUsuarios", rotasUsuarios);

  app.use("/rotasEquipes", rotasEquipes);

  return app;
};
