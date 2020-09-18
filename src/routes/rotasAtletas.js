const express = require("express");
const Atleta = require("../models/newAtleta");
const BancoUtils = require("../helpers/bancoUtils");
const Atletas = require("../models/newAtleta");
// const segredo = "AluninhoFeliz";
const routers = express.Router();

routers.get("/", (req, res) => {
  BancoUtils.select(Atleta.tabela, (atletas) => {
    res.json(atletas);
  });
});

routers.post("/", (req, res) => {
  const teste = new Atleta(req.body);
  atleta.senha = atleta.senha;
  BancoUtils.insert(atleta, Atletas.tabela, (r) => {
    res.json(r);
  });
});

routers.put("/", (req, res) => {
  const testeNovo = new Teste(req.body);
  BancoUtils.put(
    testeNovo,
    Teste.tabela,
    { key: "id", value: testeNovo.id },
    (r) => {
      res.json(r);
    }
  );
});

routers.delete("/:id", (req, res) => {
  BancoUtils.delete(
    Teste.tabela,
    { key: "id", value: req.params.id },
    (r) => {
      res.json(r);
    }
  );
});

module.exports = routers;
