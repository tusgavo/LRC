const express = require("express");
const Equipe = require("../models/equipes");
const BancoUtils = require("../helpers/bancoUtils");
const UsuarioDAO = require("../models/usuarioDAO");
const Usuario = require("../models/equipes");
const jwt = require("jsonwebtoken");
const segredo = "Teste";
const routers = express.Router();

routers.post("/auth", (req, res) => {
  const usuario = new Usuario(req.body);
  new UsuarioDAO().buscaPorUsuarioESenha(usuario, resposta => {
    if (resposta.length > 0) {
      const token = jwt.sign(
        {
          email: resposta[0].email,
          senha: resposta[0].senha
        },
        segredo,
        { expiresIn: "24h" }
      );
      res.cookie("token", token).redirect("/equipe");
      //res.json(token);
    } else {
      res.send("usuario errado")
    }
  });
});


routers.get("/", (req, res) => {
  BancoUtils.select(Equipe.tabela, equipes => {
    res.json(equipes);
  });
});

routers.post("/", (req, res) => {
  const equipe = new Equipe(req.body);
  BancoUtils.insert(equipe, Equipe.tabela, r => {
    res.json(r);
  });
});

routers.put("/", (req, res) => {
  const equipeNovo = new Equipe(req.body);
  BancoUtils.put(
    equipeNovo,
    Equipe.tabela,
    { key: "id_equipe", value: equipeNovo.id_equipe },
    r => {
      res.json(r);
    }
  );
});

routers.delete("/:id_equipe", (req, res) => {
  BancoUtils.delete(
    Equipe.tabela,
    { key: "id_equipe", value: req.params.id_equipe },
    r => {
      res.json(r);
    }
  );
});

module.exports = routers;
