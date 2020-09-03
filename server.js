const express = require("express"),
    app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get("/", (req, res) => res.send("Servidor aberto"));