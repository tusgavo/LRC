const app = require("./config/express");

app().listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta " + 3000);
});
