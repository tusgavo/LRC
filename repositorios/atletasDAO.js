const connection = require("../helpers/connection");

class AtletasDAO {
  static obterAtletas() {
    const sql = "SELECT * FROM atletas";
    connection.query(sql, (err, res) => {
      if (err) throw err;
      res.json(res);
    });
  }
}

module.exports = AtletasDAO;