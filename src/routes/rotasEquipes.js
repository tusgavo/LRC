const express = require("express");
const Equipe = require("../models/equipes");
const BancoUtils = require("../helpers/bancoUtils");
const routers = express.Router();

routers.get("/", (req, res) => {
  console.log("teste");
  var tokenCookie = req.cookies["token"];
  if (tokenCookie == null) {
    res.redirect(301, "/login");
  } else {
    BancoUtils.select(Equipe.tabela, (equipes1) => {
      res.json(equipes1);
    });
  }
});

routers.post("/", (req, res) => {
  const novaEquipe = new Equipe(req.body);
  BancoUtils.insert(novaEquipe, Equipe.tabela, (r) => {
    res.json(r);
  });
});

module.exports = routers;