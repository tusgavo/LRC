const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const rotasTeste = require("./src/routes/rotasTeste");
const rotasAtletas = require("./src/routes/rotasAtletas");
const con = require("./src/helpers/banco")
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/rotasAtletas", (req, res) => {
  con.query("SELECT * FROM atletas", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/equipe", (req, res) => {
  res.sendFile(__dirname + "/public/equipe.html");
});

app.get("/atletas", (req, res) => {
  res.sendFile(__dirname + "/public/atleta.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/cadastro.html");
});

app.get("/contRegister", (req, res) => {
  res.sendFile(__dirname + "/public/cadastro2.html");
});

app.get("/noticia1", (req, res) => {
  res.sendFile(__dirname + "/public/noticia1.html");
});

app.get("/noticia2", (req, res) => {
  res.sendFile(__dirname + "/public/noticia2.html");
});

app.get("/noticia3", (req, res) => {
  res.sendFile(__dirname + "/public/noticia3.html");
});

app.get("/modal", (req, res) => {
  res.sendFile(__dirname + "/public/modal.html");
});

app.use('/rotasTeste', rotasTeste);

app.use('/rotasAtletas', rotasAtletas);

app.listen(3000, () => {
  console.log("Servidor rodando");
})