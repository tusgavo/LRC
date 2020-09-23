const express = require("express");
const Atletas = require("../models/atletas");
const BancoUtils = require("../helpers/bancoUtils");
const routers = express.Router();

routers.get("/", (req, res) => {
  BancoUtils.select(Atletas.tabela, (atletas1) => {
    res.json(atletas1);
  });
});

routers.post("/", (req, res) => {
  const novoAtleta = new Atletas(req.body);
  novoAtleta.senha = novoAtleta.senha;
  BancoUtils.insert(atletas, Atletas.tabela, (r) => {
    res.json(r);
  });
});

module.exports = routers;