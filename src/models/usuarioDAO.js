const con = require('../helpers/banco');

class UsuarioDAO {
   buscaPorUsuarioESenha(usuario, cb){
       const sql = "select * from usuarios where email=? and senha=?";
       con.query(sql, [usuario.email, usuario.senha], (err,res) => {
            if(err) throw err;
            else cb(res);
       });
   }
}

module.exports = UsuarioDAO;