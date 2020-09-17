const connection = require("../helpers/connection");

class AtletasDAO {
  static obterAtletas() {
    connection.query("SELECT * FROM atletas", (err, res) => {
      if (!err) {
        return res;
      } else {
        console.log(err);
      }
    });
  }
  
  // static deletarAtleta(id) {
  //   const sql = "DELETE FROM atletas WHERE id =?";
  //   connection.query(sql, (err, res) => {
  //     if (err) throw err;
  //     res.json(res);
  //   });
  // }

  // static enviarAtleta() {
  //   const sql = "INSERT INTO atletas (id_atleta, nomeAtleta, cpf, posicao)";
  //   connection.query(sql, (err, res) => {
  //     if(err) throw err;
  //     res.json(res);
  //   })
  // }
}

module.exports = AtletasDAO;
