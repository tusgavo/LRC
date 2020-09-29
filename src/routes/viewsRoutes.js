const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../../public/index.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../../public/login.html"));
});

router.get("/equipe", function (req, res) {
  if (req.cookies.token) {
    res.sendFile(path.resolve(__dirname + "/../../public/equipe.html"));
  } else {
    res.redirect("/login");
  }
});

router.get("/atletas", function (req, res) {
  if (req.cookies.token) {
    res.sendFile(path.resolve(__dirname + "/../../public/atleta.html"));
  } else {
    res.redirect("/login");
  }
});

router.get("/newTeam", function (req, res) {
  if (req.cookies.token) {
    res.sendFile(path.resolve(__dirname + "/../../public/novaEquipe.html"));
  } else {
    res.redirect("/login");
  }
});

router.get("/noticia1", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../../public/noticia1.html"));
});

router.get("/noticia2", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../../public/noticia2.html"));
});

router.get("/noticia3", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../../public/noticia3.html"));
});

module.exports = router;