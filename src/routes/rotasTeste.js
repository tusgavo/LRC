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
  teste.senha = teste.senha;
  BancoUtils.insert(teste, Teste.tabela, (r) => {
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
