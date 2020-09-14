const express = require("express"),
  path = require("path"),
  app = express(),
  bodyParser = require("body-parser"),
  con = require("./helpers/connection"),
  publicDirectory = path.join(__dirname, "./public");

app.use(express.static(publicDirectory));

app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.use("/", require("./routes/viewsRoutes"));

app.use(bodyParser.json());

con.connect(err => {
  if (!err) {
    console.log("DB conectada");
  } else {
    console.log(
      "Falha de conexão na DB \n Erro: " + JSON.stringify(err, undefined, 2)
    );
  }
});

app.get("/atletasBack", (req, res) => {
  con.query("SELECT * FROM atletas", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta " + 3000);
});
