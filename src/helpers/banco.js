const mysql = require("mysql");
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '123456',
  database: 'lrc'
});

con.connect(err => {
  if (!err) {
    console.log("DB conectada");
  } else {
    console.log(
      "Falha de conexão na DB \n Erro: " + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = con;