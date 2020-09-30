const express = require("express");
// const Equipe = require("../models/usuarios");
const BancoUtils = require("../helpers/bancoUtils");
const UsuarioDAO = require("../models/usuarioDAO");
const Usuario = require("../models/usuarios");
const jwt = require("jsonwebtoken");
const segredo = "Teste";
const routers = express.Router();

routers.post("/auth", (req, res) => {
  const usuario = new Usuario(req.body);
  new UsuarioDAO().autenticacaoUsuarioESenha(usuario, resposta => {
    if (resposta.length > 0) {
      const usuarioId = resposta[0].id_usuario;
      res.cookie("id_usuario", usuarioId);
      const token = jwt.sign(
        {
          email: resposta[0].email,
          senha: resposta[0].senha
        },
        segredo,
        { expiresIn: "24h" }
      );
      res.cookie("token", token).redirect("/equipe");
    } else {
      res.redirect(301, "/login");
    }
  });
});

routers.get("/", (req, res) => {
  BancoUtils.select(Usuario.tabela, usuarios => {
    res.json(usuarios);
  });
});

routers.post("/", (req, res) => {
  const usuario = new Usuario(req.body);
  BancoUtils.insert(usuario, Usuario.tabela, r => {
    res.json(r);
  });
});

routers.put("/", (req, res) => {
  const usuarioNovo = new Usuario(req.body);
  BancoUtils.put(
    usuarioNovo,
    Usuario.tabela,
    { key: "id_usuario", value: usuarioNovo.id_usuario },
    r => {
      res.json(r);
    }
  );
});

routers.delete("/:id_usuario", (req, res) => {
  BancoUtils.delete(
    Usuario.tabela,
    { key: "id_usuario", value: req.params.id_usuario },
    r => {
      res.json(r);
    }
  );
});

module.exports = routers;
