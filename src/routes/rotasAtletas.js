const express = require("express");
const Atletas = require("../models/newAtleta");
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

// routers.put("/", (req, res) => {
//   const atletaNovo = new Atletas(req.body);
//   BancoUtils.put(
//     atletaNovo,
//     Atletas.tabela,
//     { key: "id", value: atletaNovo.id },
//     (r) => {
//       res.json(r);
//     }
//   );
// });

// routers.delete("/:id", (req, res) => {
//   BancoUtils.delete(
//     Atletas.tabela,
//     { key: "id", value: req.params.id },
//     (r) => {
//       res.json(r);
//     }
//   );
// });

module.exports = routers;
