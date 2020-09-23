class Usuario {
  static get tabela() {
    return "usuarios";
  }
  constructor(objUsuario) {
    this.nome = "";
    this.senha = "";
    this.email = "";
    Object.assign(this, objUsuario);
  }
}
module.exports = Usuario;
