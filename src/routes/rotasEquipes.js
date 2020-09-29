const express = require("express");
const Equipe = require("../models/equipes");
const BancoUtils = require("../helpers/bancoUtils");
const Usuario = require("../models/usuarios");
const routers = express.Router();

routers.get("/", (req, res) => {
  var tokenCookie = req.cookies["token"];
  if (tokenCookie == null) {
    res.redirect(301, "/login");
  } else {
    var idUsuario = req.cookies["id_usuario"];
    BancoUtils.selectEquipes(
      Equipe.tabela,
      Usuario.chavePrimaria,
      idUsuario,
      equipes1 => {
        res.json(equipes1);
      }
    );
  }
});

routers.post("/", (req, res) => {
  const novaEquipe = new Equipe(req.body);
  BancoUtils.insert(novaEquipe, Equipe.tabela, r => {
    res.json(r);
  });
});

module.exports = routers;
