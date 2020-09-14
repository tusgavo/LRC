const express = require("express");
const routers = express.Router();
const AtletasDAO = require('../repositorios/atletasDAO');

routers.get('/', (req, res) => {
    AtletasDAO.obterAtletas();
});


module.exports = routers;