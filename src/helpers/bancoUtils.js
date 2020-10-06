const con = require("./banco");

class BancoUtils {
  static insert(obj, tb, cb) {
    con.query(`INSERT INTO ${tb} SET ?`, obj, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }

  static select(tb, cb) {
    con.query(`SELECT * FROM ${tb}`, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }

  static selectEquipes(tb, pk, id, cb) {
    con.query(
      `SELECT * FROM ${tb} 
        WHERE ${pk} = ${id}`,
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  }

  static selectAtletas(tb, id, cb) {
    con.query(
      `SELECT * FROM atletas a, equipes e
        WHERE a.id_equipe = e.id_equipe
        AND e.id_usuario = ${id}`,
      // `SELECT * FROM atletas a, equipes e
      // WHERE a.id_equipe = e.id_equipe 
      // AND e.id_usuario = ${id}`
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  }

  static delete(tb, pk, cb) {
    con.query(
      `DELETE FROM ${tb} 
        WHERE ${pk.key}=?`,
      pk.value,
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  }

  static put(obj, tb, pk, cb) {
    con.query(
      `UPDATE ${tb} SET ? where ${pk.key}=?`,
      [obj, pk.value],
      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  }
}

module.exports = BancoUtils;
