const express = require("express");
const routers = express.Router();
const AtletasDAO = require("../repositorios/atletasDAO");

routers.get("/", (req, res) => {
  AtletasDAO.obterAtletas();  
});

// routers.delete("/:id", (req, res) => {
//   AtletasDAO.deletarAtleta(req.params.id);
// });

// routers.post("/", (req, res) => {
//   AtletasDAO.enviarAtleta();
// });

module.exports = routers;
