const express = require("express");
const Teste = require("../models/teste");
const BancoUtils = require("../helpers/bancoUtils");
// const segredo = "AluninhoFeliz";
const routers = express.Router();

routers.get("/", (req, res) => {
  BancoUtils.select(Teste.tabela, (testes) => {
    res.json(testes);
  });
});

routers.post("/", (req, res) => {
  const teste = new Teste(req.body);
  BancoUtils.insert(teste, Teste.tabela, (r) => {
    res.json(r);
  });
});

routers.put("/", (req, res) => {
  const testeNovo = new Teste(req.body);
  BancoUtils.put(
    testeNovo,
    Teste.tabela,
    { key: "id_atleta", value: testeNovo.id_atleta },
    (r) => {
      res.json(r);
    }
  );
});

routers.delete("/:id_atleta", (req, res) => {
  BancoUtils.delete(
    Teste.tabela,
    { key: "id_atleta", value: req.params.id_atleta },
    (r) => {
      res.json(r);
    }
  );
});

module.exports = routers;
