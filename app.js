const express = require("express"),
    path = require('path'),
    app = express(),
    PORT = 3000;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use("/", require("./routes/viewsRoutes"));

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});