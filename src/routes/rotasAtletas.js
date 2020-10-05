const express = require("express");
const Atleta = require("../models/atletas");
const BancoUtils = require("../helpers/bancoUtils");
const routers = express.Router();

routers.get("/", (req, res) => {
  var idUsuario = req.cookies["id_usuario"];
  console.log(idUsuario);
  BancoUtils.selectAtletas(Atleta.tabela, idUsuario, atletas => {
    res.json(atletas);
  });
});

routers.post("/", (req, res) => {
  const atleta = new Atleta(req.body);
  BancoUtils.insert(atleta, Atleta.tabela, r => {
    res.json(r);
  });
});

routers.put("/", (req, res) => {
  const novoAtleta = new Atleta(req.body);
  BancoUtils.put(
    novoAtleta,
    Atleta.tabela,
    { key: "id_atleta", value: novoAtleta.id_atleta },
    r => {
      res.json(r);
    }
  );
});

routers.delete("/:id_atleta", (req, res) => {
  BancoUtils.delete(
    Atleta.tabela,
    { key: "id_atleta", value: req.params.id_atleta },
    r => {
      res.json(r);
    }
  );
});

module.exports = routers;
