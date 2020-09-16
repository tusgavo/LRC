const connection = require("../helpers/connection");

class AtletasDAO {
  static obterAtletas() {
    const sql = "SELECT * FROM atletas";
    connection.query(sql, (err, res) => {
      if (err) throw err;
      res.json(res);
    });
  }
  static deletarAtleta(id) {
    const sql = "DELETE FROM atletas WHERE id =?";
    connection.query(sql, (err, res) => {
      if (err) throw err;
      res.json(res);
    });
  }

  static enviarAtleta() {
    const sql = "INSERT FROM atletas SET?";
    connection.query(sql, (err, res) => {
      if(err) throw err;
      res.json(res);
    })
  }
}

module.exports = AtletasDAO;