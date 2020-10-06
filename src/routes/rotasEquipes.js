const express = require("express");
const Equipe = require("../models/equipes");
const BancoUtils = require("../helpers/bancoUtils");
const Usuario = require("../models/usuarios");
const con = require("../helpers/banco");
const routers = express.Router();

routers.get("/", (req, res) => {
  var tokenCookie = req.cookies["token"];
  if (tokenCookie == null) {
    res.redirect(301, "/login");
  } else {
    var idUsuario = req.cookies["id_usuario"];
    var equipe = BancoUtils.selectEquipes(
      Equipe.tabela,
      Usuario.chavePrimaria,
      idUsuario,
      (r) => {
        let equipeUsuario = JSON.parse(JSON.stringify(r));
        if (equipeUsuario.length === 0) {
          res.json({ sucesso: false });
        } else {
          res.cookie("id_equipe", equipeUsuario[0].id_equipe);
          res.json(r);
        }
      }
    );
  }
});

routers.post("/", (req, res) => {
  const novaEquipe = new Equipe(req.body);
  BancoUtils.insert(novaEquipe, Equipe.tabela, (r) => {
    res.json(r);
  });
});

module.exports = routers;
